import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {PAGE_SEE_ALSO, TuiDocPage} from '@taiga-ui/addon-doc';
import {TUI_DOC_DEFAULT_TABS} from '@taiga-ui/addon-doc/tokens';
import {EMPTY_QUERY} from '@taiga-ui/cdk';

describe('TuiDocPageComponent', () => {
    let component: TuiDocPage;
    let fixture: ComponentFixture<TuiDocPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TuiDocPage],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {},
                },
                {
                    provide: TUI_DOC_DEFAULT_TABS,
                    useValue: ['tab1', 'tab2'],
                },
                {
                    provide: PAGE_SEE_ALSO,
                    useValue: ['seeAlso1', 'seeAlso2'],
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TuiDocPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have showSeeAlso set to true when seeAlso array is not empty and activeItemIndex is 0', () => {
        Object.defineProperty(component, 'seeAlso', {
            value: ['seeAlso1', 'seeAlso2', 'seeAlso3'],
        });

        component.activeItemIndex.set(0);

        expect(component.seeAlso).toEqual(['seeAlso1', 'seeAlso2', 'seeAlso3']);
        expect(component.showSeeAlso).toBe(true);
    });

    it('should have showSeeAlso set to false when seeAlso array is empty and activeItemIndex is 0', () => {
        Object.defineProperty(component, 'seeAlso', {value: []});

        component.activeItemIndex.set(0);

        expect(component.seeAlso).toEqual([]);
        expect(component.showSeeAlso).toBe(false);
    });

    it('should have activeItemIndex set to 0 by default', () => {
        expect(component.activeItemIndex()).toBe(0);
    });

    it('TuiDocPageTabConnectorDirective', () => {
        expect(EMPTY_QUERY.dirty).toBe(true);
        expect(component.tabConnectors.dirty).toBe(false);
    });

    it('should have deprecated set to false by default', () => {
        expect(component.deprecated()).toBe(false);
    });

    it('should have false value when Input deprecated is not supplied', () => {
        expect(component.deprecated()).toBe(false);
    });
});
