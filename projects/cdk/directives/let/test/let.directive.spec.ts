import type {ElementRef} from '@angular/core';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('Let', () => {
    @Component({
        standalone: true,
        imports: [TuiLetDirective],
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
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
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
