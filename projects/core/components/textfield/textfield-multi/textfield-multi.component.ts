import {NgIf} from '@angular/common';
import type {AfterContentInit, ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
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
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTextfieldComponent} from '../textfield.component';
import {TuiWithTextfieldDropdown} from '../textfield-dropdown.directive';

@Component({
    standalone: true,
    selector: 'tui-textfield[multi]',
    imports: [
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
        '[class._expandable]': 'rows > 1',
        '[attr.data-state]': 'ngControl?.disabled ? "disabled" : null',
        '[class._text]': '!item',
        '[class._empty]': '!ngControl?.value?.length',
        '(pointerdown)': '0',
        '(tuiActiveZoneChange)': '!$event && items?.nativeElement.scrollTo({left: 0})',
    },
})
export class TuiTextfieldMultiComponent<T>
    extends TuiTextfieldComponent<T>
    implements TuiDataListHost<T>, AfterContentInit
{
    private readonly handlers = inject(TUI_ITEMS_HANDLERS);
    private readonly cdr = inject(ChangeDetectorRef);

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

    public refresh(): void {
        this.cdr.detectChanges();
    }

    protected get maxHeight(): number | null {
        const {clientHeight = 0} = this.items?.nativeElement.firstElementChild || {};

        return this.rows > 1 && this.ngControl?.value?.length && clientHeight
            ? this.rows * clientHeight
            : null;
    }
}
