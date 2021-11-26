import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {configureTestSuite} from 'ng-bullet';

import {TuiPortalHostComponent} from '../portal-host.component';
import {TuiPortalHostModule} from '../portal-host.module';

describe('PortalHost', () => {
    @Component({
        template: `
            <tui-portal-host>
                <button>Content</button>
            </tui-portal-host>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPortalHostComponent)
        portalHost?: TuiPortalHostComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, PolymorpheusModule, TuiPortalHostModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('calculates clientRect', () => {
        expect(testComponent.portalHost!.clientRect.top).toBeGreaterThanOrEqual(0);
    });

    it('calculates fixedPositionOffset', () => {
        expect(
            testComponent.portalHost!.fixedPositionOffset().top,
        ).toBeGreaterThanOrEqual(0);
    });
});
