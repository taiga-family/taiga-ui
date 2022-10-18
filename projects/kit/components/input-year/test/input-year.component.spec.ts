import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';
import {TuiInputYearComponent, TuiInputYearModule} from '@taiga-ui/kit';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`InputYear`, () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-year [formControl]="control"></tui-input-year>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputYearComponent, {static: true})
        component!: TuiInputYearComponent;

        control = new FormControl(null);
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputYearModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Does not allow incorrect year entry`, () => {
        testComponent.component.onValueChange(`12345`);

        expect(testComponent.control.value.year).toBe(1234);
    });
});
