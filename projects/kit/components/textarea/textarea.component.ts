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
import {type TuiContext, tuiInjectElement, tuiProvide} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF, TuiScrollControls, TuiTextfieldComponent} from '@taiga-ui/core';
import {TuiWithTextfield} from '@taiga-ui/core/components/textfield';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_TEXTAREA_OPTIONS} from './textarea.options';

@Component({
    standalone: true,
    selector: 'textarea[tuiTextarea]',
    templateUrl: './textarea.template.html',
    styleUrls: ['./textarea.style.less'],
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    hostDirectives: [TuiWithTextfield],
    host: {
        '(scroll.zoneless)': 'onScroll()',
        // To trigger CD for #text
        '(scroll.once)': 'onScroll()',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TuiScrollControls, PolymorpheusOutlet],
})
export class TuiTextarea implements AfterViewInit {
    private readonly options = inject(TUI_TEXTAREA_OPTIONS);
    private readonly vcr = inject(ViewContainerRef);

    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<any>;

    @ViewChild('text')
    protected readonly text?: ElementRef<HTMLElement>;
    protected readonly el = tuiInjectElement<HTMLTextAreaElement>();
    protected readonly textfield = inject(TuiTextfieldComponent<string>);

    @Input()
    content: PolymorpheusContent<TuiContext<string>> = ({$implicit}) => $implicit;

    @Input()
    min = this.options.min;

    @Input()
    max = this.options.max;

    public ngAfterViewInit(): void {
        if (this.template) {
            this.vcr.createEmbeddedView(this.template);
        }
    }

    protected onScroll(): void {
        this.text?.nativeElement.scrollTo({top: this.el.scrollTop});
    }
}
