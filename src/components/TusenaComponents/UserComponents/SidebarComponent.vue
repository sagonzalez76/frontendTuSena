<template>
    <div class="col-lg-3">
        <!-- Toggle button -->
        <button class="btn btn-outline-secondary mb-3 w-100 d-lg-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span>Filtros</span>
        </button>
        <!-- Collapsible wrapper -->
        <div class="collapse card d-lg-block mb-5" id="navbarSupportedContent">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            Semillero
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                        aria-labelledby="headingOne">
                        <div class="accordion-body">
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                                <li><a href="#" class="text-dark">FILTRO</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo">
                            Semillero
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                        aria-labelledby="headingTwo">
                        <div class="accordion-body">
                            <div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1"
                                        checked />
                                    <label class="form-check-label" for="flexCheckChecked1">Filtro 1</label>
                                    <span class="badge badge-secondary float-end">120</span>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2"
                                        checked />
                                    <label class="form-check-label" for="flexCheckChecked2">Filtro 2</label>
                                    <span class="badge badge-secondary float-end">15</span>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3"
                                        checked />
                                    <label class="form-check-label" for="flexCheckChecked3">Filtro 3</label>
                                    <span class="badge badge-secondary float-end">35</span>
                                </div>
                                <!-- Checked checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4"
                                        checked />
                                    <label class="form-check-label" for="flexCheckChecked4">Filtro 4</label>
                                    <span class="badge badge-secondary float-end">89</span>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Filtro 5</label>
                                    <span class="badge badge-secondary float-end">30</span>
                                </div>
                                <!-- Default checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Filtro 6</label>
                                    <span class="badge badge-secondary float-end">30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree">
                            A&ntilde;o
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show"
                        aria-labelledby="headingThree">
                        <div class="accordion-body">
                            <div class="range">
                                <input type="range" class="form-range" id="customRange1" min=2012 max="2023" />
                            </div>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <p class="mb-0">
                                        Desde
                                    </p>
                                    <div class="form-outline">
                                        <input type="number" id="typeNumber" class="form-control" min="2012" max="2022" />
                                        <label class="form-label" for="typeNumber"></label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <p class="mb-0">
                                        Hasta
                                    </p>
                                    <div class="form-outline">
                                        <input type="number" id="typeNumber" class="form-control" min="2012" max="2022" />
                                        <label class="form-label" for="typeNumber"></label>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-white w-100 border border-secondary">Aplicar</button>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFour">
                            Semillero
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show"
                        aria-labelledby="headingThree">
                        <div class="accordion-body">
                            <input type="checkbox" class="btn-check border bg justify-content-center" id="btn-check1"
                                checked autocomplete="off" />
                            <label class="btn btn-success mb-1 px-1 mx-2" style="width: 60px;"
                                for="btn-check1">Filtro</label>
                            <input type="checkbox" class="btn-check border justify-content-center" id="btn-check2" checked
                                autocomplete="off" />
                            <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;" for="btn-check2">Filtro</label>
                            <input type="checkbox" class="btn-check border justify-content-center" id="btn-check3" checked
                                autocomplete="off" />
                            <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;" for="btn-check3">Filtro</label>
                            <input type="checkbox" class="btn-check border justify-content-center" id="btn-check4" checked
                                autocomplete="off" />
                            <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;" for="btn-check4">Filtro</label>
                            <input type="checkbox" class="btn-check border justify-content-center" id="btn-check4" checked
                                autocomplete="off" />
                            <label class="btn btn-white mb-1 px-1 mx-2" style="width: 60px;" for="btn-check4">Filtro</label>

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFive">
                            Calificacion
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show"
                        aria-labelledby="headingThree">
                        <div class="accordion-body">
                            <!-- Default checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <i class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i><i
                                        class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i>
                                    <i class="fa fa-star bs-warning"></i>
                                </label> (5)
                            </div>
                            <!-- Default checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <i class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i><i
                                        class="fa fa-star bs-warning"></i>
                                    <i class="fa fa-star bs-warning"></i>
                                    <i class="fas fa-star text-white"></i>
                                </label> (4)
                            </div>
                            <!-- Default checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <i class="fa fa-star bs-warning"></i><i class="fa fa-star bs-warning"></i><i
                                        class="fa fa-star bs-warning"></i>
                                    <i class="fas fa-star text-white"></i>
                                    <i class="fas fa-star text-white"></i>
                                </label> (3)
                            </div>
                            <!-- Default checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <i class="fa fa-star bs-warning"></i>
                                    <i class="fa fa-star bs-warning"></i>
                                    <i class="fas fa-star text-white"></i>
                                    <i class="fas fa-star text-white"></i>
                                    <i class="fas fa-star text-white"></i>
                                </label> (2)
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <i class="fa fa-star bs-warning"></i>
                                    <i class="fas fa-star text-white"></i>
                                    <i class="fas fa-star text-white"></i>
                                    <i class="fas fa-star text-white"></i>
                                    <i class="fas fa-star text-white"></i>
                                </label> (1)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarComponent',
    props: {
        // msg//
    }

}
</script>

<style></style>