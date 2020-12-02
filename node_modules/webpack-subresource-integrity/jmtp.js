/**
 * Copyright (c) 2015-present, Waysact Pty Ltd
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var Template = require('webpack/lib/Template');
var util = require('./util');

function WebIntegrityJsonpMainTemplatePlugin(sriPlugin, compilation) {
  this.sriPlugin = sriPlugin;
  this.compilation = compilation;
}

WebIntegrityJsonpMainTemplatePlugin.prototype.addSriHashes =
  function addSriHashes(mainTemplate, source, chunk) {
    var allChunks = util.findChunks(chunk);
    var includedChunks = chunk.getChunkMaps().hash;
    var hashFuncNames = this.sriPlugin.options.hashFuncNames;

    if (allChunks.size > 0) {
      return (Template.asString || mainTemplate.asString)([
        source,
        'var sriHashes = ' +
          JSON.stringify(
            Array.from(allChunks).reduce(function chunkIdReducer(
              sriHashes,
              depChunk
            ) {
              if (includedChunks[depChunk.id.toString()]) {
                // eslint-disable-next-line no-param-reassign
                sriHashes[depChunk.id] = util.makePlaceholder(hashFuncNames, depChunk.id);
              }
              return sriHashes;
            },
                                         {})
          ) +
          ';'
      ]);
    }

    return source;
  };

/*
 *  Patch jsonp-script code to add the integrity attribute.
 */
WebIntegrityJsonpMainTemplatePlugin.prototype.addAttribute =
  function addAttribute(mainTemplate, elName, source) {
    if (!mainTemplate.outputOptions.crossOriginLoading) {
      this.sriPlugin.errorOnce(
        this.compilation,
        'webpack option output.crossOriginLoading not set, code splitting will not work!'
      );
    }
    return (Template.asString || mainTemplate.asString)([
      source,
      elName + '.integrity = sriHashes[chunkId];',
      elName + '.crossOrigin = ' + JSON.stringify(mainTemplate.outputOptions.crossOriginLoading) + ';',
    ]);
  };

WebIntegrityJsonpMainTemplatePlugin.prototype.apply = function apply(
  mainTemplate
) {
  var jsonpScriptPlugin = this.addAttribute.bind(this, mainTemplate, "script");
  var linkPreloadPlugin = this.addAttribute.bind(this, mainTemplate, "link");
  var addSriHashes = this.addSriHashes.bind(this, mainTemplate);

  if (!mainTemplate.hooks) {
    mainTemplate.plugin('jsonp-script', jsonpScriptPlugin);
    mainTemplate.plugin('local-vars', addSriHashes);
  } else if (mainTemplate.hooks.jsonpScript && mainTemplate.hooks.localVars) {
    mainTemplate.hooks.jsonpScript.tap('SriPlugin', jsonpScriptPlugin);
    mainTemplate.hooks.linkPreload.tap('SriPlugin', linkPreloadPlugin);
    mainTemplate.hooks.localVars.tap('SriPlugin', addSriHashes);
  } else {
    this.sriPlugin.warnOnce(
      this.compilation,
      'This plugin is not useful for non-web targets.'
    );
  }
};

module.exports = WebIntegrityJsonpMainTemplatePlugin;
