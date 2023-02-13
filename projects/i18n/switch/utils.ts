import type {
    TuiLanguage,
    TuiLanguageLoader,
    TuiLanguageName,
} from '@taiga-ui/i18n/interfaces';
import {from, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

export function tuiAsyncLoadLanguage(
    language: TuiLanguageName | null,
    loader: TuiLanguageLoader | null,
    fallback: TuiLanguage,
): Observable<TuiLanguage> {
    return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}

export function tuiLoadLanguage(
    language: TuiLanguageName,
    loader: TuiLanguageLoader,
): Observable<TuiLanguage> {
    return from(normalizeCommonJSImport(loader(language))).pipe(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
        map((module: any) => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]),
    ) as Observable<TuiLanguage>;
}

// CommonJS `module.exports` is wrapped as `default` in ESModule.
async function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
    return importPromise.then((m: any) => m.default || m);
}
