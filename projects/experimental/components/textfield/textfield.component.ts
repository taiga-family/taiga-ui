import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {
    tuiAsFocusableItemAccessor,
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeValidatorDirective,
} from '@taiga-ui/cdk';
import {
    tuiAsDataListHost,
    TuiDataListHost,
    TuiDropdownOpenDirective,
    tuiDropdownOptionsProvider,
} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental/components/button';
import {tuiAppearanceOptionsProvider} from '@taiga-ui/experimental/directives/appearance';
import {TuiIconsDirective} from '@taiga-ui/experimental/directives/icons';
import {PolymorpheusContent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {EMPTY} from 'rxjs';

import {TuiLabelDirective} from './label.directive';
import {TuiTextfieldDirective} from './textfield.directive';
import {TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective} from './textfield.options';

export interface TuiTextfieldContext<T> extends TuiContextWithImplicit<T> {
    readonly active: boolean;
}

@Component({
    standalone: true,
    selector: 'tui-textfield',
    imports: [
        CommonModule,
        ResizeObserverModule,
        TuiTextfieldDirective,
        TuiButtonModule,
        PolymorpheusModule,
    ],
    templateUrl: './textfield.template.html',
    styleUrls: ['./textfield.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiTextfieldComponent),
        tuiAsDataListHost(TuiTextfieldComponent),
        tuiAppearanceOptionsProvider(TUI_TEXTFIELD_OPTIONS),
        tuiDropdownOptionsProvider({limitWidth: 'fixed'}),
    ],
    host: {
        '[style.--t-side.px]': 'side',
        '[attr.data-size]': 'options.size',
        '[class._with-label]': 'label',
        '[class._disabled]': 'el.disabled',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
    },
    hostDirectives: [
        TuiNativeValidatorDirective,
        {
            directive: TuiIconsDirective,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
})
export class TuiTextfieldComponent<T>
    implements TuiDataListHost<T>, TuiFocusableElementAccessor
{
    @ContentChild(TuiTextfieldDirective, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    private readonly dropdown = inject(TuiDropdownOpenDirective, {
        optional: true,
        self: true,
    });

    @ContentChild(TuiLabelDirective)
    readonly label?: unknown;

    @Input()
    filler = '';

    @Input()
    content: PolymorpheusContent<TuiTextfieldContext<T>>;

    side = 0;

    readonly directive? = inject(TuiTextfieldOptionsDirective, {optional: true});
    readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    readonly control = inject(NgControl, {optional: true});

    // TODO: Refactor
    readonly focusedChange = EMPTY;
    get nativeFocusableElement(): HTMLInputElement {
        return this.el;
    }

    get el(): HTMLInputElement {
        if (!this.input) {
            throw new Error('[tuiTextfield] component is required');
        }

        return this.input.nativeElement;
    }

    get computedFiller(): string {
        const value = this.input?.nativeElement.value || '';
        const filler = value + this.filler.slice(value.length);

        return filler.length > value.length ? filler : '';
    }

    get id(): string {
        return this.el.id || '';
    }

    get focused(): boolean {
        return !!this.dropdown?.dropdown || tuiIsNativeFocused(this.input?.nativeElement);
    }

    get showFiller(): boolean {
        return (
            this.focused &&
            !!this.computedFiller &&
            (!!this.el.value || !this.el.placeholder)
        );
    }

    clear(): void {
        this.el.value = '';
        this.el.dispatchEvent(new Event('input'));
    }

    handleOption(option: T): void {
        this.el.value = String(option);
        this.dropdown?.toggle(false);
    }
}
