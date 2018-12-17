<template>
  <div class="thanks">
    <div class="container">
      <div class="logo">
        <h1 class="text-center pt-5">Dungeons & Dragons</h1>
      </div>
      <div class="thanks-message text-center">
        <h1 class="title mb-4">Thank You!</h1>
        <h2 class="subtitle mb-5">Your message was a success. We look forward to speaking with you further.</h2>
        <router-link to="/" class="continue btn">Continue</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $primary: #9D0A0E;
  $secondary: #E6E6DB;
  $white: #fff;
  $black: #000;
  $grey: #CACACA;

  .thanks {
    width: 100%;
    height: 100vh;
    background: $primary;
    color: $white;
  }

  .thanks-message {
    padding: 100px 0;
  }

  .subtitle {
    font-weight: 200;
  }

  .continue {
    text-decoration: none;
    padding: 10px 20px;
    border: 1px solid $white;
    border-radius: 50px;
    color: $white;
    font-size: 1.5rem;

    &:hover {
      background: $black;
      border: 1px solid $black;
    }
  }
</style>

