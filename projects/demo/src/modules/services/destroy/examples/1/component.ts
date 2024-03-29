import {Component, ElementRef, inject, DestroyRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {fromEvent} from 'rxjs';

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
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => console.info('click'));
    }
}
