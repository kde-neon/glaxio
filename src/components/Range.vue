<template>
    <div :value="parsent" @mousemove="rangeTouch" ref="range" class="range">
        <div :style="{ width: touchActiveLeng }" @mousemove="rangeTouch" class="touch-active">
        </div>
        <div :style="{ marginLeft: touch }" @mousedown="touchGrab(true)" @mouseup="touchGrab(false)"
            @touchstart="touchGrab(true)" @mouseleave="touchGrab(false)" @touchend="touchGrab(false)"
            @touchmove.prevent="rangeTouchM" @mousemove="rangeTouch" class="range-touch">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            os: "Linux OS",
            touch: 0,
            touchActiveLeng: 0,
            grabTouch: false,
            parsent: 0,
        }
    },
    methods: {

        touchGrab(e) {
            this.grabTouch = e;
        },

        rangeTouch(Event) {
            if (this.grabTouch) {
                var parent = this.$refs.range;
                var x = Event.clientX - parent.getBoundingClientRect().left;
                if (x < (parent.clientWidth - 4) && x > 0) {
                    this.touch = (x - 10) + "px";
                    this.touchActiveLeng = (x + 5) + "px"
                    this.parsent = Math.floor((100 / (parent.clientWidth - 5)) * x);
                }
            }
            this.$emit("range", this.parsent)
        },

        rangeTouchM(Event) {
            if (this.grabTouch) {
                var parent = this.$refs.range;
                var x = Event.touches[0].clientX - parent.getBoundingClientRect().left;
                if (x < (parent.clientWidth - 4) && x > 0) {
                    this.touch = (x - 10) + "px";
                    this.touchActiveLeng = (x + 5) + "px"
                    this.parsent = Math.floor((100 / (parent.clientWidth - 5)) * x);
                }
            }
            this.$emit("range", this.parsent)
        },
    },
}
</script>
<style>
.range {
    width: 150px;
    height: 7px;
    border-radius: 25px;
    position: relative;
    background: #3f3c3c;
}

.range-touch {
    width: 17px;
    height: 17px;
    cursor: grab;
    margin-top: -5px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    transform: scale(1.2);
}

.range-touch:active {
    cursor: grabbing;
    transform: scale(1.4);
}

.touch-active {
    width: 0px;
    height: 7px;
    margin-left: 0;
    background: #19f;
    position: absolute;
    border-radius: 25px;
}
</style>