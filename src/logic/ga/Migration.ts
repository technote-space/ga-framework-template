import {MigrationBase} from '@technote-space/genetic-algorithms-js';

export class Migration extends MigrationBase {
  get rate(): number {
    return 0.01;
  }

  get interval(): number {
    return 100000;
  }
}
