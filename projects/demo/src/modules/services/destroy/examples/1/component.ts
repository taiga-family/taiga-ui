import {Component, ElementRef, Inject, Self} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: `tui-destroy-example`,
    templateUrl: `./template.html`,
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiDestroyExample {
    constructor(
        @Self()
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
    ) {
        fromEvent(nativeElement, `click`)
            .pipe(takeUntil(destroy$))
            .subscribe(() => console.info(`click`));
    }
}
