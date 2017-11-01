import TrackPoint from "./trackpoint";

interface tempVersion {
    BuildMajor: number; 
    VersionMajor: number;
    VersionMinor:number;
    BuildMinor:number;
}

interface tempCreator {
    type:string; 
    Name:string;
    UnitId:number;
    ProductID: number;
    Version: tempVersion;
}
interface LapExtensions{
    AvgSpeed:number;
    Speed: number;
    RunCadence: number;
    AvgRunCadence: number;
    MaxRunCadence: number;
}

interface Extensions{
    LX: LapExtensions; //polar
    TPX: LapExtensions;
}

interface TempLap {
    StartTime: string;
    TotalTimeSeconds: number;
    DistanceMeters: number;
    MaximumSpeed: number;
    Calories: number;
    AverageHeartRateBpm: HR;
    MaximumHeartRateBpm: HR;
    Cadence:0;
    Extensions:Extensions;
    Track: {
    Trackpoint: Array<TempTrackPoint>}
    // Trackpoint: [TempTrackPoint]}
    //Point:Array<TempTrackPoint>;
}

interface TempTrackPoint{
    Time: string;
    DistanceMeters: number;
    HeartRateBpm: HR;
    Position: {
        LatitudeDegrees:number;
        LongitudeDegrees:number;
    }
    AltitudeMeters:number;
    Extensions:Extensions;
}
interface HR{
    Value: number;
}

interface tempActivity {
    Sport: string;
    Id: string;
    Creator: tempCreator;
    Lap: Array<TempLap>;
}
export {tempVersion, tempCreator, TempLap, HR, TempTrackPoint, tempActivity}