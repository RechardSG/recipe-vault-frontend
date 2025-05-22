// src/api/recipes.ts
/*
import axios from 'axios';
import type { RecipeCreateDTO, RecipeResponseDTO } from '../types/Recipe';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET all recipes (with optional query filters like pagination or difficulty)
//export const getRecipes = (params = {}): Promise<RecipeResponseDTO[]> => {
//  return apiClient.get('/recipes', { params }).then(res => res.data);
//};

export const getRecipes = (params = {}) => {
  return apiClient.get('/recipes', { params }.then(res => res.data));
};


// GET a single recipe by ID
export const getRecipeById = (id: number): Promise<RecipeResponseDTO> => {
  return apiClient.get(`/recipes/${id}`).then(res => res.data);
};

// POST - create a recipe
export const createRecipe = (data: RecipeCreateDTO): Promise<RecipeResponseDTO> => {
  return apiClient.post('/recipes', data).then(res => res.data);
};

// PUT - update a recipe by ID
export const updateRecipe = (id: number, data: RecipeCreateDTO): Promise<RecipeResponseDTO> => {
  return apiClient.put(`/recipes/${id}`, data).then(res => res.data);
};

// DELETE - delete a recipe by ID
export const deleteRecipe = (id: number): Promise<void> => {
  return apiClient.delete(`/recipes/${id}`).then(res => res.data);
};
*/

import axios from 'axios';
import type { RecipeCreateDTO, RecipeResponseDTO } from '@/types/Recipe';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRecipes = (params = {}) => {
  return apiClient.get('/recipes/paged', { params });
};

export const getRecipeById = (id: number) => {
  return apiClient.get(`/recipes/${id}`);
};

export const createRecipe = (recipeData: RecipeCreateDTO) => {
  return apiClient.post('/recipes', recipeData);
};

export const updateRecipe = (id: number, recipeData: RecipeCreateDTO) => {
  return apiClient.put(`/recipes/${id}`, recipeData);
};

export const deleteRecipe = (id: number) => {
  return apiClient.delete(`/recipes/${id}`);
};

