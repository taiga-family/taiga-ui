import {Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WaMutationObserverService} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {of} from 'rxjs';

import {TuiTileService} from '../tile.service';
import {TuiTilesComponent} from '../tiles.component';

describe('TuiTileService', () => {
    @Component({
        template: '<div class="t-wrapper"></div>',
        providers: [
            TuiTileService,
            {provide: TuiTilesComponent, useValue: {order: signal(new Map())}},
            {provide: WaResizeObserverService, useValue: of(null)},
            {provide: WaMutationObserverService, useValue: of(null)},
        ],
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let service: TuiTileService;
    let tile: HTMLElement;
    let wrapper: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({imports: [Test]}).compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();

        service = fixture.debugElement.injector.get(TuiTileService);
        tile = fixture.nativeElement;
        wrapper = tile.querySelector('.t-wrapper')!;
        service.init(wrapper);
        fixture.detectChanges();
        await fixture.whenStable();
        await new Promise<void>((resolve) => setTimeout(resolve));

        jest.spyOn(wrapper, 'getBoundingClientRect').mockReturnValue({
            top: 200,
            left: 300,
        } as DOMRect);
        jest.spyOn(tile, 'getBoundingClientRect').mockReturnValue({
            top: 180,
            left: 280,
        } as DOMRect);
        jest.spyOn(tile, 'offsetTop', 'get').mockReturnValue(40);
        jest.spyOn(tile, 'offsetLeft', 'get').mockReturnValue(30);
        jest.spyOn(tile, 'clientWidth', 'get').mockReturnValue(150);
        jest.spyOn(tile, 'clientHeight', 'get').mockReturnValue(90);
    });

    afterEach(() => {
        fixture.destroy();
        jest.restoreAllMocks();
    });

    it('reads tile dimensions before changing the wrapper to fixed positioning', () => {
        const positionsDuringReads: string[] = [];

        jest.spyOn(tile, 'clientWidth', 'get').mockImplementation(() => {
            positionsDuringReads.push(wrapper.style.position);

            return 150;
        });
        jest.spyOn(tile, 'clientHeight', 'get').mockImplementation(() => {
            positionsDuringReads.push(wrapper.style.position);

            return 90;
        });

        service.setOffset([100, 120]);

        expect(positionsDuringReads).toEqual(['', '']);
        expect(wrapper.style.position).toBe('fixed');
        expect(wrapper.style.width).toBe('150px');
        expect(wrapper.style.height).toBe('90px');
    });

    it('preserves the intermediate and final positions on drop', () => {
        const positionsDuringReads: string[] = [];
        const topsDuringReads: string[] = [];

        service.setOffset([100, 120]);

        expect(wrapper.style.position).toBe('fixed');
        expect(wrapper.style.top).toBe('120px');
        expect(wrapper.style.left).toBe('100px');

        jest.spyOn(tile, 'offsetTop', 'get').mockImplementation(() => {
            positionsDuringReads.push(wrapper.style.position);
            topsDuringReads.push(wrapper.style.top);

            return 40;
        });
        jest.spyOn(tile, 'offsetLeft', 'get').mockImplementation(() => {
            positionsDuringReads.push(wrapper.style.position);

            return 30;
        });
        jest.spyOn(tile, 'clientWidth', 'get').mockImplementation(() => {
            positionsDuringReads.push(wrapper.style.position);

            return 150;
        });
        jest.spyOn(tile, 'clientHeight', 'get').mockImplementation(() => {
            positionsDuringReads.push(wrapper.style.position);

            return 90;
        });

        service.setOffset([Number.NaN, Number.NaN]);

        expect(positionsDuringReads).toEqual(['', '', '', '', '', '']);
        expect(topsDuringReads).toEqual(['', '60px']);
        expect(wrapper.style.position).toBe('');
        expect(wrapper.style.transition).toBe('');
        expect(wrapper.style.top).toBe('40px');
        expect(wrapper.style.left).toBe('30px');
        expect(wrapper.style.width).toBe('150px');
        expect(wrapper.style.height).toBe('90px');
    });

    it('updates the dragged position and size when the tile changes', () => {
        service.setOffset([100, 120]);
        jest.spyOn(tile, 'clientWidth', 'get').mockReturnValue(180);
        service.setOffset([130, 160]);

        expect(wrapper.style.position).toBe('fixed');
        expect(wrapper.style.transition).toBe('none');
        expect(wrapper.style.left).toBe('130px');
        expect(wrapper.style.top).toBe('160px');
        expect(wrapper.style.width).toBe('180px');
        expect(wrapper.style.height).toBe('90px');
    });
});
