import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_INPUT_CARD_GROUPED_TEXTS, TuiCard} from '@taiga-ui/addon-commerce';
import {of} from 'rxjs';

@Component({
    selector: 'tui-input-card-grouped-example-5',
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUPED_TEXTS,
            useValue: of({
                cardNumberText: 'Number',
                expiryText: 'mm/yy',
                cvcText: 'Code',
            }),
        },
    ],
})
export class TuiInputCardGroupedExample5 {
    protected readonly control = new FormControl<Partial<TuiCard>>({
        card: '558620******2158',
        expire: '12/25',
    });
}
