<template>
    <div class="slideshow">
      <transition name="fade" mode="out-in">
        <img :src="currentSlide" :key="currentSlide" class="slide" alt="Slide">
      </transition>
      <div class="controls">
        <button style="margin-top:10px; border-radius: 8px; padding: 10px 10px; background-color: #263444; color: #fff;" @click="prevSlide">Previous</button>
        <button style="border-radius: 8px; padding: 10px 10px; background-color: #263444; color: #fff;" @click="nextSlide">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      slideshow: Array // Pass the slideshow array as a prop
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    computed: {
      currentSlide() {
        return this.slideshow[this.currentIndex];
      }
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slideshow.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slideshow.length) % this.slideshow.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .slideshow {
    width: 600px; /* Adjust the width as needed */
    position: relative;
  }
  
  .slide {
    max-width: 100%;
    height: auto;
    transition: opacity 0.5s ease;
    border-radius: 10px; 
  }
  
  .controls {
    /* position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%); */
    left: 50%;
  }
  
  button {
    margin-left:100px;
    margin: 0 10px;
  }
  </style>
  