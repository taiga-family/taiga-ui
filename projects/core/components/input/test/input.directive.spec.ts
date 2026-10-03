import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {tuiControlOptionsProvider} from '@taiga-ui/cdk';
import {provideTaiga, TuiInput, TuiInputDirective} from '@taiga-ui/core';

describe('TuiInputDirective', () => {
    const readonly = signal(false);

    @Component({
        imports: [TuiInput],
        template: `
            <tui-textfield>
                <input tuiInput />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [tuiControlOptionsProvider({readonly})],
    })
    class Test {
        public readonly input = viewChild.required(TuiInputDirective);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let element: HTMLInputElement;

    beforeEach(async () => {
        readonly.set(false);
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        element = fixture.nativeElement.querySelector('input');
    });

    it('inherits readonly state from control options', () => {
        expect(testComponent.input().readOnly()).toBe(false);
        expect(element.readOnly).toBe(false);

        readonly.set(true);
        fixture.detectChanges();

        expect(testComponent.input().readOnly()).toBe(true);
        expect(element.readOnly).toBe(true);
    });
});
