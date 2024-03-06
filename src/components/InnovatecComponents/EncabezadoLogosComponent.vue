<template>

    <header class="container-fluid d-flex align-items-center">
        <div class="m-0 p-0">
            <img src="@/assets/logos/logosena.png" alt="" width="" class="img-fluid logo-1 mx-2">

            <img src="@/assets/logos/sennovalogo.png" alt="" width="" class="logo-2">
        </div>
        <div class="ms-auto m-3 p-0 ">
            <img src="@/assets/logos/mintrabajo.png" alt="" width="" class="logo-3 m-0 p-0">
        </div>
    </header>
</template>



<style scoped>
header {
    padding-top: 10px;
    padding-bottom: 0px;
    width: 100%;
    height: 100px;
    background-color: rgb(255, 255, 255);

}

.logo-1 {
    width: 60px;
    height: 60px;
}

.logo-2 {
    width: 200px;
}

.logo-3 {
    width: 300px;
}

@media (max-width: 750px) {

    header {
        width: 100%;
        height: 90px;
        background-color: rgb(255, 255, 255);
    }

    .logo-1 {
        width: 50px;
        height: 50px;
    }

    .logo-2 {
        width: 170px;
    }

    .logo-3 {
        width: 195px;
    }
}

@media (max-width: 550px) {

    header {
        padding-top: 5px;
        padding-bottom: 0px;
        width: 100%;
        height: 80px;
        background-color: rgb(255, 255, 255);
    }

    .logo-1 {
        width: 40px;
        height: 40px;
    }

    .logo-2 {
        width: 150px;
    }

    .logo-3 {
        width: 170px;
    }
}

@media (max-width: 430px) {

    header {
        height: 70px;
        background-color: rgb(255, 255, 255);
    }

    .logo-1 {
        width: 35px;
        height: 35px;
    }

    .logo-2 {
        width: 120px;
    }

    .logo-3 {
        width: 150px;

    }
}

@media (max-width: 380px) {

    header {
        width: 100%;
        height: 60px;
        background-color: rgb(255, 255, 255);
    }

    .logo-1 {
        width: 30px;
        height: 30px;
    }

    .logo-2 {
        width: 80px;
    }

    .logo-3 {
        width: 130px;

    }
}
</style>