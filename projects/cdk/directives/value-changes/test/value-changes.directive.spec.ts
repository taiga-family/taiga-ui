import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiValueChanges} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';

describe('TuiValueChangesDirective', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiValueChanges],
        template: `
            <form
                [formGroup]="form"
                (tuiValueChanges)="formSpy($event)"
            >
                <input
                    formControlName="control"
                    (tuiValueChanges)="controlSpy($event)"
                />
            </form>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly form = new FormGroup({
            control: new FormControl('Loremipsum'),
        });

        public formSpy = jest.fn();
        public controlSpy = jest.fn();
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
        testComponent.formSpy.mockClear();
        testComponent.controlSpy.mockClear();
        fixture.detectChanges();
    });

    describe('base case', () => {
        beforeEach(() => {
            const input = fixture.debugElement.query(By.css('input'));

            input.nativeElement.value = 'Hapica';
            input.nativeElement.dispatchEvent(new Event('input'));
        });

        it('works for controls', () => {
            expect(testComponent.controlSpy).toHaveBeenCalledWith('Hapica');
        });

        it('works for containers', () => {
            expect(testComponent.formSpy).toHaveBeenCalledWith({control: 'Hapica'});
        });
    });

    describe('extra case', () => {
        it('should not work when emit same value', () => {
            testComponent.form.patchValue({control: 'Loremipsum'});
            expect(testComponent.controlSpy).not.toHaveBeenCalled();
        });
    });
});
