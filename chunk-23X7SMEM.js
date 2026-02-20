import"./chunk-HU6DUUP4.js";var o=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiLineClamp],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected hasOverflownContent = signal<boolean | null>(null);
    protected linesLimit = 2;

    protected toggle(): void {
        this.linesLimit = this.collapsed ? 12 : 2;
    }

    private get collapsed(): boolean {
        return this.linesLimit === 2;
    }
}
`;export{o as default};
