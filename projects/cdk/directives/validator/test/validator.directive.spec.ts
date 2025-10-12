import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiValidator} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';

describe('TuiValidator directive', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiValidator],
        template: `
            @if (show) {
                <input
                    [formControl]="control"
                    [tuiValidator]="validator"
                />
            }
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public show = false;

        public readonly control = new FormControl();

        public readonly validator = Validators.required;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
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
