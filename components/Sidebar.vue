<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>


<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="./../assets/images/loading.png" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 id="head-name" class="name" title="Raphael | Portfolio">
          Osro-Agbo Raphael Djangmah
        </h1>

        <p class="title text-center sm:block xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Software Engineer</span>
          <span class="xl:after:content-[''] after:content-[',']">Algorithmic Trader</span>
          <span class="xl:after:content-[''] after:content-[',']">Web Automation</span>
          <span class="xl:after:content-[''] after:content-[',']">Data Analyst</span>
          <span class="xl:after:content-[''] after:content-[',']">Machine learning</span>
          <span class="xl:after:content-[''] after:content-[',']">UI/UX designer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-instagram" />
          </div>

          <div class="contact-info">
            <!-- <p class="contact-title">
              Instagram
            </p> -->

            <a href="https://www.instagram.com/qweku_dreem/" class="contact-link" target="_blank">
              insta
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <!-- <p class="contact-title">
              Github
            </p> -->

            <a href="https://github.com/raphaeldjangmah" class="contact-link" target="_blank">
              Github
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <!-- <p class="contact-title">
              Linkedin
            </p> -->

            <a href="https://www.linkedin.com/in/raphael-djangmah-osro-agbo-21123024b/" class="contact-link" target="_blank">
              Linkedin
            </a>
          </div>
        </li>
        
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:raphealosroagbo70@gmail.com" class="social-link" target="_blank">
            <ion-icon name="mail-outline" color="white" />
          </NuxtLink>
        </li>
        <!-- <LangSwitcher2 /> -->
      </ul>
    </div>
  </aside>
</template>


<style>
   ul{
    color:#fff;
  }

  @media (min-width: 1260px) {
  #head-name {
    font-size: 15px;
    
  }
}

@media (min-width: 765px) {
  .contacts-list {
    display: flex;
    align-content: center;
    justify-content: center;
  }
}

  
</style>