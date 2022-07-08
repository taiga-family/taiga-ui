import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {TuiSizeL} from '@taiga-ui/core';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiBreadcrumbsModule} from '../breadcrumbs.module';
import {TuiBreadcrumbsWrapperComponent} from '../breadcrumbs-wrapper.component';

const ITEMS = [
    {
        caption: 'Selects',
        routerLink: '/components/select',
    },
    {
        caption: 'Multi',
        routerLink: '/components/multi-select',
    },
    {
        caption: 'With tags',
        routerLink: '/components/multi-select',
    },
];

describe('Breadcrumbs Wrapper', () => {
    @Component({
        template: `
            <tui-breadcrumbs
                automation-id="tui-breadcrumbs-wrapper__component"
                [size]="size"
            >
                <ng-container *ngFor="let item of items">
                    <a
                        *tuiItem
                        tuiLink
                        [routerLink]="item.routerLink"
                    >
                        {{ item.caption }}
                    </a>
                </ng-container>
            </tui-breadcrumbs>
        `,
    })
    class TestComponent {
        @ViewChild(TuiBreadcrumbsWrapperComponent, {static: true})
        component!: TuiBreadcrumbsWrapperComponent;

        items = ITEMS;

        size: TuiSizeL = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-breadcrumbs-wrapper__';
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
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('size:', () => {
        it('default is medium', () => {
            expect(getBreadcrumbs().attributes['data-size']).toBe('m');
        });

        it('large is set for size = "l"', () => {
            testComponent.size = 'l';
            fixture.detectChanges();

            expect(getBreadcrumbs().attributes['data-size']).toBe('l');
        });
    });

    describe('icon:', () => {
        it('the last element is missing ', () => {
            const itemsArrayLength = ITEMS.length;
            const iconsArrayLength = fixture.debugElement.queryAll(
                By.css('.icon'),
            ).length;

            expect(iconsArrayLength).toBe(itemsArrayLength - 1);
        });
    });
});
