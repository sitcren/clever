<template>
    <section class=lastContainer>
        <section class="lastContent">
            <article class="lastHeader">
                <div class="titulo">
                    <h1>Latest <span class="blue">News</span></h1>
                    <p>Get updated with the latest news of new technologies and gadgets</p>
                </div>
                <div class="ancora">
                    <a href="">All News <img src="../assets/bluwRow.png" alt=""></a>
                </div>
            </article>

            <section class="newContainer">
                <article class="newContent">
                    <div class="newImage">
                        <img src="../assets/computer.png" alt="">
                    </div>
                    <div>
                        <h2>A place of Silence</h2>
                        <p>June 10, 2023</p>
                    </div>
                </article>
                <article class="newContent">
                    <div class="newImage">
                        <img src="../assets/computer.png" alt="">
                    </div>
                    <div>
                        <h2>A place of Silence</h2>
                        <p>June 10, 2023</p>
                    </div>
                </article>
                <article class="newContent">
                    <div class="newImage">
                        <img src="../assets/computer.png" alt="">
                    </div>
                    <div>
                        <h2>A place of Silence</h2>
                        <p>June 10, 2023</p>
                    </div>
                </article>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: 'LastNews'
}
</script>

<style scoped>
.lastContainer{
        width: 100%;
}
.lastContent{
    max-width: 1700px;
    margin: 0 auto;
    width: 100%;
}
.lastHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.titulo{
    margin: 50px 0;
}

.titulo h1{
    color: #000;
font-family: Inter;
font-size: 42px;
font-style: normal;
font-weight: 600;
line-height: 144.523%; /* 60.7px */
margin: 0;
}
.blue{
    color: #0185FF;
font-family: Inter;
font-size: 42px;
font-style: normal;
font-weight: 600;
line-height: 144.523%;
}
.titulo p{
    color: #000;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 144.523%; /* 23.124px */
margin: 0;
}

.ancora a{
    display: flex;
    text-decoration: none;
    gap: 10px;
    align-items: center;
    padding: 21px 34px;
    border: 1px solid #0185FF;
    color: black;
}


.newImage{
    flex: 1;
    max-height: 293px;
    overflow: hidden;
    border-radius: 29px;
}

.newContent h2{
    color: #000;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: 144.523%; /* 31.795px */
margin: 10px 0;
}

.newContent p{
    color: #0185FF;
font-family: Inter;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 144.523%; /* 15.897px */
margin: 0;
}
.newImage img{
  width: 100%; /* A imagem ocupa toda a largura da div */
  height: 100%; /* A imagem ocupa toda a altura da div */
  object-fit: cover;
  border-radius: 28px;
}
.newContainer{
    display: flex;
    justify-content: space-between;
}
.newContent{
    width: 500px;
}
</style>