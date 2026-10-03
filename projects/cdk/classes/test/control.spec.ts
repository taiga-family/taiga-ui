import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    signal,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiControl, tuiControlOptionsProvider} from '@taiga-ui/cdk';

describe('TuiControl options', () => {
    const readonly = signal(false);

    @Directive({selector: '[testControl]'})
    class TestControl extends TuiControl<string> {}

    @Component({
        imports: [ReactiveFormsModule, TestControl],
        template: '<input testControl [formControl]="formControl" />',
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [tuiControlOptionsProvider({readonly})],
    })
    class Test {
        public readonly control = viewChild.required(TestControl);
        public readonly formControl = new FormControl('', {nonNullable: true});
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        readonly.set(false);
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('inherits readonly state from options', () => {
        expect(testComponent.control().readOnly()).toBe(false);

        readonly.set(true);
        fixture.detectChanges();

        expect(testComponent.control().readOnly()).toBe(true);
    });

    it('reacts when inherited readonly state changes back', () => {
        readonly.set(true);
        fixture.detectChanges();
        expect(testComponent.control().readOnly()).toBe(true);

        readonly.set(false);
        fixture.detectChanges();

        expect(testComponent.control().readOnly()).toBe(false);
    });
});
