import {DOCUMENT, Location} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Inject,
} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {tuiPure, uniqBy} from '@taiga-ui/cdk';
import {getScreenWidth, TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {first, map, startWith} from 'rxjs/operators';
import {TuiDocPage} from '../../interfaces/page';
import {TUI_DOC_SEARCH_TEXT} from '../../tokens/i18n';
import {TuiDocPages} from '../../types/pages';
import {transliterateKeyboardLayout} from '../../utils/transliterate-keyboard-layout';
import {
    NAVIGATION_ITEMS,
    NAVIGATION_LABELS,
    NAVIGATION_PROVIDERS,
    NAVIGATION_TITLE,
} from './navigation.providers';

const SMALL_TABLET_SCREEN = 767;
const SCROLL_TO_ANCHOR_LINK_DELAY = 200;
const SCROLL_TO_ACTIVE_LINK_DELAY = 750;

// @dynamic
@Component({
    selector: 'tui-doc-navigation',
    templateUrl: 'navigation.template.html',
    styleUrls: ['navigation.style.less'],
    providers: NAVIGATION_PROVIDERS,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocNavigationComponent {
    search = '';
    open = false;
    menuOpen = false;
    openPagesArr: boolean[] = [];
    openPagesGroupsArr: boolean[] = [];

    readonly mode$: Observable<TuiBrightness> = this.mode.change$.pipe(
        startWith(null),
        map(() => this.mode.mode || 'onLight'),
    );

    constructor(
        @Inject(Title) titleService: Title,
        @Inject(Location) private readonly locationRef: Location,
        @Inject(NAVIGATION_TITLE) private title$: Observable<string>,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(TuiModeDirective)
        private readonly mode: TuiModeDirective,
        @Inject(NAVIGATION_LABELS) readonly labels: string[],
        @Inject(NAVIGATION_ITEMS)
        readonly items: ReadonlyArray<TuiDocPages>,
        @Inject(TUI_DOC_SEARCH_TEXT) readonly searchText: string,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        // Angular can't navigate no anchor links
        // https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor
        title$.subscribe(title => {
            titleService.setTitle(title);
            this.handleAnchorLink(locationRef.path(true));
        });

        this.syncNavigationPanel();
    }

    @HostBinding('class._open')
    get openMenu(): boolean {
        return this.menuOpen;
    }

    get canOpen(): boolean {
        return this.search.length > 2;
    }

    get filteredItems(): ReadonlyArray<ReadonlyArray<TuiDocPage>> {
        return this.filterItems(this.flattenSubPages(this.items), this.search);
    }

    onGroupClick(index: number) {
        this.openPagesGroupsArr[index] = !this.openPagesGroupsArr[index];
    }

    toggleMenu() {
        if (getScreenWidth(this.documentRef) <= SMALL_TABLET_SCREEN) {
            this.menuOpen = !this.menuOpen;
        }
    }

    onSearchChange(search: string) {
        this.search = search;
        this.open = this.canOpen;
    }

    onClick() {
        this.open = false;
        this.menuOpen = false;
        this.search = '';
        this.syncNavigationPanel();
    }

    @tuiPure
    private filterItems(
        items: ReadonlyArray<ReadonlyArray<TuiDocPage>>,
        search: string,
    ): ReadonlyArray<ReadonlyArray<TuiDocPage>> {
        return items.map(section =>
            uniqBy(
                section.filter(({title, keywords = ''}) => {
                    title = title.toLowerCase();
                    search = search.toLowerCase();
                    keywords = keywords.toLowerCase();

                    return (
                        title.includes(search) ||
                        keywords.includes(search) ||
                        title.includes(transliterateKeyboardLayout(search)) ||
                        keywords.includes(transliterateKeyboardLayout(search)) ||
                        search.replace(/-/gi, '').includes(title)
                    );
                }),
                'title',
            ),
        );
    }

    @tuiPure
    private flattenSubPages(
        items: ReadonlyArray<TuiDocPages>,
    ): ReadonlyArray<ReadonlyArray<TuiDocPage>> {
        return items.reduce<ReadonlyArray<ReadonlyArray<TuiDocPage>>>(
            (array, item) => [
                ...array,
                item.reduce<ReadonlyArray<TuiDocPage>>(
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

    @tuiPure
    private isCurrentPathEqualTo(route: string): boolean {
        return this.normalizeUrl(this.locationRef.path()) === this.normalizeUrl(route);
    }

    @tuiPure
    private normalizeUrl(url: string): string {
        return this.locationRef.normalize(url.replace(/^\/+/, ''));
    }

    private handleAnchorLink(path: string) {
        const lastIndex = path.lastIndexOf('#');
        const hash = lastIndex === -1 ? '' : path.substr(lastIndex);

        if (!hash) {
            return;
        }

        setTimeout(() => {
            this.navigateToAnchorLink(hash);
            this.animateExample(hash);
        }, SCROLL_TO_ANCHOR_LINK_DELAY);
    }

    private syncNavigationPanel() {
        this.title$.pipe(first()).subscribe(() => {
            this.openActivePageGroup();
            this.navigateToActiveLink();
            this.changeDetectorRef.markForCheck();
        });
    }

    private openActivePageGroup() {
        this.items.forEach((pages, pagesIndex) => {
            pages.forEach((page, pageIndex) => {
                if ('route' in page && this.isCurrentPathEqualTo(page.route)) {
                    this.openPagesArr[pagesIndex] = true;
                }

                if ('subPages' in page) {
                    page.subPages.forEach(subPage => {
                        if (this.isCurrentPathEqualTo(subPage.route)) {
                            this.openPagesArr[pagesIndex] = true;
                            this.openPagesGroupsArr[pageIndex] = true;
                        }
                    });
                }
            });
        });
    }

    private navigateToAnchorLink(hash: string) {
        this.scrollTo(hash, {
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        });
    }

    private navigateToActiveLink() {
        setTimeout(() => {
            this.scrollTo('.sublink_active', {
                block: 'center',
                behavior: 'smooth',
            });
        }, SCROLL_TO_ACTIVE_LINK_DELAY);
    }

    private scrollTo(selector: string, options?: ScrollIntoViewOptions) {
        const element = this.documentRef.querySelector(selector);

        if (!element) {
            return;
        }

        element.scrollIntoView(options);
    }

    private animateExample(fragment: string) {
        const element = this.documentRef.querySelector(fragment);

        if (element) {
            element.classList.add('tui-doc-animated-example');
        }
    }
}
