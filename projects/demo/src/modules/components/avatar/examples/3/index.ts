import {NgForOf, UpperCasePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-3',
    imports: [TuiAvatarComponent, NgForOf, UpperCasePipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample3 {
    protected readonly sizes = ['xxl', 'xl', 'l', 'm', 's', 'xs'] as const;
    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
}
