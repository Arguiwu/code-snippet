(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var TimeReporter = (function () {
        function TimeReporter(printer) {
            this.printer = printer;
            this.printer(new Date().toUTCString());
        }
        TimeReporter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return _this.printer(new Date().toUTCString()); }, 500);
        };
        TimeReporter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return TimeReporter;
    }());
    exports.TimeReporter = TimeReporter;
});
