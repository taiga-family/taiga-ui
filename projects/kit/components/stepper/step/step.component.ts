import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService, TuiFocusVisibleService} from '@taiga-ui/cdk';
import {TuiRouterLinkActiveService} from '@taiga-ui/core';
import {identity, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

import {TuiStepperComponent} from '../stepper.component';

@Component({
    selector: `button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]`,
    templateUrl: `./step.template.html`,
    styleUrls: [`./step.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiRouterLinkActiveService, TuiFocusVisibleService],
    host: {
        type: `button`,
    },
})
export class TuiStepComponent {
    @Input()
    @HostBinding(`attr.data-state`)
    @tuiDefaultProp()
    state: 'normal' | 'pass' | 'error' = `normal`;

    @Input()
    @tuiDefaultProp()
    icon = ``;

    @HostBinding(`class._focus-visible`)
    focusVisible = false;

    constructor(
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
        @Inject(TuiRouterLinkActiveService) routerLinkActive$: Observable<boolean>,
        @Inject(TuiStepperComponent) private readonly stepper: TuiStepperComponent,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        routerLinkActive$.pipe(filter(identity)).subscribe(() => {
            this.activate();
        });

        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    @HostBinding(`class._active`)
    get isActive(): boolean {
        return this.stepper.isActive(this.index);
    }

    @HostBinding(`class._vertical`)
    get isVertical(): boolean {
        return this.stepper.orientation === `vertical`;
    }

    @HostBinding(`tabIndex`)
    get tabIndex(): number {
        return this.isActive ? 0 : -1;
    }

    get index(): number {
        return this.stepper.indexOf(this.elementRef.nativeElement);
    }

    @HostListener(`click`)
    activate(): void {
        this.stepper.activate(this.index);
    }
}
