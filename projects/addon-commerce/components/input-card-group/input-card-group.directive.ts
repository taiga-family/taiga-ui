import {Directive, inject, input} from '@angular/core';
import {TUI_BREAKPOINT} from '@taiga-ui/core/tokens';

@Directive({
    host: {'[class._compact]': "compact() || breakpoint() === 'mobile'"},
})
export class TuiInputCardGroupDirective {
    protected readonly breakpoint = inject(TUI_BREAKPOINT);
    public readonly compact = input(false);
}
