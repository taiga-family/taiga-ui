import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {TuiInputDateTimeModule} from '@taiga-ui/kit/components';
import {NativeInputPO} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';

@Component({
    template: `
        <tui-root>
            <tui-input-date-time [formControl]="control"></tui-input-date-time>
        </tui-root>
    `,
})
class TestComponent {
    readonly control = new FormControl([new TuiDay(2021, 6, 12), null]);
}

describe('InputDateTime', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputDateTimeModule,
            ],
            declarations: [TestComponent],
        });
    });

    let fixture: ComponentFixture<TestComponent>;
    let inputPO: NativeInputPO;

    beforeEach(done => {
        fixture = TestBed.createComponent(TestComponent);
        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            done();
        });
    });

    it('displays initial value', done => {
        fixture.whenStable().then(() => {
            expect(inputPO.value).toBe('12.07.2021');
            done();
        });
    });

    it('does not clean not finished time string on the first blur', done => {
        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText('12.07.2021 1');
                inputPO.blur();

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe('12.07.2021, 1');
                done();
            });
    });

    it('does not clean not finished time string on the second blur', done => {
        inputPO.focus();
        inputPO.blur();

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText('12.07.20211');
                inputPO.blur();

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe('12.07.2021, 1');
                done();
            });
    });
});
