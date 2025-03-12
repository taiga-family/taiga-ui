import {CommonModule} from '@angular/common';
import type {DoCheck, OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_DEFAULT_IDENTITY_MATCHER} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import type {TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiOption} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import type {TuiDataListHost} from '@taiga-ui/core/tokens';
import {TUI_COMMON_ICONS, TUI_DATA_LIST_HOST} from '@taiga-ui/core/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, map, merge, startWith, Subject} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-select-option',
    imports: [CommonModule, TuiIcon, TuiScrollIntoView],
    templateUrl: './select-option.template.html',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSelectOption<T> implements OnInit, DoCheck {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly el = tuiInjectElement();
    private readonly changeDetection$ = new Subject<void>();
    private readonly control = inject(TuiControl);
    private readonly option = inject(TuiOption<T>);
    protected readonly icon = inject(TUI_COMMON_ICONS).check;
    protected readonly content = inject(PolymorpheusOutlet).context.$implicit;

    protected readonly selected$ = merge<unknown[]>(
        this.changeDetection$,
        toObservable(this.control.value),
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

    protected get selected(): boolean {
        return (
            tuiIsPresent(this.option.value) &&
            tuiIsPresent(this.control.value()) &&
            this.matcher(this.control.value(), this.option.value)
        );
    }

    private get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
    }
}
