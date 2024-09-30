import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiButtonHarness} from '@taiga-ui/testing';

import {TuiButton} from '../button.directive';

describe('ButtonDirective', () => {
    @Component({
        standalone: true,
        imports: [TuiButton],
        template: `
            <button
                id="size-unspecified"
                tuiButton
            >
                Unspecified
            </button>

            <button
                id="size-l"
                size="l"
                tuiButton
            >
                Large
            </button>

            <button
                id="size-m"
                size="m"
                tuiButton
            >
                Medium
            </button>

            <button
                id="size-s"
                size="s"
                tuiButton
            >
                Small
            </button>

            <button
                id="size-xs"
                size="xs"
                tuiButton
            >
                Extra small
            </button>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);

        fixture.detectChanges();
    });

    describe('size:', () => {
        it('if not specified, button size l', async () => {
            const harness = await loader.getHarness(
                TuiButtonHarness.with({selector: '#size-unspecified'}),
            );
            const size = await harness.getSize();

            expect(size).toBe('l');
        });

        it('if the value is l, the size of the button is l', async () => {
            const harness = await loader.getHarness(
                TuiButtonHarness.with({selector: '#size-l'}),
            );
            const size = await harness.getSize();

            expect(size).toBe('l');
        });

        it('if the value is m, the size of the button is m', async () => {
            const harness = await loader.getHarness(
                TuiButtonHarness.with({selector: '#size-m'}),
            );
            const size = await harness.getSize();

            expect(size).toBe('m');
        });

        it('if the value is s, the size of the button is s', async () => {
            const harness = await loader.getHarness(
                TuiButtonHarness.with({selector: '#size-s'}),
            );
            const size = await harness.getSize();

            expect(size).toBe('s');
        });

        it('if the value is xs, the size of the button is xs', async () => {
            const harness = await loader.getHarness(
                TuiButtonHarness.with({selector: '#size-xs'}),
            );
            const size = await harness.getSize();

            expect(size).toBe('xs');
        });
    });
});
