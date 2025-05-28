<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo País</h1>
    <div class="card">
      <div class="card-header fw-bold">
        País
      </div>
      <div class="card-body">
        <form @submit.prevent="savePais">

          <div class="row mb-3">
            <label for="pais_codi" class="form-label">Código</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="pais_codi" placeholder="Código país" disabled
                     v-model="pais.pais_codi" />
            </div>
          </div>

          <div class="row mb-3">
            <label for="pais_nomb" class="form-label">Nombre :</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="globe" /></div>
              <input type="text" class="form-control" id="pais_nomb" placeholder="Nombre del País"
                     v-model="pais.pais_nomb" />
            </div>
          </div>

          <div class="row mb-3">
            <label for="pais_capi" class="form-label">Capital :</label>
            <div class="input-group">
              <div class="input-group-text"> <font-awesome-icon icon="landmark" /></div>
              <input type="number" class="form-control" id="pais_capi" placeholder="Capital del País (Solo id)"
                     v-model="pais.pais_capi" />
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'NewPais',
  data() {
    return {
      pais: {
        pais_codi: '',
        pais_nomb: '',
        pais_capi: ''
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'Paises' })
    },
    async savePais() {
      const res = await axios.post('http://127.0.0.1:8000/api/paises', this.pais)
      if (res.status === 201) {
        this.$router.push({ name: 'Paises' })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'País registrado exitosamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    }
  }
}
</script>
