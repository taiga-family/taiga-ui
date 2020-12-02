"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class DepthBuilder {
    constructor() {
        // this serves as a tracker for dependencies between tokens
        this.dependencyMap = new Map();
    }
    add(node, dependencies = []) {
        // Normalize to array
        dependencies = dependencies instanceof Array ? dependencies : [dependencies];
        if (this.dependencyMap.has(node)) {
            // Add to existing and de-duplicate
            const existing = this.dependencyMap.get(node);
            const deps = existing.concat(dependencies).filter((value, index, self) => {
                return self.indexOf(value) === index;
            });
            this.dependencyMap.set(node, deps);
        }
        else {
            this.dependencyMap.set(node, dependencies);
        }
        if (dependencies) {
            for (const dependency of dependencies) {
                if (!this.dependencyMap.has(dependency)) {
                    this.dependencyMap.set(dependency, []);
                }
            }
        }
    }
    build() {
        const allNodes = Array.from(this.dependencyMap.entries()).map(([token, dependencies]) => ({
            token,
            dependencies,
        }));
        // Start with root nodes and expand from there
        const nodeQueue = allNodes.filter(node => node.dependencies.length === 0);
        // Serves as a tracker for what nodes have been processed, and their furthest distance from a root node
        const nodeDepths = new Map();
        for (const node of nodeQueue) {
            nodeDepths.set(node.token, 0);
        }
        // We will use this later to reduce the frequency of dynamic memory allocations
        let maxDepth = 0;
        // Walk the tree to determine longest path from root for each node
        while (nodeQueue.length > 0) {
            const currentNode = nodeQueue.pop();
            const currentDepth = nodeDepths.get(currentNode.token) + 1;
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
            const parentNodes = allNodes.filter(node => node.dependencies.find(dep => dep === currentNode.token));
            parentNodes.forEach(parent => {
                if (!nodeDepths.has(parent.token)) {
                    // Push the dependency to the queue and track its depth
                    nodeQueue.push(parent);
                    nodeDepths.set(parent.token, currentDepth);
                }
                const dependencyDepth = nodeDepths.get(parent.token);
                if (currentDepth > dependencyDepth) {
                    // Push the dependency to the queue again and track its depth
                    nodeQueue.push(parent);
                    nodeDepths.set(parent.token, currentDepth);
                }
            });
        }
        // All nodes with the same max distance from a root can be run in parallel
        // Now we need to bucket nodes by max depth
        const buckets = new Array(maxDepth + 1);
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }
        nodeDepths.forEach((depth, node) => {
            buckets[depth].push(node);
        });
        return buckets;
    }
}
exports.DepthBuilder = DepthBuilder;
//# sourceMappingURL=depth.js.map