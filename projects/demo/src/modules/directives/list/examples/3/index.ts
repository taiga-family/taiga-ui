import {KeyValuePipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [KeyValuePipe, NgForOf, TuiHeader, TuiList, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = {
        Name: 'Taiga UI',
        Version: '4.96.0',
        Component: 'List',
    };
}
