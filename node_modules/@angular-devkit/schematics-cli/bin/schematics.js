#!/usr/bin/env node
"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
// symbol polyfill must go first
require("symbol-observable");
// tslint:disable-next-line:ordered-imports import-groups
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const schematics_1 = require("@angular-devkit/schematics");
const tools_1 = require("@angular-devkit/schematics/tools");
const inquirer = require("inquirer");
const minimist = require("minimist");
/**
 * Parse the name of schematic passed in argument, and return a {collection, schematic} named
 * tuple. The user can pass in `collection-name:schematic-name`, and this function will either
 * return `{collection: 'collection-name', schematic: 'schematic-name'}`, or it will error out
 * and show usage.
 *
 * In the case where a collection name isn't part of the argument, the default is to use the
 * schematics package (@schematics/schematics) as the collection.
 *
 * This logic is entirely up to the tooling.
 *
 * @param str The argument to parse.
 * @return {{collection: string, schematic: (string)}}
 */
function parseSchematicName(str) {
    let collection = '@schematics/schematics';
    let schematic = str;
    if (schematic && schematic.indexOf(':') != -1) {
        [collection, schematic] = schematic.split(':', 2);
    }
    return { collection, schematic };
}
function _listSchematics(collectionName, logger) {
    try {
        const engineHost = new tools_1.NodeModulesEngineHost();
        const engine = new schematics_1.SchematicEngine(engineHost);
        const collection = engine.createCollection(collectionName);
        logger.info(engine.listSchematicNames(collection).join('\n'));
    }
    catch (error) {
        logger.fatal(error.message);
        return 1;
    }
    return 0;
}
function _createPromptProvider() {
    return (definitions) => {
        const questions = definitions.map(definition => {
            const question = {
                name: definition.id,
                message: definition.message,
                default: definition.default,
            };
            const validator = definition.validator;
            if (validator) {
                question.validate = input => validator(input);
            }
            switch (definition.type) {
                case 'confirmation':
                    return { ...question, type: 'confirm' };
                case 'list':
                    return {
                        ...question,
                        type: !!definition.multiselect ? 'checkbox' : 'list',
                        choices: definition.items && definition.items.map(item => {
                            if (typeof item == 'string') {
                                return item;
                            }
                            else {
                                return {
                                    name: item.label,
                                    value: item.value,
                                };
                            }
                        }),
                    };
                default:
                    return { ...question, type: definition.type };
            }
        });
        return inquirer.prompt(questions);
    };
}
async function main({ args, stdout = process.stdout, stderr = process.stderr, }) {
    const argv = parseArgs(args);
    /** Create the DevKit Logger used through the CLI. */
    const logger = node_1.createConsoleLogger(argv['verbose'], stdout, stderr);
    if (argv.help) {
        logger.info(getUsage());
        return 0;
    }
    /** Get the collection an schematic name from the first argument. */
    const { collection: collectionName, schematic: schematicName, } = parseSchematicName(argv._.shift() || null);
    const isLocalCollection = collectionName.startsWith('.') || collectionName.startsWith('/');
    /** If the user wants to list schematics, we simply show all the schematic names. */
    if (argv['list-schematics']) {
        return _listSchematics(collectionName, logger);
    }
    if (!schematicName) {
        logger.info(getUsage());
        return 1;
    }
    /** Gather the arguments for later use. */
    const debug = argv.debug === null ? isLocalCollection : argv.debug;
    const dryRun = argv['dry-run'] === null ? debug : argv['dry-run'];
    const force = argv['force'];
    const allowPrivate = argv['allow-private'];
    /** Create a Virtual FS Host scoped to where the process is being run. **/
    const fsHost = new core_1.virtualFs.ScopedHost(new node_1.NodeJsSyncHost(), core_1.normalize(process.cwd()));
    const registry = new core_1.schema.CoreSchemaRegistry(schematics_1.formats.standardFormats);
    /** Create the workflow that will be executed with this run. */
    const workflow = new tools_1.NodeWorkflow(fsHost, {
        force,
        dryRun,
        registry,
        resolvePaths: [process.cwd(), __dirname],
    });
    registry.addPostTransform(core_1.schema.transforms.addUndefinedDefaults);
    workflow.engineHost.registerOptionsTransform(tools_1.validateOptionsWithSchema(registry));
    // Indicate to the user when nothing has been done. This is automatically set to off when there's
    // a new DryRunEvent.
    let nothingDone = true;
    // Logging queue that receives all the messages to show the users. This only get shown when no
    // errors happened.
    let loggingQueue = [];
    let error = false;
    /**
     * Logs out dry run events.
     *
     * All events will always be executed here, in order of discovery. That means that an error would
     * be shown along other events when it happens. Since errors in workflows will stop the Observable
     * from completing successfully, we record any events other than errors, then on completion we
     * show them.
     *
     * This is a simple way to only show errors when an error occur.
     */
    workflow.reporter.subscribe((event) => {
        nothingDone = false;
        // Strip leading slash to prevent confusion.
        const eventPath = event.path.startsWith('/') ? event.path.substr(1) : event.path;
        switch (event.kind) {
            case 'error':
                error = true;
                const desc = event.description == 'alreadyExist' ? 'already exists' : 'does not exist';
                logger.error(`ERROR! ${eventPath} ${desc}.`);
                break;
            case 'update':
                loggingQueue.push(core_1.tags.oneLine `
        ${core_1.terminal.white('UPDATE')} ${eventPath} (${event.content.length} bytes)
      `);
                break;
            case 'create':
                loggingQueue.push(core_1.tags.oneLine `
        ${core_1.terminal.green('CREATE')} ${eventPath} (${event.content.length} bytes)
      `);
                break;
            case 'delete':
                loggingQueue.push(`${core_1.terminal.yellow('DELETE')} ${eventPath}`);
                break;
            case 'rename':
                const eventToPath = event.to.startsWith('/') ? event.to.substr(1) : event.to;
                loggingQueue.push(`${core_1.terminal.blue('RENAME')} ${eventPath} => ${eventToPath}`);
                break;
        }
    });
    /**
     * Listen to lifecycle events of the workflow to flush the logs between each phases.
     */
    workflow.lifeCycle.subscribe(event => {
        if (event.kind == 'workflow-end' || event.kind == 'post-tasks-start') {
            if (!error) {
                // Flush the log queue and clean the error state.
                loggingQueue.forEach(log => logger.info(log));
            }
            loggingQueue = [];
            error = false;
        }
    });
    /**
     * Remove every options from argv that we support in schematics itself.
     */
    const parsedArgs = Object.assign({}, argv);
    delete parsedArgs['--'];
    for (const key of booleanArgs) {
        delete parsedArgs[key];
    }
    /**
     * Add options from `--` to args.
     */
    const argv2 = minimist(argv['--']);
    for (const key of Object.keys(argv2)) {
        parsedArgs[key] = argv2[key];
    }
    // Pass the rest of the arguments as the smart default "argv". Then delete it.
    workflow.registry.addSmartDefaultProvider('argv', (schema) => {
        if ('index' in schema) {
            return argv._[Number(schema['index'])];
        }
        else {
            return argv._;
        }
    });
    delete parsedArgs._;
    // Add prompts.
    workflow.registry.usePromptProvider(_createPromptProvider());
    /**
     *  Execute the workflow, which will report the dry run events, run the tasks, and complete
     *  after all is done.
     *
     *  The Observable returned will properly cancel the workflow if unsubscribed, error out if ANY
     *  step of the workflow failed (sink or task), with details included, and will only complete
     *  when everything is done.
     */
    try {
        await workflow.execute({
            collection: collectionName,
            schematic: schematicName,
            options: parsedArgs,
            allowPrivate: allowPrivate,
            debug: debug,
            logger: logger,
        })
            .toPromise();
        if (nothingDone) {
            logger.info('Nothing to be done.');
        }
        return 0;
    }
    catch (err) {
        if (err instanceof schematics_1.UnsuccessfulWorkflowExecution) {
            // "See above" because we already printed the error.
            logger.fatal('The Schematic workflow failed. See above.');
        }
        else if (debug) {
            logger.fatal('An error occured:\n' + err.stack);
        }
        else {
            logger.fatal(err.stack || err.message);
        }
        return 1;
    }
}
exports.main = main;
/**
* Get usage of the CLI tool.
*/
function getUsage() {
    return core_1.tags.stripIndent `
  schematics [CollectionName:]SchematicName [options, ...]

  By default, if the collection name is not specified, use the internal collection provided
  by the Schematics CLI.

  Options:
      --debug             Debug mode. This is true by default if the collection is a relative
                          path (in that case, turn off with --debug=false).

      --allow-private     Allow private schematics to be run from the command line. Default to
                          false.

      --dry-run           Do not output anything, but instead just show what actions would be
                          performed. Default to true if debug is also true.

      --force             Force overwriting files that would otherwise be an error.

      --list-schematics   List all schematics from the collection, by name. A collection name
                          should be suffixed by a colon. Example: '@schematics/schematics:'.

      --verbose           Show more information.

      --help              Show this message.

  Any additional option is passed to the Schematics depending on
  `;
}
/** Parse the command line. */
const booleanArgs = [
    'allowPrivate',
    'allow-private',
    'debug',
    'dry-run',
    'dryRun',
    'force',
    'help',
    'list-schematics',
    'listSchematics',
    'verbose',
];
function parseArgs(args) {
    return minimist(args, {
        boolean: booleanArgs,
        alias: {
            'dryRun': 'dry-run',
            'listSchematics': 'list-schematics',
            'allowPrivate': 'allow-private',
        },
        default: {
            'debug': null,
            'dryRun': null,
        },
        '--': true,
    });
}
if (require.main === module) {
    const args = process.argv.slice(2);
    main({ args })
        .then(exitCode => process.exitCode = exitCode)
        .catch(e => { throw (e); });
}
