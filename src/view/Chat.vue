<template>
    <back />
    <div>
        <!-- Chat app container -->
        <div class="chat-container">

            <!-- Chat body -->
            <div ref="chat" class="chat-body">


                <div v-for="(mgs, i) in mgs" :key="i">
                    <!-- sender message -->
                    <div class="message-me flex">
                        <div class="user flex">
                            <div class="flex">
                                <i><s><b>Y</b></s></i>
                            </div>
                            <h2>You</h2>
                        </div>
                        <div class="message">
                            <span>{{ mgs }}</span>
                        </div>
                    </div>

                    <!-- Bot message -->
                    <div class="message-bot flex">
                        <div class="user flex">
                            <div class="flex">
                                <i><s><b>B</b></s></i>
                            </div>
                            <h2>Bot</h2>
                        </div>
                        <span class="message">
                            <span>{{ mgs }}</span>
                        </span>
                    </div>
                </div>


                <div class="scroll-poin"></div>
                <div class="message-send flex">
                    <div class="mgs-input flex">
                        <input ref="mgs" @keypress="message" placeholder="Message">
                    </div>
                    <div @click="sentmgs" class="send-button flex">
                        <svg width="100%" viewBox="0 0 384 512">
                            <path fill="#19f"
                                d="M361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87 48.019 48.019 0 0 1 48.51.91L361 215z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import back from "../components/back.vue";
export default {
    data() {
        return {
            mgs: [],
            intervalid: ''
        }
    },
    components: {
        back
    },
    methods: {
        message(e) {
            if (e.key === "Enter") {
                if (e.target.value.length > 1) {
                    this.mgs.push(e.target.value)
                    e.target.value = "";

                    this.$refs.chat.scrollTo({
                        top: document.querySelector(".chat-body").scrollHeight,
                        behavior: 'smooth'
                    })

                }
            }
        },
        sentmgs() {
            var val = this.$refs.mgs.value;
            if (val.length > 1) {
                this.mgs.push(val)
                this.$refs.mgs.value = "";
                this.$refs.chat.scrollTo({
                    top: document.querySelector(".chat-body").scrollHeight,
                    behavior: 'smooth'
                })

            }
        }
    },
}
</script>
<style scoped>
.chat-body {
    width: 100%;
    height: 90vh;
    overflow: scroll;
    overflow-x: hidden;
    padding-top: 50px;
    font-family: sans-serif;
    background: url("../img/bg.png");
}

.scroll-poin {
    height: 300px;
    background: transparent;
    pointer-events: none;
}

.chat-body .message-send {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    position: fixed;
    padding: 10px 20px;
    align-items: center;
    justify-content: flex-end;
    background: #18181f;
}

.chat-body .message-send .send-button {
    width: 20px;
    height: 20px;
    padding-left: 30px;
    padding-right: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
}

.chat-body .message-send .mgs-input {
    width: 90%;
    min-width: 200px;
    max-width: 600px;
}

.chat-body .message-send .mgs-input input {
    width: 100%;
    height: 20px;
    font-size: 1.1rem;
    padding: 10px 20px;
    min-width: 200px;
    max-width: 500px;
    border-radius: 25px;
    font-family: sans-serif;
}

.message-bot {
    margin-left: 20px;
    align-items: flex-start;
    flex-direction: column;
}

.chat-body .user {
    padding: 5px;
    align-items: center;
}

.chat-body .user div {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: rgba(26, 26, 27, 0.685);
    backdrop-filter: blur(15px);
    margin-right: 10px;
}

.chat-body .message-me h3 {
    background: #05257e;
}

.chat-body .message {
    max-width: 400px;
    padding: 15px 20px;
    margin-left: 50px;
    border-radius: 8px;
    text-align: left;
    background: rgb(18, 20, 32);
}

.chat-body .message-me .message {
    margin-left: 0;
    margin-right: 30px;
    background: #0031b6;
}

.message-me .user {
    flex-direction: row-reverse;
    justify-content: flex-end;
}

.message-me .user div {
    margin: 0;
}

.message-me .user h2 {
    margin-right: 10px;
}

.message-me {
    margin-right: 20px;
    flex-direction: column;
    align-items: self-end;
}
</style>