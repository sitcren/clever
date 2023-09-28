<template>
    <section class="footerContainer">
        <section class="footerContent">
            <article class="um">
                <img src="../assets/afedeLogoWhite.png" alt="">
                <p>Queremos ouvir você! Sua opinião, perguntas e comentários são extremamente importantes para nós. Ficamos à disposição para atendê-lo e fornecer o suporte necessário.</p>
                <a class="number" href="tel:+258846810719">(+258) 84 68 10 719</a><br>
                <a class="email" href="mailto:crenciomateus@gmail.com">crenciomateus@gmail.com</a>
            </article>
            <article class="dois">
                <ul>
                    <li><h2>Navegação</h2>
                    </li>
                    <li class="bold"><a href="">Cadastrar</a></li>
                    <li class="bold"><a href="">Login</a></li>
                </ul>
            </article>
            <article class="tres">
                <ul>
                    <li >
                        <h2>Productos</h2>
                    </li>
                    <li class="bold"><a href="">Computers</a></li>
                    <li class="bold"><a href="">Acessories</a></li>
                    <li class="bold"><a href="">Games</a></li>
                </ul>
            </article>
            <article class="quatro">
                <h2>Newsletter</h2>
                <p>Subscribe our newsletter to get updats about our services and offers</p>
                <form action="">
                    <input type="search" placeholder="Email Address">
                </form>
            </article>
        </section>
        <article class="assinatura">
            <a href="">copyright 2023 all rights reserved | This templete was made by Crêncio Mateus</a>
        </article>
    </section>
</template>

<script>
export default {
    name: 'FooterHome'
}
</script>

<style scoped>

a{
    text-decoration: none;
    color: white;
}
.footerContainer{
        width: 100%;
background: #546C7A;
    padding: 5rem 0 2rem 0;
}
.footerContent{
        max-width: 1700px;
    margin: 0 auto;
    width: 100%;
    color: white;
    display: flex;
    padding: 2rem 0;
    justify-content: space-between;
}
.assinatura{
    text-align: center;
    padding: 5rem 0 0 0;
}
.assinatura a{
    text-decoration: none;
    color: white;
    font-size: 12px;
}

.um{
    width: 30%;
}
.um p{
    color: #FFF;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: 140%; /* 16.8px */
}

.um a{
    text-decoration: none;
    color: white;
}
.um .number{
    color: #FFF;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding: 10px 0;
}
.um .email{
    color: #FFF;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-decoration-line: underline;
}
.quatro{
    width: 30%;
}

.dois ul li{
list-style-type: none;
}

.tres ul li{
list-style-type: none;
}

.bold a{
        font-size: 12px;
    font-weight: 200;
    line-height: 30px;
}





</style>