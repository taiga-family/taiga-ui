import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_INPUT_COLOR_OPTIONS, TuiInputColor} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocTextfield,
        TuiInputColor,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly control = new FormControl();
    protected readonly options = inject(TUI_INPUT_COLOR_OPTIONS);
    protected readonly examples = ['Basic', 'Opacity'];

    protected readonly aligns = ['left', 'right'] as const;
    protected align = this.options.align;

    protected readonly formats = ['hex', 'hexa'] as const;
    protected format: 'hex' | 'hexa' = this.options.format;
}
