import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {TuiVisualViewportService} from '@taiga-ui/core/services';
import {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core/tokens';

const GAP = 16;

@Component({
    selector: 'tui-dropdown-mobile',
    templateUrl: './dropdown-mobile.template.html',
    styleUrls: ['./dropdown-mobile.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiDropdownMobileComponent implements OnDestroy {
    private readonly observer = new ResizeObserver(() =>
        this.refresh(this.doc.defaultView!.visualViewport),
    );

    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    readonly animation = {
        value: '',
        params: {
            start: '100vh',
            duration: this.duration,
        },
    } as const;

    constructor(
        @Inject(TuiVisualViewportService)
        private readonly vvs: TuiVisualViewportService,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(TuiDropdownDirective) readonly directive: TuiDropdownDirective,
    ) {
        this.observer.observe(this.directive.el.nativeElement);
    }

    @HostListener('document:click.silent.capture', ['$event'])
    onClick(event: MouseEvent): void {
        if (!this.el.nativeElement?.contains(event.target as Node)) {
            event.stopPropagation();
        }
    }

    @HostListener('window>scroll.silent.capture', ['$event.currentTarget.visualViewport'])
    @HostListener('visualViewport>resize.silent', ['$event.target'])
    @HostListener('visualViewport>scroll.silent', ['$event.target'])
    refresh({offsetTop, height}: VisualViewport): void {
        this.doc.body.style.removeProperty('--t-top');

        const rect = this.directive.el.nativeElement.getBoundingClientRect();
        const offset = rect.height + GAP * 2;

        this.el.nativeElement.style.setProperty('top', tuiPx(offsetTop + offset));
        this.el.nativeElement.style.setProperty('height', tuiPx(height - offset));
        this.doc.body.classList.add('t-dropdown-mobile');
        this.doc.body.style.setProperty(
            '--t-top',
            tuiPx(offsetTop + GAP - this.vvs.correctY(rect.top)),
        );
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
        this.doc.body.classList.remove('t-dropdown-mobile');
        this.doc.body.style.removeProperty('--t-top');
    }
}
