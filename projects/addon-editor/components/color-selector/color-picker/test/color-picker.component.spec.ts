import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TuiColorPickerComponent} from '../color-picker.component';
import {TuiColorPickerModule} from '../color-picker.module';

@Component({
    template: `
        <tui-color-picker [(color)]="color"></tui-color-picker>
    `,
})
class TestComponent {
    @ViewChild(TuiColorPickerComponent)
    component!: TuiColorPickerComponent;

    color = [0, 255, 0, 1];
}

describe(`ColorPicker`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiColorPickerModule, NoopAnimationsModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Parses color`, () => {
        expect(testComponent.component.currentColor).toEqual([0, 255, 0]);
        expect(testComponent.component.point).toEqual([1, 0]);
        expect(testComponent.component.opacity).toBe(1);
        expect(testComponent.component.hue).toBe(1 / 3);
    });
});
