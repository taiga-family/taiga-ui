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
import XmlComment from "./XmlComment";
import XmlDtdAttlist from "./XmlDtdAttlist";
import XmlDtdElement from "./XmlDtdElement";
import XmlDtdEntity from "./XmlDtdEntity";
import XmlDtdNotation from "./XmlDtdNotation";
import XmlDtdParamEntityRef from "./XmlDtdParamEntityRef";
import XmlNode from "./XmlNode";
import XmlProcInst from "./XmlProcInst";
/**
 * Represents an XML document type definition (DTD).
 *
 * An XML document type definition  is structured as follows, where `{name}` is
 * the name of the DTD, `{sysId}` is the system identifier of the DTD,
 * `{pubId}` is the public identifier of the DTD, and `{intSubset}` is the
 * internal subset of the DTD:
 *
 * ```xml
 * <!DOCTYPE {name} SYSTEM "{sysId}" PUBLIC "{pubId}" [
 *     {intSubset}
 * ]>
 * ```
 *
 * The `{name}`, `{pubId}`, and `{sysId}` values are properties of the node,
 * while the `{intSubset}` value consists of the children of this node.
 *
 * XmlDtd nodes can have an unlimited number of {@link XmlComment},
 * {@link XmlDtdAttlist}, {@link XmlDtdElement}, {@link XmlDtdEntity},
 * {@link XmlDtdNotation}, {@link XmlDtdParamEntityRef}, and
 * {@link XmlProcInst} nodes.
 */
export default class XmlDtd extends XmlNode {
    private _name;
    private _sysId?;
    private _pubId?;
    /**
     * Initializes a new instance of the {@link XmlDtd} class.
     *
     * @param name The name of the DTD.
     * @param sysId The system identifier of the DTD, excluding quotation marks.
     * @param pubId The public identifier of the DTD, excluding quotation marks.
     *              If a public identifier is provided, a system identifier
     *              must be provided as well.
     */
    constructor(name: string, sysId?: string, pubId?: string);
    /**
     * Gets the name of the DTD.
     *
     * @returns The name of the DTD.
     */
    /**
     * Sets the name of the DTD.
     *
     * @param name The name of the DTD.
     */
    name: string;
    /**
     * Gets the public identifier of the DTD, excluding quotation marks.
     *
     * @returns The public identifier of the DTD, excluding quotation marks.
     *          This value may be undefined.
     */
    /**
     * Sets the public identifier of the DTD, excluding quotation marks. If a
     * public identifier is provided, a system identifier must be provided as
     * well.
     *
     * @param pubId The public identifier of the DTD, excluding quotation marks.
     *              This value may be undefined.
     */
    pubId: string | undefined;
    /**
     * Gets the system identifier of the DTD, excluding quotation marks.
     *
     * @returns The system identifier of the DTD, excluding quotation marks.
     *          This value may be undefined.
     */
    /**
     * Sets the system identifier of the DTD, excluding quotation marks.
     *
     * @param sysId The system identifier of the DTD, excluding quotation marks.
     *              This value may be undefined.
     */
    sysId: string | undefined;
    /**
     * Inserts a new attribute-list declaration at the specified index. If no
     * index is specified, the node is inserted at the end of this node's
     * children.
     *
     * @param text The text of the attribute-list declaration.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created attribute-list declaration.
     */
    attlist(text: string, index?: number): XmlDtdAttlist;
    /**
     * Inserts a new comment at the specified index. If no index is specified,
     * the node is inserted at the end of this node's children.
     *
     * @param content The data of the comment.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created comment.
     */
    comment(content: string, index?: number): XmlComment;
    /**
     * Inserts a new element declaration at the specified index. If no index is
     * specified, the node is inserted at the end of this node's children.
     *
     * @param text The text of the element declaration.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created element declaration.
     */
    element(text: string, index?: number): XmlDtdElement;
    /**
     * Inserts a new entity declaration at the specified index. If no index is
     * specified, the node is inserted at the end of this node's children.
     *
     * @param text The text of the entity declaration.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created entity declaration.
     */
    entity(text: string, index?: number): XmlDtdEntity;
    /**
     * Inserts the specified node into this node's children at the specified
     * index. The node is not inserted if it is already present. If this node
     * already has a parent, it is removed from that parent.
     *
     * Only {@link XmlComment}, {@link XmlDtdAttlist}, {@link XmlDtdElement},
     * {@link XmlDtdEntity}, {@link XmlDtdNotation}, and {@link XmlProcInst}
     * nodes can be inserted; otherwise an exception will be thrown.
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
     * Inserts a new notation declaration at the specified index. If no index is
     * specified, the node is inserted at the end of this node's children.
     *
     * @param text The text of the notation declaration.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created notation declaration.
     */
    notation(text: string, index?: number): XmlDtdNotation;
    /**
     * Inserts a new parameter entity reference at the specified index. If no
     * index is specified, the node is inserted at the end of this node's
     * children.
     *
     * @param entity The entity to reference.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created parameter entity reference.
     */
    paramEntityRef(entity: string, index?: number): XmlDtdParamEntityRef;
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
