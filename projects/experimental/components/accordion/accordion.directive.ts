import {
    Directive,
    EventEmitter,
    inject,
    Input,
    type OnChanges,
    Output,
    signal,
} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

import {TuiAccordionComponent} from './accordion.component';

@Directive({
    standalone: true,
    selector: 'button[tuiAccordion]',
    providers: [tuiButtonOptionsProvider({appearance: 'outline-grayscale'})],
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

    public readonly open = tuiDirectiveBinding(TuiChevron, 'tuiChevron', signal(false));

    @Input()
    public tuiAccordion: boolean | string = '';

    @Output()
    public readonly tuiAccordionChange = new EventEmitter<boolean>();

    public ngOnChanges(): void {
        this.open.set(!!this.tuiAccordion);
        this.accordion.toggle(this, this.open());
    }

    public toggle(): void {
        this.open.set(!this.open());
        this.tuiAccordionChange.emit(this.open());
        this.accordion.toggle(this, this.open());
    }
}
