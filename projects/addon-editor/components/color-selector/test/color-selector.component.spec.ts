import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiColorSelectorComponent, TuiColorSelectorModule} from '@taiga-ui/addon-editor';

@Component({
    template: `
        <tui-color-selector
            [colors]="colors"
            [(color)]="color"
        ></tui-color-selector>
    `,
})
class TestComponent {
    @ViewChild(TuiColorSelectorComponent)
    component!: TuiColorSelectorComponent;

    colors = new Map([
        [`hap`, `#ff0000`],
        [`ica`, `linear-gradient(red, blue)`],
    ]);

    color = `#0000ff`;
}

describe(`ColorSelector`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiColorSelectorModule, NoopAnimationsModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Parses color`, () => {
        expect(testComponent.component.color).toEqual([0, 0, 255, 1]);
    });

    it(`Filters out gradients from palette`, () => {
        expect(testComponent.component.palette.get(`hap`)).toBe(`#ff0000`);
        expect(testComponent.component.palette.get(`ica`)).toBeUndefined();
    });
});
