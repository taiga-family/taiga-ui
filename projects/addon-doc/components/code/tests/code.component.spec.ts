// cspell:disable
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiDocCode} from '@taiga-ui/addon-doc';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

describe('TuiDocCodeComponent', () => {
    let component: TuiDocCode;
    let fixture: ComponentFixture<TuiDocCode>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HighlightModule, TuiDocCode],
            providers: [
                {
                    provide: HIGHLIGHT_OPTIONS,
                    useValue: {
                        coreLibraryLoader: async () => import('highlight.js/lib/core'),
                        lineNumbersLoader: async () =>
                            import('ngx-highlightjs/line-numbers'),
                        languages: {
                            typescript: async () =>
                                import('highlight.js/lib/languages/typescript'),
                        },
                    },
                },
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TuiDocCode);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have the ".t-header" class when the filename input is set', () => {
        component.filename = 'my-file.ts';
        fixture.detectChanges();

        const header = fixture.nativeElement.querySelector('.t-header');

        expect(header).toBeTruthy();
        expect(component.hasFilename).toBeTruthy();
    });

    it('should sync load simple text and process the code when the code input is set', async () => {
        component.code = 'const a = 5;';
        fixture.detectChanges();

        await waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector('.t-code')?.innerHTML.trim()).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">5</span>;</code>
    <div class="t-code-actions">
        <button tuiappearance="" tuiicons="" tuiiconbutton="" appearance="icon" size="xs" class="t-copy-button _icon-left" data-appearance="icon" style="--t-mask-left: url(assets/taiga-ui/icons/copy.svg); --t-mask-right: url();" data-size="xs">
        </button>
\t
    </div>`.replace('\t', '        '), // prettier problem
        );
    });

    it('should async load simple text and process the code when the code input is set', async () => {
        component.code = Promise.resolve({default: 'const a = 10;'});
        fixture.detectChanges();

        await waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector('.t-code')?.innerHTML.trim()).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">10</span>;</code>
    <div class="t-code-actions">
        <button tuiappearance="" tuiicons="" tuiiconbutton="" appearance="icon" size="xs" class="t-copy-button _icon-left" data-appearance="icon" style="--t-mask-left: url(assets/taiga-ui/icons/copy.svg); --t-mask-right: url();" data-size="xs">
        </button>
\t
    </div>`.replace('\t', '        '), // prettier problem
        );
    });

    it('should async load markdown code and process the code when the code input is set', async () => {
        component.code = Promise.resolve({
            default: '```ts\nconst a = 15;\n```', // markdown
        });
        fixture.detectChanges();

        await waitHighlightJsParseContent();

        expect(fixture.nativeElement.querySelector('.t-code')?.innerHTML.trim()).toEqual(
            `<code class="hljs"><span class="hljs-keyword">const</span> a = <span class="hljs-number">15</span>;</code>
    <div class="t-code-actions">
        <button tuiappearance="" tuiicons="" tuiiconbutton="" appearance="icon" size="xs" class="t-copy-button _icon-left" data-appearance="icon" style="--t-mask-left: url(assets/taiga-ui/icons/copy.svg); --t-mask-right: url();" data-size="xs">
        </button>
\t
    </div>`.replace('\t', '        '), // prettier problem
        );
    });

    async function waitHighlightJsParseContent(): Promise<void> {
        await fixture?.whenStable();
        fixture.detectChanges();
        await new Promise(resolve => {
            setTimeout(resolve, 100);
        });
    }
});
