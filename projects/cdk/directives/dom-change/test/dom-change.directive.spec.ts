import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiDomChangeModule} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

describe('TuiDomChangeDirective', () => {
    @Component({
        template: `
            <div
                #observe
                [innerText]="123"
                (tuiDomChange)="changes($event)"
            ></div>
        `,
    })
    class TestComponent {
        @ViewChild('observe')
        readonly div?: ElementRef<HTMLDivElement>;

        readonly contents: string[] = [];

        changes(event: MutationRecord): void {
            const content = event.addedNodes.item(0)?.textContent?.trim();

            if (content) {
                this.contents.push(content);
            }
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiDomChangeModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('asynchronous catch DOM changes by MutationObserver', done => {
        expect(testComponent.div?.nativeElement.outerHTML).toBe('<div>123</div>');
        expect(testComponent.contents).toEqual([]);

        setTimeout(() => {
            const tempDiv = document.createElement('div');

            tempDiv.textContent = '456';
            testComponent.div?.nativeElement.insertAdjacentElement('beforeend', tempDiv);

            expect(testComponent.div?.nativeElement.outerHTML).toEqual(
                '<div>123<div>456</div></div>',
            );

            expect(testComponent.contents).toEqual(['123']);
        }, 1000);

        setTimeout(() => {
            expect(testComponent.contents).toEqual(['123', '456']);
            done();
        }, 2000);
    });
});
