/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const path = require('path');
const fs = require('fs');
const mkdirp = require('make-dir');
const once = require('once');
const async = require('async');
const libInstrument = require('istanbul-lib-instrument');
const libCoverage = require('istanbul-lib-coverage');
const filesFor = require('./file-matcher').filesFor;
const inputError = require('./input-error');

/*
 * Chunk file size to use when reading non JavaScript files in memory
 * and copying them over when using complete-copy flag.
 */
const READ_FILE_CHUNK_SIZE = 64 * 1024;

function BaselineCollector(instrumenter) {
    this.instrumenter = instrumenter;
    this.map = libCoverage.createCoverageMap();
    this.instrument = instrumenter.instrument.bind(this.instrumenter);

    const origInstrumentSync = instrumenter.instrumentSync;
    this.instrumentSync = function(...args) {
        const ret = origInstrumentSync.apply(this.instrumenter, args);
        const baseline = this.instrumenter.lastFileCoverage();
        this.map.addFileCoverage(baseline);
        return ret;
    };
    //monkey patch the instrumenter to call our version instead
    instrumenter.instrumentSync = this.instrumentSync.bind(this);
}

BaselineCollector.prototype.getCoverage = function() {
    return this.map.toJSON();
};

function processFiles(instrumenter, opts, callback) {
    const inputDir = opts.inputDir;
    const outputDir = opts.outputDir;
    const relativeNames = opts.names;
    const extensions = opts.extensions;
    const verbose = opts.verbose;

    const processor = function(name, callback) {
        const inputFile = path.resolve(inputDir, name);
        const outputFile = path.resolve(outputDir, name);
        const inputFileExtension = path.extname(inputFile);
        const isJavaScriptFile = extensions.indexOf(inputFileExtension) > -1;
        const oDir = path.dirname(outputFile);
        let readStream;
        let writeStream;

        callback = once(callback);
        mkdirp.sync(oDir);

        /* istanbul ignore if */
        if (fs.statSync(inputFile).isDirectory()) {
            return callback(null, name);
        }

        if (isJavaScriptFile) {
            fs.readFile(inputFile, 'utf8', (err, data) => {
                /* istanbul ignore if */ if (err) {
                    return callback(err, name);
                }
                instrumenter.instrument(
                    data,
                    inputFile,
                    (iErr, instrumented) => {
                        if (iErr) {
                            return callback(iErr, name);
                        }
                        fs.writeFile(outputFile, instrumented, 'utf8', err =>
                            callback(err, name)
                        );
                    }
                );
            });
        } else {
            // non JavaScript file, copy it as is
            readStream = fs.createReadStream(inputFile, {
                bufferSize: READ_FILE_CHUNK_SIZE
            });
            writeStream = fs.createWriteStream(outputFile);

            readStream.on('error', callback);
            writeStream.on('error', callback);

            readStream.pipe(writeStream);
            readStream.on('end', () => {
                callback(null, name);
            });
        }
    };
    const q = async.queue(processor, 10);
    const errors = [];
    let count = 0;
    const startTime = new Date().getTime();

    q.push(relativeNames, (err, name) => {
        let inputFile;
        let outputFile;
        if (err) {
            errors.push({
                file: name,
                error: err.message || /* istanbul ignore next */ err.toString()
            });
            inputFile = path.resolve(inputDir, name);
            outputFile = path.resolve(outputDir, name);
            fs.writeFileSync(outputFile, fs.readFileSync(inputFile));
        }
        if (verbose) {
            console.error('Processed: ' + name);
        } else {
            if (count % 100 === 0) {
                process.stdout.write('.');
            }
        }
        count += 1;
    });

    q.drain = function() {
        const endTime = new Date().getTime();
        console.error(
            '\nProcessed [' +
                count +
                '] files in ' +
                Math.floor((endTime - startTime) / 1000) +
                ' secs'
        );
        if (errors.length > 0) {
            console.error(
                'The following ' +
                    errors.length +
                    ' file(s) had errors and were copied as-is'
            );
            console.error(errors);
        }
        return callback();
    };
}

function run(config, opts, callback) {
    opts = opts || {};
    const iOpts = config.instrumentation;
    const input = opts.input;
    const output = opts.output;
    const excludes = opts.excludes;
    let stream;
    let includes;
    let instrumenter;
    const origCallback = callback;
    const needBaseline = iOpts.saveBaseline();
    const baselineFile = path.resolve(iOpts.baselineFile());

    if (iOpts.completeCopy()) {
        includes = ['**/*'];
    } else {
        includes = iOpts.extensions().map(ext => '**/*' + ext);
    }

    if (!input) {
        return callback(new Error('No input specified'));
    }

    instrumenter = libInstrument.createInstrumenter(
        iOpts.getInstrumenterOpts()
    );

    if (needBaseline) {
        mkdirp.sync(path.dirname(baselineFile));
        instrumenter = new BaselineCollector(instrumenter);
        callback = function(err) {
            /* istanbul ignore else */
            if (!err) {
                console.error('Saving baseline coverage at ' + baselineFile);
                fs.writeFileSync(
                    baselineFile,
                    JSON.stringify(instrumenter.getCoverage()),
                    'utf8'
                );
            }
            return origCallback(err);
        };
    }

    const file = path.resolve(input);
    const stats = fs.statSync(file);
    if (stats.isDirectory()) {
        if (!output) {
            return callback(
                inputError.create(
                    'Need an output directory when input is a directory!'
                )
            );
        }
        if (output === file) {
            return callback(
                inputError.create(
                    'Cannot instrument into the same directory/ file as input!'
                )
            );
        }
        mkdirp.sync(output);
        filesFor(
            {
                root: file,
                includes,
                excludes: excludes || iOpts.excludes(false),
                relative: true
            },
            (err, files) => {
                /* istanbul ignore if */
                if (err) {
                    return callback(err);
                }
                processFiles(
                    instrumenter,
                    {
                        inputDir: file,
                        outputDir: output,
                        names: files,
                        extensions: iOpts.extensions(),
                        verbose: config.verbose
                    },
                    callback
                );
            }
        );
    } else {
        if (output) {
            stream = fs.createWriteStream(output);
        } else {
            stream = process.stdout;
        }
        stream.write(
            instrumenter.instrumentSync(fs.readFileSync(file, 'utf8'), file)
        );
        if (stream !== process.stdout) {
            stream.end();
        }
        return callback();
    }
}

module.exports = {
    run
};
