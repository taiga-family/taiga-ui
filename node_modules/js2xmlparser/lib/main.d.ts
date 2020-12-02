import { IOptions } from "./options";
/**
 * Returns a XML string representation of the specified object.
 *
 * @param root The name of the root XML element. When the object is converted
 *             to XML, it will be a child of this root element.
 * @param object The object to convert to XML.
 * @param options Options for parsing the object and formatting the resulting
 *                XML.
 *
 * @returns An XML string representation of the specified object.
 */
export declare function parse(root: string, object: any, options?: IOptions): string;
