import {IAlgorithm, TerminationBase} from '@technote-space/genetic-algorithms-js';

export class Termination extends TerminationBase {
  public constructor(private offspringNumber: number) {
    super();
  }

  protected performGetProgress(algorithm: IAlgorithm): number {
    return algorithm.offspringNumber / this.offspringNumber;
  }

  protected performHasReached(algorithm: IAlgorithm): boolean {
    return algorithm.offspringNumber >= this.offspringNumber;
  }
}
