import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import type {TuiTableTh} from '@taiga-ui/addon-table';
import {TuiTable} from '@taiga-ui/addon-table';

describe('TuiTableTh resize with constraints', () => {
    @Component({
        standalone: true,
        imports: [TuiTable],
        template: `
            <table tuiTable>
                <thead>
                    <tr tuiThGroup>
                        <th
                            #th
                            style="min-width: 100px; max-width: 300px;"
                            tuiTh
                            [resizable]="true"
                        >
                            Resizable Column
                        </th>
                    </tr>
                </thead>
            </table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        @ViewChild('th', {static: true})
        public thComponent!: TuiTableTh<any>;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let thElement: HTMLTableHeaderCellElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        thElement = fixture.nativeElement.querySelector('th[tuiTh]');
    });

    it('should create', () => {
        expect(component).toBeDefined();
        expect(component.thComponent).toBeDefined();
    });

    it('should clamp resize width to minimum constraint', () => {
        // Simulate resize to a value below min-width
        component.thComponent.onResized(50);

        expect(component.thComponent.width).toBe(100); // Should be clamped to min-width
    });

    it('should clamp resize width to maximum constraint', () => {
        // Simulate resize to a value above max-width
        component.thComponent.onResized(400);

        expect(component.thComponent.width).toBe(300); // Should be clamped to max-width
    });

    it('should allow resize within constraints', () => {
        // Simulate resize to a value within constraints
        component.thComponent.onResized(200);

        expect(component.thComponent.width).toBe(200); // Should be the exact value
    });

    it('should handle no constraints', () => {
        // Test with no constraints by setting to different element
        thElement.style.minWidth = '';
        thElement.style.maxWidth = '';

        component.thComponent.onResized(500);

        expect(component.thComponent.width).toBe(500); // Should allow any value
    });
});
