module.exports = {
	protocolVersion: "1",
	hostname: "https://www.google-analytics.com",
	path: "/collect",
	batchPath: "/batch",
	batching: true,
	batchSize: 10,
	acceptedParameters: [

		// General
		"v", "tid", "aip", "ds", "qt", "z",

		// User
		"cid", "uid",

		// Session
		"sc", "uip", "ua", "geoid",

		// Traffic Sources
		"dr", "cn", "cs", "cm", "ck", "cc", "ci", "gclid", "dclid",

		// System Info
		"sr", "vp", "de", "sd", "ul", "je", "fl",

		// Hit
		"t", "ni",

		// Content Information
		"dl", "dh", "dp", "dt", "cd", "linkid",

		// App Tracking
		"an", "aid", "av", "aiid",

		// Event Tracking
		"ec", "ea", "el", "ev",

		// E-commerce (transaction data: simple and enhanced)
		"ti", "ta", "tr", "ts", "tt",

		// E-commerce (item data: simple)
		"in", "ip", "iq", "ic", "iv",

		// E-commerce (currency: simple and enhanced)
		"cu",

		// Enhanced E-Commerce (see also: regex below)
		"pa", "tcc", "pal", "cos", "col", "promoa",

		// Social Interactions
		"sn", "sa", "st",

		// Timing
		"utc", "utv", "utt", "utl", "plt", "dns", "pdt", "rrt", "tcp", "srt", "dit", "clt",

		// Exceptions
		"exd", "exf",

		// Content Experiments
		"xid", "xvar"],

	acceptedParametersRegex: [
		/^cm[0-9]+$/,
		/^cd[0-9]+$/,
		/^cg(10|[0-9])$/,

		/pr[0-9]{1,3}id/,
		/pr[0-9]{1,3}nm/,
		/pr[0-9]{1,3}br/,
		/pr[0-9]{1,3}ca/,
		/pr[0-9]{1,3}va/,
		/pr[0-9]{1,3}pr/,
		/pr[0-9]{1,3}qt/,
		/pr[0-9]{1,3}cc/,
		/pr[0-9]{1,3}ps/,
		/pr[0-9]{1,3}cd[0-9]{1,3}/,
		/pr[0-9]{1,3}cm[0-9]{1,3}/,

		/il[0-9]{1,3}nm/,
		/il[0-9]{1,3}pi[0-9]{1,3}id/,
		/il[0-9]{1,3}pi[0-9]{1,3}nm/,
		/il[0-9]{1,3}pi[0-9]{1,3}br/,
		/il[0-9]{1,3}pi[0-9]{1,3}ca/,
		/il[0-9]{1,3}pi[0-9]{1,3}va/,
		/il[0-9]{1,3}pi[0-9]{1,3}ps/,
		/il[0-9]{1,3}pi[0-9]{1,3}pr/,
		/il[0-9]{1,3}pi[0-9]{1,3}cd[0-9]{1,3}/,
		/il[0-9]{1,3}pi[0-9]{1,3}cm[0-9]{1,3}/,

		/promo[0-9]{1,3}id/,
		/promo[0-9]{1,3}nm/,
		/promo[0-9]{1,3}cr/,
		/promo[0-9]{1,3}ps/
	],
	parametersMap: {
		"protocolVersion": "v",
		"trackingId": "tid",
		"webPropertyId": "tid",
		"anonymizeIp": "aip",
		"dataSource": "ds",
		"queueTime": "qt",
		"cacheBuster": "z",
		"clientId": "cid",
		"userId": "uid",
		"sessionControl": "sc",
		"ipOverride": "uip",
		"userAgentOverride": "ua",
		"documentReferrer": "dr",
		"campaignName": "cn",
		"campaignSource": "cs",
		"campaignMedium": "cm",
		"campaignKeyword": "ck",
		"campaignContent": "cc",
		"campaignId": "ci",
		"googleAdwordsId": "gclid",
		"googleDisplayAdsId": "dclid",
		"screenResolution": "sr",
		"viewportSize": "vp",
		"documentEncoding": "de",
		"screenColors": "sd",
		"userLanguage": "ul",
		"javaEnabled": "je",
		"flashVersion": "fl",
		"hitType": "t",
		"non-interactionHit": "ni",
		"documentLocationUrl": "dl",
		"documentHostName": "dh",
		"documentPath": "dp",
		"documentTitle": "dt",
		"screenName": "cd",
		"linkId": "linkid",
		"applicationName": "an",
		"applicationId": "aid",
		"applicationVersion": "av",
		"applicationInstallerId": "aiid",
		"eventCategory": "ec",
		"eventAction": "ea",
		"eventLabel": "el",
		"eventValue": "ev",
		"transactionId": "ti",
		"transactionAffiliation": "ta",
		"transactionRevenue": "tr",
		"transactionShipping": "ts",
		"transactionTax": "tt",
		"itemName": "in",
		"itemPrice": "ip",
		"itemQuantity": "iq",
		"itemCode": "ic",
		"itemCategory": "iv",
		"currencyCode": "cu",
		"socialNetwork": "sn",
		"socialAction": "sa",
		"socialActionTarget": "st",
		"userTimingCategory": "utc",
		"userTimingVariableName": "utv",
		"userTimingTime": "utt",
		"userTimingLabel": "utl",
		"pageLoadTime": "plt",
		"dnsTime": "dns",
		"pageDownloadTime": "pdt",
		"redirectResponseTime": "rrt",
		"tcpConnectTime": "tcp",
		"serverResponseTime": "srt",
		"domInteractiveTime": "dit",
		"contentLoadTime": "clt",
		"exceptionDescription": "exd",
		"isExceptionFatal": "exf",
		"isExceptionFatal?": "exf",
		"experimentId": "xid",
		"experimentVariant": "xvar"
	}
};
