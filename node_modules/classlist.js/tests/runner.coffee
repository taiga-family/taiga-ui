urls = require('system').args.slice(1)
page = require('webpage').create()
timeout = 3000

qunitHooks = ->
  window.document.addEventListener 'DOMContentLoaded', ->
    for callback in ['log', 'testDone', 'done']
      do (callback) ->
        QUnit[callback] (result) ->
          window.callPhantom
            name: "QUnit.#{callback}"
            data: result

page.onInitialized = -> page.evaluate qunitHooks

page.onConsoleMessage = (msg) -> console.log msg

page.onCallback = (event) ->
  if event.name is 'QUnit.log'
    details = event.data
    if details.result is false
      console.log "✘ #{details.module}: #{details.name}"
      if details.message and details.message isnt "failed"
        console.log "  #{details.message}"
      if "actual" of details
        console.log "  expected: #{details.expected}"
        console.log "    actual: #{details.actual}"
  else if event.name is 'QUnit.testDone'
    result = event.data
    unless result.failed
      console.log "✔︎ #{result.module}: #{result.name}"
  else if event.name is 'QUnit.done'
    res = event.data
    console.log "#{res.total} tests, #{res.failed} failed. Done in #{res.runtime} ms"
    phantom.exit if !res.total or res.failed then 1 else 0

for url in urls
  page.open url, (status) ->
    if status isnt 'success'
      console.error "failed opening #{url}: #{status}"
      phantom.exit 1
    else
      setTimeout ->
        console.error "ERROR: Test execution has timed out"
        phantom.exit 1
      , timeout
