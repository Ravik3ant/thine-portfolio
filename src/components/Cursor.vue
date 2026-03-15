<template>
  <div
    class="cursor"
    :class="{ grow: isGrown }"
    :style="{ left: x + 'px', top: y + 'px' }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(0);
const y = ref(0);
const isGrown = ref(false);

function onMouseMove(e: MouseEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
}

function onMouseEnter() { isGrown.value = true; }
function onMouseLeave() { isGrown.value = false; }

let interactiveEls: Element[] = [];

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove);
  interactiveEls = Array.from(
    document.querySelectorAll('a, .why-item, .proof-item, button')
  );
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
  });
});

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove);
  interactiveEls.forEach(el => {
    el.removeEventListener('mouseenter', onMouseEnter);
    el.removeEventListener('mouseleave', onMouseLeave);
  });
});
</script>

<style scoped>
.cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: var(--rust);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background 0.2s;
  mix-blend-mode: difference;
}
.cursor.grow { width: 36px; height: 36px; }
</style>
