[![Build Status](https://travis-ci.org/jasmine/jasmine-ajax.png?branch=master)](https://travis-ci.org/jasmine/jasmine-ajax)
[![Code Climate](https://codeclimate.com/github/jasmine/jasmine-ajax/badges/gpa.svg)](https://codeclimate.com/github/jasmine/jasmine-ajax)

If you are using the updated version of this library, there is some additional documentation located at [jasmine.github.io](http://jasmine.github.io/edge/ajax.html) that is up-to-date.

jasmine-ajax - Faking Ajax responses in your Jasmine suite.
============
jasmine-ajax is a library that lets you define a set of fake responses for Ajax
requests made by your application, specify per spec which response should be
used, and keep track of the Ajax requests you make so you can make assertions
about the results.

Contributing
------------
Please read the main Jasmine [contributors' guide](https://github.com/jasmine/jasmine/blob/master/.github/CONTRIBUTING.md) and [specifics for Jasmine Ajax](https://github.com/jasmine/jasmine-ajax/blob/master/.github/CONTRIBUTING.md).

When submitting a pull request, run `grunt build` and commit the changes to the generated file `lib/mock-ajax.js` in order for the build's automated tests to pass.

Libraries Supported
-------------------
jasmine-ajax is currently compatible with any library that uses XMLHttpRequest.

Installing
----------
#### NPM ####
Install `jasmine-ajax` from NPM via  `npm install --save-dev jasmine-ajax`; you can then `require('jasmine-ajax')` inside your test-suite and access it via the `jasmine` global.

#### Browser ####
Download [mock-ajax.js](https://raw.github.com/jasmine/jasmine-ajax/master/lib/mock-ajax.js) and add it to your project. If you are using the jasmine gem, be sure the location you put mock-ajax.js is included in your `helpers` path in jasmine.yml. If you are using Jasmine standalone, make sure you add it to your spec runner.

Setup
-----
Using the library in your Jasmine specs consists of five parts:

1. Defining test responses
2. Installing the mock
3. Triggering the ajax request code
3. Defining the response for each request
4. Inspecting Ajax requests and setting expectations on them

Example
-------
Let's use a simple Foursquare venue search app to show each of these steps.

### 1. Defining Test Responses ###
After signing up for an API key and playing around with curl a bit you should have an idea of what API resources you are interested in and what sample responses look like. Once you do, you can define simple JavaScripts objects that will be used to build XMLHttpRequest objects later.

For example, if you have a response that looks like this:
```json
{
    "meta":{
        "code":200,
        "errorType":"deprecated",
        "errorDetail":"This endpoint will stop returning groups in the future. Please use a current version, see http://bit.ly/lZx3NU."
    },
    "response":{
        "groups":[{
                "type":"nearby",
                "name":"Nearby",
                "items":[{
                        "id":"4bb9fd9f3db7b7138dbd229a",
                        "name":"Pivotal Labs",
                        "contact":{
                            "twitter":"pivotalboulder"
                        },
                        "location":{
                            "address":"1701 Pearl St.",
                            "crossStreet":"at 17th St.",
                            "city":"Boulder",
                            "state":"CO",
                            "lat":40.019461,
                            "lng":-105.273296,
                            "distance":0
                        },
                        "categories":[{
                                "id":"4bf58dd8d48988d124941735",
                                "name":"Office",
                                "pluralName":"Offices",
                                "icon":"https://foursquare.com/img/categories/building/default.png",
                                "parents":["Homes, Work, Others"
                                ],
                                "primary":true
                            }
                        ],
                        "verified":false,
                        "stats":{
                            "checkinsCount":223,
                            "usersCount":62
                        },
                        "hereNow":{
                            "count":0
                        }
                    }
                ]
            }
        ]
    }
}
```

Then you'd define a mock response that looks something like this:

```javascript
var TestResponses = {
  search: {
    success: {
      status: 200,
      responseText: '{"response":{"groups":[{"type":"nearby","name":"Nearby","items":[{"id":"4bb9fd9f3db7b7138dbd229a","name":"Pivotal Labs","contact":{"twitter":"pivotalboulder"},"location":{"address":"1701 Pearl St.","crossStreet":"at 17th St.","city":"Boulder","state":"CO","lat":40.019461,"lng":-105.273296,"distance":0},"categories":[{"id":"4bf58dd8d48988d124941735","name":"Office","pluralName":"Offices","icon":"https://foursquare.com/img/categories/building/default.png","parents":["Homes, Work, Others"],"primary":true}],"verified":false,"stats":{"checkinsCount":223,"usersCount":62},"hereNow":{"count":0}},{"id":"4af2eccbf964a5203ae921e3","name":"Laughing Goat Café","contact":{},"location":{"address":"1709 Pearl St.","crossStreet":"btw 16th & 17th","city":"Boulder","state":"CO","postalCode":"80302","country":"USA","lat":40.019321,"lng":-105.27311982,"distance":21},"categories":[{"id":"4bf58dd8d48988d1e0931735","name":"Coffee Shop","pluralName":"Coffee Shops","icon":"https://foursquare.com/img/categories/food/coffeeshop.png","parents":["Food"],"primary":true},{"id":"4bf58dd8d48988d1a7941735","name":"College Library","pluralName":"College Libraries","icon":"https://foursquare.com/img/categories/education/default.png","parents":["Colleges & Universities"]}],"verified":false,"stats":{"checkinsCount":1314,"usersCount":517},"hereNow":{"count":0}},{"id":"4ca777a597c8a1cdf7bc7aa5","name":"Ted\'s Montana Grill","contact":{"phone":"3034495546","formattedPhone":"(303) 449-5546","twitter":"TedMontanaGrill"},"location":{"address":"1701 Pearl St.","crossStreet":"17th and Pearl","city":"Boulder","state":"CO","postalCode":"80302","country":"USA","lat":40.019376,"lng":-105.273311,"distance":9},"categories":[{"id":"4bf58dd8d48988d1cc941735","name":"Steakhouse","pluralName":"Steakhouses","icon":"https://foursquare.com/img/categories/food/steakhouse.png","parents":["Food"],"primary":true}],"verified":true,"stats":{"checkinsCount":197,"usersCount":150},"url":"http://www.tedsmontanagrill.com/","hereNow":{"count":0}},{"id":"4d3cac5a8edf3704e894b2a5","name":"Pizzeria Locale","contact":{},"location":{"address":"1730 Pearl St","city":"Boulder","state":"CO","postalCode":"80302","country":"USA","lat":40.0193746,"lng":-105.2726744,"distance":53},"categories":[{"id":"4bf58dd8d48988d1ca941735","name":"Pizza Place","pluralName":"Pizza Places","icon":"https://foursquare.com/img/categories/food/pizza.png","parents":["Food"],"primary":true}],"verified":false,"stats":{"checkinsCount":511,"usersCount":338},"hereNow":{"count":2}},{"id":"4d012cd17c56370462a6b4f0","name":"The Pinyon","contact":{},"location":{"address":"1710 Pearl St.","city":"Boulder","state":"CO","country":"USA","lat":40.019219,"lng":-105.2730563,"distance":33},"categories":[{"id":"4bf58dd8d48988d14e941735","name":"American Restaurant","pluralName":"American Restaurants","icon":"https://foursquare.com/img/categories/food/default.png","parents":["Food"],"primary":true}],"verified":true,"stats":{"checkinsCount":163,"usersCount":98},"hereNow":{"count":1}}]}]}}'
    }
  }
};
```

A good place to define this is in `spec/javascripts/helpers/test_responses`. You can also define failure responses, for whatever status codes the API you are working with supports.

### 2. Installing the mock ###
Install the mock using `jasmine.Ajax.install()`:

```javascript
beforeEach(function() {
  jasmine.Ajax.install();
  ...
});

// don't forget to uninstall as well...
afterEach(function() {
  jasmine.Ajax.uninstall();
  ...
});
```
After this, all Ajax requests will be captured by jasmine-ajax. If you want to do things like load fixtures, do it before you install the mock (see below).

### 3. Trigger ajax request code ###
Before you can specify that a request uses your test response, you must have a handle to the request itself.  This means that the request is made first by the code under test and then you will set your test response (see next step).

```javascript
foursquare.search('40.019461,-105.273296', {
  onSuccess: onSuccess,
  onFailure: onFailure
});

request = jasmine.Ajax.requests.mostRecent();
```

The onreadystatechange event isn't fired to complete the ajax request until you set the response in the next step.

### 4. Set responses ###
Now that you've defined some test responses and installed the mock, you need to tell jasmine-ajax which response to use for a given spec. If you want to use your success response for a set of related success specs, you might use:

```javascript
describe("on success", function() {
  beforeEach(function() {
    request.respondWith(TestResponses.search.success);
  });
});
```

Now for all the specs in this example group, whenever an Ajax response is sent, it will use the `TestResponses.search.success` object defined in your test responses to build the XMLHttpRequest object.

### 5. Inspect Ajax requests ###
Putting it all together, you can install the mock, pass some spies as callbacks to your search object, and make expectations about the expected behavior.

```javascript
describe("FoursquareVenueSearch", function() {
  var foursquare, request;
  var onSuccess, onFailure;

  beforeEach(function() {
    jasmine.Ajax.install();

    onSuccess = jasmine.createSpy('onSuccess');
    onFailure = jasmine.createSpy('onFailure');

    foursquare = new FoursquareVenueSearch();

    foursquare.search('40.019461,-105.273296', {
      onSuccess: onSuccess,
      onFailure: onFailure
    });

    request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe('venues/search');
    expect(request.method).toBe('POST');
    expect(request.data()).toEqual({latLng: ['40.019461, -105.273296']});
  });

  describe("on success", function() {
    beforeEach(function() {
      request.respondWith(TestResponses.search.success);
    });

    it("calls onSuccess with an array of Locations", function() {
      expect(onSuccess).toHaveBeenCalled();

      var successArgs = onSuccess.calls.mostRecent().args[0];

      expect(successArgs.length).toEqual(1);
      expect(successArgs[0]).toEqual(jasmine.any(Venue));
    });
  });
});
```

By default the `data` function is very naive about parsing form data being sent.

The provided parsers are:

1. If the XHR has a content-type of application/json, JSON.parse
1. Otherwise simply split query string by '&' and '='

If you need more control over how your data is presented, you can supply a custom param parser. Custom parsers will be prepended to the list of parsers to try.

```javascript
describe("custom params", function() {
  beforeEach(function() {
    jasmine.Ajax.install();
    jasmine.Ajax.addCustomParamParser({
      test: function(xhr) {
        // return true if you can parse
      },
      parse: function(params) {
        // parse and return
      }
    });
  });
});
```


Loading Fixtures
----------------
Most third-party Jasmine extensions use Ajax to load HTML fixtures into the DOM. Since jasmine-ajax intercepts all Ajax calls after it is installed, you need to load your fixtures before installing the mock. If you are using jasmine-jquery, that looks like this:

```javascript
beforeEach(function(){
  // first load your fixtures
  loadFixtures('fixture.html');

  // then install the mock
  jasmine.Ajax.install();
});
```


Complex Requests
----------------
Third-party frameworks may do many requests you can not simply respond to.
Let's assume that you are talking to a SOAP service. SOAP services mostly have identical URL's, but responses differ by the XML request that was send using a POST request.
Let's register a response that will be used if the request body was matched against a RegExp.

```javascript
beforeEach(function(){
  // first install the mock
  jasmine.Ajax.install();

  // then register a request to which automatically will be responded
  jasmine.Ajax.stubRequest(
    'https://soap.domain.tld/ws/UserManager',
    /.*\<registrationRequest\>.*/
  ).andReturn({
    status: 200,
    statusText: 'HTTP/1.1 200 OK',
    contentType: 'text/xml;charset=UTF-8',
    responseText: '<soap:Envelope><soap:Body><registrationResponse><username>foo</username><password>bar</password></registrationResponse></soap:Body></soap:Envelope>'
  });

  // Register another response for the same URL, but with different SOAP request
  jasmine.Ajax.stubRequest(
    'https://soap.domain.tld/ws/UserManager',
    /.*\<loginRequest\>.*/
  ).andReturn({
    status: 200,
    statusText: 'HTTP/1.1 200 OK',
    contentType: 'text/xml;charset=UTF-8',
    responseText: '<soap:Envelope><soap:Body><loginResponse><success>true</success></loginResponse></soap:Body></soap:Envelope>'
  });
});
```

Or if you also want to avoid the host part of the URL, you can register it using a RegExp for the URL, too.

```javascript
beforeEach(function(){
  // first install the mock
  jasmine.Ajax.install();

  // then register a request to which automatically will be responded
  jasmine.Ajax.stubRequest(
    /.*\/ws\/UserManager/,
    /.*\<registrationRequest\>.*/
  ).andReturn({
    status: 200,
    statusText: 'HTTP/1.1 200 OK',
    contentType: 'text/xml;charset=UTF-8',
    responseText: '<soap:Envelope><soap:Body><registrationResponse><username>foo</username><password>bar</password></registrationResponse></soap:Body></soap:Envelope>'
  });
});
```

Jasmine
-------
http://jasmine.github.io

Copyright (c) 2010-2017 Pivotal Labs. This software is licensed under the MIT License.
