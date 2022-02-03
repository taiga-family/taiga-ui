import {InjectionToken} from '@angular/core';
import {TuiHorizontalDirection} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiPrimitiveTextfieldOptions {
    readonly iconAlign: TuiHorizontalDirection;
    readonly iconCleaner: PolymorpheusContent;
}

// TODO: remove in ivy compilation
export const TUI_PRIMITIVE_TEXTFIELD_ICON_CLEANER = 'tuiIconCloseLarge';

/** Default values for primitive textfield options */
export const TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS: TuiPrimitiveTextfieldOptions = {
    iconAlign: 'right',
    iconCleaner: TUI_PRIMITIVE_TEXTFIELD_ICON_CLEANER,
};

export const TUI_PRIMITIVE_TEXTFIELD_OPTIONS =
    new InjectionToken<TuiPrimitiveTextfieldOptions>(
        'Default parameters for primitive textfield component',
        {
            factory: () => TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
        },
    );
