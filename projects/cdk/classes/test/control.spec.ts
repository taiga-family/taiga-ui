import {ChangeDetectionStrategy, Component, Directive} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiControl} from '@taiga-ui/cdk';

describe('TuiControl', () => {
    @Directive({selector: '[testControl]'})
    class TestControl extends TuiControl<string> {}

    @Component({
        imports: [ReactiveFormsModule, TestControl],
        template: '<input testControl [formControl]="control" />',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl('', {nonNullable: true});
    }

    let fixture: ComponentFixture<Test>;
    let test: Test;
    let control: TestControl;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        test = fixture.componentInstance;
        control = fixture.debugElement
            .query(By.directive(TestControl))
            .injector.get(TestControl);
        fixture.detectChanges();
    });

    it('preserves a synchronous model write from valueChanges', () => {
        test.control.valueChanges.subscribe(() => {
            test.control.setValue('reset', {emitEvent: false});
        });

        control.onChange('user');

        expect(test.control.value).toBe('reset');
        expect(control.value()).toBe('reset');
    });
});
