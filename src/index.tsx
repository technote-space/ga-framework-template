import React from 'react';
import ReactDOM from 'react-dom';
import {GaFramework} from '@technote-space/ga-framework';
import {
  ListPage,
  TimelinePage,
} from './app/pages';
import {Statistics, License} from './app/components';

const resultReducer = (store, result) => {
  return {
    ...store,
    logic: {
      ...store.logic,
      population: result.population,
      fitness: result.population[0].fitness,
      progress: result.progress,
    },
  };
};

const options = {
  title: 'Hello,World!',
  pages: {
    LIST: {
      component: () => <ListPage/>,
      icon: 'list',
      text: 'List',
    },
    TIMELINE: {
      component: () => <TimelinePage/>,
      icon: 'timeline',
      text: 'Timeline',
    },
  },
  parts: {
    afterMenu: () => <>
      <Statistics/>
      <License/>
    </>,
  },
  store: {
    state: state => ({
      ...state,
      logic: {
        population: [],
        fitness: 0,
        progress: 0,
        length: 10,
      },
    }),
    reducer: (store, action) => {
      switch (action.type) {
        case 'RESULT':
          return resultReducer(store, action.result);
        default:
          return store;
      }
    },
  },
  controllerListener: (dispatch, result) => {
    dispatch({type: 'RESULT', result});
  },
  getWorkerContext: async store => {
    return {
      terminateOffspringNumber: 2500000,
      islandNumber: 10,
      culturalIslandRate: 0.1,
      populationSize: 100,
      crossoverTime: 10,
      crossoverProbability: 0.5,
      mutationProbability: 0.02,
      mutationDeleteProbability: 0.05,
      mutationInsertProbability: 0.05,
      mixProbability: 0.1,
      length: store.logic.length,
    };
  },
};

ReactDOM.render(
  <GaFramework options={options}/>,
  document.getElementById('root'),
);
