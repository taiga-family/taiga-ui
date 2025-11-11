import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiNgControl} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';

describe('TuiNgControl', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiNgControl],
        template: `
            <form [formGroup]="form">
                <input
                    #control="ngControl"
                    formControlName="control"
                    tuiControl
                />
                <p>{{ control.control.value }}</p>
            </form>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly form = new FormGroup({
            control: new FormControl('value'),
        });
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('works', () => {
        expect(
            fixture.debugElement.query(By.css('p')).nativeElement.textContent.trim(),
        ).toBe('value');
    });
});
