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
const crypto = require("crypto");
class CliFilesystem {
    constructor(_host, base) {
        this._host = _host;
        this.base = base;
    }
    list(path) {
        return this._recursiveList(this._resolve(path), []).catch(() => []);
    }
    async read(path) {
        return core_1.virtualFs.fileBufferToString(await this._readIntoBuffer(path));
    }
    async hash(path) {
        const sha1 = crypto.createHash('sha1');
        sha1.update(Buffer.from(await this._readIntoBuffer(path)));
        return sha1.digest('hex');
    }
    write(path, content) {
        return this._host.write(this._resolve(path), core_1.virtualFs.stringToFileBuffer(content))
            .toPromise();
    }
    _readIntoBuffer(path) {
        return this._host.read(this._resolve(path)).toPromise();
    }
    _resolve(path) {
        return core_1.join(core_1.normalize(this.base), core_1.normalize(path));
    }
    async _recursiveList(path, items) {
        const fragments = await this._host.list(path).toPromise();
        for (const fragment of fragments) {
            const item = core_1.join(path, fragment);
            if (await this._host.isDirectory(item).toPromise()) {
                await this._recursiveList(item, items);
            }
            else {
                items.push('/' + core_1.relative(core_1.normalize(this.base), item));
            }
        }
        return items;
    }
}
async function augmentAppWithServiceWorker(host, projectRoot, appRoot, outputPath, baseHref, ngswConfigPath) {
    const distPath = core_1.normalize(outputPath);
    const systemProjectRoot = core_1.getSystemPath(projectRoot);
    // Find the service worker package
    const workerPath = core_1.normalize(require.resolve('@angular/service-worker/ngsw-worker.js', { paths: [systemProjectRoot] }));
    const swConfigPath = require.resolve('@angular/service-worker/config', { paths: [systemProjectRoot] });
    // Determine the configuration file path
    let configPath;
    if (ngswConfigPath) {
        configPath = core_1.normalize(ngswConfigPath);
    }
    else {
        configPath = core_1.join(appRoot, 'ngsw-config.json');
    }
    // Ensure the configuration file exists
    const configExists = await host.exists(configPath).toPromise();
    if (!configExists) {
        throw new Error(core_1.tags.oneLine `
      Error: Expected to find an ngsw-config.json configuration
      file in the ${core_1.getSystemPath(appRoot)} folder. Either provide one or disable Service Worker
      in your angular.json configuration file.
    `);
    }
    // Read the configuration file
    const config = JSON.parse(core_1.virtualFs.fileBufferToString(await host.read(configPath).toPromise()));
    // Generate the manifest
    const GeneratorConstructor = require(swConfigPath).Generator;
    const generator = new GeneratorConstructor(new CliFilesystem(host, outputPath), baseHref);
    const output = await generator.process(config);
    // Write the manifest
    const manifest = JSON.stringify(output, null, 2);
    await host.write(core_1.join(distPath, 'ngsw.json'), core_1.virtualFs.stringToFileBuffer(manifest)).toPromise();
    // Write the worker code
    // NOTE: This is inefficient (kernel -> userspace -> kernel).
    //       `fs.copyFile` would be a better option but breaks the host abstraction
    const workerCode = await host.read(workerPath).toPromise();
    await host.write(core_1.join(distPath, 'ngsw-worker.js'), workerCode).toPromise();
    // If present, write the safety worker code
    const safetyPath = core_1.join(core_1.dirname(workerPath), 'safety-worker.js');
    if (await host.exists(safetyPath).toPromise()) {
        const safetyCode = await host.read(safetyPath).toPromise();
        await host.write(core_1.join(distPath, 'worker-basic.min.js'), safetyCode).toPromise();
        await host.write(core_1.join(distPath, 'safety-worker.js'), safetyCode).toPromise();
    }
}
exports.augmentAppWithServiceWorker = augmentAppWithServiceWorker;
