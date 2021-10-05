import {Component, ViewEncapsulation} from '@angular/core';
import {
    TUI_CHECKBOX_DEFAULT_OPTIONS,
    TUI_CHECKBOX_OPTIONS,
    TUI_TEXTFIELD_APPEARANCE,
} from '@taiga-ui/core';

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
            provide: TUI_CHECKBOX_OPTIONS,
            useValue: {
                ...TUI_CHECKBOX_DEFAULT_OPTIONS,
                appearances: {
                    unchecked: 'material-checkbox-off',
                    checked: 'material-checkbox-on',
                    indeterminate: 'material-checkbox-on',
                },
            },
        },
    ],
})
export class TuiWrapperExample1 {
    value = '';
    checkbox = false;
}
