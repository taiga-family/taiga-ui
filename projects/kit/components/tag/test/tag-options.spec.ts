import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiTagComponent, TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/kit';

describe(`Tag component options`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-tag></tui-tag>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTagComponent, {static: true})
        component!: TuiTagComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiTagModule],
            declarations: [TestComponent],
            providers: [
                tuiTagOptionsProvider({
                    size: `l`,
                    status: `error`,
                    autoColor: true,
                }),
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`override by custom options`, () => {
        expect(testComponent.component.size).toEqual(`l`);
        expect(testComponent.component.status).toEqual(`error`);
        expect(testComponent.component.autoColor).toEqual(true);
    });
});
