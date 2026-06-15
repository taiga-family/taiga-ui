import {
    Directive,
    ElementRef,
    inject,
    INJECTOR,
    input,
    type OnInit,
    signal,
    ViewContainerRef,
} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {TUI_SCROLL_REF} from '@taiga-ui/core/components/scrollbar';

import {TUI_TEXTAREA_OPTIONS} from './textarea.options';
import {TuiTextareaContent} from './textarea-content.component';

@Directive({
    selector: 'textarea[tuiTextarea]',
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    hostDirectives: [TuiWithInput],
    host: {
        'data-tui-version': TUI_VERSION,
        '[class._mobile]': 'isMobile',
        '(scroll.once)': 'onScroll()',
        '(scroll.zoneless)': 'onScroll()',
    },
})
export class TuiTextareaComponent implements OnInit {
    private readonly vcr = inject(ViewContainerRef);
    private readonly injector = inject(INJECTOR);
    private readonly options = inject(TUI_TEXTAREA_OPTIONS);

    protected readonly el = tuiInjectElement<HTMLTextAreaElement>();

    public readonly isMobile = inject(WA_IS_MOBILE);
    public readonly text = signal<ElementRef<HTMLSpanElement> | undefined>(undefined);
    public readonly min = input(this.options.min);
    public readonly max = input(this.options.max);
    public readonly content = input(this.options.content);

    public ngOnInit(): void {
        this.vcr.createComponent(TuiTextareaContent, {injector: this.injector});
    }

    protected onScroll(): void {
        requestAnimationFrame(() => {
            this.text()?.nativeElement.scrollTo({top: this.el.scrollTop});
        });
    }
}
