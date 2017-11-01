import Activities from "./activities";
import Author from "./author";

export default class TrainingCenterDatabase{
    Activities: Activities; 
    Author: Author;


    constructor () {
        this.Activities = new Activities();
        this.Author = new Author();
    }
    
    get activity() {
        return this.Activities.Activity;
    }

    get creator () {
        return this.activity.Creator; 
     }
 
}