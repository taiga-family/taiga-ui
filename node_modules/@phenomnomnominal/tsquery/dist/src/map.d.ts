import { SourceFile } from 'typescript';
import { TSQueryNodeTransformer, TSQueryOptions } from './tsquery-types';
export declare function map(ast: SourceFile, selector: string, nodeTransformer: TSQueryNodeTransformer, options?: TSQueryOptions): SourceFile;
