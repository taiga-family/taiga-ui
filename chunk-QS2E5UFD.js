import"./chunk-LQ6M4NCU.js";var t=`import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_INPUT_COLOR_OPTIONS, TuiInputColor} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocAppearance,
        TuiDocControl,
        TuiDocTextfield,
        TuiInputColor,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly control = new FormControl();
    protected readonly options = inject(TUI_INPUT_COLOR_OPTIONS);
    protected readonly examples = ['Basic', 'Opacity'];
    protected readonly aligns = ['start', 'end'] as const;
    protected align = this.options.align;
    protected readonly formats = ['hex', 'hexa'] as const;
    protected format = this.options.format;
}
`;export{t as default};
