import {Injectable} from '@angular/core';
import {DESCRIBED_BY} from '@taiga-ui/core/constants';
import {TuiHint} from '@taiga-ui/core/interfaces';
import {BehaviorSubject} from 'rxjs';

/**
 * Service for displaying hints/tooltips
 */
@Injectable({
    providedIn: `root`,
})
export class TuiHintService extends BehaviorSubject<readonly TuiHint[]> {
    /**
     * TODO:
     * We need the following logic for desribedBy
     * move it into another service that can register hints and
     * manage it using TuiHintService inside
     */
    private directives: readonly TuiHint[] = [];

    constructor() {
        super([]);
    }

    add(directive: TuiHint): void {
        this.next(this.value.concat(directive));
    }

    remove(directive: TuiHint): void {
        if (this.value.includes(directive)) {
            this.next(this.value.filter(hint => hint !== directive));
        }
    }

    register(directive: TuiHint): void {
        this.directives = [...this.directives, directive];
    }

    unregister(directive: TuiHint): void {
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

    private findDirectiveWithHintId(id: string): TuiHint | undefined {
        return this.directives.find(directive => directive.id === id + DESCRIBED_BY);
    }
}
