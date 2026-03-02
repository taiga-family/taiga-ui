import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiInputYear} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocInput,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiInputYear,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = ['Basic', 'Limits', 'Transformer'];

    protected readonly value = new FormControl<number | null>(null);
    protected readonly minVariants = [TUI_FIRST_DAY.year, 2019, 2007];
    protected readonly maxVariants = [TUI_LAST_DAY.year, 2020, 2023];
    protected min = this.minVariants[0]!;
    protected max = this.maxVariants[0]!;
    protected readonly routes = DemoRoute;

    public control = new FormControl<number | null>(null, Validators.required);
    protected readonly handler = (year: number): boolean => year % 3 === 0;
}
`;export{r as default};
