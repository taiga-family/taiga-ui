import {DOCUMENT} from '@angular/common';
import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiObscured} from '@taiga-ui/cdk/directives/obscured';
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
    private readonly el = tuiInjectElement();
    private readonly ref = inject(TuiDropdownDirective).ref;
    private readonly open = inject(TuiDropdownOpen);
    private readonly obscured = inject(TuiObscured);
    private readonly activeZone = inject(TuiActiveZone);

    protected readonly tuiDropdownClose = outputFromObservable(
        merge(
            inject(TuiDropdownDriver).pipe(
                tuiIfMap(() =>
                    merge(
                        tuiCloseWatcher(),
                        this.obscured.tuiObscured$.pipe(filter(Boolean)),
                        this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)),
                        tuiTypedFromEvent(this.el, 'focusin').pipe(
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
