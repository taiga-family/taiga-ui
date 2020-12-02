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
        @ViewChild(TuiAvatarComponent)
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
        it('если есть аватар, текстовое значение пустое', () => {
            expect(component.computedText).toBe('');
        });

        it('если аватар отсутствует, текстовое значение берётся из первых букв слов в text', () => {
            testComponent.avatarUrl = null;
            fixture.detectChanges();

            expect(component.computedText).toBe('JC');
        });

        it('если аватар отсутствует, и в text одно слово — берётся его первая буква', () => {
            testComponent.avatarUrl = null;
            testComponent.text = 'James';
            fixture.detectChanges();

            expect(component.computedText).toBe('J');
        });

        it('для xs размеров берётся только одна буква', () => {
            testComponent.avatarUrl = null;
            testComponent.size = 'xs';
            fixture.detectChanges();

            expect(component.computedText).toBe('J');
        });
    });

    describe('Цвет аватара', () => {
        it('если есть avatarUrl, цвет rgba(0, 0, 0, 0)', () => {
            expect(getComputedStyle(getAvatar()).backgroundColor).toBe(
                'rgba(0, 0, 0, 0)',
            );
        });

        it('при включении autoColor, цвет будет - rgb(160, 170, 228)', () => {
            testComponent.autoColor = true;
            fixture.detectChanges();
            expect(getComputedStyle(getAvatar()).backgroundColor).toBe(
                'rgb(160, 170, 228)',
            );
        });
    });
});
