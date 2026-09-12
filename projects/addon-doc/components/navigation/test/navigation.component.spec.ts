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
            badge: {label: 'New', appearance: 'positive'},
        },
        {section: 'New section', title: 'Details', route: 'new/details'},
        {section: 'Plain section', title: 'First', route: 'plain/first'},
        {
            section: 'Plain section',
            title: 'Beta page',
            route: 'plain/beta',
            badge: {label: 'Beta', appearance: 'warning'},
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

    function header(label: string): HTMLElement | undefined {
        return Array.from(host().querySelectorAll<HTMLElement>('.t-accordion-item')).find(
            (el) => el.textContent?.includes(label),
        );
    }

    it("shows the badge on a section header, taken from the section's first page", () => {
        expect(header('New section')?.querySelector('.t-new')?.textContent?.trim()).toBe(
            'New',
        );
    });

    it('does not badge a section whose first page has none', () => {
        expect(header('Plain section')?.querySelector('.t-new')).toBeNull();
    });

    it('badges a non-first page on its own row, but not the section-lead page', () => {
        host()
            .querySelectorAll<HTMLElement>('.t-accordion-item')
            .forEach((button) => button.click());
        fixture.detectChanges();

        const badgedRows = Array.from(host().querySelectorAll('a.t-sublink'))
            .filter((row) => row.querySelector('.t-new'))
            .map((row) => row.textContent?.replace(/\s+/g, ' ').trim());

        expect(badgedRows).toEqual(['Beta page Beta']);
    });
});
