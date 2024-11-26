<template>
    <main>
      <div class="container overlay" id="container">
          <div class="overlay-panel">
              <h1>Error!</h1>
              <p>Please check with the administrator or make some rectifications in the code</p>
              <a href="https://docs.unified.to/overview/intro"><button>Documentation</button></a>
          </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'FailureView'
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
  
  h1 {
      font-weight: bold;
      margin: 0;
  }
  
  p {
      font-size: 14px;
      font-weight: 100;
      line-height: 20px;
      letter-spacing: 0.5px;
      margin: 20px 0 30px;
  }
  
  button {
      border-radius: 20px;
      border: 1px solid white;
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
      flex-direction: column;
      text-align: center;
  }
  
  .overlay {
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
  