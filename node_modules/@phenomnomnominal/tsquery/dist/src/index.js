"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies:
var ast_1 = require("./ast");
var map_1 = require("./map");
var match_1 = require("./match");
var parse_1 = require("./parse");
var project_1 = require("./project");
var query_1 = require("./query");
var replace_1 = require("./replace");
var syntax_kind_1 = require("./syntax-kind");
var api = query_1.query;
api.ast = ast_1.createAST;
api.map = map_1.map;
api.match = match_1.match;
api.parse = parse_1.parse;
api.project = project_1.project;
api.projectFiles = project_1.projectFiles;
api.query = query_1.query;
api.replace = replace_1.replace;
api.syntaxKindName = syntax_kind_1.syntaxKindName;
exports.tsquery = api;
//# sourceMappingURL=index.js.map