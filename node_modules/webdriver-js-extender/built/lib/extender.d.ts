import { promise as wdpromise, WebDriver } from 'selenium-webdriver';
export declare class Extender {
    driver_: WebDriver;
    params_: {
        [key: string]: string[];
    };
    executor_: {
        defineCommand: (name: string, method: string, path: string) => void;
    };
    constructor(driver: WebDriver);
    /**
     * Defines a new command. When a command is sent, the {@code path} will be
     * preprocessed using the command's parameters; any path segments prefixed
     * with ":" will be replaced by the parameter of the same name. For example,
     * given "/person/:name" and the parameters "{name: 'Bob'}", the final command
     * path will be "/person/Bob".
     *
     * @param {string} name The command name.
     * @param {string} params The names of the parameters to the command
     * @param {string} method The HTTP method to use when sending this command.
     * @param {string} path The path to send the command to, relative to
     *     the WebDriver server's command root and of the form
     *     "/path/:variable/segment".
     */
    defineCommand(name: string, params: string[], method: string, path: string): void;
    /**
     * Executes a command which was defined by defineCommand()
     *
     * @param {string} name The command name.
     * @param {*[]} params The parameters to the command
     * @return {webdriver.promise.Promise<*>} A promise that will be resolved with
     *     the command result
     */
    execCommand<T>(name: string, method: string, params: any[]): wdpromise.Promise<T>;
}
