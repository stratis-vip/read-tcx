import Build from "./build";

interface temp {
    type:string; 
    Name:string;
    LangId:string;
    PartNumber:string;
    Build:Build;
}
export default class Author{
    Type:string ='X';
    Name: string = 'Ανώνυμη εφαρμογή';;
    Build: Build;
    LangId:string = 'XX';
    PartNumber:string = 'XX-XXXX-XX';;

    constructor (){
        this.Build = new Build();
    }

    
    fill = (obj:temp) => {
        if (obj.type){
            this.Type = obj.type;
        }

        if (obj.Name){
            this.Name = obj.Name;
        }
        if (obj.LangId){
            this.LangId = obj.LangId;
        }
        if (obj.PartNumber){
            this.PartNumber = obj.PartNumber;
        }
        this.Build.fill(obj.Build.Version);                
    }
}