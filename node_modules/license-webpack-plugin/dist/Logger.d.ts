import { ConstructedStats } from './ConstructedStats';
import { WebpackCompilation } from './WebpackCompilation';
declare class Logger {
    private stats;
    private static LOG_PREFIX;
    constructor(stats: ConstructedStats);
    warn(compilation: WebpackCompilation, message: string): void;
    error(compilation: WebpackCompilation, message: string): void;
}
export { Logger };
