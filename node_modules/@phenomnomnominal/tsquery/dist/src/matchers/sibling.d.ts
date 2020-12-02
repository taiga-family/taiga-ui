import { Node } from 'typescript';
import { TSQuerySelectorNode } from '../tsquery-types';
export declare function sibling(node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>): boolean;
export declare function adjacent(node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>): boolean;
