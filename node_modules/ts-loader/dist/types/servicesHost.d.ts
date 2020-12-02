import * as typescript from 'typescript';
import * as webpack from 'webpack';
import { TSInstance, WatchHost } from './interfaces';
import * as logger from './logger';
export declare type Action = () => void;
export interface ServiceHostWhichMayBeCacheable {
    servicesHost: typescript.LanguageServiceHost;
    clearCache: Action | null;
}
/**
 * Create the TypeScript language service
 */
export declare function makeServicesHost(scriptRegex: RegExp, log: logger.Logger, loader: webpack.loader.LoaderContext, instance: TSInstance, enableFileCaching: boolean, projectReferences?: ReadonlyArray<typescript.ProjectReference>): ServiceHostWhichMayBeCacheable;
/**
 * Create the TypeScript Watch host
 */
export declare function makeWatchHost(scriptRegex: RegExp, log: logger.Logger, loader: webpack.loader.LoaderContext, instance: TSInstance, projectReferences?: ReadonlyArray<typescript.ProjectReference>): WatchHost;
