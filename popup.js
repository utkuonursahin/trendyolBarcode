console.log('<----- Extension script started running ----->');
// const barcode = window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.variants[0].barcode
// const barcodeEl = document.querySelector('.barcode')
// console.log(window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.variants[0].barcode)
window.addEventListener('DOMContentLoaded', () => {
    let bg = chrome.extension.getBackgroundPage();

    chrome.tabs.query({ active: true, currentWindow: true }, () => {
        console.log(bg)
    });
});