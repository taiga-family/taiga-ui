"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const api_1 = require("./api");
const schedule_by_name_1 = require("./schedule-by-name");
const inputSchema = require('./input-schema.json');
const outputSchema = require('./output-schema.json');
function _createJobHandlerFromBuilderInfo(info, target, host, registry, baseOptions) {
    const jobDescription = {
        name: target ? `{${api_1.targetStringFromTarget(target)}}` : info.builderName,
        argument: { type: 'object' },
        input: inputSchema,
        output: outputSchema,
        info,
    };
    function handler(argument, context) {
        // Add input validation to the inbound bus.
        const inboundBusWithInputValidation = context.inboundBus.pipe(operators_1.concatMap(message => {
            if (message.kind === core_1.experimental.jobs.JobInboundMessageKind.Input) {
                const v = message.value;
                const options = {
                    ...baseOptions,
                    ...v.options,
                };
                // Validate v against the options schema.
                return registry.compile(info.optionSchema).pipe(operators_1.concatMap(validation => validation(options)), operators_1.map((validationResult) => {
                    const { data, success, errors } = validationResult;
                    if (success) {
                        return { ...v, options: data };
                    }
                    throw new core_1.json.schema.SchemaValidationException(errors);
                }), operators_1.map(value => ({ ...message, value })));
            }
            else {
                return rxjs_1.of(message);
            }
        }), 
        // Using a share replay because the job might be synchronously sending input, but
        // asynchronously listening to it.
        operators_1.shareReplay(1));
        // Make an inboundBus that completes instead of erroring out.
        // We'll merge the errors into the output instead.
        const inboundBus = rxjs_1.onErrorResumeNext(inboundBusWithInputValidation);
        const output = rxjs_1.from(host.loadBuilder(info)).pipe(operators_1.concatMap(builder => {
            if (builder === null) {
                throw new Error(`Cannot load builder for builderInfo ${JSON.stringify(info, null, 2)}`);
            }
            return builder.handler(argument, { ...context, inboundBus }).pipe(operators_1.map(output => {
                if (output.kind === core_1.experimental.jobs.JobOutboundMessageKind.Output) {
                    // Add target to it.
                    return {
                        ...output,
                        value: {
                            ...output.value,
                            ...target ? { target } : 0,
                        },
                    };
                }
                else {
                    return output;
                }
            }));
        }), 
        // Share subscriptions to the output, otherwise the the handler will be re-run.
        operators_1.shareReplay());
        // Separate the errors from the inbound bus into their own observable that completes when the
        // builder output does.
        const inboundBusErrors = inboundBusWithInputValidation.pipe(operators_1.ignoreElements(), operators_1.takeUntil(rxjs_1.onErrorResumeNext(output.pipe(operators_1.last()))));
        // Return the builder output plus any input errors.
        return rxjs_1.merge(inboundBusErrors, output);
    }
    return rxjs_1.of(Object.assign(handler, { jobDescription }));
}
/**
 * A JobRegistry that resolves builder targets from the host.
 */
class ArchitectBuilderJobRegistry {
    constructor(_host, _registry, _jobCache, _infoCache) {
        this._host = _host;
        this._registry = _registry;
        this._jobCache = _jobCache;
        this._infoCache = _infoCache;
    }
    _resolveBuilder(name) {
        const cache = this._infoCache;
        if (cache) {
            const maybeCache = cache.get(name);
            if (maybeCache !== undefined) {
                return maybeCache;
            }
            const info = rxjs_1.from(this._host.resolveBuilder(name)).pipe(operators_1.shareReplay(1));
            cache.set(name, info);
            return info;
        }
        return rxjs_1.from(this._host.resolveBuilder(name));
    }
    _createBuilder(info, target, options) {
        const cache = this._jobCache;
        if (target) {
            const maybeHit = cache && cache.get(api_1.targetStringFromTarget(target));
            if (maybeHit) {
                return maybeHit;
            }
        }
        else {
            const maybeHit = cache && cache.get(info.builderName);
            if (maybeHit) {
                return maybeHit;
            }
        }
        const result = _createJobHandlerFromBuilderInfo(info, target, this._host, this._registry, options || {});
        if (cache) {
            if (target) {
                cache.set(api_1.targetStringFromTarget(target), result.pipe(operators_1.shareReplay(1)));
            }
            else {
                cache.set(info.builderName, result.pipe(operators_1.shareReplay(1)));
            }
        }
        return result;
    }
    get(name) {
        const m = name.match(/^([^:]+):([^:]+)$/i);
        if (!m) {
            return rxjs_1.of(null);
        }
        return rxjs_1.from(this._resolveBuilder(name)).pipe(operators_1.concatMap(builderInfo => (builderInfo ? this._createBuilder(builderInfo) : rxjs_1.of(null))), operators_1.first(null, null));
    }
}
/**
 * A JobRegistry that resolves targets from the host.
 */
class ArchitectTargetJobRegistry extends ArchitectBuilderJobRegistry {
    get(name) {
        const m = name.match(/^{([^:]+):([^:]+)(?::([^:]*))?}$/i);
        if (!m) {
            return rxjs_1.of(null);
        }
        const target = {
            project: m[1],
            target: m[2],
            configuration: m[3],
        };
        return rxjs_1.from(Promise.all([
            this._host.getBuilderNameForTarget(target),
            this._host.getOptionsForTarget(target),
        ])).pipe(operators_1.concatMap(([builderStr, options]) => {
            if (builderStr === null || options === null) {
                return rxjs_1.of(null);
            }
            return this._resolveBuilder(builderStr).pipe(operators_1.concatMap(builderInfo => {
                if (builderInfo === null) {
                    return rxjs_1.of(null);
                }
                return this._createBuilder(builderInfo, target, options);
            }));
        }), operators_1.first(null, null));
    }
}
function _getTargetOptionsFactory(host) {
    return core_1.experimental.jobs.createJobHandler(target => {
        return host.getOptionsForTarget(target).then(options => {
            if (options === null) {
                throw new Error(`Invalid target: ${JSON.stringify(target)}.`);
            }
            return options;
        });
    }, {
        name: '..getTargetOptions',
        output: { type: 'object' },
        argument: inputSchema.properties.target,
    });
}
function _getProjectMetadataFactory(host) {
    return core_1.experimental.jobs.createJobHandler(target => {
        return host.getProjectMetadata(target).then(options => {
            if (options === null) {
                throw new Error(`Invalid target: ${JSON.stringify(target)}.`);
            }
            return options;
        });
    }, {
        name: '..getProjectMetadata',
        output: { type: 'object' },
        argument: {
            oneOf: [
                { type: 'string' },
                inputSchema.properties.target,
            ],
        },
    });
}
function _getBuilderNameForTargetFactory(host) {
    return core_1.experimental.jobs.createJobHandler(async (target) => {
        const builderName = await host.getBuilderNameForTarget(target);
        if (!builderName) {
            throw new Error(`No builder were found for target ${api_1.targetStringFromTarget(target)}.`);
        }
        return builderName;
    }, {
        name: '..getBuilderNameForTarget',
        output: { type: 'string' },
        argument: inputSchema.properties.target,
    });
}
function _validateOptionsFactory(host, registry) {
    return core_1.experimental.jobs.createJobHandler(async ([builderName, options]) => {
        // Get option schema from the host.
        const builderInfo = await host.resolveBuilder(builderName);
        if (!builderInfo) {
            throw new Error(`No builder info were found for builder ${JSON.stringify(builderName)}.`);
        }
        return registry.compile(builderInfo.optionSchema).pipe(operators_1.concatMap(validation => validation(options)), operators_1.switchMap(({ data, success, errors }) => {
            if (success) {
                return rxjs_1.of(data);
            }
            throw new core_1.json.schema.SchemaValidationException(errors);
        })).toPromise();
    }, {
        name: '..validateOptions',
        output: { type: 'object' },
        argument: {
            type: 'array',
            items: [
                { type: 'string' },
                { type: 'object' },
            ],
        },
    });
}
class Architect {
    constructor(_host, registry = new core_1.json.schema.CoreSchemaRegistry(), additionalJobRegistry) {
        this._host = _host;
        this._jobCache = new Map();
        this._infoCache = new Map();
        const privateArchitectJobRegistry = new core_1.experimental.jobs.SimpleJobRegistry();
        // Create private jobs.
        privateArchitectJobRegistry.register(_getTargetOptionsFactory(_host));
        privateArchitectJobRegistry.register(_getBuilderNameForTargetFactory(_host));
        privateArchitectJobRegistry.register(_validateOptionsFactory(_host, registry));
        privateArchitectJobRegistry.register(_getProjectMetadataFactory(_host));
        const jobRegistry = new core_1.experimental.jobs.FallbackRegistry([
            new ArchitectTargetJobRegistry(_host, registry, this._jobCache, this._infoCache),
            new ArchitectBuilderJobRegistry(_host, registry, this._jobCache, this._infoCache),
            privateArchitectJobRegistry,
            ...(additionalJobRegistry ? [additionalJobRegistry] : []),
        ]);
        this._scheduler = new core_1.experimental.jobs.SimpleScheduler(jobRegistry, registry);
    }
    has(name) {
        return this._scheduler.has(name);
    }
    scheduleBuilder(name, options, scheduleOptions = {}) {
        // The below will match 'project:target:configuration'
        if (!/^[^:]+:[^:]+(:[^:]+)?$/.test(name)) {
            throw new Error('Invalid builder name: ' + JSON.stringify(name));
        }
        return schedule_by_name_1.scheduleByName(name, options, {
            scheduler: this._scheduler,
            logger: scheduleOptions.logger || new core_1.logging.NullLogger(),
            currentDirectory: this._host.getCurrentDirectory(),
            workspaceRoot: this._host.getWorkspaceRoot(),
            analytics: scheduleOptions.analytics,
        });
    }
    scheduleTarget(target, overrides = {}, scheduleOptions = {}) {
        return schedule_by_name_1.scheduleByTarget(target, overrides, {
            scheduler: this._scheduler,
            logger: scheduleOptions.logger || new core_1.logging.NullLogger(),
            currentDirectory: this._host.getCurrentDirectory(),
            workspaceRoot: this._host.getWorkspaceRoot(),
            analytics: scheduleOptions.analytics,
        });
    }
}
exports.Architect = Architect;
