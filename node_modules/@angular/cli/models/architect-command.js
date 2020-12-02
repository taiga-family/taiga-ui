"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const architect_1 = require("@angular-devkit/architect");
const node_1 = require("@angular-devkit/architect/node");
const core_1 = require("@angular-devkit/core");
const node_2 = require("@angular-devkit/core/node");
const bep_1 = require("../utilities/bep");
const json_schema_1 = require("../utilities/json-schema");
const analytics_1 = require("./analytics");
const command_1 = require("./command");
const parser_1 = require("./parser");
class ArchitectCommand extends command_1.Command {
    constructor() {
        super(...arguments);
        // If this command supports running multiple targets.
        this.multiTarget = false;
    }
    async initialize(options) {
        await super.initialize(options);
        this._registry = new core_1.json.schema.CoreSchemaRegistry();
        this._registry.addPostTransform(core_1.json.schema.transforms.addUndefinedDefaults);
        const { workspace } = await core_1.workspaces.readWorkspace(this.workspace.root, core_1.workspaces.createWorkspaceHost(new node_2.NodeJsSyncHost()));
        this._workspace = workspace;
        this._architectHost = new node_1.WorkspaceNodeModulesArchitectHost(workspace, this.workspace.root);
        this._architect = new architect_1.Architect(this._architectHost, this._registry);
        if (!this.target) {
            if (options.help) {
                // This is a special case where we just return.
                return;
            }
            const specifier = this._makeTargetSpecifier(options);
            if (!specifier.project || !specifier.target) {
                throw new Error('Cannot determine project or target for command.');
            }
            return;
        }
        const commandLeftovers = options['--'];
        let projectName = options.project;
        const targetProjectNames = [];
        for (const [name, project] of this._workspace.projects) {
            if (project.targets.has(this.target)) {
                targetProjectNames.push(name);
            }
        }
        if (targetProjectNames.length === 0) {
            throw new Error(this.missingTargetError || `No projects support the '${this.target}' target.`);
        }
        if (projectName && !targetProjectNames.includes(projectName)) {
            throw new Error(this.missingTargetError ||
                `Project '${projectName}' does not support the '${this.target}' target.`);
        }
        if (!projectName && commandLeftovers && commandLeftovers.length > 0) {
            const builderNames = new Set();
            const leftoverMap = new Map();
            let potentialProjectNames = new Set(targetProjectNames);
            for (const name of targetProjectNames) {
                const builderName = await this._architectHost.getBuilderNameForTarget({
                    project: name,
                    target: this.target,
                });
                if (this.multiTarget) {
                    builderNames.add(builderName);
                }
                const builderDesc = await this._architectHost.resolveBuilder(builderName);
                const optionDefs = await json_schema_1.parseJsonSchemaToOptions(this._registry, builderDesc.optionSchema);
                const parsedOptions = parser_1.parseArguments([...commandLeftovers], optionDefs);
                const builderLeftovers = parsedOptions['--'] || [];
                leftoverMap.set(name, { optionDefs, parsedOptions });
                potentialProjectNames = new Set(builderLeftovers.filter(x => potentialProjectNames.has(x)));
            }
            if (potentialProjectNames.size === 1) {
                projectName = [...potentialProjectNames][0];
                // remove the project name from the leftovers
                const optionInfo = leftoverMap.get(projectName);
                if (optionInfo) {
                    const locations = [];
                    let i = 0;
                    while (i < commandLeftovers.length) {
                        i = commandLeftovers.indexOf(projectName, i + 1);
                        if (i === -1) {
                            break;
                        }
                        locations.push(i);
                    }
                    delete optionInfo.parsedOptions['--'];
                    for (const location of locations) {
                        const tempLeftovers = [...commandLeftovers];
                        tempLeftovers.splice(location, 1);
                        const tempArgs = parser_1.parseArguments([...tempLeftovers], optionInfo.optionDefs);
                        delete tempArgs['--'];
                        if (JSON.stringify(optionInfo.parsedOptions) === JSON.stringify(tempArgs)) {
                            options['--'] = tempLeftovers;
                            break;
                        }
                    }
                }
            }
            if (!projectName && this.multiTarget && builderNames.size > 1) {
                throw new Error(core_1.tags.oneLine `
          Architect commands with command line overrides cannot target different builders. The
          '${this.target}' target would run on projects ${targetProjectNames.join()} which have the
          following builders: ${'\n  ' + [...builderNames].join('\n  ')}
        `);
            }
        }
        if (!projectName && !this.multiTarget) {
            const defaultProjectName = this._workspace.extensions['defaultProject'];
            if (targetProjectNames.length === 1) {
                projectName = targetProjectNames[0];
            }
            else if (defaultProjectName && targetProjectNames.includes(defaultProjectName)) {
                projectName = defaultProjectName;
            }
            else if (options.help) {
                // This is a special case where we just return.
                return;
            }
            else {
                throw new Error(this.missingTargetError || 'Cannot determine project or target for command.');
            }
        }
        options.project = projectName;
        const builderConf = await this._architectHost.getBuilderNameForTarget({
            project: projectName || (targetProjectNames.length > 0 ? targetProjectNames[0] : ''),
            target: this.target,
        });
        const builderDesc = await this._architectHost.resolveBuilder(builderConf);
        this.description.options.push(...(await json_schema_1.parseJsonSchemaToOptions(this._registry, builderDesc.optionSchema)));
        // Update options to remove analytics from options if the builder isn't safelisted.
        for (const o of this.description.options) {
            if (o.userAnalytics && !analytics_1.isPackageNameSafeForAnalytics(builderConf)) {
                o.userAnalytics = undefined;
            }
        }
    }
    async run(options) {
        return await this.runArchitectTarget(options);
    }
    async runBepTarget(command, configuration, overrides, buildEventLog) {
        const bep = new bep_1.BepJsonWriter(buildEventLog);
        // Send start
        bep.writeBuildStarted(command);
        let last = 1;
        let rebuild = false;
        const run = await this._architect.scheduleTarget(configuration, overrides, {
            logger: this.logger,
        });
        await run.output.forEach(event => {
            last = event.success ? 0 : 1;
            if (rebuild) {
                // NOTE: This will have an incorrect timestamp but this cannot be fixed
                //       until builders report additional status events
                bep.writeBuildStarted(command);
            }
            else {
                rebuild = true;
            }
            bep.writeBuildFinished(last);
        });
        await run.stop();
        return last;
    }
    async runSingleTarget(target, targetOptions, commandOptions) {
        // We need to build the builderSpec twice because architect does not understand
        // overrides separately (getting the configuration builds the whole project, including
        // overrides).
        const builderConf = await this._architectHost.getBuilderNameForTarget(target);
        const builderDesc = await this._architectHost.resolveBuilder(builderConf);
        const targetOptionArray = await json_schema_1.parseJsonSchemaToOptions(this._registry, builderDesc.optionSchema);
        const overrides = parser_1.parseArguments(targetOptions, targetOptionArray, this.logger);
        const allowAdditionalProperties = typeof builderDesc.optionSchema === 'object' && builderDesc.optionSchema.additionalProperties;
        if (overrides['--'] && !allowAdditionalProperties) {
            (overrides['--'] || []).forEach(additional => {
                this.logger.fatal(`Unknown option: '${additional.split(/=/)[0]}'`);
            });
            return 1;
        }
        if (commandOptions.buildEventLog && ['build', 'serve'].includes(this.description.name)) {
            // The build/serve commands supports BEP messaging
            this.logger.warn('BEP support is experimental and subject to change.');
            return this.runBepTarget(this.description.name, target, overrides, commandOptions.buildEventLog);
        }
        else {
            const run = await this._architect.scheduleTarget(target, overrides, {
                logger: this.logger,
                analytics: analytics_1.isPackageNameSafeForAnalytics(builderConf) ? this.analytics : undefined,
            });
            const { error, success } = await run.output.toPromise();
            await run.stop();
            if (error) {
                this.logger.error(error);
            }
            return success ? 0 : 1;
        }
    }
    async runArchitectTarget(options) {
        const extra = options['--'] || [];
        try {
            const targetSpec = this._makeTargetSpecifier(options);
            if (!targetSpec.project && this.target) {
                // This runs each target sequentially.
                // Running them in parallel would jumble the log messages.
                let result = 0;
                for (const project of this.getProjectNamesByTarget(this.target)) {
                    result |= await this.runSingleTarget({ ...targetSpec, project }, extra, options);
                }
                return result;
            }
            else {
                return await this.runSingleTarget(targetSpec, extra, options);
            }
        }
        catch (e) {
            if (e instanceof core_1.schema.SchemaValidationException) {
                const newErrors = [];
                for (const schemaError of e.errors) {
                    if (schemaError.keyword === 'additionalProperties') {
                        const unknownProperty = schemaError.params.additionalProperty;
                        if (unknownProperty in options) {
                            const dashes = unknownProperty.length === 1 ? '-' : '--';
                            this.logger.fatal(`Unknown option: '${dashes}${unknownProperty}'`);
                            continue;
                        }
                    }
                    newErrors.push(schemaError);
                }
                if (newErrors.length > 0) {
                    this.logger.error(new core_1.schema.SchemaValidationException(newErrors).message);
                }
                return 1;
            }
            else {
                throw e;
            }
        }
    }
    getProjectNamesByTarget(targetName) {
        const allProjectsForTargetName = [];
        for (const [name, project] of this._workspace.projects) {
            if (project.targets.has(targetName)) {
                allProjectsForTargetName.push(name);
            }
        }
        if (this.multiTarget) {
            // For multi target commands, we always list all projects that have the target.
            return allProjectsForTargetName;
        }
        else {
            // For single target commands, we try the default project first,
            // then the full list if it has a single project, then error out.
            const maybeDefaultProject = this._workspace.extensions['defaultProject'];
            if (maybeDefaultProject && allProjectsForTargetName.includes(maybeDefaultProject)) {
                return [maybeDefaultProject];
            }
            if (allProjectsForTargetName.length === 1) {
                return allProjectsForTargetName;
            }
            throw new Error(`Could not determine a single project for the '${targetName}' target.`);
        }
    }
    _makeTargetSpecifier(commandOptions) {
        let project, target, configuration;
        if (commandOptions.target) {
            [project, target, configuration] = commandOptions.target.split(':');
            if (commandOptions.configuration) {
                configuration = commandOptions.configuration;
            }
        }
        else {
            project = commandOptions.project;
            target = this.target;
            if (commandOptions.prod) {
                // The --prod flag will always be the first configuration, available to be overwritten
                // by following configurations.
                configuration = 'production';
            }
            if (commandOptions.configuration) {
                configuration =
                    `${configuration ? `${configuration},` : ''}${commandOptions.configuration}`;
            }
        }
        if (!project) {
            project = '';
        }
        if (!target) {
            target = '';
        }
        return {
            project,
            configuration: configuration || '',
            target,
        };
    }
}
exports.ArchitectCommand = ArchitectCommand;
