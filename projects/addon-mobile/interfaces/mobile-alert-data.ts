import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiMobileAlertData {
    readonly confirmText?: string;
    readonly content: PolymorpheusContent;
    readonly heading?: string;
}
