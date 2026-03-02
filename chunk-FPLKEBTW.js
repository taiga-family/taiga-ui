import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPaymentSystem, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {type TuiStringHandler, type TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

interface Card {
    name: string;
    number: string;
    paymentSystem: TuiPaymentSystem;
}

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiThumbnailCard,
    ],
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

    protected readonly matcher: TuiStringMatcher<Card> = (item, value) => {
        return (
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.number.includes(value)
        );
    };

    protected readonly stringify: TuiStringHandler<Card> = (x) => x.number;
}
`;export{r as default};
