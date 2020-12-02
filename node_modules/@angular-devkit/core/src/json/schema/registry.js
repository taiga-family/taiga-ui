"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ajv = require("ajv");
const http = require("http");
const https = require("https");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const Url = require("url");
const exception_1 = require("../../exception/exception");
const utils_1 = require("../../utils");
const interface_1 = require("../interface");
const utility_1 = require("./utility");
const visitor_1 = require("./visitor");
class SchemaValidationException extends exception_1.BaseException {
    constructor(errors, baseMessage = 'Schema validation failed with the following errors:') {
        if (!errors || errors.length === 0) {
            super('Schema validation failed.');
            return;
        }
        const messages = SchemaValidationException.createMessages(errors);
        super(`${baseMessage}\n  ${messages.join('\n  ')}`);
        this.errors = errors;
    }
    static createMessages(errors) {
        if (!errors || errors.length === 0) {
            return [];
        }
        const messages = errors.map((err) => {
            let message = `Data path ${JSON.stringify(err.dataPath)} ${err.message}`;
            if (err.keyword === 'additionalProperties') {
                message += `(${err.params.additionalProperty})`;
            }
            return message + '.';
        });
        return messages;
    }
}
exports.SchemaValidationException = SchemaValidationException;
class CoreSchemaRegistry {
    constructor(formats = []) {
        /**
         * Build an AJV instance that will be used to validate schemas.
         */
        this._uriCache = new Map();
        this._uriHandlers = new Set();
        this._pre = new utils_1.PartiallyOrderedSet();
        this._post = new utils_1.PartiallyOrderedSet();
        this._smartDefaultKeyword = false;
        this._sourceMap = new Map();
        const formatsObj = {};
        for (const format of formats) {
            formatsObj[format.name] = format.formatter;
        }
        this._ajv = ajv({
            formats: formatsObj,
            loadSchema: (uri) => this._fetch(uri),
            schemaId: 'auto',
            passContext: true,
        });
        this._ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
        this._ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
    }
    _fetch(uri) {
        const maybeSchema = this._uriCache.get(uri);
        if (maybeSchema) {
            return Promise.resolve(maybeSchema);
        }
        // Try all handlers, one after the other.
        for (const maybeHandler of this._uriHandlers) {
            const handler = maybeHandler(uri);
            if (handler) {
                // The AJV API only understands Promises.
                return rxjs_1.from(handler).pipe(operators_1.tap(json => this._uriCache.set(uri, json))).toPromise();
            }
        }
        // If none are found, handle using http client.
        return new Promise((resolve, reject) => {
            const url = new Url.URL(uri);
            const client = url.protocol === 'https:' ? https : http;
            client.get(url, res => {
                if (!res.statusCode || res.statusCode >= 300) {
                    // Consume the rest of the data to free memory.
                    res.resume();
                    reject(new Error(`Request failed. Status Code: ${res.statusCode}`));
                }
                else {
                    res.setEncoding('utf8');
                    let data = '';
                    res.on('data', chunk => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        try {
                            const json = JSON.parse(data);
                            this._uriCache.set(uri, json);
                            resolve(json);
                        }
                        catch (err) {
                            reject(err);
                        }
                    });
                }
            });
        });
    }
    /**
     * Add a transformation step before the validation of any Json.
     * @param {JsonVisitor} visitor The visitor to transform every value.
     * @param {JsonVisitor[]} deps A list of other visitors to run before.
     */
    addPreTransform(visitor, deps) {
        this._pre.add(visitor, deps);
    }
    /**
     * Add a transformation step after the validation of any Json. The JSON will not be validated
     * after the POST, so if transformations are not compatible with the Schema it will not result
     * in an error.
     * @param {JsonVisitor} visitor The visitor to transform every value.
     * @param {JsonVisitor[]} deps A list of other visitors to run before.
     */
    addPostTransform(visitor, deps) {
        this._post.add(visitor, deps);
    }
    _resolver(ref, validate) {
        if (!validate || !validate.refs || !validate.refVal || !ref) {
            return {};
        }
        let refMap = validate;
        const rootRefMap = validate.root;
        // Resolve from the root if it's different.
        if (validate.root && validate.schema !== rootRefMap.schema) {
            refMap = rootRefMap;
        }
        const schema = refMap.schema ? typeof refMap.schema == 'object' && refMap.schema : null;
        const maybeId = schema ? schema.id || schema.$id : null;
        if (typeof maybeId == 'string') {
            ref = Url.resolve(maybeId, ref);
        }
        let fullReference = (ref[0] === '#' && maybeId) ? maybeId + ref : ref;
        if (fullReference.endsWith('#')) {
            fullReference = fullReference.slice(0, -1);
        }
        // tslint:disable-next-line:no-any
        const context = validate.refVal[validate.refs[fullReference]];
        if (typeof context == 'function') {
            // Context will be a function if the schema isn't loaded yet, and an actual schema if it's
            // synchronously available.
            return { context, schema: context && context.schema };
        }
        else {
            return { context: validate, schema: context };
        }
    }
    /**
     * Flatten the Schema, resolving and replacing all the refs. Makes it into a synchronous schema
     * that is also easier to traverse. Does not cache the result.
     *
     * @param schema The schema or URI to flatten.
     * @returns An Observable of the flattened schema object.
     */
    flatten(schema) {
        this._ajv.removeSchema(schema);
        // Supports both synchronous and asynchronous compilation, by trying the synchronous
        // version first, then if refs are missing this will fails.
        // We also add any refs from external fetched schemas so that those will also be used
        // in synchronous (if available).
        let validator;
        try {
            this._currentCompilationSchemaInfo = undefined;
            validator = rxjs_1.of(this._ajv.compile(schema)).pipe(operators_1.tap(() => this._currentCompilationSchemaInfo = undefined));
        }
        catch (e) {
            // Propagate the error.
            if (!(e instanceof ajv.MissingRefError)) {
                return rxjs_1.throwError(e);
            }
            this._currentCompilationSchemaInfo = undefined;
            validator = rxjs_1.from(this._ajv.compileAsync(schema)).pipe(operators_1.tap(() => this._currentCompilationSchemaInfo = undefined));
        }
        return validator.pipe(operators_1.switchMap(validate => {
            const self = this;
            function visitor(current, pointer, parentSchema, index) {
                if (current
                    && parentSchema
                    && index
                    && interface_1.isJsonObject(current)
                    && current.hasOwnProperty('$ref')
                    && typeof current['$ref'] == 'string') {
                    const resolved = self._resolver(current['$ref'], validate);
                    if (resolved.schema) {
                        parentSchema[index] = resolved.schema;
                    }
                }
            }
            const schema = utils_1.deepCopy(validate.schema);
            visitor_1.visitJsonSchema(schema, visitor);
            return rxjs_1.of(schema);
        }));
    }
    /**
     * Compile and return a validation function for the Schema.
     *
     * @param schema The schema to validate. If a string, will fetch the schema before compiling it
     * (using schema as a URI).
     * @returns An Observable of the Validation function.
     */
    compile(schema) {
        const schemaInfo = {
            smartDefaultRecord: new Map(),
            promptDefinitions: [],
        };
        this._ajv.removeSchema(schema);
        // Supports both synchronous and asynchronous compilation, by trying the synchronous
        // version first, then if refs are missing this will fails.
        // We also add any refs from external fetched schemas so that those will also be used
        // in synchronous (if available).
        let validator;
        try {
            this._currentCompilationSchemaInfo = schemaInfo;
            validator = rxjs_1.of(this._ajv.compile(schema));
        }
        catch (e) {
            // Propagate the error.
            if (!(e instanceof ajv.MissingRefError)) {
                return rxjs_1.throwError(e);
            }
            try {
                validator = rxjs_1.from(this._ajv.compileAsync(schema));
            }
            catch (e) {
                return rxjs_1.throwError(e);
            }
        }
        return validator
            .pipe(operators_1.map(validate => (data, options) => {
            const validationOptions = {
                withPrompts: true,
                applyPostTransforms: true,
                applyPreTransforms: true,
                ...options,
            };
            const validationContext = {
                promptFieldsWithValue: new Set(),
            };
            let result = rxjs_1.of(data);
            if (validationOptions.applyPreTransforms) {
                // tslint:disable-next-line:no-any https://github.com/ReactiveX/rxjs/issues/3989
                result = result.pipe(...[...this._pre].map(visitor => operators_1.concatMap((data) => {
                    return visitor_1.visitJson(data, visitor, schema, this._resolver, validate);
                })));
            }
            return result.pipe(operators_1.switchMap(updateData => this._applySmartDefaults(updateData, schemaInfo.smartDefaultRecord)), operators_1.switchMap(updatedData => {
                if (validationOptions.withPrompts === false) {
                    return rxjs_1.of(updatedData);
                }
                const visitor = (value, pointer) => {
                    if (value !== undefined) {
                        validationContext.promptFieldsWithValue.add(pointer);
                    }
                    return value;
                };
                if (schema === false || schema === true) {
                    return rxjs_1.of(updatedData);
                }
                return visitor_1.visitJson(updatedData, visitor, schema, this._resolver, validate);
            }), operators_1.switchMap(updatedData => {
                if (validationOptions.withPrompts === false) {
                    return rxjs_1.of(updatedData);
                }
                const definitions = schemaInfo.promptDefinitions
                    .filter(def => !validationContext.promptFieldsWithValue.has(def.id));
                if (this._promptProvider && definitions.length > 0) {
                    return rxjs_1.from(this._applyPrompts(updatedData, definitions));
                }
                else {
                    return rxjs_1.of(updatedData);
                }
            }), operators_1.switchMap(updatedData => {
                const result = validate.call(validationContext, updatedData);
                return typeof result == 'boolean'
                    ? rxjs_1.of([updatedData, result])
                    : rxjs_1.from(result
                        .then(r => [updatedData, true])
                        .catch((err) => {
                        if (err.ajv) {
                            validate.errors = err.errors;
                            return Promise.resolve([updatedData, false]);
                        }
                        return Promise.reject(err);
                    }));
            }), operators_1.switchMap(([data, valid]) => {
                if (valid) {
                    let result = rxjs_1.of(data);
                    if (validationOptions.applyPostTransforms) {
                        // tslint:disable-next-line:no-any https://github.com/ReactiveX/rxjs/issues/3989
                        result = result.pipe(...[...this._post].map(visitor => operators_1.concatMap((data) => {
                            return visitor_1.visitJson(data, visitor, schema, this._resolver, validate);
                        })));
                    }
                    return result.pipe(operators_1.map(data => [data, valid]));
                }
                else {
                    return rxjs_1.of([data, valid]);
                }
            }), operators_1.map(([data, valid]) => {
                if (valid) {
                    return { data, success: true };
                }
                return {
                    data,
                    success: false,
                    errors: (validate.errors || []),
                };
            }));
        }));
    }
    addFormat(format) {
        // tslint:disable-next-line:no-any
        const validate = (data) => {
            const result = format.formatter.validate(data);
            if (typeof result == 'boolean') {
                return result;
            }
            else {
                return result.toPromise();
            }
        };
        this._ajv.addFormat(format.name, {
            async: format.formatter.async,
            validate,
        });
    }
    addSmartDefaultProvider(source, provider) {
        if (this._sourceMap.has(source)) {
            throw new Error(source);
        }
        this._sourceMap.set(source, provider);
        if (!this._smartDefaultKeyword) {
            this._smartDefaultKeyword = true;
            this._ajv.addKeyword('$default', {
                errors: false,
                valid: true,
                compile: (schema, _parentSchema, it) => {
                    const compilationSchemInfo = this._currentCompilationSchemaInfo;
                    if (compilationSchemInfo === undefined) {
                        return () => true;
                    }
                    // We cheat, heavily.
                    compilationSchemInfo.smartDefaultRecord.set(
                    // tslint:disable-next-line:no-any
                    JSON.stringify(it.dataPathArr.slice(1, it.dataLevel + 1)), schema);
                    return () => true;
                },
                metaSchema: {
                    type: 'object',
                    properties: {
                        '$source': { type: 'string' },
                    },
                    additionalProperties: true,
                    required: ['$source'],
                },
            });
        }
    }
    registerUriHandler(handler) {
        this._uriHandlers.add(handler);
    }
    usePromptProvider(provider) {
        const isSetup = !!this._promptProvider;
        this._promptProvider = provider;
        if (isSetup) {
            return;
        }
        this._ajv.addKeyword('x-prompt', {
            errors: false,
            valid: true,
            compile: (schema, parentSchema, it) => {
                const compilationSchemInfo = this._currentCompilationSchemaInfo;
                if (!compilationSchemInfo) {
                    return () => true;
                }
                // tslint:disable-next-line:no-any
                const pathArray = it.dataPathArr.slice(1, it.dataLevel + 1);
                const path = '/' + pathArray.map(p => p.replace(/^\'/, '').replace(/\'$/, '')).join('/');
                let type;
                let items;
                let message;
                if (typeof schema == 'string') {
                    message = schema;
                }
                else {
                    message = schema.message;
                    type = schema.type;
                    items = schema.items;
                }
                const propertyTypes = utility_1.getTypesOfSchema(parentSchema);
                if (!type) {
                    if (propertyTypes.size === 1 && propertyTypes.has('boolean')) {
                        type = 'confirmation';
                    }
                    else if (Array.isArray(parentSchema.enum)) {
                        type = 'list';
                    }
                    else if (propertyTypes.size === 1 &&
                        propertyTypes.has('array') &&
                        parentSchema.items &&
                        Array.isArray(parentSchema.items.enum)) {
                        type = 'list';
                    }
                    else {
                        type = 'input';
                    }
                }
                let multiselect;
                if (type === 'list') {
                    multiselect =
                        schema.multiselect === undefined
                            ? propertyTypes.size === 1 && propertyTypes.has('array')
                            : schema.multiselect;
                    const enumValues = multiselect
                        ? parentSchema.items && parentSchema.items.enum
                        : parentSchema.enum;
                    if (!items && Array.isArray(enumValues)) {
                        items = [];
                        for (const value of enumValues) {
                            if (typeof value == 'string') {
                                items.push(value);
                            }
                            else if (typeof value == 'object') {
                                // Invalid
                            }
                            else {
                                items.push({ label: value.toString(), value });
                            }
                        }
                    }
                }
                const definition = {
                    id: path,
                    type,
                    message,
                    raw: schema,
                    items,
                    multiselect,
                    default: typeof parentSchema.default == 'object' &&
                        parentSchema.default !== null &&
                        !Array.isArray(parentSchema.default)
                        ? undefined
                        : parentSchema.default,
                    async validator(data) {
                        try {
                            return await it.self.validate(parentSchema, data);
                        }
                        catch (_a) {
                            return false;
                        }
                    },
                };
                compilationSchemInfo.promptDefinitions.push(definition);
                return function () {
                    // If 'this' is undefined in the call, then it defaults to the global
                    // 'this'.
                    if (this && this.promptFieldsWithValue) {
                        this.promptFieldsWithValue.add(path);
                    }
                    return true;
                };
            },
            metaSchema: {
                oneOf: [
                    { type: 'string' },
                    {
                        type: 'object',
                        properties: {
                            'type': { type: 'string' },
                            'message': { type: 'string' },
                        },
                        additionalProperties: true,
                        required: ['message'],
                    },
                ],
            },
        });
    }
    _applyPrompts(data, prompts) {
        const provider = this._promptProvider;
        if (!provider) {
            return rxjs_1.of(data);
        }
        return rxjs_1.from(provider(prompts)).pipe(operators_1.map(answers => {
            for (const path in answers) {
                const pathFragments = path.split('/').map(pf => {
                    if (/^\d+$/.test(pf)) {
                        return pf;
                    }
                    else {
                        return '\'' + pf + '\'';
                    }
                });
                CoreSchemaRegistry._set(data, pathFragments.slice(1), answers[path], null, undefined, true);
            }
            return data;
        }));
    }
    static _set(
    // tslint:disable-next-line:no-any
    data, fragments, value, 
    // tslint:disable-next-line:no-any
    parent = null, parentProperty, force) {
        for (let i = 0; i < fragments.length; i++) {
            const f = fragments[i];
            if (f[0] == 'i') {
                if (!Array.isArray(data)) {
                    return;
                }
                for (let j = 0; j < data.length; j++) {
                    CoreSchemaRegistry._set(data[j], fragments.slice(i + 1), value, data, '' + j);
                }
                return;
            }
            else if (f.startsWith('key')) {
                if (typeof data !== 'object') {
                    return;
                }
                Object.getOwnPropertyNames(data).forEach(property => {
                    CoreSchemaRegistry._set(data[property], fragments.slice(i + 1), value, data, property);
                });
                return;
            }
            else if (f.startsWith('\'') && f[f.length - 1] == '\'') {
                const property = f
                    .slice(1, -1)
                    .replace(/\\'/g, '\'')
                    .replace(/\\n/g, '\n')
                    .replace(/\\r/g, '\r')
                    .replace(/\\f/g, '\f')
                    .replace(/\\t/g, '\t');
                // We know we need an object because the fragment is a property key.
                if (!data && parent !== null && parentProperty) {
                    data = parent[parentProperty] = {};
                }
                parent = data;
                parentProperty = property;
                data = data[property];
            }
            else {
                return;
            }
        }
        if (parent && parentProperty && (force || parent[parentProperty] === undefined)) {
            parent[parentProperty] = value;
        }
    }
    _applySmartDefaults(data, smartDefaults) {
        // tslint:disable-next-line:no-any https://github.com/ReactiveX/rxjs/issues/3989
        return rxjs_1.of(data).pipe(...[...smartDefaults.entries()].map(([pointer, schema]) => {
            return operators_1.concatMap(data => {
                const fragments = JSON.parse(pointer);
                const source = this._sourceMap.get(schema.$source);
                let value = source ? source(schema) : rxjs_1.of(undefined);
                if (!rxjs_1.isObservable(value)) {
                    value = rxjs_1.of(value);
                }
                return value.pipe(
                // Synchronously set the new data at the proper JsonSchema path.
                operators_1.tap(x => CoreSchemaRegistry._set(data, fragments, x)), 
                // But return the data object.
                operators_1.map(() => data));
            });
        }));
    }
}
exports.CoreSchemaRegistry = CoreSchemaRegistry;
