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
import type {
    TuiContext,
    TuiFocusableElementAccessor,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    tuiAsFocusableItemAccessor,
    tuiIsNativeFocused,
    TuiNativeValidatorDirective,
} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core/components/button';
import {
    tuiAsDataListHost,
    type TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {TuiLabelDirective} from '@taiga-ui/core/components/label';
import {tuiAppearanceOptionsProvider} from '@taiga-ui/core/directives/appearance';
import {
    TuiDropdownOpenDirective,
    tuiDropdownOptionsProvider,
} from '@taiga-ui/core/directives/dropdown';
import {TuiIconsDirective} from '@taiga-ui/core/directives/icons';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {EMPTY} from 'rxjs';

import {TuiTextfieldDirective} from './textfield.directive';
import {TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective} from './textfield.options';

export interface TuiTextfieldContext<T> extends TuiContext<T> {
    readonly active: boolean;
}

// TODO: Move to legacy package before 4.0
@Component({
    standalone: true,
    selector: 'tui-textfield',
    imports: [
        CommonModule,
        ResizeObserverModule,
        TuiTextfieldDirective,
        TuiButtonDirective,
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
        '[class._disabled]': 'input.disabled',
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
    private readonly el?: ElementRef<HTMLInputElement>;

    private readonly dropdown = inject(TuiDropdownOpenDirective, {
        optional: true,
        self: true,
    });

    @Input()
    public filler = '';

    @Input()
    public stringify: TuiStringHandler<T> = String;

    @Input()
    public content: PolymorpheusContent<TuiTextfieldContext<T>>;

    // TODO: Refactor
    public readonly focusedChange = EMPTY;

    @ContentChild(TuiTextfieldDirective)
    protected readonly directive?: TuiTextfieldDirective;

    @ContentChild(TuiLabelDirective)
    protected readonly label?: unknown;

    protected side = 0;
    protected readonly change$ = inject(TuiTextfieldOptionsDirective, {optional: true})
        ?.change$;

    protected readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    protected readonly control = inject(NgControl, {optional: true});

    public get nativeFocusableElement(): HTMLInputElement {
        return this.input;
    }

    public get id(): string {
        return this.input.id || '';
    }

    // TODO: Do not change to `this.input`, will be refactored
    public get focused(): boolean {
        return !!this.dropdown?.dropdown || tuiIsNativeFocused(this.el?.nativeElement);
    }

    public handleOption(option: T): void {
        this.directive?.setValue(this.stringify(option));
        this.dropdown?.toggle(false);
    }

    protected get input(): HTMLInputElement {
        if (!this.el) {
            throw new Error('[tuiTextfield] component is required');
        }

        return this.el.nativeElement;
    }

    protected get computedFiller(): string {
        const value = this.input.value || '';
        const filler = value + this.filler.slice(value.length);

        return filler.length > value.length ? filler : '';
    }

    protected get showFiller(): boolean {
        return (
            this.focused &&
            !!this.computedFiller &&
            (!!this.input.value || !this.input.placeholder)
        );
    }
}
