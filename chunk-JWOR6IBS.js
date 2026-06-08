import"./chunk-HU6DUUP4.js";var o=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [KeyValuePipe, TuiButton, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly variants = {
        'A rather long title': 'Long action text',
        'Long title text': 'OK',
        Title: 'Even Longer action text',
    };
}
`;export{o as default};
