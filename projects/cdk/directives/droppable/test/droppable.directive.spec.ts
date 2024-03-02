import {Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiDroppableDirective} from '@taiga-ui/cdk';
import {TuiMockEvent} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('TuiDroppable Directive', () => {
    @Component({
        template: `
            <div
                (tuiDroppableDragOverChange)="onDragOver($event)"
                (tuiDroppableDropped)="onDropped($event)"
            >
                <div></div>
            </div>
        `,
    })
    class TestComponent {
        public onDragOver = jest.fn();
        public onDropped = jest.fn();
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let directiveElement: HTMLElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiDroppableDirective],
            declarations: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        directiveElement = fixture.debugElement.query(
            By.directive(TuiDroppableDirective),
        ).nativeElement;
        fixture.detectChanges();
    });

    it('Drop event is prevented', () => {
        const dataTransfer = new DataTransfer();
        const event = new TuiMockEvent('drop', {dataTransfer});

        jest.spyOn(event, 'preventDefault').mockImplementation();
        directiveElement.dispatchEvent(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('DragOver event is prevented', () => {
        const event = new Event('dragover');

        jest.spyOn(event, 'preventDefault').mockImplementation();
        directiveElement.dispatchEvent(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('Dropped DataTransfer is emitted', () => {
        const dataTransfer = new DataTransfer();
        const event = new TuiMockEvent('drop', {dataTransfer});

        directiveElement.dispatchEvent(event);

        expect(testComponent.onDropped).toHaveBeenCalledWith(dataTransfer);
    });

    it('DataTransfer is emitted on DragEnter', () => {
        const dataTransfer = new DataTransfer();
        const event = new TuiMockEvent('dragenter', {dataTransfer});

        directiveElement.dispatchEvent(event);

        expect(testComponent.onDragOver).toHaveBeenCalledWith(dataTransfer);
    });

    it('null is emitted on DragLeave after DragEnter', () => {
        const dataTransfer = new DataTransfer();
        const dragenter = new TuiMockEvent('dragenter', {dataTransfer});
        const dragleave = new TuiMockEvent('dragleave', {dataTransfer});

        directiveElement.dispatchEvent(dragenter);
        directiveElement.dispatchEvent(dragleave);

        expect(testComponent.onDragOver).toHaveBeenCalledWith(null);
    });

    it('Nothing is emitted on DragLeave not preceded by DragEnter on the same element', () => {
        const dataTransfer = new DataTransfer();
        const dragenter = new TuiMockEvent('dragenter', {dataTransfer});
        const dragleave = new TuiMockEvent('dragleave', {dataTransfer});

        directiveElement.dispatchEvent(dragenter);
        testComponent.onDragOver.mockClear();

        directiveElement.firstElementChild?.dispatchEvent(dragleave);

        expect(testComponent.onDragOver).not.toHaveBeenCalled();
    });
});
