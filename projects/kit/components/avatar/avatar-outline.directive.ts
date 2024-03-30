import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiAvatarOutlineComponent} from './avatar-outline.component';

@Directive({
    standalone: true,
    selector: '[tuiAvatarOutline]',
    host: {
        '[style.--t-fill]': 'value',
        '[class._outline]': 'value',
    },
})
export class TuiAvatarOutlineDirective {
    @Input()
    public tuiAvatarOutline: string | null = '';

    protected readonly nothing = tuiWithStyles(TuiAvatarOutlineComponent);

    protected get value(): string | null {
        return this.tuiAvatarOutline === ''
            ? 'var(--tui-primary)'
            : this.tuiAvatarOutline;
    }
}
