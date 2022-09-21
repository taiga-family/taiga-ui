import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite, TuiIslandHarness} from '@taiga-ui/testing';

import {TuiIslandComponent} from '../island.component';
import {TuiIslandModule} from '../island.module';

describe(`Island`, () => {
    @Component({
        template: `
            <tui-island
                id="size-m"
                size="m"
            >
                Контент
            </tui-island>
            <tui-island
                id="size-l"
                size="l"
            >
                Контент
            </tui-island>
            <tui-island
                id="hoverable"
                hoverable="true"
            >
                Контент
            </tui-island>
            <tui-island id="text-align-left">Контент</tui-island>
            <tui-island
                id="text-align-center"
                textAlign="center"
            >
                Контент
            </tui-island>
        `,
    })
    class TestComponent {
        @ViewChild(TuiIslandComponent, {static: true})
        component!: TuiIslandComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiIslandModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);

        fixture.detectChanges();
    });

    describe(`size:`, () => {
        it(`if not specified, island size m`, async () => {
            const harness = await loader.getHarness(
                TuiIslandHarness.with({selector: `#size-m`}),
            );
            const size = await harness.getSize();

            expect(size).toBe(`m`);
        });

        it(`if the value is l, the size of the island is l`, async () => {
            const harness = await loader.getHarness(
                TuiIslandHarness.with({selector: `#size-l`}),
            );
            const size = await harness.getSize();

            expect(size).toBe(`l`);
        });
    });

    describe(`textAlign:`, () => {
        it(`if no value is specified, the text is left aligned`, async () => {
            const harness = await loader.getHarness(
                TuiIslandHarness.with({selector: `#text-align-left`}),
            );
            const textAlign = await harness.getTextAlign();

            expect(textAlign).toBe(`left`);
        });

        it(`if you pass center, the text will be centered`, async () => {
            const harness = await loader.getHarness(
                TuiIslandHarness.with({selector: `#text-align-center`}),
            );
            const textAlign = await harness.getTextAlign();

            expect(textAlign).toBe(`center`);
        });
    });

    describe(`hoverable:`, () => {
        it(`if true, hover works`, async () => {
            const harness = await loader.getHarness(
                TuiIslandHarness.with({selector: `#hoverable`}),
            );
            const isHoverable = await harness.isHoverable();

            expect(isHoverable).toBe(true);
        });
    });
});
