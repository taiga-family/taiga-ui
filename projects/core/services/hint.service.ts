import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

// TODO: remove after v2.0 separating. It prevents seps cycling.
type TuiHintDirective = any;
type AbstractTuiHint = any;

/**
 * Service for displaying hints/tooltips
 */
@Injectable({
    providedIn: 'root',
})
export class TuiHintService extends BehaviorSubject<ReadonlyArray<AbstractTuiHint>> {
    constructor() {
        super([]);
    }

    add(directive: AbstractTuiHint) {
        this.next(this.value.concat(directive));
    }

    remove(directive: AbstractTuiHint) {
        if (this.value.includes(directive)) {
            this.next(this.value.filter(hint => hint !== directive));
        }
    }

    /**
     * TODO: v2.0
     * We need the following logic for desribedBy
     * move it into another service that can register hints and
     * manage it using TuiHintService inside
     */
    private directives: ReadonlyArray<TuiHintDirective> = [];

    register(directive: TuiHintDirective) {
        this.directives = [...this.directives, directive];
    }

    unregister(directive: TuiHintDirective) {
        this.remove(directive);
        this.directives = this.directives.filter(dir => dir !== directive);
    }

    showHintForId(id: string) {
        const directive = this.findDirectiveWithHintId(id);

        if (directive) {
            this.add(directive);
        }
    }

    hideHintForId(id: string) {
        const directive = this.findDirectiveWithHintId(id);

        if (directive) {
            this.remove(directive);
        }
    }

    private findDirectiveWithHintId(id: string): TuiHintDirective | undefined {
        return this.directives.find(directive => directive.tuiHintId === id);
    }
}
