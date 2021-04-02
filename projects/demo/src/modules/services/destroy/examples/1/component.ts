import {Component, ElementRef} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {fromEvent} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-currency-example',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
    providers: [TuiDestroyService],
})
export class TuiCurrencyExample {
    constructor(destroy$: TuiDestroyService, {nativeElement}: ElementRef<HTMLElement>) {
        fromEvent(nativeElement, 'click')
            .pipe(takeUntil(destroy$))
            .subscribe(() => {
                console.log('click');
            });
    }
}
