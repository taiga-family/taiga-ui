# Acceptable parameters


## Protocol Version

Pass as: `protocolVersion` or `v`

Required for all hit types.The Protocol version. The current value is '1'. This will only change when there are changes made that are not backwards compatible.


## Tracking ID / Web Property ID

Pass as: `trackingId` or `webPropertyId` or `tid`

Required for all hit types.The tracking ID / web property ID. The format is UA-XXXX-Y. All collected data is associated by this ID.


## Anonymize IP

Pass as: `anonymizeIp` or `aip`

Optional. When present, the IP address of the sender will be anonymized. For example, the IP will be anonymized if any of the following parameters are present in the payload: &aip=, &aip=0, or &aip=1


## Data Source
Pass as: `dataSource` or `ds`

Optional. Indicates the data source of the hit. Hits sent from analytics.js will have data source set to 'web'; hits sent from one of the mobile SDKs will have data source set to 'app'.

## Queue Time

Pass as: `queueTime` or `qt`

Optional. Used to collect offline / latent hits. The value represents the time delta (in milliseconds) between when the hit being reported occurred and the time the hit was sent. The value must be greater than or equal to 0. Values greater than four hours may lead to hits not being processed.


## Cache Buster

Pass as: `cacheBuster` or `z`

Optional. Used to send a random number in GET requests to ensure browsers and proxies don't cache hits. It should be sent as the final parameter of the request since we've seen some 3rd party internet filtering software add additional parameters to HTTP requests incorrectly. This value is not used in reporting.


## Client ID

Pass as: `clientId` or `cid`

Required for all hit types.This anonymously identifies a particular user, device, or browser instance. For the web, this is generally stored as a first-party cookie with a two-year expiration. For mobile apps, this is randomly generated for each particular instance of an application install. The value of this field should be a random UUID (version 4) as described in http://www.ietf.org/rfc/rfc4122.txt


## User ID

Pass as: `userId` or `uid`

Optional. This is intended to be a known identifier for a user provided by the site owner/tracking library user. It may not itself be PII. The value should never be persisted in GA cookies or other Analytics provided storage.


## Session Control

Pass as: `sessionControl` or `sc`

Optional. Used to control the session duration. A value of 'start' forces a new session to start with this hit and 'end' forces the current session to end with this hit. All other values are ignored.


## IP Override

Pass as: `ipOverride` or `uip`

Optional. The IP address of the user. This should be a valid IP address. It will always be anonymized just as though &aip (anonymize IP) had been used.


## User Agent Override

Pass as: `userAgentOverride` or `ua`

Optional. The User Agent of the browser. Note that Google has libraries to identify real user agents. Hand crafting your own agent could break at any time.


## Geographical Override

Pass as: `geoid`

Optional. The geographical location of the user. The geographical ID should be a two letter country code or a criteria ID representing a city or region (see http://developers.google.com/analytics/devguides/collection/protocol/v1/geoid). This parameter takes precedent over any location derived from IP address, including the IP Override parameter. An invalid code will result in geographical dimensions to be set to '(not set)'.

## Document Referrer

Pass as: `documentReferrer` or `dr`

Optional. Specifies which referral source brought traffic to a website. This value is also used to compute the traffic source. The format of this value is a URL.


## Campaign Name

Pass as: `campaignName` or `cn`

Optional. Specifies the campaign name.


## Campaign Source

Pass as: `campaignSource` or `cs`

Optional. Specifies the campaign source.


## Campaign Medium

Pass as: `campaignMedium` or `cm`

Optional. Specifies the campaign medium.


## Campaign Keyword

Pass as: `campaignKeyword` or `ck`

Optional. Specifies the campaign keyword.


## Campaign Content

Pass as: `campaignContent` or `cc`

Optional. Specifies the campaign content.


## Campaign ID

Pass as: `campaignId` or `ci`

Optional. Specifies the campaign ID.


## Google AdWords ID

Pass as: `googleAdwordsId` or `gclid`

Optional. Specifies the Google AdWords Id.


## Google Display Ads ID

Pass as: `googleDisplayAdsId` or `dclid`

Optional. Specifies the Google Display Ads Id.


## Screen Resolution

Pass as: `screenResolution` or `sr`

Optional. Specifies the screen resolution.


## Viewport size

Pass as: `viewportSize` or `vp`

Optional. Specifies the viewable area of the browser / device.


## Document Encoding

Pass as: `documentEncoding` or `de`

Optional. Specifies the character set used to encode the page / document.


## Screen Colors

Pass as: `screenColors` or `sd`

Optional. Specifies the screen color depth.


## User Language

Pass as: `userLanguage` or `ul`

Optional. Specifies the language.


## Java Enabled

Pass as: `javaEnabled` or `je`

Optional. Specifies whether Java was enabled.


## Flash Version

Pass as: `flashVersion` or `fl`

Optional. Specifies the flash version.


## Hit type

Pass as: `hitType` or `t`

Required for all hit types.The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.


## Non-Interaction Hit

Pass as: `non-interactionHit` or `ni`

Optional. Specifies that a hit be considered non-interactive.


## Document location URL

Pass as: `documentLocationUrl` or `dl`

Optional. Use this parameter to send the full URL (document location) of the page on which content resides. You can use the &dh and &dp parameters to override the hostname and path + query portions of the document location, accordingly. The JavaScript clients determine this parameter using the concatenation of the document.location.origin + document.location.pathname + document.location.search browser parameters. Be sure to remove any user authentication or other private information from the URL if present.


## Document Host Name

Pass as: `documentHostName` or `dh`

Optional. Specifies the hostname from which content was hosted.


## Document Path

Pass as: `documentPath` or `dp`

Optional. The path portion of the page URL. Should begin with '/'.


## Document Title

Pass as: `documentTitle` or `dt`

Optional. The title of the page / document.


## Screen Name

Pass as: `screenName` or `cd`

Optional. If not specified, this will default to the unique URL of the page by either using the &dl parameter as-is or assembling it from &dh and &dp. App tracking makes use of this for the 'Screen Name' of the screenview hit.


## Link ID

Pass as: `linkId` or `linkid`

Optional. The ID of a clicked DOM element, used to disambiguate multiple links to the same URL in In-Page Analytics reports when Enhanced Link Attribution is enabled for the property.


## Application Name

Pass as: `applicationName` or `an`

Optional. Specifies the application name.


## Application ID

Pass as: `applicationId` or `aid`

Optional. Application identifier.


## Application Version

Pass as: `applicationVersion` or `av`

Optional. Specifies the application version.


## Application Installer ID

Pass as: `applicationInstallerId` or `aiid`

Optional. Application installer identifier.


## Event Category

Pass as: `eventCategory` or `ec`

Optional. Specifies the event category. Must not be empty.


## Event Action

Pass as: `eventAction` or `ea`

Optional. Specifies the event action. Must not be empty.


## Event Label

Pass as: `eventLabel` or `el`

Optional. Specifies the event label.


## Event Value

Pass as: `eventValue` or `ev`

Optional. Specifies the event value. Values must be non-negative.


## Transaction ID

Pass as: `transactionId` or `ti`

Required for transaction hit type.Required for item hit type.A unique identifier for the transaction. This value should be the same for both the Transaction hit and Items hits associated to the particular transaction.


## Transaction Affiliation

Pass as: `transactionAffiliation` or `ta`

Optional. Specifies the affiliation or store name.


## Transaction Revenue

Pass as: `transactionRevenue` or `tr`

Optional. Specifies the total revenue associated with the transaction. This value should include any shipping or tax costs.


## Transaction Shipping

Pass as: `transactionShipping` or `ts`

Optional. Specifies the total shipping cost of the transaction.


## Transaction Tax

Pass as: `transactionTax` or `tt`

Optional. Specifies the total tax of the transaction.


## Item Name

Pass as: `itemName` or `in`

Required for item hit type.Specifies the item name.


## Item Price

Pass as: `itemPrice` or `ip`

Optional. Specifies the price for a single item / unit.


## Item Quantity

Pass as: `itemQuantity` or `iq`

Optional. Specifies the number of items purchased.


## Item Code

Pass as: `itemCode` or `ic`

Optional. Specifies the SKU or item code.


## Item Category

Pass as: `itemCategory` or `iv`

Optional. Specifies the category that the item belongs to.


## Currency Code

Pass as: `currencyCode` or `cu`

Optional. When present indicates the local currency for all transaction currency values. Value should be a valid ISO 4217 currency code.


## Social Network

Pass as: `socialNetwork` or `sn`

Required for social hit type.Specifies the social network, for example Facebook or Google Plus.


## Social Action

Pass as: `socialAction` or `sa`

Required for social hit type.Specifies the social interaction action. For example on Google Plus when a user clicks the +1 button, the social action is 'plus'.


## Social Action Target

Pass as: `socialActionTarget` or `st`

Required for social hit type.Specifies the target of a social interaction. This value is typically a URL but can be any text.


## User timing category

Pass as: `userTimingCategory` or `utc`

Optional. Specifies the user timing category.


## User timing variable name

Pass as: `userTimingVariableName` or `utv`

Optional. Specifies the user timing variable.


## User timing time

Pass as: `userTimingTime` or `utt`

Optional. Specifies the user timing value. The value is in milliseconds.


## User timing label

Pass as: `userTimingLabel` or `utl`

Optional. Specifies the user timing label.


## Page Load Time

Pass as: `pageLoadTime` or `plt`

Optional. Specifies the time it took for a page to load. The value is in milliseconds.


## DNS Time

Pass as: `dnsTime` or `dns`

Optional. Specifies the time it took to do a DNS lookup. The value is in milliseconds.


## Page Download Time

Pass as: `pageDownloadTime` or `pdt`

Optional. Specifies the time it took for the page to be downloaded. The value is in milliseconds.


## Redirect Response Time

Pass as: `redirectResponseTime` or `rrt`

Optional. Specifies the time it took for any redirects to happen. The value is in milliseconds.


## TCP Connect Time

Pass as: `tcpConnectTime` or `tcp`

Optional. Specifies the time it took for a TCP connection to be made. The value is in milliseconds.


## Server Response Time

Pass as: `serverResponseTime` or `srt`

Optional. Specifies the time it took for the server to respond after the connect time. The value is in milliseconds.

## DOM Interactive Time

Pass as: `domInteractiveTime` or `dit`

Optional. Specifies the time it took for Document.readyState to be 'interactive'. The value is in milliseconds.

## Content Load Time

Pass as: `contentLoadTime` or `clt`

Optional. Specifies the time it took for the DOMContentLoaded Event to fire. The value is in milliseconds.

## Exception Description

Pass as: `exceptionDescription` or `exd`

Optional. Specifies the description of an exception.


## Is Exception Fatal?

Pass as: `isExceptionFatal` or `exf`

Optional. Specifies whether the exception was fatal.


## Custom Dimension

Pass as: `cd[1-9][0-9]*`

Optional. Each custom dimension has an associated index. There is a maximum of 20 custom dimensions (200 for Premium accounts). The name suffix must be a positive integer between 1 and 200, inclusive.


## Custom Metric

Pass as: `cm[1-9][0-9]*`

Optional. Each custom metric has an associated index. There is a maximum of 20 custom metrics (200 for Premium accounts). The name suffix must be a positive integer between 1 and 200, inclusive.


## Content Group

Pass as: `cg(10|[0-9])`

Optional. Up to 10 content groups are possible.


## Experiment ID

Pass as: `experimentId` or `xid`

Optional. This parameter specifies that this user has been exposed to an experiment with the given ID. It should be sent in conjunction with the Experiment Variant parameter.


## Experiment Variant

Pass as: `experimentVariant` or `xvar`

Optional. This parameter specifies that this user has been exposed to a particular variation of an experiment. It should be sent in conjunction with the Experiment ID parameter.

## Enhanced e-commerce

To use enhanced e-commerce you must explicitly enable it in Google Analytics admin. Some parameters overlap with regular e-commerce tracking (`ti`, `ta`, `tr`, `tt`, `ts`),
however item tracking is different.

You may generate enhanced e-commerce using the [`gampee`](https://www.npmjs.com/package/gampee) module.

### Product SKU

Pass as: `pr[0-9]{1,3}id`

Optional. The SKU of the product. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Name

Pass as: `pr[0-9]{1,3}nm`

Optional. The name of the product. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Brand

Pass as: `pr[0-9]{1,3}br`

Optional. The brand associated with the product. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Category

Pass as: `pr[0-9]{1,3}ca`

Optional. The category to which the product belongs. Product index must be a positive integer between 1 and 200, inclusive. The product category parameter can be hierarchical. Use / as a delimiter to specify up to 5-levels of hierarchy. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Variant

Pass as: `pr[0-9]{1,3}va`

Optional. The variant of the product. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Price

Pass as: `pr[0-9]{1,3}pr`

Optional. The price of a product. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Quantity

Pass as: `pr[0-9]{1,3}qt`

Optional. The quantity of a product. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Coupon Code

Pass as: `pr[0-9]{1,3}cc`

Optional. The coupon code associated with a product. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Position

Pass as: `pr[0-9]{1,3}ps`

Optional. The product's position in a list or collection. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Custom Dimension

Pass as: `pr[0-9]{1,3}cd[0-9]{1,3}`

Optional. A product-level custom dimension where dimension index is a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Custom Metric

Pass as: `pr[0-9]{1,3}cm[0-9]{1,3}`

Optional. A product-level custom metric where metric index is a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Action

Pass as: `pa`

Optional. The role of the products included in a hit. If a product action is not specified, all product definitions included with the hit will be ignored. Must be one of: detail, click, add, remove, checkout, checkout_option, purchase, refund. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Transaction ID

Pass as: `ti`

Optional. The transaction ID. This is an additional parameter that can be sent when Product Action is set to 'purchase' or 'refund'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Affiliation

Pass as: `ta`

Optional. The store or affiliation from which this transaction occurred. This is an additional parameter that can be sent when Product Action is set to 'purchase' or 'refund'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Revenue

Pass as: `tr`

Optional. The total value of the transaction, including tax and shipping. If not sent, this value will be automatically calculated using the product quantity and price fields of all products in the same hit. This is an additional parameter that can be sent when Product Action is set to 'purchase' or 'refund'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Tax

Pass as: `tt`

Optional. The total tax associated with the transaction. This is an additional parameter that can be sent when Product Action is set to 'purchase' or 'refund'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Shipping

Pass as: `ts`

Optional. The shipping cost associated with the transaction. This is an additional parameter that can be sent when Product Action is set to 'purchase' or 'refund'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Coupon Code

Pass as: `tcc`

Optional. The transaction coupon redeemed with the transaction. This is an additional parameter that can be sent when Product Action is set to 'purchase' or 'refund'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Action List

Pass as: `pal`

Optional. The list or collection from which a product action occurred. This is an additional parameter that can be sent when Product Action is set to 'detail' or 'click'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Checkout Step

Pass as: `cos`

Optional. The step number in a checkout funnel. This is an additional parameter that can be sent when Product Action is set to 'checkout'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Checkout Step Option

Pass as: `col`

Optional. Additional information about a checkout step. This is an additional parameter that can be sent when Product Action is set to 'checkout'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression List Name

Pass as: `il[0-9]{1,3}nm`

Optional. The list or collection to which a product belongs. Impression List index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression SKU

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}id`

Optional. The product ID or SKU. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Name

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}nm`

Optional. The name of the product. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Brand

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}br`

Optional. The brand associated with the product. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Category

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}ca`

Optional. The category to which the product belongs. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Variant

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}va`

Optional. The variant of the product. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Position

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}ps`

Optional. The product's position in a list or collection. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Price

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}pr`

Optional. The price of a product. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Custom Dimension

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}cd[0-9]{1,3}`

Optional. A product-level custom dimension where dimension index is a positive integer between 1 and 200, inclusive. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Product Impression Custom Metric

Pass as: `il[0-9]{1,3}pi[0-9]{1,3}cm[0-9]{1,3}`

Optional. A product-level custom metric where metric index is a positive integer between 1 and 200, inclusive. Impression List index must be a positive integer between 1 and 200, inclusive. Product index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Promotion ID

Pass as: `promo[0-9]{1,3}id`

Optional. The promotion ID. Promotion index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Promotion Name

Pass as: `promo[0-9]{1,3}nm`

Optional. The name of the promotion. Promotion index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Promotion Creative

Pass as: `promo[0-9]{1,3}cr`

Optional. The creative associated with the promotion. Promotion index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Promotion Position

Pass as: `promo[0-9]{1,3}ps`

Optional. The position of the creative. Promotion index must be a positive integer between 1 and 200, inclusive. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.

### Promotion Action

Pass as: `promoa`

Optional. Specifies the role of the promotions included in a hit. If a promotion action is not specified, the default promotion action, 'view', is assumed. To measure a user click on a promotion set this to 'promo_click'. For analytics.js the Enhanced Ecommerce plugin must be installed before using this field.
