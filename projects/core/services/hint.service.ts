import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

// TODO: 3.0 can it be removed? It prevented seps cycling before 2.0
type TuiHintDirective = any;

type AbstractTuiHint = any;

/**
 * Service for displaying hints/tooltips
 */
@Injectable({
    providedIn: `root`,
})
export class TuiHintService extends BehaviorSubject<readonly AbstractTuiHint[]> {
    /**
     * TODO:
     * We need the following logic for desribedBy
     * move it into another service that can register hints and
     * manage it using TuiHintService inside
     */
    private directives: readonly TuiHintDirective[] = [];

    constructor() {
        super([]);
    }

    add(directive: AbstractTuiHint): void {
        this.next(this.value.concat(directive));
    }

    remove(directive: AbstractTuiHint): void {
        if (this.value.includes(directive)) {
            this.next(this.value.filter(hint => hint !== directive));
        }
    }

    register(directive: TuiHintDirective): void {
        this.directives = [...this.directives, directive];
    }

    unregister(directive: TuiHintDirective): void {
        this.remove(directive);
        this.directives = this.directives.filter(dir => dir !== directive);
    }

    showHintForId(id: string): void {
        const directive = this.findDirectiveWithHintId(id);

        if (directive) {
            this.add(directive);
        }
    }

    hideHintForId(id: string): void {
        const directive = this.findDirectiveWithHintId(id);

        if (directive) {
            this.remove(directive);
        }
    }

    private findDirectiveWithHintId(id: string): TuiHintDirective | undefined {
        return this.directives.find(directive => directive.tuiHintId === id);
    }
}
