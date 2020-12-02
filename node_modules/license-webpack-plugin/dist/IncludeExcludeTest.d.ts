declare type IncludeExcludeTest = {
    include?: string[];
    exclude?: string[];
} | ((chunkName: string) => boolean);
export { IncludeExcludeTest };
