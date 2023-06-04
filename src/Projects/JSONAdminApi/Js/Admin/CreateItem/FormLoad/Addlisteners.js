import { StartFunc as StartFuncShowButtonClass } from "./ShowButtonClass.js";
import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalFileCreateClassName = document.getElementsByClassName("CreateFileButtonClass");

    for (let i = 0; i < jVarLocalFileCreateClassName.length; i++) {
        jVarLocalFileCreateClassName[i].addEventListener("click", async (event) => {
            await StartFuncListenerFuncs({
                inEvent: event,
                inProjectName
            }); k
        });
    };

    StartFuncShowButtonClass({ inProjectName });
};

export { StartFunc };