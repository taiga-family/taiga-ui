import {
    Directive,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {from, of, Subject} from 'rxjs';
import {concatMap, delay, takeUntil} from 'rxjs/operators';

@Directive({selector: '[tuiForAsync][tuiForAsyncOf]'})
export class TuiForAsyncDirective<T> implements OnChanges, OnDestroy {
    private readonly destroy$ = new Subject<void>();

    @Input() tuiForAsyncOf: readonly T[] | undefined | null;

    @Input()
    tuiForAsyncTimeout = 10;

    constructor(
        @Inject(ViewContainerRef) private readonly view: ViewContainerRef,
        @Inject(TemplateRef) private readonly template: TemplateRef<unknown>,
    ) {}

    ngOnChanges(): void {
        this.clearViewForOldNodes();
        this.createAsyncViewForNewNodes();
    }

    ngOnDestroy(): void {
        this.clearViewForOldNodes();
        this.destroy$.complete();
    }

    private createAsyncViewForNewNodes(): void {
        from((this.tuiForAsyncOf || []).entries())
            .pipe(
                concatMap(entry => of(entry).pipe(delay(this.tuiForAsyncTimeout))),
                takeUntil(this.destroy$),
            )
            .subscribe(([index, item]) =>
                this.view
                    .createEmbeddedView(this.template, {$implicit: item, index}, index)
                    .detectChanges(),
            );
    }

    private clearViewForOldNodes(): void {
        this.destroy$.next();
        this.view.clear();
    }
}
