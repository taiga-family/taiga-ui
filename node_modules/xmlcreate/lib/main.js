"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2016 Michael Kourlas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var XmlAttribute_1 = require("./nodes/XmlAttribute");
exports.XmlAttribute = XmlAttribute_1.default;
var XmlAttributeText_1 = require("./nodes/XmlAttributeText");
exports.XmlAttributeText = XmlAttributeText_1.default;
var XmlCdata_1 = require("./nodes/XmlCdata");
exports.XmlCdata = XmlCdata_1.default;
var XmlCharData_1 = require("./nodes/XmlCharData");
exports.XmlCharData = XmlCharData_1.default;
var XmlCharRef_1 = require("./nodes/XmlCharRef");
exports.XmlCharRef = XmlCharRef_1.default;
var XmlComment_1 = require("./nodes/XmlComment");
exports.XmlComment = XmlComment_1.default;
var XmlDecl_1 = require("./nodes/XmlDecl");
exports.XmlDecl = XmlDecl_1.default;
var XmlDocument_1 = require("./nodes/XmlDocument");
exports.XmlDocument = XmlDocument_1.default;
var XmlDtd_1 = require("./nodes/XmlDtd");
exports.XmlDtd = XmlDtd_1.default;
var XmlDtdAttlist_1 = require("./nodes/XmlDtdAttlist");
exports.XmlDtdAttlist = XmlDtdAttlist_1.default;
var XmlDtdElement_1 = require("./nodes/XmlDtdElement");
exports.XmlDtdElement = XmlDtdElement_1.default;
var XmlDtdEntity_1 = require("./nodes/XmlDtdEntity");
exports.XmlDtdEntity = XmlDtdEntity_1.default;
var XmlDtdNotation_1 = require("./nodes/XmlDtdNotation");
exports.XmlDtdNotation = XmlDtdNotation_1.default;
var XmlDtdParamEntityRef_1 = require("./nodes/XmlDtdParamEntityRef");
exports.XmlDtdParamEntityRef = XmlDtdParamEntityRef_1.default;
var XmlElement_1 = require("./nodes/XmlElement");
exports.XmlElement = XmlElement_1.default;
var XmlEntityRef_1 = require("./nodes/XmlEntityRef");
exports.XmlEntityRef = XmlEntityRef_1.default;
var XmlNode_1 = require("./nodes/XmlNode");
exports.XmlNode = XmlNode_1.default;
var XmlProcInst_1 = require("./nodes/XmlProcInst");
exports.XmlProcInst = XmlProcInst_1.default;
/**
 * Creates a new XML document.
 *
 * @param root The name of the root element of the document.
 *
 * @returns The new XML document.
 */
function document(root) {
    return new XmlDocument_1.default(root);
}
exports.document = document;
