import { TempLap, tempCreator, tempActivity } from './interface';
import Creator from './creator';
import Lap from './lap';
import { ActivitiesTypes } from './enums';

export default class Activity {
    Sport: ActivitiesTypes = ActivitiesTypes.Invalid;
    Id: string = 'X';
    Lap: Array<Lap>;
    Creator: Creator;

    constructor() {
        this.Creator = new Creator();
        this.Lap = new Array<Lap>();
    }

    fill = (obj: tempActivity) => {
        if (obj.Sport) {
            this.Sport = ActivitiesTypes[<keyof typeof ActivitiesTypes>obj.Sport];
        }
        if (obj.Id) {
            this.Id = obj.Id;
        }
        if (obj.Creator) {
            this.Creator.fill(obj.Creator);
        }
        // console.log('CREATOR')
        if (obj.Lap) {
            for (let i = 0; i < obj.Lap.length; i++) {
                this.Lap[i] = new Lap();
                this.Lap[i].fill(obj.Lap[i]);
            }
        }
    }
}