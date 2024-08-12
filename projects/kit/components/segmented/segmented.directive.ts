import {isPlatformBrowser} from '@angular/common';
import type {AfterContentChecked, AfterContentInit, QueryList} from '@angular/core';
import {
    ContentChildren,
    DestroyRef,
    Directive,
    ElementRef,
    HostListener,
    inject,
    PLATFORM_ID,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {RouterLinkActive} from '@angular/router';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiQueryListChanges} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {filter, merge, switchMap} from 'rxjs';

import {TuiSegmented} from './segmented.component';

@Directive({
    standalone: true,
})
export class TuiSegmentedDirective implements AfterContentChecked, AfterContentInit {
    @ContentChildren(NgControl, {descendants: true})
    private readonly controls: QueryList<NgControl> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive)
    private readonly links: QueryList<RouterLinkActive> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive, {read: ElementRef})
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly destroyRef = inject(DestroyRef);
    private readonly component = inject(TuiSegmented);
    private readonly el = tuiInjectElement();

    // TODO: Debug prerender
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    public ngAfterContentInit(): void {
        tuiQueryListChanges(this.controls)
            .pipe(
                switchMap((controls) => merge(controls.map((c) => c.valueChanges))),
                filter(() => this.isBrowser),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => {
                this.update(this.el.querySelector(':checked'));
            });
    }

    public ngAfterContentChecked(): void {
        if (this.links.length) {
            this.update(this.elements.get(this.linkIndex)?.nativeElement || null);
        }
    }

    @HostListener('click', ['$event.target'])
    protected update(target: Element | null): void {
        const index = this.getIndex(target);

        if (index >= 0) {
            this.component.update(index);
        }
    }

    private get linkIndex(): number {
        return this.links.toArray().findIndex((link) => link.isActive);
    }

    private getIndex(element: Element | null): number {
        return Array.from(this.el.children).findIndex((tab) => tab.contains(element));
    }
}
