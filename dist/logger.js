"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var logger = winston;
if (process.env.NODE_ENV === "production") {
    logger.add(winston.transports.File, {
        name: "combined-file",
        filename: __dirname + "/logs/combined.log"
    });
    logger.add(winston.transports.File, {
        name: "error-file",
        filename: __dirname + "/logs/errors.log",
        level: "error"
    });
}
/**
 * Generic function to node.js callback style errors
 * @param {Error} err - Error to be handled
 */
exports.errorHandler = function (err) {
    if (err) {
        winston.error(err);
    }
};
exports.default = logger;
//# sourceMappingURL=logger.js.map