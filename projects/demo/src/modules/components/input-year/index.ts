import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputYear} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocTextfield,
        TuiInputYear,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = [
        'Basic',
        'Min / max / disabledItemHandler',
        'Selected value customization',
    ];

    protected value = new FormControl<number | null>(null);

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<number>
    > = [TUI_FALSE_HANDLER, (year) => year % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0]!;

    protected readonly minVariants = [TUI_FIRST_DAY.year, 2019, 2007];
    protected readonly maxVariants = [TUI_LAST_DAY.year, 2020, 2023];

    protected min = this.minVariants[0]!;
    protected max = this.maxVariants[0]!;

    public control = new FormControl<number | null>(null, Validators.required);
}
