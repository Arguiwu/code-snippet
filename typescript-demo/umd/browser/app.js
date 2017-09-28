(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../shared/timeReporter"], factory);
    }
})(function (require, exports) {
    "use strict";
    var timeReporter_1 = require("../shared/timeReporter");
    var element = document.getElementById('content');
    element.innerText += 'The time is: ';
    var span = document.createElement('span');
    element.appendChild(span);
    function printer(s) {
        span.innerHTML = s;
    }
    var timeReporter = new timeReporter_1.TimeReporter(printer);
    timeReporter.start();
});
