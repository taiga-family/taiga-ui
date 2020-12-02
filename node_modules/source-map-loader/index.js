/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var fs = require("fs");
var path = require("path");
var async = require("async");
var loaderUtils = require("loader-utils");

// Matches only the last occurrence of sourceMappingURL
var baseRegex = "\\s*[@#]\\s*sourceMappingURL\\s*=\\s*([^\\s]*)(?![\\S\\s]*sourceMappingURL)",
	// Matches /* ... */ comments
	regex1 = new RegExp("/\\*"+baseRegex+"\\s*\\*/"),
	// Matches // .... comments
	regex2 = new RegExp("//"+baseRegex+"($|\n|\r\n?)"),
	// Matches DataUrls
	regexDataUrl = /data:[^;\n]+(?:;charset=[^;\n]+)?;base64,([a-zA-Z0-9+/]+={0,2})/;

module.exports = function(input, inputMap) {
	this.cacheable && this.cacheable();
	var resolve = this.resolve;
	var addDependency = this.addDependency;
	var emitWarning = this.emitWarning || function() {};
	var match = input.match(regex1) || input.match(regex2);
	if(match) {
		var url = match[1];
		var dataUrlMatch = regexDataUrl.exec(url);
		var callback = this.async();
		if(dataUrlMatch) {
			var mapBase64 = dataUrlMatch[1];
			var mapStr = (new Buffer(mapBase64, "base64")).toString();
			var map;
			try {
				map = JSON.parse(mapStr)
			} catch (e) {
				emitWarning("Cannot parse inline SourceMap '" + mapBase64.substr(0, 50) + "': " + e);
				return untouched();
			}
			processMap(map, this.context, callback);
		} else {
			resolve(this.context, loaderUtils.urlToRequest(url, true), function(err, result) {
				if(err) {
					emitWarning("Cannot find SourceMap '" + url + "': " + err);
					return untouched();
				}
				addDependency(result);
				fs.readFile(result, "utf-8", function(err, content) {
					if(err) {
						emitWarning("Cannot open SourceMap '" + result + "': " + err);
						return untouched();
					}
					var map;
					try {
						map = JSON.parse(content);
					} catch (e) {
						emitWarning("Cannot parse SourceMap '" + url + "': " + e);
						return untouched();
					}
					processMap(map, path.dirname(result), callback);
				});
			}.bind(this));
			return;
		}
	} else {
		var callback = this.callback;
		return untouched();
	}
	function untouched() {
		callback(null, input, inputMap);
	}
	function processMap(map, context, callback) {
		if(!map.sourcesContent || map.sourcesContent.length < map.sources.length) {
			var sourcePrefix = map.sourceRoot ? map.sourceRoot + "/" : "";
			map.sources = map.sources.map(function(s) { return sourcePrefix + s; });
			delete map.sourceRoot;
			var missingSources = map.sourcesContent ? map.sources.slice(map.sourcesContent.length) : map.sources;
			async.map(missingSources, function(source, callback) {
				resolve(context, loaderUtils.urlToRequest(source, true), function(err, result) {
					if(err) {
						emitWarning("Cannot find source file '" + source + "': " + err);
						return callback(null, null);
					}
					addDependency(result);
					fs.readFile(result, "utf-8", function(err, content) {
						if(err) {
							emitWarning("Cannot open source file '" + result + "': " + err);
							return callback(null, null);
						}
						callback(null, {
							source: result,
							content: content
						});
					});
				});
			}, function(err, info) {
				map.sourcesContent = map.sourcesContent || [];
				info.forEach(function(res) {
					if(res) {
						map.sources[map.sourcesContent.length] = res.source;
						map.sourcesContent.push(res.content);
					} else {
						map.sourcesContent.push(null);
					}
				});
				processMap(map, context, callback);
			});
			return;
		}
		callback(null, input.replace(match[0], ''), map);
	}
}
