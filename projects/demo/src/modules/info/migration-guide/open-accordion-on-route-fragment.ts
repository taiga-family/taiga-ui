import {ChangeDetectorRef, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Router, Scroll} from '@angular/router';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {TuiAccordionItem} from '@taiga-ui/kit';
import {combineLatest, filter, take} from 'rxjs';

@Directive({standalone: true, selector: '[openOnRouteFragment]'})
export class OpenOnRouteFragment {
    private readonly accordion = inject(TuiAccordionItem, {self: true});
    private readonly el = tuiInjectElement();
    private readonly routerScroll$ = inject(Router).events.pipe(
        filter((e): e is Scroll => e instanceof Scroll),
    );

    private readonly cdr = inject(ChangeDetectorRef);

    constructor() {
        combineLatest([
            this.routerScroll$,
            inject(TUI_DOC_PAGE_LOADED).pipe(filter(Boolean), take(1)),
        ])
            .pipe(
                takeUntilDestroyed(),
                filter(([{anchor}]) => anchor === this.el.id),
            )
            .subscribe(() => {
                this.accordion.open = true;
                this.cdr.markForCheck();
            });
    }
}
