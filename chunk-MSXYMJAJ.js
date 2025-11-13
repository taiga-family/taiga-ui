import"./chunk-42JZD6NG.js";var t=`import {AsyncPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIsPresentPipe} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {delayWhen, of, Subject} from 'rxjs';

@Component({
    imports: [AsyncPipe, JsonPipe, TuiButton, TuiIsPresentPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly loadCountSubject = new Subject<void>();

    protected readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));

    protected loadCount(): void {
        this.loadCountSubject.next();
        this.loadCountSubject.complete();
    }
}
`;export{t as default};
