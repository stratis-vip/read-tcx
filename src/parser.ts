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

export const getActivityFromTCX = (fname: string): Activity => {
    let jsonobj = fxp.parse(fs.readFileSync(fname, 'utf8'), options);
    let obj = new TrainingCenterDatabase();

    obj.Activities.Activity.fill(jsonobj.TrainingCenterDatabase.Activities.Activity);
    return obj.Activities.Activity;
}
