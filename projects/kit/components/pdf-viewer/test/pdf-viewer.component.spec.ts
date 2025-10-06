import {ChangeDetectionStrategy, Component, type DebugElement} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

import {tuiPdfViewerOptionsProvider} from '../pdf-viewer.options';
import {TuiPdfViewerService} from '../pdf-viewer.service';

describe('Pdf Viewer with TUI_PDF_VIEWER_OPTIONS', () => {
    @Component({
        standalone: true,
        imports: [TuiRoot],
        template: `
            <tui-root />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    const label = 'Test';

    let fixture: ComponentFixture<Test>;
    let tuiPdfViewerService: TuiPdfViewerService;
    let pageObject: TuiPageObject<Test>;
    let sanitizer: DomSanitizer;

    function getLabelElement(): DebugElement {
        return pageObject.getByAutomationId('tui-pdf-viewer__label')!;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [tuiPdfViewerOptionsProvider({label}), provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        tuiPdfViewerService = TestBed.inject(TuiPdfViewerService);
        pageObject = new TuiPageObject(fixture);
        sanitizer = TestBed.inject(DomSanitizer);
    });

    describe('label', () => {
        it('correctly shows label option data', () => {
            tuiPdfViewerService
                .open(sanitizer.bypassSecurityTrustResourceUrl(''))
                .subscribe();
            fixture.detectChanges();

            expect(getLabelElement().nativeElement.textContent.trim()).toBe(label);
        });
    });
});
