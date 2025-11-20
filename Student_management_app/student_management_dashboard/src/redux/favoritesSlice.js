import { createSlice } from '@reduxjs/toolkit';

// Helper function to get the unique ID consistently across the app
const getStudentId = (student) => student.id.value || student.login.uuid;

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const student = action.payload;
      const studentId = getStudentId(student);
      
      // Prevent adding duplicates based on the unique ID
      if (!state.favorites.some(fav => getStudentId(fav) === studentId)) {
        state.favorites.push(student);
      }
    },
    removeFavorite: (state, action) => {
      // action.payload is the unique ID (string) of the student to remove
      const studentIdToRemove = action.payload;
      
      // Filter the favorites array, keeping only students whose unique ID 
      // does NOT match the ID passed in the action payload.
      state.favorites = state.favorites.filter(student => 
          getStudentId(student) !== studentIdToRemove
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;