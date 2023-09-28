<template>
    <section class="headerContainer">
        <header>
            <nav>
                <div>
                    <ul>
                        <li><a href="#"><img src="../assets/afedeLogo.png" alt=""></a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div class="logSection">
<div class="formulario">
    <span class="search"><a href=""><img src="../assets/searchIcon.png" alt=""></a></span>
    <form action="">
                        <input class="inputSearch" type="search" placeholder="Search for products...">
                    </form>
</div>
<span class="user"><a href=""><img src="../assets/userIcon.png" alt=""></a></span>
<span class="wallet"><a href=""><img src="../assets/bagIcon.png" alt=""></a></span>

                </div>
            </nav>
        </header>
    </section>
</template>

<script>
export default{
name: 'HeaderHomee'
}
</script>

<style scoped>
.headerContainer{
    widows: 100%;
    margin: 0;
    padding: 0;
}
header{
    max-width: 1700px;
    margin: 0 auto;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
nav ul{
    display: flex;
    gap: 40px;
    align-items: center;
}
li{
    list-style-type: none;
}
nav li a{
    text-decoration: none;

    color: #000;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.logSection{
    display: flex;
    align-items: center;
    gap: 20px;
}
.search a img{
    border-radius: 8px;
    background: #546C7A;
    padding: 8px;
    margin: 0;
    display: flex;
    align-items: center;
}
.user a img{
    border-radius: 8px;
    background: #546C7A;
    padding: 8px;
}
.wallet a img{
    border-radius: 8px;
    background: #546C7A;
    padding: 8px;
}
.formulario{
    display: flex;
    align-items: center;
    border: 1px solid #546C7A;
            border-radius: 11px;
}
.inputSearch{
    border: none;
    outline: none;
}
</style>