export interface WebpackChunkModule {
    resource: string;
    rootModule?: {
        resource?: string;
    };
    originModule?: {
        resource?: string;
    };
    fileDependencies?: string[];
    dependencies?: WebpackChunkModule[];
}
