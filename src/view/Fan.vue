<template>
    <div class="fan-body">
        <back />
        <center>
            <center>
                <svg class="fan" :class="{ 'work': fan }" :style="'animation-duration:' + (2 / speed) + 's ;'"
                    width="256" height="256" xml:space="preserve">
                    <g style="stroke:none;stroke-width:0;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:none;fill-rule:nonzero;opacity:1"
                        transform="matrix(2.81 0 0 2.81 1.407 1.407)">
                        <path
                            d="M82.047 28.465a1.52 1.52 0 0 0-.071-.031c-2.745-1.051-5.806 1.337-10.038 4.643-3.8 2.969-8.476 6.622-14.334 8.867a12.846 12.846 0 0 0-2.796-5.449c7.792-9.731 10.115-19.56 6.713-28.484C59.609 3.234 54.044.245 46.636.014c-6.84-.219-15.439 2.181-18.201 8.011-1.052 2.748 1.337 5.806 4.643 10.037 2.964 3.794 6.612 8.463 8.858 14.312a12.83 12.83 0 0 0-5.464 2.8C26.749 27.399 16.928 25.08 8.011 28.48 3.234 30.392.245 35.956.014 43.364c-.213 6.837 2.181 15.439 8.011 18.201 2.746 1.057 5.806-1.336 10.037-4.643 3.792-2.962 8.456-6.607 14.298-8.854a12.826 12.826 0 0 0 2.813 5.461c-7.774 9.723-10.092 19.543-6.692 28.458 1.912 4.777 7.475 7.768 14.883 7.998.278.011.558.015.841.015 6.684 0 14.711-2.431 17.361-8.024 1.052-2.748-1.337-5.806-4.643-10.037-2.966-3.797-6.616-8.468-8.861-14.321a12.816 12.816 0 0 0 5.446-2.807c9.731 7.79 19.557 10.111 28.482 6.711 4.776-1.912 7.766-7.477 7.996-14.885.213-6.837-2.18-15.439-7.939-18.172z"
                            style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#3d00c3;fill-rule:nonzero;opacity:1" />
                        <circle cx="44.978" cy="44.998" r="12.998"
                            style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#009cff;fill-rule:nonzero;opacity:1" />
                        <circle cx="44.98" cy="45" r="5"
                            style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#002a44;fill-rule:nonzero;opacity:1" />
                    </g>
                </svg>

            </center>
            <br>
            <range @range="range" />
            <button @click="on" class="pa btn btn-xox">{{ text }}</button>
        </center>
    </div>
</template>
<script>

import back from "../components/back.vue";
import range from "../components/Range.vue";

export default {
    data() {
        return {
            fan: false,
            speed: 4,
            text: "Start",
            animation: false
        }
    },
    methods: {
        on() {
            if (this.fan) {
                this.fan = false
                this.text = "Start";
            } else {
                this.fan = true
                this.text = "Stop";
            }
        },
        range(value) {
            this.speed = value;
        }
    },
    components: {
        range,
        back
    },
}
</script>
<style scoped>
.fan-body {
    margin-top: 100px;
}

.fan {
    transform-origin: center;
    transform: rotate(0deg) scale(0.8);
}

.work {
    animation: work 1s linear infinite;
}

@keyframes work {
    0% {
        transform: rotate(0deg) scale(0.8);
    }

    100% {
        transform: rotate(360deg) scale(0.8);
    }
}
</style>