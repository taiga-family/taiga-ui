import {Directive, inject} from '@angular/core';
import type {TuiButtonOptions} from '@taiga-ui/core';
import {TUI_BUTTON_OPTIONS, TuiModeDirective} from '@taiga-ui/core';
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

    public size: TuiButtonOptions['size'] = 's';

    public shape = null;

    public override readonly change$ = this.modeDirective?.change$ || new Subject();

    public get appearance(): string {
        return this.modeDirective?.mode === 'onDark' ? 'accent' : 'secondary';
    }
}
