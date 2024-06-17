import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiIconComponent,
    TuiLinkDirective,
    TuiSurfaceDirective,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {
    TuiCardLargeDirective,
    TuiCellDirective,
    TuiHeaderDirective,
} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLargeDirective,
        TuiDropdownModule,
        TuiRepeatTimes,
        TuiAvatarComponent,
        TuiIconComponent,
        TuiDataList,
        NgForOf,
        TuiCellDirective,
        TuiLinkDirective,
        TuiAppearanceDirective,
        TuiSurfaceDirective,
        TuiHeaderDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
