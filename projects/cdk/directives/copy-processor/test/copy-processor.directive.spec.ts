import {Component, HostListener} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {
    TuiCopyProcessorDirective,
    TuiCopyProcessorModule,
} from '@taiga-ui/cdk/directives/copy-processor';
import {TuiStringHandler} from '@taiga-ui/cdk/types';
import {configureTestSuite} from 'ng-bullet';
import {Subject} from 'rxjs';

describe('TuiCopyProcessor Directive', () => {
    @Component({
        template: `
            <input class="test" [tuiCopyProcessor]="processor" />
        `,
    })
    class TestComponent {
        readonly clipboardDataDataChanged = new Subject<string>();

        @HostListener('copy', ['$event'])
        onCopy(event: ClipboardEvent) {
            this.clipboardDataDataChanged.next(
                event.clipboardData?.getData('text/plain'),
            );
        }

        processor: TuiStringHandler<string> = text =>
            text.replace(',', '.').replace(new RegExp(' ', 'g'), '');
    }

    const mockSelectedValue = '1 12,34';
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let testDirectiveElement: HTMLElement;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiCopyProcessorModule],
            providers: [
                {
                    provide: WINDOW,
                    useValue: {
                        getSelection(): any {
                            return mockSelectedValue;
                        },
                    },
                },
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;

        testDirectiveElement = fixture.debugElement.query(
            By.directive(TuiCopyProcessorDirective),
        ).nativeElement;

        fixture.detectChanges();
    });

    it('clipboardData is processed via processed function when copy event happen', () => {
        const clipboardData = new DataTransfer();
        const event = new ClipboardEvent('copy', {clipboardData});

        testDirectiveElement.dispatchEvent(event);

        component.clipboardDataDataChanged.subscribe(value => {
            expect(value).toBe(component.processor(mockSelectedValue));
        });
    });
});
