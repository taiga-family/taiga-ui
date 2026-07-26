import {Component, computed, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_INPUT_CARD_GROUP_TEXTS,
    type TuiCard,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';
import {TuiLabel} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

const showLabels = signal(true);

const texts = computed(() =>
    showLabels()
        ? {cardNumberText: 'Card number', expiryText: 'MM/YY', cvcText: 'CVV'}
        : {cardNumberText: '', expiryText: '', cvcText: ''},
);

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiInputCardGroup, TuiLabel, TuiSwitch],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUP_TEXTS,
            useValue: texts,
        },
    ],
})
export default class Example {
    protected readonly showLabels = showLabels;

    protected readonly control = new FormControl<Partial<TuiCard>>({
        card: '558620******2158',
        expire: '12/25',
    });
}
