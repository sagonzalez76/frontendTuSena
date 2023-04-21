<template>
  <section>
    <div class="container my-2">



      <div class="container bootstrap snippet">
        <div class="row">
          <div class="col-sm-10 mb-2">
            <h2>Configuracion de Perfil</h2>
          </div>
          <!-- <div class="col-sm-2"><a href="#" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/?s=100"></a></div> -->
        </div>
        <div class="row">
          <div class="col-sm-3"><!--left col-->


            <div class="text-center">
              <img src="@/assets/logo.png" class="avatar img-circle img-thumbnail" alt="avatar">
              <!-- <h6>Subir una foto diferente</h6> -->
              <div class="mb-1 mt-2">
                <label for="formFile" class="form-label">Selecciona una nueva foto de perfil</label>
                <input class="form-control" type="file" id="formFile" placeholder="No">
              </div>
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

          </div><!--/col-3-->
          <div class="col-sm-9 mt-3">



            <ul class="nav nav-tabs">
              <li class="nav-item me-2">
                <router-link class="nav-link active" aria-current="page" to="/userprofile/1" id="activo">Usuario</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/userfavorite/1">Favoritos</router-link>
              </li>
            </ul>


            <div class="tab-content">
              <div class="tab-pane active" id="home">
                <hr>
                <form class="form" action="##" method="post" id="registrationForm">
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control border-success" style="--bs-border-opacity: .5;"
                      id="floatingInput" placeholder="Nombre">
                    <label for="floatingInput">Nombre</label>
                  </div>


                  <div class="form-floating mb-3">
                    <input type="password" class="form-control border-success" style="--bs-border-opacity: .5;"
                      id="floatingInput" placeholder="Apellido">
                    <label for="floatingInput">Apellido</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="tel" class="form-control border-success" style="--bs-border-opacity: .5;"
                      id="floatingInput" placeholder="Telefono/Celular">
                    <label for="floatingInput">Telefono/Celular</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="email" class="form-control border-success" style="--bs-border-opacity: .5;"
                      id="floatingInput" placeholder="Correo Electronico">
                    <label for="floatingInput">Correo Electronico</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="password" class="form-control border-success" style="--bs-border-opacity: .5;"
                      id="floatingInput" placeholder="Correo Electronico">
                    <label for="floatingInput">Contrase&ntilde;a</label>
                  </div>


                  <div class="form-group mt-3">

                    <div class="col-xs-6">
                      <label for="password2">
                        <h5>Introduce tu contrase&ntilde;a actual para guardar los cambios</h5>
                      </label>
                      <div class="form-floating mb-0">
                        <input type="password" class="form-control border-success" style="--bs-border-opacity: .5;"
                          id="floatingInput" placeholder="Correo Electronico">
                        <label for="floatingInput">Contrase&ntilde;a Actual</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-xs-12">
                      <br>
                      <button class="btn btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i>
                        Guardar</button>
                      <button class="btn btn" type="reset"><i class="glyphicon glyphicon-repeat"></i> Borrar
                        Todo</button>
                    </div>
                  </div>
                </form>

                <hr>

              </div><!--/tab-pane-->


            </div><!--/tab-pane-->
          </div><!--/tab-content-->

        </div><!--/col-9-->
      </div><!--/row-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserProfileComponent',
  props: {
    // msg//
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