import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TuiScrollControls} from '@taiga-ui/core/components/scrollbar';
import {
    TuiTextfieldComponent,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_TEXTAREA_OPTIONS, type TuiTextareaOptions} from './textarea.options';

@Component({
    selector: 'textarea[tuiTextarea]',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    templateUrl: './textarea.template.html',
    styleUrl: './textarea.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    hostDirectives: [TuiWithTextfield],
    host: {
        ngSkipHydration: 'true',
        '[class._mobile]': 'isMobile',
        '(scroll.zoneless)': 'onScroll()',
        // To trigger CD for #text
        '(scroll.once)': 'onScroll()',
    },
})
export class TuiTextarea implements AfterViewInit {
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<any>;

    private readonly options = inject(TUI_TEXTAREA_OPTIONS);
    private readonly vcr = inject(ViewContainerRef);

    @ViewChild('text')
    protected readonly text?: ElementRef<HTMLElement>;

    protected readonly el = tuiInjectElement<HTMLTextAreaElement>();
    protected readonly textfield = inject(TuiTextfieldComponent<string>);
    protected readonly isMobile = inject(TUI_IS_MOBILE);

    @Input()
    public min = this.options.min;

    @Input()
    public max = this.options.max;

    @Input()
    public content: TuiTextareaOptions['content'] = this.options.content;

    public ngAfterViewInit(): void {
        if (this.template) {
            this.vcr.createEmbeddedView(this.template);
        }
    }

    protected onScroll(): void {
        this.text?.nativeElement.scrollTo({top: this.el.scrollTop});
    }
}
