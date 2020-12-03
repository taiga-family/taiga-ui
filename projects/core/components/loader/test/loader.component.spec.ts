import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PageObject} from '@taiga-ui/testing';
import {
    PolymorpheusContent,
    PolymorpheusModule,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {configureTestSuite} from 'ng-bullet';
import {TuiSizeXL, TuiSizeXS} from '../../../types/size';
import {TuiLoaderComponent} from '../loader.component';
import {TuiLoaderModule} from '../loader.module';

describe('Loader', () => {
    @Component({
        template: `
            <tui-loader
                [showLoader]="showLoader"
                [inheritColor]="inheritColor"
                [overlay]="overlay"
                [textContent]="textContent"
            >
            </tui-loader>
            <ng-template #textTemplate="polymorpheus" polymorpheus>
                Loading...
            </ng-template>
        `,
    })
    class TestComponent {
        @ViewChild(TuiLoaderComponent, {static: true})
        component: TuiLoaderComponent;

        size: TuiSizeXS | TuiSizeXL = 'm';
        showLoader = false;
        inheritColor = false;
        overlay = false;
        textContent: PolymorpheusContent | null = null;

        @ViewChild('textTemplate')
        textTemplate: PolymorpheusTemplate<{}>;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;

    const testContext = {
        get prefix() {
            return 'tui-loader__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiLoaderModule, PolymorpheusModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('showLoader:', () => {
        it('По умолчанию лоадер не показан', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}loader'`),
            ).toBeNull();
        });

        it('При заданном showLoader = true лоадер показан', () => {
            testComponent.showLoader = true;
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}loader`),
            ).not.toBeNull();
        });
    });

    describe('Текст', () => {
        it('Текста нет', () => {
            testComponent.showLoader = true;
            expect(pageObject.getByAutomationId(`${testContext.prefix}text`)).toBeNull();
        });

        it('При наличии `textContent` текст показан', () => {
            testComponent.textContent = testComponent.textTemplate;
            testComponent.showLoader = true;
            fixture.detectChanges();

            expect(
                pageObject
                    .getByAutomationId(`${testContext.prefix}text`)!
                    .nativeElement.textContent.trim(),
            ).toBe('Loading...');
        });
    });
});
