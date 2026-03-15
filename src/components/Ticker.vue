<template>
    <div class="ticker-outer">
        <div class="ticker-wrap">
            <span class="ticker-track" v-html="track" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
    defineProps<{
        items?: string[];
    }>(),
    {
        items: () => [
            "M.Sc. Physics + B.E. EEE @ BITS Hyderabad",
            "AI Engineer @ Made For Planet",
            "Market Consultant @ Livo",
            "Team Lead @ 180DC",
            "Execution > Claims",
        ],
    },
);

const track = computed(() => {
    const doubled = [...props.items, ...props.items];
    return doubled.join(" &nbsp;·&nbsp; ") + " &nbsp;·&nbsp; ";
});
</script>

<style scoped>
.ticker-outer {
    position: relative;
    z-index: 10;
    overflow: visible;
}

.ticker-wrap {
    background: var(--ink);
    color: var(--ticker);
    overflow: hidden;
    padding: 16px 0;
    border-top: 2px solid var(--ticker);
    border-bottom: 2px solid var(--ticker);
    white-space: nowrap;
    transition: background 0.4s;
    transform: translateY(-20px) rotate(-1.5deg) scale(1.04);
    transform-origin: center center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.ticker-track {
    display: inline-block;
    animation: ticker 28s linear infinite;
    font-family: "DM Mono", monospace;
    font-size: 0.92rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: bolder;
}

@keyframes ticker {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
</style>
