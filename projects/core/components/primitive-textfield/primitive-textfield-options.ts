import {InjectionToken} from '@angular/core';
import {TuiHorizontalDirection} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface PrimitiveTextfieldOptions {
    readonly iconAlign: TuiHorizontalDirection;
    readonly iconCleaner: PolymorpheusContent;
    readonly postfix: string;
}

// TODO: remove in ivy compilation
export const PRIMITIVE_TEXTFIELD_ICON_CLEANER = 'tuiIconCloseLarge';

/** Default values for primitive textfield options */
export const TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS: PrimitiveTextfieldOptions = {
    iconAlign: 'right',
    iconCleaner: PRIMITIVE_TEXTFIELD_ICON_CLEANER,
    postfix: '',
};

export const TUI_PRIMITIVE_TEXTFIELD_OPTIONS =
    new InjectionToken<PrimitiveTextfieldOptions>(
        'Default parameters for primitive textfield component',
        {
            factory: () => TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
        },
    );
