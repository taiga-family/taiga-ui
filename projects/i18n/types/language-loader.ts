import type {TuiLanguageName} from './language-names';

export type TuiLanguageLoader = (lang: TuiLanguageName) => Promise<unknown>;
