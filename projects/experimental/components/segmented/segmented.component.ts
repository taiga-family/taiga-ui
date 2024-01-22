import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    OnChanges,
    Output,
    Self,
    ViewEncapsulation,
} from '@angular/core';
import {
    TuiDestroyService,
    tuiIsHTMLElement,
    tuiPx,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/experimental/components/badge-notification';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-segmented',
    template: '<ng-content></ng-content>',
    styleUrls: ['./segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiResizeService,
        tuiBadgeNotificationOptionsProvider({size: 's'}),
    ],
})
export class TuiSegmentedComponent implements OnChanges {
    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeS = 's';

    @Input()
    activeItemIndex = 0;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiResizeService) resize$: Observable<unknown>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    ) {
        resize$.pipe(takeUntil(destroy$)).subscribe(() => this.refresh());
    }

    get tabs(): HTMLCollection {
        return this.el.nativeElement.children;
    }

    ngOnChanges(): void {
        this.refresh();
    }

    update(activeItemIndex: number): void {
        if (activeItemIndex === this.activeItemIndex) {
            return;
        }

        this.activeItemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
        this.refresh();
    }

    private get left(): number {
        const element = this.activeElement;

        return tuiIsHTMLElement(element) ? element.offsetLeft : 0;
    }

    private get width(): number {
        return this.activeElement?.clientWidth || 0;
    }

    private get activeElement(): Element | null {
        return this.tabs.item(this.activeItemIndex);
    }

    // TODO: Switch to HostBinding signals in Angular 17+
    private refresh(): void {
        this.el.nativeElement.style.setProperty('--t-left', tuiPx(this.left));
        this.el.nativeElement.style.setProperty('--t-width', tuiPx(this.width));
    }
}
