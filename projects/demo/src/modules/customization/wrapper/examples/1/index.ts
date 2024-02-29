import {Component, ViewEncapsulation} from '@angular/core';
import {TUI_TEXTFIELD_APPEARANCE_DIRECTIVE} from '@taiga-ui/core';
import {tuiCheckboxOptionsProvider} from '@taiga-ui/experimental';

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
            appearance: el =>
                el.checked || el.indeterminate
                    ? 'material-checkbox-on'
                    : 'material-checkbox-off',
        }),
    ],
})
export class TuiWrapperExample1 {
    protected value = '';
    protected checkbox = false;
}
