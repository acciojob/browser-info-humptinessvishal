//your JS code here. If required.
const div = document.getElementById('browser-info');

const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

div.textContent = "You are using " + browserName + " version " + browserVersion;
