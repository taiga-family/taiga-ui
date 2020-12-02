import { Node } from 'typescript';
import { TSQuerySelectorNode } from '../tsquery-types';
export declare function descendant(node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>): boolean;
