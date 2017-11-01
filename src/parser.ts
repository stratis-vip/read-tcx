import * as fxp from 'fast-xml-parser';
import * as fs from 'fs';
import TrainingCenterDatabase from './trainingcenterdatabase';
import Activity from './activity';

var options = {
    attrPrefix: "",
    textNodeName: "#text",
    ignoreNonTextNodeAttr: false,
    ignoreTextNodeAttr: false,
    ignoreNameSpace: true,
    ignoreRootElement: false,
    textNodeConversion: true,
    textAttrConversion: true,
    arrayMode: false
};

export const getActivityFromTCX = (fname: string) => {
    return new Promise(function(resolve, reject) {
        fs.exists(fname, (exists) => {
            if (exists) {
                let jsonobj = fxp.parse(fs.readFileSync(fname, 'utf8'), options);
                let obj = new TrainingCenterDatabase();

                obj.Activities.Activity.fill(jsonobj.TrainingCenterDatabase.Activities.Activity);
                resolve(obj.Activities.Activity);
            } else {
                reject(`Το αρχείο ${fname} δεν υπάρχει`);
            }
        })
    })
}


