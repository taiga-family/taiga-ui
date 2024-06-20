import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiAutoColorPipe, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatarStack, NgForOf, TuiAvatar, TuiInitialsPipe, TuiAutoColorPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
    protected readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
    ];
}
