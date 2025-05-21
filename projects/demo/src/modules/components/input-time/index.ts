import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiInputTime} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiDemo,
        TuiDocControl,
        TuiDocTextfield,
        TuiInputTime,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl(null);

    protected readonly modeVariants = [
        'HH:MM',
        'HH:MM AA',
        'HH:MM:SS',
        'HH:MM:SS AA',
        'HH:MM:SS.MSS',
        'HH:MM:SS.MSS AA',
        'MM:SS',
    ] as const satisfies readonly TuiTimeMode[];

    protected mode: TuiTimeMode = this.modeVariants[0];
}
