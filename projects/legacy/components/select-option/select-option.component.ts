import {
    ChangeDetectionStrategy,
    Component,
    type DoCheck,
    inject,
    type OnInit,
    type TemplateRef,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_DEFAULT_IDENTITY_MATCHER} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {type TuiContext, type TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_DATA_LIST_HOST,
    TuiDataListComponent,
    type TuiDataListHost,
    TuiOption,
} from '@taiga-ui/core/components/data-list';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {AbstractTuiControl} from '@taiga-ui/legacy/classes';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, EMPTY, map, merge, startWith, Subject} from 'rxjs';

@Component({
    standalone: false,
    selector: 'tui-select-option',
    templateUrl: './select-option.template.html',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSelectOptionComponent<T> implements OnInit, DoCheck {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly el = tuiInjectElement();
    private readonly changeDetection$ = new Subject<void>();
    protected readonly abstractControl = inject(AbstractTuiControl<T>, {optional: true});
    protected readonly control = inject(NgControl);
    protected readonly option = inject(TuiOption<T>);
    protected readonly dataList = inject(TuiDataListComponent<T>, {optional: true});
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly context =
        injectContext<TuiContext<TemplateRef<Record<string, unknown>>>>();

    protected readonly selected$ = merge<unknown[]>(
        this.abstractControl?.update$ || EMPTY,
        this.changeDetection$,
        this.control.valueChanges || EMPTY,
        tuiTypedFromEvent(this.el, 'animationstart'),
    ).pipe(
        startWith(null),
        map(() => this.selected),
        distinctUntilChanged(),
    );

    public ngOnInit(): void {
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

    public ngDoCheck(): void {
        this.changeDetection$.next();
    }

    protected get value(): T | null {
        return this.abstractControl?.value ?? this.control.value;
    }

    protected get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
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
