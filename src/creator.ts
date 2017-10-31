import Version from './version';
import {tempCreator} from './interface';
import { Author_type } from './enums';


export default class Creator {
    type: Author_type = Author_type.Invalid;
    Name: string = 'Ανώνυμη εφαρμογή';
    UnitId: number = -1;
    ProductID: number = -1;
    Version: Version;


    constructor() {
        this.Version = new Version();
    }


    fill = (obj: tempCreator) => {
        if (obj === undefined || obj === null ){
            return null;
        }
        
        if (obj.type){
            this.type = Author_type[<keyof typeof Author_type>obj.type];
            
        }
        if (obj.Name){
            this.Name = obj.Name;
        }
        if (obj.UnitId || obj.UnitId >=0) {
            this.UnitId = obj.UnitId;
        }
        if (obj.ProductID || obj.ProductID >=0) {
            this.ProductID = obj.ProductID;
        }
        if (obj.Version) {
            this.Version.fill(obj.Version);
        }
    }
}