import {NgIf} from '@angular/common';
import type {AfterContentInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    inject,
    Input,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    tuiAsDataListHost,
    TuiWithOptionContent,
} from '@taiga-ui/core/components/data-list';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {TuiWithAppearance, TuiWithItemsHandlers} from '@taiga-ui/core/directives';
import {
    TuiDropdownDirective,
    TuiDropdownFixed,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
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
        '(focusout)': 'onFocusout($event.relatedTarget)',
        '(pointerdown)': '0',
        '[class._expandable]': 'expandable',
        '[attr.data-state]': 'ngControl?.disabled ? "disabled" : null',
        '[class._text]': '!item',
        '[class._empty]': 'empty',
    },
})
export class TuiTextfieldMultiComponent<T>
    extends TuiTextfieldComponent<T>
    implements TuiDataListHost<T>, AfterContentInit
{
    private readonly cdr = inject(ChangeDetectorRef);

    @ViewChild('container', {read: ElementRef, static: true})
    public readonly container?: ElementRef<HTMLElement>;

    @ContentChild(TuiItem, {read: TemplateRef})
    public readonly item?: TemplateRef<unknown>;

    @Input()
    public rows = 100;

    public override handleOption(option: T): void {
        this.accessor?.setValue([...(this.ngControl?.value ?? []), option]);
    }

    public onFocusout(target: HTMLElement | null): void {
        if (!target || !this.el.contains(target)) {
            this.container?.nativeElement.scrollTo({left: 0});
        }
    }

    public refresh(): void {
        this.cdr.detectChanges();
    }

    protected get computeMaxHeight(): number | null {
        return this.expandable && this.ngControl?.value?.length && this.lineHeight
            ? this.rows * this.lineHeight
            : null;
    }

    protected get empty(): boolean {
        return !this.container?.nativeElement.querySelectorAll(
            ':scope > *:not(.t-input_wrapper, tui-scroll-controls)',
        ).length;
    }

    protected get expandable(): boolean {
        return this.rows > 1;
    }

    protected get lineHeight(): number {
        return (
            (this.container?.nativeElement?.firstChild as HTMLElement)?.offsetHeight ?? 0
        );
    }
}
