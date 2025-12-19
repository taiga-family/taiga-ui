import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiCell} from '@taiga-ui/core/components/cell';
import {tuiAppearance, TuiWithAppearance} from '@taiga-ui/core/directives/appearance';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiAvatar} from '@taiga-ui/kit/components/avatar';
import {EMPTY, filter} from 'rxjs';

import {TuiStepperComponent} from './stepper.component';

@Component({
    selector:
        'button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]',
    imports: [TuiAvatar],
    templateUrl: './step.template.html',
    styleUrl: './step.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiCell, TuiWithAppearance],
    host: {
        type: 'button',
        '[tabIndex]': 'isActive() ? 0 : -1',
        '[class._active]': 'isActive()',
        '[class._vertical]': 'stepper.orientation() === "vertical"',
        '(click)': 'activate()',
    },
})
export class TuiStep {
    private readonly el = tuiInjectElement();
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly appearance = tuiAppearance(
        computed(() => (this.isActive() ? 'none' : 'action')),
    );

    protected readonly size = tuiDirectiveBinding(TuiCell, 'size', 'm');

    protected readonly stepper = inject(TuiStepperComponent);
    protected readonly $ = (
        inject(RouterLinkActive, {optional: true})?.isActiveChange.asObservable() ?? EMPTY
    )
        .pipe(filter(Boolean), takeUntilDestroyed())
        .subscribe(() => this.activate());

    public readonly stepState = input<'error' | 'normal' | 'pass'>('normal');
    public readonly icon = input('');

    protected readonly isActive = computed(
        () => this.stepper.activeItemIndex() === this.index,
    );

    protected avatarAppearance = computed(() => {
        if (this.isActive()) {
            return 'primary';
        }

        return this.stepState() === 'error' ? 'negative' : 'secondary';
    });

    protected readonly avatarContent = computed(() =>
        this.isActive() || (this.stepState() === 'normal' && !this.icon())
            ? `${this.index + 1}`
            : this.avatarIcon(),
    );

    protected readonly avatarIcon = computed(
        () =>
            this.icon() ||
            (this.stepState() === 'error' ? this.icons.error : this.icons.check),
    );

    protected get index(): number {
        return this.stepper.indexOf(this.el);
    }

    protected activate(): void {
        this.stepper.activate(this.index);
    }
}
