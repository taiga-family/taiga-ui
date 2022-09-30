import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiDroppableDirective} from '../droppable.directive';

describe(`TuiDroppable Directive`, () => {
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
        onDragOver = jasmine.createSpy(`dragOver`);
        onDropped = jasmine.createSpy(`drop`);
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let directiveElement: HTMLElement;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [TestComponent, TuiDroppableDirective],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        directiveElement = fixture.debugElement.query(
            By.directive(TuiDroppableDirective),
        ).nativeElement;
        fixture.detectChanges();
    });

    it(`Drop event is prevented`, () => {
        const dataTransfer = new DataTransfer();
        const event = new DragEvent(`drop`, {dataTransfer});

        event.preventDefault = jasmine.createSpy(`preventDefault`);
        directiveElement.dispatchEvent(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });

    it(`DragOver event is prevented`, () => {
        const event = new DragEvent(`dragover`);

        event.preventDefault = jasmine.createSpy(`preventDefault`);
        directiveElement.dispatchEvent(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });

    it(`Dropped DataTransfer is emitted`, () => {
        const dataTransfer = new DataTransfer();
        const event = new DragEvent(`drop`, {dataTransfer});

        directiveElement.dispatchEvent(event);

        expect(testComponent.onDropped).toHaveBeenCalledWith(dataTransfer);
    });

    it(`DataTransfer is emitted on DragEnter`, () => {
        const dataTransfer = new DataTransfer();
        const event = new DragEvent(`dragenter`, {dataTransfer});

        directiveElement.dispatchEvent(event);

        expect(testComponent.onDragOver).toHaveBeenCalledWith(dataTransfer);
    });

    it(`null is emitted on DragLeave after DragEnter`, () => {
        const dataTransfer = new DataTransfer();
        const dragenter = new DragEvent(`dragenter`, {dataTransfer});
        const dragleave = new DragEvent(`dragleave`, {dataTransfer});

        directiveElement.dispatchEvent(dragenter);
        directiveElement.dispatchEvent(dragleave);

        expect(testComponent.onDragOver).toHaveBeenCalledWith(null);
    });

    it(`Nothing is emitted on DragLeave not preceded by DragEnter on the same element`, () => {
        const dataTransfer = new DataTransfer();
        const dragenter = new DragEvent(`dragenter`, {dataTransfer});
        const dragleave = new DragEvent(`dragleave`, {dataTransfer});

        directiveElement.dispatchEvent(dragenter);
        testComponent.onDragOver.calls.reset();

        directiveElement.firstElementChild!.dispatchEvent(dragleave);

        expect(testComponent.onDragOver).not.toHaveBeenCalled();
    });
});
