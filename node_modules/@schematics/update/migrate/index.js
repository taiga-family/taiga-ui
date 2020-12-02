"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const semver = require("semver");
/**
 * Cleans up "short" version numbers so they become valid semver. For example;
 *   1 => 1.0.0
 *   1.2 => 1.2.0
 *   1-beta => 1.0.0-beta
 *
 * Exported for testing only.
 */
function _coerceVersionNumber(version) {
    if (!version.match(/^\d{1,30}\.\d{1,30}\.\d{1,30}/)) {
        const match = version.match(/^\d{1,30}(\.\d{1,30})*/);
        if (!match) {
            return null;
        }
        if (!match[1]) {
            version = version.substr(0, match[0].length) + '.0.0' + version.substr(match[0].length);
        }
        else if (!match[2]) {
            version = version.substr(0, match[0].length) + '.0' + version.substr(match[0].length);
        }
        else {
            return null;
        }
    }
    return semver.valid(version);
}
exports._coerceVersionNumber = _coerceVersionNumber;
function default_1(options) {
    return (tree, context) => {
        const schematicsToRun = [];
        const from = _coerceVersionNumber(options.from);
        if (!from) {
            throw new schematics_1.SchematicsException(`Invalid from option: ${JSON.stringify(options.from)}`);
        }
        const to = semver.validRange('<=' + options.to);
        if (!to) {
            throw new schematics_1.SchematicsException(`Invalid to option: ${JSON.stringify(options.to)}`);
        }
        // Create the collection for the package.
        const collection = context.engine.createCollection(options.collection);
        for (const name of collection.listSchematicNames()) {
            const schematic = collection.createSchematic(name, true);
            const description = schematic.description;
            let version = description['version'];
            if (typeof version == 'string') {
                version = _coerceVersionNumber(version);
                if (!version) {
                    throw new schematics_1.SchematicsException(`Invalid migration version: ${JSON.stringify(description['version'])}`);
                }
                if (semver.gt(version, from) &&
                    semver.satisfies(version, to, { includePrerelease: true })) {
                    schematicsToRun.push({ name, version });
                }
            }
        }
        schematicsToRun.sort((a, b) => {
            const cmp = semver.compare(a.version, b.version);
            // Revert to comparing the names of the collection if the versions are equal.
            return cmp == 0 ? a.name.localeCompare(b.name) : cmp;
        });
        if (schematicsToRun.length > 0) {
            context.logger.info(`** Executing migrations for package '${options.package}' **`);
            const rules = schematicsToRun.map(x => schematics_1.externalSchematic(options.collection, x.name, {}));
            return schematics_1.chain(rules);
        }
        return tree;
    };
}
exports.default = default_1;
