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
export class TuiForAsyncDirective<T extends readonly any[]>
    implements OnChanges, OnDestroy
{
    private readonly destroy$ = new Subject<void>();

    @Input()
    tuiForAsyncOf: T | null | undefined;

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
        from(this.iterableValues)
            .pipe(
                concatMap(entry =>
                    this.tuiForAsyncTimeout > 0
                        ? of(entry).pipe(delay(this.tuiForAsyncTimeout))
                        : of(entry),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(([index, item]) => this.createEmbeddedView(item, index));
    }

    private get iterableValues(): IterableIterator<[number, T]> {
        return (this.tuiForAsyncOf ?? []).entries();
    }

    private createEmbeddedView<T>(item: T, index: number): void {
        this.view
            .createEmbeddedView(this.template, {$implicit: item, index}, index)
            .detectChanges();
    }

    private clearViewForOldNodes(): void {
        this.destroy$.next();
        this.view.clear();
    }
}
