import { Node, ScriptKind, SourceFile, SyntaxKind } from 'typescript';
export declare type TSQueryNodeTransformer = (node: Node) => Node | null | undefined;
export declare type TSQueryStringTransformer = (node: Node) => string | null | undefined;
export declare type TSQueryApi = {
    <T extends Node = Node>(ast: string | Node, selector: string, options?: TSQueryOptions): Array<T>;
    ast(source: string, fileName?: string, scriptKind?: ScriptKind): SourceFile;
    map(ast: SourceFile, selector: string, nodeTransformer: TSQueryNodeTransformer, options?: TSQueryOptions): SourceFile;
    match<T extends Node = Node>(ast: Node, selector: TSQuerySelectorNode, options?: TSQueryOptions): Array<T>;
    parse(selector: string, options?: TSQueryOptions): TSQuerySelectorNode;
    project(configFilePath: string): Array<SourceFile>;
    projectFiles(configFilePath: string): Array<string>;
    query<T extends Node = Node>(ast: string | Node, selector: string, options?: TSQueryOptions): Array<T>;
    replace(source: string, selector: string, stringTransformer: TSQueryStringTransformer, options?: TSQueryOptions): string;
    syntaxKindName(node: SyntaxKind): string;
};
export declare type TSQueryAttributeOperatorType = 'regexp' | 'literal' | 'type';
export declare type TSQueryAttributeOperator = (obj: any, value: any, type: TSQueryAttributeOperatorType) => boolean;
export declare type TSQueryAttributeOperators = {
    [key: string]: TSQueryAttributeOperator;
};
export declare type TSQueryMatcher = (node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>, options: TSQueryOptions) => boolean;
export declare type TSQueryMatchers = {
    [key: string]: TSQueryMatcher;
};
export declare type TSQueryProperties = {
    kindName: string;
    name?: string;
    text: string;
    value?: any;
};
export declare type TSQueryOptions = {
    visitAllChildren?: boolean;
};
export declare type TSQuerySelectorNode = {
    [key: string]: TSQuerySelectorNode | Array<TSQuerySelectorNode> | RegExp | boolean | number | string;
    index: TSQuerySelectorNode;
    left: TSQuerySelectorNode;
    name: string;
    operator: '=' | '!=' | '<=' | '<' | '>=' | '>';
    right: TSQuerySelectorNode;
    selectors: Array<TSQuerySelectorNode>;
    subject: boolean;
    type: TSQueryAttributeOperatorType;
    value: TSQuerySelectorNode | RegExp | number | string;
};
export declare type TSQueryTraverseOptions = {
    enter: (node: Node, parent: Node | null) => void;
    leave: (node: Node, parent: Node | null) => void;
    visitAllChildren: boolean;
};
