import {DOCUMENT, NgIf} from '@angular/common';
import type {AfterViewInit, OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile/services';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import type {TuiSwipeEvent} from '@taiga-ui/cdk/directives/swipe';
import {TuiSwipe} from '@taiga-ui/cdk/directives/swipe';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGetNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiDropdownMobile} from './dropdown-mobile.directive';

const GAP = 16;

@Component({
    standalone: true,
    selector: 'tui-dropdown-mobile',
    imports: [
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiSwipe,
        WaIntersectionObserver,
    ],
    templateUrl: './dropdown-mobile.template.html',
    styleUrls: ['./dropdown-mobile.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
    hostDirectives: [TuiActiveZone],
    host: {
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInTop]': 'animation',
        '[class._sheet]': 'directive.tuiDropdownMobile',
        '(document:click.zoneless.capture)': 'onClick($event)',
        '(window>scroll.zoneless.capture)':
            'refresh($event.currentTarget.visualViewport)',
        '(visualViewport>resize.zoneless)': 'refresh($event.target)',
        '(visualViewport>scroll.zoneless)': 'refresh($event.target)',
    },
})
export class TuiDropdownMobileComponent implements OnDestroy, AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly keyboard = inject(TuiKeyboardService);
    private readonly doc = inject(DOCUMENT);
    private readonly scrollTop = this.doc.documentElement.scrollTop;
    private readonly observer = new ResizeObserver(() =>
        this.refresh(this.doc.defaultView!.visualViewport!),
    );

    protected readonly directive = inject(TuiDropdownMobile);
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    } as const;

    constructor() {
        this.observer.observe(this.dropdown.el);
        this.doc.documentElement.style.setProperty('scroll-behavior', 'initial');
    }

    public ngAfterViewInit(): void {
        this.el.scrollTop = this.directive.tuiDropdownMobile ? this.el.clientHeight : 0;
    }

    public ngOnDestroy(): void {
        this.observer.disconnect();
        this.doc.body.classList.remove('t-dropdown-mobile');
        this.doc.body.style.removeProperty('--t-root-top');
        this.doc.documentElement.scrollTop = this.scrollTop;
        this.doc.documentElement.style.removeProperty('scroll-behavior');

        if (this.focused) {
            this.keyboard.hide();
        }
    }

    protected onClick(event: MouseEvent): void {
        if (
            tuiIsElement(event.target) &&
            !this.el.contains(event.target) &&
            (!this.dropdown.el.contains(event.target) ||
                event.target.matches('input,textarea'))
        ) {
            event.stopPropagation();
        }
    }

    protected onSwipe({direction}: TuiSwipeEvent, el: HTMLElement): void {
        if (
            direction === 'bottom' &&
            el.getBoundingClientRect().bottom > Number(this.doc.defaultView?.innerHeight)
        ) {
            this.close();
        }
    }

    protected onIntersection({isIntersecting}: IntersectionObserverEntry): void {
        if (isIntersecting) {
            this.close();
        }
    }

    protected close(): void {
        this.dropdown.toggle(false);
    }

    protected refresh({offsetTop, height}: VisualViewport): void {
        this.doc.body.style.removeProperty('--t-root-top');

        if (
            !this.focused ||
            this.directive.tuiDropdownMobile ||
            !this.doc.documentElement.style.getPropertyValue('scroll-behavior')
        ) {
            return;
        }

        this.doc.documentElement.scrollTop = 0;

        const rect = this.dropdown.el.getBoundingClientRect();
        const top = offsetTop + GAP - rect.top;
        const offset = rect.height + GAP * 2;

        this.el.style.setProperty('top', tuiPx(offsetTop + offset));
        this.el.style.setProperty('height', tuiPx(height - offset));
        this.doc.body.classList.add('t-dropdown-mobile');
        this.doc.body.style.setProperty('--t-root-top', tuiPx(top));
    }

    private get focused(): boolean {
        return this.dropdown.el.contains(tuiGetNativeFocused(this.doc));
    }
}
