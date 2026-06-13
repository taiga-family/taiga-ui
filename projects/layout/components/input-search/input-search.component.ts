import {
    Directive,
    effect,
    type EmbeddedViewRef,
    inject,
    input,
    model,
    type OnChanges,
    signal,
    type TemplateRef,
    untracked,
} from '@angular/core';
import {
    tuiContainsOrAfter,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetClosestFocusable} from '@taiga-ui/cdk/utils/focus';
import {tuiCellOptionsProvider} from '@taiga-ui/core/components/cell';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {
    tuiAsTextfieldContent,
    TuiTextfieldComponent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiInputSearchContent} from './input-search-content.component';

@Directive({
    selector: 'input[tuiInputSearch]',
    providers: [
        tuiCellOptionsProvider({size: 'm'}),
        tuiAsTextfieldContent(() => TuiInputSearchContent),
    ],
    hostDirectives: [TuiWithInput, TuiTextfieldContent],
    host: {
        '(focus)': 'open()',
        '(keydown.arrowDown.prevent)': 'onArrow()',
        '(keydown.tab.prevent)': '0',
    },
})
export class TuiInputSearch implements OnChanges {
    private readonly service = inject(TuiPopupService);
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly i18n = inject(TUI_INPUT_SEARCH);
    private parent = this.textfield.el.parentElement;
    private neighbor = this.textfield.el.nextSibling;
    private placeholder = '';
    private ref?: EmbeddedViewRef<unknown>;

    protected readonly icon = tuiIconStart(inject(TUI_COMMON_ICONS).search, {});

    protected readonly openEffect = effect(() => {
        const template = this.template();

        if (template && untracked(this.searchOpen)) {
            this.open();
        }
    });

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly template = signal<TemplateRef<unknown> | null>(null);
    public readonly tuiInputSearch = input<PolymorpheusContent>();
    public readonly searchOpen = model(false, {alias: 'tuiInputSearchOpen'});

    public ngOnChanges(): void {
        if (this.searchOpen()) {
            this.open();
        } else {
            this.close();
        }
    }

    public open(): void {
        const template = this.template();

        if (!template || this.ref?.destroyed === false) {
            return;
        }

        this.placeholder = this.el.placeholder;
        this.parent = this.textfield.el.parentElement;
        this.neighbor = this.textfield.el.nextSibling;
        this.ref = this.service.add(template);
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

    public onFocus({target}: Event): void {
        if (
            target !== this.el &&
            tuiIsElement(target) &&
            !tuiContainsOrAfter(this.ref?.rootNodes[0], target)
        ) {
            this.close();
        }
    }

    protected onArrow(): void {
        if (this.ref?.destroyed !== false) {
            return;
        }

        const root: Element = this.ref.rootNodes[0];
        const initial = this.textfield.el.nextElementSibling ?? root;

        tuiGetClosestFocusable({initial, root})?.focus();
    }
}
