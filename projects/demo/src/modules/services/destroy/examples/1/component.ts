import {Component, ElementRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {fromEvent} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    templateUrl: './template.html',
    encapsulation,
    changeDetection,
})
export class TuiDestroyExample {
    constructor() {
        fromEvent(inject(ElementRef<HTMLElement>).nativeElement, 'click')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('click'));
    }
}
