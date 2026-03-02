import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHighDpi, TuiMedia} from '@taiga-ui/cdk';

@Component({
    imports: [TuiHighDpi, TuiMedia],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected currentTime = 0;
    protected volume = 1;
    protected paused = true;
}
`;export{o as default};
