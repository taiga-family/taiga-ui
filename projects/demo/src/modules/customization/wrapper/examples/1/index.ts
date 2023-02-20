import {Component, ViewEncapsulation} from '@angular/core';
import {
    TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
    tuiCheckboxOptionsProvider,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-wrapper-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
            useValue: {
                appearance: 'material-textfield',
            },
        },
        tuiCheckboxOptionsProvider({
            appearances: {
                unchecked: 'material-checkbox-off',
                checked: 'material-checkbox-on',
                indeterminate: 'material-checkbox-on',
            },
        }),
    ],
})
export class TuiWrapperExample1 {
    value = '';
    checkbox = false;
}
