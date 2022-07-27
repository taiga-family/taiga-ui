import {Component, Inject, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiStaticRequestService} from '@taiga-ui/cdk';
import {TuiSvgComponent, TuiSvgModule, TuiSvgService} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';
import {of, throwError} from 'rxjs';
import {filter, skip} from 'rxjs/operators';

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

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiSvgModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TuiStaticRequestService,
                    useValue: STATIC_REQUEST_MOCK,
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`source svg code`, () => {
        beforeEach(() => {
            testComponent.icon = `<svg>Text</svg>`;
        });

        it(`innerHTML$ emits correctly`, () => {
            let result: unknown;

            fixture.detectChanges();

            testComponent.svgComponent.innerHTML$
                .pipe(filter(result => !!result))
                .subscribe(html => {
                    result = html;
                });

            expect(result).toBe(`<svg>Text</svg>`);
        });
        it(`inserts content SVG into DOM`, () => {
            fixture.detectChanges();

            const svgIcon = fixture.debugElement.query(By.css(`tui-svg`));

            expect(svgIcon.nativeElement.textContent).toBe(`Text`);
        });

        it(`isInnerHtml`, () => {
            fixture.detectChanges();

            expect(testComponent.svgComponent.isInnerHTML).toBe(true);
        });
    });

    describe(`named icon`, () => {
        beforeEach(() => {
            testComponent.icon = `customIcon`;
        });

        it(`not isInnerHtml`, () => {
            fixture.detectChanges();

            expect(testComponent.svgComponent.isInnerHTML).toBe(false);
        });

        it(`returns correct use`, () => {
            fixture.detectChanges();

            expect(testComponent.svgComponent.use).toBe(`#customIcon`);
        });
    });

    describe(`external`, () => {
        const extLink = `https://google.com/test.svg`;

        beforeEach(() => {
            testComponent.icon = extLink;
        });

        it(`isInnerHtml`, () => {
            fixture.detectChanges();

            expect(testComponent.svgComponent.isInnerHTML).toBe(true);
        });

        it(`innerHTML$ emits correctly downloaded svg`, () => {
            let result: unknown;

            fixture.detectChanges();

            testComponent.svgComponent.innerHTML$
                .pipe(filter(result => !!result))
                .subscribe(html => {
                    result = html;
                });

            expect(result).toBe(STATIC_REQUEST_MOCK_RESULT);
        });

        it(`innerHTML$ handles error correctly`, () => {
            let result: unknown;

            testComponent.svgComponent.innerHTML$.pipe(skip(2)).subscribe(value => {
                result = value;
            });

            testComponent.icon = BAD_URL;
            fixture.detectChanges();

            expect(result).toBe(``);
        });
    });
});
