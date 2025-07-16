import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_TEXTAREA_OPTIONS, TuiTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocAppearance,
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
    protected readonly routes = DemoRoute;
    protected readonly options = inject(TUI_TEXTAREA_OPTIONS);
    protected readonly appearances = ['textfield', 'outline', 'outline-grayscale'];
    protected readonly examples = ['Basic', 'Limit', 'Custom highlight', 'Icons'];
    protected readonly control = new FormControl(null);

    protected min = this.options.min;
    protected max = this.options.max;
}
