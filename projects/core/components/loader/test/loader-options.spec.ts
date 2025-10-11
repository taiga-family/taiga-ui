import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiLoader, tuiLoaderOptionsProvider} from '@taiga-ui/core';

describe('Loader component options', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    @Component({
        standalone: true,
        imports: [TuiLoader],
        template: `
            <tui-loader />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiLoader, {static: true})
        public component!: TuiLoader;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                tuiLoaderOptionsProvider({
                    size: 'xxl',
                    inheritColor: true,
                    overlay: false,
                }),
            ],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('override by custom options', () => {
        expect(testComponent.component.size()).toBe('xxl');
        expect(testComponent.component.inheritColor()).toBe(true);
        expect(testComponent.component.overlay()).toBe(false);
    });
});
