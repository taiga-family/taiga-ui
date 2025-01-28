import type {ElementRef, EmbeddedViewRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    tuiContainsOrAfter,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetClosestFocusable} from '@taiga-ui/cdk/utils/focus';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiTextfieldComponent,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {tuiCellOptionsProvider} from '@taiga-ui/layout/components/cell';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'input[tuiInputSearch]',
    imports: [PolymorpheusOutlet],
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiCellOptionsProvider({size: 'm'})],
    hostDirectives: [TuiWithTextfield],
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
