import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatarComponent, TuiChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiChip, NgForOf, NgIf, TuiAvatarComponent, SlicePipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['m', 's', 'xs', 'xxs'] as const;
}
