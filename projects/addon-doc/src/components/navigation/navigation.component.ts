import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Inject,
    Optional,
} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiSidebarDirective} from '@taiga-ui/addon-mobile';
import {TuiDestroyService, tuiPure, tuiUniqBy} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {filter, map, startWith, take, takeUntil} from 'rxjs/operators';

import {TuiDocPage} from '../../interfaces/page';
import {TUI_DOC_SEARCH_TEXT} from '../../tokens/i18n';
import {TUI_DOC_PAGE_LOADED} from '../../tokens/page-loaded';
import {TUI_DOC_SCROLL_BEHAVIOR} from '../../tokens/scroll-behavior';
import {TuiDocPages} from '../../types/pages';
import {tuiTransliterateKeyboardLayout} from '../../utils/transliterate-keyboard-layout';
import {
    NAVIGATION_ITEMS,
    NAVIGATION_LABELS,
    NAVIGATION_PROVIDERS,
    NAVIGATION_TITLE,
} from './navigation.providers';

@Component({
    selector: `tui-doc-navigation`,
    templateUrl: `navigation.template.html`,
    styleUrls: [`navigation.style.less`],
    providers: NAVIGATION_PROVIDERS,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocNavigationComponent {
    @HostBinding(`class._open`)
    menuOpen = false;

    search = ``;
    open = false;
    openPagesArr: boolean[] = [];
    openPagesGroupsArr: boolean[] = [];
    active = ``;

    readonly mode$: Observable<TuiBrightness> = this.mode.change$.pipe(
        startWith(null),
        map(() => this.mode.mode || `onLight`),
    );

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(Title) titleService: Title,
        @Inject(NAVIGATION_TITLE) title$: Observable<string>,
        @Inject(DOCUMENT) private readonly documentRef: Document,
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
        @Inject(ActivatedRoute) private readonly activatedRoute: ActivatedRoute,
        @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
        @Inject(TUI_DOC_PAGE_LOADED)
        private readonly readyToScroll$: Observable<boolean>,
        @Inject(TUI_DOC_SCROLL_BEHAVIOR) private readonly scrollBehavior: ScrollBehavior,
    ) {
        // Angular can't navigate no anchor links
        // https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor
        title$.subscribe(title => {
            changeDetectorRef.markForCheck();
            titleService.setTitle(title);
            this.openActivePageGroup();
            this.handleAnchorLink(this.activatedRoute.snapshot.fragment!);
        });
    }

    get canOpen(): boolean {
        return this.search.length > 2;
    }

    get filteredItems(): ReadonlyArray<readonly TuiDocPage[]> {
        return this.filterItems(this.flattenSubPages(this.items), this.search);
    }

    get itemsWithoutSections(): TuiDocPages {
        return this.items[this.items.length - 1];
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

    onSearchChange(search: string): void {
        this.search = search;
        this.open = this.canOpen;
    }

    onClick(): void {
        this.open = false;
        this.menuOpen = false;
        this.search = ``;
        this.openActivePageGroup();
    }

    @tuiPure
    private filterItems(
        items: ReadonlyArray<readonly TuiDocPage[]>,
        search: string,
    ): ReadonlyArray<readonly TuiDocPage[]> {
        return items.map(section =>
            tuiUniqBy(
                section.filter(({title, keywords = ``}) => {
                    title = title.toLowerCase();
                    search = search.toLowerCase();
                    keywords = keywords.toLowerCase();

                    return (
                        title.includes(search) ||
                        keywords.includes(search) ||
                        title.includes(tuiTransliterateKeyboardLayout(search)) ||
                        keywords.includes(tuiTransliterateKeyboardLayout(search)) ||
                        search.replace(/-/gi, ``).includes(title)
                    );
                }),
                `title`,
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
                        `subPages` in page
                            ? [...pages, ...page.subPages]
                            : [...pages, page],
                    [],
                ),
            ],
            [],
        );
    }

    private isActiveRoute(route: string): boolean {
        return this.router.isActive(route, false);
    }

    private handleAnchorLink(hash: string): void {
        this.readyToScroll$
            .pipe(filter(Boolean), take(1), takeUntil(this.destroy$))
            .subscribe(() => this.navigateToAnchorLink(hash));
    }

    private openActivePageGroup(): void {
        this.items.forEach((pages, pagesIndex) => {
            pages.forEach((page, pageIndex) => {
                if (`route` in page && this.isActiveRoute(page.route)) {
                    this.openPagesArr[pagesIndex] = true;
                    this.active = page.route;
                }

                if (`subPages` in page) {
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
        const element = fragment && this.documentRef.querySelector(`#${fragment}`);

        if (!element) {
            return;
        }

        element.classList.add(`tui-doc-animated-example`);
        element.scrollIntoView({
            block: `start`,
            inline: `nearest`,
            behavior: this.scrollBehavior,
        });
    }
}
