import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FiltersBox from "../components/filters/FiltersBox";
import { getAll } from "../services/search";
import filters from "../utils/filters";

import "../assets/css/search.css";
import MainList from "../components/Search/MainList";
import { Helmet } from "react-helmet";
import SpinnerLoader from "../components/common/SpinnerLoader";

export const parseUrlCategory = (str) => {
  return str.replace(/-/g, "_");
};

const Search = () => {
  const { category } = useParams();
  const [picked, setPicked] = useState({});
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    totalDocs: 0,
    limit: 20,
    totalPages: 1,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  });

  const handleGetAll = async (category, filters = {}, page) => {
    let filtersCopy = { ...filters };
    for (let i in filtersCopy) {
      if (!filtersCopy[i]) {
        delete filtersCopy[i];
      }
    }

    try {
      setLoading(true);
      const resp = await getAll(category, filtersCopy, page);
      if (resp) {
        const { docs, ...rest } = resp;
        setList(docs);
        setPagination(rest);
      } else {
        setList([]);
        setPagination({});
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (category) {
  //     handleGetAll(category);
  //   }
  // }, [category]);

  const handleSetPicked = (value) => {
    setPicked(value);
    handleGetAll(category, value);
  };
  const getNextPage = async () => {
    const filters = picked;
    if (pagination.nextPage) {
      let filtersCopy = { ...filters };
      for (let i in filtersCopy) {
        if (!filtersCopy[i]) {
          delete filtersCopy[i];
        }
      }

      try {
        setLoading(true);
        const resp = await getAll(category, filtersCopy, pagination.nextPage);
        if (resp) {
          const { docs, ...rest } = resp;
          setList([...list, ...docs]);
          setPagination(rest);
        } else {
          setList([]);
          setPagination({});
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="search-page">
      <Helmet>
        <title>{category} | Imperfect</title>
      </Helmet>
      <div className="left">
        <FiltersBox
          picked={picked}
          filterObject={filters[parseUrlCategory(category)]}
          setPicked={handleSetPicked}
          category={category}
          disabled={loading}
        />
      </div>
      <div className="right">
        <MainList list={list} />
        {loading && <SpinnerLoader size={32} />}

        {pagination.hasNextPage && (
          <button
            className="load-more-btn"
            disabled={loading}
            onClick={() => getNextPage()}
          >
            load more
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
