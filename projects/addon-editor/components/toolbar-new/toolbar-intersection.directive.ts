import {
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';

@Directive({selector: '[tuiToolbarIntersection]'})
export class TuiToolIntersectionDirective implements OnInit, OnDestroy {
    private observer?: IntersectionObserver;

    @Output()
    tuiToolbarIntersection: EventEmitter<boolean> = new EventEmitter();

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLDivElement>,
    ) {}

    ngOnInit() {
        const parent: HTMLDivElement | null =
            this.element.nativeElement.closest('.t-tools-wrapper');

        this.observer = new IntersectionObserver(
            entries =>
                entries.forEach((entry: IntersectionObserverEntry) =>
                    this.tuiToolbarIntersection.emit(entry.isIntersecting),
                ),
            {root: parent, threshold: 1},
        );

        this.observer.observe(this.element.nativeElement);
    }

    ngOnDestroy() {
        this.observer?.unobserve(this.element.nativeElement);
        this.observer?.disconnect();
    }
}
