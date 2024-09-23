import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChild,
    ElementRef,
    forwardRef,
    inject,
    Input,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {tuiPx} from '@taiga-ui/cdk';
import {tuiInjectId} from '@taiga-ui/cdk/services';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {TuiButton} from '@taiga-ui/core/components/button';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {tuiAsDataListHost} from '@taiga-ui/core/components/data-list';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiDropdownDirective,
    tuiDropdownOpen,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTextfieldDirective} from './textfield.directive';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';
import {TuiWithTextfieldDropdown} from './textfield-dropdown.directive';

@Component({
    standalone: true,
    selector: 'tui-textfield',
    imports: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
    templateUrl: './textfield.template.html',
    styles: ['@import "@taiga-ui/core/styles/components/textfield.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListHost(TuiTextfieldComponent),
        tuiDropdownOptionsProvider({limitWidth: 'fixed'}),
    ],
    hostDirectives: [
        TuiDropdownDirective,
        TuiWithDropdownOpen,
        TuiWithTextfieldDropdown,
        TuiWithIcons,
    ],
    host: {
        '[attr.data-size]': 'options.size()',
        '[class._with-label]': 'hasLabel',
        '[class._with-template]': 'content',
        '[class._disabled]': 'input?.nativeElement.disabled',
    },
})
export class TuiTextfieldComponent<T> implements TuiDataListHost<T> {
    private readonly autoId = tuiInjectId();
    private readonly el = tuiInjectElement();
    private readonly open = tuiDropdownOpen();
    private readonly focusedIn = tuiFocusedIn(tuiInjectElement());

    @ContentChild(forwardRef(() => TuiTextfieldDirective))
    protected readonly directive?: TuiTextfieldDirective<T>;

    @ContentChild(forwardRef(() => TuiLabel), {read: ElementRef})
    protected readonly label?: ElementRef<HTMLElement>;

    @ContentChild(NgControl)
    protected readonly control?: NgControl;

    protected readonly icons = inject(TUI_COMMON_ICONS);

    @ViewChild('vcr', {read: ViewContainerRef, static: true})
    public readonly vcr?: ViewContainerRef;

    @ContentChild(forwardRef(() => TuiTextfieldDirective), {
        read: ElementRef,
        static: true,
    })
    public readonly input?: ElementRef<HTMLInputElement>;

    @Input()
    public filler = '';

    @Input()
    public stringify: TuiStringHandler<T> = String;

    @Input()
    public content: PolymorpheusContent<TuiContext<T>>;

    public readonly focused = computed(() => this.open() || this.focusedIn());
    public readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    public get id(): string {
        return this.input?.nativeElement.id || this.autoId;
    }

    public get size(): TuiSizeL | TuiSizeS {
        return this.options.size();
    }

    public handleOption(option: T): void {
        this.directive?.setValue(option);
        this.open.set(false);
    }

    protected get computedFiller(): string {
        const value = this.input?.nativeElement.value || '';
        const filler = value + this.filler.slice(value.length);

        return filler.length > value.length ? filler : '';
    }

    protected get showFiller(): boolean {
        return (
            this.focused() &&
            !!this.computedFiller &&
            (!!this.input?.nativeElement.value || !this.input?.nativeElement.placeholder)
        );
    }

    protected get hasLabel(): boolean {
        return Boolean(this.label?.nativeElement?.childNodes.length);
    }

    protected onResize({contentRect}: ResizeObserverEntry): void {
        this.el.style.setProperty('--t-side', tuiPx(contentRect.width));
    }
}
