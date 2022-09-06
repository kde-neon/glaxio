<template>

    <div class="project-list flex">
        <div class="crop">

            <!-- Image option -->
            <slot></slot>

            <!-- Blur effect bottom to top project info -->
            <div class="list flex">
                <div class="text">
                    <h2>{{pro.text}}</h2>
                    <span>{{pro.info}}</span>
                </div>

                <!-- Route link container -->
                <div class="route flex">
                    <router-link class="ru-btn flex" :to="pro.link"></router-link>
                    <div class="icon flex pen">
                        <svg width="100%" viewBox="0 0 384 512">
                            <path fill="#fff"
                                d="M361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87 48.019 48.019 0 0 1 48.51.91L361 215z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props:["pro"],
}
</script>

<style scoped>
/* Project list */
.project-list {
    width: 310px;
    height: 175px;
    margin: 0 10px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    border: solid 2px transparent;
}

/* Project list mouseover/touch */
.project-list:hover {
    border-color: royalblue;
}

.project-list .text {
    left: 30px;
    bottom: 30px;
    position: absolute;
}

.route {
    margin: 0;
    padding: 0;
    right: 50px;
    bottom: 10px;
    width: 60px;
    height: 60px;
    position: absolute;
    align-items: center;
    justify-content: center;
}

.ru-btn {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    padding: 15px;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    position: absolute;
    background: transparent;
    justify-content: center;
    border: dashed 4px #ffffff;
    user-select: none;
    -webkit-user-drag: none;
    text-decoration: none;
}

.ru-btn:hover {
    animation: roundRotate 15s linear infinite;
    -o-animation: roundRotate 15s linear infinite;
    -moz-animation: roundRotate 15s linear infinite;
    -webkit-animation: roundRotate 15s linear infinite;
}


@keyframes roundRotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@-o-keyframes roundRotate {
    0% {
        -o-transform: rotate(0deg);
    }

    100% {
        -o-transform: rotate(360deg);
    }
}

@-moz-keyframes roundRotate {
    0% {
        -moz-transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes roundRotate {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

.icon {
    width: 20px;
    width: 18px;
    height: 18px;
    padding: 10px;
    border-radius: 50%;
    position: absolute;
    background: #4613ff;
}


.crop .list {
    width: 310px;
    height: 185px;
    bottom: -120%;
    padding: 0 15px;
    position: absolute;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: flex-start;
    backdrop-filter: blur(0px);
    transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
    -o-transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
    -moz-transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
    -webkit-transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.project-list:hover .list {
    bottom: 0%;
    opacity: 1;
    backdrop-filter: blur(5px);
    -o-backdrop-filter: blur(5px);
    -moz-backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
</style>