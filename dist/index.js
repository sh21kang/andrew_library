"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlural = void 0;
var pluralize = require("pluralize");
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
