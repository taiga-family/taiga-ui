import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiValidatorDirective} from '@taiga-ui/cdk';

describe('TuiValidator directive', () => {
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
        public show = false;

        public readonly control = new FormControl();

        public readonly validator = Validators.required;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, CommonModule, TuiValidatorDirective],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('adds validator', () => {
        it('valid initially', () => {
            expect(testComponent.control.valid).toBe(true);
        });

        it('becomes invalid', () => {
            testComponent.show = true;
            fixture.detectChanges();

            expect(testComponent.control.valid).toBe(false);
        });
    });
});
