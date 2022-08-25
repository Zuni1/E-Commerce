import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    user: null,
    movies: [],
    loading: false,
    error: '',
    cart: 0
  }

  // export const fetchMovies = () => {
  //   return function (dispatch) {
  //     dispatch(fetchRequest())
  //     fetch("http://localhost:3000/movies")
  //     .then(res => res.json())
  //     .then(res => {
  //       const movie = res.map((data) => {
  //         return(
  //           <p key={data.id}>{data.name}</p>)
  //         })
  //       dispatch(fetchSuccess(movie))
  //       console.log(movie)
  //     })
  //     .catch(error => {
  //       dispatch(fetchFailure(error.message))
  //       console.log(error)
  //     })
  //   }
  // }

  const info = createSlice({
    name: "user",
    initialState,
    reducers: {
      login: (state, action) => {
        state.user = action.payload
      },
      logout: (state) => {
        state.user = null
      },
      fetchRequest: (state) => {
        state.loading = true
      },  
      fetchSuccess: (state, action) => {
        state.loading = false
        state.movies = action.payload
        state.error = ''
      },
      fetchFailure: (state, action) => {
        state.loading = false
        state.movies = []
        state.error = action.payload
      },
      Increment: (state) => {
        state.cart = state.cart + 1
      },
      Decrement: (state) => {
        state.cart = state.cart - 1
      }
    }
  })
  
export const {login, logout, fetchRequest, fetchSuccess, fetchFailure, Increment, Decrement} = info.actions

export default info.reducer