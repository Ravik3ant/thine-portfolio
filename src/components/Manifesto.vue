<template>
    <section>
        <div class="section-inner">
            <div class="section-label">{{ label }}</div>
            <div class="section-body reveal">
                <div class="manifesto-lines">
                    <div
                        v-for="(line, i) in lines"
                        :key="i"
                        class="manifesto-line"
                    >
                        <p class="manifesto-text" v-html="line.text" />
                        <p v-if="line.aside" class="quiet">{{ line.aside }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        label?: string;
        lines?: { text: string; aside?: string }[];
    }>(),
    {
        label: "§ About Me",
        lines: () => [
            {
                text: "I am a student builder who likes hard problems and fast iteration.",
                aside: "[ I learn quickly and enjoy ownership ]",
            },
            {
                text: "My work spans AI implementation, frontend optimization, GTM analysis, and product strategy.",
                aside: "[ technical + business context in one loop ]",
            },
            {
                text: "I am applying because Thine sits at the intersection of personal intelligence, user behavior, and growth.",
                aside: "[ this is exactly the environment I want to grow in ]",
            },
        ],
    },
);
</script>

<style scoped>
.manifesto-lines {
    display: flex;
    flex-direction: column;
    gap: 28px;
    max-width: 100%;
}

.manifesto-line {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.manifesto-line:hover .manifesto-text {
    color: var(--mist);
    transition: color 0.3s ease;
}

.manifesto-text {
    font-size: clamp(1.4rem, 2.5vw, 2.3rem);
    font-weight: 700;
    line-height: 1.35;
    color: var(--ink);
}

.manifesto-text :deep(em) {
    font-style: italic;
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 400;
    color: var(--rust);
}

.quiet {
    color: var(--mist);
    font-size: 0.92rem;
    font-family: "DM Mono", monospace;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.04em;
    line-height: 1.6;
}
</style>
