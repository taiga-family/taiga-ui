import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    ElementRef,
    Inject,
    OnInit,
    Optional,
    TemplateRef,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TuiContextWithImplicit,
    TuiIdentityMatcher,
    tuiIsPresent,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_HOST,
    TuiDataListComponent,
    TuiDataListHost,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, merge, Subject} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

@Component({
    selector: 'tui-select-option',
    templateUrl: './select-option.template.html',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSelectOptionComponent<T> implements OnInit, DoCheck {
    private readonly changeDetection$ = new Subject();

    readonly selected$ = merge(
        this.changeDetection$,
        this.control.valueChanges || EMPTY,
        tuiTypedFromEvent(this.elementRef.nativeElement, 'animationstart'),
    ).pipe(
        startWith(null),
        map(() => this.selected),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiContextWithImplicit<TemplateRef<Record<string, unknown>>>,
        @Inject(TUI_DATA_LIST_HOST)
        private readonly host: TuiDataListHost<T>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiOptionComponent) protected readonly option: TuiOptionComponent<T>,
        @Optional()
        @Inject(TuiDataListComponent)
        protected readonly dataList: TuiDataListComponent<T> | null,
        @Inject(NgControl) protected readonly control: NgControl,
        @Optional()
        @Inject(AbstractTuiControl)
        protected readonly abstractControl: AbstractTuiControl<T> | null,
    ) {}

    get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
    }

    ngDoCheck(): void {
        this.changeDetection$.next();
    }

    ngOnInit(): void {
        /**
         * This would cause changes inside already checked parent component (during the same change detection cycle),
         * and it might cause ExpressionChanged error due to potential HostBinding
         * (for example, inside {@link https://github.com/angular/angular/blob/main/packages/forms/src/directives/ng_control_status.ts#L99 NgControlStatus}).
         * Microtask keeps it in the same frame but allows change detection to run.
         */
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => {
            if (tuiIsPresent(this.option.value) && this.host.checkOption) {
                this.host.checkOption(this.option.value);
            }
        });
    }

    protected get value(): T | null {
        return this.abstractControl?.value ?? (this.control.value as T | null);
    }

    protected get selected(): boolean {
        return (
            tuiIsPresent(this.option.value) &&
            tuiIsPresent(this.value) &&
            this.matcher(this.value, this.option.value)
        );
    }
}

export const TUI_SELECT_OPTION = new PolymorpheusComponent(TuiSelectOptionComponent);
