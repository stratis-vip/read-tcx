
import {tempVersion} from './interface';

export default class Version {
    VersionMajor: number  = -1;
    VersionMinor: number = -1;
    BuildMajor: number = -1;
    BuildMinor: number = -1;

    fill = (obj: tempVersion) => {
        if (obj.BuildMajor || obj.BuildMajor >=0) {
            this.BuildMajor = obj.BuildMajor;
        }
        if (obj.VersionMajor || obj.VersionMajor >=0) {
            this.VersionMajor = obj.VersionMajor;
        }
        if (obj.VersionMinor || obj.VersionMinor >=0) {
            this.VersionMinor = obj.VersionMinor;
        }

        if (obj.BuildMinor || obj.BuildMinor >=0) {
            this.BuildMinor = obj.BuildMinor;
        }
    }
}