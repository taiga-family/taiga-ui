import {type HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiExpandHarness} from '@taiga-ui/testing';

import {TuiExpand} from '../expand.component';

describe('Expand', () => {
    @Component({
        imports: [TuiExpand],
        template: `
            <tui-expand id="collapsed" [expanded]="expanded()">
                Collapsed content
            </tui-expand>

            <tui-expand id="expanded" [expanded]="true">
                Expanded content
            </tui-expand>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly expanded = signal(false);
    }

    let fixture: ComponentFixture<Test>;
    let loader: HarnessLoader;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('finds expand by selector', async () => {
        const expand = await loader.getHarness(
            TuiExpandHarness.with({selector: '#collapsed'}),
        );

        expect(expand).toBeTruthy();
    });

    it('reads expanded state', async () => {
        const collapsed = await loader.getHarness(
            TuiExpandHarness.with({selector: '#collapsed'}),
        );
        const expanded = await loader.getHarness(
            TuiExpandHarness.with({selector: '#expanded'}),
        );

        expect(await collapsed.isExpanded()).toBe(false);
        expect(await expanded.isExpanded()).toBe(true);
    });

    it('updates expanded state', async () => {
        const expand = await loader.getHarness(
            TuiExpandHarness.with({selector: '#collapsed'}),
        );

        expect(await expand.isExpanded()).toBe(false);

        testComponent.expanded.set(true);
        fixture.detectChanges();

        expect(await expand.isExpanded()).toBe(true);
    });
});
