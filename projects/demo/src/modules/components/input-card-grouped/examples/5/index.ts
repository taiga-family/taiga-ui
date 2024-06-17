import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {
    TUI_INPUT_CARD_GROUPED_TEXTS,
    TuiInputCardGroupedComponent,
} from '@taiga-ui/addon-commerce';
import {of} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiInputCardGroupedComponent, ReactiveFormsModule],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUPED_TEXTS,
            useValue: of({
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
