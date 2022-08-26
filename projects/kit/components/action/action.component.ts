import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusVisibleService,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';

@Component({
    selector: `button[tuiAction], a[tuiAction]`,
    templateUrl: `./action.template.html`,
    styleUrls: [`./action.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiFocusVisibleService,
        tuiAsFocusableItemAccessor(TuiActionComponent),
    ],
})
export class TuiActionComponent extends AbstractTuiInteractive {
    @Input()
    @tuiDefaultProp()
    icon = ``;

    readonly disabled = false;

    constructor(
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        super();

        focusVisible$.subscribe(visible => {
            this.updateFocusVisible(visible);
        });
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding(`tabIndex`)
    get tabIndex(): number {
        return this.computedFocusable ? 0 : -1;
    }

    @HostListener(`focusin`, [`true`])
    @HostListener(`focusout`, [`false`])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }
}
