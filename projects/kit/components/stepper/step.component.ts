import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import type {Observable} from 'rxjs';
import {EMPTY, filter} from 'rxjs';

import {TuiStepperComponent} from './stepper.component';

@Component({
    standalone: true,
    selector:
        'button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]',
    imports: [NgIf, TuiIcon],
    templateUrl: './step.template.html',
    styleUrls: ['./step.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-state]': 'stepState',
        '[class._vertical]': 'isVertical',
        '[class._focus-visible]': 'focusVisible',
        '[class._active]': 'isActive',
        '[tabIndex]': 'tabIndex',
        '(click)': 'activate()',
    },
})
export class TuiStep {
    private readonly stepper = inject(TuiStepperComponent);
    private readonly el = tuiInjectElement();
    private readonly routerLinkActive$: Observable<boolean> =
        inject(RouterLinkActive, {optional: true})?.isActiveChange || EMPTY;

    protected focusVisible = false;

    protected readonly icons = inject(TUI_COMMON_ICONS);

    @Input()
    public stepState: 'error' | 'normal' | 'pass' = 'normal';

    @Input()
    public icon = '';

    constructor() {
        this.routerLinkActive$.pipe(filter(Boolean)).subscribe(() => {
            this.activate();
        });
    }

    protected get isActive(): boolean {
        return this.stepper.isActive(this.index);
    }

    protected get isVertical(): boolean {
        return this.stepper.orientation === 'vertical';
    }

    protected get tabIndex(): number {
        return this.isActive ? 0 : -1;
    }

    protected get index(): number {
        return this.stepper.indexOf(this.el);
    }

    protected activate(): void {
        this.stepper.activate(this.index);
    }
}
