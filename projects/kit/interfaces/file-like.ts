import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiFileLike {
    readonly name: string;
    readonly size?: number;
    readonly type?: string;
    readonly src?: string;
    readonly content?: PolymorpheusContent;
}
