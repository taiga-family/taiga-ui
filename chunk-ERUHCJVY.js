import"./chunk-HU6DUUP4.js";var r=`import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_INPUT_CARD_GROUP_TEXTS,
    type TuiCard,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';

@Component({
    imports: [ReactiveFormsModule, TuiInputCardGroup],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUP_TEXTS,
            useValue: signal({
                cardNumberText: 'Number',
                expiryText: 'MM/YY',
                cvcText: 'Code',
            }),
        },
    ],
})
export default class Example {
    protected readonly control = new FormControl<Partial<TuiCard>>({
        card: '558620******2158',
        expire: '12/25',
    });
}
`;export{r as default};
