<template>
    <div class="hero">
        <div class="hero-left">
            <span class="stamp" v-html="stampLeft" />
            <h1 class="hero-headline" v-html="headlineLeft" />
            <p class="hero-foot" v-html="subLeft" />
        </div>
        <div class="hero-right">
            <span class="stamp" v-html="stampRight" />
            <h1 class="hero-headline" v-html="headlineRight" />
            <p class="hero-sub" v-html="subRight" />
        </div>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        stampLeft?: string;
        headlineLeft?: string;
        subLeft?: string;
        stampRight?: string;
        headlineRight?: string;
        subRight?: string;
    }>(),
    {
        stampLeft: "Thine Internship Application",
        headlineLeft: "Hi Thine,<br>I am <em>Ravikant</em><br>from BITS.",
        subLeft:
            "M.Sc. Physics + B.E. EEE, BITS Hyderabad (2024-2029).<br>I enjoy product, growth, and AI execution.",
        stampRight: "Growth + AI + Product",
        headlineRight: "I want to<br><em>earn</em> this<br>role.",
        subRight:
            "I am applying for an internship/full-time opportunity where I can contribute to GTM, product experiments, and AI-driven workflows from day one.",
    },
);
</script>

<style scoped>
.hero {
    min-height: 97vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 2px solid var(--border);
}

.hero-left {
    padding: 60px 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 2px solid var(--border);
    transition: background color 0.6s;
}

.hero-right {
    padding: 60px 56px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: var(--hero-right-bg);
    color: var(--hero-right-text);
    transition: background color 0.6s;
}

.stamp {
    display: inline-block;
    font-family: "DM Mono", monospace;
    font-size: 0.67rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    border: 1.5px solid var(--ink);
    color: var(--ink);
    padding: 6px 12px;
    width: fit-content;
    opacity: 0;
    animation: fadeUp 0.6s 0.2s forwards;
    transition:
        border-color 0.4s,
        color 0.4s;
}

.hero-right .stamp {
    border-color: var(--hero-right-stamp);
    color: var(--hero-right-stamp-text);
}

.hero-headline {
    font-size: clamp(3rem, 6vw, 5.8rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.03em;
    opacity: 0;
    animation: fadeUp 0.7s 0.4s forwards;
}

.hero-left .hero-headline :deep(em) {
    font-style: italic;
    font-family: "Playfair Display", Georgia, serif;
    font-weight: 400;
    color: var(--accent-light-bg);
}

.hero-right .hero-headline :deep(em) {
    font-style: italic;
    font-family: "Playfair Display", Georgia, serif;
    font-weight: 400;
    color: var(--accent-light-bg);
}

.hero-right .hero-headline {
    color: var(--hero-right-accent);
}

.hero-foot {
    font-family: "DM Mono", monospace;
    font-size: 0.76rem;
    color: var(--mist);
    letter-spacing: 0.05em;
    line-height: 1.7;
    opacity: 0;
    animation: fadeUp 0.7s 0.9s forwards;
}

.hero-sub {
    font-family: "DM Mono", monospace;
    font-size: 0.83rem;
    line-height: 1.8;
    color: var(--hero-right-muted);
    max-width: 380px;
    opacity: 0;
    animation: fadeUp 0.7s 0.7s forwards;
}

.hero-sub :deep(strong) {
    color: var(--hero-right-text);
    font-weight: 400;
}

@media (max-width: 768px) {
    .hero {
        grid-template-columns: 1fr;
    }
    .hero-left {
        border-right: none;
        border-bottom: 2px solid var(--border);
    }
}
</style>
