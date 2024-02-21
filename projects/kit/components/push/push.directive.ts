import {Directive, inject} from '@angular/core';
import {TUI_BUTTON_OPTIONS, TuiButtonOptions, TuiModeDirective} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Directive({
    selector: 'tui-push',
    providers: [
        {
            provide: TuiModeDirective,
            useExisting: TuiPushDirective,
        },
        {
            provide: TUI_BUTTON_OPTIONS,
            useExisting: TuiPushDirective,
        },
    ],
})
export class TuiPushDirective extends TuiModeDirective implements TuiButtonOptions {
    private readonly modeDirective = inject(TuiModeDirective, {
        optional: true,
        skipSelf: true,
    });

    size: TuiButtonOptions['size'] = 's';

    shape = null;

    override readonly change$ = this.modeDirective?.change$ || new Subject();

    get appearance(): string {
        return this.modeDirective?.mode === 'onDark' ? 'accent' : 'secondary';
    }
}
