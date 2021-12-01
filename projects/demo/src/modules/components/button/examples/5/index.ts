import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_BUTTON_OPTIONS, TuiAppearance} from '@taiga-ui/core';

@Component({
    selector: 'tui-button-example-5',
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            useValue: {
                shape: 'rounded',
                appearance: TuiAppearance.Outline,
                size: 'm',
            },
        },
    ],
})
export class TuiButtonExample5 {}
