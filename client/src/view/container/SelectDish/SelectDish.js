import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dishesOperations, dishesSelectors } from "../../../state/ducks/dishes";
import debounce from "lodash.debounce";
import { DISH_TYPES } from "../../../constants/DishConstants";
import {
  SEARCH_QUERY,
  SEARCH_OPTION,
} from "../../../constants/StorageConstants";

import Dishes from "../../component/Dishes/Dishes";
import StatusLoader from "../../component/Status/StatusLoader";
import StatusDataFailure from "../../component/Status/StatusDataFailure";
import Searchbar from "../../component/Search/Searchbar";
import SearchForm from "../../component/Search/SearchForm";
import Page from "../../component/Layout/Page";
import Presentation from "../../component/Layout/Presentation";

const SelectDish = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const status = dishesSelectors.getStatus(state);
  const [searchOption, setSearchOption] = useState(
    localStorage.getItem(SEARCH_OPTION)
  );
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem(SEARCH_QUERY)
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce((nextValue) => apiCall(nextValue), 1000),
    [] // will be created only once initially
  );

  const apiCall = (value) => {
    localStorage.setItem(SEARCH_QUERY, value);
    dispatch(dishesOperations.fetchDishes(searchOption, searchQuery));
    setSearchQuery(value);
  };

  const onOptionChange = (event) => {
    localStorage.setItem(SEARCH_OPTION, event.target.value);
    dispatch(dishesOperations.fetchDishes(searchOption, searchQuery));
    setSearchOption(event.target.value);
  };

  const onQueryChange = (event) => {
    const { value: nextValue } = event.target;
    debouncedSave(nextValue);
  };

  useEffect(() => {
    dispatch(dishesOperations.fetchDishes(searchOption, searchQuery));
  }, [dispatch, searchQuery, searchOption]);

  return (
    <Presentation
      status={status}
      loadingPresentation={<StatusLoader />}
      loadedPresentation={
        <Page
          pageTitle="SEARCH"
          contentChild={
            <Dishes dishes={dishesSelectors.getFetchedDishes(state)} />
          }
          showMenuButton={true}
        >
          <Searchbar onChange={onQueryChange} query={searchQuery} />
          <SearchForm
            inputLabelTitle="Dish Type"
            option={searchOption}
            options={DISH_TYPES}
            onChange={onOptionChange}
          />
        </Page>
      }
      errorPresentation={<StatusDataFailure />}
    />
  );
};

export default SelectDish;
