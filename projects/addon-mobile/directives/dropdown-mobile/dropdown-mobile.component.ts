import {DOCUMENT} from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile/services';
import {
    TuiActiveZoneDirective,
    tuiGetNativeFocused,
    tuiPx,
    TuiSwipe,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DURATION,
    TuiDropdownDirective,
    tuiFadeIn,
    tuiSlideInTop,
} from '@taiga-ui/core';

import {TuiDropdownMobileDirective} from './dropdown-mobile.directive';

const GAP = 16;

@Component({
    selector: 'tui-dropdown-mobile',
    templateUrl: './dropdown-mobile.template.html',
    styleUrls: ['./dropdown-mobile.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiActiveZoneDirective],
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInTop]': 'animation',
        '[class._sheet]': 'directive.tuiDropdownMobile',
        '(mousedown.silent.prevent)': '0',
        '(document:click.silent.capture)': 'onClick($event)',
        '(window>scroll.silent.capture)': 'refresh($event.currentTarget.visualViewport)',
        '(visualViewport>resize.silent)': 'refresh($event.target)',
        '(visualViewport>scroll.silent)': 'refresh($event.target)',
    },
})
export class TuiDropdownMobileComponent implements OnDestroy, AfterViewInit {
    private readonly scrollTop = this.doc.documentElement.scrollTop;
    private readonly observer = new ResizeObserver(() =>
        this.refresh(this.doc.defaultView!.visualViewport),
    );

    readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: this.duration,
        },
    } as const;

    constructor(
        @Inject(TuiActiveZoneDirective) _: any,
        @Inject(TuiKeyboardService) private readonly keyboard: TuiKeyboardService,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(ElementRef) readonly el: ElementRef<HTMLElement>,
        @Inject(TuiDropdownDirective) readonly dropdown: TuiDropdownDirective,
        @Inject(TuiDropdownMobileDirective)
        readonly directive: TuiDropdownMobileDirective,
    ) {
        this.observer.observe(this.dropdown.el.nativeElement);
        this.doc.documentElement.style.setProperty('scroll-behavior', 'initial');
    }

    onClick(event: MouseEvent): void {
        if (!this.el.nativeElement.contains(event.target as Node)) {
            event.stopPropagation();
        }
    }

    onSwipe({direction}: TuiSwipe, el: HTMLElement): void {
        if (
            direction === 'bottom' &&
            el.getBoundingClientRect().bottom > Number(this.doc.defaultView?.innerHeight)
        ) {
            this.close();
        }
    }

    onIntersection([{isIntersecting}]: IntersectionObserverEntry[]): void {
        if (isIntersecting) {
            this.close();
        }
    }

    close(): void {
        this.dropdown.toggle(false);
    }

    refresh({offsetTop, height}: VisualViewport): void {
        this.doc.body.style.removeProperty('--t-root-top');

        if (
            !this.focused ||
            this.directive.tuiDropdownMobile ||
            !this.doc.documentElement.style.getPropertyValue('scroll-behavior')
        ) {
            return;
        }

        const rect = this.dropdown.el.nativeElement.getBoundingClientRect();
        const offset = rect.height + GAP * 2;

        this.el.nativeElement.style.setProperty('top', tuiPx(offsetTop + offset));
        this.el.nativeElement.style.setProperty('height', tuiPx(height - offset));
        this.doc.body.classList.add('t-dropdown-mobile');
        this.doc.documentElement.scrollTop = 0;
        this.doc.body.style.setProperty(
            '--t-root-top',
            tuiPx(offsetTop + GAP - rect.top),
        );
    }

    ngAfterViewInit(): void {
        this.el.nativeElement.scrollTop = this.directive.tuiDropdownMobile
            ? this.el.nativeElement.clientHeight
            : 0;
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
        this.doc.body.classList.remove('t-dropdown-mobile');
        this.doc.body.style.removeProperty('--t-root-top');
        this.doc.documentElement.scrollTop = this.scrollTop;
        this.doc.documentElement.style.removeProperty('scroll-behavior');

        if (this.focused) {
            this.keyboard.hide();
        }
    }

    private get focused(): boolean {
        return this.dropdown.el.nativeElement.contains(tuiGetNativeFocused(this.doc));
    }
}
