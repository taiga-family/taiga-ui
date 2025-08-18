import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    ViewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiLet} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('Let', () => {
    @Component({
        standalone: true,
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
            providers: [NG_EVENT_PLUGINS],
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
