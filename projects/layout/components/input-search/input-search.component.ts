import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    type EmbeddedViewRef,
    inject,
    input,
    model,
    type OnChanges,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    tuiContainsOrAfter,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetClosestFocusable} from '@taiga-ui/cdk/utils/focus';
import {tuiCellOptionsProvider} from '@taiga-ui/core/components/cell';
import {
    TuiTextfieldComponent,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'input[tuiInputSearch]',
    imports: [PolymorpheusOutlet],
    templateUrl: './input-search.component.html',
    styleUrl: './input-search.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiCellOptionsProvider({size: 'm'})],
    hostDirectives: [TuiWithTextfield],
    host: {
        ngSkipHydration: 'true',
        '(focus)': 'open()',
        '(keydown.tab.prevent)': '0',
        '(keydown.arrowDown.prevent)': 'onArrow()',
    },
})
export class TuiInputSearch implements OnChanges {
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<any>;

    @ViewChild('container')
    private readonly container?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly service = inject(TuiPopupService);
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly i18n = inject(TUI_INPUT_SEARCH);
    private parent = this.textfield.el.parentElement;
    private neighbor = this.textfield.el.nextSibling;
    private placeholder = '';
    private ref?: EmbeddedViewRef<unknown>;

    protected readonly icon = tuiIconStart(inject(TUI_COMMON_ICONS).search, {});

    public readonly tuiInputSearch = input<PolymorpheusContent>();

    public searchOpen = model(false, {alias: 'tuiInputSearchOpen'});

    public ngOnChanges(): void {
        if (this.searchOpen()) {
            this.open();
        } else {
            this.close();
        }
    }

    public open(): void {
        if (this.ref?.destroyed === false || !this.template) {
            return;
        }

        this.placeholder = this.el.placeholder;
        this.parent = this.textfield.el.parentElement;
        this.neighbor = this.textfield.el.nextSibling;
        this.ref = this.service.add(this.template);
        this.ref.rootNodes[0]?.insertAdjacentElement('afterbegin', this.textfield.el);
        this.el.focus({preventScroll: true});
        this.el.placeholder = this.i18n()?.placeholder || this.el.placeholder;
        this.searchOpen.set(true);
    }

    public close(): void {
        this.el.placeholder = this.placeholder || this.el.placeholder;
        this.parent?.insertBefore(this.textfield.el, this.neighbor);
        this.ref?.destroy();
        this.searchOpen.set(false);
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
