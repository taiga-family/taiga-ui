import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export type TuiDocPages = ReadonlyArray<TuiDocPage | TuiDocPageGroup>;

export interface TuiDocPageBase {
    readonly section?: string;
    readonly title: string;
}

export interface TuiDocPage extends TuiDocPageBase {
    readonly fragment?: string;
    readonly keywords?: string;
    readonly route: string;
    readonly icon?: PolymorpheusContent;
    readonly rel?: HTMLAnchorElement['rel'];
    readonly target?: HTMLAnchorElement['target'];
}

export interface TuiDocPageGroup extends TuiDocPageBase {
    readonly subPages: readonly TuiDocPage[];
}

export type TuiRawLoaderContent = Promise<{default: string}> | string;

export const TUI_EXAMPLE_PRIMARY_FILE_NAME = {
    TS: 'TypeScript',
    LESS: 'LESS',
    HTML: 'HTML',
} as const;

export type TuiDocExample =
    | Record<string, TuiRawLoaderContent>
    | {
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML]?: string;
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.LESS]?: string;
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.TS]?: string;
      };
