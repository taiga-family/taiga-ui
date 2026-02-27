import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {type MaskitoTimeMode} from '@maskito/kit';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInput} from '@taiga-ui/core';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocInput,
        TuiDocTextfield,
        TuiInput,
        TuiInputTime,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl(null);

    protected readonly examples = [
        'Mode',
        '12-hour format with AM/PM',
        'Form control validation',
        'Options',
        'Textfield customization',
        'Strict mode',
        'Dropdown with DataList',
        'Transformer',
        'Native picker',
        'Native picker with suggestions',
    ];

    protected readonly modeVariants = [
        'HH:MM',
        'HH:MM AA',
        'HH:MM:SS',
        'HH:MM:SS AA',
        'HH:MM:SS.MSS',
        'HH:MM:SS.MSS AA',
        'MM:SS',
    ] as const satisfies readonly MaskitoTimeMode[];

    protected readonly acceptVariants = [
        [],
        [12, 13, 14, 15, 16, 17, 18].map((x) => new TuiTime(x, 0)),
    ] as const satisfies ReadonlyArray<readonly TuiTime[]>;

    protected mode: MaskitoTimeMode = this.modeVariants[0];
    protected accept: readonly TuiTime[] = this.acceptVariants[0];
    protected prefix = '';
    protected postfix = '';
}
