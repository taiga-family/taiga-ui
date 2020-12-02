/**
 * The options associated with parsing an object and formatting the resulting
 * XML.
 */
export interface IOptions {
    /**
     * If an object or map contains a key that, when converted to a string,
     * is equal to the value of `aliasString`, then the name of the XML element
     * containing the object will be replaced with the value associated with
     * said key.
     *
     * For example, if `aliasString` is `"="`, then the following object:
     * ```javascript
     * {
     *     "abc": {
     *         "=": "def"
     *         "__val": "ghi"
     *     }
     * }
     * ```
     * will result in the following XML for a root element named `"root"`:
     * ```xml
     * <root>
     *     <def>ghi</def>
     * </root>
     * ```
     *
     * If left undefined, the default value is `"="`.
     */
    aliasString?: string;
    /**
     * If an object or map contains a key that, when converted to a string,
     * begins with the value of `attributeString`, then the value mapped by
     * said key will be interpreted as attributes for the XML element for that
     * object.
     *
     * The attribute object must be an object containing keys that map to
     * primitives (string, number, boolean, null, or undefined).
     *
     * For example, if `attributeString` is `"@"`, then the following object:
     * ```javascript
     * {
     *     "abc": {
     *         "@1": {
     *             "ghi": "jkl",
     *             "mno": "pqr"
     *         },
     *         "stu": "vwx",
     *         "@2": {
     *             "yza": "bcd"
     *         },
     *     }
     * }
     * ```
     * will result in the following XML for a root element named `"root"`:
     * ```xml
     * <root>
     *     <abc ghi='jkl' mno='pqr' yza='bcd'>
     *         <stu>vwx</stu>
     *     </abc>
     * </root>
     * ```
     *
     * If left undefined, the default value is `"@"`.
     */
    attributeString?: string;
    /**
     * If `cdataInvalidChars` is `true`, then any text containing the
     * characters `<` or `&` shall be enclosed in CDATA sections. Otherwise,
     * those characters shall be replaced with XML escape characters.
     *
     * If left undefined, the default value is `false`.
     */
    cdataInvalidChars?: boolean;
    /**
     * If an object or map contains a key that, when converted to a string, is
     * equal to an item in `cdataKeys`, then the value mapped by said key will
     * be enclosed in a CDATA section.
     *
     * For example, if `cdataKeys` is:
     * ```javascript
     * [
     *     "abc"
     * ]
     * ```
     * then the following object:
     * ```javascript
     * {
     *     "abc": "def&",
     *     "ghi": "jkl",
     *     "mno": "pqr<"
     * }
     * ```
     * will result in the following XML for a root element named `"root"`:
     * ```xml
     * <root>
     *     <abc><![CDATA[def&]]></ghi>
     *     <ghi>jlk</ghi>
     *     <mno>pqr&lt;</mno>
     * </root>
     * ```
     *
     * If `cdataKeys` has a key named `"*"`, then that entry will match all
     * keys.
     *
     * If left undefined, the default value is an empty array.
     */
    cdataKeys?: string[];
    /**
     * The options associated with the XML declaration.
     */
    declaration?: IDeclarationOptions;
    /**
     * The options associated with the XML document type definition.
     */
    dtd?: IDtdOptions;
    /**
     * The options associated with the formatting of the XML document.
     */
    format?: IFormatOptions;
    /**
     * If an value has a type (as defined by calling `Object.prototype.toString`
     * on the value) equal to a key in `typeHandlers`, then said value will be
     * replaced by the return value of the function mapped to by the key in
     * `typeHandlers`. This function is called with the value as a parameter.
     *
     * For example, if `typeHandlers` is:
     * ```javascript
     * {
     *     "[object Date]": function(value) {
     *         return value.getYear();
     *     }
     * }
     * ```
     * then the following object:
     * ```javascript
     * {
     *     "abc": new Date(2012, 10, 31)
     * }
     * ```
     * will result in the following XML for a root element named `"root"`:
     * ```xml
     * <root>
     *     <abc>2012</abc>
     * </root>
     * ```
     *
     * If `typeHandlers` has a key named `"*"`, then that entry will match all
     * values, unless there is a more specific entry.
     *
     * Note that normal parsing still occurs for the value returned by the
     * function; it is not directly converted to a string.
     *
     * If left undefined, the default value is an empty object.
     */
    typeHandlers?: ITypeHandlers;
    /**
     * If an object or map contains a key that, when converted to a string,
     * begins with the value of `valueString`, then the value mapped by said key
     * will be represented as bare text within the XML element for that object.
     * The value must be a primitive (string, number, boolean, null, or
     * undefined).
     *
     * For example, if `valueString` is `"#"`, then the following object:
     * ```javascript
     * new Map([
     *     ["#1", "abc"],
     *     ["def", "ghi"],
     *     ["#2", "jkl"]
     * ])
     * ```
     * will result in the following XML for a root element named `"root"`:
     * ```xml
     * <root>
     *     abc
     *     <def>ghi</def>
     *     jkl
     * </root>
     * ```
     *
     * If left undefined, the default value is `"#"`.
     */
    valueString?: string;
    /**
     * If an object or map contains a key that, when converted to a string, is
     * equal to a key in `wrapHandlers`, and the key in said object or map maps
     * to an array or set, then all items in the array or set will be wrapped
     * in an XML element with the same name as the key.
     *
     * The key in `wrapHandlers` must map to a function that is called with the
     * key name, as well as the array or set, as parameters. This function must
     * return a string, which will become the name for each XML element for
     * each item in the array or set. Alternatively, this function may return
     * `null` to indicate that no wrapping should occur.
     *
     * For example, if `wrapHandlers` is:
     * ```javascript
     * {
     *     "abc": function(key, value) {
     *         return "def";
     *     }
     * }
     * ```
     * then the following object:
     * ```javascript
     * {
     *     "ghi": "jkl",
     *     "mno": {
     *         "pqr": ["s", "t"]
     *     },
     *     "uvw": {
     *         "abc": ["x", "y"]
     *     }
     * }
     * ```
     * will result in the following XML for a root element named `"root"`:
     * ```xml
     * <root>
     *     <ghi>jkl</ghi>
     *     <mno>
     *         <pqr>s</pqr>
     *         <pqr>t</pqr>
     *     </mno>
     *     <uwv>
     *         <abc>
     *             <def>x</def>
     *             <def>y</def>
     *         </abc>
     *     </uwv>
     * </root>
     * ```
     *
     * If `wrapHandlers` has a key named `"*"`, then that entry will
     * match all arrays and sets, unless there is a more specific entry.
     *
     * If left undefined, the default value is an empty object.
     */
    wrapHandlers?: IWrapHandlers;
}
/**
 * Implementation of the IOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class Options implements IOptions {
    aliasString: string;
    attributeString: string;
    cdataInvalidChars: boolean;
    cdataKeys: string[];
    declaration: DeclarationOptions;
    dtd: DtdOptions;
    format: FormatOptions;
    typeHandlers: TypeHandlers;
    valueString: string;
    wrapHandlers: WrapHandlers;
    constructor(options?: IOptions);
}
/**
 * The options associated with the XML declaration. An example of an XML
 * declaration is as follows:
 *
 * ```xml
 * <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 * ```
 */
export interface IDeclarationOptions {
    /**
     * If `include` is true, an XML declaration is included in the generated
     * XML. If left undefined, the default value is `true`.
     */
    include?: boolean;
    /**
     * The XML encoding to be included in the declaration. If defined, this
     * value must be a valid encoding. If left undefined, no encoding is
     * included.
     */
    encoding?: string;
    /**
     * The XML standalone attribute to be included. If defined, this value must
     * be `"yes"` or `"no"`. If left undefined, no standalone attribute is
     * included.
     */
    standalone?: string;
    /**
     * The XML version to be included in the declaration. If defined, this
     * value must be a valid XML version number. If left undefined, the default
     * version is `"1.0"`.
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
    include: boolean;
    encoding?: string;
    standalone?: string;
    version?: string;
    constructor(declarationOptions?: IDeclarationOptions);
}
/**
 * The options associated with the XML document type definition (DTD). An
 * example of an XML document type definition is as follows:
 *
 * ```xml
 * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 *                       "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
 * ```
 */
export interface IDtdOptions {
    /**
     * If `include` is `true`, an XML DTD is included in the resulting XML. If
     * left undefined, the default value is `true`.
     */
    include?: boolean;
    /**
     * The name of the DTD. This value cannot be left undefined if `include`
     * is `true`.
     */
    name?: string;
    /**
     * The system identifier of the DTD, excluding quotation marks. If left
     * undefined, no system identifier is included.
     */
    sysId?: string;
    /**
     * The public identifier of the DTD, excluding quotation marks. If `pubId`
     * is defined, `sysId` must be defined as well. If left undefined, no
     * public identifier is included.
     */
    pubId?: string;
}
/**
 * Implementation of the IDtdOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class DtdOptions implements IDtdOptions {
    include: boolean;
    name?: string;
    sysId?: string;
    pubId?: string;
    constructor(dtdOptions?: IDtdOptions);
}
/**
 * The options associated with the formatting of the XML document.
 */
export interface IFormatOptions {
    /**
     * If `doubleQuotes` is `true`, double quotes are used in XML attributes.
     * Otherwise, single quotes are used in XML attributes. If left undefined,
     * the default value is `false`.
     */
    doubleQuotes?: boolean;
    /**
     * The indent string used for pretty-printing. If left undefined, the
     * default value is four spaces.
     */
    indent?: string;
    /**
     * The newline string used for pretty-printing. If left undefined, the
     * default value is `"\n"`.
     */
    newline?: string;
    /**
     * If `pretty` is `true`, pretty-printing is enabled. If left undefined,
     * the default value is `true`.
     */
    pretty?: boolean;
}
/**
 * Implementation of the IFormatOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class FormatOptions implements IFormatOptions {
    doubleQuotes?: boolean;
    indent?: string;
    newline?: string;
    pretty?: boolean;
    constructor(formatOptions?: IFormatOptions);
}
/**
 * Map for the `typeHandlers` property in the {@link IOptions} interface.
 */
export interface ITypeHandlers {
    /**
     * Mapping between the type of a value in an object to a function taking
     * this value and returning a replacement value.
     */
    [type: string]: (value: any) => any;
}
/**
 * Implementation of the ITypeHandlers interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class TypeHandlers implements ITypeHandlers {
    [type: string]: (value: any) => any;
    constructor(typeHandlers?: ITypeHandlers);
}
/**
 * Map for the `wrapHandlers` property in the {@link IOptions} interface.
 */
export interface IWrapHandlers {
    /**
     * Mapping between the string version of a key in an object or map with a
     * value that is an array or set to a function taking the string version
     * of that key, as well as that array or set.
     *
     * This function returns either a string that will become the name for each
     * XML element for each item in the array or set, or `null` to indicate that
     * wrapping should not occur.
     */
    [key: string]: (key: string, value: any) => string | null;
}
/**
 * Implementation of the IWrapHandlers interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class WrapHandlers implements IWrapHandlers {
    [key: string]: (key: string, value: any) => string | null;
    constructor(wrapHandlers?: IWrapHandlers);
}
