import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiAvatarModule} from '@taiga-ui/kit';
import {configureTestSuite, TuiAvatarHarness, TuiPageObject} from '@taiga-ui/testing';

describe(`Avatar`, () => {
    @Component({
        template: `
            <tui-avatar
                id="default"
                [avatarUrl]="'someURL'"
                [text]="'James Cameron'"
            ></tui-avatar>
            <tui-avatar
                id="null-url"
                [avatarUrl]="null"
                [text]="'James Cameron'"
            ></tui-avatar>
            <tui-avatar
                id="null-url-with-text"
                [avatarUrl]="null"
                [text]="'James'"
            ></tui-avatar>
            <tui-avatar
                id="null-url-xs"
                size="xs"
                [avatarUrl]="null"
                [text]="'James'"
            ></tui-avatar>
            <tui-avatar
                id="auto-color"
                [autoColor]="true"
            ></tui-avatar>
        `,
    })
    class TestComponent {}

    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;
    let pageObject: TuiPageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return `tui-avatar__`;
        },
    };

    function getAvatar(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}component`)!
            .nativeElement;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiAvatarModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
    });

    describe(`computedText`, () => {
        it(`if there is an avatar, the text value is empty`, async () => {
            const avatar = await loader.getHarness(TuiAvatarHarness);

            expect(await avatar.text()).toBe(``);
        });

        it(`if there is no avatar, the text value is taken from the first letters of the words in text`, async () => {
            const avatar = await loader.getHarness(
                TuiAvatarHarness.with({selector: `#null-url`}),
            );

            expect(await avatar.text()).toBe(`JC`);
        });

        it(`if the avatar is absent, and there is one word in text, its first letter is taken`, async () => {
            const avatar = await loader.getHarness(
                TuiAvatarHarness.with({selector: `#null-url-with-text`}),
            );

            expect(await avatar.text()).toBe(`J`);
        });

        it(`for xs sizes only one letter is taken`, async () => {
            const avatar = await loader.getHarness(
                TuiAvatarHarness.with({selector: `#null-url-xs`}),
            );

            expect(await avatar.text()).toBe(`J`);
        });
    });

    // TODO: Jest doesn't support intersection observe
    xdescribe(`Avatar color`, () => {
        it(`if there is an avatarUrl the color is rgba(0, 0, 0, 0)`, () => {
            expect(getComputedStyle(getAvatar()).backgroundColor).toBe(
                `rgba(0, 0, 0, 0)`,
            );
        });

        it(`when autoColor is on, the color will be - rgb(160, 170, 228)`, () => {
            expect(getComputedStyle(getAvatar()).backgroundColor).toBe(
                `rgb(160, 170, 228)`,
            );
        });
    });
});
