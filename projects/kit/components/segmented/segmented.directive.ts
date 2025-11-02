import {
    type AfterContentChecked,
    type AfterContentInit,
    ContentChildren,
    Directive,
    ElementRef,
    inject,
    type QueryList,
} from '@angular/core';
import {NgControl, RadioControlValueAccessor} from '@angular/forms';
import {RouterLinkActive} from '@angular/router';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiControlValue, tuiQueryListChanges} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {map, switchMap} from 'rxjs';

import {TuiSegmented} from './segmented.component';

@Directive({
    host: {
        '(click)': 'update($event.target)',
    },
})
export class TuiSegmentedDirective implements AfterContentChecked, AfterContentInit {
    @ContentChildren(NgControl, {descendants: true})
    private readonly controls: QueryList<NgControl> = EMPTY_QUERY;

    @ContentChildren(RadioControlValueAccessor, {descendants: true})
    private readonly radios: QueryList<RadioControlValueAccessor> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive)
    private readonly links: QueryList<RouterLinkActive> = EMPTY_QUERY;

    @ContentChildren(RouterLinkActive, {read: ElementRef})
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly component = inject(TuiSegmented);
    private readonly el = tuiInjectElement();

    public ngAfterContentInit(): void {
        tuiQueryListChanges(this.controls)
            .pipe(
                switchMap(() => tuiControlValue(this.controls.first)),
                map((value) => this.radios.toArray().findIndex((c) => c.value === value)),
            )
            .subscribe((index) => {
                this.component.update(index);
            });
    }

    public ngAfterContentChecked(): void {
        if (this.links.length) {
            this.update(this.elements.get(this.linkIndex)?.nativeElement || null);
        }
    }

    protected update(target: Element | null): void {
        this.component.update(this.getIndex(target));
    }

    private get linkIndex(): number {
        return this.links.toArray().findIndex((link) => link.isActive);
    }

    private getIndex(element: Element | null): number {
        return Array.from(this.el.children).findIndex((tab) => tab.contains(element));
    }
}
