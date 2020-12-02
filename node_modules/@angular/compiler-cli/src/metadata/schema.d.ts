/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/metadata/schema" />
export declare const METADATA_VERSION = 4;
export declare type MetadataEntry = ClassMetadata | InterfaceMetadata | FunctionMetadata | MetadataValue;
export interface ModuleMetadata {
    __symbolic: 'module';
    version: number;
    exports?: ModuleExportMetadata[];
    importAs?: string;
    metadata: {
        [name: string]: MetadataEntry;
    };
    origins?: {
        [name: string]: string;
    };
}
export declare function isModuleMetadata(value: any): value is ModuleMetadata;
export interface ModuleExportMetadata {
    export?: (string | {
        name: string;
        as: string;
    })[];
    from: string;
}
export interface ClassMetadata {
    __symbolic: 'class';
    extends?: MetadataSymbolicExpression | MetadataError;
    arity?: number;
    decorators?: (MetadataSymbolicExpression | MetadataError)[];
    members?: MetadataMap;
    statics?: {
        [name: string]: MetadataValue | FunctionMetadata;
    };
}
export declare function isClassMetadata(value: any): value is ClassMetadata;
export interface InterfaceMetadata {
    __symbolic: 'interface';
}
export declare function isInterfaceMetadata(value: any): value is InterfaceMetadata;
export interface MetadataMap {
    [name: string]: MemberMetadata[];
}
export interface MemberMetadata {
    __symbolic: 'constructor' | 'method' | 'property';
    decorators?: (MetadataSymbolicExpression | MetadataError)[];
    parameters?: (MetadataSymbolicExpression | MetadataError | null | undefined)[];
}
export declare function isMemberMetadata(value: any): value is MemberMetadata;
export interface MethodMetadata extends MemberMetadata {
    __symbolic: 'constructor' | 'method';
    parameterDecorators?: ((MetadataSymbolicExpression | MetadataError)[] | undefined)[];
}
export declare function isMethodMetadata(value: any): value is MethodMetadata;
export interface ConstructorMetadata extends MethodMetadata {
    __symbolic: 'constructor';
    parameters?: (MetadataSymbolicExpression | MetadataError | null | undefined)[];
}
export declare function isConstructorMetadata(value: any): value is ConstructorMetadata;
export interface FunctionMetadata {
    __symbolic: 'function';
    parameters: string[];
    defaults?: MetadataValue[];
    value: MetadataValue;
}
export declare function isFunctionMetadata(value: any): value is FunctionMetadata;
export declare type MetadataValue = string | number | boolean | undefined | null | MetadataObject | MetadataArray | MetadataSymbolicExpression | MetadataSymbolicReferenceExpression | MetadataSymbolicBinaryExpression | MetadataSymbolicIndexExpression | MetadataSymbolicCallExpression | MetadataSymbolicPrefixExpression | MetadataSymbolicIfExpression | MetadataSymbolicSpreadExpression | MetadataSymbolicSelectExpression | MetadataError;
export interface MetadataObject {
    [name: string]: MetadataValue;
}
export interface MetadataArray {
    [name: number]: MetadataValue;
}
export declare type MetadataSymbolicExpression = MetadataSymbolicBinaryExpression | MetadataSymbolicIndexExpression | MetadataSymbolicIndexExpression | MetadataSymbolicCallExpression | MetadataSymbolicCallExpression | MetadataSymbolicPrefixExpression | MetadataSymbolicIfExpression | MetadataGlobalReferenceExpression | MetadataModuleReferenceExpression | MetadataImportedSymbolReferenceExpression | MetadataImportedDefaultReferenceExpression | MetadataSymbolicSelectExpression | MetadataSymbolicSpreadExpression;
export declare function isMetadataSymbolicExpression(value: any): value is MetadataSymbolicExpression;
export interface MetadataSymbolicBinaryExpression {
    __symbolic: 'binary';
    operator: '&&' | '||' | '|' | '^' | '&' | '==' | '!=' | '===' | '!==' | '<' | '>' | '<=' | '>=' | 'instanceof' | 'in' | 'as' | '<<' | '>>' | '>>>' | '+' | '-' | '*' | '/' | '%' | '**';
    left: MetadataValue;
    right: MetadataValue;
}
export declare function isMetadataSymbolicBinaryExpression(value: any): value is MetadataSymbolicBinaryExpression;
export interface MetadataSymbolicIndexExpression {
    __symbolic: 'index';
    expression: MetadataValue;
    index: MetadataValue;
}
export declare function isMetadataSymbolicIndexExpression(value: any): value is MetadataSymbolicIndexExpression;
export interface MetadataSymbolicCallExpression {
    __symbolic: 'call' | 'new';
    expression: MetadataValue;
    arguments?: MetadataValue[];
}
export declare function isMetadataSymbolicCallExpression(value: any): value is MetadataSymbolicCallExpression;
export interface MetadataSymbolicPrefixExpression {
    __symbolic: 'pre';
    operator: '+' | '-' | '~' | '!';
    operand: MetadataValue;
}
export declare function isMetadataSymbolicPrefixExpression(value: any): value is MetadataSymbolicPrefixExpression;
export interface MetadataSymbolicIfExpression {
    __symbolic: 'if';
    condition: MetadataValue;
    thenExpression: MetadataValue;
    elseExpression: MetadataValue;
}
export declare function isMetadataSymbolicIfExpression(value: any): value is MetadataSymbolicIfExpression;
export interface MetadataSourceLocationInfo {
    /**
     * The line number of the error in the .ts file the metadata was created for.
     */
    line?: number;
    /**
     * The number of utf8 code-units from the beginning of the file of the error.
     */
    character?: number;
}
export interface MetadataGlobalReferenceExpression extends MetadataSourceLocationInfo {
    __symbolic: 'reference';
    name: string;
    arguments?: MetadataValue[];
}
export declare function isMetadataGlobalReferenceExpression(value: any): value is MetadataGlobalReferenceExpression;
export interface MetadataModuleReferenceExpression extends MetadataSourceLocationInfo {
    __symbolic: 'reference';
    module: string;
}
export declare function isMetadataModuleReferenceExpression(value: any): value is MetadataModuleReferenceExpression;
export interface MetadataImportedSymbolReferenceExpression extends MetadataSourceLocationInfo {
    __symbolic: 'reference';
    module: string;
    name: string;
    arguments?: MetadataValue[];
}
export declare function isMetadataImportedSymbolReferenceExpression(value: any): value is MetadataImportedSymbolReferenceExpression;
export interface MetadataImportedDefaultReferenceExpression extends MetadataSourceLocationInfo {
    __symbolic: 'reference';
    module: string;
    default: boolean;
    arguments?: MetadataValue[];
}
export declare function isMetadataImportDefaultReference(value: any): value is MetadataImportedDefaultReferenceExpression;
export declare type MetadataSymbolicReferenceExpression = MetadataGlobalReferenceExpression | MetadataModuleReferenceExpression | MetadataImportedSymbolReferenceExpression | MetadataImportedDefaultReferenceExpression;
export declare function isMetadataSymbolicReferenceExpression(value: any): value is MetadataSymbolicReferenceExpression;
export interface MetadataSymbolicSelectExpression {
    __symbolic: 'select';
    expression: MetadataValue;
    member: string;
}
export declare function isMetadataSymbolicSelectExpression(value: any): value is MetadataSymbolicSelectExpression;
export interface MetadataSymbolicSpreadExpression {
    __symbolic: 'spread';
    expression: MetadataValue;
}
export declare function isMetadataSymbolicSpreadExpression(value: any): value is MetadataSymbolicSpreadExpression;
export interface MetadataError extends MetadataSourceLocationInfo {
    __symbolic: 'error';
    /**
     * This message should be short and relatively discriptive and should be fixed once it is created.
     * If the reader doesn't recognize the message, it will display the message unmodified. If the
     * reader recognizes the error message is it free to use substitute message the is more
     * descriptive and/or localized.
     */
    message: string;
    /**
     * The module of the error (only used in bundled metadata)
     */
    module?: string;
    /**
     * Context information that can be used to generate a more descriptive error message. The content
     * of the context is dependent on the error message.
     */
    context?: {
        [name: string]: string;
    };
}
export declare function isMetadataError(value: any): value is MetadataError;
