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
 * Represents an XML processing instruction.
 *
 * An XML processing instruction is structured as follows, where `{target}`
 * and `{content}` are the target and content of the processing instruction
 * respectively.
 *
 * ```xml
 * <?{target} {content}?>
 * ```
 *
 * The `{target}` and `{content}` values are properties of this node.
 *
 * XmlProcInst nodes cannot have any children.
 */
export default class XmlProcInst extends XmlNode {
    private _target;
    private _content?;
    /**
     * Initializes a new instance of the {@link XmlProcInst} class.
     *
     * @param target The target of the processing instruction.
     * @param content The data of the processing instruction, or undefined if
     *                there is no target.
     */
    constructor(target: string, content?: string);
    /**
     * Gets the target of the processing instruction.
     *
     * @returns The target of the processing instruction.
     */
    /**
     * Sets the target of the processing instruction.
     *
     * @param target The target of the processing instruction.
     */
    target: string;
    /**
     * Gets the data of the processing instruction.
     *
     * @returns The data of the processing instruction. This value may be
     *          undefined.
     */
    /**
     * Sets the data of the processing instruction.
     *
     * @param content The data of the processing instruction. This value may be
     *                undefined.
     */
    content: string | undefined;
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    children(): XmlNode[];
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Throws an exception since {@link XmlProcInst} nodes cannot have any
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
     * @returns {string} An XML string representation of this node.
     */
    toString(options?: IStringOptions): string;
}
