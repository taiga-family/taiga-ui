import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiMobileAlertData {
    readonly heading?: string;
    readonly content: PolymorpheusContent;
    readonly confirmText?: string;
}
