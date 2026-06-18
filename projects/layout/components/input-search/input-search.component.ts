import {
    type ComponentRef,
    Directive,
    inject,
    INJECTOR,
    input,
    model,
    type OnChanges,
} from '@angular/core';
import {
    tuiContainsOrAfter,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetClosestFocusable} from '@taiga-ui/cdk/utils/focus';
import {tuiCellOptionsProvider} from '@taiga-ui/core/components/cell';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';
import {PolymorpheusComponent, type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiInputSearchContent} from './input-search-content.component';

@Directive({
    selector: 'input[tuiInputSearch]',
    providers: [tuiCellOptionsProvider({size: 'm'})],
    hostDirectives: [TuiWithInput],
    host: {
        '(focus)': 'open()',
        '(keydown.arrowDown.prevent)': 'onArrow()',
        '(keydown.tab.prevent)': '0',
    },
})
export class TuiInputSearch implements OnChanges {
    private readonly injector = inject(INJECTOR);
    private readonly service = inject(TuiPopupService);
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly i18n = inject(TUI_INPUT_SEARCH);
    private parent = this.textfield.el.parentElement;
    private neighbor = this.textfield.el.nextSibling;
    private placeholder = '';
    private ref?: ComponentRef<TuiInputSearchContent>;

    protected readonly icon = tuiIconStart(inject(TUI_COMMON_ICONS).search, {});

    public readonly el = tuiInjectElement<HTMLInputElement>();
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
        if (this.ref?.hostView.destroyed === false) {
            return;
        }

        this.placeholder = this.el.placeholder;
        this.parent = this.textfield.el.parentElement;
        this.neighbor = this.textfield.el.nextSibling;
        this.ref = this.service.add(
            new PolymorpheusComponent(TuiInputSearchContent, this.injector),
        );
        this.ref.location.nativeElement.insertAdjacentElement(
            'afterbegin',
            this.textfield.el,
        );
        this.el.focus({preventScroll: true});
        this.el.placeholder = this.i18n()?.placeholder || this.el.placeholder;
        this.searchOpen.set(true);
    }

    public close(): void {
        if (this.ref?.hostView.destroyed !== false) {
            this.searchOpen.set(false);

            return;
        }

        this.el.placeholder = this.placeholder || this.el.placeholder;
        this.parent?.insertBefore(this.textfield.el, this.neighbor);
        this.ref.destroy();
        this.searchOpen.set(false);
    }

    public onArrow(): void {
        if (this.ref?.hostView.destroyed !== false) {
            return;
        }

        const root: HTMLElement = this.ref.location.nativeElement;

        tuiGetClosestFocusable({
            root,
            initial: this.textfield.el.nextElementSibling ?? root,
        })?.focus();
    }

    public onFocus({target}: Event): void {
        if (this.ref?.hostView.destroyed !== false) {
            return;
        }

        const root: HTMLElement = this.ref.location.nativeElement;

        if (
            target !== this.el &&
            tuiIsElement(target) &&
            !tuiContainsOrAfter(root, target)
        ) {
            this.close();
        }
    }
}
