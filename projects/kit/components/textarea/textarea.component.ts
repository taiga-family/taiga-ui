import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    input,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {TUI_SCROLL_REF, TuiScrollControls} from '@taiga-ui/core/components/scrollbar';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_TEXTAREA_OPTIONS} from './textarea.options';

@Component({
    selector: 'textarea[tuiTextarea]',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    templateUrl: './textarea.template.html',
    styleUrl: './textarea.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    hostDirectives: [TuiWithInput],
    host: {
        ngSkipHydration: 'true',
        '[class._mobile]': 'isMobile',
        '(scroll.zoneless)': 'onScroll()',
        // To trigger CD for #text
        '(scroll.once)': 'onScroll()',
    },
})
export class TuiTextareaComponent implements AfterViewInit {
    private readonly template = viewChild.required(TemplateRef);
    private readonly options = inject(TUI_TEXTAREA_OPTIONS);
    private readonly vcr = inject(ViewContainerRef);
    private readonly text = viewChild('text', {read: ElementRef});

    protected readonly el = tuiInjectElement<HTMLTextAreaElement>();
    protected readonly textfield = inject(TuiTextfieldComponent<string>);
    protected readonly isMobile = inject(TUI_IS_MOBILE);

    public readonly min = input(this.options.min);
    public readonly max = input(this.options.max);
    public readonly content = input(this.options.content);

    public ngAfterViewInit(): void {
        this.vcr.createEmbeddedView(this.template());
    }

    protected onScroll(): void {
        this.text()?.nativeElement.scrollTo({top: this.el.scrollTop});
    }
}
