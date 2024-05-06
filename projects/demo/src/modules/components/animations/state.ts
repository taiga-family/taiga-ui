import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AnimationState extends BehaviorSubject<number> {
    constructor() {
        super(1000);
    }
}
