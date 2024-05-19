import { RootState } from 'store/configureStore';

export const filterSelector = (state: RootState) => state.filter.filter;
