import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiValueChangesModule} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('TuiValueChangesDirective', () => {
    @Component({
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
    class TestComponent {
        public readonly form = new FormGroup({
            control: new FormControl(),
        });

        public formSpy = jest.fn();
        public controlSpy = jest.fn();
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiValueChangesModule],
            declarations: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        testComponent.formSpy.mockClear();
        testComponent.controlSpy.mockClear();
        fixture.detectChanges();

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
