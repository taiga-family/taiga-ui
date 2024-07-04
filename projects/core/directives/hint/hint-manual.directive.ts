import type {OnChanges} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {BehaviorSubject} from 'rxjs';

import {TuiHintHover} from './hint-hover.directive';

@Directive({
    standalone: true,
    selector: '[tuiHint][tuiHintManual]',
    providers: [tuiAsDriver(TuiHintManual)],
})
export class TuiHintManual extends TuiDriver implements OnChanges {
    private readonly hover = inject(TuiHintHover);
    private readonly stream$ = new BehaviorSubject(false);

    @Input()
    public tuiHintManual = false;

    public readonly type = 'hint';

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.hover.enabled = false;
    }

    public ngOnChanges(): void {
        this.stream$.next(this.tuiHintManual);
    }
}
