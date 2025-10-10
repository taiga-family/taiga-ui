import {InjectionToken, type Provider} from '@angular/core';

export interface TuiDocSpecsMeta {
    readonly name: string;
    readonly figmaVersion?: string;
    readonly schema?: string;
}

export const TUI_DOC_SPECS_META = new InjectionToken<readonly TuiDocSpecsMeta[] | null>(
    ngDevMode ? 'TUI_SPECS_META' : '',
    {
        factory: () => null,
    },
);

export function tuiProvideDocMeta(useValue: readonly TuiDocSpecsMeta[]): Provider {
    return {provide: TUI_DOC_SPECS_META, useValue};
}

export const TUI_DOC_SPECS_HANDLER = new InjectionToken<
    ((meta: TuiDocSpecsMeta) => string) | null
>(ngDevMode ? 'TUI_DOC_SPECS_HANDLER' : '', {
    factory: () => null,
});
