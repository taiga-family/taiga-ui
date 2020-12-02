import { IStringOptions } from "../options";
import XmlNode from "./XmlNode";
/**
 * Represents character data in an XML document.
 *
 * Restricted characters, such as the ampersand (`&`), the opening angle
 * bracket (`<`), and the closing angle bracket (`>`) when it appears in the
 * string `]]>`, are all automatically escaped.
 *
 * To create an character reference or entity reference, you should use
 * {@link XmlCharRef} or {@link XmlEntityRef} respectively instead.
 *
 * XmlCharData nodes cannot have any children.
 */
export default class XmlCharData extends XmlNode {
    private _charData;
    /**
     * Initializes a new instance of the {@link XmlCharData} class.
     *
     * @param charData Character data.
     */
    constructor(charData: string);
    /**
     * Gets the character data associated with this node.
     *
     * @returns The character data associated with this node.
     */
    /**
     * Sets the character data associated with this node.
     *
     * @param charData Character data.
     */
    charData: string;
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
     * children.
     *
     * @returns This method does not return.
     */
    children(): XmlNode[];
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     * @param index This parameter is unused.
     *
     * @returns This method does not return.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
     * children.
     *
     * @param node This parameter is unused.
     *
     * @returns This method does not return.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Throws an exception since {@link XmlCharData} nodes cannot have any
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
