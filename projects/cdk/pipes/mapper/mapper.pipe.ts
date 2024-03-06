import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiMapper, TuiTypedMapper} from '@taiga-ui/cdk/types';

@Pipe({name: 'tuiMapper'})
export class TuiMapperPipe implements PipeTransform {
    /**
     * Maps object to an arbitrary result through a mapper function
     *
     * @param value an item to transform
     * @param mapper a mapping function
     * @param args arbitrary number of additional arguments
     */
    public transform<T, G>(value: T, mapper: TuiMapper<T, G>, ...args: any[]): G;
    public transform<T extends unknown[], U, G>(
        value: U,
        mapper: TuiTypedMapper<[U, ...T], G>,
        ...args: T
    ): G {
        return mapper(value, ...args);
    }
}
