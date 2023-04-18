export interface TuiDocPageBase {
    readonly section?: string;
    readonly title: string;
}

export interface TuiDocPage extends TuiDocPageBase {
    readonly route: string;
    readonly keywords?: string;
}

export interface TuiDocPageGroup extends TuiDocPageBase {
    readonly subPages: readonly TuiDocPage[];
}

export type RawLoaderContent = Promise<{default: string}> | string;

export const TUI_EXAMPLE_PRIMARY_FILE_NAME = {
    TS: `TypeScript`,
    LESS: `LESS`,
    HTML: `HTML`,
} as const;

export type TuiDocExample =
    | Record<string, RawLoaderContent>
    | {
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.TS]?: string;
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML]?: string;
          [TUI_EXAMPLE_PRIMARY_FILE_NAME.LESS]?: string;
      };
