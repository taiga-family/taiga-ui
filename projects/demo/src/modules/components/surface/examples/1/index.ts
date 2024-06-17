import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiSurfaceDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiSurfaceDirective, TuiAppearance],
    templateUrl: './index.html',
    styleUrls: ['./base.less', './index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
