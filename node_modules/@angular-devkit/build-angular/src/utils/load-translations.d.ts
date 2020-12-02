export declare type TranslationLoader = (path: string) => {
    translation: unknown;
    format: string;
    diagnostics: import('@angular/localize/src/tools/src/diagnostics').Diagnostics;
    integrity: string;
};
export declare function createTranslationLoader(): Promise<TranslationLoader>;
