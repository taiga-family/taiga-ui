import"./chunk-HU6DUUP4.js";var i=`import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    TuiCheckbox,
    tuiCheckboxOptionsProvider,
    TuiInput,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-wrapper-example-1',
    imports: [FormsModule, TuiButton, TuiCheckbox, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({appearance: 'material-button', size: 's'}),
        tuiCheckboxOptionsProvider({appearance: () => 'material-checkbox'}),
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
`;export{i as default};
