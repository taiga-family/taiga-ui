import { WebpackCompiler } from './WebpackCompiler';
import { WebpackPlugin } from './WebpackPlugin';
import { PluginOptions } from './PluginOptions';
declare class LicenseWebpackPlugin implements WebpackPlugin {
    private pluginOptions;
    constructor(pluginOptions?: PluginOptions);
    apply(compiler: WebpackCompiler): void;
}
export { LicenseWebpackPlugin };
