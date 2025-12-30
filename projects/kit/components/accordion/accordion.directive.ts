import {Directive, inject, model, type OnChanges} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';

import {TuiAccordionComponent} from './accordion.component';

@Directive({
    selector: 'button[tuiAccordion]',
    providers: [
        tuiAvatarOptionsProvider({size: 's'}),
        tuiButtonOptionsProvider({appearance: 'outline-grayscale'}),
    ],
    hostDirectives: [TuiButton, TuiChevron],
    host: {
        tuiButton: '',
        tuiAccordion: '',
        type: 'button',
        '[class._open]': 'open()',
        '(click)': 'toggle()',
    },
})
export class TuiAccordionDirective implements OnChanges {
    private readonly accordion = inject(TuiAccordionComponent);

    public readonly open = model<boolean | ''>(false, {alias: 'tuiAccordion'});

    public readonly size = tuiDirectiveBinding(TuiButton, 'size', this.accordion.size);
    public readonly chevron = tuiDirectiveBinding(TuiChevron, 'rotated', this.open);

    public ngOnChanges(): void {
        this.accordion.toggle(this);
    }

    public toggle(): void {
        this.open.set(!this.open());
        this.accordion.toggle(this);
    }
}
