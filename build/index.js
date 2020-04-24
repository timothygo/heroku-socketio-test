"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 5000;
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("hello world");
});
app.listen(PORT, function () {
  return console.log("Port is listening @".concat(PORT));
});
