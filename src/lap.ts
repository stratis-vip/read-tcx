import TrackPoint from "./trackpoint";
import { TempLap, TempTrackPoint } from './interface';

export default class Lap {
    StartTime: Date;
    TotalTimeSeconds: number = -1;
    DistanceMeters: number = -1;
    MaximumSpeed: number = -1;
    Calories: number = -1;
    AverageHeartRateBpm: number = -1;
    MaximumHeartRateBpm: number = -1;
    Cadence: number = -1;
    Track: Array<TrackPoint>;
    AvgSpeed: number = -1;
    constructor() {
        this.StartTime = new Date(1, 1, 1, 0, 0, 1);
        this.Track = new Array<TrackPoint>();
    }

    fill = (obj: TempLap) => {
        if (obj) {
            if (obj.StartTime) {
                this.StartTime = new Date(obj.StartTime);
            }

            if (obj.TotalTimeSeconds || obj.TotalTimeSeconds >=0 ) {
                this.TotalTimeSeconds = obj.TotalTimeSeconds
            }

            if (obj.DistanceMeters || obj.DistanceMeters >=0 ) {
                this.DistanceMeters = obj.DistanceMeters
            }

            if (obj.MaximumSpeed || obj.DistanceMeters >=0) {
                this.MaximumSpeed = obj.MaximumSpeed
            }

            if (obj.Calories || obj.Calories >= 0) {

                this.Calories = obj.Calories
            }

            if (obj.AverageHeartRateBpm.Value) {
                this.AverageHeartRateBpm = obj.AverageHeartRateBpm.Value;
            }

            if (obj.MaximumHeartRateBpm.Value) {
                this.MaximumHeartRateBpm = obj.MaximumHeartRateBpm.Value;
            }

            //polar only Τα άλλα θα τα υπολογίσω από τα σημεία
            if (obj.Cadence) {
                this.Cadence = obj.Cadence
            }

            if (obj.Extensions.LX.AvgSpeed) {
                this.AvgSpeed = obj.Extensions.LX.AvgSpeed;
            }

            
            // console.log(typeof(obj.Track.Trackpoint) + ' - '+JSON.stringify(obj.Track.Trackpoint.length, null, 2));
            if (obj.Track.Trackpoint && obj.Track.Trackpoint.length !== undefined) {
                for (let i = 0; i < obj.Track.Trackpoint.length; i++) {
                    this.Track[i] = new TrackPoint();
                    this.Track[i].fill(obj.Track.Trackpoint[i]);
                  // console.log(JSON.stringify(this.Track[i], null, 2));
                }
            }
             else {
                this.Track[0] = new TrackPoint();
                let temp = new Array();
                temp.push(obj.Track.Trackpoint);
                this.Track[0].fill((temp[0] as TempTrackPoint));
             //   console.log(JSON.stringify(this.Track[0],null,2)); 
            }

        }
    }
}