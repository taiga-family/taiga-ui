import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiLanguageSwitcher} from '@taiga-ui/addon-doc';
import {TuiDataList, TuiFlagPipe} from '@taiga-ui/core';
import {TuiLanguageSwitcherService} from '@taiga-ui/i18n';
import {TuiSelectModule} from '@taiga-ui/legacy';

describe('TuiLanguageSwitcherComponent', () => {
    let component: TuiLanguageSwitcher;
    let fixture: ComponentFixture<TuiLanguageSwitcher>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                TuiSelectModule,
                TuiDataList,
                TuiLanguageSwitcher,
            ],
            providers: [TuiLanguageSwitcherService],
        }).compileComponents();

        fixture = TestBed.createComponent(TuiLanguageSwitcher);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have flags set', () => {
        expect(component.flags).toBeTruthy();
        expect(component.flags.size).toBeGreaterThan(0);
    });

    it('should correct return path to icon flag', () => {
        TestBed.runInInjectionContext(() => {
            expect(new TuiFlagPipe().transform('CN')).toBe(
                'assets/taiga-ui/icons/flags/CN.svg',
            );
        });
    });
});
