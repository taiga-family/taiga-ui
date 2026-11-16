import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideTaiga} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

describe('TuiRange pointer drag', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiRange],
        template: `
            <tui-range [formControl]="control" />
            <button type="button">Outside the range</button>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<[number, number]>([20, 80]);
    }

    it.each(['pointerup', 'pointercancel'])('stops dragging after %s', (type) => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();

        const range = fixture.debugElement.query(By.directive(TuiRange));
        const host: HTMLElement = range.nativeElement;
        const end = range.injector.get(TuiRange).thumbs()[1];
        const button: HTMLButtonElement = fixture.debugElement.query(
            By.css('button'),
        ).nativeElement;

        const {control} = fixture.componentInstance;

        jest.spyOn(host, 'getBoundingClientRect').mockReturnValue({
            ...host.getBoundingClientRect(),
            left: 0,
            right: 100,
            width: 100,
        });
        end.setPointerCapture = jest.fn();

        const dispatch = (target: HTMLElement, type: string, clientX: number): void => {
            const event = new MouseEvent(type, {bubbles: true, clientX});

            Object.defineProperty(event, 'pointerId', {value: 1});
            target.dispatchEvent(event);
        };

        dispatch(end, 'pointerdown', 80);
        dispatch(end, 'pointermove', 60);
        expect(control.value).toEqual([20, 60]);

        dispatch(end, type, 60);
        dispatch(button, 'pointermove', 90);

        expect(control.value).toEqual([20, 60]);

        dispatch(end, 'pointerdown', 60);
        dispatch(end, 'pointermove', 70);

        expect(control.value).toEqual([20, 70]);
    });
});
