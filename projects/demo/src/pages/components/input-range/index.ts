import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocNumberFormat} from '@demo/components/number-format';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {type TuiContext} from '@taiga-ui/cdk';
import {
    type TuiKeySteps,
    TuiLoader,
    TuiNumberFormat,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';
import {PolymorpheusComponent, type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocNumberFormat,
        TuiDocTextfield,
        TuiInputRange,
        TuiNumberFormat,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl([0, 10]);

    protected readonly suffixVariants: Array<[string, string]> = [
        ['$', '$'],
        ['€', '€'],
        [' ₽', ' ₽'],
        ['%', '%'],
        [' kg', ' kg'],
    ];

    protected keyStepsVariants: readonly TuiKeySteps[] = [
        [
            [0, 0],
            [50, 1_000],
            [100, 10_000],
        ],
    ];

    protected readonly contentVariants: Array<
        readonly [
            PolymorpheusContent<TuiContext<number>>,
            PolymorpheusContent<TuiContext<number>>,
        ]
    > = [
        ['', ''],
        ['START', 'END'],
        [
            ({$implicit: val}: TuiContext<number>) =>
                val === this.max ? 'MAX' : `${val}`,
            ({$implicit: val}: TuiContext<number>) =>
                val === this.max ? 'MAX' : `${val}`,
        ],
        [
            ({$implicit: val}: TuiContext<number>) =>
                val === this.min ? 'MIN' : `${val}`,
            ({$implicit: val}: TuiContext<number>) =>
                val === this.min ? 'MIN' : `${val}`,
        ],
        [
            ({$implicit: val}: TuiContext<number>) => (val === 5 ? 'FIVE' : `${val}`),
            ({$implicit: val}: TuiContext<number>) => (val === 5 ? 'FIVE' : `${val}`),
        ],
        ['', new PolymorpheusComponent(TuiLoader)],
    ];

    protected min = 0;
    protected max = 100;
    protected step = 1;
    protected segments = 1;
    protected prefix: [string, string] | null = null;
    protected postfix: [string, string] | null = null;
    protected quantum = 0;
    protected keySteps: TuiKeySteps | null = null;
    protected content = this.contentVariants[0]!;
    protected thumbSize = 12;
}
