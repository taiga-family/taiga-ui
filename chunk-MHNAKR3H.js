import"./chunk-HU6DUUP4.js";var r=`import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    type OnInit,
    viewChildren,
} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {
    WA_INTERSECTION_ROOT,
    WaIntersectionObserver,
} from '@ng-web-apis/intersection-observer';
import {TuiAnimated, TuiAutoFocus, tuiProvide} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiAnimated, TuiAutoFocus, TuiButton, WaIntersectionObserver],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(WA_INTERSECTION_ROOT, ElementRef)],
    host: {
        tuiTheme: 'light',
        '[class._hide]': 'hidden',
        '[style.background]': 'background',
    },
})
export default class Page implements OnInit {
    private readonly blocks = viewChildren('block', {read: ElementRef});
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    protected readonly storage = inject(WA_LOCAL_STORAGE);
    protected readonly routes = DemoRoute;

    protected current = 0;

    protected intersected = false;

    public ngOnInit(): void {
        void this.clearQueryParams();
    }

    protected get background(): string {
        return this.current ? '#5f6ed0' : '#3dc67c';
    }

    protected get hidden(): boolean {
        return !!this.storage?.getItem('env');
    }

    protected onIntersection(
        {isIntersecting, target}: IntersectionObserverEntry,
        index: number,
    ): void {
        if (isIntersecting) {
            this.current = index;
            target.scrollIntoView({behavior: 'smooth'});
        }
    }

    protected onClick(): void {
        this.blocks().forEach(({nativeElement}, index) => {
            if (index === this.current + 1) {
                nativeElement.scrollIntoView({behavior: 'smooth'});
            }
        });
    }

    private async clearQueryParams(): Promise<void> {
        await this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParamsHandling: '',
            queryParams: {},
        });
    }
}
`;export{r as default};
