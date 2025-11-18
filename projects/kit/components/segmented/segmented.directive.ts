import {
    type AfterContentChecked,
    type AfterContentInit,
    contentChildren,
    Directive,
    ElementRef,
    inject,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {NgControl, RadioControlValueAccessor} from '@angular/forms';
import {RouterLinkActive} from '@angular/router';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {map, switchMap} from 'rxjs';

import {TuiSegmented} from './segmented.component';

@Directive({
    host: {
        '(click)': 'update($event.target)',
    },
})
export class TuiSegmentedDirective implements AfterContentChecked, AfterContentInit {
    private readonly component = inject(TuiSegmented);
    private readonly el = tuiInjectElement();
    private readonly links = contentChildren(RouterLinkActive);
    private readonly elements = contentChildren(RouterLinkActive, {read: ElementRef});
    private readonly controls = contentChildren(NgControl, {descendants: true});
    private readonly controls$ = toObservable(this.controls);
    private readonly radios = contentChildren(RadioControlValueAccessor, {
        descendants: true,
    });

    public ngAfterContentInit(): void {
        this.controls$
            .pipe(
                switchMap(([control]) => tuiControlValue(control)),
                map((value) => this.radios().findIndex((c) => c.value === value)),
            )
            .subscribe((index) => {
                this.component.update(index);
            });
    }

    public ngAfterContentChecked(): void {
        const index = this.links().findIndex(({isActive}) => isActive);

        if (index !== -1) {
            this.update(this.elements()[index]?.nativeElement || null);
        }
    }

    protected update(target: Element | null): void {
        this.component.update(
            Array.from(this.el.children).findIndex((tab) => tab.contains(target)),
        );
    }
}
