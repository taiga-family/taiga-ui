import {Component, ElementRef, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

import {fromEvent} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
    selector: 'tui-destroy-example',
    templateUrl: './template.html',
    encapsulation,
    changeDetection,
    providers: []
})
export class TuiDestroyExample {
    constructor() {
        fromEvent(inject(ElementRef<HTMLElement>).nativeElement, 'click')
            .pipe(takeUntilDestroyed(inject(DestroyRef)))
            .subscribe(() => console.info('click'));
    }
}
