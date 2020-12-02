import { WebpackCompiler } from './WebpackCompiler';
export interface WebpackPlugin {
    apply(compiler: WebpackCompiler): void;
}
