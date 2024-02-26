import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiDocPageBase {
    readonly section?: string;
    readonly title: string;
}

export interface TuiDocPage extends TuiDocPageBase {
    readonly fragment?: string;
    readonly keywords?: string;
    readonly route: string;
    readonly icon?: PolymorpheusContent;
    readonly target?: '_blank' | '_parent' | '_self' | '_top';
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
