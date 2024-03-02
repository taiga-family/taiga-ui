import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    NgZone,
    type OnChanges,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiDestroyService, tuiIsHTMLElement, tuiPx, tuiZonefree} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/experimental/components/badge-notification';
import {takeUntil} from 'rxjs';

import {TuiSegmentedDirective} from './segmented.directive';

@Component({
    standalone: true,
    selector: 'tui-segmented',
    template: '<ng-content></ng-content>',
    styleUrls: ['./segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiSegmentedDirective],
    providers: [
        TuiDestroyService,
        ResizeObserverService,
        tuiBadgeNotificationOptionsProvider({size: 's'}),
    ],
})
export class TuiSegmentedComponent implements OnChanges {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    // @ts-ignore
    private readonly sub = inject(ResizeObserverService)
        .pipe(
            tuiZonefree(inject(NgZone)),
            takeUntil(inject(TuiDestroyService, {self: true})),
        )
        .subscribe(() => this.refresh());

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeS = 's';

    @Input()
    public activeItemIndex = 0;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public ngOnChanges(): void {
        this.refresh();
    }

    public update(activeItemIndex: number): void {
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
        return this.el.children.item(this.activeItemIndex);
    }

    // TODO: Switch to HostBinding signals in Angular 17+
    private refresh(): void {
        this.el.style.setProperty('--t-left', tuiPx(this.left));
        this.el.style.setProperty('--t-width', tuiPx(this.width));
    }
}
