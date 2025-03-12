import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiIconPipe, TuiNumberFormat} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

export interface MyAccount {
    amount: number;
    currency: TuiCurrencyVariants;
    name: string;
    paymentSystem: PolymorpheusContent;
}

@Component({
    standalone: true,
    selector: 'my-account',
    imports: [
        AsyncPipe,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiAmountPipe,
        TuiIconPipe,
        TuiNumberFormat,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleMyAccount {
    @Input({required: true})
    public account!: MyAccount;
}
