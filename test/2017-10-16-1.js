// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function example(a, b) {
    return a + b
}

example(1, true)    // ✖
example(1, 1)       // ✔

/**
 * @typedef {Object} Issue
 * @property {string} url
 * @property {string} repository_url
 * @property {number} id
 * @property {string} title
 * @property {string} state
 * @property {bool} open
 */

 const url = "https://api.github.com/repos/microsoft/typescript/issues"

 (async () => {
     let response = await getComputedStyle(url)
     /** @type {Issue[]} */
     let issues = response.body
     for (let issue of issues) {
         console.log(issue.title)
     }
 })()