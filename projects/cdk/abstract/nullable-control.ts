import {Directive, NgModule} from '@angular/core';
import {AbstractTuiControl} from './control';

@Directive({selector: 'never-gonna-give-you-up'})
export abstract class AbstractTuiNullableControl<T> extends AbstractTuiControl<T | null> {
    protected getFallbackValue(): T | null {
        return null;
    }
}

// TODO: @bad this is a must for Ivy at the moment
@NgModule({declarations: [AbstractTuiNullableControl as any]})
export class NeverGonnaLetYouDownModule {}
