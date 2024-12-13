<template>
  <div class="backdrop" @click="$emit('close')"></div>
  <dialog open>
    <slot></slot>
  </dialog>
</template>


<script>
export default {
  name: "BaseModal",
  emits: ['close'],
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 12vh;
  width: 85rem;
  height: 36rem;
  left: calc(7% - 3.7rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  padding: 1rem;
  background-color: #282E3BC7;
  color: white;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 990px) {
  dialog {
    height: 20rem;
    top: 18vh;
    left: calc(50% - 17rem);
    padding: 2rem;
  }
}



@media (max-width: 550px){
  dialog {
    top: 0;
    width: 35rem;
    height: 100%;
    padding: 0.5rem;
    overflow-y: scroll;
  }
}
</style>