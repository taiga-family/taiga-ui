import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTruncate} from '@taiga-ui/cdk';
import {TuiCell, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiBadge,
        TuiCard,
        TuiCell,
        TuiIcon,
        TuiTitle,
        TuiTruncate,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
