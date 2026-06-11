import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor, TuiInputColorComponent} from '@taiga-ui/kit';

describe('TuiInputColorComponent', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputColor, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputColor
                        [format]="format"
                        [formControl]="control"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly component = viewChild.required(TuiInputColorComponent);
        public control = new FormControl('');
        public format: 'hex' | 'hexa' = 'hexa';
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

    describe('hexa mode', () => {
        it('preserves entered base color when opacity slider changes before alpha is typed', () => {
            testComponent.control.setValue('#ffffff');
            fixture.detectChanges();

            testComponent.component()['onOpacity'](128);
            fixture.detectChanges();

            expect(testComponent.control.value).toBe('#ffffff80');
        });

        it('does not reset base color to #000000 when value has 7 chars', () => {
            testComponent.control.setValue('#ab1234');
            fixture.detectChanges();

            testComponent.component()['onOpacity'](255);
            fixture.detectChanges();

            expect(testComponent.control.value).not.toContain('#000000');
            expect(testComponent.control.value).toBe('#ab1234ff');
        });
    });
});
