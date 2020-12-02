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
import XmlComment from "./XmlComment";
import XmlDecl from "./XmlDecl";
import XmlDtd from "./XmlDtd";
import XmlElement from "./XmlElement";
import XmlNode from "./XmlNode";
import XmlProcInst from "./XmlProcInst";
/**
 * Represents an XML document.
 *
 * A sample XML document is structured as follows:
 *
 * ```xml
 * <?xml version="1.0" encoding="UTF-8"?>
 * <DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 *                      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
 * <html>
 *     <head>
 *         <title>My page title</title>
 *     </head>
 *     <body>
 *         <h1>Welcome!</h1>
 *         <p>I hope you enjoy visiting my website.</p>
 *         <img src="picture.png"/>
 *     </body>
 * </html>
 * ```
 *
 * Each component of the document, such as the XML declaration, document type
 * definition, and root element, are children of this node.
 *
 * XmlDocument nodes must have exactly one {@link XmlElement} child, which is
 * the document's root element.
 *
 * XmlDocument nodes can have exactly one {@link XmlDecl} and {@link XmlDtd}
 * child in that order, so long as they precede the {@link XmlElement} node.
 *
 * XmlDocument nodes can have an unlimited number of {@link XmlComment} or
 * {@link XmlProcInst} nodes, so long as they follow the {@link XmlDecl} node,
 * if one exists.
 */
export default class XmlDocument extends XmlNode {
    /**
     * Initializes a new instance of the {@link XmlDocument} class.
     *
     * @param root The name of the root element.
     */
    constructor(root: string);
    /**
     * Inserts a new comment at the specified index. If no index is specified,
     * the node is inserted at the end of this node's children.
     *
     * @param content The data of the comment.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created element.
     */
    comment(content: string, index?: number): XmlComment;
    /**
     * Inserts a new XML declaration at the beginning of this node's children.
     *
     * @param options The options associated with the XML declaration.
     *
     * @returns The newly created XML declaration.
     */
    decl(options?: IDeclarationOptions): XmlDecl;
    /**
     * Inserts a new XML document type definition. Unless a different index is
     * specified, the node is inserted immediately after the XML declaration
     * if one exists, or at the beginning of this node's children if one does
     * not.
     *
     * @param name The name of the DTD.
     * @param sysId The system identifier of the DTD, excluding quotation marks.
     * @param pubId The public identifier of the DTD, excluding quotation marks.
     *              If a public identifier is provided, a system identifier
     *              must be provided as well.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted immediately after the
     *              XML declaration if one exists, or at the beginning of this
     *              node's children if one does not.
     *
     * @returns The newly created XML document type definition.
     */
    dtd(name: string, sysId?: string, pubId?: string, index?: number): XmlDtd;
    /**
     * Inserts the specified node into this node's children at the specified
     * index. The node is not inserted if it is already present. If this node
     * already has a parent, it is removed from that parent.
     *
     * Only {@link XmlComment}, {@link XmlDecl}, {@link XmlDtd}, or
     * {@link XmlProcInst} nodes can be inserted. Furthermore, {@link XmlDecl}
     * and {@link XmlDtd} nodes must be inserted in that order and must
     * precede the {@link XmlElement} node. In addition, {@link XmlComment} or
     * {@link XmlProcInst} nodes must follow the {@link XmlDecl} node.
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
     * Removes the specified node from this node's children.
     *
     * Note that {@link XmlElement} nodes cannot be removed from this node;
     * attempts to do so will result in an exception being thrown.
     *
     * @param node The node to remove.
     *
     * @returns Whether a node was removed.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Removes the node at the specified index from this node's children.
     *
     * Note that {@link XmlElement} nodes cannot be removed from this node;
     * attempts to do so will result in an exception being thrown.
     *
     * @param index The index at which the node to be removed is
     *                       located.
     *
     * @returns The node that was removed, or undefined if no node was removed.
     */
    removeChildAtIndex(index: number): XmlNode;
    /**
     * Returns the root element of this document.
     *
     * @returns The root element of this document.
     */
    root(): XmlElement;
    /**
     * Returns an XML string representation of this node.
     *
     * @param {IStringOptions} [options] Formatting options for the string
     *                                  representation.
     *
     * @returns {string} An XML string representation of this node.
     */
    toString(options?: IStringOptions): string;
}
