import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export type TuiDocRoutePages = ReadonlyArray<TuiDocRoutePage | TuiDocRoutePageGroup>;

export interface TuiDocRoutePageBase {
    readonly section?: string;
    readonly title: string;
}

export interface TuiDocRoutePage extends TuiDocRoutePageBase {
    readonly fragment?: string;
    readonly keywords?: string;
    readonly route: string;
    readonly icon?: PolymorpheusContent;
    readonly rel?: HTMLAnchorElement['rel'];
    readonly target?: HTMLAnchorElement['target'];
}

export interface TuiDocRoutePageGroup extends TuiDocRoutePageBase {
    readonly subPages: readonly TuiDocRoutePage[];
}

export type TuiRawLoaderContent = Promise<{default: string}> | string;

export const TUI_EXAMPLE_PRIMARY_FILE_NAME = {
    TS: 'TypeScript',
    LESS: 'LESS',
    HTML: 'HTML',
} as const;
