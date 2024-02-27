import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    TuiDestroyService,
    TuiFocusVisibleService,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';

@Component({
    selector: 'button[tuiAction], a[tuiAction]',
    templateUrl: './action.template.html',
    styleUrls: ['./action.style.less'],
    host: {
        class: 'tui-island tui-island_hoverable',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiFocusVisibleService,
        tuiAsFocusableItemAccessor(TuiActionComponent),
    ],
})
export class TuiActionComponent extends AbstractTuiInteractive {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    public icon = '';

    public readonly disabled = false;

    constructor() {
        super();

        inject(TuiFocusVisibleService).subscribe(visible => {
            this.updateFocusVisible(visible);
        });
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.el;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding('tabIndex')
    protected get tabIndex(): number {
        return this.computedFocusable ? 0 : -1;
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }
}
