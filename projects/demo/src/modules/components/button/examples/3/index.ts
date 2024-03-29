import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiIconComponent} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiIconComponent, TuiAvatarComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
