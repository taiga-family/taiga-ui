import {NgFor} from '@angular/common';
import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {TuiItemDirective} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiBreadcrumbsComponent} from '@taiga-ui/kit';
import {TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

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
        standalone: true,
        imports: [
            TuiBreadcrumbsComponent,
            NgFor,
            TuiItemDirective,
            TuiLinkDirective,
            RouterTestingModule,
        ],
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
        @ViewChild(TuiBreadcrumbsComponent, {static: true})
        public component!: TuiBreadcrumbsComponent;

        public items = ITEMS;

        public size: TuiSizeL = 'm';
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

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
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
        it('the last element is missing', () => {
            const itemsArrayLength = ITEMS.length;
            const iconsArrayLength = fixture.debugElement.queryAll(
                By.css('.t-icon'),
            ).length;

            expect(iconsArrayLength).toBe(itemsArrayLength - 1);
        });
    });
});
