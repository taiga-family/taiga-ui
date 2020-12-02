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
import { IDeclarationOptions, IStringOptions } from "../options";
import XmlNode from "./XmlNode";
/**
 * Represents an XML declaration.
 *
 * An XML declaration is structured as follows, where `{version}` is the XML
 * version, `{encoding}` is the encoding of the document, and `{standalone}`
 * is either "yes" or "no", depending on whether the document may contain
 * external markup declarations:
 *
 * ```xml
 * <?xml version="{version}" encoding="{encoding}" standalone="{standalone}"?>
 * ```
 *
 * The `{version}`, `{encoding}`, and `{standalone}` values are properties of
 * this node.
 *
 * XmlDecl nodes cannot have any children.
 */
export default class XmlDecl extends XmlNode {
    private _encoding?;
    private _standalone?;
    private _version;
    /**
     * Initializes a new instance of the {@link XmlDecl} class.
     *
     * @param options The options associated with the XML declaration.
     */
    constructor(options?: IDeclarationOptions);
    /**
     * Gets the XML encoding to be included in the declaration.
     *
     * @returns The XML encoding to be included in the declaration. This value
     *          may be undefined.
     */
    /**
     * Sets the XML encoding to be included in the declaration.
     *
     * @param encoding The XML encoding to be included in the declaration. This
     *                 value must be a valid encoding. If left undefined, no
     *                 encoding is included.
     */
    encoding: string | undefined;
    /**
     * Gets the XML standalone attribute to be included in the declaration.
     *
     * @returns The XML standalone attribute to be included in the declaration.
     *          This value may be undefined.
     */
    /**
     * Sets the XML standalone attribute to be included in the declaration.
     *
     * @param standalone The XML standalone attribute to be included. This
     *                   value must be "yes" or "no". If left undefined, no
     *                   standalone attribute is included.
     */
    standalone: string | undefined;
    /**
     * Gets the XML version to be included in the declaration.
     *
     * @returns The XML version to tbe included in the declaration.
     */
    /**
     * Sets the XML version to be included in the declaration.
     *
     * @param version The XML version to be included in the declaration. This
     *                value must be a valid XML version number. If left
     *                undefined, the default version is "1.0".
     */
    version: string;
    /**
     * Throws an exception since {@link XmlDecl} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    children(): XmlNode[];
    /**
     * Throws an exception since {@link XmlDecl} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Throws an exception since {@link XmlDecl} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Throws an exception since {@link XmlDecl} nodes cannot have any
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
