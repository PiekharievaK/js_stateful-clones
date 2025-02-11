'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  const result = [];
  const tempObj = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(tempObj, action.extraData);
        break;

      case 'removeProperties':
        removeProperties(tempObj, action.keysToRemove);
        break;

      case 'clear':
        clearProperties(tempObj);
        break;
    }
    result.push({ ...tempObj });
  }

  return result;
}

function addProperties(obj, extraData) {
  Object.assign(obj, extraData);
}

function removeProperties(obj, keysToRemove) {
  for (const key of keysToRemove) {
    delete obj[key];
  }
}

function clearProperties(obj) {
  for (const key in obj) {
    delete obj[key];
  }
}

module.exports = transformStateWithClones;
