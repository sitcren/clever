<template>
    <section class="garantiaContainer">
        <section class="garantiaContent">
            <article>
                <a href="#"></a>
                <h1>Preços Incríveis</h1>
                <p>Os melhores preços em mais de 100 milhões de produtos.</p>
            </article>
            <article>
                <a href="#"></a>
                <h1>Envios Internacionais</h1>
                <p>Navegação no site em 12 idiomas e envio para mais de 200 países e regiões.</p>
            </article>
            <article>
                <a href="#"></a>
                <h1>Pagamentos Seguros</h1>
                <p>Pague com os métodos mais conhecidos e confiáveis do mundo.</p>
            </article>
            <article>
                <a href="#"></a>
                <h1>Compre com Confiança</h1>
                <p>Nossa Proteção ao Consumidor protege a sua compra do clique à entrega.</p>
            </article>
            <article>
                <a href="#"></a>
                <h1>Suporte ao Cliente</h1>
                <p>Atendimento 24h todos os dias para facilitar as suas compras.</p>
            </article>
            <article>
                <a href="#"></a>
                <h1>A Qualquer Hora e Lugar</h1>
                <p>Baixe o aplicativo e tenha o mundo AliExpress na palma da sua mão.</p>
            </article>
        </section>
    </section>
</template>

<script>
export default{
    name: 'ComGarantia'
}
</script>

<style scoped>
.garantiaContainer{
    width: 100%;
}

.garantiaContent{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
}

.garantiaContent article{
    text-align: center;
}

.garantiaContent article h1{
    font-size: 12px;
    margin: 0;
}
.garantiaContent article p{
    margin: 0;
    font-size: 12px;
}
</style>