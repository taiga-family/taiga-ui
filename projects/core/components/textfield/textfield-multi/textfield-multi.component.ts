import {NgIf} from '@angular/common';
import type {AfterContentInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    forwardRef,
    Input,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {tuiAsDataListHost} from '@taiga-ui/core/components/data-list';
import {TuiWithAppearance} from '@taiga-ui/core/directives';
import {
    TuiDropdownDirective,
    TuiDropdownFixed,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTextfieldComponent} from '../textfield.component';
import {TuiWithTextfieldDropdown} from '../textfield-dropdown.directive';
import {TuiTextfieldMultiDirective} from './textfield-multi.directive';
import {TuiTextfieldItem} from './textfield-multi-item.directive';

@Component({
    standalone: true,
    selector: 'tui-textfield[multi]',
    imports: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
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
        TuiWithAppearance,
    ],
    host: {
        '(mousedown.silent)': 'input?.nativeElement.focus()',
    },
})
export class TuiTextfieldMultiComponent<T>
    extends TuiTextfieldComponent<T>
    implements TuiDataListHost<T>, AfterContentInit
{
    @ContentChild(forwardRef(() => TuiTextfieldMultiDirective), {
        read: ElementRef,
        static: true,
    })
    public override readonly input?: ElementRef<HTMLInputElement>;

    @ViewChild('container', {read: ElementRef, static: true})
    public readonly container?: ElementRef<HTMLElement>;

    @ContentChild(TuiTextfieldItem, {read: TemplateRef})
    public readonly item?: TemplateRef<unknown>;

    @Input()
    public rows = 100;

    public override handleOption(_option: T): void {
        // TODO
    }
}
