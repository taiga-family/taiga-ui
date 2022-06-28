import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {TuiController} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_TEXTFIELD_CUSTOM_CONTENT =
    new InjectionToken<TuiTextfieldCustomContentDirective>('tuiTextfieldCustomContent', {
        factory: customContentDirectiveFactory,
    });

@Directive({
    selector: '[tuiTextfieldCustomContent]',
    providers: [
        {
            provide: TUI_TEXTFIELD_CUSTOM_CONTENT,
            useExisting: forwardRef(() => TuiTextfieldCustomContentDirective),
        },
    ],
})
export class TuiTextfieldCustomContentDirective extends TuiController {
    // TODO: 3.0 Remove null
    @Input('tuiTextfieldCustomContent')
    customContent: PolymorpheusContent | null = '';
}

/**
 * @deprecated: use {@link tuiCustomContentDirectiveFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function customContentDirectiveFactory(): TuiTextfieldCustomContentDirective {
    return new TuiTextfieldCustomContentDirective();
}

export const tuiCustomContentDirectiveFactory = customContentDirectiveFactory;
