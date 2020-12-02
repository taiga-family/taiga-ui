import { IncludeExcludeTest } from './IncludeExcludeTest';
declare class ChunkIncludeExcludeTester {
    private includeExcludeTest;
    constructor(includeExcludeTest: IncludeExcludeTest);
    isIncluded(chunkName: string): boolean;
}
export { ChunkIncludeExcludeTester };
