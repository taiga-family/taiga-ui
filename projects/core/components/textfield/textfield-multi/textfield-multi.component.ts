import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    inject,
    input,
    signal,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiArrayToggle, tuiProvide, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {
    tuiAsDataListHost,
    TuiWithOptionContent,
} from '@taiga-ui/core/components/data-list';
import {TuiScrollControls} from '@taiga-ui/core/components/scrollbar';
import {
    TUI_ITEMS_HANDLERS,
    TuiWithAppearance,
    TuiWithItemsHandlers,
} from '@taiga-ui/core/directives';
import {
    TuiDropdownDirective,
    TuiDropdownFixed,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {
    PolymorpheusComponent,
    type PolymorpheusContent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';
import {filter, fromEvent} from 'rxjs';

import {TuiTextfieldBaseComponent, TuiTextfieldComponent} from '../textfield.component';
import {
    type TuiTextfieldItem,
    TuiTextfieldItemComponent,
} from './textfield-item.component';

@Component({
    selector: 'tui-textfield[multi]',
    imports: [
        AsyncPipe,
        PolymorpheusOutlet,
        TuiButton,
        TuiScrollControls,
        WaResizeObserver,
    ],
    templateUrl: './textfield-multi.template.html',
    styleUrl: './textfield-multi.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'xs', appearance: 'icon'}),
        tuiAsDataListHost(TuiTextfieldMultiComponent),
        tuiProvide(TuiTextfieldComponent, TuiTextfieldMultiComponent),
        tuiProvide(TUI_SCROLL_REF, ElementRef),
    ],
    hostDirectives: [
        TuiDropdownFixed,
        TuiDropdownDirective,
        TuiWithDropdownOpen,
        TuiWithIcons,
        TuiWithItemsHandlers,
        TuiWithOptionContent,
        TuiWithAppearance,
    ],
    host: {
        class: 'tui-interactive',
        '[attr.data-state]': 'control?.disabled ? "disabled" : null',
        '[class._empty]': '!control?.value?.length',
        '[style.--t-item-height.px]': 'height()',
        '[style.--t-rows]': 'rows()',
        '(click.prevent)': 'onClick($event.target)',
        '(tuiActiveZoneChange)':
            '!$event && (el.scrollTo({left: 0}) || cva?.onTouched())',
        // TODO: Remove in v5
        '[attr.data-size]': 'options.size()',
        '[class._with-label]': 'hasLabel',
        '[class._with-template]': 'content() && control?.value != null',
        '[class._disabled]': 'input?.nativeElement?.disabled',
        '(pointerdown.self.prevent)': 'onIconClick()',
        '(scroll.capture.zoneless)': 'onScroll($event.target)',
    },
})
export class TuiTextfieldMultiComponent<T> extends TuiTextfieldBaseComponent<T> {
    protected readonly height = signal<number | null>(null);
    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);
    protected readonly component: PolymorpheusContent<TuiContext<TuiTextfieldItem<T>>> =
        new PolymorpheusComponent(TuiTextfieldItemComponent);

    protected readonly sub = fromEvent(this.el, 'scroll')
        .pipe(
            filter(() => this.rows() === 1),
            tuiZonefree(),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.el.style.setProperty('--t-scroll', tuiPx(-1 * this.el.scrollLeft));
        });

    @ContentChild(TuiItem, {read: TemplateRef, descendants: true})
    public readonly item?: TemplateRef<unknown>;

    public readonly rows = input(100);

    public override handleOption(option: T): void {
        this.accessor?.setValue(
            tuiArrayToggle(
                this.control?.value ?? [],
                option,
                this.handlers.identityMatcher(),
            ),
        );
    }

    protected get placeholder(): string {
        const placeholder = this.input?.nativeElement.matches('input')
            ? this.input.nativeElement.placeholder
            : this.computedFiller();
        const value = this.computedFiller() || this.value();
        const longer = value.length > placeholder.length ? value : placeholder;

        return this.focused() ? longer : '';
    }

    protected onItems({target}: ResizeObserverEntry): void {
        const height =
            this.rows() > 1 && this.control?.value?.length
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

    protected onClick(target: HTMLElement): void {
        if (
            target === this.el ||
            !this.cva?.interactive() ||
            (!this.el.matches('[tuiChevron]') &&
                !this.el.querySelector('select, [tuiInputDateMulti]')) ||
            target.matches('input:read-only,input[inputmode="none"]')
        ) {
            return;
        }

        this.open.update((open) => !open);

        try {
            this.input?.nativeElement.showPicker?.();
        } catch {
            // Empty catch block - silently ignore showPicker errors
        }
    }
}
