import {Component, ViewEncapsulation} from '@angular/core';
import {TUI_CHECKBOX_APPEARANCE, TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core';

@Component({
    selector: 'tui-wrapper-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE,
            useValue: 'material-textfield',
        },
        {
            provide: TUI_CHECKBOX_APPEARANCE,
            useValue: ['material-checkbox-off', 'material-checkbox-on'],
        },
    ],
})
export class TuiWrapperExample1 {
    value = '';
    checkbox = false;
}
