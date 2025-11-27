import {Directive, forwardRef, inject} from '@angular/core';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {
    TuiTextfieldComponent,
    TuiTextfieldMultiComponent,
} from '@taiga-ui/core/components/textfield';
import {TUI_BUTTON_X, TUI_COMMON_ICONS, TUI_ICON_START} from '@taiga-ui/core/tokens';

@Directive({
    selector: '[tuiButtonX]',
    providers: [
        {
            provide: TUI_BUTTON_X,
            useExisting: forwardRef(() => TuiButtonX),
        },
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_COMMON_ICONS).close,
        },
        tuiButtonOptionsProvider(() => {
            const textfield =
                inject(TuiTextfieldComponent, {optional: true}) ||
                inject(TuiTextfieldMultiComponent, {optional: true});

            return {
                appearance: textfield ? 'icon' : 'neutral',
                size: textfield ? 'xs' : 's',
            };
        }),
    ],
    hostDirectives: [
        {
            directive: TuiButton,
            inputs: ['size'],
        },
    ],
    host: {
        tuiIconButton: '',
        '[style.--t-radius.%]': 'textfield ? null : 100',
        '[attr.type]': '"button"',
        '[attr.tabindex]': 'textfield ? -1 : null',
        '(pointerdown.zoneless.prevent)': 'textfield?.input()?.nativeElement?.focus()',
    },
})
export class TuiButtonX {
    protected readonly textfield =
        inject(TuiTextfieldComponent, {optional: true}) ||
        inject(TuiTextfieldMultiComponent, {optional: true});
}
