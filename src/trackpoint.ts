import { TempTrackPoint } from "./interface";

export default class TrackPoint{
    Time: Date;
    LatitudeDegrees: number = -1;
    LongitudeDegrees: number = -1;
    AltitudeMeters: number = -1;
    DistanceMeters: number = -1;
    HeartRateBpm: number = -1;
    Speed: number = -1;
    
    
    constructor (){
        this.Time = new Date(1,1,1,0,0,1);
        
    }

    fill = (obj:TempTrackPoint) =>{
        if (obj){
            if (obj.Time){
              this.Time= new Date(obj.Time);  
            }

            if (obj.DistanceMeters){
                this.DistanceMeters = obj.DistanceMeters;
            }
            
            if (obj.HeartRateBpm){
                this.HeartRateBpm = obj.HeartRateBpm.Value;
            }

            if (obj.Position){
                this.LatitudeDegrees = obj.Position.LatitudeDegrees;
                this.LongitudeDegrees = obj.Position.LongitudeDegrees;
            }
            
            if (obj.AltitudeMeters >=0 ){
                this.AltitudeMeters = obj.AltitudeMeters;
            }

            if (obj.Extensions.TPX.Speed >= 0 ){
                this.Speed = obj.Extensions.TPX.Speed;
            }
            
        }
    }
}