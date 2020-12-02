/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/stepper/stepper-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { CdkStepper, CdkStep } from './stepper';
import { CdkStepLabel } from './step-label';
import { CdkStepperNext, CdkStepperPrevious } from './stepper-button';
import { CdkStepHeader } from './step-header';
import { BidiModule } from '@angular/cdk/bidi';
export class CdkStepperModule {
}
CdkStepperModule.decorators = [
    { type: NgModule, args: [{
                imports: [BidiModule],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3N0ZXBwZXIvc3RlcHBlci1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQXFCN0MsTUFBTSxPQUFPLGdCQUFnQjs7O1lBbkI1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNyQixPQUFPLEVBQUU7b0JBQ1AsT0FBTztvQkFDUCxVQUFVO29CQUNWLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixjQUFjO29CQUNkLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLE9BQU87b0JBQ1AsVUFBVTtvQkFDVixhQUFhO29CQUNiLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxrQkFBa0I7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1N0ZXBwZXIsIENka1N0ZXB9IGZyb20gJy4vc3RlcHBlcic7XG5pbXBvcnQge0Nka1N0ZXBMYWJlbH0gZnJvbSAnLi9zdGVwLWxhYmVsJztcbmltcG9ydCB7Q2RrU3RlcHBlck5leHQsIENka1N0ZXBwZXJQcmV2aW91c30gZnJvbSAnLi9zdGVwcGVyLWJ1dHRvbic7XG5pbXBvcnQge0Nka1N0ZXBIZWFkZXJ9IGZyb20gJy4vc3RlcC1oZWFkZXInO1xuaW1wb3J0IHtCaWRpTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIENka1N0ZXAsXG4gICAgQ2RrU3RlcHBlcixcbiAgICBDZGtTdGVwSGVhZGVyLFxuICAgIENka1N0ZXBMYWJlbCxcbiAgICBDZGtTdGVwcGVyTmV4dCxcbiAgICBDZGtTdGVwcGVyUHJldmlvdXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENka1N0ZXAsXG4gICAgQ2RrU3RlcHBlcixcbiAgICBDZGtTdGVwSGVhZGVyLFxuICAgIENka1N0ZXBMYWJlbCxcbiAgICBDZGtTdGVwcGVyTmV4dCxcbiAgICBDZGtTdGVwcGVyUHJldmlvdXMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlck1vZHVsZSB7fVxuIl19