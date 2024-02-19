import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Inject,
    Optional,
    Self,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, Scroll} from '@angular/router';
import {TuiDocPage} from '@taiga-ui/addon-doc/interfaces';
import {
    TUI_DOC_ICONS,
    TUI_DOC_PAGE_LOADED,
    TUI_DOC_SEARCH_TEXT,
    TuiDocIcons,
} from '@taiga-ui/addon-doc/tokens';
import {TuiDocPages} from '@taiga-ui/addon-doc/types';
import {tuiTransliterateKeyboardLayout} from '@taiga-ui/addon-doc/utils';
import {TuiSidebarDirective} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDestroyService, tuiPure, tuiUniqBy} from '@taiga-ui/cdk';
import {
    TUI_COMMON_ICONS,
    TuiBrightness,
    TuiCommonIcons,
    TuiModeDirective,
} from '@taiga-ui/core';
import {TuiInputComponent} from '@taiga-ui/kit';
import {
    combineLatest,
    filter,
    map,
    Observable,
    startWith,
    switchMap,
    take,
    takeUntil,
} from 'rxjs';

import {
    NAVIGATION_ITEMS,
    NAVIGATION_LABELS,
    NAVIGATION_PROVIDERS,
    NAVIGATION_TITLE,
} from './navigation.providers';

@Component({
    selector: 'tui-doc-navigation',
    templateUrl: './navigation.template.html',
    styleUrls: ['./navigation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: NAVIGATION_PROVIDERS,
})
export class TuiDocNavigationComponent {
    @HostBinding('class._open')
    menuOpen = false;

    openPagesArr: boolean[] = [];
    openPagesGroupsArr: boolean[] = [];
    active = '';

    readonly search = new FormControl('');

    readonly filtered$ = tuiControlValue<string>(this.search).pipe(
        filter(search => search.trim().length > 2),
        map(search => this.filterItems(this.flattenSubPages(this.items), search)),
    );

    readonly mode$: Observable<TuiBrightness> = this.mode.change$.pipe(
        startWith(null),
        map(() => this.mode.mode || 'onLight'),
    );

    constructor(
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(Title) titleService: Title,
        @Inject(NAVIGATION_TITLE) private readonly title$: Observable<string>,
        @Inject(TuiModeDirective)
        private readonly mode: TuiModeDirective,
        @Optional()
        @Inject(TuiSidebarDirective)
        readonly sidebar: unknown,
        @Inject(NAVIGATION_LABELS) readonly labels: string[],
        @Inject(NAVIGATION_ITEMS)
        readonly items: readonly TuiDocPages[],
        @Inject(TUI_DOC_SEARCH_TEXT) readonly searchText: string,
        @Inject(Router) private readonly router: Router,
        @Inject(ActivatedRoute) readonly activatedRoute: ActivatedRoute,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(TUI_DOC_PAGE_LOADED)
        private readonly readyToScroll$: Observable<boolean>,
        @Inject(TUI_DOC_ICONS) readonly docIcons: TuiDocIcons,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
        @Inject(DOCUMENT) private readonly doc: Document,
    ) {
        title$.subscribe(title => {
            cdr.markForCheck();
            titleService.setTitle(title);
            this.openActivePageGroup();
        });

        combineLatest([
            this.router.events.pipe(
                filter((event): event is Scroll => event instanceof Scroll),
            ),
            this.title$.pipe(switchMap(() => this.readyToScroll$.pipe(filter(Boolean)))),
        ])
            .pipe(
                take(1),
                map(([event]) => event.anchor || ''),
                filter<string>(Boolean),
                takeUntil(this.destroy$),
            )
            .subscribe(anchor => this.navigateToAnchorLink(anchor));
    }

    get canOpen(): boolean {
        return (this.search.value?.length ?? 0) > 2;
    }

    get itemsWithoutSections(): TuiDocPages {
        return this.items[this.items.length - 1];
    }

    $pages(pages: any): readonly TuiDocPage[] {
        return pages as TuiDocPage[];
    }

    isActive(route: string): boolean {
        return route === this.active;
    }

    onGroupClick(index: number): void {
        this.openPagesGroupsArr[index] = !this.openPagesGroupsArr[index];
    }

    closeMenu(): void {
        this.menuOpen = false;
    }

    onClick(input: TuiInputComponent): void {
        input.open = false;
        this.menuOpen = false;
        this.search.setValue('');
        this.openActivePageGroup();
    }

    @tuiPure
    private filterItems(
        items: ReadonlyArray<readonly TuiDocPage[]>,
        search: string,
    ): ReadonlyArray<readonly TuiDocPage[]> {
        return items.map(section =>
            tuiUniqBy(
                section.filter(({title, keywords = ''}) => {
                    search = search.toLowerCase().trim();
                    keywords = keywords.toLowerCase();
                    title = title.toLowerCase();

                    return (
                        title.includes(search) ||
                        keywords.includes(search) ||
                        title.includes(tuiTransliterateKeyboardLayout(search)) ||
                        keywords.includes(tuiTransliterateKeyboardLayout(search)) ||
                        search.replaceAll('-', '').includes(title) ||
                        title.includes(search.replaceAll(/\s|tui/g, '')) ||
                        keywords.includes(search.replaceAll(/\s|tui/g, '')) ||
                        search.split(/\s/).find(word => title.includes(word))
                    );
                }),
                'title',
            ),
        );
    }

    @tuiPure
    private flattenSubPages(
        items: readonly TuiDocPages[],
    ): ReadonlyArray<readonly TuiDocPage[]> {
        return items.reduce<ReadonlyArray<readonly TuiDocPage[]>>(
            (array, item) => [
                ...array,
                item.reduce<readonly TuiDocPage[]>(
                    (pages, page) =>
                        'subPages' in page
                            ? [...pages, ...page.subPages]
                            : [...pages, page],
                    [],
                ),
            ],
            [],
        );
    }

    private isActiveRoute(route: string): boolean {
        return this.router.isActive(route, {
            paths: 'subset',
            queryParams: 'subset',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }

    private openActivePageGroup(): void {
        this.items.forEach((pages, pagesIndex) => {
            pages.forEach((page, pageIndex) => {
                if ('route' in page && this.isActiveRoute(page.route)) {
                    this.openPagesArr[pagesIndex] = true;
                    this.active = page.route;
                }

                if ('subPages' in page) {
                    page.subPages.forEach(subPage => {
                        if (this.isActiveRoute(subPage.route)) {
                            this.openPagesArr[pagesIndex] = true;
                            this.openPagesGroupsArr[pagesIndex * 100 + pageIndex] = true;
                            this.active = subPage.route;
                        }
                    });
                }
            });
        });
    }

    private navigateToAnchorLink(fragment: string): void {
        const nodes = fragment ? this.doc.querySelectorAll(`#${fragment}`) : [];
        const element = nodes.length && nodes[nodes.length - 1];

        if (!element) {
            return;
        }

        // emulate :target event
        const target = this.doc.createElement('a');

        target.href = `${this.doc.location.pathname}#${fragment}`;
        target.style.display = 'none';
        target.style.position = 'absolute';
        this.doc.body.appendChild(target);
        target.click();
        target.remove();
    }
}
