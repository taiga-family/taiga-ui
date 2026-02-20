import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocNumberFormat} from '@demo/components/number-format';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocInput,
        TuiDocNumberFormat,
        TuiDocTextfield,
        TuiInputNumber,
        TuiNumberFormat,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;

    protected readonly examples = [
        'Number as form control value',
        'BigInt as form control value',
        'Textfield-based',
        'Localization',
        'Affixes',
        'Step',
        'Custom step buttons',
        'Fluid typography',
        'Value transformer',
        'Quantum',
        'Large integer and large decimal parts',
    ];

    protected readonly control = new FormControl(null, Validators.required);
    protected readonly maxVariants: readonly number[] = [
        Number.MAX_SAFE_INTEGER,
        Infinity,
        10,
        500,
    ];

    protected readonly minVariants: readonly number[] = [
        Number.MIN_SAFE_INTEGER,
        -Infinity,
        -500,
        5,
        25,
    ];

    protected min = this.minVariants[0]!;
    protected max = this.maxVariants[0]!;
    protected step = 0;
    protected prefix = '';
    protected postfix = '';
    protected quantum = 0;

    protected readonly bigIntWithDecimalTransformer = import(
        './examples/11/transformer.ts?raw',
        {with: {loader: 'text'}}
    );
}
