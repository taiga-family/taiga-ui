import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiShimmer} from '@taiga-ui/kit';

describe('TuiShimmer directive', () => {
    @Component({
        imports: [TuiShimmer],
        template: `
            <div
                style="--tui-duration: 300ms"
                [tuiShimmer]="loading()"
            ></div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly loading = signal(false);
    }

    const cancel = jest.fn();
    const commitStyles = jest.fn();
    const animation = {
        cancel,
        commitStyles,
        finished: Promise.resolve(),
    } as unknown as Animation;

    const animate = jest.fn(() => animation);
    const descriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'animate');
    const getComputedStyleSpy = jest
        .spyOn(globalThis, 'getComputedStyle')
        .mockReturnValue({
            getPropertyValue: () => '300ms',
        } as unknown as CSSStyleDeclaration);

    let fixture: ComponentFixture<Test>;

    beforeAll(() => {
        Object.defineProperty(HTMLElement.prototype, 'animate', {
            configurable: true,
            value: animate,
        });
    });

    afterAll(() => {
        getComputedStyleSpy.mockRestore();

        if (descriptor) {
            Object.defineProperty(HTMLElement.prototype, 'animate', descriptor);
        } else {
            Reflect.deleteProperty(HTMLElement.prototype, 'animate');
        }
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        animate.mockClear();
        cancel.mockClear();
        commitStyles.mockClear();
    });

    it('does not animate when initially rendered with false', () => {
        fixture.detectChanges();

        expect(animate).not.toHaveBeenCalled();

        fixture.componentInstance.loading.set(true);
        fixture.detectChanges();

        expect(animate).toHaveBeenCalledTimes(1);

        fixture.componentInstance.loading.set(false);
        fixture.detectChanges();

        expect(animate).toHaveBeenCalledTimes(2);
    });
});
