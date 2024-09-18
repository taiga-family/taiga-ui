import {
    AfterContentChecked,
    AfterContentInit,
    ContentChildren,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    QueryList,
} from '@angular/core';
import {NgControl, RadioControlValueAccessor} from '@angular/forms';
import {RouterLinkActive} from '@angular/router';
import {EMPTY_QUERY, tuiControlValue, tuiQueryListChanges} from '@taiga-ui/cdk';
import {map, switchMap} from 'rxjs/operators';

import {TuiSegmentedComponent} from './segmented.component';

@Directive({
    selector: 'tui-segmented',
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

    constructor(
        @Inject(TuiSegmentedComponent) private readonly component: TuiSegmentedComponent,
    ) {}

    @HostListener('click', ['$event.target'])
    update(target: Element | null): void {
        this.component.update(this.getIndex(target));
    }

    ngAfterContentInit(): void {
        tuiQueryListChanges(this.controls)
            .pipe(
                switchMap(() => tuiControlValue(this.controls.first)),
                map(value => this.radios.toArray().findIndex(c => c.value === value)),
            )
            .subscribe(index => {
                this.component.update(index);
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
