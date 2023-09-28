<template>
    <section class="bannerSection">
        <section class="bannerContainer">
            <article class="bannerImage">
                <img src="../assets/personVr.png" alt="">
            </article>
            <article class="bannerText">
                <h1>Swap. The <br> Clever decision.</h1>
                <h2>Swapping allows you to trade something you have for something you want</h2>
                <a href="#">Ganhar desconto!</a>
            </article>
        </section>
    </section>
</template>

<script>
export default{
    name: 'BannerHome'
}
</script>

<style scoped>
.bannerSection{
    width: 100%;
}
.bannerContainer{
    max-width: 1200px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    align-items: end;
}

.bannerImage{
    width: 40%;
}

.bannerImage img{
    width: 100%;
}

.bannerText{
    width: 60%;
    margin: 0 0 50px 0;
}

.bannerText h1{
    color: #000;
font-family: Inter;
font-size: 90px;
font-style: normal;
font-weight: 700;
line-height: 104.023%; /* 90.5px */
margin: 0;
}

.bannerText h2{
    color: #121212;
font-family: Inter;
font-size: 23px;
font-style: normal;
font-weight: 500;
line-height: 104.023%; /* 23.925px */
}

.bannerText a{
    padding: 11px 21px;
    border-radius: 7px;
    background: #FF6131;
    color: white;
    text-decoration: none;
    font-size: 12px;
}
</style>