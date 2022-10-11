import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, Inject, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiStaticRequestService} from '@taiga-ui/cdk';
import {TuiSvgComponent, TuiSvgModule, TuiSvgService} from '@taiga-ui/core';
import {configureTestSuite, TUI_SANITIZER_MOCK, TuiSvgHarness} from '@taiga-ui/testing';
import {of, throwError} from 'rxjs';

const SVG_ICON = `<svg xmlns="http://www.w3.org/2000/svg"
     width="32"
     height="32"
     viewBox="0 0 32 32"></svg>
`;

const STATIC_REQUEST_MOCK_RESULT = `result`;
const BAD_URL = `http://bad-url.ru/qwe.svg#test`;
const STATIC_REQUEST_MOCK = {
    request: (url: string) => {
        if (url === BAD_URL) {
            return throwError(() => new Error(`error`));
        }

        return of(STATIC_REQUEST_MOCK_RESULT);
    },
};

describe(`Svg`, () => {
    @Component({
        template: `
            <tui-svg [src]="icon"></tui-svg>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSvgComponent)
        svgComponent!: TuiSvgComponent;

        icon = ``;

        constructor(@Inject(TuiSvgService) svgService: TuiSvgService) {
            svgService.define({
                customIcon: SVG_ICON,
            });
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiSvgModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TuiStaticRequestService,
                    useValue: STATIC_REQUEST_MOCK,
                },
                TUI_SANITIZER_MOCK,
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        loader = TestbedHarnessEnvironment.loader(fixture);
        fixture.detectChanges();
    });

    describe(`source svg code`, () => {
        beforeEach(() => {
            testComponent.icon = `<svg>Text</svg>`;
        });

        it(`inserts content SVG into DOM`, async () => {
            const svg = await loader.getHarness(TuiSvgHarness);
            const textContent = await svg.text();

            expect(textContent).toBe(`Text`);
        });

        it(`isInnerHtml`, async () => {
            const svg = await loader.getHarness(TuiSvgHarness);
            const isInnerHTML = await svg.isInnerHTML();

            expect(isInnerHTML).toBe(true);
        });
    });

    describe(`named icon`, () => {
        beforeEach(() => {
            testComponent.icon = `customIcon`;
        });

        it(`not isInnerHtml`, async () => {
            const svg = await loader.getHarness(TuiSvgHarness);
            const isInnerHTML = await svg.isInnerHTML();

            expect(isInnerHTML).toBe(false);
        });

        it(`returns correct use`, async () => {
            const svg = await loader.getHarness(TuiSvgHarness);
            const use = await svg.getUse();

            expect(use).toBe(`#customIcon`);
        });
    });

    describe(`external`, () => {
        const extLink = `https://google.com/test.svg`;

        beforeEach(() => {
            testComponent.icon = extLink;
        });

        it(`isInnerHtml`, async () => {
            const svg = await loader.getHarness(TuiSvgHarness);
            const isInnerHTML = await svg.isInnerHTML();

            expect(isInnerHTML).toBe(true);
        });

        it(`innerHTML$ emits correctly downloaded svg`, async () => {
            const svg = await loader.getHarness(TuiSvgHarness);
            const result = await svg.text();

            expect(result).toBe(STATIC_REQUEST_MOCK_RESULT);
        });

        it(`innerHTML$ handles error correctly`, async () => {
            testComponent.icon = BAD_URL;
            const svg = await loader.getHarness(TuiSvgHarness);
            const result = await svg.text();

            expect(result).toBe(``);
        });
    });
});
