import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {TUI_DOC_PAGES, TUI_DOC_VERSION, TuiDocPage} from '@taiga-ui/addon-doc';
import {type TuiDocRoutePages} from '@taiga-ui/addon-doc/types';
import {provideTaiga} from '@taiga-ui/core';

describe('TuiDocPage version', () => {
    const pages: TuiDocRoutePages = [
        {section: 'Components', title: 'Versioned', route: 'versioned', version: '5.4.0'},
        {section: 'Components', title: 'Baseline', route: 'baseline'},
    ];

    function version(inputs: {header: string; package?: string}): string {
        TestBed.configureTestingModule({
            imports: [TuiDocPage],
            providers: [
                provideTaiga(),
                provideRouter([]),
                {provide: TUI_DOC_PAGES, useValue: pages},
                {provide: TUI_DOC_VERSION, useValue: '5.23.0'},
            ],
        });

        const fixture = TestBed.createComponent(TuiDocPage);

        fixture.componentRef.setInput('header', inputs.header);
        fixture.componentRef.setInput('package', inputs.package ?? '');

        const component = fixture.componentInstance as unknown as {version(): string};

        return component.version();
    }

    it('uses the explicit version from the page config', () => {
        expect(version({header: 'Versioned', package: 'CORE'})).toBe('5.4.0');
    });

    it('falls back to the current-major baseline when a component has no version', () => {
        expect(version({header: 'Baseline', package: 'KIT'})).toBe('5.0.0');
    });

    it('shows no version for a non-component page (no package)', () => {
        expect(version({header: 'Baseline', package: ''})).toBe('');
    });
});
