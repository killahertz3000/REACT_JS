import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import {
  selectArticles,
  selectArticlesLoading,
  selectError,
} from "../../store/articles/selectors";
import { apiUrl } from "../../utils/constants";

export const Articles = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const getData = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>Articles</h3>
      <button onClick={getData}>Refresh</button>
      {error && <h5>Error: {error.message}</h5>}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ul>
          {articles.map((art) => (
            <li key={art.id}>{art.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};