import {computed, Directive, inject, signal} from '@angular/core';
import {TUI_BREAKPOINT} from '@taiga-ui/core/tokens';

@Directive({
    inputs: ['compactSetter: compact'],
    host: {'[class._compact]': 'compact()'},
})
export class TuiInputCardGroupDirective {
    private readonly breakpoint = inject(TUI_BREAKPOINT);
    private readonly c = signal(false);

    public readonly compact = computed(() => this.c() || this.breakpoint() === 'mobile');

    public set compactSetter(compact: boolean) {
        this.c.set(compact);
    }
}
