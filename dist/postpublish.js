"use strict";

var fs = require("fs");

var path = require("path");

try {
  fs.unlinkSync(path.join(__dirname, "../browser.js"));
} catch (err) {}
//# sourceMappingURL=postpublish.js.map