"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Webpack stats may incorrectly mark extra entry points `initial` chunks, when
 * they are actually loaded asynchronously and thus not in the main bundle. This
 * function finds extra entry points in Webpack stats and corrects this value
 * whereever necessary. Does not modify {@param webpackStats}.
 */
function markAsyncChunksNonInitial(webpackStats, extraEntryPoints) {
    const { chunks = [], entrypoints: entryPoints = {} } = webpackStats;
    // Find all Webpack chunk IDs not injected into the main bundle. We don't have
    // to worry about transitive dependencies because extra entry points cannot be
    // depended upon in Webpack, thus any extra entry point with `inject: false`,
    // **cannot** be loaded in main bundle.
    const asyncEntryPoints = extraEntryPoints.filter((entryPoint) => !entryPoint.inject);
    const asyncChunkIds = flatMap(asyncEntryPoints, (entryPoint) => entryPoints[entryPoint.bundleName].chunks);
    // Find chunks for each ID.
    const asyncChunks = asyncChunkIds.map((chunkId) => {
        const chunk = chunks.find((chunk) => chunk.id === chunkId);
        if (!chunk) {
            throw new Error(`Failed to find chunk (${chunkId}) in set:\n${JSON.stringify(chunks)}`);
        }
        return chunk;
    })
        // All Webpack chunks are dependent on `runtime`, which is never an async
        // entry point, simply ignore this one.
        .filter((chunk) => chunk.names.indexOf('runtime') === -1);
    // A chunk is considered `initial` only if Webpack already belives it to be initial
    // and the application developer did not mark it async via an extra entry point.
    return chunks.map((chunk) => ({
        ...chunk,
        initial: chunk.initial && !asyncChunks.find((asyncChunk) => asyncChunk === chunk),
    }));
}
exports.markAsyncChunksNonInitial = markAsyncChunksNonInitial;
function flatMap(list, mapper) {
    return [].concat(...list.map(mapper));
}
