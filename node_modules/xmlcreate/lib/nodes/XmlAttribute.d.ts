import { IStringOptions } from "../options";
import XmlAttributeText from "./XmlAttributeText";
import XmlCharRef from "./XmlCharRef";
import XmlEntityRef from "./XmlEntityRef";
import XmlNode from "./XmlNode";
/**
 * Represents an XML element attribute.
 *
 * An XML element attribute is part of the start tag of an element and is
 * structured as follows, where `{name}` is the name of the attribute and
 * `{value}` is the value of the attribute:
 *
 * ```xml
 * <element {name}="{value}">
 * ```
 *
 * The `{name}` value is a property of this node, while the `{value}` property
 * consists of the children of this node.
 *
 * XmlAttribute nodes must have at least one child, and can have an unlimited
 * number of {@link XmlAttributeText}, {@link XmlCharRef}, and
 * {@link XmlEntityRef} nodes as children.
 */
export default class XmlAttribute extends XmlNode {
    private _name;
    /**
     * Initializes a new instance of the {@link XmlAttribute} class.
     *
     * @param name The name of the XML attribute.
     * @param value The initial value of the XML attribute. Additional children
     *              can be added later. Only {@link XmlAttributeText},
     *              {@link XmlCharRef}, and {@link XmlEntityRef} nodes are
     *              permitted.
     */
    constructor(name: string, value: XmlNode | XmlNode[]);
    /**
     * Gets the name of this attribute.
     *
     * @returns The name of this attribute.
     */
    /**
     * Sets the name of this attribute.
     *
     * @param name The name of this attribute.
     */
    name: string;
    /**
     * Inserts a new XML character reference at the specified index.
     *
     * @param char The character to represent using the reference.
     * @param hex Whether to use the hexadecimal or decimal representation for
     *            the reference. If left undefined, decimal is the default.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created XML declaration.
     */
    charRef(char: string, hex: boolean, index?: number): XmlCharRef;
    /**
     * Inserts a new XML entity reference at the specified index.
     *
     * @param entity The entity to be referenced.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this
     *              node's children.
     *
     * @returns The newly created XML declaration.
     */
    entityRef(entity: string, index?: number): XmlEntityRef;
    /**
     * Inserts the specified node into this node's children at the specified
     * index. The node is not inserted if it is already present. If this node
     * already has a parent, it is removed from that parent.
     *
     * Note that only {@link XmlCharRef}, {@link XmlEntityRef}, and
     * {@link XmlCharData} nodes can be inserted; otherwise, an exception will
     * be thrown.
     *
     * @param node The node to insert.
     * @param index The index at which to insert the node. Nodes at or after the
     *              index are shifted to the right. If no index is specified,
     *              the node is inserted at the end.
     *
     * @returns The node inserted into this node's children, or undefined if no
     *          node was inserted.
     */
    insertChild(node: XmlNode, index?: number): XmlNode | undefined;
    /**
     * Removes the specified node from this node's children.
     *
     * Note that this node must have at least one child. Attempts to remove
     * the last child node will result in an exception.
     *
     * @param node The node to remove.
     *
     * @returns Whether a node was removed.
     */
    removeChild(node: XmlNode): boolean;
    /**
     * Removes the node at the specified index from this node's children.
     *
     * Note that this node must have at least one child. Attempts to remove
     * the last child node will result in an exception.
     *
     * @param index The index at which the node to be removed is located.
     *
     * @returns The node that was removed, or undefined if no node was removed.
     */
    removeChildAtIndex(index: number): XmlNode;
    /**
     * Inserts a new XML text node at the specified index.
     *
     * @param text Arbitrary character data.
     * @param index The index at which the node should be inserted. If no index
     *              is specified, the node is inserted at the end of this node's
     *              children.
     *
     * @returns The newly created XML declaration.
     */
    text(text: string, index?: number): XmlAttributeText;
    /**
     * Returns an XML string representation of this node.
     *
     * @param options Formatting options for the string representation.
     *
     * @returns An XML string representation of this node.
     */
    toString(options?: IStringOptions): string;
}
