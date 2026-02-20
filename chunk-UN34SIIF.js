import"./chunk-HU6DUUP4.js";var a=`import {UpperCasePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, UpperCasePipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['xxl', 'xl', 'l', 'm', 's', 'xs'] as const;
    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
}
`;export{a as default};
