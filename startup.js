/* global chrome */

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url === 'chrome://newtab/') {
        chrome.tabs.executeScript(tab.id, {
            code: "document.querySelector('#most-visited').style.display='none'"
        });
    }
})
