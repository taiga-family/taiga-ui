"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefinitionCollection {
    constructor(initial, _listener) {
        this._listener = _listener;
        this._map = new Map(initial && Object.entries(initial));
    }
    delete(key) {
        const value = this._map.get(key);
        const result = this._map.delete(key);
        if (result && value !== undefined && this._listener) {
            this._listener(key, 'remove', undefined, value, this);
        }
        return result;
    }
    set(key, value) {
        const existing = this.get(key);
        this._map.set(key, value);
        if (this._listener) {
            this._listener(key, existing !== undefined ? 'replace' : 'add', value, existing, this);
        }
        return this;
    }
    forEach(callbackfn, thisArg) {
        this._map.forEach((value, key) => callbackfn(value, key, this), thisArg);
    }
    get(key) {
        return this._map.get(key);
    }
    has(key) {
        return this._map.has(key);
    }
    get size() {
        return this._map.size;
    }
    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }
    entries() {
        return this._map.entries();
    }
    keys() {
        return this._map.keys();
    }
    values() {
        return this._map.values();
    }
}
function isJsonValue(value) {
    const visited = new Set();
    switch (typeof value) {
        case 'boolean':
        case 'number':
        case 'string':
            return true;
        case 'object':
            if (value === null) {
                return true;
            }
            visited.add(value);
            for (const property of Object.values(value)) {
                if (typeof value === 'object' && visited.has(property)) {
                    continue;
                }
                if (!isJsonValue(property)) {
                    return false;
                }
            }
            return true;
        default:
            return false;
    }
}
class ProjectDefinitionCollection extends DefinitionCollection {
    constructor(initial, listener) {
        super(initial, listener);
    }
    add(definition) {
        if (this.has(definition.name)) {
            throw new Error('Project name already exists.');
        }
        this._validateName(definition.name);
        const project = {
            root: definition.root,
            prefix: definition.prefix,
            sourceRoot: definition.sourceRoot,
            targets: new TargetDefinitionCollection(),
            extensions: {},
        };
        if (definition.targets) {
            for (const [name, target] of Object.entries(definition.targets)) {
                if (target) {
                    project.targets.set(name, target);
                }
            }
        }
        for (const [name, value] of Object.entries(definition)) {
            switch (name) {
                case 'name':
                case 'root':
                case 'sourceRoot':
                case 'prefix':
                case 'targets':
                    break;
                default:
                    if (isJsonValue(value)) {
                        project.extensions[name] = value;
                    }
                    else {
                        throw new TypeError(`"${name}" must be a JSON value.`);
                    }
                    break;
            }
        }
        super.set(definition.name, project);
        return project;
    }
    set(name, value) {
        this._validateName(name);
        super.set(name, value);
        return this;
    }
    _validateName(name) {
        if (typeof name !== 'string' || !/^(?:@\w[\w\.-]*\/)?\w[\w\.-]*$/.test(name)) {
            throw new Error('Project name must be a valid npm package name.');
        }
    }
}
exports.ProjectDefinitionCollection = ProjectDefinitionCollection;
class TargetDefinitionCollection extends DefinitionCollection {
    constructor(initial, listener) {
        super(initial, listener);
    }
    add(definition) {
        if (this.has(definition.name)) {
            throw new Error('Target name already exists.');
        }
        this._validateName(definition.name);
        const target = {
            builder: definition.builder,
            options: definition.options,
            configurations: definition.configurations,
        };
        super.set(definition.name, target);
        return target;
    }
    set(name, value) {
        this._validateName(name);
        super.set(name, value);
        return this;
    }
    _validateName(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Target name must be a string.');
        }
    }
}
exports.TargetDefinitionCollection = TargetDefinitionCollection;
