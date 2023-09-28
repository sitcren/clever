<template>
    <section class="productosContainer">
        <section class="productosContent">
            <h1 class="titulo">Popular Items</h1>
            <section class="prodCont">
                <article>
                    <div class="productoImage">
                        <img src="../assets/auriculares.png" alt="">
                    </div>
                    <div class="productoDescricao">
                        <div class="nameMoney">
                            <h2>Fones de ouvido</h2>
                            <h3>500MZN</h3>
                        </div>
                        <div class="descricao">
                            <p>Auriculares sem fio, também conhecidos como fones de ouvido sem fio, são dispositivos de áudio projetados para proporcionar...</p>
                        </div>
                        <div class="btnAdicionar">
                            <a href=""><img src="../assets/carinho.png" alt="">ADICIONAR</a>
                        </div>
                    </div>
                </article>
                <article>
                    <div class="productoImage">
                        <img src="../assets/laptop.png" alt="">
                    </div>
                    <div class="productoDescricao">
                        <div class="nameMoney">
                            <h2>Fones de ouvido</h2>
                            <h3>500MZN</h3>
                        </div>
                        <div class="descricao">
                            <p>Auriculares sem fio, também conhecidos como fones de ouvido sem fio, são dispositivos de áudio projetados para proporcionar...</p>
                        </div>
                        <div class="btnAdicionar">
                            <a href=""><img src="../assets/carinho.png" alt="">ADICIONAR</a>
                        </div>
                    </div>
                </article>
                <article>
                    <div class="productoImage">
                        <img src="../assets/vr.png" alt="">
                    </div>
                    <div class="productoDescricao">
                        <div class="nameMoney">
                            <h2>Fones de ouvido</h2>
                            <h3>500MZN</h3>
                        </div>
                        <div class="descricao">
                            <p>Auriculares sem fio, também conhecidos como fones de ouvido sem fio, são dispositivos de áudio projetados para proporcionar...</p>
                        </div>
                        <div class="btnAdicionar">
                            <a href=""><img src="../assets/carinho.png" alt="">ADICIONAR</a>
                        </div>
                    </div>
                </article>
                <article>
                    <div class="productoImage">
                        <img src="../assets/keyboard.png" alt="">
                    </div>
                    <div class="productoDescricao">
                        <div class="nameMoney">
                            <h2>Fones de ouvido</h2>
                            <h3>500MZN</h3>
                        </div>
                        <div class="descricao">
                            <p>Auriculares sem fio, também conhecidos como fones de ouvido sem fio, são dispositivos de áudio projetados para proporcionar...</p>
                        </div>
                        <div class="btnAdicionar">
                            <a href=""><img src="../assets/carinho.png" alt="">ADICIONAR</a>
                        </div>
                    </div>
                </article>
                <article>
                    <div class="productoImage">
                        <img src="../assets/games.png" alt="">
                    </div>
                    <div class="productoDescricao">
                        <div class="nameMoney">
                            <h2>Fones de ouvido</h2>
                            <h3>500MZN</h3>
                        </div>
                        <div class="descricao">
                            <p>Auriculares sem fio, também conhecidos como fones de ouvido sem fio, são dispositivos de áudio projetados para proporcionar...</p>
                        </div>
                        <div class="btnAdicionar">
                            <a href=""><img src="../assets/carinho.png" alt="">ADICIONAR</a>
                        </div>
                    </div>
                </article>
                <article>
                    <div class="productoImage">
                        <img src="../assets/acessories.png" alt="">
                    </div>
                    <div class="productoDescricao">
                        <div class="nameMoney">
                            <h2>Fones de ouvido</h2>
                            <h3>500MZN</h3>
                        </div>
                        <div class="descricao">
                            <p>Auriculares sem fio, também conhecidos como fones de ouvido sem fio, são dispositivos de áudio projetados para proporcionar...</p>
                        </div>
                        <div class="btnAdicionar">
                            <a href=""><img src="../assets/carinho.png" alt="">ADICIONAR</a>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: 'NossosProductos'
}
</script>

<style scoped>

.productosContainer{
    width: 100%;
    background: #F2F2F2;
    padding: 2rem 0;
}

.productosContent{
    max-width: 1700px;
    margin: 0 auto;
    width: 100%;
}

.titulo{
    color: #000;
    font-family: Inter;
    font-size: 42px;
    font-style: normal;
    font-weight: 600;
    line-height: 144.523%;
    margin: 10px 0;
}

.prodCont{
            display: flex;
            justify-content: space-between;
}

.nameMoney{
    display: flex;
    justify-content: space-between;
}

.prodCont article{
    width: 270px;
}

.prodCont article:hover{
        filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.09));
        transition: .3s;
}
.nameMoney h2{
color: #000;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 144.523%; /* 20.233px */
margin: 10px 0;
}
.nameMoney h3{
    color: #E6804B;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 144.523%; /* 17.343px */
margin: 10px 0;
}
.descricao p{
    color: #010101;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 144.523%; /* 17.343px */
text-align: justify;
margin: 0 0 10px 0;
}

.btnAdicionar{
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 10px;
}

.btnAdicionar a{
    text-decoration: none;
    color: #000;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: 144.523%;
    display: flex;
    gap: 10px;
    align-items: center;
        border: 1px solid black;
    padding: 10px 30px;
}

.btnAdicionar a:hover{
    border: 1px solid red;
    background: red;
    transition: .3s;
    color: white;

}

.btnAdicionar img{
    width: 10px;
}

.productoImage{
    flex: 1;
    max-height: 176px;
    overflow: hidden;
}

.productoImage img{
      width: 100%; /* A imagem ocupa toda a largura da div */
  height: 100%; /* A imagem ocupa toda a altura da div */
  object-fit: cover;
}
.productoDescricao{
    background: white;
    padding: 15px 20px;
}
</style>