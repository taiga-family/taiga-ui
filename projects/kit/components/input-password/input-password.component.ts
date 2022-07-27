import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Inject,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    TuiInputTypeT,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    HINT_CONTROLLER_PROVIDER,
    MODE_PROVIDER,
    TUI_HINT_WATCHED_CONTROLLER,
    TUI_MODE,
    TUI_TEXTFIELD_SIZE,
    TuiBrightness,
    TuiHintControllerDirective,
    TuiHintModeT,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {
    TUI_INPUT_PASSWORD_OPTIONS,
    TuiInputPasswordOptions,
} from './input-password-options';

// @dynamic
@Component({
    selector: `tui-input-password`,
    templateUrl: `./input-password.template.html`,
    styleUrls: [`./input-password.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputPasswordComponent),
        },
        {
            provide: AbstractTuiControl,
            useExisting: forwardRef(() => TuiInputPasswordComponent),
        },
        HINT_CONTROLLER_PROVIDER,
        MODE_PROVIDER,
    ],
})
export class TuiInputPasswordComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    isPasswordHidden = true;

    readonly computedMode$: Observable<TuiHintModeT | null> = combineLatest([
        this.mode$.pipe(map(val => (val === `onDark` ? `onDark` : null))),
        this.hintController.change$.pipe(
            startWith(null),
            map(() => this.hintController.mode),
        ),
    ]).pipe(
        map(([mode, controller]) => controller || mode),
        startWith(null),
    );

    readonly type!: TuiContextWithImplicit<TuiSizeS | TuiSizeL>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_PASSWORD_TEXTS)
        readonly passwordTexts$: Observable<[string, string]>,
        @Inject(TUI_INPUT_PASSWORD_OPTIONS)
        readonly options: TuiInputPasswordOptions,
        @Inject(TUI_HINT_WATCHED_CONTROLLER)
        readonly hintController: TuiHintControllerDirective,
        @Inject(TUI_MODE)
        private readonly mode$: Observable<TuiBrightness | null>,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get icon(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> {
        return this.isPasswordHidden ? this.options.icons.hide : this.options.icons.show;
    }

    get context(): TuiContextWithImplicit<TuiSizeS | TuiSizeL> {
        return this.getContext(this.textfieldSize.size);
    }

    get inputType(): TuiInputTypeT {
        return this.isPasswordHidden || !this.interactive ? `password` : `text`;
    }

    onValueChange(textValue: string): void {
        this.updateValue(textValue);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    onPressed(pressed: boolean): void {
        this.updatePressed(pressed);
    }

    togglePasswordVisibility(): void {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return ``;
    }

    @tuiPure
    private getContext(
        $implicit: TuiSizeS | TuiSizeL,
    ): TuiContextWithImplicit<TuiSizeS | TuiSizeL> {
        return {$implicit};
    }
}
