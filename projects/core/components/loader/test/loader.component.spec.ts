import {type HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component, TemplateRef, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiLoader} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {TuiLoaderHarness} from '@taiga-ui/testing';

describe('Loader', () => {
    @Component({
        imports: [TuiLoader],
        template: `
            @if (custom) {
                <tui-loader
                    [loading]="showLoader"
                    [textContent]="content"
                />
            } @else {
                <tui-loader />
            }
            <ng-template #def>
                <tui-loader />
            </ng-template>
            <ng-template #template>Loading...</ng-template>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public readonly component = viewChild.required(TuiLoader);
        public readonly template = viewChild.required('template', {read: TemplateRef});
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
            component.content = component.template();
            component.custom = true;
            component.showLoader = true;
            fixture.detectChanges();

            const harness = await loader.getHarness(TuiLoaderHarness);
            const text = await harness.getText();

            expect(text).toBe('Loading...');
        });
    });
});
