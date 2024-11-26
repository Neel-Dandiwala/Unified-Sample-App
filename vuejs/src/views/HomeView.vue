<template>
  <main>
    <div class="container" id="container">
      <div class="sign-in-container">
        <h1>Sign in using our Integrations</h1>
        <span>Integration using API Key</span>
        <FifteenFive />
        <span>Integration using Auth</span>
        <Discord />
        <p>Explore our documentation for more!</p>
        <a href="https://docs.unified.to/overview/intro"><button>Read</button></a>
      </div>
      <div class="overlay-container">
        <div class="overlay-panel">
          <img src="../assets/unified_mascot.svg" alt="Logo" class="unified-logo" />
          <h1>Unified API Inc.</h1>
          <p>One API to integrate them all</p>
          <a href="https://unified.to/"><button class="ghost">Visit</button></a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FifteenFive from '../components/FifteenFive.vue'
import Discord from '../components/Discord.vue'
export default {
  name: 'HomeView',
  components: {
    FifteenFive,
    Discord
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
    box-sizing: border-box;
}

main {
    display: flex;
    place-items: center;
    place-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.unified-logo {
    padding: 2px;
    height: 60px;
    width: 60px;
}

h1 {
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 1rem;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 0 0 30px;
}

span {
    font-size: 12px;
}

button {
    border-radius: 20px;
    border: 1px solid #2a2a56;
    background-color: #2a2a56;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #FFFFFF;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 50%;
    max-width: 100%;
    height: 75%;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sign-in-container {
    gap: 0.5rem;
}

.sign-in-container,
.overlay-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    height: 100%;
    text-align: center;
}

.overlay-container {
    overflow: hidden;
    background: #191c36;
    background: -webkit-linear-gradient(to right, #2a2a56, #191c36);
    background: linear-gradient(to right, #2a2a56, #191c36);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
}

.overlay-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
    text-align: center;
    width: 100%;
}
</style>
