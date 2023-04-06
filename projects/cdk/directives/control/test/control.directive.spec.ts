import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiControlModule} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TuiControlDirective`, () => {
    @Component({
        template: `
            <form [formGroup]="form">
                <input
                    #control="ngControl"
                    tuiControl
                    formControlName="control"
                />
                <p>{{ control.control.value }}</p>
            </form>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        readonly form = new FormGroup({
            control: new FormControl(`value`),
        });
    }

    let fixture: ComponentFixture<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiControlModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it(`works`, () => {
        expect(
            fixture.debugElement.query(By.css(`p`)).nativeElement.textContent.trim(),
        ).toBe(`value`);
    });
});
