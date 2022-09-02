import type {Provider} from '@angular/core';
import {ChangeDetectorRef, InjectionToken} from '@angular/core';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {merge, NEVER} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiTextfieldController} from './textfield.controller';
import type {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TUI_TEXTFIELD_CLEANER} from './textfield-cleaner.directive';
import type {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TUI_TEXTFIELD_CUSTOM_CONTENT} from './textfield-custom-content.directive';
import type {TuiTextfieldIconDirective} from './textfield-icon.directive';
import {TUI_TEXTFIELD_ICON} from './textfield-icon.directive';
import type {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import {TUI_TEXTFIELD_ICON_LEFT} from './textfield-icon-left.directive';
import type {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TUI_TEXTFIELD_LABEL_OUTSIDE} from './textfield-label-outside.directive';
import type {TuiTextfieldSizeDirective} from './textfield-size.directive';
import {TUI_TEXTFIELD_SIZE} from './textfield-size.directive';

export const TUI_TEXTFIELD_WATCHED_CONTROLLER =
    new InjectionToken<TuiTextfieldController>(`watched textfield controller`);

export const TEXTFIELD_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
        deps: [
            ChangeDetectorRef,
            TuiDestroyService,
            TUI_TEXTFIELD_CLEANER,
            TUI_TEXTFIELD_CUSTOM_CONTENT,
            TUI_TEXTFIELD_ICON,
            TUI_TEXTFIELD_ICON_LEFT,
            TUI_TEXTFIELD_LABEL_OUTSIDE,
            TUI_TEXTFIELD_SIZE,
        ],
        useFactory: (
            changeDetectorRef: ChangeDetectorRef,
            destroy$: Observable<void>,
            ...controllers: [
                TuiTextfieldCleanerDirective,
                TuiTextfieldCustomContentDirective,
                TuiTextfieldIconDirective,
                TuiTextfieldIconLeftDirective,
                TuiTextfieldLabelOutsideDirective,
                TuiTextfieldSizeDirective,
            ]
        ) => {
            const change$ = merge(
                ...controllers.map(({change$}) => change$ || NEVER),
            ).pipe(tuiWatch(changeDetectorRef), takeUntil(destroy$));

            change$.subscribe();

            return new TuiTextfieldController(change$, ...controllers);
        },
    },
];
