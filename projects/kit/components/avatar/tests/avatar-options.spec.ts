import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiAvatarComponent,
    TuiAvatarModule,
    tuiAvatarOptionsProvider,
} from '@taiga-ui/kit';

describe(`Avatar component options`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-avatar></tui-avatar>
        `,
    })
    class TestComponent {
        @ViewChild(TuiAvatarComponent, {static: true})
        component!: TuiAvatarComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiAvatarModule],
            declarations: [TestComponent],
            providers: [
                tuiAvatarOptionsProvider({
                    size: `l`,
                    autoColor: true,
                    rounded: true,
                }),
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`override by custom options`, () => {
        expect(testComponent.component.size).toEqual(`l`);
        expect(testComponent.component.autoColor).toEqual(true);
        expect(testComponent.component.rounded).toEqual(true);
    });
});
