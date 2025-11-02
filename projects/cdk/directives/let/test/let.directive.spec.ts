import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    ViewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiLet} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';

describe('Let', () => {
    @Component({
        imports: [TuiLet],
        template: `
            <div
                *tuiLet="getter as value"
                #test
            >
                {{ value }}{{ value }}{{ value }}
            </div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild('test')
        public el!: ElementRef;

        public counter = 0;

        public get getter(): string {
            this.counter++;

            return '!';
        }
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

    it('result is shown 3 times', () => {
        expect(testComponent.el.nativeElement.textContent!.trim()).toBe('!!!');
    });

    it('getter is called once', () => {
        expect(testComponent.counter).toBe(1);
    });
});
