import { MinimistArgs, Option, Options } from './options';
/**
 * Dictionary that maps the command and the program.
 */
export interface Programs {
    [cmd: string]: Program;
}
/**
 * A program has a command, a description, options, and a run method
 */
export declare class Program {
    static MIN_SPACING: number;
    cmd: string;
    cmdDescription: string;
    options: Options;
    runMethod: Function;
    helpDescription: string;
    version: string;
    /**
     * Register a command and the description.
     * @param cmd The command.
     * @param cmdDescription The description of the command.
     * @returns The program for method chaining.
     */
    command(cmd: string, cmdDescription: string): Program;
    /**
     * Register a new option.
     * @param opt The option.
     * @param description The description of the option.
     * @param type The type of value expected: boolean, number, or string
     * @param defaultValue The option's default value.
     * @returns The program for method chaining.
     */
    option(opt: string, description: string, type: string, opt_defaultValue?: number | string | boolean): Program;
    /**
     * Adds an option to the program.
     * @param option The option.
     * @returns The program for method chaining.
     */
    addOption(option: Option): Program;
    /**
     * Registers a method that will be used to run the program.
     * @param runMethod The method that will be used to run the program.
     * @returns The program for method chaining.
     */
    action(runMethod: Function): Program;
    /**
     * Adds the value to the options and passes the updated options to the run
     * method.
     * @param args The arguments that will be parsed to run the method.
     */
    run(json: JSON): Promise<void>;
    private getValue_(key, json);
    /**
     * Prints the command with the description. The description will have spaces
     * between the cmd so that the starting position is "posDescription". If the
     * gap between the cmd and the description is less than MIN_SPACING or
     * posDescription is undefined, the spacing will be MIN_SPACING.
     *
     * @param opt_postDescription Starting position of the description.
     */
    printCmd(opt_posDescription?: number): void;
    /**
     * Prints the options with the option descriptions and default values.
     * The posDescription and posDefault is the starting position for the option
     * description. If extOptions are provided, check to see if we have already
     * printed those options. Also, once we print the option, add them to the extOptions.
     *
     * @param posDescription Position to start logging the description.
     * @param posDefault Position to start logging the default value.
     * @param opt_extOptions A collection of options that will be updated.
     */
    printOptions(posDescription: number, posDefault: number, opt_extOptions?: Options): void;
    /**
     * Assuming that the this program can run by itself, to print out the program's
     * help. Also assuming that the commands are called cmd-run and cmd-help.
     */
    printHelp(): void;
    posDescription(): number;
    posDefault(): number;
    lengthOf_(param: string): number;
    /**
     * Create a collection of options used by this program.
     * @returns The options used in the programs.
     */
    getOptions_(allOptions: Options): Options;
    /**
     * Get the options used by the program and create the minimist options
     * to ensure that minimist parses the values properly.
     * @returns The options for minimist.
     */
    getMinimistOptions(): MinimistArgs;
}
