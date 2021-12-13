import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {
    TuiCopyProcessorDirective,
    TuiCopyProcessorModule,
} from '@taiga-ui/cdk/directives/copy-processor';
import {TuiStringHandler} from '@taiga-ui/cdk/types';
import {configureTestSuite} from 'ng-bullet';

describe('TuiCopyProcessor Directive', () => {
    @Component({
        template: `
            <input class="test" [tuiCopyProcessor]="processor" />
        `,
    })
    class TestComponent {
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
        const clipboardData = jasmine.createSpyObj('clipboardData', ['setDate']);
        const event = new ClipboardEvent('copy', {clipboardData});

        testDirectiveElement.dispatchEvent(event);

        expect(event.clipboardData?.setData).toHaveBeenCalledWith(
            'text/plain',
            component.processor(mockSelectedValue),
        );
    });
});
