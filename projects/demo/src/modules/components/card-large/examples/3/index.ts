import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAppearanceDirective,
    TuiIconComponent,
    TuiSurfaceDirective,
    TuiTitleDirective,
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
        TuiHeaderDirective,
        TuiSurfaceDirective,
        TuiAvatarComponent,
        TuiIconComponent,
        TuiAppearanceDirective,
        TuiTitleDirective,
        TuiCellDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
