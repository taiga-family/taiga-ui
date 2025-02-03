import type {OnChanges} from '@angular/core';
import {Directive, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';

import {TuiAccordionComponent} from './accordion.component';

@Directive({
    standalone: true,
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

    protected readonly size = tuiDirectiveBinding(TuiButton, 'size', this.accordion.size);

    @Input()
    public tuiAccordion: boolean | string = '';

    @Output()
    public readonly tuiAccordionChange = new EventEmitter<boolean>();

    public readonly open = tuiDirectiveBinding(TuiChevron, 'tuiChevron', signal(false));

    public ngOnChanges(): void {
        this.open.set(!!this.tuiAccordion);
        this.accordion.toggle(this);
    }

    public toggle(): void {
        this.open.set(!this.open());
        this.tuiAccordion = this.open();
        this.tuiAccordionChange.emit(this.open());
        this.accordion.toggle(this);
    }
}
