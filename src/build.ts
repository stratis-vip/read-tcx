import Version from "./version";

interface temp {
    BuildMajor: number; 
    VersionMajor: number;
    VersionMinor:number;
    BuildMinor:number;
}

export default class Build {
    Version: Version;

    constructor() {
        this.Version = new Version();
    }

    fill = (obj: temp) => {
        if (obj.BuildMajor) {
            this.Version.BuildMajor;
        }
        if (obj.VersionMajor) {
            this.Version.VersionMajor;
        }
        if (obj.VersionMinor) {
            this.Version.VersionMinor;
        }

        if (obj.BuildMinor) {
            this.Version.BuildMinor;
        }
    }
}