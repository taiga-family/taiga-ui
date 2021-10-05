import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TuiDestroyService} from '../destroy.service';
import {TuiResizeService} from '../resize.service';

describe('TuiResizeService', () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement('div');
        element.style.width = '200px';
        document.body.appendChild(element);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ElementRef,
                    useValue: {nativeElement: element},
                },
                TuiDestroyService,
                TuiResizeService,
            ],
        });
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it('emits default first value', done => {
        let emitCounter = 0;
        const resize$ = TestBed.inject(TuiResizeService);

        resize$.subscribe(() => {
            emitCounter++;
        });

        setTimeout(() => {
            expect(emitCounter).toEqual(1);
            done();
        }, 50);
    });
});
