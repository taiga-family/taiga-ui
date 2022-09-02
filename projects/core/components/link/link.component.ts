import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import type {
    TuiFocusableElementAccessor,
    TuiInjectionTokenType,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusVisibleService,
    tuiIsNativeFocused,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';
import {merge} from 'rxjs';
import {mapTo} from 'rxjs/operators';

// @bad TODO: Think about extending Interactive
@Component({
    selector: `a[tuiLink], button[tuiLink]`,
    templateUrl: `./link.template.html`,
    styleUrls: [`./link.style.less`],
    providers: [
        tuiAsFocusableItemAccessor(TuiLinkComponent),
        TuiFocusVisibleService,
        TuiDestroyService,
        MODE_PROVIDER,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tuiLink`,
    host: {
        '($.data-mode.attr)': `mode$`,
    },
})
export class TuiLinkComponent implements TuiFocusableElementAccessor {
    @Input()
    @HostBinding(`class._pseudo`)
    @tuiDefaultProp()
    pseudo = false;

    @Input()
    @tuiDefaultProp()
    icon = ``;

    @Input()
    @tuiDefaultProp()
    iconAlign: TuiHorizontalDirection = `right`;

    @Input()
    @HostBinding(`class._icon-rotated`)
    @tuiDefaultProp()
    iconRotated = false;

    @Input()
    @HostBinding(`attr.data-host-mode`)
    @tuiDefaultProp()
    mode: 'positive' | 'negative' | null = null;

    @HostBinding(`class._focus-visible`)
    focusVisible = false;

    readonly focusedChange = merge(
        tuiTypedFromEvent(this.elementRef.nativeElement, `focusin`).pipe(mapTo(true)),
        tuiTypedFromEvent(this.elementRef.nativeElement, `focusout`).pipe(mapTo(false)),
    );

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<TuiNativeFocusableElement>,
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
        @Inject(TuiFocusVisibleService)
        focusVisible$: TuiFocusVisibleService,
    ) {
        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    get nativeFocusableElement(): TuiNativeFocusableElement {
        return this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get hasIcon(): boolean {
        return !!this.icon;
    }

    get iconAlignLeft(): boolean {
        return this.hasIcon && this.iconAlign === `left`;
    }

    get iconAlignRight(): boolean {
        return this.hasIcon && this.iconAlign === `right`;
    }
}
