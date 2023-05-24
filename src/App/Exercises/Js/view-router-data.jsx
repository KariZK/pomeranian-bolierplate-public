import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArray } from './Array/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsDateTime } from './DateTime/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctions } from './JsFunctions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBlok22Warmup } from './Blok22Warmup/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsSetTimeout } from './SetTimeout/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBoolean,
  blockRouterMetaDataJsArray,
  blockRouterMetaDataJsDateTime,
  blockRouterMetaDataJsEmptyValuesAndComments,
  blockRouterMetaDataJsFunctions,
  blockRouterMetaDataJsBlok22Warmup,
  blockRouterMetaDataJsSetTimeout,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
