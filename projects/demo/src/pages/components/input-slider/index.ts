import {Component, computed, type Signal, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocNumberFormat} from '@demo/components/number-format';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {type TuiContext} from '@taiga-ui/cdk';
import {type TuiKeySteps, TuiNumberFormat, TuiTitle} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocNumberFormat,
        TuiDocTextfield,
        TuiInputSlider,
        TuiNumberFormat,
        TuiTitle,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl(0);

    protected min = signal(0);
    protected max = signal(100);
    protected prefix = '';
    protected postfix = '';
    protected quantum = 0;
    protected segments: number[] | number = 1;
    protected step = 1;
    protected keySteps: TuiKeySteps | null = null;
    protected thumbSize = 12;
    protected readonly segmentsVariants: Array<number[] | number> = [
        1,
        5,
        3,
        [0.2, 0.5],
        [0.1, 0.3],
    ];

    protected readonly keyStepsVariants: Signal<readonly TuiKeySteps[]> = computed(() => [
        [
            [0, this.min()],
            [50, 0.1 * this.max()],
            [100, this.max()],
        ],
    ]);

    protected readonly textfieldContentVariants = computed(() => [
        '',
        'TOP SECRET',
        ({$implicit: val}: TuiContext<number>) => (val === this.max() ? 'MAX' : val),
        ({$implicit: val}: TuiContext<number>) => (val === this.min() ? 'MIN' : val),
        ({$implicit: val}: TuiContext<number>) => (val === 5 ? 'FIVE' : val),
    ]);

    protected readonly examples = [
        'Textfield customization',
        'InputNumber customization',
        'Slider customization',
        'KeySteps',
        'Quantum',
    ];
}
