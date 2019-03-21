#!/usr/bin/env node

const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const traverse = require('babel-traverse').default;
const { transformFromAst, transform } = require('babel-core');

let ID = 0;
const currentPath = process.cwd();

function parseDependecies(filename) {
  const rawCode = readFileSync(filename, 'utf-8');
  const ast = transform(rawCode).ast;
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration(path) {
      const sourcePath = path.node.source.value;
      dependencies.push(sourcePath);
    },
  });
  const es5Code = transformFromAst(ast, null, {
    presets: ['env'],
  }).code;
  return {
    id: ID++,
    code: loader(filename, es5Code),
    dependencies,
    filename,
  };
}

function parseGraph(entry) {
  const entryAsset = parseDependecies(path.resolve(currentPath, entry));
  const graph = [entryAsset];

  for (const asset of graph) {
    if (!asset.idMapping) {
      asset.idMapping = {};
    }
    const dir = path.dirname(asset.filename);
    asset.dependencies.forEach(dependencyPath => {
      const absolutePath = path.resolve(dir, dependencyPath);
      const denpendencyAsset = parseDependecies(absolutePath);
      const id = denpendencyAsset.id;
      asset.idMapping[dependencyPath] = id;
      graph.push(denpendencyAsset);
    });
  }
  return graph;
}

function build(graph) {
  let modules = '';
  graph.forEach(asset => {
    modules += `${asset.id}:[
        function(require,module,exports){${asset.code}},
        ${JSON.stringify(asset.idMapping)},
      ],`;
  });
  const wrap = `
  (function(modules) {
    function require(id) {
      const [fn, idMapping] = modules[id];
      function childRequire(filename) {
        return require(idMapping[filename]);
      }
      const newModule = {exports: {}};
      fn(childRequire, newModule, newModule.exports);
      return newModule.exports
    }
    require(0);
  })({${modules}});`;
  return wrap;
}

function loader(filename, code) {
  if (/index/.test(filename)) {
    console.log('this is loader ');
  }
  return code;
}

const graph = parseGraph(path.resolve(currentPath, 'index.js'));

console.log(build(graph));
