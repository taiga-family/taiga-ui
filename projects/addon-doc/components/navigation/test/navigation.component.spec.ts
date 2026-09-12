import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {TUI_DOC_PAGES, TuiDocNavigation} from '@taiga-ui/addon-doc';
import {type TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {provideTaiga} from '@taiga-ui/core';

describe('TuiDocNavigation badges', () => {
    const pages: TuiDocRoutePages = [
        {
            section: 'New section',
            title: 'Overview',
            route: 'new/overview',
            badges: [{label: 'New', appearance: 'positive'}],
        },
        {section: 'New section', title: 'Details', route: 'new/details'},
        {section: 'Plain section', title: 'First', route: 'plain/first'},
        {section: 'Plain section', title: 'Second', route: 'plain/second'},
        {section: 'Lab section', title: 'Home', route: 'lab/home'},
        {
            section: 'Lab section',
            title: 'Beaker',
            route: 'lab/beaker',
            badges: [{label: 'Experimental', appearance: 'warning'}],
        },
        {section: 'Combo section', title: 'Intro', route: 'combo/intro'},
        {
            section: 'Combo section',
            title: 'Widget',
            route: 'combo/widget',
            badges: [
                {label: 'New', appearance: 'positive'},
                {label: 'Experimental', appearance: 'warning'},
            ],
        },
        {
            section: 'Combo section',
            title: 'Group',
            subPages: [
                {
                    section: 'Combo section',
                    title: 'Nested new',
                    route: 'combo/nested',
                    badges: [{label: 'New', appearance: 'positive'}],
                },
            ],
        },
    ];

    let fixture: ComponentFixture<TuiDocNavigation>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiDocNavigation],
            providers: [
                provideTaiga(),
                provideRouter([]),
                {provide: TUI_DOC_PAGES, useValue: pages},
            ],
        });

        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TuiDocNavigation);
        fixture.detectChanges();
    });

    function host(): HTMLElement {
        return fixture.nativeElement as HTMLElement;
    }

    function expandAll(): void {
        host()
            .querySelectorAll('.t-accordion-item')
            .forEach((button) => (button as HTMLElement).click());
        fixture.detectChanges();
    }

    function labels(element: Element | undefined): Array<string | undefined> {
        return Array.from(element?.querySelectorAll('.t-new') ?? []).map((badge) =>
            badge.textContent?.trim(),
        );
    }

    function header(label: string): Element | undefined {
        return Array.from(host().querySelectorAll('.t-accordion-item')).find((el) =>
            el.textContent?.includes(label),
        );
    }

    it("shows the badge on a section header, taken from the section's first page", () => {
        expect(labels(header('New section'))).toEqual(['New']);
    });

    it('does not badge a section whose pages have none', () => {
        expect(header('Plain section')?.querySelector('.t-new')).toBeNull();
    });

    it('marks a section Updated when it holds an experimental page', () => {
        expect(labels(header('Lab section'))).toEqual(['Updated']);
    });

    it('marks a section Updated when a nested subpage is new', () => {
        expect(labels(header('Combo section'))).toEqual(['Updated']);
    });

    it('marks a group button Updated when it contains a badged subpage', () => {
        expandAll();

        const group = Array.from(
            host().querySelectorAll('button.t-sublink_subsection'),
        ).find((button) => button.textContent?.includes('Group'));

        expect(labels(group)).toEqual(['Updated']);
    });

    it('renders multiple badges on one row, New before Experimental', () => {
        expandAll();

        const row = Array.from(host().querySelectorAll('a.t-sublink')).find((link) =>
            link.textContent?.includes('Widget'),
        );

        expect(labels(row)).toEqual(['New', 'Experimental']);
    });

    it('badges pages on their own rows, but not the section-lead page', () => {
        expandAll();

        const badgedRows = Array.from(host().querySelectorAll('a.t-sublink'))
            .filter((row) => row.querySelector('.t-new'))
            .map((row) => row.textContent?.replaceAll(/\s+/g, ' ').trim());

        expect(badgedRows).toEqual([
            'Beaker Experimental',
            'Widget New Experimental',
            'Nested new New',
        ]);
    });
});
