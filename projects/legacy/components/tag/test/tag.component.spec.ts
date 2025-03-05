import type {HarnessLoader} from '@angular/cdk/testing';
import {TestKey} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiTagComponent, TuiTagModule} from '@taiga-ui/legacy';
import {TuiTagHarness} from '@taiga-ui/testing';

describe('Tag', () => {
    @Component({
        standalone: true,
        imports: [TuiTagModule],
        template: `
            <tui-tag id="default"></tui-tag>
            <tui-tag
                id="changed"
                [autoColor]="false"
                [editable]="true"
                [removable]="true"
                [value]="'Tag'"
                (edited)="editedSpy($event)"
            ></tui-tag>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiTagComponent, {static: true})
        public component!: TuiTagComponent;

        public editedSpy = jest.fn();
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let loader: HarnessLoader;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        testComponent.editedSpy.mockClear();
        fixture.detectChanges();
    });

    describe('Default values:', () => {
        it('cross not shown', async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: '#default'}),
            );
            const icon = await tag.getCrossIcon();

            expect(icon).toBeNull();
        });

        it('tag is not editable', async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: '#default'}),
            );

            await tag.sendEnter();
            const input = await tag.getInput();

            expect(input).toBeNull();
        });
    });

    describe('Editing a tag, editable === true', () => {
        let tag: TuiTagHarness;

        beforeEach(async () => {
            tag = await loader.getHarness(TuiTagHarness.with({selector: '#changed'}));
            await tag.sendEnter();
        });

        it('tag is being edited', async () => {
            const input = await tag.getInput();

            expect(input).not.toBeNull();
        });

        it('emit an edit event on enter', async () => {
            const input = await tag.getInput();

            await input?.setInputValue('Hapica');
            await input?.dispatchEvent('input');
            await input?.sendKeys(TestKey.ENTER);

            expect(testComponent.editedSpy).toHaveBeenCalledWith('Hapica');
        });

        it('emitting edit event on field exit', async () => {
            const input = await tag.getInput();

            await input?.setInputValue('Hapica');
            await input?.dispatchEvent('input');
            await input?.blur();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('Hapica');
        });

        it('emitting edit event on comma input', async () => {
            const input = await tag.getInput();

            await input?.setInputValue('Hapica, ogo');
            await input?.dispatchEvent('input');

            expect(testComponent.editedSpy).toHaveBeenCalledWith('Hapica, ogo');
        });

        it('issuer empty string when storing empty tag', async () => {
            const input = await tag.getInput();

            await input?.setInputValue('');
            await input?.dispatchEvent('input');
            await input?.blur();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });
    });

    describe('Deleting a tag', () => {
        it('cross shown with removable === true', async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: '#changed'}),
            );
            const icon = await tag.getCrossIcon();

            expect(icon).not.toBeNull();
        });

        it('emit an empty line across a cross', async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: '#changed'}),
            );
            const icon = await tag.getCrossIcon();

            await icon?.click();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });

        it('when you press the backspace on the tag, an empty line is emitted', async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: '#changed'}),
            );

            await tag.sendBackspace();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });

        it('when you press delete on the tag, an empty string is emitted', async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: '#changed'}),
            );

            await tag.sendDelete();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });
    });
});
