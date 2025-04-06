document.getElementById("assetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const assetName = document.getElementById("assetName").value.trim();
    const assetDescription = document.getElementById("assetDescription").value.trim();
    const assetValue = document.getElementById("assetValue").value.trim();
    const currency = document.getElementById("currency").value;
    const assetImages = document.getElementById("assetImage").files;
    const assetDocs = document.getElementById("assetDocs").files;

    if (!assetName || !assetDescription || !assetValue || !currency) {
        alert("Please fill in all required fields.");
        return;
    }

    const assetData = {
        name: assetName,
        description: assetDescription,
        value: assetValue,
        currency: currency,
        images: assetImages.length,
        documents: assetDocs.length
    };

    console.log("Asset Registered:", assetData);
    alert("Asset Registered Successfully!");

    document.getElementById("assetForm").reset();
    document.getElementById("imagePreview").innerHTML = "";
    document.getElementById("docPreview").innerHTML = "";
});

// Handle image preview
document.getElementById("assetImage").addEventListener("change", function(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById("imagePreview");
    previewContainer.innerHTML = "";

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            previewContainer.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
});

// Handle document preview
document.getElementById("assetDocs").addEventListener("change", function(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById("docPreview");
    previewContainer.innerHTML = "";

    for (let file of files) {
        const docDiv = document.createElement("div");
        docDiv.classList.add("doc-preview");

        const docIcon = document.createElement("i");
        docIcon.classList.add("bi", "bi-file-earmark-text");

        const docName = document.createElement("span");
        docName.textContent = file.name;

        docDiv.appendChild(docIcon);
        docDiv.appendChild(docName);
        previewContainer.appendChild(docDiv);
    }
});
