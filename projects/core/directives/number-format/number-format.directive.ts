import {Directive, inject, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {combineLatest, map, Observable, ReplaySubject} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiNumberFormat]',
    providers: [tuiProvide(TUI_NUMBER_FORMAT, TuiNumberFormatDirective)],
})
export class TuiNumberFormatDirective extends Observable<TuiNumberFormatSettings> {
    private readonly settings = new ReplaySubject<Partial<TuiNumberFormatSettings>>(1);
    private readonly parent = inject(TUI_NUMBER_FORMAT, {skipSelf: true});

    constructor() {
        super(subscriber =>
            combineLatest([this.parent, this.settings])
                .pipe(map(([parent, settings]) => ({...parent, ...settings})))
                .subscribe(subscriber),
        );
    }

    @Input()
    public set tuiNumberFormat(format: Partial<TuiNumberFormatSettings>) {
        this.settings.next(format);
    }
}
