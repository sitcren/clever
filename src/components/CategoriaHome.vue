<template>
    <section class="categoriaContainer">
        <section class="categoriaContent">
            <article class="cardCat">
                <div class="categoriaImage">
                    <img src="../assets/computer.png" alt="">
                </div>
                <div class="cardText">
                    <p>Shop</p>
                    <div class="cardTextSeta">
                        <h1>Computers</h1>
                        <span class="seta">
                            <a href="">
                                <img src="../assets/seta.png" alt="">
                            </a>
                        </span>
                    </div>
                </div>
            </article>
            <article class="cardCat">
                <div class="categoriaImage">
                    <img src="../assets/acessories.png" alt="">
                </div>
                <div class="cardText">
                    <p>Shop</p>
                    <div class="cardTextSeta">
                        <h1>Acessories</h1>
                        <span class="seta">
                            <a href="">
                                <img src="../assets/seta.png" alt="">
                            </a>
                        </span>
                    </div>
                </div>
            </article>
            <article class="cardCat">
                <div class="categoriaImage">
                    <img src="../assets/games.png" alt="">
                </div>
                <div class="cardText">
                    <p>Shop</p>
                    <div class="cardTextSeta">
                        <h1>Games</h1>
                        <span class="seta">
                            <a href="">
                                <img src="../assets/seta.png" alt="">
                            </a>
                        </span>
                    </div>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    name: 'CategoriaHome'
}
</script>

<style scoped>
.categoriaContainer{
       width: 100%; 
}
.categoriaContent{
        display: flex;
    align-items: center;
    max-width: 1700px;
    margin: 0 auto;
justify-content: space-between;
width: 100%;
}
.categoriaContent article{
border-radius: 27px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 540px;
}
.cardText{
border-radius: 0px 0px 27px 27px;
    background: #D9D9D9;
    padding: 20px 30px;
    top: -50px;
    position: relative;
}
.cardTextSeta{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.seta a img{
    border-radius: 8px;
    background: #546C7A;
    padding: 14px 18px;
}
.cardTextSeta h1{
    color: #082848;
font-family: Inter;
font-size: 35px;
font-style: normal;
font-weight: 800;
line-height: 144.523%; /* 50.583px */
margin: 0;
}
.cardText p{
    margin: 0;
}

.categoriaImage img{
    border-radius: 27px 27px 0 0 ;
      width: 100%; /* A imagem ocupa toda a largura da div */
  height: 100%; /* A imagem ocupa toda a altura da div */
  object-fit: cover;
}

.categoriaImage{
  flex: 1; /* A div preencherá todo o espaço disponível horizontalmente */
  max-height: 360px;
  overflow: hidden; 
}

.cardCat{
  display: flex;
  /* align-items: center; */
}
</style>