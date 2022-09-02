import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiPdfViewerOptions<I = undefined> {
    readonly label: string;
    readonly actions: PolymorpheusContent<TuiPdfViewerOptions<I>>;
    readonly data: I;
}
