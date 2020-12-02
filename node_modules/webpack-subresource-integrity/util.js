var crypto = require("crypto");
var path = require("path");
/**
 * Copyright (c) 2015-present, Waysact Pty Ltd
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function addIfNotExist(set, item) {
  if (set.has(item)) return true;
  set.add(item);
  return false;
}

function findChunksWebpack4(chunk) {
  var allChunks = new Set();
  var groupsVisited = new Set();

  (function recurseChunk(childChunk) {
    function recurseGroup(group) {
      if (addIfNotExist(groupsVisited, group.id)) return;
      group.chunks.forEach(recurseChunk);
      group.childrenIterable.forEach(recurseGroup);
    }

    if (addIfNotExist(allChunks, childChunk)) return;
    childChunk.groupsIterable.forEach(recurseGroup);
  })(chunk);

  return allChunks;
}

function findChunksLegacy(chunk) {
  var allChunks = new Set();
  (function recurseChunk(childChunk) {
    if (addIfNotExist(allChunks, childChunk)) return;
    childChunk.chunks.forEach(recurseChunk);
  })(chunk);
  return allChunks;
}

function findChunks(chunk) {
  if (chunk.groupsIterable) {
    return findChunksWebpack4(chunk);
  }
  return findChunksLegacy(chunk);
}

function computeIntegrity(hashFuncNames, source) {
  return hashFuncNames
    .map(function mapHashFuncName(hashFuncName) {
      var hash = crypto
        .createHash(hashFuncName)
        .update(source, "utf8")
        .digest("base64");
      return hashFuncName + "-" + hash;
    })
    .join(" ");
}

function getTagSrc(tag) {
  // Get asset path - src from scripts and href from links
  return tag.attributes.href || tag.attributes.src;
}

function filterTag(tag) {
  // Process only script and link tags with a url
  return (tag.tagName === "script" || tag.tagName === "link") && getTagSrc(tag);
}

function normalizePath(p) {
  return p
    .replace(/\?.*$/, "")
    .split(path.sep)
    .join("/");
}

function getIntegrityChecksumForAsset(assets, src) {
  var normalizedSrc;
  var normalizedKey;
  var asset = assets[src];
  if (asset) {
    return asset.integrity;
  }
  normalizedSrc = normalizePath(src);
  normalizedKey = Object.keys(assets).find(function test(assetKey) {
    return normalizePath(assetKey) === normalizedSrc;
  });
  if (normalizedKey) {
    return assets[normalizedKey].integrity;
  }
  return null;
}

function isRuntimeChunk(chunk) {
  return "hasRuntime" in chunk ? chunk.hasRuntime() : chunk.entry;
}

function makePlaceholder(hashFuncNames, id) {
  var placeholder = "*-*-*-CHUNK-SRI-HASH-" + id + "-*-*-*";
  return computeIntegrity(hashFuncNames, placeholder);
}

module.exports.computeIntegrity = computeIntegrity;
module.exports.findChunks = findChunks;
module.exports.filterTag = filterTag;
module.exports.getTagSrc = getTagSrc;
module.exports.normalizePath = normalizePath;
module.exports.getIntegrityChecksumForAsset = getIntegrityChecksumForAsset;
module.exports.isRuntimeChunk = isRuntimeChunk;
module.exports.makePlaceholder = makePlaceholder;
