import"./chunk-LQ6M4NCU.js";var t=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    imports: [KeyValuePipe, TuiHeader, TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = {
        Name: 'Taiga UI',
        Version: '5.22.0',
        Component: 'List',
    };
}
`;export{t as default};
