import { strictEqual } from "assert";
import Activity from "../src/activity";
import { getActivityFromTCX } from "../index";
import * as path from "path";



describe("Έλεγχος του Αναγνώστη TCX\n", () => {
  let act: Activity | undefined;
  beforeEach(done => {
    getActivityFromTCX(path.join(__dirname, "test1.tcx")).then((activity: Activity) => {
      act = activity;
      done();
    }).catch(() => {
      act = undefined;
      done();      
    });

  });
  it("Αν δεν υπάρχει το αρχείο να επιστρέφει undefined\n", done => {
    expect(act).toBe(undefined);
    done();
  });
});

describe("Έλεγχος του Αναγνώστη TCX\n", () => {
  let act: Activity | undefined;
  beforeEach(done => {
    getActivityFromTCX(path.join(__dirname, "test.tcx")).then((activity: Activity) => {
      act = activity;
      done();
    }).catch(() => {
      act = undefined;
      done();
    });
  });

  it("Το όνομα της δραστηριότητας πρέπει να είναι 2017-09-13T05:41:20.000Z\n", done => {
    expect((<Activity>act).Id).toBe('2017-09-13T05:41:20.000Z');
    done();
  });

  it("Ο τύπος της δραστηριότητας πρέπει να είναι 2 (ποδήλατο)\n", done => {
    expect((<Activity>act).Sport).toBe(2);
    done();
  });

  it("Ο αριθμός των γύρων πρέπει να είναι 7)\n", done => {
    expect((<Activity>act).Lap.length).toBe(7);
    done();
  });

  it("Η μέση ταχύτητα στον 6ο γύρο πρέπει να είναι 7.0960001945495605\n", done => {
    expect((<Activity>act).Lap[5].AvgSpeed).toBe(7.0960001945495605);
    done();
  });

  it("Το δεύτερο σημείο στον 7ο γύρο πρέπει να έχει Longitude 22.210083296522498\n", done => {
    expect((<Activity>act).Lap[6].Track[1].LongitudeDegrees).toBe(22.210083296522498);
    done();
  });

  it("O Ρυθμός πεταλιάς στον 7ο γύρο πρέπει να είναι 56\n", done => {
    expect((<Activity>act).Lap[6].Cadence).toBe(56);
    done();
  });

  it("H μέση ταχύτητα στον 7ο γύρο πρέπει να είναι 5.6570000648498535\n", done => {
    expect((<Activity>act).Lap[6].AvgSpeed).toBe(5.6570000648498535);
    done();
  });

  it("Ο 7ος γύρος πρέπει να έχει 2 σημεία \n", done => {
    expect((<Activity>act).Lap[6].Track.length).toBe(2);
    done();
  });

  it("Στον 1ο σημείο του 7ου γύρου η απόσταση πρέπει να είναι 30011.609375 \n", done => {
    expect((<Activity>act).Lap[6].Track[0].DistanceMeters).toBe(30011.609375);
    done();
  });

  it("Στον 1ο σημείο του 7ου γύρου ο καρδιακός παλμός πρέπει να είναι 143\n", done => {
    expect((<Activity>act).Lap[6].Track[0].HeartRateBpm).toBe(143);
    done();
  });

  // it("Στον 1ο σημείο του 7ου γύρου ο ρυθμός πεταλιάς πρέπει να είναι 56\n", done => {
  //   expect((<Activity>act).Lap[6].Track[0].RunCadence).toBe(56);
  //   done();
  // });

  it("Στον 1ο σημείο του 7ου γύρου η ταχύτητα πρέπει να είναι 5.019999980926515\n", done => {
    expect((<Activity>act).Lap[6].Track[0].Speed).toBe(5.019999980926515);
    done();
  });
  //   "_DistanceMeters": 30011.609375,
  //   "_HeartRateBpm": 143,
  //   "_Cadence": 56,
  //   "_Speed": 5.019999980926515      


});