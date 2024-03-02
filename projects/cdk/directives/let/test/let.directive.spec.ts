import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    ViewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiLetModule} from '@taiga-ui/cdk';

describe('Let', () => {
    @Component({
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
    class TestComponent {
        @ViewChild('test')
        public el!: ElementRef;

        public counter = 0;

        public get getter(): string {
            this.counter++;

            return '!';
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiLetModule],
            declarations: [TestComponent],
        });

        await TestBed.compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Result is shown 3 times', () => {
        expect(testComponent.el.nativeElement.textContent!.trim()).toBe('!!!');
    });

    it('Getter is called once', () => {
        expect(testComponent.counter).toBe(1);
    });
});
