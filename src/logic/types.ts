export type UpdateResult = {
  population: Array<{
    value: string;
    fitness: number;
  }>;
  progress: number;
};
export type Context = {
  terminateOffspringNumber: number;
  islandNumber: number;
  culturalIslandRate: number;
  populationSize: number;
  crossoverTime: number;
  crossoverProbability: number;
  mutationProbability: number;
  mutationDeleteProbability: number;
  mutationInsertProbability: number;
  mixProbability: number;
  length: number;
}
