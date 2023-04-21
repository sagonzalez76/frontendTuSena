<template>
  <body class=" pt-5">


    <h1>404</h1>
    <p>Oops! Algo salio mal.</p>
    <div class="d-flex justify-content-center mx-0 px-0">

      <router-link class="button" to="/"><i class="bi bi-house mx-1"></i> Volver a la pagina de inicio</router-link>

    </div>

  </body>
</template>

<script>



export default {
  name: 'PageNotFound'
}


</script>



<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);

body {
  background-color: #0d911f;
  color: #fff;
  font-size: 100%;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  height: 100vh;
}

.button {
  font-weight: 300;
  color: #fff;
  font-size: 1.2em;
  text-decoration: none;
  border: 1px solid #efefef;
  padding: .5em;
  border-radius: 3px;
  float: left;
margin-top: 5rem;
  left: 50%;

  transition: all .3s linear;
}

.button:hover {
  background-color: #104a04;
  color: #fff;
}

p {
  font-size: 2em;
  text-align: center;
  font-weight: 100;
}

h1 {
  text-align: center;
  font-size: 15em;
  font-weight: 100;
  text-shadow: #58c750 1px 1px,
    /* #5bdf54 2px 2px,
    #29b821 3px 3px,
    #3dd258 4px 4px,
    #0062cd 5px 5px,
    #5ac551 6px 6px,
    #3cb531 7px 7px,
    #3cb531 8px 8px,
    #3cb531 9px 9px,
    #3cb531 10px 10px,
    #3cb531 11px 11px,
    #3cb531 12px 12px,
    #0063cf 13px 13px,
    #0063cf 14px 14px,
    #0063cf 15px 15px,
    #0063d0 16px 16px,
    #0064d0 17px 17px,
    #0064d0 18px 18px,
    #0064d0 19px 19px,
    #0064d1 20px 20px,
    #0064d1 21px 21px,
    #0064d1 22px 22px,
    #0064d1 23px 23px,
    #0064d2 24px 24px,
    #3cb531 25px 25px,
    #0065d2 26px 26px,
    #0065d2 27px 27px,
    #0065d3 28px 28px,
    #0065d3 29px 29px,
    #0065d3 30px 30px,
    #0065d3 31px 31px,
    #0065d4 32px 32px,
    #006531 33px 33px,
    #0066d4 34px 34px,
    #0066d4 35px 35px,
    #0066d5 36px 36px,
    #0066d5 37px 37px,
    #006531 38px 38px,
    #0066d5 39px 39px,
    #0066d6 40px 40px,
    #0066d6 41px 41px,
    #0067d6 42px 42px,
    #0067d6 43px 43px,
    #0067d7 44px 44px,
    #0067d7 45px 45px,
    #0067d7 46px 46px,
    #0067d7 47px 47px,
    #0067d8 48px 48px,
    #0067d8 49px 49px,
    #0068d8 50px 50px,
    #0068d9 51px 51px,
    #0068d9 52px 52px,
    #0068d9 53px 53px,
    #0068d9 54px 54px,
    #0068da 55px 55px,
    #0068da 56px 56px,
    #0068da 57px 57px,
    #0068da 58px 58px,
    #0069db 59px 59px,
    #0069db 60px 60px,
    #0069db 61px 61px,
    #0069db 62px 62px,
    #0069dc 63px 63px,
    #0069dc 64px 64px,
    #0069dc 65px 65px,
    #0069dc 66px 66px,
    #006add 67px 67px,
    #006add 68px 68px,
    #006add 69px 69px,
    #006add 70px 70px,
    #006ade 71px 71px,
    #006ade 72px 72px,
    #006ade 73px 73px,
    #006ade 74px 74px,
    #006bdf 75px 75px,
    #006bdf 76px 76px,
    #006bdf 77px 77px,
    #006bdf 78px 78px,
    #006be0 79px 79px,
    #006be0 80px 80px,
    #006be0 81px 81px,
    #006be0 82px 82px,
    #006be1 83px 83px,
    #006ce1 84px 84px,
    #006ce1 85px 85px,
    #006ce1 86px 86px,
    #006ce2 87px 87px,
    #006ce2 88px 88px,
    #006ce2 89px 89px,
    #006ce2 90px 90px,
    #006ce3 91px 91px,
    #006de3 92px 92px,
    #006de3 93px 93px,
    #006de3 94px 94px,
    #006de4 95px 95px,
    #006de4 96px 96px,
    #006de4 97px 97px,
    #006de4 98px 98px,
    #006de5 99px 99px,
    #006ee5 100px 100px,
    #006ee5 101px 101px,
    #006ee6 102px 102px,
    #006ee6 103px 103px,
    #006ee6 104px 104px,
    #006ee6 105px 105px,
    #006ee7 106px 106px,
    #006ee7 107px 107px,
    #006ee7 108px 108px,
    #006fe7 109px 109px,
    #006fe8 110px 110px,
    #006fe8 111px 111px,
    #006fe8 112px 112px,
    #006fe8 113px 113px,
    #006fe9 114px 114px,
    #006fe9 115px 115px,
    #006fe9 116px 116px,
    #3CB5e9 117px 117px,
    #3cb5ea 118px 118px,
    #3CB5ea 119px 119px,
    #3CB5ea 120px 120px,
    #3CB5ea 121px 121px,
    #3CB5eb 122px 122px,
    #3CB5eb 123px 123px,
    #3CB5eb 124px 124px,
    #0071eb 125px 125px,
    #0071ec 126px 126px,
    #0071ec 127px 127px,
    #0071ec 128px 128px, */

}
</style>