<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  display:flex;
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem auto;
  margin-top: 6rem;
  max-width: 50rem;
  height: auto;
  color: white;
  background-color: rgb(0, 0, 0, 0.5);
  border: 1px solid black;
 box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
} 
</style>
