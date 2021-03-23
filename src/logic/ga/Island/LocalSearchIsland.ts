import {GaIsland} from './GaIsland';
import {ICrossover, IReinsertion, ISelection} from '@technote-space/genetic-algorithms-js';
import {LocalSearch as LocalSearchCrossover} from '#/Crossovers/LocalSearch';
import {LocalSearch as LocalSearchReinsertion} from '#/Reinsertion/LocalSearch';
import {LocalSearch as LocalSearchSelection} from '#/Selection/LocalSearch';
import {TestData} from '#/TestData/TestData';
import {Context} from '$/types';

export class LocalSearchIsland extends GaIsland {
  private readonly _crossover: ICrossover;
  private readonly _reinsertion: IReinsertion;
  private readonly _selection: ISelection;

  public constructor(context: Context, testData: TestData) {
    super(
      Math.floor(context.populationSize / context.islandNumber),
      context.mutationProbability,
      context.mutationDeleteProbability,
      context.mutationInsertProbability,
      testData,
    );

    this._crossover   = new LocalSearchCrossover(context.crossoverProbability, context.crossoverTime);
    this._reinsertion = new LocalSearchReinsertion();
    this._selection   = new LocalSearchSelection();
  }

  public get crossover(): ICrossover {
    return this._crossover;
  }

  get reinsertion(): IReinsertion {
    return this._reinsertion;
  }

  get selection(): ISelection {
    return this._selection;
  }
}
