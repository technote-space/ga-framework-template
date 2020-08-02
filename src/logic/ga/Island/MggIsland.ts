import {GaIsland} from './GaIsland';
import {ICrossover, IReinsertion, ISelection} from '@technote-space/genetic-algorithms-js';
import {Mgg as MggCrossover} from '../Crossovers/Mgg';
import {Mgg as MggReinsertion} from '../Reinsertion/Mgg';
import {Mgg as MggSelection} from '../Selection/Mgg';
import {TestData} from '../TestData/TestData';
import {Context} from '../../types';

export class MggIsland extends GaIsland {
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

    this._crossover   = new MggCrossover(context.crossoverProbability, context.mixProbability, context.crossoverTime);
    this._reinsertion = new MggReinsertion();
    this._selection   = new MggSelection();
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
