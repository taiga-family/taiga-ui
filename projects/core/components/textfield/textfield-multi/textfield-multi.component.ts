import {NgForOf, NgIf} from '@angular/common';
import type {AfterContentInit, ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    Input,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiArrayToggle, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    tuiAsDataListHost,
    TuiWithOptionContent,
} from '@taiga-ui/core/components/data-list';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
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
        TuiScrollRef,
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
        '[class._expandable]': 'rows > 1',
        '[attr.data-state]': 'ngControl?.disabled ? "disabled" : null',
        '[class._text]': '!item',
        '[class._empty]': '!ngControl?.value?.length',
        '(tuiActiveZoneChange)': '!$event && items?.nativeElement?.scrollTo({left: 0})',
    },
})
export class TuiTextfieldMultiComponent<T>
    extends TuiTextfieldComponent<T>
    implements TuiDataListHost<T>, AfterContentInit
{
    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);
    protected readonly component: PolymorpheusContent<TuiContext<TuiTextfieldItem<T>>> =
        new PolymorpheusComponent(TuiTextfieldItemComponent);

    @ViewChild(TUI_SCROLL_REF, {static: true})
    public readonly items?: ElementRef<HTMLElement>;

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

    protected get maxHeight(): number | null {
        return this.rows > 1 && this.ngControl?.value?.length
            ? this.rows * (this.items?.nativeElement.firstElementChild?.clientHeight ?? 0)
            : null;
    }

    protected onLeft(event: any): void {
        if (this.value() || !tuiIsElement(event.currentTarget)) {
            return;
        }

        event.preventDefault();
        event.currentTarget?.previousElementSibling?.firstElementChild?.focus();
    }
}
