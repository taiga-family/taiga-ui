import {Directive, inject, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';
import {TUI_DATE_FORMAT, type TuiDateFormatSettings} from '@taiga-ui/core/tokens';
import {combineLatest, map, Observable, ReplaySubject} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiDateFormat]',
    providers: [tuiProvide(TUI_DATE_FORMAT, TuiDateFormatDirective)],
})
export class TuiDateFormatDirective extends Observable<TuiDateFormatSettings> {
    private readonly settings = new ReplaySubject<Partial<TuiDateFormatSettings>>(1);
    private readonly parent = inject(TUI_DATE_FORMAT, {skipSelf: true});

    constructor() {
        super(subscriber =>
            combineLatest([this.parent, this.settings])
                .pipe(map(([parent, settings]) => ({...parent, ...settings})))
                .subscribe(subscriber),
        );
    }

    @Input()
    public set tuiDateFormat(format: Partial<TuiDateFormatSettings>) {
        this.settings.next(format);
    }
}
