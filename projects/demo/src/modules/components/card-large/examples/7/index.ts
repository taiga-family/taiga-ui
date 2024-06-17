import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiDataList,
    TuiDropdownModule,
    TuiIcon,
    TuiLink,
    TuiSurfaceDirective,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCellDirective, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLarge,
        TuiDropdownModule,
        TuiRepeatTimes,
        TuiAvatarComponent,
        TuiIcon,
        TuiDataList,
        NgForOf,
        TuiCellDirective,
        TuiLink,
        TuiAppearance,
        TuiSurfaceDirective,
        TuiHeaderDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
