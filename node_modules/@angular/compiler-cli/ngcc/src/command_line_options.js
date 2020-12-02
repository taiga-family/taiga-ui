#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/command_line_options", ["require", "exports", "yargs", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/logging/console_logger", "@angular/compiler-cli/ngcc/src/logging/logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var yargs = require("yargs");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var console_logger_1 = require("@angular/compiler-cli/ngcc/src/logging/console_logger");
    var logger_1 = require("@angular/compiler-cli/ngcc/src/logging/logger");
    function parseCommandLineOptions(args) {
        var options = yargs
            .option('s', {
            alias: 'source',
            describe: 'A path (relative to the working directory) of the `node_modules` folder to process.',
            default: './node_modules'
        })
            .option('f', { alias: 'formats', hidden: true, array: true })
            .option('p', {
            alias: 'properties',
            array: true,
            describe: 'An array of names of properties in package.json to compile (e.g. `module` or `es2015`)\n' +
                'Each of these properties should hold the path to a bundle-format.\n' +
                'If provided, only the specified properties are considered for processing.\n' +
                'If not provided, all the supported format properties (e.g. fesm2015, fesm5, es2015, esm2015, esm5, main, module) in the package.json are considered.'
        })
            .option('t', {
            alias: 'target',
            describe: 'A relative path (from the `source` path) to a single entry-point to process (plus its dependencies).\n' +
                'If this property is provided then `error-on-failed-entry-point` is forced to true',
        })
            .option('first-only', {
            describe: 'If specified then only the first matching package.json property will be compiled.',
            type: 'boolean'
        })
            .option('create-ivy-entry-points', {
            describe: 'If specified then new `*_ivy_ngcc` entry-points will be added to package.json rather than modifying the ones in-place.\n' +
                'For this to work you need to have custom resolution set up (e.g. in webpack) to look for these new entry-points.\n' +
                'The Angular CLI does this already, so it is safe to use this option if the project is being built via the CLI.',
            type: 'boolean',
        })
            .option('legacy-message-ids', {
            describe: 'Render `$localize` messages with legacy format ids.\n' +
                'The default value is `true`. Only set this to `false` if you do not want legacy message ids to\n' +
                'be rendered. For example, if you are not using legacy message ids in your translation files\n' +
                'AND are not doing compile-time inlining of translations, in which case the extra message ids\n' +
                'would add unwanted size to the final source bundle.\n' +
                'It is safe to leave this set to true if you are doing compile-time inlining because the extra\n' +
                'legacy message ids will all be stripped during translation.',
            type: 'boolean',
            default: true,
        })
            .option('async', {
            describe: 'Whether to compile asynchronously. This is enabled by default as it allows compilations to be parallelized.\n' +
                'Disabling asynchronous compilation may be useful for debugging.',
            type: 'boolean',
            default: true,
        })
            .option('l', {
            alias: 'loglevel',
            describe: 'The lowest severity logging message that should be output.',
            choices: ['debug', 'info', 'warn', 'error'],
        })
            .option('invalidate-entry-point-manifest', {
            describe: 'If this is set then ngcc will not read an entry-point manifest file from disk.\n' +
                'Instead it will walk the directory tree as normal looking for entry-points, and then write a new manifest file.',
            type: 'boolean',
            default: false,
        })
            .option('error-on-failed-entry-point', {
            describe: 'Set this option in order to terminate immediately with an error code if an entry-point fails to be processed.\n' +
                'If `-t`/`--target` is provided then this property is always true and cannot be changed. Otherwise the default is false.\n' +
                'When set to false, ngcc will continue to process entry-points after a failure. In which case it will log an error and resume processing other entry-points.',
            type: 'boolean',
            default: false,
        })
            .option('tsconfig', {
            describe: 'A path to a tsconfig.json file that will be used to configure the Angular compiler and module resolution used by ngcc.\n' +
                'If not provided, ngcc will attempt to read a `tsconfig.json` file from the folder above that given by the `-s` option.\n' +
                'Set to false (via `--no-tsconfig`) if you do not want ngcc to use any `tsconfig.json` file.',
            type: 'string',
        })
            .strict()
            .help()
            .parse(args);
        if (options['f'] && options['f'].length) {
            console.error('The formats option (-f/--formats) has been removed. Consider the properties option (-p/--properties) instead.');
            process.exit(1);
        }
        file_system_1.setFileSystem(new file_system_1.NodeJSFileSystem());
        var baseSourcePath = file_system_1.resolve(options['s'] || './node_modules');
        var propertiesToConsider = options['p'];
        var targetEntryPointPath = options['t'] ? options['t'] : undefined;
        var compileAllFormats = !options['first-only'];
        var createNewEntryPointFormats = options['create-ivy-entry-points'];
        var logLevel = options['l'];
        var enableI18nLegacyMessageIdFormat = options['legacy-message-ids'];
        var invalidateEntryPointManifest = options['invalidate-entry-point-manifest'];
        var errorOnFailedEntryPoint = options['error-on-failed-entry-point'];
        // yargs is not so great at mixed string+boolean types, so we have to test tsconfig against a
        // string "false" to capture the `tsconfig=false` option.
        // And we have to convert the option to a string to handle `no-tsconfig`, which will be `false`.
        var tsConfigPath = "" + options['tsconfig'] === 'false' ? null : options['tsconfig'];
        var logger = logLevel && new console_logger_1.ConsoleLogger(logger_1.LogLevel[logLevel]);
        return {
            basePath: baseSourcePath,
            propertiesToConsider: propertiesToConsider,
            targetEntryPointPath: targetEntryPointPath,
            compileAllFormats: compileAllFormats,
            createNewEntryPointFormats: createNewEntryPointFormats,
            logger: logger,
            enableI18nLegacyMessageIdFormat: enableI18nLegacyMessageIdFormat,
            async: options['async'],
            invalidateEntryPointManifest: invalidateEntryPointManifest,
            errorOnFailedEntryPoint: errorOnFailedEntryPoint,
            tsConfigPath: tsConfigPath
        };
    }
    exports.parseCommandLineOptions = parseCommandLineOptions;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZF9saW5lX29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvY29tbWFuZF9saW5lX29wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQ0E7Ozs7OztPQU1HO0lBQ0gsNkJBQStCO0lBRS9CLDJFQUFxRjtJQUNyRix3RkFBdUQ7SUFDdkQsd0VBQTBDO0lBRzFDLFNBQWdCLHVCQUF1QixDQUFDLElBQWM7UUFDcEQsSUFBTSxPQUFPLEdBQ1QsS0FBSzthQUNBLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDWCxLQUFLLEVBQUUsUUFBUTtZQUNmLFFBQVEsRUFDSixxRkFBcUY7WUFDekYsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQixDQUFDO2FBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7YUFDMUQsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNYLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUNKLDBGQUEwRjtnQkFDMUYscUVBQXFFO2dCQUNyRSw2RUFBNkU7Z0JBQzdFLHNKQUFzSjtTQUMzSixDQUFDO2FBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNYLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUNKLHdHQUF3RztnQkFDeEcsbUZBQW1GO1NBQ3hGLENBQUM7YUFDRCxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3BCLFFBQVEsRUFDSixtRkFBbUY7WUFDdkYsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQzthQUNELE1BQU0sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqQyxRQUFRLEVBQ0osMEhBQTBIO2dCQUMxSCxvSEFBb0g7Z0JBQ3BILGdIQUFnSDtZQUNw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YSxDQUFDLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVqRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsb0JBQW9CLHNCQUFBO1lBQ3BCLG9CQUFvQixzQkFBQTtZQUNwQixpQkFBaUIsbUJBQUE7WUFDakIsMEJBQTBCLDRCQUFBO1lBQzFCLE1BQU0sUUFBQTtZQUNOLCtCQUErQixpQ0FBQTtZQUMvQixLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN2Qiw0QkFBNEIsOEJBQUE7WUFDNUIsdUJBQXVCLHlCQUFBO1lBQ3ZCLFlBQVksY0FBQTtTQUNiLENBQUM7SUFDSixDQUFDO0lBM0hELDBEQTJIQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHlhcmdzIGZyb20gJ3lhcmdzJztcblxuaW1wb3J0IHtyZXNvbHZlLCBzZXRGaWxlU3lzdGVtLCBOb2RlSlNGaWxlU3lzdGVtfSBmcm9tICcuLi8uLi9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtDb25zb2xlTG9nZ2VyfSBmcm9tICcuL2xvZ2dpbmcvY29uc29sZV9sb2dnZXInO1xuaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSAnLi9sb2dnaW5nL2xvZ2dlcic7XG5pbXBvcnQge05nY2NPcHRpb25zfSBmcm9tICcuL25nY2Nfb3B0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbW1hbmRMaW5lT3B0aW9ucyhhcmdzOiBzdHJpbmdbXSk6IE5nY2NPcHRpb25zIHtcbiAgY29uc3Qgb3B0aW9ucyA9XG4gICAgICB5YXJnc1xuICAgICAgICAgIC5vcHRpb24oJ3MnLCB7XG4gICAgICAgICAgICBhbGlhczogJ3NvdXJjZScsXG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnQSBwYXRoIChyZWxhdGl2ZSB0byB0aGUgd29ya2luZyBkaXJlY3RvcnkpIG9mIHRoZSBgbm9kZV9tb2R1bGVzYCBmb2xkZXIgdG8gcHJvY2Vzcy4nLFxuICAgICAgICAgICAgZGVmYXVsdDogJy4vbm9kZV9tb2R1bGVzJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignZicsIHthbGlhczogJ2Zvcm1hdHMnLCBoaWRkZW46wqB0cnVlLCBhcnJheTogdHJ1ZX0pXG4gICAgICAgICAgLm9wdGlvbigncCcsIHtcbiAgICAgICAgICAgIGFsaWFzOiAncHJvcGVydGllcycsXG4gICAgICAgICAgICBhcnJheTogdHJ1ZSxcbiAgICAgICAgICAgIGRlc2NyaWJlOlxuICAgICAgICAgICAgICAgICdBbiBhcnJheSBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGluIHBhY2thZ2UuanNvbiB0byBjb21waWxlIChlLmcuIGBtb2R1bGVgIG9yIGBlczIwMTVgKVxcbicgK1xuICAgICAgICAgICAgICAgICdFYWNoIG9mIHRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGhvbGQgdGhlIHBhdGggdG8gYSBidW5kbGUtZm9ybWF0LlxcbicgK1xuICAgICAgICAgICAgICAgICdJZiBwcm92aWRlZCwgb25seSB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMgYXJlIGNvbnNpZGVyZWQgZm9yIHByb2Nlc3NpbmcuXFxuJyArXG4gICAgICAgICAgICAgICAgJ0lmIG5vdCBwcm92aWRlZCwgYWxsIHRoZSBzdXBwb3J0ZWQgZm9ybWF0IHByb3BlcnRpZXMgKGUuZy4gZmVzbTIwMTUsIGZlc201LCBlczIwMTUsIGVzbTIwMTUsIGVzbTUsIG1haW4sIG1vZHVsZSkgaW4gdGhlIHBhY2thZ2UuanNvbiBhcmUgY29uc2lkZXJlZC4nXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCd0Jywge1xuICAgICAgICAgICAgYWxpYXM6ICd0YXJnZXQnLFxuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ0EgcmVsYXRpdmUgcGF0aCAoZnJvbSB0aGUgYHNvdXJjZWAgcGF0aCkgdG8gYSBzaW5nbGUgZW50cnktcG9pbnQgdG8gcHJvY2VzcyAocGx1cyBpdHMgZGVwZW5kZW5jaWVzKS5cXG4nICtcbiAgICAgICAgICAgICAgICAnSWYgdGhpcyBwcm9wZXJ0eSBpcyBwcm92aWRlZCB0aGVuIGBlcnJvci1vbi1mYWlsZWQtZW50cnktcG9pbnRgIGlzIGZvcmNlZCB0byB0cnVlJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2ZpcnN0LW9ubHknLCB7XG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnSWYgc3BlY2lmaWVkIHRoZW4gb25seSB0aGUgZmlyc3QgbWF0Y2hpbmcgcGFja2FnZS5qc29uIHByb3BlcnR5IHdpbGwgYmUgY29tcGlsZWQuJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignY3JlYXRlLWl2eS1lbnRyeS1wb2ludHMnLCB7XG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnSWYgc3BlY2lmaWVkIHRoZW4gbmV3IGAqX2l2eV9uZ2NjYCBlbnRyeS1wb2ludHMgd2lsbCBiZSBhZGRlZCB0byBwYWNrYWdlLmpzb24gcmF0aGVyIHRoYW4gbW9kaWZ5aW5nIHRoZSBvbmVzIGluLXBsYWNlLlxcbicgK1xuICAgICAgICAgICAgICAgICdGb3IgdGhpcyB0byB3b3JrIHlvdSBuZWVkIHRvIGhhdmUgY3VzdG9tIHJlc29sdXRpb24gc2V0IHVwIChlLmcuIGluIHdlYnBhY2spIHRvIGxvb2sgZm9yIHRoZXNlIG5ldyBlbnRyeS1wb2ludHMuXFxuJyArXG4gICAgICAgICAgICAgICAgJ1RoZSBBbmd1bGFyIENMSSBkb2VzIHRoaXMgYWxyZWFkeSwgc28gaXQgaXMgc2FmZSB0byB1c2UgdGhpcyBvcHRpb24gaWYgdGhlIHByb2plY3QgaXMgYmVpbmcgYnVpbHQgdmlhIHRoZSBDTEkuJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2xlZ2FjeS1tZXNzYWdlLWlkcycsIHtcbiAgICAgICAgICAgIGRlc2NyaWJlOiAnUmVuZGVyIGAkbG9jYWxpemVgIG1lc3NhZ2VzIHdpdGggbGVnYWN5IGZvcm1hdCBpZHMuXFxuJyArXG4gICAgICAgICAgICAgICAgJ1RoZSBkZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC4gT25seSBzZXQgdGhpcyB0byBgZmFsc2VgIGlmIHlvdSBkbyBub3Qgd2FudCBsZWdhY3kgbWVzc2FnZSBpZHMgdG9cXG4nICtcbiAgICAgICAgICAgICAgICAnYmUgcmVuZGVyZWQuIEZvciBleGFtcGxlLCBpZiB5b3UgYXJlIG5vdCB1c2luZyBsZWdhY3kgbWVzc2FnZSBpZHMgaW4geW91ciB0cmFuc2xhdGlvbiBmaWxlc1xcbicgK1xuICAgICAgICAgICAgICAgICdBTkQgYXJlIG5vdCBkb2luZyBjb21waWxlLXRpbWUgaW5saW5pbmcgb2YgdHJhbnNsYXRpb25zLCBpbiB3aGljaCBjYXNlIHRoZSBleHRyYSBtZXNzYWdlIGlkc1xcbicgK1xuICAgICAgICAgICAgICAgICd3b3VsZCBhZGQgdW53YW50ZWQgc2l6ZSB0byB0aGUgZmluYWwgc291cmNlIGJ1bmRsZS5cXG4nICtcbiAgICAgICAgICAgICAgICAnSXQgaXMgc2FmZSB0byBsZWF2ZSB0aGlzIHNldCB0byB0cnVlIGlmIHlvdSBhcmUgZG9pbmcgY29tcGlsZS10aW1lIGlubGluaW5nIGJlY2F1c2UgdGhlIGV4dHJhXFxuJyArXG4gICAgICAgICAgICAgICAgJ2xlZ2FjeSBtZXNzYWdlIGlkcyB3aWxsIGFsbCBiZSBzdHJpcHBlZCBkdXJpbmcgdHJhbnNsYXRpb24uJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdhc3luYycsIHtcbiAgICAgICAgICAgIGRlc2NyaWJlOlxuICAgICAgICAgICAgICAgICdXaGV0aGVyIHRvIGNvbXBpbGUgYXN5bmNocm9ub3VzbHkuIFRoaXMgaXMgZW5hYmxlZCBieSBkZWZhdWx0IGFzIGl0IGFsbG93cyBjb21waWxhdGlvbnMgdG8gYmUgcGFyYWxsZWxpemVkLlxcbicgK1xuICAgICAgICAgICAgICAgICdEaXNhYmxpbmcgYXN5bmNocm9ub3VzIGNvbXBpbGF0aW9uIG1heSBiZSB1c2VmdWwgZm9yIGRlYnVnZ2luZy4nLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2wnLCB7XG4gICAgICAgICAgICBhbGlhczogJ2xvZ2xldmVsJyxcbiAgICAgICAgICAgIGRlc2NyaWJlOiAnVGhlIGxvd2VzdCBzZXZlcml0eSBsb2dnaW5nIG1lc3NhZ2UgdGhhdCBzaG91bGQgYmUgb3V0cHV0LicsXG4gICAgICAgICAgICBjaG9pY2VzOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignaW52YWxpZGF0ZS1lbnRyeS1wb2ludC1tYW5pZmVzdCcsIHtcbiAgICAgICAgICAgIGRlc2NyaWJlOlxuICAgICAgICAgICAgICAgICdJZiB0aGlzIGlzIHNldCB0aGVuIG5nY2Mgd2lsbCBub3QgcmVhZCBhbiBlbnRyeS1wb2ludCBtYW5pZmVzdCBmaWxlIGZyb20gZGlzay5cXG4nICtcbiAgICAgICAgICAgICAgICAnSW5zdGVhZCBpdCB3aWxsIHdhbGsgdGhlIGRpcmVjdG9yeSB0cmVlIGFzIG5vcm1hbCBsb29raW5nIGZvciBlbnRyeS1wb2ludHMsIGFuZCB0aGVuIHdyaXRlIGEgbmV3IG1hbmlmZXN0IGZpbGUuJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignZXJyb3Itb24tZmFpbGVkLWVudHJ5LXBvaW50Jywge1xuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ1NldCB0aGlzIG9wdGlvbiBpbiBvcmRlciB0byB0ZXJtaW5hdGUgaW1tZWRpYXRlbHkgd2l0aCBhbiBlcnJvciBjb2RlIGlmIGFuIGVudHJ5LXBvaW50IGZhaWxzIHRvIGJlIHByb2Nlc3NlZC5cXG4nICtcbiAgICAgICAgICAgICAgICAnSWYgYC10YC9gLS10YXJnZXRgIGlzIHByb3ZpZGVkIHRoZW4gdGhpcyBwcm9wZXJ0eSBpcyBhbHdheXMgdHJ1ZSBhbmQgY2Fubm90IGJlIGNoYW5nZWQuIE90aGVyd2lzZSB0aGUgZGVmYXVsdCBpcyBmYWxzZS5cXG4nICtcbiAgICAgICAgICAgICAgICAnV2hlbiBzZXQgdG8gZmFsc2UsIG5nY2Mgd2lsbCBjb250aW51ZSB0byBwcm9jZXNzIGVudHJ5LXBvaW50cyBhZnRlciBhIGZhaWx1cmUuIEluIHdoaWNoIGNhc2UgaXQgd2lsbCBsb2cgYW4gZXJyb3IgYW5kIHJlc3VtZSBwcm9jZXNzaW5nIG90aGVyIGVudHJ5LXBvaW50cy4nLFxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCd0c2NvbmZpZycsIHtcbiAgICAgICAgICAgIGRlc2NyaWJlOlxuICAgICAgICAgICAgICAgICdBIHBhdGggdG8gYSB0c2NvbmZpZy5qc29uIGZpbGUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBBbmd1bGFyIGNvbXBpbGVyIGFuZCBtb2R1bGUgcmVzb2x1dGlvbiB1c2VkIGJ5IG5nY2MuXFxuJyArXG4gICAgICAgICAgICAgICAgJ0lmIG5vdCBwcm92aWRlZCwgbmdjYyB3aWxsIGF0dGVtcHQgdG8gcmVhZCBhIGB0c2NvbmZpZy5qc29uYCBmaWxlIGZyb20gdGhlIGZvbGRlciBhYm92ZSB0aGF0IGdpdmVuIGJ5IHRoZSBgLXNgIG9wdGlvbi5cXG4nICtcbiAgICAgICAgICAgICAgICAnU2V0IHRvIGZhbHNlICh2aWEgYC0tbm8tdHNjb25maWdgKSBpZiB5b3UgZG8gbm90IHdhbnQgbmdjYyB0byB1c2UgYW55IGB0c2NvbmZpZy5qc29uYCBmaWxlLicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdHJpY3QoKVxuICAgICAgICAgIC5oZWxwKClcbiAgICAgICAgICAucGFyc2UoYXJncyk7XG5cbiAgaWYgKG9wdGlvbnNbJ2YnXSAmJiBvcHRpb25zWydmJ10ubGVuZ3RoKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1RoZSBmb3JtYXRzIG9wdGlvbiAoLWYvLS1mb3JtYXRzKSBoYXMgYmVlbiByZW1vdmVkLiBDb25zaWRlciB0aGUgcHJvcGVydGllcyBvcHRpb24gKC1wLy0tcHJvcGVydGllcykgaW5zdGVhZC4nKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cblxuICBzZXRGaWxlU3lzdGVtKG5ldyBOb2RlSlNGaWxlU3lzdGVtKCkpO1xuXG4gIGNvbnN0IGJhc2VTb3VyY2VQYXRoID0gcmVzb2x2ZShvcHRpb25zWydzJ10gfHwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gIGNvbnN0IHByb3BlcnRpZXNUb0NvbnNpZGVyOiBzdHJpbmdbXSA9IG9wdGlvbnNbJ3AnXTtcbiAgY29uc3QgdGFyZ2V0RW50cnlQb2ludFBhdGggPSBvcHRpb25zWyd0J10gPyBvcHRpb25zWyd0J10gOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGNvbXBpbGVBbGxGb3JtYXRzID0gIW9wdGlvbnNbJ2ZpcnN0LW9ubHknXTtcbiAgY29uc3QgY3JlYXRlTmV3RW50cnlQb2ludEZvcm1hdHMgPSBvcHRpb25zWydjcmVhdGUtaXZ5LWVudHJ5LXBvaW50cyddO1xuICBjb25zdCBsb2dMZXZlbCA9IG9wdGlvbnNbJ2wnXSBhcyBrZXlvZiB0eXBlb2YgTG9nTGV2ZWwgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVuYWJsZUkxOG5MZWdhY3lNZXNzYWdlSWRGb3JtYXQgPSBvcHRpb25zWydsZWdhY3ktbWVzc2FnZS1pZHMnXTtcbiAgY29uc3QgaW52YWxpZGF0ZUVudHJ5UG9pbnRNYW5pZmVzdCA9IG9wdGlvbnNbJ2ludmFsaWRhdGUtZW50cnktcG9pbnQtbWFuaWZlc3QnXTtcbiAgY29uc3QgZXJyb3JPbkZhaWxlZEVudHJ5UG9pbnQgPSBvcHRpb25zWydlcnJvci1vbi1mYWlsZWQtZW50cnktcG9pbnQnXTtcbiAgLy8geWFyZ3MgaXMgbm90IHNvIGdyZWF0IGF0IG1peGVkIHN0cmluZytib29sZWFuIHR5cGVzLCBzbyB3ZSBoYXZlIHRvIHRlc3QgdHNjb25maWcgYWdhaW5zdCBhXG4gIC8vIHN0cmluZyBcImZhbHNlXCIgdG8gY2FwdHVyZSB0aGUgYHRzY29uZmlnPWZhbHNlYCBvcHRpb24uXG4gIC8vIEFuZCB3ZSBoYXZlIHRvIGNvbnZlcnQgdGhlIG9wdGlvbiB0byBhIHN0cmluZyB0byBoYW5kbGUgYG5vLXRzY29uZmlnYCwgd2hpY2ggd2lsbCBiZSBgZmFsc2VgLlxuICBjb25zdCB0c0NvbmZpZ1BhdGggPSBgJHtvcHRpb25zWyd0c2NvbmZpZyddfWAgPT09ICdmYWxzZScgPyBudWxsIDogb3B0aW9uc1sndHNjb25maWcnXTtcblxuICBjb25zdCBsb2dnZXIgPSBsb2dMZXZlbCAmJiBuZXcgQ29uc29sZUxvZ2dlcihMb2dMZXZlbFtsb2dMZXZlbF0pO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZVBhdGg6IGJhc2VTb3VyY2VQYXRoLFxuICAgIHByb3BlcnRpZXNUb0NvbnNpZGVyLFxuICAgIHRhcmdldEVudHJ5UG9pbnRQYXRoLFxuICAgIGNvbXBpbGVBbGxGb3JtYXRzLFxuICAgIGNyZWF0ZU5ld0VudHJ5UG9pbnRGb3JtYXRzLFxuICAgIGxvZ2dlcixcbiAgICBlbmFibGVJMThuTGVnYWN5TWVzc2FnZUlkRm9ybWF0LFxuICAgIGFzeW5jOiBvcHRpb25zWydhc3luYyddLFxuICAgIGludmFsaWRhdGVFbnRyeVBvaW50TWFuaWZlc3QsXG4gICAgZXJyb3JPbkZhaWxlZEVudHJ5UG9pbnQsXG4gICAgdHNDb25maWdQYXRoXG4gIH07XG59Il19