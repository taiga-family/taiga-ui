import type {TuiLanguageName} from './language-names';

export interface TuiLanguageStorage extends Storage {
    getItem(key: string): TuiLanguageName | null;
    setItem(key: string, value: TuiLanguageName): void;
}
