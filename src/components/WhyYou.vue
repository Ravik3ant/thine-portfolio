<template>
  <section>
    <div class="section-inner">
      <div class="section-label">{{ label }}</div>
      <div class="section-body" style="padding:0;">
        <div class="why-grid reveal">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="why-item"
          >
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
withDefaults(defineProps<{
  label?: string;
  items?: { number: string; title: string; desc: string }[];
}>(), {
  label: '§ Why Thine',
  items: () => [
    {
      number: '01 —',
      title: 'Thine is building in a high-leverage category.',
      desc:  'Personal intelligence products need strong product thinking, clear narrative, and disciplined experimentation. That is where I can contribute.',
    },
    {
      number: '02 —',
      title: 'I can bridge technical implementation and GTM execution.',
      desc:  'I have worked on APIs, frontend performance, feature strategy, and user-facing communication, which helps me execute across teams.',
    },
    {
      number: '03 —',
      title: 'I am comfortable with ambiguity and iteration.',
      desc:  'I have worked in early-stage contexts where priorities shift fast. I am used to testing, learning, and improving quickly.',
    },
    {
      number: '04 —',
      title: 'I care about doing real work, not just applying.',
      desc:  'This page and portfolio reflect how I approach opportunities: understand context, execute with intent, and communicate clearly.',
    },
  ],
});
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
  transition: background 0.3s, color 0.3s;
}

.why-item:nth-child(even)      { border-right: none; }
.why-item:nth-last-child(-n+2) { border-bottom: none; }

.why-item:hover { background: var(--card-hover-bg); color: var(--card-hover-color); }
.why-item:hover .why-title  { color: var(--card-hover-color); }
.why-item:hover .why-number { color: var(--acid); }
.why-item:hover .why-desc   { color: rgba(255,255,255,0.65); }

:global([data-theme="dark"]) .why-item:hover .why-desc { color: rgba(240,235,226,0.6); }

.why-number {
  font-family: 'DM Mono', monospace;
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
  font-family: 'DM Mono', monospace;
  font-size: 0.88rem;
  line-height: 1.8;
  color: var(--mist);
  transition: color 0.3s;
}

@media (max-width: 768px) {
  .why-grid { grid-template-columns: 1fr; }
  .why-item { border-right: none !important; }
}
</style>
