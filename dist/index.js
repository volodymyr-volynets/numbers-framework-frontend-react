'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _HTML = require("./HTML.js");
Object.keys(_HTML).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HTML[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HTML[key];
    }
  });
});