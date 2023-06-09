import { takeLatest, put, fork, call } from "redux-saga/effects";
import {
  getMovie,
  getMovies,
  getPopularMovies,
  setMovie,
  setMovies,
  setPopularMovies,
} from "./feature/movieSlice";
import { fetchMovie, fetchMovies, fetchPopularMovies } from "./api";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* onLoadMovieAsync({ payload }) {
  try {
    const movieId = payload;
    const response = yield call(fetchMovie, movieId);
    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* onLoadPopularMoviesAsync({ payload }) {
  try {
    const response = yield call(fetchPopularMovies);
    if (response.status === 200) {
      yield put(setPopularMovies({ ...response.data }));
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

function* onLoadPopularMovie() {
  yield takeLatest(getPopularMovies.type, onLoadPopularMoviesAsync);
}

export const movieSagas = [
  fork(onLoadMovies),
  fork(onLoadMovie),
  fork(onLoadPopularMovie),
];
