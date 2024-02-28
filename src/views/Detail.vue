<!-- About.vue -->
<template>

    <div style="position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 100px;">
    
      <p style="font-size:30px;">Detail & Review</p>
      <table>
        <tbody tr v-for="data in datas" :key="data.id"  class="left-align-table">
            <th>
              <td>
                <p style="font-size:40px; font-style:bold">{{ data.term }} - {{ data.location }}</p>
              </td>
            </th>
            <tr>
              <td>
                <div v-for="restaurant in restaurants" :key="restaurant.id">
                  <div v-if="restaurant.id === data.id">
                    <slideshow :slideshow="restaurant.slideshow" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span v-if="data.rating === '5'">⭐⭐⭐⭐⭐</span>
                <span v-if="data.rating === '4'">⭐⭐⭐⭐</span>
                <span v-if="data.rating === '3'">⭐⭐⭐</span>
                <span v-if="data.rating === '2'">⭐⭐</span>
                <span v-if="data.rating === '1'">⭐</span>
              </td>
            </tr>
            <tr>
              <td>
                <div v-for="(restaurant, id) in restaurants" :key="id">
                  <div v-if="restaurant.id === data.id">
                    <button @click="toggleContent(id)">
                      {{ restaurant.showContent ? 'Hide' : 'Show' }} {{ data.term }} Review 
                    </button>
                    <div v-if="restaurant.showContent">
                      <!-- Your content goes here -->
                      <p v-for="(review, reviewIndex) in restaurant.review" :key="reviewIndex" style="margin-left:3%; margin-top:5%; font-size:14px; font-style:italic; font-weight:bold; color: #464646 ">
                        "{{ review }}". -Anonymous
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {{ data.location }}
              </td>
            </tr>
            <tr>
              <td style="padding-bottom:50px;">
                <p style="font-weight: 600;">
                  {{ parseInt(data.radius) / 1000  }} kilometer
                </p>
                <a target="_blank" :href="'https://www.google.com/maps/place/' + data.latitude + ',' + data.longitude + '/'">See on Maps</a>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
import Slideshow from '@/components/Slideshow.vue';
export default {
    components: {
      Slideshow
    },
    data() {
      return {
        datas: [],
        restaurants: [] 
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch('/data.json');
          const response2 = await fetch('/details.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          if (!response2.ok) {
            throw new Error('Network response2 was not ok');
          }
          const business = await response.json();
          const detail = await response2.json();
          this.restaurants = detail.details;
          this.datas = business.data;
        } catch (error) {
          console.error('There was a problem fetching the data:', error);
        }
      },
      toggleContent(id) {
        this.restaurants[id].showContent = !this.restaurants[id].showContent;
      }
    },
    name: 'Detail'
}
</script>

<style scoped>
.left-align-table td {
    text-align: left;
  }
</style>
  