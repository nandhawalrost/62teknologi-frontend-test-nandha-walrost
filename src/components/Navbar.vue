<!-- Navbar.vue -->
<template>
    <nav>
      <ul>
        <li><router-link to="/listbusiness">List Business</router-link></li>
        <li><router-link to="/detail">Detail Business</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Navbar styling */
nav {
  background-color: rgb(43, 43, 43);
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  padding:20px;
  z-index: 1000; /* Ensure the navbar is above other content */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline;
  margin-right: 50px; /* Adjust as needed */
}

a {
  text-decoration: none;
  color: white;
}
  </style>
  