import"./chunk-HU6DUUP4.js";var o=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiAutoColorPipe, TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiAvatar, TuiButton, TuiHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly counter = signal(1);

    protected onClick(): void {
        this.counter.update((n) => n + 1);
    }
}
`;export{o as default};
