"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.dburl = 'mongodb://127.0.0.1/cpbr-apirest';
    }
    DataBase.prototype.createConnection = function () {
        mongoose.connect(this.dburl);
        this.logger(this.dburl);
    };
    DataBase.prototype.logger = function (uri) {
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', function () { return console.log("mongoose está conectado"); });
        this.dbconnection.on('error', function (error) { return console.error.bind(console, "erro na conexão: " + error); });
    };
    return DataBase;
}());
exports.default = DataBase;
