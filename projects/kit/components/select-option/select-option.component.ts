import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnInit,
    TemplateRef,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    TUI_DEFAULT_IDENTITY_MATCHER,
    TuiContextWithImplicit,
    TuiIdentityMatcher,
    tuiIsPresent,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_HOST, TuiDataListHost, TuiOptionComponent} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, merge} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

@Component({
    selector: `tui-select-option`,
    templateUrl: `./select-option.template.html`,
    styleUrls: [`./select-option.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSelectOptionComponent<T> implements OnInit {
    readonly selected$ = merge(
        this.control.valueChanges || EMPTY,
        typedFromEvent(this.elementRef.nativeElement, `animationstart`),
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
        @Inject(NgControl) protected readonly control: NgControl,
    ) {}

    get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
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

    protected get selected(): boolean {
        return (
            tuiIsPresent(this.option.value) &&
            tuiIsPresent(this.control.value) &&
            this.matcher(this.control.value, this.option.value)
        );
    }
}

export const TUI_SELECT_OPTION = new PolymorpheusComponent(TuiSelectOptionComponent);
