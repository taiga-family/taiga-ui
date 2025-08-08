import {ChangeDetectorRef, InjectionToken, type Provider} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/legacy/tokens';
import {merge, NEVER} from 'rxjs';

import {TuiTextfieldController} from './textfield.controller';
import {TUI_TEXTFIELD_OPTIONS, type TuiTextfieldOptions} from './textfield.options';
import {
    TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
    type TuiTextfieldAppearanceDirective,
} from './textfield-appearance.directive';
import {
    TUI_TEXTFIELD_CLEANER,
    type TuiTextfieldCleanerDirective,
} from './textfield-cleaner.directive';
import {
    TUI_TEXTFIELD_CUSTOM_CONTENT,
    type TuiTextfieldCustomContentDirective,
} from './textfield-custom-content.directive';
import {
    TUI_TEXTFIELD_FILLER,
    type TuiTextfieldFillerDirective,
} from './textfield-filler.directive';
import {
    TUI_TEXTFIELD_ICON,
    type TuiTextfieldIconDirective,
} from './textfield-icon.directive';
import {
    TUI_TEXTFIELD_ICON_LEFT,
    type TuiTextfieldIconLeftDirective,
} from './textfield-icon-left.directive';
import {
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    type TuiTextfieldLabelOutsideDirective,
} from './textfield-label-outside.directive';
import {
    TUI_TEXTFIELD_POSTFIX,
    type TuiTextfieldPostfixDirective,
} from './textfield-postfix.directive';
import {
    TUI_TEXTFIELD_PREFIX,
    type TuiTextfieldPrefixDirective,
} from './textfield-prefix.directive';
import {
    TUI_TEXTFIELD_SIZE,
    type TuiTextfieldSizeDirective,
} from './textfield-size.directive';

export const TUI_TEXTFIELD_WATCHED_CONTROLLER =
    new InjectionToken<TuiTextfieldController>(
        ngDevMode ? 'TUI_TEXTFIELD_WATCHED_CONTROLLER' : '',
    );

export const TEXTFIELD_CONTROLLER_PROVIDER: Provider = [
    {
        provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
        deps: [
            ChangeDetectorRef,
            TUI_TEXTFIELD_OPTIONS,
            TUI_TEXTFIELD_APPEARANCE,
            TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
            TUI_TEXTFIELD_CLEANER,
            TUI_TEXTFIELD_CUSTOM_CONTENT,
            TUI_TEXTFIELD_ICON,
            TUI_TEXTFIELD_ICON_LEFT,
            TUI_TEXTFIELD_LABEL_OUTSIDE,
            TUI_TEXTFIELD_SIZE,
            TUI_TEXTFIELD_PREFIX,
            TUI_TEXTFIELD_POSTFIX,
            TUI_TEXTFIELD_FILLER,
        ],
        useFactory: (
            cdr: ChangeDetectorRef,
            options: TuiTextfieldOptions,
            legacyAppearance: string,
            ...controllers: [
                TuiTextfieldAppearanceDirective,
                TuiTextfieldCleanerDirective,
                TuiTextfieldCustomContentDirective,
                TuiTextfieldIconDirective,
                TuiTextfieldIconLeftDirective,
                TuiTextfieldLabelOutsideDirective,
                TuiTextfieldSizeDirective,
                TuiTextfieldPrefixDirective,
                TuiTextfieldPostfixDirective,
                TuiTextfieldFillerDirective,
            ]
        ) => {
            const change$ = merge(
                ...controllers.map(({change$}) => change$ || NEVER),
            ).pipe(tuiWatch(cdr), takeUntilDestroyed());

            change$.subscribe();

            return new TuiTextfieldController(
                change$,
                options,
                legacyAppearance,
                ...controllers,
            );
        },
    },
];
