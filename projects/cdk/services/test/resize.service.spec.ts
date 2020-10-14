import {ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TuiDestroyService} from '../destroy.service';
import {TuiResizeService} from '../resize.service';

describe('TuiResizeService', () => {
    let emitCounter: number;
    let element: HTMLElement;

    beforeEach(() => {
        emitCounter = 0;

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
        const resize$ = TestBed.get(TuiResizeService);

        resize$.subscribe(() => {
            emitCounter++;
        });

        setTimeout(() => {
            expect(emitCounter).toEqual(1);
            done();
        }, 50);
    });

    it('emits when element is resized', done => {
        const resize$ = TestBed.get(TuiResizeService);

        resize$.subscribe(() => {
            emitCounter++;
        });

        setTimeout(() => {
            element.style.width = '100px';
        }, 10);

        setTimeout(() => {
            expect(emitCounter).toEqual(2);
            done();
        }, 50);
    });
});
