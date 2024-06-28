import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiDocLanguageSwitcher} from '@taiga-ui/addon-doc';
import {TuiDataList, TuiFlagPipe} from '@taiga-ui/core';
import {TuiLanguageSwitcherService} from '@taiga-ui/i18n';
import {TuiSelectModule} from '@taiga-ui/legacy';

describe('TuiDocLanguageSwitcher', () => {
    let component: TuiDocLanguageSwitcher;
    let fixture: ComponentFixture<TuiDocLanguageSwitcher>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                TuiSelectModule,
                TuiDataList,
                TuiDocLanguageSwitcher,
            ],
            providers: [TuiLanguageSwitcherService],
        }).compileComponents();

        fixture = TestBed.createComponent(TuiDocLanguageSwitcher);
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
