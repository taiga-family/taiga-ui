import {computed, Directive, inject, input} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_NUMBER_FORMAT, type TuiNumberFormatSettings} from '@taiga-ui/core/tokens';
import {combineLatest, map, Observable} from 'rxjs';

@Directive({
    selector: '[tuiNumberFormat]',
    providers: [tuiProvide(TUI_NUMBER_FORMAT, TuiNumberFormat)],
})
export class TuiNumberFormat extends Observable<TuiNumberFormatSettings> {
    private readonly parent = inject(TUI_NUMBER_FORMAT, {skipSelf: true});
    private readonly changes = toObservable(computed(() => this.tuiNumberFormat()));

    public readonly tuiNumberFormat = input<Partial<TuiNumberFormatSettings>>();

    constructor() {
        super((subscriber) =>
            combineLatest([this.parent, this.changes])
                .pipe(map(([parent, settings]) => ({...parent, ...settings})))
                .subscribe(subscriber),
        );
    }
}
