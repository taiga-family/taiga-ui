import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiCheckboxComponent, tuiCheckboxOptionsProvider} from '@taiga-ui/kit';
import {TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'tui-wrapper-example-1',
    imports: [TuiInputModule, FormsModule, TuiLabel, TuiCheckboxComponent, TuiButton],
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
