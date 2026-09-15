import"./chunk-LQ6M4NCU.js";var n=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollWheel} from '@taiga-ui/experimental';

@Component({
    imports: [TuiScrollWheel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly hours = signal(-2);
    protected readonly minutes = signal(-2);

    protected getHours(index: number): string {
        return (((index % 24) + 24) % 24).toString().padStart(2, '0');
    }

    protected getMinutes(index: number): string {
        return (((index % 60) + 60) % 60).toString().padStart(2, '0');
    }
}
`;export{n as default};
