import { jFCreateFoldersToDom } from "./ShowOnDom.js";
import ApiConfigJson from '../../../../ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncAdminData } from "../../../../../AdminData/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/StartFunc.js";

let jVarCommonProjectName = ApiConfigJson.ProjectName;

const StartFunc = () => {
    let jVarLocalFromAdmin = StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom({ inProjectName: jVarCommonProjectName }).then(() => {
            StartFuncFormLoad({ inProjectName: jVarCommonProjectName });

            StartFuncAfterDomLoad({});
        });
    };
};

StartFunc();

