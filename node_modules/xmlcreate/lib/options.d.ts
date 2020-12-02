/**
 * Formatting options for the string representation of an {@link XmlNode} and
 * its children. This object is used by the `toString` method of
 * {@link XmlNode}.
 */
export interface IStringOptions {
    /**
     * Whether double quotes or single quotes should be used in XML attributes.
     * If left undefined, single quotes are used.
     */
    doubleQuotes?: boolean;
    /**
     * The indent string used for pretty-printing. If left undefined, the
     * default indent string is four spaces.
     */
    indent?: string;
    /**
     * The newline string used for pretty-printing. If left undefined, the
     * default newline string is "\n".
     */
    newline?: string;
    /**
     * Whether pretty-printing is enabled. If left undefined, pretty-printing
     * is enabled.
     */
    pretty?: boolean;
}
/**
 * Implementation of the IStringOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class StringOptions implements IStringOptions {
    doubleQuotes: boolean;
    indent: string;
    newline: string;
    pretty: boolean;
    constructor(stringOptions?: IStringOptions);
}
/**
 * The options associated with the XML declaration. This object is used to
 * create a new {@link XmlDecl} object.
 */
export interface IDeclarationOptions {
    /**
     * The XML encoding to be included in the declaration. This value must be a
     * valid encoding. If left undefined, no encoding is included.
     */
    encoding?: string;
    /**
     * The XML standalone attribute to be included. This value must be "yes" or
     * "no". If left undefined, no standalone attribute is included.
     */
    standalone?: string;
    /**
     * The XML version to be included in the declaration. This value must be a
     * valid XML version number. If left undefined, the default version is
     * "1.0".
     */
    version?: string;
}
/**
 * Implementation of the IDeclarationOptions interface used to provide default
 * values to fields.
 *
 * @private
 */
export declare class DeclarationOptions implements IDeclarationOptions {
    encoding?: string;
    standalone?: string;
    version: string;
    constructor(declarationOptions?: IDeclarationOptions);
}
