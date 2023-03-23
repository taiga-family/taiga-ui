import type {Provider} from '@angular/core';
import {ChangeDetectorRef, InjectionToken} from '@angular/core';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {merge, NEVER} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiTextfieldController} from './textfield.controller';
import type {TuiTextfieldAppearanceDirective} from './textfield-appearance.directive';
import {TUI_TEXTFIELD_APPEARANCE_DIRECTIVE} from './textfield-appearance.directive';
import type {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TUI_TEXTFIELD_CLEANER} from './textfield-cleaner.directive';
import type {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TUI_TEXTFIELD_CUSTOM_CONTENT} from './textfield-custom-content.directive';
import type {TuiTextfieldFillerDirective} from './textfield-filler.directive';
import {TUI_TEXTFIELD_FILLER} from './textfield-filler.directive';
import type {TuiTextfieldIconDirective} from './textfield-icon.directive';
import {TUI_TEXTFIELD_ICON} from './textfield-icon.directive';
import type {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import {TUI_TEXTFIELD_ICON_LEFT} from './textfield-icon-left.directive';
import type {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TUI_TEXTFIELD_LABEL_OUTSIDE} from './textfield-label-outside.directive';
import type {TuiTextfieldOptions} from './textfield-options';
import {TUI_TEXTFIELD_OPTIONS} from './textfield-options';
import type {TuiTextfieldPostfixDirective} from './textfield-postfix.directive';
import {TUI_TEXTFIELD_POSTFIX} from './textfield-postfix.directive';
import type {TuiTextfieldPrefixDirective} from './textfield-prefix.directive';
import {TUI_TEXTFIELD_PREFIX} from './textfield-prefix.directive';
import type {TuiTextfieldSizeDirective} from './textfield-size.directive';
import {TUI_TEXTFIELD_SIZE} from './textfield-size.directive';

export const TUI_TEXTFIELD_WATCHED_CONTROLLER =
    new InjectionToken<TuiTextfieldController>(`[TUI_TEXTFIELD_WATCHED_CONTROLLER]`);

export const TEXTFIELD_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
        deps: [
            ChangeDetectorRef,
            TuiDestroyService,
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
            changeDetectorRef: ChangeDetectorRef,
            destroy$: Observable<void>,
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
            ).pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$));

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
