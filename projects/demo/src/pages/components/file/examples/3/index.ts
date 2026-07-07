import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';

@Component({
    imports: [TuiFile, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly orientations = ['horizontal', 'vertical'] as const;
}
