"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE_DIRTY = 'dirty';
exports.STATE_IN_PROGESS = 'in-progress';
exports.STATE_PENDING = 'pending';
exports.STATE_DONE = 'done';
/**
 * A Node in the {@link BuildGraph}.
 */
class Node {
    constructor(url) {
        this.url = url;
        this.state = '';
        this._dependents = [];
        this._dependees = [];
    }
    filter(by) {
        return this._dependents.filter(by);
    }
    find(by) {
        return this._dependents.find(by);
    }
    some(by) {
        return this._dependents.some(by);
    }
    get dependents() {
        return this._dependents;
    }
    get dependees() {
        return this._dependees;
    }
    /** @experimental DO NOT USE. For time being, dirty checking is for `type=entryPoint && state !== 'done'` (full rebuild of entry point). */
    dependsOn(dependent) {
        const newDeps = dependent instanceof Array ? dependent : [dependent];
        for (const newDep of newDeps) {
            if (newDep._dependees.some(x => x.url === this.url)) {
                // nodes already depends on each other
                continue;
            }
            newDep._dependees.push(this);
            this._dependents.push(newDep);
        }
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map