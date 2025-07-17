import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiCheckbox} from '@taiga-ui/kit';

import {TuiCheckboxHarness} from './checkbox.harness';

describe('TuiCheckboxHarness', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiCheckbox],
        template: `
            <input
                id="basic-checkbox"
                tuiCheckbox
                type="checkbox"
                [formControl]="basicControl"
            />
            <input
                id="size-m-checkbox"
                size="m"
                tuiCheckbox
                type="checkbox"
                [formControl]="basicControl"
            />
            <input
                id="disabled-checkbox"
                tuiCheckbox
                type="checkbox"
                [formControl]="disabledControl"
            />
            <input
                id="indeterminate-checkbox"
                tuiCheckbox
                type="checkbox"
                [formControl]="indeterminateControl"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        public basicControl = new FormControl(false);
        public disabledControl = new FormControl({value: false, disabled: true});
        public indeterminateControl = new FormControl(null);
    }

    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;
    let testComponent: TestComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should find checkbox by selector', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        expect(checkbox).toBeTruthy();
    });

    it('should check if checkbox is initially unchecked', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        expect(await checkbox.isChecked()).toBe(false);
    });

    it('should check if checkbox is disabled', async () => {
        const disabledCheckbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#disabled-checkbox'}),
        );
        const enabledCheckbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        expect(await disabledCheckbox.isDisabled()).toBe(true);
        expect(await enabledCheckbox.isDisabled()).toBe(false);
    });

    it('should check if checkbox is indeterminate', async () => {
        const indeterminateCheckbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#indeterminate-checkbox'}),
        );
        const normalCheckbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        expect(await indeterminateCheckbox.isIndeterminate()).toBe(true);
        expect(await normalCheckbox.isIndeterminate()).toBe(false);
    });

    it('should check the checkbox', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        await checkbox.check();

        expect(await checkbox.isChecked()).toBe(true);
        expect(testComponent.basicControl.value).toBe(true);
    });

    it('should uncheck the checkbox', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        testComponent.basicControl.setValue(true);
        fixture.detectChanges();

        await checkbox.uncheck();

        expect(await checkbox.isChecked()).toBe(false);
        expect(testComponent.basicControl.value).toBe(false);
    });

    it('should toggle checkbox state', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        await checkbox.toggle();
        expect(await checkbox.isChecked()).toBe(true);

        await checkbox.toggle();
        expect(await checkbox.isChecked()).toBe(false);
    });

    it('should get checkbox size', async () => {
        const sizeMCheckbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#size-m-checkbox'}),
        );
        const basicCheckbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        expect(await sizeMCheckbox.getSize()).toBe('m');
        expect(await basicCheckbox.getSize()).toBeNull();
    });

    it('should not change state when checking already checked checkbox', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        testComponent.basicControl.setValue(true);
        fixture.detectChanges();

        await checkbox.check();

        expect(await checkbox.isChecked()).toBe(true);
        expect(testComponent.basicControl.value).toBe(true);
    });

    it('should not change state when unchecking already unchecked checkbox', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#basic-checkbox'}),
        );

        await checkbox.uncheck();

        expect(await checkbox.isChecked()).toBe(false);
        expect(testComponent.basicControl.value).toBe(false);
    });
});
