import {ChangeDetectorRef, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService, watch} from '@taiga-ui/cdk';
import {merge, NEVER, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {
    TUI_TEXTFIELD_AUTOCOMPLETE,
    TuiTextfieldAutocompleteDirective,
} from './textfield-autocomplete.directive';
import {
    TUI_TEXTFIELD_CLEANER,
    TuiTextfieldCleanerDirective,
} from './textfield-cleaner.directive';
import {
    TUI_TEXTFIELD_CUSTOM_CONTENT,
    TuiTextfieldCustomContentDirective,
} from './textfield-custom-content.directive';
import {
    TUI_TEXTFIELD_EXAMPLE_TEXT,
    TuiTextfieldExampleTextDirective,
} from './textfield-example-text.directive';
import {
    TUI_TEXTFIELD_INPUT_MODE,
    TuiTextfieldInputModeDirective,
} from './textfield-input-mode.directive';
import {
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TuiTextfieldLabelOutsideDirective,
} from './textfield-label-outside.directive';
import {
    TUI_TEXTFIELD_MAX_LENGTH,
    TuiTextfieldMaxLengthDirective,
} from './textfield-max-length.directive';
import {TUI_TEXTFIELD_SIZE, TuiTextfieldSizeDirective} from './textfield-size.directive';
import {TUI_TEXTFIELD_TYPE, TuiTextfieldTypeDirective} from './textfield-type.directive';
import {TuiTextfieldController} from './textfield.controller';

export const TUI_TEXTIFELD_WATCHED_CONTROLLER = new InjectionToken<TuiTextfieldController>(
    'watched textfield controller',
);

export function textfieldWatchedControllerFactory(
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
    ...controllers: [
        TuiTextfieldAutocompleteDirective,
        TuiTextfieldCleanerDirective,
        TuiTextfieldCustomContentDirective,
        TuiTextfieldExampleTextDirective,
        TuiTextfieldInputModeDirective,
        TuiTextfieldLabelOutsideDirective,
        TuiTextfieldMaxLengthDirective,
        TuiTextfieldSizeDirective,
        // @ts-ignore remove after TS update
        TuiTextfieldTypeDirective,
    ]
): TuiTextfieldController {
    const change$ = merge(...controllers.map(({change$}) => change$ || NEVER)).pipe(
        watch(changeDetectorRef),
        takeUntil(destroy$),
    );

    change$.subscribe();

    return new TuiTextfieldController(change$, ...controllers);
}

export const TEXTFIELD_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_TEXTIFELD_WATCHED_CONTROLLER,
        deps: [
            ChangeDetectorRef,
            TuiDestroyService,
            TUI_TEXTFIELD_AUTOCOMPLETE,
            TUI_TEXTFIELD_CLEANER,
            TUI_TEXTFIELD_CUSTOM_CONTENT,
            TUI_TEXTFIELD_EXAMPLE_TEXT,
            TUI_TEXTFIELD_INPUT_MODE,
            TUI_TEXTFIELD_LABEL_OUTSIDE,
            TUI_TEXTFIELD_MAX_LENGTH,
            TUI_TEXTFIELD_SIZE,
            TUI_TEXTFIELD_TYPE,
        ],
        useFactory: textfieldWatchedControllerFactory,
    },
];
