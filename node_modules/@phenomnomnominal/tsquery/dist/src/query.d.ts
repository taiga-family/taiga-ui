import { Node } from 'typescript';
import { TSQueryOptions } from './tsquery-types';
export declare function query<T extends Node = Node>(ast: string | Node, selector: string, options?: TSQueryOptions): Array<T>;
