import {NgForOf, NgIf} from '@angular/common';
import type {AfterContentInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    inject,
    Input,
    signal,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiArrayToggle, tuiProvide, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
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
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {filter, fromEvent} from 'rxjs';

import {TuiTextfieldComponent} from '../textfield.component';
import {TuiWithTextfieldDropdown} from '../textfield-dropdown.directive';
import type {TuiTextfieldItem} from './textfield-item.component';
import {TuiTextfieldItemComponent} from './textfield-item.component';

@Component({
    standalone: true,
    selector: 'tui-textfield[multi]',
    imports: [
        NgForOf,
        NgIf,
        PolymorpheusOutlet,
        TuiButton,
        TuiScrollControls,
        WaResizeObserver,
    ],
    templateUrl: './textfield-multi.template.html',
    styleUrls: ['./textfield-multi.style.less'],
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
        TuiWithTextfieldDropdown,
        TuiWithIcons,
        TuiWithItemsHandlers,
        TuiWithOptionContent,
        TuiWithAppearance,
    ],
    host: {
        class: 'tui-interactive',
        '[attr.data-state]': 'ngControl?.disabled ? "disabled" : null',
        '[class._empty]': '!ngControl?.value?.length',
        '[style.--t-item-height.px]': 'height()',
        '[style.--t-rows]': 'rows',
        '(tuiActiveZoneChange)': '!$event && el.scrollTo({left: 0})',
    },
})
export class TuiTextfieldMultiComponent<T>
    extends TuiTextfieldComponent<T>
    implements TuiDataListHost<T>, AfterContentInit
{
    protected readonly height = signal<number | null>(null);
    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);
    protected readonly component: PolymorpheusContent<TuiContext<TuiTextfieldItem<T>>> =
        new PolymorpheusComponent(TuiTextfieldItemComponent);

    protected readonly sub = fromEvent(this.el, 'scroll')
        .pipe(
            filter(() => this.rows === 1),
            tuiZonefree(),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.el.style.setProperty('--t-scroll', tuiPx(-1 * this.el.scrollLeft));
        });

    @ContentChild(TuiItem, {read: TemplateRef})
    public readonly item?: TemplateRef<unknown>;

    @Input()
    public rows = 100;

    public override handleOption(option: T): void {
        this.accessor?.setValue(
            tuiArrayToggle(
                this.ngControl?.value ?? [],
                option,
                this.handlers.identityMatcher(),
            ),
        );
    }

    protected onItems({target}: ResizeObserverEntry): void {
        const height =
            this.rows > 1 && this.ngControl?.value?.length
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

    protected focus(): void {
        this.input?.nativeElement.focus();
        this.el.scrollTo({left: Number.MAX_SAFE_INTEGER, top: Number.MAX_SAFE_INTEGER});
    }
}
