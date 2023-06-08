import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiDocCodeComponent} from '@taiga-ui/addon-doc';
import {configureTestSuite} from '@taiga-ui/testing';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

describe(`TuiDocCodeComponent`, () => {
    let component: TuiDocCodeComponent;
    let fixture: ComponentFixture<TuiDocCodeComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [TuiDocCodeComponent],
            imports: [HighlightModule],
            providers: [
                {
                    provide: HIGHLIGHT_OPTIONS,
                    useValue: {
                        coreLibraryLoader: async () => import(`highlight.js/lib/core`),
                        lineNumbersLoader: async () =>
                            import(`highlightjs-line-numbers.js`),
                        languages: {
                            typescript: async () =>
                                import(`highlight.js/lib/languages/typescript`),
                        },
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TuiDocCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(component).toBeTruthy();
    });

    it(`should have the ".t-header" class when the filename input is set`, () => {
        component.filename = `my-file.ts`;
        fixture.detectChanges();

        const header = fixture.nativeElement.querySelector(`.t-header`);

        expect(header).toBeTruthy();
        expect(component.hasFilename).toBeTruthy();
    });

    it(`should sync load simple text and process the code when the code input is set`, async () => {
        component.code = `const a = 5;`;
        fixture.detectChanges();

        await waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector(`.t-code`)?.innerHTML).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">5</span>;</code>`,
        );
    });

    it(`should async load simple text and process the code when the code input is set`, async () => {
        component.code = Promise.resolve({default: `const a = 10;`});
        fixture.detectChanges();

        await waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector(`.t-code`)?.innerHTML).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">10</span>;</code>`,
        );
    });

    it(`should async load markdown code and process the code when the code input is set`, async () => {
        component.code = Promise.resolve({
            default: `\`\`\`ts\nconst a = 15;\n\`\`\``, // markdown
        });
        fixture.detectChanges();

        await waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector(`.t-code`)?.innerHTML).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">15</span>;</code>`,
        );
    });

    async function waitHighlightJsParseContent(): Promise<void> {
        await fixture?.whenStable();
        fixture.detectChanges();
        await new Promise(resolve => setTimeout(resolve, 100));
    }
});
