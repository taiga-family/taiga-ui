import {computed, Directive, inject, input} from '@angular/core';
import {TUI_MOBILE_BREAKPOINT} from '@taiga-ui/core/tokens';

@Directive({
    host: {'[class._compact]': 'c()'},
})
export class TuiInputCardGroupDirective {
    private readonly isMobile = inject(TUI_MOBILE_BREAKPOINT);
    public readonly compact = input(false);

    public readonly c = computed(() => this.compact() || this.isMobile());
}
