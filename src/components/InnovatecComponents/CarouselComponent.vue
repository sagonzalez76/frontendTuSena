<template>
    <div class="row d-flex justify-content-center carrusel mx-0">
        <div class="col-10">
            <div id="carouselExampleDark" class="carousel carousel-dark slide p-2 mx-0 " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"> </button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="40000">
                        <router-link to="/noticias" class="dropdown-item" href="#"><img src="@/assets/img/banner.svg"
                                class="d-block w-100" alt="..."></router-link>
                    </div>
                    <div class="carousel-item" data-bs-interval="40000">
                        <router-link to="/noticias" class="dropdown-item" href="#"><img src="@/assets/img/banner.svg"
                                class="d-block w-100" alt="..."></router-link>

                    </div>
                    <div class="carousel-item" data-bs-interval="40000">
                        <router-link to="/noticias" class="dropdown-item" href="#"><img src="@/assets/img/banner.svg"
                                class="d-block w-100" alt="..."></router-link>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">next</span>
                </button>
            </div>
        </div>
    </div>
</template>
<!-- 

<script>
export default {
    name: "App"
}
</script> -->

<style scoped>
img {
    max-height: 20vh;
}

.carrusel{
    background-color: #39ca3e;
}
</style>