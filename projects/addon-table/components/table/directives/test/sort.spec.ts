import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {type TuiSortChange, TuiSortDirection, TuiTable} from '@taiga-ui/addon-table';

interface User {
    readonly name: string;
    readonly age: number;
}

describe('Table sort', () => {
    @Component({
        imports: [TuiTable],
        template: `
            <table
                tuiTable
                [columns]="columns"
                [direction]="direction()"
                [tuiSortBy]="sortKey()"
                (tuiSortChange)="change($event)"
            >
                <thead>
                    <tr tuiThGroup>
                        <th
                            *tuiHead="'name'"
                            tuiSortable
                            tuiTh
                            [requiredSort]="requiredSort()"
                        >
                            Name
                        </th>
                        <th
                            *tuiHead="'age'"
                            tuiSortable
                            tuiTh
                            [requiredSort]="requiredSort()"
                        >
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody
                    tuiTbody
                    [data]="data"
                ></tbody>
            </table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected readonly columns = ['name', 'age'];
        protected readonly data: readonly User[] = [
            {name: 'Alice', age: 30},
            {name: 'Bob', age: 25},
        ];

        public readonly sortKey = signal<keyof User>('name');
        public readonly direction = signal<TuiSortDirection>(TuiSortDirection.Desc);
        public readonly requiredSort = signal(true);
        public changeCount = 0;
        public last: TuiSortChange<User> | null = null;

        protected change(event: TuiSortChange<User>): void {
            this.changeCount++;
            this.last = event;

            if (this.changeCount > 50) {
                return;
            }

            this.sortKey.set(event.sortKey!);
            this.direction.set(event.sortDirection);
        }
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;

    function headers(): HTMLButtonElement[] {
        return Array.from(fixture.nativeElement.querySelectorAll('.t-sort'));
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('reports a header click through tuiSortChange', () => {
        const [, ageHeader] = headers();

        expect(ageHeader).toBeDefined();

        ageHeader?.click();
        fixture.detectChanges();

        expect(component.last?.sortKey).toBe('age');
        expect(component.sortKey()).toBe('age');
    });

    it('does not loop when sortKey and direction change simultaneously', () => {
        const [, ageHeader] = headers();

        expect(ageHeader).toBeDefined();

        ageHeader?.click();
        fixture.detectChanges();

        component.changeCount = 0;

        component.sortKey.set('name');
        component.direction.update((direction) =>
            direction === TuiSortDirection.Asc
                ? TuiSortDirection.Desc
                : TuiSortDirection.Asc,
        );
        fixture.detectChanges();

        expect(component.changeCount).toBeLessThan(10);
        expect(component.sortKey()).toBe('name');
        expect(component.direction()).toBe(TuiSortDirection.Desc);
    });

    it('does not loop when only direction changes', () => {
        component.changeCount = 0;

        component.direction.update((direction) =>
            direction === TuiSortDirection.Asc
                ? TuiSortDirection.Desc
                : TuiSortDirection.Asc,
        );
        fixture.detectChanges();

        expect(component.changeCount).toBeLessThan(10);
        expect(component.sortKey()).toBe('name');
        expect(component.direction()).toBe(TuiSortDirection.Asc);
    });

    it('does not loop when a preset flips direction for the already active key', () => {
        const [, ageHeader] = headers();

        expect(ageHeader).toBeDefined();

        ageHeader?.click();
        fixture.detectChanges();

        expect(component.sortKey()).toBe('age');
        expect(component.direction()).toBe(TuiSortDirection.Asc);

        component.changeCount = 0;

        component.sortKey.set('age');
        component.direction.set(TuiSortDirection.Desc);
        fixture.detectChanges();

        expect(component.changeCount).toBeLessThan(10);
        expect(component.sortKey()).toBe('age');
        expect(component.direction()).toBe(TuiSortDirection.Desc);
    });

    it('does not loop on simultaneous change when requiredSort is disabled', () => {
        component.requiredSort.set(false);
        fixture.detectChanges();

        const [, ageHeader] = headers();

        expect(ageHeader).toBeDefined();

        ageHeader?.click();
        fixture.detectChanges();

        expect(component.sortKey()).toBe('age');

        component.changeCount = 0;

        component.sortKey.set('name');
        component.direction.update((direction) =>
            direction === TuiSortDirection.Asc
                ? TuiSortDirection.Desc
                : TuiSortDirection.Asc,
        );
        fixture.detectChanges();

        expect(component.changeCount).toBeLessThan(10);
        expect(component.sortKey()).toBe('name');
        expect(component.direction()).toBe(TuiSortDirection.Desc);
    });
});
