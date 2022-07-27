import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiValidatorModule} from '../validator.module';

describe(`TuiValidator directive`, () => {
    @Component({
        template: `
            <input
                *ngIf="show"
                [formControl]="control"
                [tuiValidator]="validator"
            />
        `,
    })
    class TestComponent {
        show = false;

        readonly control = new FormControl();

        readonly validator = Validators.required;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, CommonModule, TuiValidatorModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`adds validator`, () => {
        it(`valid initially`, () => {
            expect(testComponent.control.valid).toBe(true);
        });

        it(`becomes invalid`, () => {
            testComponent.show = true;
            fixture.detectChanges();

            expect(testComponent.control.valid).toBe(false);
        });
    });
});
