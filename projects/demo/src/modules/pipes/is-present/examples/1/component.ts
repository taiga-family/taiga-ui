import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {delayWhen, of, Subject} from 'rxjs';

@Component({
    selector: 'tui-is-present-example1',
    templateUrl: './template.html',
    encapsulation,
    changeDetection,
})
export class TuiIsPresentExample1 {
    private readonly loadCountSubject = new Subject<void>();

    protected readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));

    protected loadCount(): void {
        this.loadCountSubject.next();
        this.loadCountSubject.complete();
    }
}
