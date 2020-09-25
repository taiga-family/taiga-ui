import {Directive, NgModule} from '@angular/core';
import {AbstractTuiControl} from './control';

@Directive({selector: 'never-gonna-run-around'})
export abstract class AbstractTuiMultipleControl<T> extends AbstractTuiControl<
    ReadonlyArray<T>
> {
    clear() {
        this.updateValue([]);
    }

    protected getFallbackValue(): ReadonlyArray<T> {
        return [];
    }
}

// TODO: @bad this is a must for Ivy at the moment
@NgModule({declarations: [AbstractTuiMultipleControl as any]})
export class AndDesertYouModule {}
