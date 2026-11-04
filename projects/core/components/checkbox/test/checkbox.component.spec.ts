import {type HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckboxHarness} from '@taiga-ui/testing';

import {TuiCheckbox} from '../checkbox.component';

describe('Checkbox', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiCheckbox],
        template: `
            <input
                id="default"
                tuiCheckbox
                type="checkbox"
                [formControl]="control"
            />
            <input
                id="small"
                size="s"
                tuiCheckbox
                type="checkbox"
                [formControl]="smallControl"
            />
            <input
                id="indeterminate"
                tuiCheckbox
                type="checkbox"
                [formControl]="indeterminateControl"
            />
            <input
                id="disabled"
                tuiCheckbox
                type="checkbox"
                [formControl]="disabledControl"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl(false, {nonNullable: true});
        public readonly smallControl = new FormControl(false, {nonNullable: true});
        public readonly indeterminateControl = new FormControl<boolean | null>(null);
        public readonly disabledControl = new FormControl(
            {value: false, disabled: true},
            {nonNullable: true},
        );
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

    it('finds checkbox by selector', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#default'}),
        );

        expect(checkbox).toBeTruthy();
    });

    it('checks and unchecks checkbox and updates form control', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#default'}),
        );

        expect(await checkbox.isChecked()).toBe(false);

        await checkbox.check();

        expect(testComponent.control.value).toBe(true);
        expect(await checkbox.isChecked()).toBe(true);

        await checkbox.uncheck();

        expect(testComponent.control.value).toBe(false);
        expect(await checkbox.isChecked()).toBe(false);
    });

    it('reads indeterminate state', async () => {
        const checkbox = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#indeterminate'}),
        );

        expect(await checkbox.isIndeterminate()).toBe(true);
    });

    it('reads disabled state', async () => {
        const enabled = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#default'}),
        );

        const disabled = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#disabled'}),
        );

        expect(await enabled.isDisabled()).toBe(false);
        expect(await disabled.isDisabled()).toBe(true);
    });

    it('reads size', async () => {
        const defaultSize = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#default'}),
        );

        const small = await loader.getHarness(
            TuiCheckboxHarness.with({selector: '#small'}),
        );

        expect(await defaultSize.getSize()).toBe('m');
        expect(await small.getSize()).toBe('s');
    });
});
