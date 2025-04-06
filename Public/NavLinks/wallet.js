

function showCash() {
    document.getElementById("cashSection").classList.remove("hidden");
    document.getElementById("tangibleAssetsSection").classList.add("hidden");
}

function showTangibleAssets() {
    document.getElementById("tangibleAssetsSection").classList.remove("hidden");
    document.getElementById("cashSection").classList.add("hidden");
}

