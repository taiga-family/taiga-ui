import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

export interface TuiAriaDialogContext {
    readonly component: PolymorpheusComponent<any>;
    readonly createdAt: number;
    readonly id: string;
}
