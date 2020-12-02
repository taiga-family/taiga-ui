import * as webpack from 'webpack';
import { TSInstance } from './interfaces';
export declare function makeAfterCompile(instance: TSInstance, configFilePath: string | undefined): (compilation: webpack.compilation.Compilation, callback: () => void) => void;
