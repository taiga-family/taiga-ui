import {Directive, Input, OnChanges} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {Subject} from 'rxjs';

@Directive({
    selector: `[tuiHint][tuiHintManual]`,
    providers: [tuiAsDriver(TuiHintManualDirective)],
})
export class TuiHintManualDirective extends TuiDriver implements OnChanges {
    private readonly stream$ = new Subject<boolean>();

    @Input()
    tuiHintManual = false;

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    ngOnChanges(): void {
        this.stream$.next(this.tuiHintManual);
    }
}
