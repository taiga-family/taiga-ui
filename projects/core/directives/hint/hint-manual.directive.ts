import {Directive, Inject, Input, OnChanges} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {Subject} from 'rxjs';

import {TuiHintHoverDirective} from './hint-hover.directive';

@Directive({
    selector: '[tuiHint][tuiHintManual]',
    providers: [tuiAsDriver(TuiHintManualDirective)],
})
export class TuiHintManualDirective extends TuiDriver implements OnChanges {
    private readonly stream$ = new Subject<boolean>();

    @Input()
    tuiHintManual = false;

    readonly type = 'hint';

    constructor(@Inject(TuiHintHoverDirective) hover: TuiHintHoverDirective) {
        super(subscriber => this.stream$.subscribe(subscriber));
        hover.enabled = false;
    }

    ngOnChanges(): void {
        this.stream$.next(this.tuiHintManual);
    }
}
