import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    ElementRef,
    inject,
    OnInit,
    TemplateRef,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TuiContext,
    TuiIdentityMatcher,
    tuiIsPresent,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {
    TUI_COMMON_ICONS,
    TUI_DATA_LIST_HOST,
    TuiDataListComponent,
    TuiDataListHost,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, EMPTY, map, merge, startWith, Subject} from 'rxjs';

@Component({
    selector: 'tui-select-option',
    templateUrl: './select-option.template.html',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSelectOptionComponent<T> implements OnInit, DoCheck {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly changeDetection$ = new Subject<void>();
    protected readonly abstractControl = inject(AbstractTuiControl<T>, {optional: true});
    protected readonly control = inject(NgControl);
    protected readonly option = inject(TuiOptionComponent<T>);
    protected readonly dataList = inject(TuiDataListComponent<T>, {optional: true});
    readonly icons = inject(TUI_COMMON_ICONS);
    readonly context =
        inject<TuiContext<TemplateRef<Record<string, unknown>>>>(POLYMORPHEUS_CONTEXT);

    readonly selected$ = merge(
        this.changeDetection$,
        this.control.valueChanges || EMPTY,
        tuiTypedFromEvent(this.el, 'animationstart'),
    ).pipe(
        startWith(null),
        map(() => this.selected),
        distinctUntilChanged(),
    );

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
        void Promise.resolve().then(() => {
            if (tuiIsPresent(this.option.value) && !this.option.disabled) {
                this.host.checkOption?.(this.option.value);
            }
        });
    }

    ngDoCheck(): void {
        this.changeDetection$.next();
    }

    protected get value(): T | null {
        return this.abstractControl?.value ?? this.control.value;
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
