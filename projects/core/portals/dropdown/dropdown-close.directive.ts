import {DOCUMENT} from '@angular/common';
import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk/directives';
import {
    tuiCloseWatcher,
    tuiIfMap,
    tuiStopPropagation,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk/observables';
import {tuiGetActualTarget, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {EMPTY, filter, merge} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriver} from './dropdown.driver';
import {TuiDropdownOpen} from './dropdown-open.directive';

@Directive()
export class TuiDropdownClose {
    private readonly open = inject(TuiDropdownOpen);
    private readonly ref = inject(TuiDropdownDirective).ref;

    protected readonly tuiDropdownClose = outputFromObservable(
        merge(
            inject(TuiDropdownDriver).pipe(
                tuiIfMap(() =>
                    merge(
                        tuiCloseWatcher(),
                        inject(TuiObscured).tuiObscured$.pipe(filter(Boolean)),
                        inject(TuiActiveZone).tuiActiveZoneChange.pipe(filter((a) => !a)),
                        tuiTypedFromEvent(tuiInjectElement(), 'focusin').pipe(
                            filter(
                                (event) =>
                                    !this.open.host.contains(tuiGetActualTarget(event)) ||
                                    !this.ref(),
                            ),
                        ),
                    ),
                ),
            ),
            // @ts-ignore
            typeof CloseWatcher === 'undefined'
                ? tuiTypedFromEvent(inject(DOCUMENT), 'keydown', {capture: true}).pipe(
                      filter(
                          ({key}) =>
                              key === 'Escape' &&
                              this.open.open() &&
                              !this.ref()?.location.nativeElement?.nextElementSibling,
                      ),
                      tuiStopPropagation(),
                  )
                : EMPTY,
        ),
    );
}
