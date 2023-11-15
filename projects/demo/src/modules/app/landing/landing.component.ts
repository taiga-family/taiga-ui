import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core';

@Component({
    selector: 'landing',
    templateUrl: './landing.template.html',
    styleUrls: ['./landing.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
    host: {
        '[class._hide]': 'hidden',
    },
    animations: [tuiFadeIn],
})
export class LandingComponent implements OnInit {
    @ViewChildren('block', {read: ElementRef})
    private readonly blocks: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    current = 0;

    intersected = false;

    constructor(
        @Inject(Router) private readonly router: Router,
        @Inject(ActivatedRoute) private readonly activatedRoute: ActivatedRoute,
        @Inject(LOCAL_STORAGE) protected readonly storage: Storage,
    ) {}

    async ngOnInit(): Promise<void> {
        await this.clearQueryParams();
    }

    get hidden(): boolean {
        return !!this.storage.getItem(`env`);
    }

    @HostBinding('style.background')
    get background(): string {
        return this.current ? '#5f6ed0' : '#3dc67c';
    }

    onIntersection(
        [{isIntersecting, target}]: IntersectionObserverEntry[],
        index: number,
    ): void {
        if (isIntersecting) {
            this.current = index;
            target.scrollIntoView({behavior: 'smooth'});
        }
    }

    onClick(): void {
        this.blocks.forEach(({nativeElement}, index) => {
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
