import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiLanguageSwitcherComponent} from '@taiga-ui/addon-doc';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiCountryIsoCode, TuiLanguageSwitcher} from '@taiga-ui/i18n';
import {TuiSelectModule} from '@taiga-ui/kit';

describe(`TuiLanguageSwitcherComponent`, () => {
    let component: TuiLanguageSwitcherComponent;
    let fixture: ComponentFixture<TuiLanguageSwitcherComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TuiLanguageSwitcherComponent],
            imports: [ReactiveFormsModule, TuiSelectModule, TuiDataListModule],
            providers: [TuiLanguageSwitcher],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TuiLanguageSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create the component`, () => {
        expect(component).toBeTruthy();
    });

    it(`should have flags set`, () => {
        expect(component.flags).toBeTruthy();
        expect(component.flags.size).toBeGreaterThan(0);
    });

    it(`should correct return path to icon flag`, () => {
        expect(component.getFlagPath).toBeTruthy();
        expect(component.getFlagPath(TuiCountryIsoCode.CN)).toEqual(
            `assets/taiga-ui/icons/CN.png`,
        );
    });
});
