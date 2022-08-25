import {Directive, Inject, Optional, SkipSelf} from '@angular/core';
import {TUI_BUTTON_OPTIONS, TuiButtonOptions, TuiModeDirective} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Directive({
    selector: `tui-push`,
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
    size: TuiButtonOptions['size'] = `s`;

    shape = null;

    readonly change$ = this.modeDirective?.change$ || new Subject();

    constructor(
        @Optional()
        @SkipSelf()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
    ) {
        super();
    }

    get appearance(): string {
        return this.modeDirective?.mode === `onDark` ? `accent` : `secondary`;
    }
}
