import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async ({ inEvent, inProjectName }) => {
    let localjFLocalCheckBeforeFetch = jFLocalCheckBeforeFetch({ inEvent });

    if (localjFLocalCheckBeforeFetch) {
        let jVarLocalBodyData = StartFuncPreparePostData({ inEvent });

        let response = await jFLocalCallFetch({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });

        StartFuncPostFetch({
            inFromFetch: response,
            inBodyData: jVarLocalBodyData
        });
    };
};

let jFLocalCheckBeforeFetch = ({ inEvent }) => {

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalColumnName = jVarLocalColsestTr.querySelector('[name="ColumnName"]');
    let jVarLocalColumnNameValue = jVarLocalColumnName.value;

    if (jVarLocalColumnNameValue === "") {
        jVarLocalColumnName.classList.add("is-invalid");
        jVarLocalColumnName.focus();
        return false;
    };

    return true;
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/UserFile/ItemName/ScreenName/TableColumns/CreateNew/CreateColumn`;

    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    };

    let response = await fetch(jFetchUrl, jFetchBody);

    if (response.status === 200) {
        return await response.json();
    };
};

export { StartFunc };