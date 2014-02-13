exports.main = function() {
    let data = require('sdk/self').data;
    let pageMod = require('sdk/page-mod');
    
    pageMod.PageMod({
        include: /https?:\/\/www.facebook.com\//,
        contentScriptFile: [data.url('utils.js'), data.url('home_script.js')]
    });
    
    pageMod.PageMod({
        include: /https?:\/\/www.facebook.com\/pokes.*/,
        contentScriptFile: [data.url('utils.js'), data.url('pokes_page_script.js')]
    });
};