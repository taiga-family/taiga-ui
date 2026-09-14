import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {TUI_DOC_PAGES, TuiDocNavigation} from '@taiga-ui/addon-doc';
import {type TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';

describe('TuiDocNavigation version badges', () => {
    const WINDOW = 6;
    const [major = Number.NaN, minor = Number.NaN] = TUI_VERSION.split('.').map(Number);
    const recent = `${major}.${minor}.0`;
    const stale =
        minor >= WINDOW ? `${major}.${minor - WINDOW}.0` : `${major - 1}.${minor}.0`;

    const pages: TuiDocRoutePages = [
        {
            section: 'New section',
            title: 'Overview',
            route: 'new/overview',
            version: recent,
        },
        {section: 'New section', title: 'Detail', route: 'new/detail'},
        {section: 'Updated section', title: 'Home', route: 'upd/home', version: stale},
        {section: 'Updated section', title: 'Fresh', route: 'upd/fresh', version: recent},
        {section: 'Old section', title: 'Alpha', route: 'old/alpha', version: stale},
        {section: 'Old section', title: 'Beta', route: 'old/beta'},
        {section: 'Group section', title: 'Intro', route: 'group/intro'},
        {
            section: 'Group section',
            title: 'Group',
            subPages: [
                {
                    section: 'Group section',
                    title: 'Nested new',
                    route: 'group/nested',
                    version: recent,
                },
                {
                    section: 'Group section',
                    title: 'Nested old',
                    route: 'group/nested-old',
                    version: stale,
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

    function badges(element: Element | undefined): Array<string | undefined> {
        return Array.from(element?.querySelectorAll('.t-new') ?? []).map((badge) =>
            badge.textContent?.trim(),
        );
    }

    function header(label: string): Element | undefined {
        return Array.from(host().querySelectorAll('.t-accordion-item')).find((el) =>
            el.textContent?.includes(label),
        );
    }

    function row(title: string): Element | undefined {
        return Array.from(host().querySelectorAll('a.t-sublink')).find((link) =>
            link.textContent?.includes(title),
        );
    }

    it('marks a whole section New when its lead page is recent', () => {
        expect(badges(header('New section'))).toEqual(['New']);
    });

    it('does not repeat New on the section-lead row', () => {
        expandAll();
        expect(row('Overview')?.querySelector('.t-new')).toBeNull();
    });

    it('marks a section Updated when a non-lead page is recent', () => {
        expect(badges(header('Updated section'))).toEqual(['Updated']);
    });

    it('badges a recent non-lead page New on its own row', () => {
        expandAll();
        expect(badges(row('Fresh'))).toEqual(['New']);
        expect(row('Home')?.querySelector('.t-new')).toBeNull();
    });

    it('does not badge a section with no recent pages', () => {
        expect(header('Old section')?.querySelector('.t-new')).toBeNull();
    });

    it('marks a group Updated when it holds a recent subpage', () => {
        expandAll();

        const group = Array.from(
            host().querySelectorAll('button.t-sublink_subsection'),
        ).find((button) => button.textContent?.includes('Group'));

        expect(badges(group)).toEqual(['Updated']);
        expect(badges(row('Nested new'))).toEqual(['New']);
        expect(row('Nested old')?.querySelector('.t-new')).toBeNull();
    });
});
