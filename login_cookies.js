// Browser open facebook.com
// loginWithCookies("cookie_here")

function loginWithCookies(cookies){
	clearCookies();
	var list = cookies.split(";");
    for (var i = list.length - 1; i >= 0; i--) {
        var cname = list[i].split("=")[0];
        var cvalue = list[i].split("=")[1];
        var d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        var expires = ";domain=.facebook.com;expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    var d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expires = ";domain=.facebook.com;expires=" + d.toUTCString();
    document.cookie = "_js_reg_fb_gate=https%3A%2F%2Fwww.facebook.com%2F; " + expires;
    document.cookie = "_js_reg_fb_ref=https%3A%2F%2Fwww.facebook.com%2F; " + expires;
    location.replace("https://facebook.com");
}

function clearCookies(){
	var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
}
