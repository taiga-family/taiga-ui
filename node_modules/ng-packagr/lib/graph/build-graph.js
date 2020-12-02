"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A tree of source files. Eventually, it's a graph. Ideally, it's an acyclic directed graph.
 * Technically, it's implemented as a map-like collection with references between map entries.
 */
class BuildGraph {
    constructor() {
        this.store = new Map();
    }
    put(value) {
        if (value instanceof Array) {
            value.forEach(node => this.insert(node));
        }
        else {
            this.insert(value);
        }
        return this;
    }
    insert(node) {
        if (this.store.has(node.url)) {
            // Clean up dependee references
            const oldNode = this.store.get(node.url);
            oldNode['_dependees'] = oldNode['_dependees'].filter(node => node !== oldNode);
        }
        this.store.set(node.url, node);
    }
    get(url) {
        return this.store.get(url);
    }
    has(url) {
        return this.store.has(url);
    }
    entries() {
        const values = this.store.values();
        return Array.from(values);
    }
    some(by) {
        return this.entries().some(by);
    }
    filter(by) {
        return this.entries().filter(by);
    }
    find(by) {
        return this.entries().find(by);
    }
    from(node) {
        return node;
    }
    get size() {
        return this.store.size;
    }
}
exports.BuildGraph = BuildGraph;
//# sourceMappingURL=build-graph.js.map