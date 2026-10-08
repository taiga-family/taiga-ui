import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {TUI_DOC_PAGES, TUI_DOC_VERSION, TuiDocNavigation} from '@taiga-ui/addon-doc';
import {type TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

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
                provideRouter([]),
                NG_EVENT_PLUGINS,
                {provide: TUI_DOC_PAGES, useValue: pages},
                {provide: TUI_DOC_VERSION, useValue: TUI_VERSION},
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
            .querySelectorAll('button.t-header')
            .forEach((button) => (button as HTMLElement).click());
        fixture.detectChanges();

        host()
            .querySelectorAll('button.t-sublink_subsection')
            .forEach((button) => (button as HTMLElement).click());
        fixture.detectChanges();
    }

    function badges(element: Element | undefined): Array<string | undefined> {
        return Array.from(element?.querySelectorAll('.t-badge') ?? []).map((badge) =>
            badge.textContent?.trim(),
        );
    }

    function header(label: string): Element | undefined {
        return Array.from(host().querySelectorAll('.t-label')).find((el) =>
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
        expect(row('Overview')?.querySelector('.t-badge')).toBeNull();
    });

    it('marks a section Updated when a non-lead page is recent', () => {
        expect(badges(header('Updated section'))).toEqual(['Updated']);
    });

    it('badges a recent non-lead page New on its own row', () => {
        expandAll();
        expect(badges(row('Fresh'))).toEqual(['New']);
        expect(row('Home')?.querySelector('.t-badge')).toBeNull();
    });

    it('does not badge a section with no recent pages', () => {
        expect(header('Old section')?.querySelector('.t-badge')).toBeNull();
    });

    it('marks a group Updated when it holds a recent subpage', () => {
        expandAll();

        const group = Array.from(
            host().querySelectorAll('button.t-sublink_subsection'),
        ).find((button) => button.textContent?.includes('Group'));

        expect(badges(group)).toEqual(['Updated']);
        expect(badges(row('Nested new'))).toEqual(['New']);
        expect(row('Nested old')?.querySelector('.t-badge')).toBeNull();
    });

    it('drops New/Updated once the current major moves past every version', async () => {
        // Same shapes as above, but every version is a major behind the app.
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [TuiDocNavigation],
            providers: [
                provideRouter([]),
                NG_EVENT_PLUGINS,
                {
                    provide: TUI_DOC_PAGES,
                    useValue: [
                        {
                            section: 'Alpha',
                            title: 'Lead',
                            route: 'a/lead',
                            version: recent,
                        },
                        {section: 'Alpha', title: 'Kid', route: 'a/kid', version: recent},
                        {section: 'Beta', title: 'Bare', route: 'b/bare'},
                    ] satisfies TuiDocRoutePages,
                },
                {provide: TUI_DOC_VERSION, useValue: `${major + 1}.0.0`},
            ],
        });

        await TestBed.compileComponents();

        const bumped = TestBed.createComponent(TuiDocNavigation);
        const el = bumped.nativeElement as HTMLElement;

        bumped.detectChanges();
        el.querySelectorAll('button.t-header').forEach((button) =>
            (button as HTMLElement).click(),
        );
        bumped.detectChanges();

        expect(el.querySelectorAll('.t-badge').length).toBe(0);
    });

    it('never marks a long-standing (unversioned) page New a minor into a major', async () => {
        // A component that already existed carries no version and only ever
        // renders the baseline chip, so a minor bump must not light it up as New.
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [TuiDocNavigation],
            providers: [
                provideRouter([]),
                NG_EVENT_PLUGINS,
                {
                    provide: TUI_DOC_PAGES,
                    useValue: [
                        {section: 'Alpha', title: 'Old one', route: 'a/old'},
                        {section: 'Beta', title: 'Old two', route: 'b/old'},
                    ] satisfies TuiDocRoutePages,
                },
                {provide: TUI_DOC_VERSION, useValue: `${major + 1}.1.0`},
            ],
        });

        await TestBed.compileComponents();

        const bumped = TestBed.createComponent(TuiDocNavigation);
        const el = bumped.nativeElement as HTMLElement;

        bumped.detectChanges();
        el.querySelectorAll('button.t-header').forEach((button) =>
            (button as HTMLElement).click(),
        );
        bumped.detectChanges();

        expect(el.querySelectorAll('.t-badge').length).toBe(0);
    });
});
