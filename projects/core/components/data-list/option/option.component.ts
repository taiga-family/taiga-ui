import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Self,
    TemplateRef,
} from '@angular/core';
import {
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiEventWith,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiDataListHost} from '@taiga-ui/core/interfaces';
import {TUI_DATA_LIST_HOST, TUI_OPTION_CONTENT} from '@taiga-ui/core/tokens';
import {TuiOptionRole, TuiSizeL, TuiSizeXS} from '@taiga-ui/core/types';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiDataListComponent} from '../data-list.component';

function shouldFocus({currentTarget}: TuiEventWith<MouseEvent, HTMLElement>): boolean {
    return !tuiIsNativeFocused(currentTarget);
}

// TODO: Consider all use cases for aria roles
@Component({
    selector: `button[tuiOption], a[tuiOption]`,
    templateUrl: `./option.template.html`,
    styleUrls: [`./option.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tabIndex: `-1`,
        type: `button`,
        '[attr.disabled]': `disabled || null`,
    },
})
export class TuiOptionComponent<T = unknown> implements OnDestroy {
    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeL = `m`;

    @Input()
    @HostBinding(`attr.role`)
    @tuiDefaultProp()
    role: TuiOptionRole = `option`;

    @Input()
    @tuiDefaultProp()
    disabled = false;

    @Input()
    value?: T;

    constructor(
        @Optional()
        @Inject(TUI_OPTION_CONTENT)
        readonly content: PolymorpheusContent<
            TuiContextWithImplicit<TemplateRef<Record<string, unknown>>>
        > | null,
        @Inject(forwardRef(() => TuiDataListComponent))
        private readonly dataList: TuiDataListComponent<T>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TUI_DATA_LIST_HOST)
        private readonly host: TuiDataListHost<T> | null,
        @Optional()
        @Self()
        @Inject(TuiDropdownDirective)
        readonly dropdown: TuiDropdownDirective | null,
    ) {}

    @HostBinding(`class._with-dropdown`)
    get active(): boolean {
        return !!this.dropdown && !!this.dropdown.dropdownBoxRef;
    }

    @HostListener(`click`)
    onClick(): void {
        if (this.host && this.value !== undefined) {
            this.host.handleOption(this.value);
        }
    }

    // @bad TODO: Consider aria-activedescendant for proper accessibility implementation
    @shouldCall(shouldFocus)
    @HostListener(`mousemove.init`, [`$event`])
    @HostListener(`mousemove.silent`, [`$event`])
    onMouseMove({currentTarget}: TuiEventWith<MouseEvent, HTMLElement>): void {
        currentTarget.focus({preventScroll: true});
    }

    // Preventing focus loss upon focused option removal
    ngOnDestroy(): void {
        this.dataList.handleFocusLossIfNecessary(this.elementRef.nativeElement);
    }
}
