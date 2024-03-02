import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export type TuiFileState = 'deleted' | 'error' | 'loading' | 'normal';

export interface TuiFileLike {
    readonly content?: PolymorpheusContent;
    readonly name: string;
    readonly size?: number;
    readonly src?: string;
    readonly type?: string;
}
