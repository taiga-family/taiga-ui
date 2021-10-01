import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiContextWithImplicit, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export type TuiMultidimensionalArray<T> = T | ReadonlyArray<TuiMultidimensionalArray<T>>;

@Component({
    selector: 'tui-tree-view',
    templateUrl: './tree-view.template.html',
    styleUrls: ['./tree-view.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTreeViewComponent<T> {
    @Input()
    @tuiDefaultProp()
    value: TuiMultidimensionalArray<T> = [];

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    expanded = true;

    @HostBinding('class._array')
    get isArray(): boolean {
        return Array.isArray(this.value);
    }

    @tuiPure
    calculateContext(
        value: TuiMultidimensionalArray<T>,
    ): TuiContextWithImplicit<TuiMultidimensionalArray<T>> {
        return {$implicit: value};
    }

    readonly map = new Map<T, boolean>();

    isOpen(item: T): boolean {
        return !this.map.has(item) || !!this.map.get(item);
    }

    toggleOpen(item: T) {
        this.map.set(item, !this.map.get(item));
    }
}
