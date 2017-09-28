(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../shared/timeReporter", "os"], factory);
    }
})(function (require, exports) {
    "use strict";
    var timeReporter_1 = require("../shared/timeReporter");
    var os_1 = require("os");
    function printer(s) {
        console.log("The time is: " + s + os_1.EOL);
    }
    var timeReporter = new timeReporter_1.TimeReporter(printer);
    timeReporter.start();
});
