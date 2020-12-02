import { Options } from './options';
import { Program, Programs } from './programs';
/**
 * The Cli contains the usage and the collection of programs.
 *
 * Printing help for all the programs in the following order:
 * usage, commands, and options. If the options are used in multiple programs,
 * it will list it once.
 */
export declare class Cli {
    programs: Programs;
    usageText: string;
    version: string;
    /**
     * Register a program to the command line interface.
     * @returns The cli for method chaining.
     */
    program(prog: Program): Cli;
    /**
     * Add a usage for the command line interface.
     * @returns The cli for method chaining.
     */
    usage(usageText: string): Cli;
    /**
     * Prints help for the programs registered to the cli.
     */
    printHelp(): void;
    /**
     * For commands, gets the position where the description should start so they
     * are aligned.
     * @returns The position where the command description should start.
     */
    posCmdDescription(): number;
    /**
     * For options, gets the position where the description should start so they
     * are aligned.
     * @returns The position where the option description should start.
     */
    posDescription(): number;
    /**
     * For options, get the position where the default values should start so they
     * are aligned.
     * @returns The position where the option default values should start.
     */
    posDefault(): number;
    /**
     * Go through all programs and add options to the collection.
     * @returns The options used in the programs.
     */
    getOptions(): Options;
    /**
     * Get the options used by the programs and create the minimist options
     * to ensure that minimist parses the values properly.
     * @returns The options for minimist.
     */
    getMinimistOptions(): Object;
}
