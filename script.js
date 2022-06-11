// const barcode = window.__PRODUCT_DETAIL_APP_INITIAL_STATE__.product.variants[0].barcode
// const barcodeEl = document.querySelector('.barcode')

function codeToInject() {
    console.log(window.__PRODUCT_DETAIL_APP_INITIAL_STATE__)
}

const inject = function (fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script)
    console.log(window.__PRODUCT_DETAIL_APP_INITIAL_STATE__)
}
inject(codeToInject)