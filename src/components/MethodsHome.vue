<template>
    <section class="methodsContainer">
        <section class="methodsContent">
            <article>
                <img src="../assets/car.png" alt="">
                <p>Same day delivery <br>
    for order beore 11:00h</p>
            </article>
            <article>
                <img src="../assets/home.png" alt="">
                <p>Same day delivery <br>
    for order beore 11:00h</p>
            </article>
            <article>
                <img src="../assets/star.png" alt="">
                <p>Same day delivery <br>
    for order beore 11:00h</p>
            </article>
            <article>
                <img src="../assets/call.png" alt="">
                <p>Same day delivery <br>
    for order beore 11:00h</p>
            </article>
            <article>
                <img src="../assets/msg.png" alt="">
                <p>Same day delivery <br>
    for order beore 11:00h</p>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    name: 'MethodsHome'
}
</script>

<style scoped>
.methodsContainer{
    width: 100%;
    margin: 1.5rem 0;
}
.methodsContent{
        display: flex;
    align-items: center;
    max-width: 1700px;
    margin: 0 auto;
    justify-content: space-evenly;
    width: 100%;
    border-radius: 12px;
    background: #F1F1F1;
}

.methodsContent article{
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 0;
}

.methodsContent p{
    font-size: 12px;
}

</style>