import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiContext,
    TuiFocusableElementAccessor,
    TuiInputType,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TUI_TEXTFIELD_SIZE,
    TuiHintOptionsDirective,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {combineLatest, EMPTY, map, Observable, startWith} from 'rxjs';

import {TUI_INPUT_PASSWORD_OPTIONS} from './input-password.options';

@Component({
    selector: 'tui-input-password',
    templateUrl: './input-password.template.html',
    styleUrls: ['./input-password.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPasswordComponent),
        tuiAsControl(TuiInputPasswordComponent),
        MODE_PROVIDER,
    ],
})
export class TuiInputPasswordComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly mode$ = inject(TUI_MODE);
    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    protected readonly directive$: Observable<any> = this.hintOptions?.change$ || EMPTY;

    isPasswordHidden = true;

    readonly computedAppearance$: Observable<string> = combineLatest([
        this.mode$.pipe(map(val => (val === 'onDark' ? 'onDark' : ''))),
        this.directive$.pipe(
            startWith(null),
            map(() => this.hintOptions?.appearance || ''),
        ),
    ]).pipe(
        map(([mode, controller]) => controller || mode),
        startWith(''),
    );

    readonly passwordTexts$ = inject(TUI_PASSWORD_TEXTS);
    readonly options = inject(TUI_INPUT_PASSWORD_OPTIONS);
    readonly type!: TuiContext<TuiSizeL | TuiSizeS>;

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return !!this.textfield?.focused;
    }

    get icon(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.isPasswordHidden ? this.options.icons.show : this.options.icons.hide;
    }

    get inputType(): TuiInputType {
        return this.isPasswordHidden || !this.interactive ? 'password' : 'text';
    }

    onValueChange(textValue: string): void {
        this.value = textValue;
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    togglePasswordVisibility(): void {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
