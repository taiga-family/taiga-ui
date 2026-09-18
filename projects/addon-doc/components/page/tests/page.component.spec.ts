import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, provideRouter} from '@angular/router';
import {
    PAGE_SEE_ALSO,
    TUI_DOC_PAGES,
    TUI_DOC_VERSION,
    TuiDocPage,
} from '@taiga-ui/addon-doc';
import {TUI_DOC_DEFAULT_TABS} from '@taiga-ui/addon-doc/tokens';
import {type TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('TuiDocPageComponent', () => {
    let component: TuiDocPage;
    let fixture: ComponentFixture<TuiDocPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TuiDocPage],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {},
                },
                {
                    provide: TUI_DOC_DEFAULT_TABS,
                    useValue: ['tab1', 'tab2'],
                },
                {
                    provide: PAGE_SEE_ALSO,
                    useValue: ['seeAlso1', 'seeAlso2'],
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TuiDocPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have showSeeAlso set to true when seeAlso array is not empty and activeItemIndex is 0', () => {
        Object.defineProperty(component, 'seeAlso', {
            value: ['seeAlso1', 'seeAlso2', 'seeAlso3'],
        });

        component.activeItemIndex = 0;

        expect(component.seeAlso).toEqual(['seeAlso1', 'seeAlso2', 'seeAlso3']);
        expect(component.showSeeAlso).toBe(true);
    });

    it('should have showSeeAlso set to false when seeAlso array is empty and activeItemIndex is 0', () => {
        Object.defineProperty(component, 'seeAlso', {value: []});

        component.activeItemIndex = 0;

        expect(component.seeAlso).toEqual([]);
        expect(component.showSeeAlso).toBe(false);
    });

    it('should have activeItemIndex set to 0 by default', () => {
        expect(component.activeItemIndex).toBe(0);
    });

    it('TuiDocPageTabConnectorDirective', () => {
        expect(EMPTY_QUERY.dirty).toBe(true);
        expect(component.tabConnectors.dirty).toBe(false);
    });

    it('should have deprecated set to false by default', () => {
        expect(component.deprecated).toBe(false);
    });

    it('should have false value when Input deprecated is not supplied', () => {
        expect(component.deprecated).toBe(false);
    });

    describe('version', () => {
        const pages: TuiDocRoutePages = [
            {
                section: 'Components',
                title: 'Versioned',
                route: 'versioned',
                version: '4.4.0',
            },
            {section: 'Components', title: 'Baseline', route: 'baseline'},
        ];

        function version(inputs: {header: string; package?: string}): string {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({
                imports: [TuiDocPage],
                providers: [
                    provideRouter([]),
                    NG_EVENT_PLUGINS,
                    {provide: TUI_DOC_PAGES, useValue: pages},
                    {provide: TUI_DOC_VERSION, useValue: '4.23.0'},
                ],
            });

            const local = TestBed.createComponent(TuiDocPage);

            local.componentRef.setInput('header', inputs.header);
            local.componentRef.setInput('package', inputs.package ?? '');

            return (local.componentInstance as unknown as {version: string}).version;
        }

        it('uses the explicit version from the page config', () => {
            expect(version({header: 'Versioned', package: 'CORE'})).toBe('4.4.0');
        });

        it('falls back to the current-major baseline when a component has no version', () => {
            expect(version({header: 'Baseline', package: 'KIT'})).toBe('4.0.0');
        });

        it('shows no version for a non-component page (no package)', () => {
            expect(version({header: 'Baseline', package: ''})).toBe('');
        });
    });
});
