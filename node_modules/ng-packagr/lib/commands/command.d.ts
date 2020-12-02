/**
 * Common call signature for a command.
 *
 * @stable
 */
export interface Command<Arguments, Result> {
    (args?: Arguments): Result | Promise<Result>;
}
/**
 * Executes a Command and returns its promisified result.
 *
 * @stable
 */
export declare function execute<A, R>(command: Command<A, R>, args?: A): Promise<R>;
