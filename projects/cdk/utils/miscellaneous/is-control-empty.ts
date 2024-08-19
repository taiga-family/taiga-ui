import type {AbstractControl} from '@angular/forms';

export function tuiIsControlEmpty({value}: AbstractControl): boolean {
    return value == null || value === '' || (Array.isArray(value) && !value.length);
}
