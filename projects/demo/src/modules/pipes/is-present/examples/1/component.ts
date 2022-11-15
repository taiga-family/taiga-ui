import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {of, Subject} from 'rxjs';
import {delayWhen} from 'rxjs/operators';

@Component({
    selector: `tui-is-present-example1`,
    templateUrl: `./template.html`,
    changeDetection,
    encapsulation,
})
export class TuiIsPresentExample1 {
    private readonly loadCountSubject = new Subject<void>();

    readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));

    loadCount(): void {
        this.loadCountSubject.next();
        this.loadCountSubject.complete();
    }
}
