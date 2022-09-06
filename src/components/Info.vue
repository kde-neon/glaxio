<template>

    <div class="card flex">
        <div class="card-img">
            <img src="../asset/image/UI.png" alt="UI">
        </div>
        <div @wheel="slide" class="cart-textarea">
            <h2>UI Service</h2>
            <p>you can get creative clean and user
                friendly user interface & optimize
                seo friendly ui.</p>
            <button class="pa btn btn-xox">Get Start</button>
        </div>
    </div>

</template>
<style scoped>
.card {
    width: 90%;
    margin: 0 auto;
    min-width: 200px;
    max-width: 600px;
    align-items: center;
}

@media only screen and (max-width: 700px) {
    .card {
        flex-direction: column;
        align-items: center !important;
        justify-content: center !important;
    }

    .cart-textarea {
        width: 90%;
        margin-top: 20px;
        max-width: 700px;
        min-width: 260px;
    }

    .card-img {
        margin: 0 auto !important;
    }
}

.card-img {
    width: 90%;
    min-width: 260px;
    max-width: 400px;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
    margin-left: 30px;
}

.card-img img {
    width: 100%;
}

.cart-textarea {
    margin-left: 30px;
}

.cart-textarea p {
    color: #a3b4ff;
}
</style>