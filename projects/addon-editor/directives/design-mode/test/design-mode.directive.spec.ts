import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {configureTestSuite} from 'ng-bullet';
import {TuiDesignModeDirective} from '../design-mode.directive';
import {TuiDesignModeModule} from '../design-mode.module';

describe('TuiDesignMode directive', () => {
    @Component({
        template: ` <iframe tuiDesignMode [(ngModel)]="model"></iframe> `,
    })
    class TestComponent {
        @ViewChild(TuiDesignModeDirective, {read: ElementRef})
        element: ElementRef<HTMLIFrameElement>;

        model = '';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    const html = '<b>HTML</b>';

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TuiDesignModeModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO: Understand why this doesn't work
    xit('works there', () => {
        const documentRef = contentDocument();

        if (documentRef) {
            documentRef.body.innerHTML = html;
            documentRef.dispatchEvent(new Event('input'));
        }

        fixture.detectChanges();

        expect(testComponent.model).toBe(html);
    });

    it('works here', done => {
        testComponent.model = html;
        fixture.detectChanges();

        const documentRef = contentDocument();

        fixture.whenStable().then(() => {
            expect(documentRef ? documentRef.body.innerHTML : '').toBe(html);
            done();
        });
    });

    function contentDocument(): Document | null {
        return testComponent.element.nativeElement.contentDocument;
    }
});
