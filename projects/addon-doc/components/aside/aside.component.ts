import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    NgZone,
    OnInit,
    Self,
} from '@angular/core';
import {Router} from '@angular/router';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDestroyService, tuiZonefree} from '@taiga-ui/cdk';
import {BehaviorSubject, fromEvent, Observable, Subscription, timer} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

export interface TuiAsideMenu {
    id: string;
    title: string;
}

@Component({
    selector: 'tui-doc-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    host: {'[class._empty]': '!menuList.length'},
})
export class TuiDocAsideComponent implements OnInit {
    private readonly navigating = new BehaviorSubject<boolean>(false);
    private timer: Subscription | null = null;

    menuList: readonly TuiAsideMenu[] = [];
    activeIndex = 0;

    @Input()
    set menu(menuList: readonly TuiAsideMenu[] | null) {
        this.menuList = menuList ?? [];
        this.waitAnchorScrolling();
    }

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(WINDOW) private readonly win: Window,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) readonly cd: ChangeDetectorRef,
        @Inject(Router) private readonly router: Router,
    ) {}

    ngOnInit(): void {
        fromEvent(this.win, 'scroll')
            .pipe(
                filter(() => !this.navigating.value),
                tuiZonefree(this.ngZone),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                const list = this.menuList
                    .map((item, index) => {
                        const element = this.getElement(item.id);
                        const percent = percentInView(this.win, element);

                        return {...item, index, percent};
                    })
                    .filter(({percent}) => percent > 0);
                const intersected =
                    list
                        .concat()
                        .reverse()
                        .find(item => item.percent === 1) ?? list[0];

                this.activeIndex = intersected?.index ?? 0;
                this.cd.detectChanges();
            });
    }

    go(id: string): void {
        this.doc.location.hash = id;
        this.getElement(id)?.scrollIntoView();
        this.waitAnchorScrolling();
    }

    private waitAnchorScrolling(): void {
        this.activeIndex = this.getFragmentIndex();
        this.navigating.next(true);
        this.timer?.unsubscribe();
        this.timer = timer(1000).subscribe(() => this.navigating.next(false));
    }

    private getElement(id: string): HTMLElement | null {
        return this.win.document.querySelector(`#${id}`) || null;
    }

    private getFragmentIndex(): number {
        const [, fragment = ''] = this.router.url.split('#') ?? [];
        const index = this.menuList.findIndex(({id}) => id === fragment);

        return index !== -1 ? index : 0;
    }
}

function percentInView(win: Window, div?: Element | null): number {
    if (!div) {
        return 0;
    }

    const rect = div.getBoundingClientRect();
    const dimension: Partial<DOMRect> = {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
    };
    const viewport: Partial<DOMRect> = {
        x: 0,
        y: 0,
        width: win.innerWidth,
        height: win.innerHeight,
    };
    const size = (dimension.width ?? 0) * (dimension.height ?? 0);
    const overlap = intersection(dimension, viewport);

    return Math.round((overlap / size) * 100) / 100;
}

function intersection(r1: Partial<DOMRect>, r2: Partial<DOMRect>): number {
    return (
        Math.max(
            0,
            Math.min((r1.x ?? 0) + (r1.width ?? 0), (r2.x ?? 0) + (r2.width ?? 0)) -
                Math.max(r1.x ?? 0, r2.x ?? 0),
        ) *
        Math.max(
            0,
            Math.min((r1.y ?? 0) + (r1.height ?? 0), (r2.y ?? 0) + (r2.height ?? 0)) -
                Math.max(r1.y ?? 0, r2.y ?? 0),
        )
    );
}
