import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiOperations, apiSelectors } from "../../../state/ducks/api";
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
  const status = apiSelectors.getStatus(state);
  const [searchOption, setSearchOption] = useState(
    localStorage.getItem(SEARCH_OPTION)
  );
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem(SEARCH_QUERY)
  );

  const debouncedSave = useCallback(
    debounce((nextValue) => apiCall(nextValue), 1000),
    [] // will be created only once initially
  );

  const apiCall = (value) => {
    localStorage.setItem(SEARCH_QUERY, value);
    dispatch(apiOperations.fetchDishes(searchOption, searchQuery));
    setSearchQuery(value);
  };

  const onOptionChange = (event) => {
    localStorage.setItem(SEARCH_OPTION, event.target.value);
    dispatch(apiOperations.fetchDishes(searchOption, searchQuery));
    setSearchOption(event.target.value);
  };

  const onQueryChange = (event) => {
    const { value: nextValue } = event.target;
    debouncedSave(nextValue);
  };

  useEffect(() => {
    dispatch(apiOperations.fetchDishes(searchOption, searchQuery));
  }, [dispatch, searchQuery, searchOption]);

  const headerContent = () => (
    <div>
      <Searchbar onChange={onQueryChange} query={searchQuery} />
      <SearchForm
        inputLabelTitle="Dish Type"
        option={searchOption}
        options={DISH_TYPES}
        onChange={onOptionChange}
      />
    </div>
  );

  return (
    <Presentation
      status={status}
      loadingPresentation={<StatusLoader />}
      loadedPresentation={
        <Page
          pageTitle="SEARCH"
          headerChild={<headerContent />}
          showMenuButton={true}
        >
          <Dishes dishes={apiSelectors.getFetchedDishes(state)} />
        </Page>
      }
      errorPresentation={<StatusDataFailure />}
    />
  );
};

export default SelectDish;
