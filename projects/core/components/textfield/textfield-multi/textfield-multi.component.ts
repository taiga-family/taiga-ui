import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    ElementRef,
    inject,
    input,
    signal,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiArrayToggle, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiCell} from '@taiga-ui/core/components/cell';
import {tuiAsDataListHost} from '@taiga-ui/core/components/data-list';
import {TUI_SCROLL_REF, TuiScrollControls} from '@taiga-ui/core/components/scrollbar';
import {TuiButtonX} from '@taiga-ui/core/directives/button-x';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {filter, fromEvent} from 'rxjs';

import {TuiTextfieldComponent} from '../textfield.component';
import {TUI_TEXTFIELD_ITEM} from './textfield-item.component';

@Component({
    selector: 'tui-textfield[multi]',
    imports: [
        AsyncPipe,
        PolymorpheusOutlet,
        TuiButtonX,
        TuiCell,
        TuiScrollControls,
        WaResizeObserver,
    ],
    templateUrl: './textfield-multi.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/textfield.less';
            @import './textfield-multi.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'xs', appearance: 'icon'}),
        tuiAsDataListHost(TuiTextfieldMultiComponent),
        tuiProvide(TuiTextfieldComponent, TuiTextfieldMultiComponent),
        tuiProvide(TUI_SCROLL_REF, ElementRef),
    ],
    host: {
        '[attr.data-state]': 'disabled ? "disabled" : null',
        '[class._empty]': '!control()?.value?.length',
        '[style.--t-item-height.px]': 'height()',
        '[style.--t-rows]': 'rows()',
        '(click.prevent)': 'onClick($event.target)',
        '(tuiActiveZoneChange)': '!$event && el.scrollTo({left: 0})',
    },
})
export class TuiTextfieldMultiComponent<T> extends TuiTextfieldComponent<T> {
    protected readonly height = signal<number | null>(null);
    protected readonly win = inject(WA_WINDOW);
    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);
    protected readonly component = TUI_TEXTFIELD_ITEM;
    protected readonly sub = fromEvent(this.el, 'scroll')
        .pipe(
            filter(() => this.rows() === 1),
            tuiZonefree(),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.el.style.setProperty('--t-scroll', tuiPx(-1 * this.el.scrollLeft));
        });

    public readonly cva = contentChild(TuiControl);
    public readonly item = contentChild(TuiItem, {read: TemplateRef, descendants: true});
    public readonly rows = input(100);

    public override handleOption(option: T): void {
        this.accessor()?.setValue(
            tuiArrayToggle(
                this.control()?.value ?? [],
                option,
                this.handlers.identityMatcher(),
            ),
        );
    }

    protected get placeholder(): string {
        const el = this.input()?.nativeElement;
        const placeholder = el?.matches('input') ? el.placeholder : this.computedFiller();
        const value = this.computedFiller() || this.value();
        const longer = value.length > placeholder.length ? value : placeholder;

        return this.focused() ? longer : '';
    }

    protected onItems({target}: ResizeObserverEntry): void {
        const height =
            this.rows() > 1 && this.control()?.value?.length
                ? (target.querySelector('tui-textfield-item')?.clientHeight ?? 0)
                : null;

        if (height !== 0) {
            this.height.set(height);
        }
    }

    protected onLeft(event: any): void {
        if (this.value() || !tuiIsElement(event.currentTarget)) {
            return;
        }

        event.preventDefault();
        event.currentTarget.previousElementSibling?.firstElementChild?.focus();
    }

    protected focusInput(): void {
        const selection = this.win.getSelection();

        if (!selection?.rangeCount || selection.getRangeAt(0)?.collapsed) {
            this.input()?.nativeElement.focus();
        }
    }

    protected onClick(target: HTMLElement): void {
        if (
            target === this.el ||
            !this.cva()?.interactive() ||
            (!this.el.matches('[tuiChevron]') &&
                !this.el.querySelector('select, [tuiInputDateMulti]')) ||
            target.matches('input:read-only,input[inputmode="none"]')
        ) {
            return;
        }

        this.open.open.update((open) => !open);

        try {
            this.input()?.nativeElement.showPicker?.();
        } catch {
            // Empty catch block - silently ignore showPicker errors
        }
    }
}
