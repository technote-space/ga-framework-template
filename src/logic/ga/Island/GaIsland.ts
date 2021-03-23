import {
  IFitness,
  IMutation,
  IPopulation,
  IslandBase,
} from '@technote-space/genetic-algorithms-js';
import {Population} from '#/Population';
import {TestData} from '#/TestData/TestData';
import {Genotype} from '#/Genotype';
import {Fitness} from '#/Fitness';
import {Mutation} from '#/Mutation';

export abstract class GaIsland extends IslandBase {
  private readonly _fitness: IFitness;
  private readonly _mutation: IMutation;
  private readonly _population: IPopulation;

  protected constructor(
    _populationSize: number,
    _mutationProbability: number,
    _mutationDeleteProbability: number,
    _mutationInsertProbability: number,
    _testData: TestData,
  ) {
    super();

    this._fitness    = new Fitness(_testData);
    this._mutation   = new Mutation(_mutationProbability, _mutationDeleteProbability, _mutationInsertProbability);
    this._population = new Population(_populationSize, new Genotype());
  }

  get population(): IPopulation {
    return this._population;
  }

  get fitness(): IFitness {
    return this._fitness;
  }

  get mutation(): IMutation {
    return this._mutation;
  }
}
