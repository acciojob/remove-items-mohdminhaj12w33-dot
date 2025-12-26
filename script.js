//your JS code here. If required.
function removeColor() {
    const select = document.getElementById("colorSelect");

    // Remove the selected option
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}
