import {Directive, HostBinding, Input} from '@angular/core';
import {TuiBrightness} from '@taiga-ui/core/enums';
import {Subject} from 'rxjs';

@Directive({
    selector: '[tuiMode]',
})
export class TuiModeDirective {
    @Input('tuiMode')
    @HostBinding('attr.data-tui-mode')
    set mode(mode: TuiBrightness | null) {
        this.currentMode = mode;
        this.change$.next();
    }

    get mode(): TuiBrightness | null {
        return this.currentMode;
    }

    readonly change$ = new Subject<void>();

    private currentMode: TuiBrightness | null = null;
}
