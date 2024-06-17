import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiLoader, tuiLoaderOptionsProvider} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('Loader component options', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    @Component({
        standalone: true,
        imports: [TuiLoader],
        template: `
            <tui-loader></tui-loader>
        `,
    })
    class Test {
        @ViewChild(TuiLoader, {static: true})
        public component!: TuiLoader;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                NG_EVENT_PLUGINS,
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
        expect(testComponent.component.size).toBe('xxl');
        expect(testComponent.component.inheritColor).toBe(true);
        expect(testComponent.component.overlay).toBe(false);
    });
});
