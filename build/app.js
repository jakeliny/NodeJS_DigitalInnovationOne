"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var db_1 = require("./db");
var controller_1 = require("./controller");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.database = new db_1.default();
        this.database.createConnection();
        this.controller = new controller_1.default();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: true }));
    };
    App.prototype.routes = function () {
        var _this = this;
        this.app.route('/').get(function (req, res) { return res.status(200).json({ "result": "Hello World" }); });
        this.app.route('/api/crushs').get(function (req, res) { return _this.controller.select(req, res); });
        this.app.route('/api/crushs/:id').get(function (req, res) { return _this.controller.selectOne(req, res); });
        this.app.route('/api/crushs/:id').delete(function (req, res) { return _this.controller.delete(req, res); });
        this.app.route('/api/crushs/:id').put(function (req, res) { return _this.controller.update(req, res); });
        this.app.route('/api/crushs').post(function (req, res) { return _this.controller.insert(req, res); });
    };
    return App;
}());
exports.default = new App();
