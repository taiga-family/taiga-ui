import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiAvatarComponent} from '../avatar.component';
import {TuiAvatarModule} from '../avatar.module';

describe('Avatar', () => {
    @Component({
        template: `
            <tui-avatar
                automation-id="tui-avatar__component"
                [avatarUrl]="avatarUrl"
                [text]="text"
                [size]="size"
                [autoColor]="autoColor"
            ></tui-avatar>
        `,
    })
    class TestComponent {
        @ViewChild(TuiAvatarComponent, {static: true})
        component: TuiAvatarComponent;

        avatarUrl: string | null = 'someUrl';
        text: string | null = 'James Cameron';
        autoColor = false;
        size: TuiSizeXS | TuiSizeXL = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiAvatarComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-avatar__';
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
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
    });

    describe('computedText', () => {
        it('if there is an avatar, the text value is empty', () => {
            expect(component.computedText).toBe('');
        });

        it('if there is no avatar, the text value is taken from the first letters of the words in text', () => {
            testComponent.avatarUrl = null;
            fixture.detectChanges();

            expect(component.computedText).toBe('JC');
        });

        it('if the avatar is absent, and there is one word in text, its first letter is taken', () => {
            testComponent.avatarUrl = null;
            testComponent.text = 'James';
            fixture.detectChanges();

            expect(component.computedText).toBe('J');
        });

        it('for xs sizes only one letter is taken', () => {
            testComponent.avatarUrl = null;
            testComponent.size = 'xs';
            fixture.detectChanges();

            expect(component.computedText).toBe('J');
        });
    });

    describe('Avatar color', () => {
        it('if there is an avatarUrl the color is rgba(0, 0, 0, 0)', () => {
            expect(getComputedStyle(getAvatar()).backgroundColor).toBe(
                'rgba(0, 0, 0, 0)',
            );
        });

        it('when autoColor is on, the color will be - rgb(160, 170, 228)', () => {
            testComponent.autoColor = true;
            fixture.detectChanges();
            expect(getComputedStyle(getAvatar()).backgroundColor).toBe(
                'rgb(160, 170, 228)',
            );
        });
    });
});
