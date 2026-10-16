import {type HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRadioHarness} from '@taiga-ui/testing';

import {TuiRadio} from '../radio';

describe('Radio', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiRadio],
        template: `
            <input
                id="first"
                name="option"
                tuiRadio
                type="radio"
                value="first"
                [formControl]="control"
            />
            <input
                id="second"
                name="option"
                tuiRadio
                type="radio"
                value="second"
                [formControl]="control"
            />
            <input
                id="small"
                name="size"
                size="s"
                tuiRadio
                type="radio"
                value="small"
                [formControl]="sizeControl"
            />
            <input
                id="disabled"
                tuiRadio
                type="radio"
                [formControl]="disabledControl"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl('first', {nonNullable: true});
        public readonly sizeControl = new FormControl('', {nonNullable: true});
        public readonly disabledControl = new FormControl({
            value: false,
            disabled: true,
        });
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

    it('finds radio by selector', async () => {
        const radio = await loader.getHarness(TuiRadioHarness.with({selector: '#first'}));

        expect(radio).toBeTruthy();
    });

    it('reads checked state', async () => {
        const first = await loader.getHarness(TuiRadioHarness.with({selector: '#first'}));
        const second = await loader.getHarness(
            TuiRadioHarness.with({selector: '#second'}),
        );

        expect(await first.isChecked()).toBe(true);
        expect(await second.isChecked()).toBe(false);
    });

    it('checks radio and updates form control', async () => {
        const first = await loader.getHarness(TuiRadioHarness.with({selector: '#first'}));
        const second = await loader.getHarness(
            TuiRadioHarness.with({selector: '#second'}),
        );

        await second.check();

        expect(testComponent.control.value).toBe('second');
        expect(await first.isChecked()).toBe(false);
        expect(await second.isChecked()).toBe(true);
    });

    it('reads disabled state', async () => {
        const enabled = await loader.getHarness(
            TuiRadioHarness.with({selector: '#first'}),
        );

        const disabled = await loader.getHarness(
            TuiRadioHarness.with({selector: '#disabled'}),
        );

        expect(await enabled.isDisabled()).toBe(false);
        expect(await disabled.isDisabled()).toBe(true);
    });

    it('reads size', async () => {
        const defaultSize = await loader.getHarness(
            TuiRadioHarness.with({selector: '#first'}),
        );

        const small = await loader.getHarness(TuiRadioHarness.with({selector: '#small'}));

        expect(await defaultSize.getSize()).toBe('m');
        expect(await small.getSize()).toBe('s');
    });
});
