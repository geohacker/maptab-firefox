var self = require("sdk/self");
var browserTab = "browser.newtab.url";
var pageUrl = self.data.url("index.html");
require("sdk/preferences/service").set(browserTab, pageUrl);

