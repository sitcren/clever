<template>
    <section class="letterContainer">
        <section class="letterContent">
            <article class="conteudo">
                <div>
                    <h1>Our Newsletter</h1>
                    <p>Get Updates by subscribe our weekly newsletter</p>
                </div>
                <div class="formulario">
                    <form action="">
                        <input class="search" type="search" placeholder="Enter your email...">
                        <input class="enviar" type="submit" value="Subscribe">
                    </form>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    name: 'NewsLetter'
}
</script>

<style scoped>
.letterContainer{
    width: 100%;
    margin: 50px 0;
}
.letterContent{
        max-width: 1700px;
    margin: 0 auto;
    width: 100%;
    border-radius: 35px;
background: #546C7A;
}
.conteudo{
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    padding: 60px 100px;
}
.conteudo h1{
    color: #FFF;
    font-family: Inter;
    font-size: 57px;
    font-style: normal;
    font-weight: 700;
    line-height: 144.523%;
    margin: 0;
}
.conteudo p{
    color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 144.523%; /* 23.124px */
margin: 0;
}

.formulario{
border-radius: 28px;
background: rgba(255, 255, 255, 0.20);
}

input[type='search']{
    background: transparent;
}

input[type='submit']{
    border-radius: 28px;
    background: #0373DB;
    height: auto;
    padding: 20px 34px;
    cursor: pointer;
}


.search{
    border: none;
    outline: none;
    color: transparent;
    height: 56px;
    width: 483px;
    color: white;
    padding: 20px;
}
.enviar{
    border: none;
    outline: none;
    color: #FFF;
}
.search::placeholder {
  color: white;
}
</style>