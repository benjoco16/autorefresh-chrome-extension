async function createDate() {
    const date_today = new Date();
    const get_url = windows.location.href;

    if (get_url.indexOf("upwork.com") > -1) {
        document.getElementById("date").innerHTML = date_today;
    }


}
createDate();

chrome.tabs.executeScript(
    tab.id,
    {code: "createDate()"}
)