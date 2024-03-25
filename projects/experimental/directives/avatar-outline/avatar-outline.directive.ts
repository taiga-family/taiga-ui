import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiAvatarOutlineComponent} from './avatar-outline.component';

@Directive({
    selector: '[tuiAvatarOutline]',
    host: {
        '[style.--t-fill]': 'value',
        '[class._outline]': 'value',
    },
})
export class TuiAvatarOutlineDirective {
    @Input()
    tuiAvatarOutline: string | null = '';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiAvatarOutlineComponent);
    }

    get value(): string | null {
        return this.tuiAvatarOutline === ''
            ? 'var(--tui-primary)'
            : this.tuiAvatarOutline;
    }
}
