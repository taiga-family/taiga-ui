export declare function formatSize(size: number): string;
export declare function generateBundleStats(info: {
    id: string | number;
    size?: number;
    files: string[];
    names?: string[];
    entry: boolean;
    initial: boolean;
    rendered?: boolean;
}, colors: boolean): string;
export declare function generateBuildStats(hash: string, time: number, colors: boolean): string;
export declare function statsToString(json: any, statsConfig: any): string;
export declare function statsWarningsToString(json: any, statsConfig: any): string;
export declare function statsErrorsToString(json: any, statsConfig: any): string;
