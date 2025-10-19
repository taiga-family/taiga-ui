import {computed, Directive, inject, input} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DATE_FORMAT, type TuiDateFormatSettings} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';

@Directive({
    selector: '[tuiDateFormat]',
    providers: [tuiProvide(TUI_DATE_FORMAT, TuiDateFormat)],
})
export class TuiDateFormat extends Observable<TuiDateFormatSettings> {
    private readonly parent = toSignal(inject(TUI_DATE_FORMAT, {skipSelf: true}));

    private readonly settings = toObservable(
        computed(() => ({...this.parent()!, ...this.tuiDateFormat()})),
    );

    public readonly tuiDateFormat = input<Partial<TuiDateFormatSettings>>();

    constructor() {
        super((subscriber) => this.settings.subscribe(subscriber));
    }
}
