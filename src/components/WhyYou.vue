<template>
    <section>
        <div class="section-inner">
            <div class="section-label">{{ label }}</div>
            <div class="section-body" style="padding: 0">
                <div class="why-grid reveal">
                    <div v-for="(item, i) in items" :key="i" class="why-item">
                        <div class="why-number">{{ item.number }}</div>
                        <div class="why-title">{{ item.title }}</div>
                        <div class="why-desc">{{ item.desc }}</div>
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
        items?: { number: string; title: string; desc: string }[];
    }>(),
    {
        label: "§ Why Thine",
        items: () => [
            {
                number: "01 —",
                title: "Thine is solving a problem most tools ignore.",
                desc: "Most productivity tools track what you did. Thine is building something that understands who you are. That distinction requires product thinking, not just feature shipping, and that's the mode I work in.",
            },
            {
                number: "02 —",
                title: "I can bridge technical implementation and GTM execution.",
                desc: "I've built the backend, fixed the frontend, and written the GTM strategy, sometimes in the same week. I don't need handoffs to move.",
            },
            {
                number: "03 —",
                title: "I find the edge cases, not just the happy path.",
                desc: "At Livo, there was no brief, just a problem. We ran the research, found the gaps competitors missed, and built the strategy from scratch. That's the mode I work best in.",
            },
            {
                number: "04 —",
                title: "I care about doing real work, not just applying.",
                desc: "I didn't apply to 40 companies and hope. I spent time understanding what Thine actually needs, then built something that shows it. That's the only kind of application I know how to make.",
            },
        ],
    },
);
</script>

<style scoped>
.why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.why-item {
    padding: 48px 52px;
    border-right: 2px solid var(--border);
    border-bottom: 2px solid var(--border);
    transition:
        background 0.3s,
        color 0.3s;
}

.why-item:nth-child(even) {
    border-right: none;
}
.why-item:nth-last-child(-n + 2) {
    border-bottom: none;
}

.why-item:hover {
    background: var(--card-hover-bg);
    color: var(--card-hover-color);
}
.why-item:hover .why-title {
    color: var(--card-hover-color);
}
.why-item:hover .why-number {
    color: var(--acid);
}
.why-item:hover .why-desc {
    color: rgba(255, 255, 255, 0.65);
}

:global([data-theme="dark"]) .why-item:hover .why-desc {
    color: rgba(240, 235, 226, 0.6);
}

.why-number {
    font-family: "DM Mono", monospace;
    font-size: 0.72rem;
    color: var(--mist);
    letter-spacing: 0.2em;
    margin-bottom: 16px;
    transition: color 0.3s;
}

.why-title {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 14px;
    color: var(--ink);
    transition: color 0.3s;
}

.why-desc {
    font-family: "DM Mono", monospace;
    font-size: 0.88rem;
    line-height: 1.8;
    color: var(--mist);
    transition: color 0.3s;
}

@media (max-width: 768px) {
    .why-grid {
        grid-template-columns: 1fr;
    }
    .why-item {
        border-right: none !important;
    }
}
</style>
