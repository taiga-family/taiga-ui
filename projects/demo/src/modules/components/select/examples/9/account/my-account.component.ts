import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {type TuiCurrencyVariants} from '@taiga-ui/addon-commerce';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface MyAccount {
    amount: number;
    currency: TuiCurrencyVariants;
    name: string;
    paymentSystem: PolymorpheusContent;
}

@Component({
    selector: 'my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleMyAccountComponent {
    @Input()
    public account!: MyAccount;
}
