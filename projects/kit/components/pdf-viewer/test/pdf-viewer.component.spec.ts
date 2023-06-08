import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiIdService} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiPdfViewerModule} from '../pdf-viewer.module';
import {TuiPdfViewerService} from '../pdf-viewer.service';
import {tuiPdfViewerOptionsProvider} from '../pdf-viewer.tokens';

describe(`Pdf Viewer with TUI_PDF_VIEWER_OPTIONS`, () => {
    @Component({
        template: `
            <tui-root></tui-root>
        `,
    })
    class TestComponent {}

    const label = `Test`;

    let fixture: ComponentFixture<TestComponent>;
    let tuiPdfViewerService: TuiPdfViewerService;
    let pageObject: TuiPageObject<TestComponent>;
    let sanitizer: DomSanitizer;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId(`tui-pdf-viewer__label`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootModule, TuiPdfViewerModule],
            declarations: [TestComponent],
            providers: [
                tuiPdfViewerOptionsProvider({label}),
                {
                    provide: TuiPdfViewerService,
                    useFactory: () =>
                        new TuiPdfViewerService(TestBed.inject(TuiIdService)),
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        tuiPdfViewerService = TestBed.inject(TuiPdfViewerService);
        pageObject = new TuiPageObject(fixture);
        sanitizer = TestBed.inject(DomSanitizer);
    });

    describe(`label`, () => {
        it(`correctly shows label option data`, () => {
            tuiPdfViewerService
                .open(sanitizer.bypassSecurityTrustResourceUrl(``))
                .subscribe();
            fixture.detectChanges();

            expect(getLabelElement()!.nativeElement.textContent.trim()).toBe(label);
        });
    });
});
