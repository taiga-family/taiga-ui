/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/transform/src/trait" />
import * as ts from 'typescript';
import { DecoratorHandler, DetectResult } from './api';
export declare enum TraitState {
    /**
     * Pending traits are freshly created and have never been analyzed.
     */
    PENDING = 1,
    /**
     * Analyzed traits have successfully been analyzed, but are pending resolution.
     */
    ANALYZED = 2,
    /**
     * Resolved traits have successfully been analyzed and resolved and are ready for compilation.
     */
    RESOLVED = 4,
    /**
     * Errored traits have failed either analysis or resolution and as a result contain diagnostics
     * describing the failure(s).
     */
    ERRORED = 8,
    /**
     * Skipped traits are no longer considered for compilation.
     */
    SKIPPED = 16
}
/**
 * An Ivy aspect added to a class (for example, the compilation of a component definition).
 *
 * Traits are created when a `DecoratorHandler` matches a class. Each trait begins in a pending
 * state and undergoes transitions as compilation proceeds through the various steps.
 *
 * In practice, traits are instances of the private class `TraitImpl` declared below. Through the
 * various interfaces included in this union type, the legal API of a trait in any given state is
 * represented in the type system. This includes any possible transitions from one type to the next.
 *
 * This not only simplifies the implementation, but ensures traits are monomorphic objects as
 * they're all just "views" in the type system of the same object (which never changes shape).
 */
export declare type Trait<D, A, R> = PendingTrait<D, A, R> | SkippedTrait<D, A, R> | AnalyzedTrait<D, A, R> | ResolvedTrait<D, A, R> | ErroredTrait<D, A, R>;
/**
 * The value side of `Trait` exposes a helper to create a `Trait` in a pending state (by delegating
 * to `TraitImpl`).
 */
export declare const Trait: {
    pending: <D, A, R>(handler: DecoratorHandler<D, A, R>, detected: DetectResult<D>) => PendingTrait<D, A, R>;
};
/**
 * The part of the `Trait` interface that's common to all trait states.
 */
export interface TraitBase<D, A, R> {
    /**
     * Current state of the trait.
     *
     * This will be narrowed in the interfaces for each specific state.
     */
    state: TraitState;
    /**
     * The `DecoratorHandler` which matched on the class to create this trait.
     */
    handler: DecoratorHandler<D, A, R>;
    /**
     * The detection result (of `handler.detect`) which indicated that this trait applied to the
     * class.
     *
     * This is mainly used to cache the detection between pre-analysis and analysis.
     */
    detected: DetectResult<D>;
}
/**
 * A trait in the pending state.
 *
 * Pending traits have yet to be analyzed in any way.
 */
export interface PendingTrait<D, A, R> extends TraitBase<D, A, R> {
    state: TraitState.PENDING;
    /**
     * This pending trait has been successfully analyzed, and should transition to the "analyzed"
     * state.
     */
    toAnalyzed(analysis: A): AnalyzedTrait<D, A, R>;
    /**
     * This trait failed analysis, and should transition to the "errored" state with the resulting
     * diagnostics.
     */
    toErrored(errors: ts.Diagnostic[]): ErroredTrait<D, A, R>;
    /**
     * During analysis it was determined that this trait is not eligible for compilation after all,
     * and should be transitioned to the "skipped" state.
     */
    toSkipped(): SkippedTrait<D, A, R>;
}
/**
 * A trait in the "errored" state.
 *
 * Errored traits contain `ts.Diagnostic`s indicating any problem(s) with the class.
 *
 * This is a terminal state.
 */
export interface ErroredTrait<D, A, R> extends TraitBase<D, A, R> {
    state: TraitState.ERRORED;
    /**
     * Diagnostics which were produced while attempting to analyze the trait.
     */
    diagnostics: ts.Diagnostic[];
}
/**
 * A trait in the "skipped" state.
 *
 * Skipped traits aren't considered for compilation.
 *
 * This is a terminal state.
 */
export interface SkippedTrait<D, A, R> extends TraitBase<D, A, R> {
    state: TraitState.SKIPPED;
}
/**
 * The part of the `Trait` interface for any trait which has been successfully analyzed.
 *
 * Mainly, this is used to share the comment on the `analysis` field.
 */
export interface TraitWithAnalysis<A> {
    /**
     * The results returned by a successful analysis of the given class/`DecoratorHandler`
     * combination.
     */
    analysis: Readonly<A>;
}
/**
 * A trait in the "analyzed" state.
 *
 * Analyzed traits have analysis results available, and are eligible for resolution.
 */
export interface AnalyzedTrait<D, A, R> extends TraitBase<D, A, R>, TraitWithAnalysis<A> {
    state: TraitState.ANALYZED;
    /**
     * This analyzed trait has been successfully resolved, and should be transitioned to the
     * "resolved" state.
     */
    toResolved(resolution: R): ResolvedTrait<D, A, R>;
    /**
     * This trait failed resolution, and should transition to the "errored" state with the resulting
     * diagnostics.
     */
    toErrored(errors: ts.Diagnostic[]): ErroredTrait<D, A, R>;
}
/**
 * A trait in the "resolved" state.
 *
 * Resolved traits have been successfully analyzed and resolved, contain no errors, and are ready
 * for the compilation phase.
 *
 * This is a terminal state.
 */
export interface ResolvedTrait<D, A, R> extends TraitBase<D, A, R>, TraitWithAnalysis<A> {
    state: TraitState.RESOLVED;
    /**
     * The results returned by a successful resolution of the given class/`DecoratorHandler`
     * combination.
     */
    resolution: Readonly<R>;
}
