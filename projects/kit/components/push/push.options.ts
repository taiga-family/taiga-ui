export interface TuiPushOptions {
    readonly heading: string;
    readonly type: string;
    readonly timestamp: number;
    readonly image: string;
    readonly icon: string;
    readonly iconColor: string;
    readonly buttons: readonly string[];
}
