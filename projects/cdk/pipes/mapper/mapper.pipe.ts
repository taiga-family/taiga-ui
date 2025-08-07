import {Pipe, type PipeTransform} from '@angular/core';
import {type TuiMapper} from '@taiga-ui/cdk/types';

@Pipe({
    standalone: true,
    name: 'tuiMapper',
})
export class TuiMapperPipe implements PipeTransform {
    /**
     * Maps object to an arbitrary result through a mapper function
     *
     * @param value an item to transform
     * @param mapper a mapping function
     * @param args arbitrary number of additional arguments
     */
    public transform<T extends unknown[], U, G>(
        value: U,
        mapper: TuiMapper<[U, ...T], G>,
        ...args: T
    ): G {
        return mapper(value, ...args);
    }
}
