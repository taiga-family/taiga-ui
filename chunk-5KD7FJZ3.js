import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPaymentSystem, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

interface Card {
    name: string;
    number: string;
    paymentSystem: TuiPaymentSystem;
}

@Component({
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect, TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected cards: Card[] = [
        {name: 'Bitcoin', number: '5555555555554444', paymentSystem: 'mastercard'},
        {name: 'Salary', number: '4242424242424242', paymentSystem: 'visa'},
        {name: 'Charity', number: '2201382000000013', paymentSystem: 'mir'},
        {name: 'Subscriptions', number: '6200000000000005', paymentSystem: 'unionpay'},
    ];

    protected value: Card | null = null;
    protected stringify: TuiStringHandler<Card> = (x) => x.name;
}
`;export{a as default};
