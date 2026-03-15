<template>
    <button class="theme-toggle" @click="toggle">{{ label }}</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const label = ref("◐ Theme");
let current = "dark";
let userHasChosen = false;

function applyTheme(theme: string) {
    current = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    label.value = theme === "dark" ? "○ Light" : "◑ Dark";
}

function toggle() {
    userHasChosen = true;
    applyTheme(current === "dark" ? "light" : "dark");
}

onMounted(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
        userHasChosen = true;
        applyTheme(stored);
    } else {
        const sys = window.matchMedia("(prefers-color-scheme: dark)");
        applyTheme(sys.matches ? "dark" : "light");

        sys.addEventListener("change", (e: MediaQueryListEvent) => {
            if (!userHasChosen) {
                applyTheme(e.matches ? "dark" : "light");
            }
        });
    }
});
</script>

<style scoped>
.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 500;
    background: var(--ink);
    color: var(--paper);
    border: none;
    font-family: "DM Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 8px 14px;
    cursor: none;
    transition:
        background 0.3s,
        color 0.3s;
}
.theme-toggle:hover {
    background: var(--rust);
}

@media (max-width: 768px) {
    .theme-toggle {
        top: 12px;
        right: 12px;
        cursor: auto;
    }
}
</style>
