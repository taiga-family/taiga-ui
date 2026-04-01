import"./chunk-HU6DUUP4.js";var e=`import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TUI_TEXTAREA_OPTIONS, TuiTextarea} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocInput,
        TuiDocTextfield,
        TuiTextarea,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly options = inject(TUI_TEXTAREA_OPTIONS);
    protected readonly examples = ['Basic', 'Limit', 'Custom highlight', 'Icons'];
    protected readonly control = new FormControl(null);

    protected min = this.options.min;
    protected max = this.options.max;
}
`;export{e as default};
