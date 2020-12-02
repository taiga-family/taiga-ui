import { Node } from 'typescript';
import { TSQuerySelectorNode } from '../tsquery-types';
export declare function child(node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>): boolean;
