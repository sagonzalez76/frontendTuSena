<template>
  <section>
    <div class="container my-2">



      <div class="container bootstrap snippet">
        <div class="row">
          <div class="col-sm-10 mb-2">
            <h2>Favoritos</h2>
          </div>
          <!-- <div class="col-sm-2"><a href="#" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/?s=100"></a></div> -->
        </div>
        <div class="row">
          <div class="col-sm-3"><!--left col-->


            <div class="text-center">
              <img src="@/assets/logo.png" class="avatar img-circle img-thumbnail" alt="avatar">
              <!-- <h6>Subir una foto diferente</h6> -->
              
            </div>

            <br>

            <!-- <div class="panel panel-default">
            <div class="panel-heading">Website <i class="fa fa-link fa-1x"></i></div>
            <div class="panel-body"><a href="http://bootnipets.com">bootnipets.com</a></div>
          </div> -->


            <ul class="list-group">
              <li class="list-group-item text-right"><span class="pull-left"> <i class="fas fa-heart m-1 me-md-2"></i>
                  <strong>Favoritos</strong></span> 13</li>

            </ul>

            <div class="panel panel-default mt-2">
              <div class="panel-heading">Redes Sociales</div>
              <div class="panel-body">
                <i class="bi bi-facebook fa-2x"></i> <i class="bi bi-github fa-2x"></i> <i
                  class="bi bi-twitter fa-2x"></i> <i class="bi bi-google fa-2x"></i>
              </div>
            </div>

          </div>



          <!-- FAVORITOS -->




          <div class="col-sm-9 mt-3">
            <ul class="nav nav-tabs">
              <li class="nav-item me-2">
                <router-link class="nav-link" aria-current="page" to="/userprofile/1">Usuario</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/userfavorite/1" id="activo" >Favoritos</router-link>
              </li>
            </ul>


            <div class="tab-content">

              <div class="row">

                <div class="col mt-3">

                  <ProductComponent></ProductComponent>
                  <ProductComponent></ProductComponent>
                  <ProductComponent></ProductComponent>
                  <ProductComponent></ProductComponent>
                  <ProductComponent></ProductComponent>
                  <ProductComponent></ProductComponent>

                </div>



              </div>


            </div><!--/tab-pane-->
          </div><!--/tab-content-->

        </div><!--/col-9-->
      </div><!--/row-->
    </div>
  </section>
</template>

<script>

import ProductComponent from './ProductComponent.vue';
export default {
  name: 'UserFavoriteComponent',
  props: {
  },
  // msg//,
  components: {
    ProductComponent
  }

}
</script>

<style>

#activo{
  color: rgb(47, 157, 0);
}

.nav-link{
  color: black;
}


</style>