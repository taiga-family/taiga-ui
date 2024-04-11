import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {
    TuiLoaderComponent,
    TuiLoaderModule,
    tuiLoaderOptionsProvider,
} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('Loader component options', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-loader></tui-loader>
        `,
    })
    class TestComponent {
        @ViewChild(TuiLoaderComponent, {static: true})
        public component!: TuiLoaderComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiLoaderModule],
            declarations: [TestComponent],
            providers: [
                NG_EVENT_PLUGINS,
                tuiLoaderOptionsProvider({
                    size: 'xxl',
                    inheritColor: true,
                    overlay: false,
                }),
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('override by custom options', () => {
        expect(testComponent.component.size).toBe('xxl');
        expect(testComponent.component.inheritColor).toBe(true);
        expect(testComponent.component.overlay).toBe(false);
    });
});
