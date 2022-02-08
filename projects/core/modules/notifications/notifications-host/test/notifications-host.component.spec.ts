import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {timer} from 'rxjs';
import {skip, take, takeUntil} from 'rxjs/operators';

import {TuiNotificationsModule} from '../../notifications.module';
import {TuiNotificationsService} from '../../notifications.service';
import {TuiNotificationsHostComponent} from '../notifications-host.component';

describe('NotificationsHost', () => {
    @Component({
        template: `
            <tui-notifications-host></tui-notifications-host>
        `,
    })
    class TestComponent {
        @ViewChild(TuiNotificationsHostComponent, {static: true})
        component!: TuiNotificationsHostComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiNotificationsHostComponent;
    let service: TuiNotificationsService;

    const label = 'Breaking news!';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiNotificationsModule, NoopAnimationsModule],
            declarations: [TestComponent],
            providers: [TuiNotificationsService],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        service = TestBed.inject(TuiNotificationsService);
    });

    it('Listens to its notification service', done => {
        component.service.items$.pipe(skip(1), take(1)).subscribe(items => {
            expect(items[0].label).toBe(label);
            done();
        });

        service.show(label, {label}).pipe(take(1)).subscribe();
    });

    it('Removes item after unsubscribe', done => {
        component.service.items$.pipe(skip(2), take(1)).subscribe(items => {
            expect(items.length).toBe(0);
            done();
        });

        service
            .show(label, {label})
            .pipe(takeUntil(timer(1)))
            .subscribe();
    });
});
