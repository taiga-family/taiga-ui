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
    TuiContextWithImplicit,
    tuiIsNativeFocusedIn,
    TuiNativeValidatorDirective,
} from '@taiga-ui/cdk';
import {TuiDropdownDirective, tuiDropdownOptionsProvider} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental/components/button';
import {tuiAppearanceOptionsProvider} from '@taiga-ui/experimental/directives/appearance';
import {TuiIconsDirective} from '@taiga-ui/experimental/directives/icons';
import {PolymorpheusContent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

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
        tuiAppearanceOptionsProvider(TUI_TEXTFIELD_OPTIONS),
        tuiDropdownOptionsProvider({limitWidth: 'fixed'}),
    ],
    host: {
        '[style.--t-side.px]': 'side',
        '[attr.data-size]': 'options.size',
        '[class._with-label]': 'label',
        '[class._disabled]': 'input?.nativeElement.disabled',
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
export class TuiTextfieldComponent<T> {
    private readonly el = inject(ElementRef).nativeElement;
    private readonly dropdown = inject(TuiDropdownDirective, {
        optional: true,
        self: true,
    });

    @ContentChild(TuiTextfieldDirective, {read: ElementRef})
    readonly input?: ElementRef<HTMLInputElement>;

    @ContentChild(TuiLabelDirective)
    readonly label?: unknown;

    @Input()
    filler = '';

    @Input()
    content: PolymorpheusContent<TuiTextfieldContext<T>>;

    readonly directive? = inject(TuiTextfieldOptionsDirective, {optional: true});
    readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    readonly control = inject(NgControl, {optional: true});
    side = 0;

    get computedFiller(): string {
        const value = this.input?.nativeElement.value || '';
        const filler = value + this.filler.slice(value.length);

        return filler.length > value.length ? filler : '';
    }

    get id(): string {
        return this.input?.nativeElement.id || '';
    }

    get focused(): boolean {
        return !!this.dropdown?.dropdownBoxRef || tuiIsNativeFocusedIn(this.el);
    }

    get showFiller(): boolean {
        return (
            this.focused &&
            !!this.computedFiller &&
            (!!this.input?.nativeElement.value || !this.input?.nativeElement.placeholder)
        );
    }
}
