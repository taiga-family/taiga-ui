import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    HostBinding,
    Inject,
    Input,
    QueryList,
    Self,
    ViewEncapsulation,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    TuiItemDirective,
    tuiQueryListChanges,
    tuiWatch,
} from '@taiga-ui/cdk';
import {TuiBreakpointService, TuiButtonComponent, TuiMedia} from '@taiga-ui/core';
import {combineLatest, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-block-status',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './block-status.template.html',
    styleUrls: ['./block-status.style.less'],
    encapsulation: ViewEncapsulation.None,
    providers: [TuiDestroyService],
})
export class TuiBlockStatusComponent implements AfterViewInit {
    @ContentChildren(TuiItemDirective, {read: TuiButtonComponent})
    private readonly buttons: QueryList<TuiButtonComponent> = EMPTY_QUERY;

    @HostBinding('class._card')
    @Input()
    card = false;

    constructor(
        @Inject(TuiBreakpointService)
        private readonly breakpointService: Observable<keyof TuiMedia | null>,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
    ) {}

    ngAfterViewInit(): void {
        this.setDefaultButtonSize();
    }

    private setDefaultButtonSize(): void {
        combineLatest([tuiQueryListChanges(this.buttons), this.breakpointService])
            .pipe(tuiWatch(this.cdr), takeUntil(this.destroy$))
            .subscribe(([buttons, breakpoint]) => {
                buttons.forEach(button => {
                    button.size = breakpoint === 'mobile' ? 'm' : 'l';
                });
            });
    }
}
