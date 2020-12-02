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
 * Represents an XML parameter entity reference in a document type definition.
 *
 * An XML parameter entity reference is structured as follows, where `{entity}`
 * is the name of the entity:
 *
 * ```xml
 * %{entity};
 * ```
 *
 * The `{entity}` value is a property of this node.
 *
 * XmlDtdParamEntityRef nodes cannot have any children.
 */
export default class XmlDtdParamEntityRef extends XmlNode {
    private _entity;
    /**
     * Initializes a new instance of the {@link XmlDtdParamEntityRef} class.
     *
     * @param entity The entity to be referenced.
     */
    constructor(entity: string);
    /**
     * Gets the entity to be referenced.
     *
     * @returns The entity to be referenced.
     */
    /**
     * Sets the entity to be referenced.
     *
     * @param entity The entity to be referenced.
     */
    entity: string;
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
     *
     * @returns This method does not return.
     */
    children(): XmlNode[];
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Throws an exception since {@link XmlDtdParamEntityRef} nodes cannot have
     * any children.
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
