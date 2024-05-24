import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiTagComponent, TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('Tag component options', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-tag></tui-tag>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTagComponent, {static: true})
        public component!: TuiTagComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiTagModule],
            declarations: [TestComponent],
            providers: [
                NG_EVENT_PLUGINS,
                tuiTagOptionsProvider({
                    size: 'l',
                    status: 'error',
                    autoColor: true,
                }),
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('override by custom options', () => {
        expect(testComponent.component.size).toBe('l');
        expect(testComponent.component.status).toBe('error');
        expect(testComponent.component.autoColor).toBe(true);
    });
});
