import {Clipboard} from '@angular/cdk/clipboard';
import {APP_BASE_HREF} from '@angular/common';
import {Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter, Router, type Routes} from '@angular/router';
import {
    TUI_DOC_MARKDOWN_ROUTE_HANDLER,
    TuiDocCopyPage,
    TuiDocPageMarkdown,
} from '@taiga-ui/addon-doc';
import {provideTaiga} from '@taiga-ui/core';

@Component({template: ''})
class Stub {}

const ROUTES: Routes = [
    {path: '', component: Stub},
    {path: 'simple', component: Stub},
    {path: 'tabbed', component: Stub, children: [{path: ':tab', component: Stub}]},
];

const MARKDOWN_LINK = 'link[rel="alternate"][type="text/markdown"]';

async function open(
    url: string,
    baseHref = '/',
    providers: unknown[] = [],
): Promise<ComponentFixture<TuiDocCopyPage>> {
    TestBed.configureTestingModule({
        providers: [
            provideTaiga(),
            provideRouter(ROUTES),
            {provide: APP_BASE_HREF, useValue: baseHref},
            ...providers,
        ],
    });

    // The twin is resolved as the action is created, so navigate first.
    await TestBed.inject(Router).navigateByUrl(url);

    const fixture = TestBed.createComponent(TuiDocCopyPage);

    fixture.detectChanges();

    return fixture;
}

// The service is provided by the action rather than in root, so it is reached through it.
function twin(fixture: ComponentFixture<TuiDocCopyPage>): string {
    return fixture.debugElement.injector.get(TuiDocPageMarkdown).url();
}

async function copyAction(fixture: ComponentFixture<TuiDocCopyPage>): Promise<void> {
    await (fixture.componentInstance as unknown as {copy(): Promise<void>}).copy();
}

function href(): string | null | undefined {
    return document.head.querySelector(MARKDOWN_LINK)?.getAttribute('href');
}

describe('Copy page', () => {
    afterEach(() => {
        TestBed.resetTestingModule();
    });

    describe('twin URL', () => {
        it('points at the twin of the page currently open', async () => {
            expect(twin(await open('/simple'))).toBe('/simple.md');
        });

        it('ignores query and hash', async () => {
            expect(twin(await open('/simple?tab=1#anchor'))).toBe('/simple.md');
        });

        it('shares a single twin across the tabs of one page', async () => {
            expect(twin(await open('/tabbed/API'))).toBe('/tabbed.md');
        });

        it('resolves against the base href the portal is deployed under', async () => {
            expect(twin(await open('/simple', '/v5/'))).toBe('/v5/simple.md');
        });

        // A portal may serve one page at two URLs — an empty route aliasing a named one —
        // while generating the twin for the named route alone. The root route reaches the
        // handler as an empty string, which is what makes such a fallback expressible.
        it('lets a portal send the root route to the twin of another', async () => {
            const fixture = await open('/', '/', [
                {
                    provide: TUI_DOC_MARKDOWN_ROUTE_HANDLER,
                    useValue: (route: string) => route || '/simple',
                },
            ]);

            expect(twin(fixture)).toBe('/simple.md');
        });
    });

    describe('<link rel="alternate">', () => {
        it('announces the twin to crawlers while the page is open', async () => {
            const fixture = await open('/simple');

            expect(href()).toBe('/simple.md');

            fixture.destroy();

            expect(document.head.querySelector(MARKDOWN_LINK)).toBeNull();
        });

        // Hydration replays the constructor over the server-rendered head: creating a second
        // element there would leave the stale one behind for crawlers to follow.
        it('claims the server-rendered element instead of adding a second', async () => {
            const rendered = document.createElement('link');

            rendered.rel = 'alternate';
            rendered.type = 'text/markdown';
            rendered.href = '/simple.md';
            document.head.appendChild(rendered);

            const fixture = await open('/tabbed/API');

            expect(document.head.querySelectorAll(MARKDOWN_LINK)).toHaveLength(1);
            expect(rendered.getAttribute('href')).toBe('/tabbed.md');

            fixture.destroy();

            expect(document.head.querySelector(MARKDOWN_LINK)).toBeNull();
        });

        it('follows navigation', async () => {
            const fixture = await open('/simple');

            await TestBed.inject(Router).navigateByUrl('/tabbed/API');
            fixture.detectChanges();

            expect(href()).toBe('/tabbed.md');
        });
    });

    describe('copying', () => {
        const original = globalThis.fetch;

        function stubMarkdown(markdown: string, contentType = 'text/markdown'): void {
            globalThis.fetch = jest.fn().mockResolvedValue({
                ok: true,
                headers: {get: () => contentType},
                text: async () => Promise.resolve(markdown),
            });
        }

        afterEach(() => {
            globalThis.fetch = original;
        });

        it('copies the fetched markdown', async () => {
            const fixture = await open('/simple');

            stubMarkdown('# Simple');

            const copy = jest
                .spyOn(TestBed.inject(Clipboard), 'copy')
                .mockReturnValue(true);

            await copyAction(fixture);

            expect(copy).toHaveBeenCalledWith('# Simple');
        });

        // A portal serving no twin answers with the SPA shell rather than a 404.
        it('copies nothing when the twin is missing', async () => {
            const fixture = await open('/simple');

            stubMarkdown('<!doctype html>', 'text/html');

            const copy = jest
                .spyOn(TestBed.inject(Clipboard), 'copy')
                .mockReturnValue(true);

            await copyAction(fixture);

            expect(copy).not.toHaveBeenCalled();
        });
    });
});
