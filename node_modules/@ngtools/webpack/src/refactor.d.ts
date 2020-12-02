import * as ts from 'typescript';
/**
 * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
 * @param node The root node to check, or null if the whole tree should be searched.
 * @param sourceFile The source file where the node is.
 * @param kind The kind of nodes to find.
 * @param recursive Whether to go in matched nodes to keep matching.
 * @param max The maximum number of items to return.
 * @return all nodes of kind, or [] if none is found
 */
export declare function findAstNodes<T extends ts.Node>(node: ts.Node | null, sourceFile: ts.SourceFile, kind: ts.SyntaxKind, recursive?: boolean, max?: number): T[];
export declare function resolve(filePath: string, _host: ts.CompilerHost, compilerOptions: ts.CompilerOptions): string;
export declare class TypeScriptFileRefactor {
    private _fileName;
    private _sourceFile;
    get fileName(): string;
    get sourceFile(): ts.SourceFile;
    constructor(fileName: string, _host: ts.CompilerHost, _program?: ts.Program, source?: string | null);
    /**
     * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
     * @param node The root node to check, or null if the whole tree should be searched.
     * @param kind The kind of nodes to find.
     * @param recursive Whether to go in matched nodes to keep matching.
     * @param max The maximum number of items to return.
     * @return all nodes of kind, or [] if none is found
     */
    findAstNodes(node: ts.Node | null, kind: ts.SyntaxKind, recursive?: boolean, max?: number): ts.Node[];
}
