import {Directive, Input} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {Subject} from 'rxjs';

@Directive({
    selector: `[tuiHint][tuiHintManual]`,
    providers: [tuiAsDriver(TuiHintManualDirective)],
})
export class TuiHintManualDirective extends TuiDriver {
    private readonly stream$ = new Subject<boolean>();

    @Input()
    set tuiHintManual(visible: boolean) {
        this.stream$.next(visible);
    }

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
