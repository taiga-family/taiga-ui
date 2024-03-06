import {NgIf} from '@angular/common';
import type {OnInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    ViewChildren,
} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {
    INTERSECTION_ROOT,
    IntersectionObserverModule,
} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY, TuiAutoFocusModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    selector: 'landing',
    imports: [
        NgIf,
        RouterLink,
        TuiButtonModule,
        TuiAutoFocusModule,
        TuiRepeatTimesModule,
        IntersectionObserverModule,
    ],
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
export default class LandingComponent implements OnInit {
    @ViewChildren('block', {read: ElementRef})
    private readonly blocks: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    protected readonly storage = inject(LOCAL_STORAGE);

    protected current = 0;

    protected intersected = false;

    public async ngOnInit(): Promise<void> {
        await this.clearQueryParams();
    }

    @HostBinding('style.background')
    protected get background(): string {
        return this.current ? '#5f6ed0' : '#3dc67c';
    }

    protected get hidden(): boolean {
        return !!this.storage.getItem('env');
    }

    protected onIntersection(
        [{isIntersecting, target}]: IntersectionObserverEntry[],
        index: number,
    ): void {
        if (isIntersecting) {
            this.current = index;
            target.scrollIntoView({behavior: 'smooth'});
        }
    }

    protected onClick(): void {
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
