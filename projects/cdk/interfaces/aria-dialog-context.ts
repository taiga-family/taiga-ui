import type {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

export interface TuiAriaDialogContext {
    readonly component: PolymorpheusComponent<any, any>;
    readonly id: string;
    readonly createdAt: number;
}
