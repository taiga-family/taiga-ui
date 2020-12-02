export declare type Token = string;
export declare type Depth = number;
/**
 * Groups of tokens. The index is the depth value. The array value is a group of tokens.
 */
export declare type Groups = Token[][];
/**
 * DepthBuilder calculates depth values for nodes and dependencies.
 *
 * Depth represents the furthest distance (number of edges) from a node w/o dependencies.
 * A depth of zero indicates that a node has no dependency.
 * Lower depth values indicate that a node need to be built prior to nodes with a higher depth.
 * Nodes with the same depth value may be built in parallel.
 *
 * #### Example
 *
 * A simple example:
 *
 *  - foo depends on bar
 *  - foo depends on foobar
 *  - bar depends on foobar
 *
 * Here, foobar has depth 0, bar has depth 1, and foo has depth 2.
 *
 * @link https://github.com/ng-packagr/ng-packagr/pull/419#issuecomment-354015908
 */
export declare class DepthBuilder {
    private dependencyMap;
    add(node: Token, dependencies?: Token[] | Token): void;
    build(): Groups;
}
