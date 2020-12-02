import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    TuiFocusVisibleService,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TuiLinkMode} from '@taiga-ui/core/enums';
import {TuiHorizontalDirection, TuiModeVariants} from '@taiga-ui/core/types';

// @bad TODO: Think about extending Interactive
@Component({
    selector: 'a[tuiLink], button[tuiLink]',
    templateUrl: './link.template.html',
    styleUrls: ['./link.style.less'],
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiLinkComponent),
        },
        TuiFocusVisibleService,
        TuiDestroyService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'tuiLink',
})
export class TuiLinkComponent implements TuiFocusableElementAccessor {
    @Input()
    @HostBinding('class._pseudo')
    @tuiDefaultProp()
    pseudo = false;

    @Input()
    @tuiDefaultProp()
    icon: string | null = null;

    @Input()
    @tuiDefaultProp()
    iconAlign: TuiHorizontalDirection = 'right';

    @Input()
    @HostBinding('class._icon-rotated')
    @tuiDefaultProp()
    iconRotated = false;

    @Input()
    @tuiDefaultProp()
    mode: TuiLinkMode | TuiModeVariants | null = null;

    @HostBinding('class._focus-visible')
    focusVisible = false;

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<TuiNativeFocusableElement>,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
        @Optional()
        @Inject(RouterLinkActive)
        private readonly routerLinkActive: RouterLinkActive | null,
        @Inject(TuiFocusVisibleService)
        focusVisible$: TuiFocusVisibleService,
    ) {
        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    @HostBinding('attr.data-tui-host-mode')
    get hostMode(): TuiLinkMode | TuiModeVariants | null {
        return this.mode !== null ||
            this.modeDirective === null ||
            this.modeDirective.mode === null
            ? this.mode
            : this.modeDirective.mode;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement {
        return this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding('class._active')
    get active(): boolean {
        return !!this.routerLinkActive && this.routerLinkActive.isActive;
    }

    get hasIcon(): boolean {
        return this.icon !== null;
    }

    get iconAlignLeft(): boolean {
        return this.hasIcon && this.iconAlign === 'left';
    }

    get iconAlignRight(): boolean {
        return this.hasIcon && this.iconAlign === 'right';
    }
}
