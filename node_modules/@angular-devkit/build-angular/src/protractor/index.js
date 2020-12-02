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
const core_1 = require("@angular-devkit/core");
const path_1 = require("path");
const url = require("url");
const utils_1 = require("../utils");
function runProtractor(root, options) {
    const additionalProtractorConfig = {
        baseUrl: options.baseUrl,
        specs: options.specs && options.specs.length ? options.specs : undefined,
        suite: options.suite,
        jasmineNodeOpts: {
            grep: options.grep,
            invertGrep: options.invertGrep,
        },
    };
    // TODO: Protractor manages process.exit itself, so this target will allways quit the
    // process. To work around this we run it in a subprocess.
    // https://github.com/angular/protractor/issues/4160
    return utils_1.runModuleAsObservableFork(root, 'protractor/built/launcher', 'init', [path_1.resolve(root, options.protractorConfig), additionalProtractorConfig]).toPromise();
}
async function updateWebdriver() {
    // The webdriver-manager update command can only be accessed via a deep import.
    const webdriverDeepImport = 'webdriver-manager/built/lib/cmds/update';
    let path;
    try {
        const protractorPath = require.resolve('protractor');
        path = require.resolve(webdriverDeepImport, { paths: [protractorPath] });
    }
    catch (error) {
        if (error.code !== 'MODULE_NOT_FOUND') {
            throw error;
        }
    }
    if (!path) {
        throw new Error(core_1.tags.stripIndents `
      Cannot automatically find webdriver-manager to update.
      Update webdriver-manager manually and run 'ng e2e --no-webdriver-update' instead.
    `);
    }
    // tslint:disable-next-line:max-line-length no-implicit-dependencies
    const webdriverUpdate = await Promise.resolve().then(() => require(path));
    // run `webdriver-manager update --standalone false --gecko false --quiet`
    // if you change this, update the command comment in prev line
    return webdriverUpdate.program.run({
        standalone: false,
        gecko: false,
        quiet: true,
    });
}
async function execute(options, context) {
    // ensure that only one of these options is used
    if (options.devServerTarget && options.baseUrl) {
        throw new Error(core_1.tags.stripIndents `
    The 'baseUrl' option cannot be used with 'devServerTarget'.
    When present, 'devServerTarget' will be used to automatically setup 'baseUrl' for Protractor.
    `);
    }
    if (options.webdriverUpdate) {
        await updateWebdriver();
    }
    let baseUrl = options.baseUrl;
    let server;
    if (options.devServerTarget) {
        const target = architect_1.targetFromTargetString(options.devServerTarget);
        const serverOptions = await context.getTargetOptions(target);
        const overrides = { watch: false };
        if (options.host !== undefined) {
            overrides.host = options.host;
        }
        else if (typeof serverOptions.host === 'string') {
            options.host = serverOptions.host;
        }
        else {
            options.host = overrides.host = 'localhost';
        }
        if (options.port !== undefined) {
            overrides.port = options.port;
        }
        else if (typeof serverOptions.port === 'number') {
            options.port = serverOptions.port;
        }
        server = await context.scheduleTarget(target, overrides);
        const result = await server.result;
        if (!result.success) {
            return { success: false };
        }
        if (typeof serverOptions.publicHost === 'string') {
            let publicHost = serverOptions.publicHost;
            if (!/^\w+:\/\//.test(publicHost)) {
                publicHost = `${serverOptions.ssl
                    ? 'https'
                    : 'http'}://${publicHost}`;
            }
            const clientUrl = url.parse(publicHost);
            baseUrl = url.format(clientUrl);
        }
        else if (typeof result.baseUrl === 'string') {
            baseUrl = result.baseUrl;
        }
        else if (typeof result.port === 'number') {
            baseUrl = url.format({
                protocol: serverOptions.ssl ? 'https' : 'http',
                hostname: options.host,
                port: result.port.toString(),
            });
        }
    }
    // Like the baseUrl in protractor config file when using the API we need to add
    // a trailing slash when provide to the baseUrl.
    if (baseUrl && !baseUrl.endsWith('/')) {
        baseUrl += '/';
    }
    try {
        return await runProtractor(context.workspaceRoot, { ...options, baseUrl });
    }
    catch (_a) {
        return { success: false };
    }
    finally {
        if (server) {
            await server.stop();
        }
    }
}
exports.execute = execute;
exports.default = architect_1.createBuilder(execute);
