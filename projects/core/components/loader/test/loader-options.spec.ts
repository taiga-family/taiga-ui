import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {
    TuiLoaderComponent,
    TuiLoaderModule,
    tuiLoaderOptionsProvider,
} from '@taiga-ui/core';

describe(`Loader component options`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-loader></tui-loader>
        `,
    })
    class TestComponent {
        @ViewChild(TuiLoaderComponent, {static: true})
        component!: TuiLoaderComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiLoaderModule],
            declarations: [TestComponent],
            providers: [
                tuiLoaderOptionsProvider({
                    size: `xxl`,
                    inheritColor: true,
                    overlay: false,
                }),
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`override by custom options`, () => {
        expect(testComponent.component.size).toEqual(`xxl`);
        expect(testComponent.component.inheritColor).toEqual(true);
        expect(testComponent.component.overlay).toEqual(false);
    });
});
