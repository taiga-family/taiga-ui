import * as postcss from 'postcss';
import * as webpack from 'webpack';
export interface PostcssCliResourcesOptions {
    baseHref?: string;
    deployUrl?: string;
    resourcesOutputPath?: string;
    rebaseRootRelative?: boolean;
    filename: string;
    loader: webpack.loader.LoaderContext;
    emitFile: boolean;
}
declare const _default: postcss.Plugin<PostcssCliResourcesOptions>;
export default _default;
