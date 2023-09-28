<template>
    <section class="headerMom">
        <header>
            <nav>            
                <a href="#"><img src="../assets/socLogo.png" alt=""></a>
                <div>
                    <ul>
                        <li><a href="#">Nossos Productos</a></li>
                        <li class="loginBtn"><a href="#">Fazer Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </section>
</template>

<script>
    export default{
        name: 'HeaderHome'
    }
</script>


<style scoped>
.headerMom{
    width: 100%;
    margin: 0;
    padding: 0;
}
header{
    margin: 0 auto;
    max-width: 1200px;
}
nav ul li a{
    text-decoration: none;
    font-size: 12px;
}
nav ul li{
    list-style-type: none;
}
ul{
    display: flex;
    gap: 20px;
    align-items: center;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.loginBtn a{
    padding: 11px 21px;
    border-radius: 7px;
    background: #FF6131;
    color: white;
    font-weight: 500;
    color: white;
}
</style>