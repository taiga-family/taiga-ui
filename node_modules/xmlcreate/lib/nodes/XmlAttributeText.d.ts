import { IStringOptions } from "../options";
import XmlNode from "./XmlNode";
/**
 * Represents text in an XML attribute value.
 *
 * Restricted characters, such as the ampersand (`&`) and the opening angle
 * bracket (`<`), are all automatically escaped.
 *
 * To create an character reference or entity reference, you should use
 * {@link XmlCharRef} or {@link XmlEntityRef} respectively instead.
 *
 * XmlAttributeText nodes cannot have any children.
 */
export default class XmlAttributeText extends XmlNode {
    private _text;
    /**
     * Initializes a new instance of the {@link XmlAttributeText} class.
     *
     * @param text Text.
     */
    constructor(text: string);
    /**
     * Gets the text associated with this node.
     *
     * @returns The text associated with this node.
     */
    /**
     * Sets the text associated with this node.
     *
     * @param text Text.
     */
    text: string;
    /**
     * Throws an exception since {@link XmlAttributeText} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    children(): XmlNode[];
    /**
     * Throws an exception since {@link XmlAttributeText} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Throws an exception since {@link XmlAttributeText} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Throws an exception since {@link XmlAttributeText} nodes cannot have any
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
