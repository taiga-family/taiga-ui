import {AsyncPipe, DOCUMENT, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    inject,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {
    ActivatedRoute,
    Router,
    RouterLink,
    RouterLinkActive,
    Scroll,
} from '@angular/router';
import {TuiScrollIntoViewLinkDirective} from '@taiga-ui/addon-doc/directives';
import {
    TUI_DOC_ICONS,
    TUI_DOC_PAGE_LOADED,
    TUI_DOC_SEARCH_TEXT,
} from '@taiga-ui/addon-doc/tokens';
import type {TuiDocPage, TuiDocPages} from '@taiga-ui/addon-doc/types';
import {tuiTransliterateKeyboardLayout} from '@taiga-ui/addon-doc/utils';
import {TuiSidebarDirective} from '@taiga-ui/addon-mobile';
import {
    TuiAutoFocusDirective,
    tuiControlValue,
    tuiPure,
    tuiUniqBy,
    tuiWatch,
} from '@taiga-ui/cdk';
import {
    TUI_COMMON_ICONS,
    TuiDataList,
    TuiExpand,
    TuiIconComponent,
    TuiLinkDirective,
    TuiScrollbarComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';
import type {TuiInputComponent} from '@taiga-ui/legacy';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {combineLatest, filter, map, switchMap, take} from 'rxjs';

import {
    NAVIGATION_ITEMS,
    NAVIGATION_LABELS,
    NAVIGATION_PROVIDERS,
    NAVIGATION_TITLE,
} from './navigation.providers';

@Component({
    standalone: true,
    selector: 'tui-doc-navigation',
    imports: [
        TuiInputModule,
        TuiTextfieldOptionsDirective,
        ReactiveFormsModule,
        TuiAutoFocusDirective,
        TuiDataList,
        AsyncPipe,
        NgForOf,
        NgIf,
        TuiIconComponent,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        RouterLink,
        TuiScrollbarComponent,
        TuiAccordion,
        NgTemplateOutlet,
        TuiLinkDirective,
        TuiScrollIntoViewLinkDirective,
        RouterLinkActive,
        TuiExpand,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './navigation.template.html',
    styleUrls: ['./navigation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: NAVIGATION_PROVIDERS,
})
export class TuiDocNavigationComponent {
    private readonly router = inject(Router);
    private readonly doc = inject(DOCUMENT);

    @HostBinding('class._open')
    protected menuOpen = false;

    protected readonly sidebar = inject(TuiSidebarDirective, {optional: true});
    protected readonly labels = inject(NAVIGATION_LABELS);
    protected readonly items = inject(NAVIGATION_ITEMS);
    protected readonly searchText = inject(TUI_DOC_SEARCH_TEXT);
    protected readonly activatedRoute = inject(ActivatedRoute);
    protected readonly docIcons = inject(TUI_DOC_ICONS);
    protected readonly icons = inject(TUI_COMMON_ICONS);

    protected openPagesArr: boolean[] = [];
    protected openPagesGroupsArr: boolean[] = [];
    protected active = '';

    protected readonly search = new FormControl('');

    protected readonly filtered$ = tuiControlValue<string>(this.search).pipe(
        filter(search => search.trim().length > 2),
        map(search => this.filterItems(this.flattenSubPages(this.items), search)),
    );

    constructor() {
        const titleService = inject(Title);
        const readyToScroll$ = inject(TUI_DOC_PAGE_LOADED);

        inject(NAVIGATION_TITLE)
            .pipe(tuiWatch(inject(ChangeDetectorRef)), takeUntilDestroyed())
            .subscribe(title => {
                titleService.setTitle(title);
                this.openActivePageGroup();
            });

        combineLatest([
            this.router.events.pipe(
                filter((event): event is Scroll => event instanceof Scroll),
            ),
            inject(NAVIGATION_TITLE).pipe(
                switchMap(() => readyToScroll$.pipe(filter(Boolean))),
            ),
        ])
            .pipe(
                take(1),
                map(([event]) => event.anchor || ''),
                filter<string>(Boolean),
                takeUntilDestroyed(),
            )
            .subscribe(anchor => this.navigateToAnchorLink(anchor));
    }

    protected get canOpen(): boolean {
        return (this.search.value?.length ?? 0) > 2;
    }

    protected get itemsWithoutSections(): TuiDocPages {
        return this.items[this.items.length - 1];
    }

    protected $pages(pages: any): readonly TuiDocPage[] {
        return pages as TuiDocPage[];
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

    protected onClick(input: TuiInputComponent): void {
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
