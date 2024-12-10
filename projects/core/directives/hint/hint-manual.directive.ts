import type {OnChanges} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import type {Subscriber} from 'rxjs';
import {BehaviorSubject} from 'rxjs';

import {TuiHintHover} from './hint-hover.directive';

@Directive({
    standalone: true,
    selector: '[tuiHint][tuiHintManual]',
    providers: [tuiAsDriver(TuiHintManual)],
})
export class TuiHintManual extends TuiDriver implements OnChanges {
    private readonly hover = inject(TuiHintHover);
    private readonly stream$ = new BehaviorSubject<boolean | null>(false);

    @Input()
    public tuiHintManual: boolean | null = false;

    public readonly type = 'hint';

    constructor() {
        super((subscriber: Subscriber<boolean | null>) =>
            this.stream$.subscribe(subscriber),
        );
        this.hover.enabled = false;
    }

    public ngOnChanges(): void {
        this.stream$.next(this.tuiHintManual);
        this.hover.enabled = this.tuiHintManual === null;
    }
}
