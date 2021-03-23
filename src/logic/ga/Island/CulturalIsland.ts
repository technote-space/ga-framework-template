import {GaIsland} from './GaIsland';
import {ICrossover, IReinsertion, ISelection} from '@technote-space/genetic-algorithms-js';
import {Cultural as CulturalCrossover} from '#/Crossovers/Cultural';
import {Cultural as CulturalReinsertion} from '#/Reinsertion/Cultural';
import {Mgg as MggSelection} from '#/Selection/Mgg';
import {TestData} from '#/TestData/TestData';
import {Context} from '$/types';

export class CulturalIsland extends GaIsland {
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

    this._selection   = new MggSelection();
    this._crossover   = new CulturalCrossover(context.crossoverProbability);
    this._reinsertion = new CulturalReinsertion();
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
