<template>
  <footer>
    <span>{{ left }}</span>
    <div class="footer-right">
      <span>{{ right }}</span>
      <a
        v-for="(action, i) in actions"
        :key="i"
        :href="action.href"
        class="footer-link"
        :target="action.external ? '_blank' : undefined"
        :rel="action.external ? 'noopener noreferrer' : undefined"
        @click="action.download ? handleDownloadAndOpen($event, action.href) : undefined"
      >
        {{ action.label }}
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  left?: string;
  right?: string;
  actions?: { label: string; href: string; external?: boolean; download?: boolean }[];
}>(), {
  left:  '[Your Name] · Built for [Company] · 2026',
  right: 'Not a résumé. A position.',
  actions: () => [],
});

function handleDownloadAndOpen(event: MouseEvent, href: string) {
  event.preventDefault();
  // Open PDF in new tab for viewing
  window.open(href, '_blank');
  // Also trigger download
  const a = document.createElement('a');
  a.href = href;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
</script>

<style scoped>
footer {
  padding: 22px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'DM Mono', monospace;
  font-size: 0.64rem;
  color: var(--mist);
  letter-spacing: 0.1em;
  border-top: 2px solid var(--border);
  transition: border-color 0.4s, color 0.4s;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-link {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: opacity 0.2s ease;
}

.footer-link:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    gap: 8px;
    padding: 18px 24px;
    text-align: center;
  }

  .footer-right {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
