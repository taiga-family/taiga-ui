import {DOCUMENT, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    signal,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Router, RouterLink, RouterLinkActive, Scroll} from '@angular/router';
import {
    TUI_DOC_ICONS,
    TUI_DOC_PAGE_LOADED,
    TUI_DOC_SEARCH_ENABLED,
    TUI_DOC_SEARCH_TEXT,
} from '@taiga-ui/addon-doc/tokens';
import type {TuiDocRoutePage, TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {tuiTransliterateKeyboardLayout} from '@taiga-ui/addon-doc/utils';
import {TuiSidebarDirective} from '@taiga-ui/addon-mobile/directives/sidebar';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {tuiControlValue, tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiPure, tuiUniqBy} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiTextfield, TuiTextfieldDirective} from '@taiga-ui/core/components/textfield';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiAccordion} from '@taiga-ui/kit/components/accordion';
import {TuiInputModule} from '@taiga-ui/legacy/components/input';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives/textfield-controller';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {combineLatest, filter, fromEvent, map, of, switchMap, take} from 'rxjs';

import {
    NAVIGATION_ITEMS,
    NAVIGATION_LABELS,
    NAVIGATION_PROVIDERS,
    NAVIGATION_TITLE,
} from './navigation.providers';
import {TuiDocScrollIntoViewLink} from './scroll-into-view.directive';

@Component({
    standalone: true,
    selector: 'tui-doc-navigation',
    imports: [
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        ReactiveFormsModule,
        RouterLink,
        RouterLinkActive,
        TuiAccordion,
        TuiAutoFocus,
        TuiDataList,
        TuiDocScrollIntoViewLink,
        TuiExpand,
        TuiIcon,
        TuiInputModule,
        TuiLink,
        TuiScrollbar,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './navigation.template.html',
    styleUrls: ['./navigation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: NAVIGATION_PROVIDERS,
    host: {
        '[class._open]': 'menuOpen',
        '(window:keydown)': 'onFocusSearch($event)',
    },
})
export class TuiDocNavigation {
    @ViewChild(TuiTextfieldDirective, {read: ElementRef})
    private readonly searchInput?: ElementRef<HTMLInputElement>;

    private readonly router = inject(Router);
    private readonly doc = inject(DOCUMENT);

    protected open = signal(false);
    protected menuOpen = false;

    protected readonly sidebar = inject(TuiSidebarDirective, {optional: true});
    protected readonly labels = inject(NAVIGATION_LABELS);
    protected readonly items = inject(NAVIGATION_ITEMS);
    protected readonly searchText = inject(TUI_DOC_SEARCH_TEXT);
    protected readonly searchEnabled = inject(TUI_DOC_SEARCH_ENABLED);
    protected readonly docIcons = inject(TUI_DOC_ICONS);
    protected readonly icons = inject(TUI_COMMON_ICONS);

    protected openPagesArr: boolean[] = [];
    protected openPagesGroupsArr: boolean[] = [];
    protected active = '';

    protected readonly search = new FormControl('');

    protected readonly filtered = toSignal(
        tuiControlValue<string>(this.search).pipe(
            filter((search) => search.trim().length > 2),
            map((search) => this.filterItems(this.flattenSubPages(this.items), search)),
        ),
        {initialValue: []},
    );

    constructor() {
        const titleService = inject(Title);
        const readyToScroll$ = inject(TUI_DOC_PAGE_LOADED);

        inject(NAVIGATION_TITLE)
            .pipe(tuiWatch(), takeUntilDestroyed())
            .subscribe((title) => {
                titleService.setTitle(title);
                this.openActivePageGroup();
            });

        combineLatest([
            this.router.events.pipe(
                filter((event): event is Scroll => event instanceof Scroll),
                switchMap(({anchor}) =>
                    'onscrollend' in this.doc
                        ? fromEvent(this.doc, 'scrollend').pipe(map(() => anchor))
                        : of(anchor),
                ),
            ),
            inject(NAVIGATION_TITLE).pipe(
                switchMap(() => readyToScroll$.pipe(filter(Boolean))),
            ),
        ])
            .pipe(
                take(1),
                map(([anchor]) => anchor || ''),
                filter<string>(Boolean),
                takeUntilDestroyed(),
            )
            .subscribe((anchor) => this.navigateToAnchorLink(anchor));
    }

    protected get canOpen(): boolean {
        return (this.search.value?.length ?? 0) > 2;
    }

    protected get itemsWithoutSections(): TuiDocRoutePages {
        return this.items[this.items.length - 1] ?? [];
    }

    protected $pages(pages: any): readonly TuiDocRoutePage[] {
        return pages as TuiDocRoutePage[];
    }

    protected isActive(route: string): boolean {
        return route === this.active;
    }

    protected onGroupClick(index: number): void {
        this.openPagesGroupsArr[index] = !this.openPagesGroupsArr[index];
    }

    protected closeMenu(): void {
        this.menuOpen = false;
    }

    protected onClick(): void {
        this.open.set(false);
        this.menuOpen = false;
        this.search.setValue('');
        this.openActivePageGroup();
    }

    protected onFocusSearch(event: KeyboardEvent): void {
        if (
            event.code === 'Slash' &&
            !this.doc.activeElement?.matches('input,textarea,[contenteditable]')
        ) {
            this.searchInput?.nativeElement?.focus();
            event.preventDefault();
        }
    }

    @tuiPure
    private filterItems(
        items: ReadonlyArray<readonly TuiDocRoutePage[]>,
        search: string,
    ): ReadonlyArray<readonly TuiDocRoutePage[]> {
        return items.map((section) =>
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
                        search.split(/\s/).find((word) => title.includes(word))
                    );
                }),
                'title',
            ),
        );
    }

    @tuiPure
    private flattenSubPages(
        items: readonly TuiDocRoutePages[],
    ): ReadonlyArray<readonly TuiDocRoutePage[]> {
        return items.reduce<ReadonlyArray<readonly TuiDocRoutePage[]>>(
            (array, item) => [
                ...array,
                item.reduce<readonly TuiDocRoutePage[]>(
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
                    page.subPages.forEach((subPage) => {
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
