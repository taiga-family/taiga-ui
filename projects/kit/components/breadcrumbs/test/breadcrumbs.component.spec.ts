import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {TuiSizeL} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiBreadcrumbsComponent} from '../breadcrumbs.component';
import {TuiBreadcrumbsModule} from '../breadcrumbs.module';

const ITEMS = [
    {
        caption: 'Select',
        routerLink: '/tui-select',
    },
    {
        caption: 'Multi',
        routerLink: '/tui-multi-select',
    },
    {
        caption: 'With tags',
        routerLink: '/tui-multi-select',
    },
];

describe('Breadcrumbs', () => {
    @Component({
        template: `
            <tui-breadcrumbs
                automation-id="tui-breadcrumbs__component"
                [items]="items"
                [size]="size"
            ></tui-breadcrumbs>
        `,
    })
    class TestComponent {
        @ViewChild(TuiBreadcrumbsComponent, {static: true})
        component: TuiBreadcrumbsComponent;

        items = ITEMS;

        size: TuiSizeL = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-breadcrumbs__';
        },
    };

    function getBreadcrumbs(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}component`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiBreadcrumbsModule, RouterTestingModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('size:', () => {
        it('default is medium', () => {
            expect(getBreadcrumbs().attributes['data-tui-host-size']).toBe('m');
        });

        it('large is set for size = "l"', () => {
            testComponent.size = 'l';
            fixture.detectChanges();

            expect(getBreadcrumbs().attributes['data-tui-host-size']).toBe('l');
        });
    });

    describe('icon:', () => {
        it('the last element is missing ', () => {
            const itemsArrayLength = ITEMS.length;
            const iconsArrayLength = fixture.debugElement.queryAll(By.css('.icon'))
                .length;

            expect(iconsArrayLength).toBe(itemsArrayLength - 1);
        });
    });
});
