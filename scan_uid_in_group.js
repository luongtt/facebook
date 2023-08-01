var uids = [];
function get_uid() {
    let a_elm = document.querySelectorAll('div[role="listitem"] a[href*="/user/"]');
    a_elm.forEach(a => {
        let href = a.getAttribute("href");
        let uid = href.split("/");
        uid = uid[uid.length - 2];
        if (!uids.includes(uid))
            uids.push(uid);
    })
}

function scrollToBottom() {
    var height = document.body.scrollHeight;
    window.scroll(0 , height);
}

const inter = setInterval(() => {
    scrollToBottom();
    setTimeout(() => {
        get_uid()
    }, 2000)
}, 5000);

function stopScan() {
    clearInterval(inter)
}
