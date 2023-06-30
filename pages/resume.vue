<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">

        <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Roshpina Academy
            </h4>
            <span>2015 — 2016</span>
            <p class="timeline-item-desc">
              Tsopoli, Accra
            </p>
            <p class="timeline-text">
              Assistant teacher
            </p>
          </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            MetaQuote
          </h4>
          <span>2021 — 2023</span>
          <p class="timeline-item-desc">
            Remote
          </p>
          <p class="timeline-text">
            Trading Bot Freelancer
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Ningo-Prampram District Assembly
          </h4>
          <span>2022 — 2023</span>
          <p class="timeline-item-desc">
            Ningo-Prampram
          </p>
          <p class="timeline-text">
            Webmaster
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Intermediate Software/Blockchain engineer/Algorithmic Trader
            </h5>
            <data value="80"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

      </ul>
    </section>
  </article>
</template>
