import { promise as wdpromise } from 'selenium-webdriver';
import { ProtractorBrowser } from './browser';
export declare class DebugHelper {
    private browserUnderDebug_;
    /**
     * Set to true when we validate that the debug port is open. Since the debug
     * port is held open forever once the debugger is attached, it's important
     * we only do validation once.
     */
    debuggerValidated_: boolean;
    dbgCodeExecutor: any;
    constructor(browserUnderDebug_: ProtractorBrowser);
    initBlocking(debuggerClientPath: string, onStartFn: Function, opt_debugPort?: number): void;
    init(debuggerClientPath: string, onStartFn: Function, opt_debugPort?: number): void;
    /**
     *  1) Set up helper functions for debugger clients to call on (e.g.
     *     execute code, get autocompletion).
     *  2) Enter process into debugger mode. (i.e. process._debugProcess).
     *  3) Invoke the debugger client specified by debuggerClientPath.
     *
     * @param {string} debuggerClientPath Absolute path of debugger client to use.
     * @param {boolean} blockUntilExit Whether to block the flow until process exit or resume
     *     immediately.
     * @param {Function} onStartFn Function to call when the debugger starts. The
     *     function takes a single parameter, which represents whether this is the
     *     first time that the debugger is called.
     * @param {number=} opt_debugPort Optional port to use for the debugging
     *     process.
     *
     * @return {Promise} If blockUntilExit, a promise resolved when the debugger process
     *     exits. Otherwise, resolved when the debugger process is ready to begin.
     */
    init_(debuggerClientPath: string, blockUntilExit: boolean, onStartFn: Function, opt_debugPort?: number): wdpromise.Promise<{}>;
    /**
     * Validates that the port is free to use. This will only validate the first
     * time it is called. The reason is that on subsequent calls, the port will
     * already be bound to the debugger, so it will not be available, but that is
     * okay.
     *
     * @returns {Promise<boolean>} A promise that becomes ready when the
     * validation
     *     is done. The promise will resolve to a boolean which represents whether
     *     this is the first time that the debugger is called.
     */
    private validatePortAvailability_(port);
    isAttached(): boolean;
}
