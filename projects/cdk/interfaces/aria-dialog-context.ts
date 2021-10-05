import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiAriaDialogContext {
    readonly component: PolymorpheusContent<any>;
    readonly id: string;
    readonly createdAt: number;
}
