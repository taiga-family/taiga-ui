import { Node } from 'typescript';
import { TSQuerySelectorNode } from '../tsquery-types';
export declare function nthChild(node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>): boolean;
export declare function nthLastChild(node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>): boolean;
