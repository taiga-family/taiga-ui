import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiSvgComponent, TuiSvgModule} from '@taiga-ui/core';
import {TUI_SVG_SRC_PROCESSOR} from '@taiga-ui/core/tokens';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`svg source processor`, () => {
    @Component({
        template: `
            <tui-svg [src]="icon"></tui-svg>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSvgComponent)
        svgComponent!: TuiSvgComponent;

        icon = ``;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiSvgModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_SVG_SRC_PROCESSOR,
                    useValue: (src: string): string => `https://${src}`,
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`added http protocol prefix by global processor`, () => {
        testComponent.icon = `google.com/test.svg`;
        fixture.detectChanges();
        expect(testComponent.svgComponent.src).toBe(`https://google.com/test.svg`);
    });
});
