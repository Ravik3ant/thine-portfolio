<template>
    <section>
        <div class="section-inner">
            <div class="section-label">{{ label }}</div>
            <div class="section-body reveal">
                <div class="direct-wrap">
                    <h3 class="direct-heading" v-html="heading" />
                    <div class="trait-list">
                        <div
                            v-for="(trait, i) in traits"
                            :key="i"
                            class="trait-row"
                        >
                            <div class="trait-left">
                                <span class="trait-number">0{{ i + 1 }}</span>
                                <h4 class="trait-title">{{ trait.title }}</h4>
                            </div>
                            <p class="trait-desc">{{ trait.desc }}</p>
                        </div>
                    </div>
                    <div class="direct-closer">
                        <p
                            v-for="(line, i) in closerLines"
                            :key="i"
                            :class="[
                                'closer-line',
                                {
                                    'closer-accent':
                                        i === closerLines.length - 1,
                                },
                            ]"
                        >
                            {{ line }}
                        </p>
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
        heading?: string;
        traits?: { title: string; desc: string }[];
        closerLines?: string[];
    }>(),
    {
        label: "§ If You Hire Me",
        heading: "What happens if <em>you hire me.</em>",
        traits: () => [
            {
                title: "I ship, not just plan.",
                desc: "I build the experiment, push it live, measure it, and iterate — without waiting on a full engineering cycle or a project manager to move.",
            },
            {
                title: "I connect technical work to business outcomes.",
                desc: 'I know what I built and why it matters to the metric. Not just "I implemented debouncing" — but "I cut API load so the filter UX stopped bleeding users."',
            },
            {
                title: "Growth  I focus on what moves the number this week.",
                desc: "Not the roadmap, not the backlog, not what looks impressive. The smallest change with the highest leverage. That's the only question I optimise for.",
            },
        ],
        closerLines: () => [
            "If you want someone to learn slowly, I am not your candidate.",
            "If you want someone to run experiments quickly, we should talk.",
        ],
    },
);
</script>

<style scoped>
.direct-wrap {
    display: flex;
    flex-direction: column;
    gap: 36px;
    max-width: 1fr;
}

.direct-heading {
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.08;
    color: var(--ink);
}

.direct-heading :deep(em) {
    font-style: italic;
    font-family: "Playfair Display", Georgia, serif;
    font-weight: 400;
    color: var(--rust);
}

.trait-list {
    display: flex;
    flex-direction: column;
}

.trait-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 30px 0;
    border-bottom: 1px solid var(--border);
    transition: padding-left 0.25s;
}

.trait-row:first-child {
    border-top: 1px solid var(--border);
}

.trait-row:hover {
    padding-left: 12px;
}

.trait-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.trait-number {
    font-family: "DM Mono", monospace;
    font-size: 1rem;
    letter-spacing: 0.2em;
    color: var(--acid);
    font-weight: 800;
}

.trait-title {
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.2;
    color: var(--ink);
}

.trait-desc {
    font-family: "DM Mono", monospace;
    font-size: 0.85rem;
    line-height: 1.85;
    color: var(--mist);
    margin-left: 40px;
}

.direct-closer {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 680px;
}

.closer-line {
    font-family: "DM Mono", monospace;
    font-size: 0.92rem;
    line-height: 1.9;
    color: var(--mist);
    transition: color 0.4s;
}

.closer-accent {
    color: var(--ink);
    font-weight: 700;
    font-family: "Syne", sans-serif;
    font-size: 1rem;
    margin-top: 4px;
}

@media (max-width: 768px) {
    .trait-row {
        grid-template-columns: 1fr;
        gap: 12px;
    }
}
</style>
