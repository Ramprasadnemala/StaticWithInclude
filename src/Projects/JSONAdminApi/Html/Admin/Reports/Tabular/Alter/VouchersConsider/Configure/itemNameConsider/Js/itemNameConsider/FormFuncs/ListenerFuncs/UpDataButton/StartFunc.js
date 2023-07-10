let StartFunc = async ({ inevent }) => {
    let jVarLocalCurrentTarget = inevent.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;
    let jVarLocalvoucherPk = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="FileName"]');
    let jVarLocalItemNam = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalItemNameConsider = jVarLocalColsestTr.querySelector('[name="ItemNameConsider"]');

    let jVarLocalFolderNameValue = jVarLocalFolderName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;
    let jVarLocalItemNamValue = jVarLocalItemNam.value;
    let jVarLocalItemNameConsiderValue = jVarLocalItemNameConsider.checked;

    let BodyAsJson = {
        FolderName: jVarLocalFolderNameValue,
        FileName: jVarLocalFileNameValue,
        ItemName: jVarLocalItemNamValue,
        ItemNameConsider: jVarLocalItemNameConsiderValue
    };

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider";
    let jVarLocalRequestHeader = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ReportName: jVarLocalItemName,
            VoucherPk: jVarLocalvoucherPk,
            BodyAsJson
        })
    }

    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherPk}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data...&#128531')
            break;
        default:
        // code block
    };
};

export { StartFunc };