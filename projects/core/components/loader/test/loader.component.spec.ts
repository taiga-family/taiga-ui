import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {NgIf} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiLoader} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {TuiLoaderHarness} from '@taiga-ui/testing';

describe('Loader', () => {
    @Component({
        standalone: true,
        imports: [TuiLoader, NgIf],
        template: `
            <tui-loader
                *ngIf="custom; else def"
                [showLoader]="showLoader"
                [textContent]="content"
            ></tui-loader>
            <ng-template #def>
                <tui-loader></tui-loader>
            </ng-template>
            <ng-template #template>Loading...</ng-template>
        `,
    })
    class Test {
        @ViewChild(TuiLoader, {static: true})
        public component!: TuiLoader;

        @ViewChild('template', {static: true})
        public template: PolymorpheusContent;

        public custom = false;
        public showLoader = false;
        public content: PolymorpheusContent;
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;
    let loader: HarnessLoader;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('showLoader:', () => {
        it('loader is shown by default', async () => {
            const harness = await loader.getHarness(TuiLoaderHarness);
            const shown = await harness.isLoading();

            expect(shown).toBe(true);
        });

        it('with showLoader = false, the loader is shown', async () => {
            component.custom = true;
            fixture.detectChanges();

            const harness = await loader.getHarness(TuiLoaderHarness);
            const shown = await harness.isLoading();

            expect(shown).toBe(false);
        });
    });

    describe('Text', () => {
        it('no text', async () => {
            const harness = await loader.getHarness(TuiLoaderHarness);
            const text = await harness.getText();

            expect(text).toBe('');
        });

        it('if there is `textContent`, the text is shown', async () => {
            component.content = component.template;
            component.custom = true;
            component.showLoader = true;
            fixture.detectChanges();

            const harness = await loader.getHarness(TuiLoaderHarness);
            const text = await harness.getText();

            expect(text).toBe('Loading...');
        });
    });
});
