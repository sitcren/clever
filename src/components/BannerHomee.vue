<template>
    <section class="bannerContainer">
        <section class="bannerContent">
            <article class="imagePerson"><img src="../assets/personVr.png" alt=""></article>
            <article class="textContent">
<h1>                Swap. The  <br>
        clever decision.</h1>
        <h2>Swapping allows you to trade something you have for something you want</h2>
        <a href="">Comprar Agora</a>
            </article>
            <article class="imageVr"><img src="../assets/vrGlass.png" alt=""></article>
        </section>
    </section>
</template>

<script>
export default {
name:'BannerHomee'
}
</script>

<style scoped>
.bannerContainer{
    width: 100%;
    background: #546C7A;
    padding: 5rem 0 3rem 0;
}

.bannerContent{
    display: flex;
    align-items: center;
    max-width: 1700px;
    margin: 0 auto;
justify-content: space-evenly;
width: 100%;
}
.textContent{
    color: white;
    text-align: center;
    width: 40%;
}

.textContent a{
    border-radius: 22px;
    background: #FFF;
    color: #546C7A;
    font-family: Inter;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    padding: 16px 31px;
    gap: 10px;
}

.textContent h1{
    color: #FFF;
text-align: center;
font-family: Inter;
font-size: 65px;
font-style: normal;
font-weight: 700;
line-height: 104.023%; /* 53.052px */
margin: 0;
}

.textContent h2{
    color: #FFF;
text-align: center;
font-family: Inter;
    font-size: 20px;
font-style: normal;
    font-weight: 400;
line-height: 131.523%; /* 21.044px */
}
.imagePerson{
    width: 30%;
}
.imageVr{
    width: 30%;
    text-align: right;
}
</style>