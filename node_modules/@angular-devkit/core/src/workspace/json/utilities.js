"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stableStringify = require("fast-json-stable-stringify");
function findNode(parent, p) {
    if (parent.kind === 'object') {
        const entry = parent.properties.find(entry => entry.key.value === p);
        if (entry) {
            return { node: entry.value, parent: entry };
        }
    }
    else {
        const index = Number(p);
        if (!isNaN(index)) {
            return { node: parent.elements[index], parent };
        }
    }
    return { parent };
}
function createPropertyDescriptor(value) {
    return {
        configurable: true,
        enumerable: true,
        writable: true,
        value,
    };
}
function escapeKey(key) {
    if (typeof key === 'number') {
        return key;
    }
    return key.replace('~', '~0').replace('/', '~1');
}
exports.escapeKey = escapeKey;
function unescapeKey(key) {
    if (typeof key === 'number') {
        return key;
    }
    return key.replace('~1', '/').replace('~0', '~');
}
exports.unescapeKey = unescapeKey;
function createVirtualAstObject(root, options = {}) {
    const reporter = (path, parent, node, old, current) => {
        if (options.listener) {
            if (old === current || stableStringify(old) === stableStringify(current)) {
                return;
            }
            const op = old === undefined ? 'add' : current === undefined ? 'remove' : 'replace';
            options.listener(op, path, parent, current);
        }
    };
    return create(root, '', reporter, new Set(options.exclude), options.include && options.include.length > 0 ? new Set(options.include) : undefined, options.base);
}
exports.createVirtualAstObject = createVirtualAstObject;
function create(ast, path, reporter, excluded = new Set(), included, base) {
    const cache = new Map();
    const alteredNodes = new Set();
    if (!base) {
        if (ast.kind === 'object') {
            base = Object.create(null);
        }
        else {
            base = [];
            base.length = ast.elements.length;
        }
    }
    return new Proxy(base, {
        getOwnPropertyDescriptor(target, p) {
            const descriptor = Reflect.getOwnPropertyDescriptor(target, p);
            if (descriptor || typeof p === 'symbol') {
                return descriptor;
            }
            else if (excluded.has(p) || (included && !included.has(p))) {
                return undefined;
            }
            const propertyPath = path + '/' + escapeKey(p);
            const cacheEntry = cache.get(propertyPath);
            if (cacheEntry) {
                if (cacheEntry.value !== undefined) {
                    return createPropertyDescriptor(cacheEntry.value);
                }
                return undefined;
            }
            const { node } = findNode(ast, p);
            if (node) {
                return createPropertyDescriptor(node.value);
            }
            return undefined;
        },
        has(target, p) {
            if (Reflect.has(target, p)) {
                return true;
            }
            else if (typeof p === 'symbol' || excluded.has(p)) {
                return false;
            }
            return cache.has(path + '/' + escapeKey(p)) || findNode(ast, p) !== undefined;
        },
        get(target, p) {
            if (typeof p === 'symbol' || Reflect.has(target, p)) {
                return Reflect.get(target, p);
            }
            else if (excluded.has(p) || (included && !included.has(p))) {
                return undefined;
            }
            const propertyPath = path + '/' + escapeKey(p);
            const cacheEntry = cache.get(propertyPath);
            if (cacheEntry) {
                return cacheEntry.value;
            }
            const { node, parent } = findNode(ast, p);
            let value;
            if (node) {
                if (node.kind === 'object' || node.kind === 'array') {
                    value = create(node, propertyPath, (path, parent, vnode, old, current) => {
                        if (!alteredNodes.has(node)) {
                            reporter(path, parent, vnode, old, current);
                        }
                    });
                }
                else {
                    value = node.value;
                }
                cache.set(propertyPath, { node, parent, value });
            }
            return value;
        },
        set(target, p, value) {
            if (typeof p === 'symbol' || Reflect.has(target, p)) {
                return Reflect.set(target, p, value);
            }
            else if (excluded.has(p) || (included && !included.has(p))) {
                return false;
            }
            // TODO: Check if is JSON value
            const jsonValue = value;
            const propertyPath = path + '/' + escapeKey(p);
            const cacheEntry = cache.get(propertyPath);
            if (cacheEntry) {
                const oldValue = cacheEntry.value;
                cacheEntry.value = value;
                if (cacheEntry.node && oldValue !== value) {
                    alteredNodes.add(cacheEntry.node);
                }
                reporter(propertyPath, cacheEntry.parent, cacheEntry.node, oldValue, jsonValue);
            }
            else {
                const { node, parent } = findNode(ast, p);
                cache.set(propertyPath, { node, parent, value: value });
                if (node && node.value !== value) {
                    alteredNodes.add(node);
                }
                reporter(propertyPath, parent, node, node && node.value, value);
            }
            return true;
        },
        deleteProperty(target, p) {
            if (typeof p === 'symbol' || Reflect.has(target, p)) {
                return Reflect.deleteProperty(target, p);
            }
            else if (excluded.has(p) || (included && !included.has(p))) {
                return false;
            }
            const propertyPath = path + '/' + escapeKey(p);
            const cacheEntry = cache.get(propertyPath);
            if (cacheEntry) {
                const oldValue = cacheEntry.value;
                cacheEntry.value = undefined;
                if (cacheEntry.node) {
                    alteredNodes.add(cacheEntry.node);
                }
                reporter(propertyPath, cacheEntry.parent, cacheEntry.node, oldValue, undefined);
            }
            else {
                const { node, parent } = findNode(ast, p);
                if (node) {
                    cache.set(propertyPath, { node, parent, value: undefined });
                    alteredNodes.add(node);
                    reporter(propertyPath, parent, node, node && node.value, undefined);
                }
            }
            return true;
        },
        defineProperty(target, p, attributes) {
            if (typeof p === 'symbol') {
                return Reflect.defineProperty(target, p, attributes);
            }
            return false;
        },
        ownKeys(target) {
            let keys;
            if (ast.kind === 'object') {
                keys = ast.properties
                    .map(entry => entry.key.value)
                    .filter(p => !excluded.has(p) && (!included || included.has(p)));
            }
            else {
                keys = [];
            }
            for (const key of cache.keys()) {
                const relativeKey = key.substr(path.length + 1);
                if (relativeKey.length > 0 && !relativeKey.includes('/')) {
                    keys.push(unescapeKey(relativeKey));
                }
            }
            return [...new Set([...keys, ...Reflect.ownKeys(target)])];
        },
    });
}
