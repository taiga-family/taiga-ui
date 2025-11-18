import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {EMPTY, filter} from 'rxjs';

import {TuiStepperComponent} from './stepper.component';

@Component({
    selector:
        'button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]',
    imports: [TuiIcon],
    templateUrl: './step.template.html',
    styleUrl: './step.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        type: 'button',
        '[attr.data-state]': 'stepState()',
        '[class._vertical]': 'stepper.orientation() === "vertical"',
        '[class._active]': 'isActive',
        '[tabIndex]': 'isActive ? 0 : -1',
        '(click)': 'activate()',
    },
})
export class TuiStep {
    private readonly el = tuiInjectElement();

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly stepper = inject(TuiStepperComponent);
    protected readonly $ = (
        inject(RouterLinkActive, {optional: true})?.isActiveChange.asObservable() ?? EMPTY
    )
        .pipe(filter(Boolean), takeUntilDestroyed())
        .subscribe(() => this.activate());

    public readonly stepState = input<'error' | 'normal' | 'pass'>('normal');
    public readonly icon = input('');

    protected get isActive(): boolean {
        return this.stepper.isActive(this.index);
    }

    protected get index(): number {
        return this.stepper.indexOf(this.el);
    }

    protected activate(): void {
        this.stepper.activate(this.index);
    }
}
