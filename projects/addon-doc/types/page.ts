import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export type TuiDocPages = ReadonlyArray<TuiDocPageGroup | TuiDocPageRoute>;

export interface TuiDocPageBase {
    readonly section?: string;
    readonly title: string;
}

export interface TuiDocPageRoute extends TuiDocPageBase {
    readonly fragment?: string;
    readonly keywords?: string;
    readonly route: string;
    readonly icon?: PolymorpheusContent;
    readonly rel?: HTMLAnchorElement['rel'];
    readonly target?: HTMLAnchorElement['target'];
}

export interface TuiDocPageGroup extends TuiDocPageBase {
    readonly subPages: readonly TuiDocPageRoute[];
}

export type TuiRawLoaderContent = Promise<{default: string}> | string;

export const TUI_EXAMPLE_PRIMARY_FILE_NAME = {
    TS: 'TypeScript',
    LESS: 'LESS',
    HTML: 'HTML',
} as const;

export type TuiDocExampleRecord =
    | Record<string, TuiRawLoaderContent>
    | {
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML]?: string;
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.LESS]?: string;
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.TS]?: string;
      };
