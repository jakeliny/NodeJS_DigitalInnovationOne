"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    //select
    Controller.prototype.getCrushs = function () {
        return model_1.default.find({});
    };
    Controller.prototype.select = function (req, res) {
        this.getCrushs()
            .then(function (crushs) { return res.status(200).json({ 'result': crushs }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //selectone
    Controller.prototype.getCrushsByID = function (id) {
        return model_1.default.find(id);
    };
    Controller.prototype.selectOne = function (req, res) {
        var id = { _id: req.params.id };
        this.getCrushsByID(id)
            .then(function (crushs) { return res.status(200).json({ 'result': crushs }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //delete
    Controller.prototype.deleteByID = function (id) {
        return model_1.default.deleteOne(id);
    };
    Controller.prototype.delete = function (req, res) {
        var id = { _id: req.params.id };
        this.deleteByID(id)
            .then(function (crushs) { return res.status(200).json({ 'result': crushs }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //update
    Controller.prototype.updateCrush = function (id, data) {
        return model_1.default.findOneAndUpdate(id, data);
    };
    Controller.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var crush = req.body;
        this.updateCrush(id, crush)
            .then(function (crushs) { return res.status(200).json({ 'result': crushs }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    //insert
    Controller.prototype.createCrush = function (data) {
        return model_1.default.create(data);
    };
    Controller.prototype.insert = function (req, res) {
        var crush = req.body;
        this.createCrush(crush)
            .then(function (crushs) { return res.status(200).json({ 'result': crushs }); })
            .catch(function (err) { return res.status(400).json({ 'result': err }); });
    };
    return Controller;
}());
exports.default = Controller;
