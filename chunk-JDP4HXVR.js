import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTimeline} from '@taiga-ui/kit';

@Component({
    imports: [TuiTimeline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: ReadonlyArray<[number, number]> = [
        [0, 5],
        [12, 15],
        [24, 40],
    ];
}
`;export{o as default};
