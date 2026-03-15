<template>
    <div class="cta-section reveal">
        <div>
            <h2 class="cta-headline" v-html="headlineHtml" />
        </div>
        <div class="cta-stack">
            <a
                v-for="(link, i) in links"
                :key="i"
                :href="link.href"
                class="cta-link"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
            >
                {{ link.label }}
            </a>
            <p class="cta-note">{{ note }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        headlineHtml?: string;
        links?: { label: string; href: string; external?: boolean }[];
        note?: string;
    }>(),
    {
        headlineHtml:
            "TI don't interview well. I ship well.<em>Let's find out.</em>",
        links: () => [
            {
                label: "ravik3ant@gmail.com",
                href: "mailto:ravik3ant@gmail.com",
            },
            {
                label: "GitHub · Ravik3ant",
                href: "https://github.com/Ravik3ant",
                external: true,
            },
            {
                label: "Resume",
                href: "/ravikant_14March.pdf",
                external: true,
            },
        ],
        note: "Open to internship and early-career roles across Growth, Product, and AI execution.",
    },
);
</script>

<style scoped>
.cta-section {
    background: var(--ink);
    color: var(--paper);
    padding: 80px 56px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 48px;
    transition: background 0.4s;
}

.cta-headline {
    font-size: clamp(2.6rem, 5vw, 4.8rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
}

.cta-headline :deep(em) {
    font-style: italic;
    font-family: "Playfair Display", Georgia, serif;
    font-weight: 400;
    color: var(--acid);
}

.cta-stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-end;
}

.cta-link {
    font-family: "DM Mono", monospace;
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--paper);
    text-decoration: none;
    border-bottom: 1px solid var(--paper);
    padding-bottom: 3px;
    transition:
        color 0.2s,
        border-color 0.2s;
    font-weight: 800;
}

.cta-link:hover {
    color: var(--acid);
    border-color: var(--acid);
}

.cta-note {
    font-family: "DM Mono", monospace;
    font-size: 0.68rem;
    color: var(--paper);
    max-width: 280px;
    text-align: right;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .cta-section {
        grid-template-columns: 1fr;
        padding: 48px 24px;
    }
    .cta-stack {
        align-items: flex-start;
    }
    .cta-note {
        text-align: left;
    }
}
</style>
