import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocNumberFormat} from '@demo/components/number-format';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiHint, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';
import {TuiDocIcons} from '@demo/components/icons';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocNumberFormat,
        TuiDocTextfield,
        TuiHint,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTextfield,
        TuiDocIcons,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl(null, Validators.required);
    protected readonly maxVariants: readonly number[] = [Infinity, 10, 500];
    protected readonly minVariants: readonly number[] = [-Infinity, -500, 5, 25];

    protected min = this.minVariants[0]!;
    protected max = this.maxVariants[0]!;
    protected step = 0;
    protected prefix = '';
    protected postfix = '';
}
