import { ConstructedOptions } from './ConstructedOptions';
import { PluginOptions } from './PluginOptions';
declare class PluginOptionsReader {
    private context;
    constructor(context: string);
    readOptions(options: PluginOptions): ConstructedOptions;
}
export { PluginOptionsReader };
