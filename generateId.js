import {titles} from "./script.js";

export function generate(){
    var ID = [], _newId, i
    for(i = 0; i < titles.length; i++){
        _newId = "ID_"+titles[i]
        ID.push(_newId)
    }
    console.log(ID)
    return ID
}