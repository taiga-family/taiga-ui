import"./chunk-HU6DUUP4.js";var i=`import {SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiChip} from '@taiga-ui/kit';

@Component({
    imports: [SlicePipe, TuiAvatar, TuiBadge, TuiButton, TuiChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['m', 's', 'xs', 'xxs'] as const;
}
`;export{i as default};
