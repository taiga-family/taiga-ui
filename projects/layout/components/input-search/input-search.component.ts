import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    type EmbeddedViewRef,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    TUI_COMMON_ICONS,
    TuiIcons,
    TuiPopupService,
    TuiTextfieldComponent,
    TuiWithTextfield,
} from '@taiga-ui/core';
import {
    tuiContainsOrAfter,
    tuiDirectiveBinding,
    tuiGetClosestFocusable,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';

@Component({
    standalone: true,
    selector: 'input[tuiInputSearch]',
    imports: [PolymorpheusOutlet],
    hostDirectives: [TuiWithTextfield],
    styleUrls: ['./input-search.component.less'],
    templateUrl: './input-search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(focus)': 'open()',
        '(keydown.tab.prevent)': '0',
        '(keydown.arrowDown.prevent)': 'onArrow()',
    },
})
export class TuiInputSearch {
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<any>;

    @ViewChild('container')
    private readonly container?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly service = inject(TuiPopupService);
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly i18n = toSignal(inject(TUI_INPUT_SEARCH));
    private parent = this.textfield.el.parentElement;
    private neighbor = this.textfield.el.nextSibling;
    private placeholder = '';
    private ref?: EmbeddedViewRef<unknown>;

    protected readonly icon = tuiDirectiveBinding(
        TuiIcons,
        'iconStart',
        inject(TUI_COMMON_ICONS).search,
        {},
    );

    @Input()
    public tuiInputSearch: PolymorpheusContent;

    public open(): void {
        if (this.ref?.destroyed === false || !this.template) {
            return;
        }

        this.placeholder = this.el.placeholder;
        this.parent = this.textfield.el.parentElement;
        this.neighbor = this.textfield.el.nextSibling;
        this.ref = this.service.addTemplate(this.template);
        this.ref.rootNodes[0]?.insertAdjacentElement('afterbegin', this.textfield.el);
        this.el.focus({preventScroll: true});
        this.el.placeholder = this.i18n()?.placeholder || this.el.placeholder;
    }

    public close(): void {
        this.el.placeholder = this.placeholder;
        this.parent?.insertBefore(this.textfield.el, this.neighbor);
        this.ref?.destroy();
    }

    protected onArrow(): void {
        tuiGetClosestFocusable({
            initial: this.container?.nativeElement || this.el,
            root: this.container?.nativeElement || this.el,
        })?.focus();
    }

    protected onFocus({target}: Event): void {
        if (
            this.container &&
            target !== this.el &&
            tuiIsElement(target) &&
            !tuiContainsOrAfter(this.container.nativeElement, target)
        ) {
            this.close();
        }
    }
}
