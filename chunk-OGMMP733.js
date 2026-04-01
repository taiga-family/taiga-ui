import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';
import {TuiFormatNumberPipe} from '@taiga-ui/core';

@Component({
    imports: [TuiBarSet, TuiFormatNumberPipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [451, 302, 203, 124, 65];
    protected readonly sum = this.value.reduce((a, b) => a + b, 0);
}
`;export{a as default};
