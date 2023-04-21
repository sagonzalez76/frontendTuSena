<template>
                      <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                        <strong class="d-block py-2">32 Productos Encontrados </strong>
                        <div class="ms-auto ">
                            <select class="form-select d-inline-block w-auto border pt-1 me-2">
                                <option value="0">Recomendados</option>
                                <option value="1">Mas Visitados</option>
                                <option value="2">Mejor Calificados</option>
                                <option value="3">Al Azar</option>
                            </select>
                            <div class="btn-group shadow-0 border">
                                <a href="#" class="btn btn-light" title="List view">
                                    <i class="fa fa-bars fa-lg"></i>
                                </a>
                                <a href="#" class="btn btn-light active" title="Grid view">
                                    <i class="fa fa-th fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </header>
</template>

<script>
export default {
name: 'FilterComponent'
}
</script>

<style>

</style>