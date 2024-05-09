import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {TUI_COMMON_ICONS} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {EMPTY, filter} from 'rxjs';

import {TuiStepperComponent} from '../stepper.component';

@Component({
    selector:
        'button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]',
    templateUrl: './step.template.html',
    styleUrls: ['./step.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        type: 'button',
    },
})
export class TuiStepComponent {
    private readonly stepper = inject(TuiStepperComponent);
    private readonly el = tuiInjectElement();
    private readonly routerLinkActive$: Observable<boolean> =
        inject(RouterLinkActive, {optional: true})?.isActiveChange || EMPTY;

    @Input()
    @HostBinding('attr.data-state')
    public stepState: 'error' | 'normal' | 'pass' = 'normal';

    @Input()
    public icon = '';

    @HostBinding('class._focus-visible')
    protected focusVisible = false;

    protected readonly icons = inject(TUI_COMMON_ICONS);

    constructor() {
        this.routerLinkActive$.pipe(filter(Boolean)).subscribe(() => {
            this.activate();
        });
    }

    @HostBinding('class._active')
    protected get isActive(): boolean {
        return this.stepper.isActive(this.index);
    }

    @HostBinding('class._vertical')
    protected get isVertical(): boolean {
        return this.stepper.orientation === 'vertical';
    }

    @HostBinding('tabIndex')
    protected get tabIndex(): number {
        return this.isActive ? 0 : -1;
    }

    protected get index(): number {
        return this.stepper.indexOf(this.el);
    }

    @HostListener('click')
    protected activate(): void {
        this.stepper.activate(this.index);
    }
}
