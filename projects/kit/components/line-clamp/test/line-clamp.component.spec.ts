import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga} from '@taiga-ui/core';
import {TuiLineClamp} from '@taiga-ui/kit';

describe('LineClamp', () => {
    let fixture: ComponentFixture<TuiLineClamp>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiLineClamp],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(TuiLineClamp);
        fixture.detectChanges();
    });

    it('does not emit overflownChange after destroy', () => {
        const component = fixture.componentInstance;
        const emitSpy = jest.spyOn(component.overflownChange, 'emit');

        component.setOverflown(true);
        emitSpy.mockClear();
        fixture.destroy();
        component.setOverflown(false);

        expect(emitSpy).not.toHaveBeenCalled();
    });
});
