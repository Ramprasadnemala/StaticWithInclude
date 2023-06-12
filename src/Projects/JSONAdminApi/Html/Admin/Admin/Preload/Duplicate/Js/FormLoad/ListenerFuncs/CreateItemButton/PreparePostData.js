let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalColumnName = jVarLocalColsestTr.querySelector('[name="ColumnName"]');
    let jVarLocalColumnNameValue = jVarLocalColumnName.value;

    let jVarLocalFromButtonData = jFLocalFromButton({ inCurrentTarget: jVarLocalCurrentTarget });

    return {
        ...jVarLocalFromButtonData,
        NewColumnName: jVarLocalColumnNameValue
    };
};

const jFLocalFromButton = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalFileName = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    return {
        FolderName: jVarLocalFolderName,
        FileName: jVarLocalFileName,
        ItemName: jVarLocalitemname,
        ScreenName: jVarLocalscreenname
    };
};

export { StartFunc };