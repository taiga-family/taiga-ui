import {computed, Directive, inject, input} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DATE_FORMAT, type TuiDateFormatSettings} from '@taiga-ui/core/tokens';
import {combineLatest, map, Observable} from 'rxjs';

@Directive({
    selector: '[tuiDateFormat]',
    providers: [tuiProvide(TUI_DATE_FORMAT, TuiDateFormat)],
})
export class TuiDateFormat extends Observable<TuiDateFormatSettings> {
    private readonly parent = inject(TUI_DATE_FORMAT, {skipSelf: true});
    private readonly changes = toObservable(computed(() => this.tuiDateFormat()));

    public readonly tuiDateFormat = input<Partial<TuiDateFormatSettings>>();

    constructor() {
        super((subscriber) =>
            combineLatest([this.parent, this.changes])
                .pipe(map(([parent, settings]) => ({...parent, ...settings})))
                .subscribe(subscriber),
        );
    }
}
