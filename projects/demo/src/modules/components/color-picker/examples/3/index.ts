import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: `tui-color-picker-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiColorPickerExample3 {
    colors = new Map([
        [`red`, `var(--tui-error-fill)`],
        [`green`, `var(--tui-success-fill)`],
        [`blue`, `var(--tui-info-fill)`],
    ]);

    color$ = new BehaviorSubject(`var(--tui-success-fill)`);

    updateColor(color: string): void {
        this.color$.next(color);
    }
}
