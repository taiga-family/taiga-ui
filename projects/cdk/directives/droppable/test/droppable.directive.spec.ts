import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiDroppable} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiMockEvent} from '@taiga-ui/testing';

describe('TuiDroppable Directive', () => {
    @Component({
        standalone: true,
        imports: [TuiDroppable],
        template: `
            <div
                (tuiDroppableDragOverChange)="onDragOver($event)"
                (tuiDroppableDropped)="onDropped($event)"
            >
                <div></div>
            </div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public onDragOver: any = jest.fn();
        public onDropped: any = jest.fn();
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let directiveElement: HTMLElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;

        directiveElement = fixture.debugElement.query(
            By.directive(TuiDroppable),
        ).nativeElement;
        fixture.detectChanges();
    });

    it('drop event is prevented', () => {
        const dataTransfer = new DataTransfer();
        const event = new TuiMockEvent('drop', {dataTransfer});

        jest.spyOn(event, 'preventDefault').mockImplementation(() => undefined);
        directiveElement.dispatchEvent(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('dragover event is prevented', () => {
        const event = new Event('dragover');

        jest.spyOn(event, 'preventDefault').mockImplementation(() => undefined);
        directiveElement.dispatchEvent(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('dropped DataTransfer is emitted', () => {
        const dataTransfer = new DataTransfer();
        const event = new TuiMockEvent('drop', {dataTransfer});

        directiveElement.dispatchEvent(event);

        expect(testComponent.onDropped).toHaveBeenCalledWith(dataTransfer);
    });

    it('dataTransfer is emitted on DragEnter', () => {
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

    it('nothing is emitted on DragLeave not preceded by DragEnter on the same element', () => {
        const dataTransfer = new DataTransfer();
        const dragenter = new TuiMockEvent('dragenter', {dataTransfer});
        const dragleave = new TuiMockEvent('dragleave', {dataTransfer});

        directiveElement.dispatchEvent(dragenter);
        testComponent.onDragOver.mockClear();

        directiveElement.firstElementChild?.dispatchEvent(dragleave);

        expect(testComponent.onDragOver).not.toHaveBeenCalled();
    });
});
