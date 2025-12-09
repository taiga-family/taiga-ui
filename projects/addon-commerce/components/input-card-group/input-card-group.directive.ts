import {computed, Directive, inject, input} from '@angular/core';
import {TUI_BREAKPOINT} from '@taiga-ui/core/tokens';

@Directive({
    host: {'[class._compact]': 'c()'},
})
export class TuiInputCardGroupDirective {
    private readonly breakpoint = inject(TUI_BREAKPOINT);
    public readonly compact = input(false);

    public readonly c = computed(() => this.compact() || this.breakpoint() === 'mobile');
}
