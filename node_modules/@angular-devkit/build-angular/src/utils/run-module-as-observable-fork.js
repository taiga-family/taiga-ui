"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const treeKill = require('tree-kill');
function runModuleAsObservableFork(cwd, modulePath, exportName, 
// tslint:disable-next-line:no-any
args) {
    return new rxjs_1.Observable(obs => {
        const workerPath = path_1.resolve(__dirname, './run-module-worker.js');
        const debugArgRegex = /--inspect(?:-brk|-port)?|--debug(?:-brk|-port)/;
        const execArgv = process.execArgv.filter((arg) => {
            // Remove debug args.
            // Workaround for https://github.com/nodejs/node/issues/9435
            return !debugArgRegex.test(arg);
        });
        const forkOptions = {
            cwd,
            execArgv,
        };
        // TODO: support passing in a logger to use as stdio streams
        // if (logger) {
        //   (forkOptions as any).stdio = [
        //     'ignore',
        //     logger.info, // make it a stream
        //     logger.error, // make it a stream
        //   ];
        // }
        const forkedProcess = child_process_1.fork(workerPath, undefined, forkOptions);
        // Cleanup.
        const killForkedProcess = () => {
            if (forkedProcess && forkedProcess.pid) {
                treeKill(forkedProcess.pid, 'SIGTERM');
            }
        };
        // Handle child process exit.
        const handleChildProcessExit = (code) => {
            killForkedProcess();
            if (code && code !== 0) {
                obs.error();
            }
            obs.next({ success: true });
            obs.complete();
        };
        forkedProcess.once('exit', handleChildProcessExit);
        forkedProcess.once('SIGINT', handleChildProcessExit);
        forkedProcess.once('uncaughtException', handleChildProcessExit);
        // Handle parent process exit.
        const handleParentProcessExit = () => {
            killForkedProcess();
        };
        process.once('exit', handleParentProcessExit);
        process.once('SIGINT', handleParentProcessExit);
        process.once('uncaughtException', handleParentProcessExit);
        // Run module.
        forkedProcess.send({
            hash: '5d4b9a5c0a4e0f9977598437b0e85bcc',
            modulePath,
            exportName,
            args,
        });
        // Teardown logic. When unsubscribing, kill the forked process.
        return killForkedProcess;
    });
}
exports.runModuleAsObservableFork = runModuleAsObservableFork;
