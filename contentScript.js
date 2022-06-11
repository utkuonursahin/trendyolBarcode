const evtToPage = chrome.runtime.id;
const evtFromPage = chrome.runtime.id + '-response';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg === 'getConfig') {
        // DOM messaging is synchronous so we don't need `return true` in onMessage
        addEventListener(evtFromPage, e => {
            sendResponse(JSON.parse(e.detail));
        }, { once: true });
        dispatchEvent(new Event(evtToPage));
    }
});

// Run the script in page context and pass event names
const script = document.createElement('script');
script.src = chrome.runtime.getURL('page-context.js');
script.dataset.args = JSON.stringify({ evtToPage, evtFromPage });
document.documentElement.appendChild(script);

const fn = () => {
    const el = document.currentScript;
    const { evtToPage, evtFromPage } = JSON.parse(el.dataset.args);
    el.remove();
    addEventListener(evtToPage, () => {
        dispatchEvent(new CustomEvent(evtFromPage, {
            // stringifying strips nontranferable things like functions or DOM elements
            detail: JSON.stringify(window.config),
        }));
    });
}
fn()