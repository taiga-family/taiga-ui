import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile/services';
import {tuiGetNativeFocused, tuiPx} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DURATION,
    TuiDropdownDirective,
    tuiFadeIn,
    tuiSlideInTop,
} from '@taiga-ui/core';

const GAP = 16;

@Component({
    selector: 'tui-dropdown-mobile',
    templateUrl: './dropdown-mobile.template.html',
    styleUrls: ['./dropdown-mobile.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInTop]': 'animation',
        '(mousedown.silent.prevent)': '0',
        '(document:click.silent.capture)': 'onClick($event)',
        '(window>scroll.silent.capture)': 'refresh($event.currentTarget.visualViewport)',
        '(visualViewport>resize.silent)': 'refresh($event.target)',
        '(visualViewport>scroll.silent)': 'refresh($event.target)',
    },
})
export class TuiDropdownMobileComponent implements OnDestroy {
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
        @Inject(TuiKeyboardService) private readonly keyboard: TuiKeyboardService,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(TuiDropdownDirective) readonly directive: TuiDropdownDirective,
    ) {
        this.observer.observe(this.directive.el.nativeElement);
    }

    onClick(event: MouseEvent): void {
        if (!this.el.nativeElement?.contains(event.target as Node)) {
            event.stopPropagation();
        }
    }

    refresh({offsetTop, height}: VisualViewport): void {
        this.doc.body.style.removeProperty('--t-top');

        if (!this.focused) {
            return;
        }

        const rect = this.directive.el.nativeElement.getBoundingClientRect();
        const offset = rect.height + GAP * 2;

        this.el.nativeElement.style.setProperty('top', tuiPx(offsetTop + offset));
        this.el.nativeElement.style.setProperty('height', tuiPx(height - offset));
        this.doc.body.classList.add('t-dropdown-mobile');
        this.doc.body.style.setProperty('--t-top', tuiPx(offsetTop + GAP - rect.top));
        this.doc.documentElement.scrollTop = this.scrollTop;
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
        this.doc.body.classList.remove('t-dropdown-mobile');
        this.doc.body.style.removeProperty('--t-top');

        if (this.focused) {
            this.keyboard.hide();
        }
    }

    private get focused(): boolean {
        return this.directive.el.nativeElement.contains(tuiGetNativeFocused(this.doc));
    }
}
