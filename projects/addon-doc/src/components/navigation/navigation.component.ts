import {DOCUMENT, Location} from '@angular/common';
import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {tuiPure, uniqBy} from '@taiga-ui/cdk';
import {getScreenWidth} from '@taiga-ui/core';
import {Observable} from 'rxjs';
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
const SCROLL_INTO_VIEW_DELAY = 200;

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
    openGroupsArr: boolean[] = [];

    constructor(
        @Inject(Title) titleService: Title,
        @Inject(Location) locationRef: Location,
        @Inject(NAVIGATION_TITLE) title$: Observable<string>,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(NAVIGATION_LABELS) readonly labels: string,
        @Inject(NAVIGATION_ITEMS)
        readonly items: ReadonlyArray<TuiDocPages>,
        @Inject(TUI_DOC_SEARCH_TEXT) readonly searchText: string,
    ) {
        // Angular can't navigate no anchor links
        // https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor
        title$.subscribe(title => {
            titleService.setTitle(title);
            this.handleAnchorLink(locationRef.path(true));
        });
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
        this.openGroupsArr[index] = !this.openGroupsArr[index];
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

    private handleAnchorLink(path: string) {
        const lastIndex = path.lastIndexOf('#');
        const hash = lastIndex === -1 ? '' : path.substr(lastIndex);

        if (!hash) {
            return;
        }

        setTimeout(() => {
            this.navigateToAnchorLink(hash);
            this.animateExample(hash);
        }, SCROLL_INTO_VIEW_DELAY);
    }

    private navigateToAnchorLink(fragment: string) {
        const element = this.documentRef.querySelector(fragment);

        if (!element) {
            return;
        }

        element.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        });
    }

    private animateExample(fragment: string) {
        const element = this.documentRef.querySelector(fragment);

        if (element) {
            element.classList.add('tui-doc-animated-example');
        }
    }
}
