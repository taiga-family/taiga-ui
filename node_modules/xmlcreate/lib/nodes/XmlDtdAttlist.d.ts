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
import { IStringOptions } from "../options";
import XmlNode from "./XmlNode";
/**
 * Represents an XML attribute-list declaration in a document type definition.
 *
 * An XML attribute-list declaration is structured as follows, where `{text}`
 * is the text of the declaration:
 *
 * ```xml
 * <!ATTLIST {text}>
 * ```
 *
 * The `{text}` value is a property of this node.
 *
 * XmlDtdAttlist nodes cannot have any children.
 */
export default class XmlDtdAttlist extends XmlNode {
    private _text;
    /**
     * Initializes a new instance of the {@link XmlDtdAttlist} class.
     *
     * @param text The text associated with the XML attribute-list declaration.
     */
    constructor(text: string);
    /**
     * Gets the text associated with the XML attribute-list declaration.
     *
     * @return The text associated with the XML attribute-list declaration.
     */
    /**
     * Sets the text associated with the XML attribute-list declaration.
     *
     * @param text The text associated with the XML attribute-list declaration.
     */
    text: string;
    /**
     * Throws an exception since {@link XmlDtdAttlist} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    children(): XmlNode[];
    /**
     * Throws an exception since {@link XmlDtdAttlist} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Throws an exception since {@link XmlDtdAttlist} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Throws an exception since {@link XmlDtdAttlist} nodes cannot have any
     * children.
     *
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    removeChildAtIndex(index: number): XmlNode;
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    toString(options?: IStringOptions): string;
}
