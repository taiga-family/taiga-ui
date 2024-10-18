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
    signal,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {tuiInjectId} from '@taiga-ui/cdk/services';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {tuiAsDataListHost} from '@taiga-ui/core/components/data-list';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiDropdownDirective,
    TuiDropdownFixed,
    tuiDropdownOpen,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TUI_CLEAR_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
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
    providers: [tuiAsDataListHost(TuiTextfieldComponent)],
    hostDirectives: [
        TuiDropdownFixed,
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
    // TODO: refactor to signal inputs after Angular update
    private readonly filler = signal('');
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
    protected readonly clear = toSignal(inject(TUI_CLEAR_WORD));

    protected computedFiller = computed(() => {
        const value = this.directive?.nativeValue() || '';
        const filledValue = value + this.filler().slice(value.length);

        return filledValue.length > value.length ? filledValue : '';
    });

    protected showFiller = computed<boolean>(
        () =>
            this.focused() &&
            !!this.computedFiller() &&
            (!!this.directive?.nativeValue() || !this.input?.nativeElement.placeholder),
    );

    @ViewChild('vcr', {read: ViewContainerRef, static: true})
    public readonly vcr?: ViewContainerRef;

    @ContentChild(forwardRef(() => TuiTextfieldDirective), {
        read: ElementRef,
        static: true,
    })
    public readonly input?: ElementRef<HTMLInputElement>;

    @Input()
    public stringify: TuiStringHandler<T> = String;

    @Input()
    public content: PolymorpheusContent<TuiContext<T>>;

    public readonly focused = computed(() => this.open() || this.focusedIn());
    public readonly options = inject(TUI_TEXTFIELD_OPTIONS);

    @Input('filler')
    public set fillerSetter(filler: string) {
        this.filler.set(filler);
    }

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

    protected get hasLabel(): boolean {
        return Boolean(this.label?.nativeElement?.childNodes.length);
    }

    protected onResize({contentRect}: ResizeObserverEntry): void {
        this.el.style.setProperty('--t-side', tuiPx(contentRect.width));
    }
}
