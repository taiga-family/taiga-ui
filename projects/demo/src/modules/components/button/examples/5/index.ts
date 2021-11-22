import {Component} from '@angular/core';
import {TUI_BUTTON_OPTIONS, TuiAppearance} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';

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
