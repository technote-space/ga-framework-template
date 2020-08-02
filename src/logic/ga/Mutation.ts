import {MutationBase} from '@technote-space/genetic-algorithms-js';

export class Mutation extends MutationBase {
  constructor(probability: number, deleteProbability: number, insertProbability: number) {
    super(probability, deleteProbability, insertProbability);
  }
}
