import {
    type ComponentRef,
    computed,
    Directive,
    inject,
    INJECTOR,
    input,
    type OnInit,
    ViewContainerRef,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {TuiScrollRef} from '@taiga-ui/core/components/scrollbar';

import {TUI_TEXTAREA_OPTIONS} from './textarea.options';
import {TuiTextareaContent} from './textarea-content.component';

@Directive({
    selector: 'textarea[tuiTextarea]',
    hostDirectives: [TuiWithInput, TuiScrollRef],
    host: {
        'data-tui-version': TUI_VERSION,
        // To trigger CD for #text
        '(scroll.once)': 'onScroll()',
        '(scroll.zoneless)': 'onScroll()',
    },
})
// TODO(v6): rename to TuiTextareaDirective
export class TuiTextareaComponent implements OnInit {
    private readonly vcr = inject(ViewContainerRef);
    private readonly injector = inject(INJECTOR);
    private readonly options = inject(TUI_TEXTAREA_OPTIONS);
    private ref?: ComponentRef<TuiTextareaContent>;

    /**
     * TODO(v6): check https://github.com/angular/angular/issues/70600 status:
     * - Solved? Drop `string | undefined` workaround and `transform`
     * - Not yet? Rename props to `minRows`
     */
    public readonly min = input<number, number | string | undefined>(this.options.min, {
        transform: (min) => (typeof min === 'number' ? min : this.options.min),
    });

    /**
     * TODO(v6): check https://github.com/angular/angular/issues/70600 status:
     * - Solved? Drop `string | undefined` workaround and `transform`
     * - Not yet? Rename props to `maxRows`
     */
    public readonly max = input<number, number | string | undefined>(this.options.max, {
        transform: (max) => (typeof max === 'number' ? max : this.options.max),
    });

    /** Row limits for use with Signal Forms, which reserve min and max for field constraints. */
    public readonly minRows = input<number>();
    public readonly maxRows = input<number>();
    public readonly minimumRows = computed(() => this.minRows() ?? this.min());
    public readonly maximumRows = computed(() => this.maxRows() ?? this.max());
    public readonly content = input(this.options.content);
    public readonly el = tuiInjectElement<HTMLTextAreaElement>();

    public ngOnInit(): void {
        this.ref = this.vcr.createComponent(TuiTextareaContent, {
            injector: this.injector,
        });
    }

    protected onScroll(): void {
        requestAnimationFrame(() =>
            this.ref?.location.nativeElement.scrollTo({top: this.el.scrollTop}),
        );
    }
}
