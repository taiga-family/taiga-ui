import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import {TuiCheckbox, tuiCheckboxOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-wrapper-example-1',
    imports: [FormsModule, TuiButton, TuiCheckbox, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({appearance: 'material-button', size: 's'}),
        tuiCheckboxOptionsProvider({appearance: 'material-checkbox'}),
        tuiTextfieldOptionsProvider({
            appearance: signal('material-textfield'),
            cleaner: signal(false),
        }),
    ],
})
export class TuiWrapperExample1 {
    protected value = '';
    protected checkbox = false;
}
