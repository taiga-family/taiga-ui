import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    ViewChild,
} from '@angular/core';
import type {
    TuiContext,
    TuiFocusableElementAccessor,
    TuiInputType,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiHintOptionsDirective,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {EMPTY, map, startWith} from 'rxjs';

import {TUI_INPUT_PASSWORD_OPTIONS} from './input-password.options';

@Component({
    selector: 'tui-input-password',
    templateUrl: './input-password.template.html',
    styleUrls: ['./input-password.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPasswordComponent),
        tuiAsControl(TuiInputPasswordComponent),
    ],
})
export class TuiInputPasswordComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    protected readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    protected readonly directive$: Observable<any> = this.hintOptions?.change$ || EMPTY;

    protected isPasswordHidden = true;

    protected readonly computedAppearance$: Observable<string> = this.directive$.pipe(
        startWith(null),
        map(() => this.hintOptions?.appearance || ''),
        startWith(''),
    );

    protected readonly passwordTexts$ = inject(TUI_PASSWORD_TEXTS);
    protected readonly options = inject(TUI_INPUT_PASSWORD_OPTIONS);
    protected readonly type!: TuiContext<TuiSizeL | TuiSizeS>;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get inputType(): TuiInputType {
        return this.isPasswordHidden || !this.interactive ? 'password' : 'text';
    }

    public onValueChange(textValue: string): void {
        this.value = textValue;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get icon(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.isPasswordHidden ? this.options.icons.show : this.options.icons.hide;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected togglePasswordVisibility(): void {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
