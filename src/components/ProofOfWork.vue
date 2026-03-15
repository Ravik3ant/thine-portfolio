<template>
    <section>
        <div class="section-inner">
            <div class="section-label">{{ label }}</div>
            <div class="section-body reveal">
                <!-- Professional items -->
                <ul class="proof-list">
                    <li
                        v-for="item in professionalItems"
                        :key="item.number"
                        :class="[
                            'proof-item',
                            {
                                'is-open':
                                    revealedSteps[originalIndex(item)] > 0,
                            },
                        ]"
                        @click="advance(originalIndex(item))"
                        @mouseenter="hoveredIndex = originalIndex(item)"
                        @mouseleave="hoveredIndex = null"
                    >
                        <span class="proof-number">{{ item.number }}</span>
                        <span class="proof-text">
                            {{ item.text }}
                            <span v-if="item.note" class="proof-note">{{
                                item.note
                            }}</span>
                        </span>
                        <span class="proof-tag">{{ item.tag }}</span>

                        <div
                            v-if="item.brief"
                            :class="[
                                'proof-brief',
                                {
                                    'is-visible':
                                        hoveredIndex === originalIndex(item) &&
                                        !revealedSteps[originalIndex(item)],
                                },
                            ]"
                        >
                            <p>{{ item.brief }}</p>
                        </div>

                        <div
                            v-if="item.star"
                            :class="[
                                'star-container',
                                {
                                    'is-visible':
                                        visibleSteps(originalIndex(item)) > 0,
                                },
                            ]"
                        >
                            <div
                                v-for="(step, si) in starLabels"
                                :key="step.key"
                                :class="[
                                    'star-step',
                                    {
                                        'is-revealed':
                                            si <
                                            visibleSteps(originalIndex(item)),
                                    },
                                ]"
                            >
                                <span class="star-label">{{ step.label }}</span>
                                <span class="star-text">{{
                                    (item.star as any)[step.key]
                                }}</span>
                            </div>
                            <div class="star-hint">
                                <span
                                    v-if="visibleSteps(originalIndex(item)) < 4"
                                >
                                    {{ visibleSteps(originalIndex(item)) }}/4 —
                                    click for more
                                </span>
                                <span v-else class="star-hint-done">
                                    full story — click to collapse
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- Beyond Work cluster -->
                <div v-if="beyondWorkItems.length" class="beyond-work">
                    <div class="beyond-work-label">Beyond Work</div>
                    <ul class="proof-list">
                        <li
                            v-for="item in beyondWorkItems"
                            :key="item.number"
                            :class="[
                                'proof-item',
                                {
                                    'is-open':
                                        revealedSteps[originalIndex(item)] > 0,
                                },
                            ]"
                            @click="advance(originalIndex(item))"
                            @mouseenter="hoveredIndex = originalIndex(item)"
                            @mouseleave="hoveredIndex = null"
                        >
                            <span class="proof-number">{{ item.number }}</span>
                            <span class="proof-text">
                                {{ item.text }}
                                <span v-if="item.note" class="proof-note">{{
                                    item.note
                                }}</span>
                            </span>
                            <span class="proof-tag">{{ item.tag }}</span>

                            <div
                                v-if="item.brief"
                                :class="[
                                    'proof-brief',
                                    {
                                        'is-visible':
                                            hoveredIndex ===
                                                originalIndex(item) &&
                                            !revealedSteps[originalIndex(item)],
                                    },
                                ]"
                            >
                                <p>{{ item.brief }}</p>
                            </div>

                            <div
                                v-if="item.star"
                                :class="[
                                    'star-container',
                                    {
                                        'is-visible':
                                            visibleSteps(originalIndex(item)) >
                                            0,
                                    },
                                ]"
                            >
                                <div
                                    v-for="(step, si) in starLabels"
                                    :key="step.key"
                                    :class="[
                                        'star-step',
                                        {
                                            'is-revealed':
                                                si <
                                                visibleSteps(
                                                    originalIndex(item),
                                                ),
                                        },
                                    ]"
                                >
                                    <span class="star-label">{{
                                        step.label
                                    }}</span>
                                    <span class="star-text">{{
                                        (item.star as any)[step.key]
                                    }}</span>
                                </div>
                                <div class="star-hint">
                                    <span
                                        v-if="
                                            visibleSteps(originalIndex(item)) <
                                            4
                                        "
                                    >
                                        {{
                                            visibleSteps(originalIndex(item))
                                        }}/4 — click for more
                                    </span>
                                    <span v-else class="star-hint-done">
                                        full story — click to collapse
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

interface StarData {
    situation: string;
    task: string;
    action: string;
    result: string;
}

interface ProofItem {
    number: string;
    text: string;
    note?: string;
    tag: string;
    brief?: string;
    star?: StarData;
}

const props = withDefaults(
    defineProps<{
        label?: string;
        items?: ProofItem[];
    }>(),
    {
        label: "§ Past Work",
        items: () => [
            {
                number: "001",
                text: "Led backend integration of extended-thinking API for multi-step AI reasoning at Made For Planet.",
                note: "[ Jan 2026-present · AI Engineer & Group Lead ]",
                tag: "AI",
                brief: "Shipped a multi-step reasoning pipeline from architecture to production · Led a team of 6, on time. Live with real users.",
                star: {
                    situation:
                        "MFP's backend couldn't handle complex, multi-step user queries, responses were shallow and lost context across chained reasoning steps.",
                    task: "Design and ship a reasoning pipeline using extended-thinking APIs that could handle chained queries without losing context.",
                    action: "Architected the multi-step pipeline, integrated extended-thinking APIs, and led a team of 6 from system design through production deployment.",
                    result: "Pipeline is live and will serve real users. Complex queries now return accurate, context-aware responses. Delivered on time.",
                },
            },
            {
                number: "002",
                text: "Eliminated redundant API calls across MFP's frontend through debouncing and lazy loading.",
                note: "[ performance improvements across search and filter interfaces ]",
                tag: "Frontend",
                brief: "Fixed wasteful API call patterns firing on every keystroke · UI became visibly faster, backend load dropped.",
                star: {
                    situation:
                        "Search, filter, and form components were firing API calls on every keystroke, overloading the backend and making the UI feel sluggish.",
                    task: "Reduce unnecessary API traffic and improve frontend responsiveness without a full rewrite.",
                    action: "Audited call patterns across components, implemented input debouncing and lazy loading strategies at the interface layer.",
                    result: "Redundant API calls dropped significantly. The UI became noticeably snappier, visible to anyone who used it before and after.",
                },
            },
            {
                number: "003",
                text: "Architected soft-delete, archiving, and indexed query patterns to clean up MFP's database layer.",
                note: "[ reduced query complexity and improved data retrieval ]",
                tag: "Backend",
                brief: "Built data recovery and archival workflows from scratch · made the data layer built for scale from the start",
                star: {
                    situation:
                        "The database had no archival strategy, deleted data was gone permanently, and unindexed queries were causing slow retrievals as data grew.",
                    task: "Build soft-delete and archival workflows, and optimize query patterns to make the data layer scalable.",
                    action: "Designed soft-delete logic from scratch, implemented archiving pipelines, and introduced indexed query patterns by user name and ID.",
                    result: "Query complexity dropped, retrieval sped up, and the team gained the ability to recover deleted records, something they couldn't do before.",
                },
            },
            {
                number: "004",
                text: "Ran GTM research and product strategy for Livo · from 400-person survey to competitor teardown.",
                note: "[ Aug-Dec 2025 · Market Consultant & Designer ]",
                tag: "GTM",
                brief: "Validated a finance product direction through 400+ surveys, competitor analysis, and a full launch framework.",
                star: {
                    situation:
                        "Livo had a product idea for finance tracking but no validated direction, no user research, no competitive landscape, no go-to-market plan.",
                    task: "Validate the product direction through research and build a GTM framework from user insights to launch strategy.",
                    action: "Surveyed 400+ students and early professionals, ran a full competitor teardown, designed UI/UX mockups, and built a positioning and launch framework.",
                    result: "Delivered a validated product direction with clear positioning, a competitor map, and an actionable launch plan the team could execute against.",
                },
            },
            {
                number: "005",
                text: "Led consulting engagements at 180 Degrees Consulting across product strategy, AI, and user retention.",
                note: "[ Aug 2025-present · Consultant & Team Lead ]",
                tag: "Strategy",
                brief: "Delivered strategies real clients acted on · at least one client moved to implementation.",
                star: {
                    situation:
                        "Real clients needed actionable strategy across product, AI adoption, and retention — not slide decks that sit in a drive.",
                    task: "Lead cross-functional teams to deliver strategies that clients could actually execute on.",
                    action: "Managed consulting teams through product roadmap planning, AI adoption assessments, and retention diagnostics, ensuring every deliverable was grounded in data.",
                    result: "At least one client moved to implementation. Work consistently rated high on impact by both clients and the organization.",
                },
            },
            {
                number: "006",
                text: "Ran academic support for 1000+ freshmen across three semesters at BITS Hyderabad.",
                note: "[ Aug 2024-present · Core Member, ACC ]",
                tag: "Community",
                brief: "Three semesters of consistent, large-scale academic support that freshmen actually relied on.",
                star: {
                    situation:
                        "Incoming freshmen at BITS Hyderabad lacked structured academic support, and navigating core coursework in the first year was a known drop-off point.",
                    task: "Organize and run large-scale support sessions that actually help students survive their first year.",
                    action: "Coordinated sessions across three semesters covering core subjects, study strategies, and exam prep for 1000+ students.",
                    result: "Consistent execution at scale across three semesters. Sessions became a go-to resource that freshmen genuinely relied on.",
                },
            },
            {
                number: "007",
                text: "Coordinated Ignite — a 3-day campus event hosting 150 orphanage students across 25 events.",
                note: "[ Sem 1 · Volunteer, Nirmaan — BITS Hyderabad ]",
                tag: "Community",
                brief: "Managed volunteers, logistics, and student interaction for a 3-day, 25-event experience built for 200 kids from local orphanages.",
                star: {
                    situation:
                        "Ignite aimed to bring hundreds of students from local orphanages onto the BITS Hyderabad campus for a full multi-day experience, requiring tight coordination across clubs, volunteers, and logistics.",
                    task: "Ensure 200 visiting students had a safe, engaging, well-run experience across 25 events over 3 days.",
                    action: "Managed volunteer teams, coordinated event flow across 25+ activities run in collaboration with multiple campus clubs, handled logistics, and personally engaged with visiting students throughout.",
                    result: "200 orphanage students experienced a full 3-day campus event without a hitch, 25 events executed across multiple clubs with consistent volunteer coordination.",
                },
            },
        ],
    },
);

const starLabels = [
    { key: "situation", label: "S" },
    { key: "task", label: "T" },
    { key: "action", label: "A" },
    { key: "result", label: "R" },
] as const;

const revealedSteps = reactive<Record<number, number>>({});
const hoveredIndex = ref<number | null>(null);

function visibleSteps(index: number): number {
    return revealedSteps[index] ?? 0;
}

function advance(index: number) {
    const current = revealedSteps[index] ?? 0;
    if (current >= 4) {
        revealedSteps[index] = 0;
    } else {
        revealedSteps[index] = current + 1;
    }
}

const communityTags = new Set(["Community"]);

const professionalItems = computed(() =>
    props.items.filter((item) => !communityTags.has(item.tag)),
);
const beyondWorkItems = computed(() =>
    props.items.filter((item) => communityTags.has(item.tag)),
);

/** Map from original items-array index to the item, so click/hover state stays consistent */
function originalIndex(item: ProofItem): number {
    return props.items.indexOf(item);
}
</script>

<style scoped>
.proof-list {
    list-style: none;
}

.proof-item {
    display: grid;
    grid-template-columns: 50px 1fr auto;
    align-items: center;
    gap: 28px;
    padding: 26px 0;
    border-bottom: 1px solid var(--border);
    transition: padding-left 0.25s;
    cursor: pointer;
}

.proof-item:last-child {
    border-bottom: none;
}
.proof-item:hover {
    padding-left: 12px;
}

.proof-number {
    font-family: "DM Mono", monospace;
    font-size: 0.66rem;
    color: var(--mist);
    transition: color 0.3s;
}

.proof-text {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    color: var(--ink);
}

.proof-note {
    display: block;
    font-family: "DM Mono", monospace;
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--mist);
    margin-top: 4px;
}

.proof-tag {
    font-family: "DM Mono", monospace;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border: 1px solid var(--ink);
    color: var(--ink);
    padding: 4px 10px;
    white-space: nowrap;
    transition:
        border-color 0.4s,
        color 0.4s;
}

.proof-item:hover .proof-tag {
    border-color: var(--acid);
    color: var(--acid);
    transform: scale(1.05);
}

/* ── Opened indicator ── */
.proof-item.is-open .proof-number {
    color: var(--acid);
}

.proof-item.is-open .proof-tag {
    border-color: var(--acid);
    color: var(--acid);
    transform: scale(1.05);
}

/* ── Brief description (hover only) ── */
.proof-brief {
    grid-column: 2 / -1;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
        max-height 0.3s ease,
        opacity 0.25s ease,
        margin-top 0.3s ease;
    margin-top: 0;
}

.proof-brief.is-visible {
    max-height: 80px;
    opacity: 1;
    margin-top: 0px;
}

.proof-brief p {
    font-family: "Syne", sans-serif;
    font-size: 0.82rem;
    font-weight: 400;
    font-style: italic;
    line-height: 1.45;
    color: var(--mist);
    padding: 6px 0 2px;
    border-top: 1px solid var(--border);
}

/* ── STAR container (click) ── */
.star-container {
    grid-column: 2 / -1;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
        max-height 0.4s ease,
        opacity 0.3s ease,
        margin-top 0.4s ease;
    margin-top: 0;
}

.star-container.is-visible {
    max-height: 600px;
    opacity: 1;
    margin-top: 12px;
}

/* ── Individual STAR step ── */
.star-step {
    display: grid;
    grid-template-columns: 22px 1fr;
    gap: 10px;
    align-items: baseline;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
        max-height 0.35s ease,
        opacity 0.3s ease,
        padding 0.35s ease;
    padding: 0;
}

.star-step.is-revealed {
    max-height: 120px;
    opacity: 1;
    padding: 7px 0;
}

.star-step + .star-step.is-revealed {
    border-top: 1px solid var(--border);
}

.star-label {
    font-family: "DM Mono", monospace;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--acid);
    text-align: right;
}

.star-text {
    font-family: "Syne", sans-serif;
    font-size: 0.82rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--mist);
}

/* ── Hint text ── */
.star-hint {
    font-family: "DM Mono", monospace;
    font-size: 0.6rem;
    color: var(--mist);
    opacity: 0.5;
    margin-top: 6px;
    letter-spacing: 0.06em;
    transition: opacity 0.3s;
}

.star-hint-done {
    color: var(--acid);
    opacity: 0.7;
}

@media (max-width: 768px) {
    .proof-item {
        grid-template-columns: 42px 1fr;
    }
    .proof-tag {
        display: none;
    }
    .proof-brief,
    .star-container {
        grid-column: 1 / -1;
    }
}

/* ── Beyond Work cluster ── */
.beyond-work {
    margin-top: 40px;
    padding-top: 28px;
    border-top: 1px solid var(--border);
}

.beyond-work-label {
    font-family: "DM Mono", monospace;
    font-size: 0.58rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mist);
    opacity: 0.6;
    margin-bottom: 8px;
}
</style>
