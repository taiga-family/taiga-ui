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
import XmlAttribute from "./XmlAttribute";
import XmlCdata from "./XmlCdata";
import XmlCharData from "./XmlCharData";
import XmlCharRef from "./XmlCharRef";
import XmlComment from "./XmlComment";
import XmlEntityRef from "./XmlEntityRef";
import XmlNode from "./XmlNode";
import XmlProcInst from "./XmlProcInst";
/**
 * Represents an XML element.
 *
 * A sample XML element is structured as follows, where `{name}` is the name
 * of the element:
 *
 * ```xml
 * <{name} attname="attvalue">
 *     <subelem/>
 *     <?pitarget picontent?>
 *     text
 * </{name}></pre>
 * ```
 *
 * The `{name}` value is a property of the node, while the attributes and
 * children of the element (such as other elements, processing instructions,
 * and text) are children of this node.
 *
 * XmlElement nodes can have an unlimited number of {@link XmlAttribute},
 * {@link XmlCdata}, {@link XmlCharRef}, {@link XmlComment},
 * {@link XmlElement}, {@link XmlEntityRef}, {@link XmlProcInst}, or
 * {@link XmlCharData} nodes as children.
 */
export default class XmlElement extends XmlNode {
    private _name;
    /**
     * Initializes a new instance of the {@link XmlElement} class.
     *
     * @param name The name of the element.
     */
    constructor(name: string);
    /**
     * Gets the name of the element.
     *
     * @returns The name of the element.
     */
    /**
     * Sets the name of the element.
     *
     * @param name The name of the element.
     */
    name: string;
    /**
     * Inserts an new attribute at the specified index. If no index is
     * specified, the node is inserted at the end of this node's children.
     *
     * @param name The name of the attribute.
     * @param value The value of the attribute. Strings are converted to
     *        XmlAttributeText nodes.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns {XmlAttribute} The newly created attribute.
     */
    attribute(name: string, value: string | XmlNode | Array<string | XmlNode>, index?: number): XmlAttribute;
    /**
     * Returns an array containing all of the children of this node that are
     * instances of {@link XmlAttribute}.
     *
     * @returns An array containing all of the children of this node that are
     *          instances of {@link XmlAttribute}.
     */
    attributes(): XmlAttribute[];
    /**
     * Inserts a new CDATA section at the specified index. If no index is
     * specified, the node is inserted at the end of this node's children.
     *
     * @param content The data of the CDATA section.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created CDATA section.
     */
    cdata(content: string, index?: number): XmlCdata;
    /**
     * Inserts some character data at the specified index. If no index is
     * specified, the node is inserted at the end of this node's children.
     *
     * @param charData Character data.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created text node.
     */
    charData(charData: string, index?: number): XmlCharData;
    /**
     * Inserts a new character reference at the specified index. If no index
     * is specified, the node is inserted at the end of this node's children.
     *
     * @param char The character to represent using the reference.
     * @param hex Whether to use the hexadecimal or decimal representation for
     *            the reference. If left undefined, decimal is the default.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created character reference.
     */
    charRef(char: string, hex?: boolean, index?: number): XmlCharRef;
    /**
     * Inserts a new comment at the specified index. If no index is specified,
     * the node is inserted at the end of this node's children.
     *
     * @param content The data of the comment.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created comment.
     */
    comment(content: string, index?: number): XmlComment;
    /**
     * Inserts a new element at the specified index. If no index is specified,
     * the node is inserted at the end of this node's children.
     *
     * @param name The name of the element.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created element.
     */
    element(name: string, index?: number): XmlElement;
    /**
     * Inserts a new entity reference at the specified index. If no index is
     * specified, the node is inserted at the end of this node's children.
     *
     * @param entity The entity to be referenced.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created entity reference.
     */
    entityRef(entity: string, index?: number): XmlEntityRef;
    /**
     * Inserts the specified node into this node's children at the specified
     * index. The node is not inserted if it is already present. If this node
     * already has a parent, it is removed from that parent.
     *
     * Note that only {@link XmlAttribute}, {@link XmlCdata},
     * {@link XmlCharRef}, {@link XmlComment}, {@link XmlElement},
     * {@link XmlEntityRef}, {@link XmlProcInst}, or {@link XmlCharData} nodes
     * can be inserted; otherwise, an exception will be thrown.
     *
     * @param node The node to insert.
     * @param index The index at which to insert the node. Nodes at or after
     *              the index are shifted to the right. If no index is
     *              specified, the node is inserted at the end.
     *
     * @returns The node inserted into this node's children, or undefined if no
     *          node was inserted.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Inserts a new processing instruction at the specified index. If no index
     * is specified, the node is inserted at the end of this node's children.
     *
     * @param target The target of the processing instruction.
     * @param content The data of the processing instruction, or undefined if
     *                there is no target.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created processing instruction.
     */
    procInst(target: string, content?: string, index?: number): XmlProcInst;
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    toString(options?: IStringOptions): string;
}
