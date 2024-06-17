import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiControlDirective} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('TuiControlDirective', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiControlDirective],
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
            providers: [NG_EVENT_PLUGINS],
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
