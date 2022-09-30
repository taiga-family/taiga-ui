import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TuiParentsScrollService} from '@taiga-ui/cdk/services';
import {take} from 'rxjs/operators';

describe(`TuiParentsScrollService`, () => {
    let element: HTMLElement;
    let service: TuiParentsScrollService;

    beforeEach(() => {
        element = document.createElement(`div`);
        document.body.appendChild(element);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ElementRef,
                    useValue: {nativeElement: element},
                },
                TuiParentsScrollService,
            ],
        });

        service = TestBed.inject(TuiParentsScrollService);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it(`should dispatch scroll event on the first subscription`, () => {
        let event = null;

        service.pipe(take(1)).subscribe(value => {
            event = value;
        });

        element.dispatchEvent(new Event(`scroll`));

        expect(event).toBeTruthy();
    });

    it(`should dispatch scroll event on next subscriptions`, () => {
        let event = null;
        const subscription = service.subscribe();

        subscription.unsubscribe();
        service.pipe(take(1)).subscribe(value => {
            event = value;
        });

        element.dispatchEvent(new Event(`scroll`));
        expect(event).toBeTruthy();
    });
});
