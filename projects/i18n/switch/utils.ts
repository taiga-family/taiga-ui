import type {TuiLanguage, TuiLanguageLoader, TuiLanguageName} from '@taiga-ui/i18n/types';
import type {Observable} from 'rxjs';
import {from, map, of} from 'rxjs';

// CommonJS `module.exports` is wrapped as `default` in ESModule.
async function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
    return importPromise.then((m: any) => m.default || m);
}

export function tuiLoadLanguage(
    language: TuiLanguageName,
    loader: TuiLanguageLoader,
): Observable<TuiLanguage> {
    return from(normalizeCommonJSImport(loader(language))).pipe(
        map((module: any) => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]),
    );
}

export function tuiAsyncLoadLanguage(
    language: TuiLanguageName | null,
    loader: TuiLanguageLoader | null,
    fallback: TuiLanguage,
): Observable<TuiLanguage> {
    return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}
