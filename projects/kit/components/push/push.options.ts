export interface TuiPushOptions {
    readonly heading: string;
    readonly type: string;
    readonly timestamp: number;
    readonly image: string;
    readonly icon: string;
    readonly iconColor: string;
    readonly buttons: readonly string[];
}

export const TUI_PUSH_DEFAULT_OPTIONS: TuiPushOptions = {
    heading: ``,
    type: ``,
    timestamp: 0,
    image: ``,
    icon: ``,
    iconColor: ``,
    buttons: [],
};
