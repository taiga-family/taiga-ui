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
import XmlAttribute from "./nodes/XmlAttribute";
import XmlAttributeText from "./nodes/XmlAttributeText";
import XmlCdata from "./nodes/XmlCdata";
import XmlCharData from "./nodes/XmlCharData";
import XmlCharRef from "./nodes/XmlCharRef";
import XmlComment from "./nodes/XmlComment";
import XmlDecl from "./nodes/XmlDecl";
import XmlDocument from "./nodes/XmlDocument";
import XmlDtd from "./nodes/XmlDtd";
import XmlDtdAttlist from "./nodes/XmlDtdAttlist";
import XmlDtdElement from "./nodes/XmlDtdElement";
import XmlDtdEntity from "./nodes/XmlDtdEntity";
import XmlDtdNotation from "./nodes/XmlDtdNotation";
import XmlDtdParamEntityRef from "./nodes/XmlDtdParamEntityRef";
import XmlElement from "./nodes/XmlElement";
import XmlEntityRef from "./nodes/XmlEntityRef";
import XmlNode from "./nodes/XmlNode";
import XmlProcInst from "./nodes/XmlProcInst";
export { XmlAttribute, XmlAttributeText, XmlCdata, XmlCharData, XmlCharRef, XmlComment, XmlDecl, XmlDocument, XmlDtd, XmlDtdAttlist, XmlDtdElement, XmlDtdEntity, XmlDtdNotation, XmlDtdParamEntityRef, XmlElement, XmlEntityRef, XmlNode, XmlProcInst };
/**
 * Creates a new XML document.
 *
 * @param root The name of the root element of the document.
 *
 * @returns The new XML document.
 */
export declare function document(root: string): XmlDocument;
