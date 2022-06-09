import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiPdfViewerOptions<I = undefined> {
    readonly label: string;
    readonly errorMessage?: string;
    readonly actions: PolymorpheusContent<TuiPdfViewerOptions<I>>;
    readonly data: I;
}
