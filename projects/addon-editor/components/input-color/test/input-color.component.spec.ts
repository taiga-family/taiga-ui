import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TuiInputColorComponent} from '../input-color.component';
import {TuiInputColorModule} from '../input-color.module';

@Component({
    template: `
        <tui-input-color [(ngModel)]="color"></tui-input-color>
    `,
})
class TestComponent {
    @ViewChild(TuiInputColorComponent)
    component!: TuiInputColorComponent;

    color = '#0000ff';
}

describe('InputColor', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiInputColorModule, FormsModule, NoopAnimationsModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Plain string for single color', () => {
        expect(testComponent.component.background).toBe(testComponent.color);
    });

    it('Sanitized value for gradient', async () => {
        testComponent.color = 'linear-gradient(#ff0000, #00ff00)';
        fixture.detectChanges();

        await fixture.whenStable();

        expect(typeof testComponent.component.background).toBe('object');
    });
});
