import { Node } from 'typescript';
import { TSQuerySelectorNode } from '../tsquery-types';
export declare function matches(modifier: 'some' | 'every'): (node: Node, selector: TSQuerySelectorNode, ancestry: Array<Node>) => boolean;
