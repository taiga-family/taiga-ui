import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TuiDocCodeComponent} from '@taiga-ui/addon-doc';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

describe(`TuiDocCodeComponent`, () => {
    let component: TuiDocCodeComponent;
    let fixture: ComponentFixture<TuiDocCodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
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
        }).compileComponents();
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

    it(`should sync load simple text and process the code when the code input is set`, fakeAsync(() => {
        component.code = `const a = 5;`;

        waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector(`.t-code`)?.innerHTML).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">5</span>;</code>`,
        );
    }));

    it(`should async load simple text and process the code when the code input is set`, fakeAsync(() => {
        component.code = Promise.resolve({default: `const a = 10;`});

        waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector(`.t-code`)?.innerHTML).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">10</span>;</code>`,
        );
    }));

    it(`should async load markdown code and process the code when the code input is set`, fakeAsync(() => {
        component.code = Promise.resolve({
            default: `\`\`\`ts\nconst a = 15;\n\`\`\``, // markdown
        });

        waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector(`.t-code`)?.innerHTML).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">15</span>;</code>`,
        );
    }));

    function waitHighlightJsParseContent(): void {
        tick(100);
        fixture.detectChanges();
        tick(100);
    }
});
