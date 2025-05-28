import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Comunas from '@/views/Comunas.vue'
import EditarComuna from '@/components/Comuna/EditarComuna.vue'
import NewComuna from '@/components/Comuna/NewComuna.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
    {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna
  },
  {
    path: '/add-comuna/',
    name: 'NewComuna',
    component: NewComuna
  },
  {
      path: '/municipios',
    name: 'Municipios',
    component: Municipios
  },
    {
    path: '/editar-municipio/:id',
    name: 'EditarMunicipio',
    component: EditarMunicipio
  },
  {
    path: '/add-municipio/',
    name: 'NewMunicipio',
    component: NewMunicipio
  },
  {
      path: '/departamentos',
    name: 'Departamentos',
    component: Departamentos
  },
    {
    path: '/editar-departamento/:id',
    name: 'EditarDepartamento',
    component: EditarDepartamento
  },
  {
    path: '/add-departamento/',
    name: 'NewDepartamento',
    component: NewDepartamento
  }

]