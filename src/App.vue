<template>

  <!-- App home container -->
  <div :class="{show: home}">
    <transition name="lod">
      <div v-if="load" class="load flex">
        <h3>﷽</h3>
        <h1>لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَّسُولُ ٱللَّٰ</h1>
      </div>
    </transition>

    <!-- Headder -->
    <div>

      <!-- Agency logo and name -->
      <div :class="{ sudo: header }" class="none">
        <div class="app-icon flex"> <img src="./asset/icon/logo.png" alt="Glaxio UI icon" /> </div>
        <h1>Glaxio</h1>
      </div>
    </div>

    <!-- Glaxy component frist canvas intro -->
    <glaxy>

      <!-- Agency info contaner -->
      <div class="agency-container">

        <!-- Agency logo and name -->
        <div class="agency-logo flex fc">
          <div class="app-icon flex"> <img src="./asset/icon/logo.png" alt="Glaxio UI icon" /> </div>
          <h1>Glaxio</h1>
        </div>

        <!-- Glaxy agency introduction -->
        <div class="agency-into">
          <h1>Welcome to Glaxio UI Agency</h1>
          <p> This is a web based front end agency. Let`s build your personal project & your company interface for. </p>
          <br>
          <a class="pa btn btn-xox">Connect</a>
        </div>
      </div>
    </glaxy>

    <info></info>

    <br><br>
    <!-- Loading UI -->
    <div>
      <svg style="margin:auto;background:0 0;display:block;shape-rendering:auto" width="85" height="85"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="6.452" cy="60.623" r="3.42" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-0.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="0s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-0.5s" />
        </circle>
        <circle cx="6.452" cy="39.377" r="2.58" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-0.5s" />
        </circle>
        <circle cx="16.129" cy="68.155" r="3.18" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-0.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-0.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-0.7s" />
        </circle>
        <circle cx="16.129" cy="31.845" r="2.82" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-0.7s" />
        </circle>
        <circle cx="25.806" cy="69.363" r="2.94" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-0.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-0.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-0.9s" />
        </circle>
        <circle cx="25.806" cy="30.637" r="3.06" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-0.9s" />
        </circle>
        <circle cx="35.484" cy="65.367" r="2.7" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-0.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-1.1s" />
        </circle>
        <circle cx="35.484" cy="34.633" r="3.3" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-2.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-1.1s" />
        </circle>
        <circle cx="45.161" cy="53.847" r="2.46" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-0.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-1.3s" />
        </circle>
        <circle cx="45.161" cy="46.153" r="3.54" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-2.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-1.3s" />
        </circle>
        <circle cx="54.839" cy="39.377" r="2.58" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-1.5s" />
        </circle>
        <circle cx="54.839" cy="60.623" r="3.42" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-2.5s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-1.5s" />
        </circle>
        <circle cx="64.516" cy="31.845" r="2.82" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-1.7s" />
        </circle>
        <circle cx="64.516" cy="68.155" r="3.18" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-2.7s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-2.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-1.7s" />
        </circle>
        <circle cx="74.194" cy="30.637" r="3.06" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-1.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-1.9s" />
        </circle>
        <circle cx="74.194" cy="69.363" r="2.94" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-2.9s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-2.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-1.9s" />
        </circle>
        <circle cx="83.871" cy="34.633" r="3.3" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-2.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-2.1s" />
        </circle>
        <circle cx="83.871" cy="65.367" r="2.7" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-3.1s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-2.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-2.1s" />
        </circle>
        <circle cx="93.548" cy="46.153" r="3.54" fill="rgba(233, 12, 89, 0.5125806451612902)">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-2.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-1.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1"
            values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)" dur="2s"
            repeatCount="indefinite" begin="-2.3s" />
        </circle>
        <circle cx="93.548" cy="53.847" r="2.46" fill="#46dff0">
          <animate attributeName="r" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s"
            repeatCount="indefinite" begin="-3.3s" />
          <animate attributeName="cy" keyTimes="0;0.5;1" values="30.5;69.5;30.5" dur="2s" repeatCount="indefinite"
            begin="-2.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline" />
          <animate attributeName="fill" keyTimes="0;0.5;1" values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
            dur="2s" repeatCount="indefinite" begin="-2.3s" />
        </circle>
      </svg>
    </div>

    <!-- Project text -->
    <div class="text-out">
      <h2>Some UI project</h2>
      <span style="color: #9DAEF6;">Heire is my some small <i>UI</i> <b>front-end</b> <s>project</s></span>
    </div>

    <!-- Project List -->
    <div @wheel="slide" ref="spin" class="scroll-container">
      <div class="scroll flex">
        <div v-for="item in project" :key="item.link">
          <project :pro="item">
            <div class="bg-imge pen">
              <img :src="item.img" :alt="item.img">
            </div>
          </project>
        </div>
      </div>
    </div>


    <br><br><br><br><br>

    <!-- Fotter -->
    <fotter></fotter>
  </div>

  <router-view></router-view>


</template>

<script>
import fan from "./view/Fan.vue";
import { RouterLink, RouterView } from "vue-router";

import glaxy from "./components/Glaxy.vue";
import info from "./components/Info.vue";
import project from "./components/ProjectList.vue";
import fotter from "./components/Fotter.vue";

export default {

  data() {
    return {
      dark: true,
      header: false,
      position: 0,
      home: false,
      load: true,
      name: "App",
      osx: "",
      project: [
        { text: "Spinner UI", info: "Controll spinner spreed", link: "/fan", img: "https://github.com/xoxuee/glaxio/blob/master/src/img/Spiner.jpg" },
        { text: "Bot chat.", info: "Replay same message..", link: "/chat", img: "https://github.com/xoxuee/glaxio/blob/master/src/img/BotChat.jpg" },
        { text: "Thinking..", info: "soon. Insha'Allah", link: "/", img: "./img/UI.png" }
      ]
    };
  },

  watch: {
    $route: function () {
      if (this.$route.path !== "/") {
        this.home = true;
      } else {
        this.home = false;
      }
    },
  },


  mounted: function () {
    this.timer = setInterval(() => {
      this.load = false
    }, 2000)

    {
      var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (/Linux/.test(platform)) {
        os = 'Linux';
      }

      this.osx = os;
    }
  },

  beforeDestroy() {
    clearInterval(this.timer)
  },

  components: {
    glaxy, info, project,
    RouterLink, fotter,
    RouterView, fan
  },

  methods: {
    slide(event) {
      event.preventDefault();
      const race = 35;
      if (event.deltaY > 0) {
        this.$refs.spin.scrollLeft += race;
      } else {
        this.$refs.spin.scrollLeft -= race;
      }

    },
  }
};

</script>
<style>
.show {
  height: 0px;
  transition: all .3s ease-in-out;
  overflow: hidden;
}

/* Load container */
.load {
  top: 0%;
  width: 100%;
  height: 100%;
  color: #fff;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: #02000e;
  flex-direction: column;
  z-index: 9999999999999999999;
}

.item {
  margin: 0 39px;
  margin-left: 30px !important;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
}

/* Display none class */
.none {
  display: none;
}

/* None class child app icon style */
.none .app-icon {
  width: 50px;
  height: 50px;
  margin-left: 4px;
  padding: 10px 20px;
}

/* Padding class */
.pa {
  width: 170px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

/* Top nave bar active class when scroll */
.sudo {
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  padding: 5px 10px;
  align-items: center;
  justify-content: left;
  z-index: 999999999;
  display: flex !important;
  display: -o-flex !important;
  display: -moz-flex !important;
  display: -webkit-flex !important;
  color: #fff !important;
  backdrop-filter: blur(15px);
  -o-backdrop-filter: blur(15px);
  -moz-backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.219);
  -webkit-backdrop-filter: blur(15px);
}

/* Agent Container */
.agency-container {
  top: 150px;
  left: 90px;
  position: absolute;
  animation: left 0.8s forwards;
  -moz-animation: left 0.8s forwards;
  -o-animation: left 0.8s forwards;
  -webkit-animation: left 0.8s forwards;
  transform-origin: -98px -50px 30px;
  -o-transform-origin: -98px -50px 30px;
  -moz-transform-origin: -98px -50px 30px;
  -webkit-transform-origin: -98px -50px 30px;
  animation-delay: 2s;
  -o-animation-delay: 2s;
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
  -o-transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
  -moz-transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
  -webkit-transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
}

/* Agency logo */
.agency-logo {
  left: 0;
  width: 200px;
}

/* Agency app icon container */
.app-icon {
  width: 80px;
  height: 80px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}

/* Agency app icon image */
.app-icon img {
  width: 100%;
  user-select: none;
  -webkit-user-drag: none;
}

/* when device screen < 768px then work acency all css style */
@media only screen and (max-width: 768px) {

  .agency-container {
    left: 0;
    bottom: 20%;
    width: 90%;
    padding: 25px;
    display: flex;
    display: -o-flex;
    display: -moz-flex;
    display: -webkit-flex;
    top: 10% !important;
    flex-direction: column;
    text-align: center;
    align-items: center !important;
    justify-content: center !important;
  }

  .agency-logo {
    flex-direction: column;
  }

  .agency-into {
    margin-left: 0px !important;
  }

  .agency-into h1 {
    background: -webkit-linear-gradient(310deg, #ea00ff 0%, #3e01af 69%);
    -webkit-text-fill-color: transparent;
    -o-background-clip: text;
    -o-text-fill-color: transparent;
    -o-background-clip: text;
    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
    background-clip: text;
  }

}


/* Animation for agency information */
.anm {
  animation: anm 0.4s forwards;
  animation-delay: 3s;
  transform-origin: -918px -192px 0px;
  transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
  -o-animation: anm 0.4s forwards;
  -o-animation-delay: 3s;
  -o-transform-origin: -918px -192px 0px;
  -o-transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
  -moz-animation: anm 0.4s forwards;
  -moz-animation-delay: 3s;
  -moz-transform-origin: -918px -192px 0px;
  -moz-transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
  -webkit-animation: anm 0.4s forwards;
  -webkit-animation-delay: 3s;
  -webkit-transform-origin: -918px -192px 0px;
  -webkit-transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
}

@keyframes anm {
  0% {
    transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
  }

  100% {
    z-index: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

@-moz-keyframes anm {
  0% {
    -moz-transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
  }

  100% {
    z-index: 1;
    -moz-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

@-o-keyframes anm {
  0% {
    -o-transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
  }

  100% {
    z-index: 1;
    -o-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

@-webkit-keyframes anm {
  0% {
    -webkit-transform: matrix3d(-0.535304, -0.072439, 0, -0.000709, -0.713289, -0.356668, 0, -0.003051, 0, 0, 1, 0, 604.717397, 111.336175, 0, 1);
  }

  100% {
    z-index: 1;
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}


@keyframes left {
  0% {
    filter: blur(20px);
    transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  100% {
    top: 150px;
    z-index: 1;
    filter: blur(0);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

@-o-keyframes left {
  0% {
    -o-filter: blur(20px);
    -o-transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  100% {
    top: 150px;
    z-index: 1;
    -o-filter: blur(0);
    -o-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

@-moz-keyframes left {
  0% {
    -moz-filter: blur(20px);
    -moz-transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  100% {
    top: 150px;
    z-index: 1;
    -moz-filter: blur(0);
    -moz-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

@-webkit-keyframes left {
  0% {
    -webkit-filter: blur(20px);
    -webkit-transform: matrix3d(1.4572649572649572, 0, 0, 0.0007122507122507122, 20.408922415828492, 14.732268498843084, 0, 0.06481678235821882, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  100% {
    top: 150px;
    z-index: 1;
    -webkit-filter: blur(0);
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

.agency-into {
  margin-top: 20px;
  margin-left: 60px;
}

.agency-into p {
  margin: 6px 0;
  width: 100%;
  max-width: 400px;
}
</style>
