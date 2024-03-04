import {
    type AfterContentChecked,
    type AfterContentInit,
    ContentChildren,
    Directive,
    ElementRef,
    HostListener,
    inject,
    type QueryList,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {RouterLinkActive} from '@angular/router';
import {EMPTY_QUERY, TuiDestroyService, tuiQueryListChanges} from '@taiga-ui/cdk';
import {EMPTY, switchMap, takeUntil} from 'rxjs';

import {TuiSegmentedComponent} from './segmented.component';

@Directive({
    standalone: true,
    selector: 'tui-segmented:not(tui-segmented)',
})
export class TuiSegmentedDirective implements AfterContentChecked, AfterContentInit {
    @ContentChildren(NgControl, {descendants: true})
    private readonly controls: QueryList<NgControl> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive)
    private readonly links: QueryList<RouterLinkActive> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive, {read: ElementRef})
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly component = inject(TuiSegmentedComponent);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    public ngAfterContentInit(): void {
        tuiQueryListChanges(this.controls)
            .pipe(
                switchMap(() => this.controls.last?.valueChanges || EMPTY),
                takeUntil(this.destroy$),
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
        return this.links.toArray().findIndex(link => link.isActive);
    }

    private getIndex(element: Element | null): number {
        return Array.from(this.el.children).findIndex(tab => tab.contains(element));
    }
}
