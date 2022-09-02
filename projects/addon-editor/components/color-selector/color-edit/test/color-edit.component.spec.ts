import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiColorEditComponent, TuiColorEditModule} from '@taiga-ui/addon-editor';

@Component({
    template: `
        <tui-color-edit [(color)]="color"></tui-color-edit>
    `,
})
class TestComponent {
    @ViewChild(TuiColorEditComponent)
    component!: TuiColorEditComponent;

    color = [255, 0, 0, 1];
}

describe(`ColorEdit`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiColorEditModule, NoopAnimationsModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`HEX`, () => {
        expect(testComponent.component.hex).toBe(`ff0000`);
    });

    it(`Updates`, () => {
        testComponent.component.onHexChange(`00ff00`);

        expect(testComponent.color).toEqual([0, 255, 0, 1]);
    });

    it(`Does not trigger if HEX is not fully entered`, () => {
        testComponent.component.onHexChange(`00ff`);

        expect(testComponent.color).toEqual([255, 0, 0, 1]);
    });
});
