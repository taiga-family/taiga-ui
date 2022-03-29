import {Directive, ElementRef, HostListener, Inject, Input} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService, typedFromEvent} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

/**
 * Native <input type='range' readonly> doesn't work.
 * This directive imitates this native behaviour.
 */
@Directive({
    selector: 'input[tuiSlider][readonly]',
    providers: [TuiDestroyService],
})
export class TuiSliderReadonlyDirective {
    private readonly ARROWS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    @Input()
    @tuiDefaultProp()
    readonly: '' | boolean = true;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef,
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    ) {
        typedFromEvent(nativeElement, 'keydown')
            .pipe(
                filter(({key}) => this.ARROWS.includes(key)),
                takeUntil(destroy$),
            )
            .subscribe(event => this.preventEvent(event));
    }

    @HostListener('mousedown', ['$event'])
    @HostListener('touchstart', ['$event'])
    @HostListener('keydown.home', ['$event'])
    @HostListener('keydown.end', ['$event'])
    @HostListener('keydown.pageUp', ['$event'])
    @HostListener('keydown.pageDown', ['$event'])
    preventEvent(event: Event) {
        if (this.readonly === '' || this.readonly) {
            event.preventDefault();
        }
    }
}
