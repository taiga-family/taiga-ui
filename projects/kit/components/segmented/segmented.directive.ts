import {
    type AfterContentChecked,
    type AfterContentInit,
    contentChildren,
    DestroyRef,
    Directive,
    ElementRef,
    inject,
    INJECTOR,
} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {NgControl, RadioControlValueAccessor} from '@angular/forms';
import {RouterLinkActive} from '@angular/router';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {EMPTY, map, switchMap} from 'rxjs';

import {TuiSegmented} from './segmented.component';

@Directive({host: {'(click)': 'update($event.target)'}})
export class TuiSegmentedDirective implements AfterContentChecked, AfterContentInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly injector = inject(INJECTOR);
    private readonly component = inject(TuiSegmented);
    private readonly links = contentChildren(RouterLinkActive, {descendants: true});
    private readonly elements = contentChildren(RouterLinkActive, {
        read: ElementRef,
        descendants: true,
    });

    private readonly controls = contentChildren(NgControl, {descendants: true});
    private readonly controls$ = toObservable(this.controls);

    private readonly radios = contentChildren(RadioControlValueAccessor, {
        descendants: true,
    });

    public ngAfterContentInit(): void {
        this.controls$
            .pipe(
                switchMap(([control]) =>
                    control ? tuiControlValue(control, this.injector) : EMPTY,
                ),
                map((value) => this.radios().findIndex((c) => c.value === value)),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((index) => this.component.update(index));
    }

    public ngAfterContentChecked(): void {
        const index = this.links().findIndex(({isActive}) => isActive);

        if (index !== -1) {
            this.update(this.elements()[index]?.nativeElement || null);
        }
    }

    protected update(target: EventTarget | null): void {
        this.component.update(
            this.component.items.findIndex((tab) => tab.contains(target as Node | null)),
        );
    }
}
