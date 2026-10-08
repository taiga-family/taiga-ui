import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiLineClamp} from '@taiga-ui/kit';

describe('LineClamp', () => {
    let fixture: ComponentFixture<TuiLineClamp>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiLineClamp],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(TuiLineClamp);
        fixture.detectChanges();
    });

    it('does not emit overflownChange after destroy', () => {
        const component = fixture.componentInstance;
        const emissions: boolean[] = [];

        component.overflownChange.subscribe((overflown) => emissions.push(overflown));

        component.setOverflown(true);
        emissions.length = 0;
        fixture.destroy();
        component.setOverflown(false);

        expect(emissions).toEqual([]);
    });
});
