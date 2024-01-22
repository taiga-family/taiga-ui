import {
    AfterContentChecked,
    AfterContentInit,
    ContentChildren,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    QueryList,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {RouterLinkActive} from '@angular/router';
import {EMPTY_QUERY, TuiDestroyService, tuiQueryListChanges} from '@taiga-ui/cdk';
import {EMPTY, Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

import {TuiSegmentedComponent} from './segmented.component';

@Directive({
    selector: 'tui-segmented',
})
export class TuiSegmentedDirective implements AfterContentChecked, AfterContentInit {
    @ContentChildren(NgControl, {descendants: true})
    private readonly controls: QueryList<NgControl> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive)
    private readonly links: QueryList<RouterLinkActive> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive, {read: ElementRef})
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    constructor(
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,
        @Inject(TuiSegmentedComponent) private readonly component: TuiSegmentedComponent,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {}

    @HostListener('click', ['$event.target'])
    update(target: Element | null): void {
        const index = this.getIndex(target);

        if (index >= 0) {
            this.component.update(index);
        }
    }

    ngAfterContentInit(): void {
        tuiQueryListChanges(this.controls)
            .pipe(
                switchMap(() => this.controls.last?.valueChanges || EMPTY),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.update(this.el.nativeElement.querySelector(':checked'));
            });
    }

    ngAfterContentChecked(): void {
        if (this.links.length) {
            this.update(this.elements.get(this.linkIndex)?.nativeElement || null);
        }
    }

    private get linkIndex(): number {
        return this.links.toArray().findIndex(link => link.isActive);
    }

    private getIndex(element: Element | null): number {
        return Array.from(this.component.tabs).findIndex(tab => tab.contains(element));
    }
}
