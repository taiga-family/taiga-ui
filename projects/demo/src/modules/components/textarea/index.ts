import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_TEXTAREA_OPTIONS, TuiTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiTextarea,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly options = inject(TUI_TEXTAREA_OPTIONS);
    protected readonly examples = ['Sizes', 'Limit', 'Custom highlight', 'Icons'];
    protected readonly control = new FormControl(null);

    protected min = this.options.min;
    protected max = this.options.max;
}
