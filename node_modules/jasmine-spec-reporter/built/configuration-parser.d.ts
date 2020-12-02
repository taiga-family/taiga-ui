import { Configuration } from "./configuration";
export declare class ConfigurationParser {
    static parse(conf?: Configuration): Configuration;
    private static isWindows;
    private static defaultConfiguration;
    private static merge(template, override);
}
