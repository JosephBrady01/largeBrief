/* eslint-disable vue/multi-word-component-names */
<template>
  <article class="grid-container">
    <section class="grid-left">
   <img class="white-logo" src="../images/logo-svg-white.png" alt="White text logo">
   </section>
   <section class="grid-right">
    <ul>
      <li><router-link to="/">Home</router-link></li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">About us<i class="fa fa-caret-down"></i></a>
            <div class="dropdown-content">
              <router-link to="/about">About Us</router-link>
                <a href="MeetTheTeam.vue">Meet The Team</a>
            </div>
            </li>
            <li><a href="Costs.vue">Services & Costs</a></li>
            <li><a href="Gallery.vue">Gallery</a></li>
            <li><a href="Contact.vue">Contact</a></li>
            </ul>
    </section>
  </article>
            <h1 class="Promotional">50% Off Home Visits For New Customers Enquire now!</h1>
            <br>
            <h2 class="TagLine">Helping Our Animal Friends One Paw at a Time</h2>
            <br>
</template>

<script>
export default {

}
</script>

<style>
ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    overflow: hidden;  
    display: flex;
    justify-content: space-around;
    font-size: 18pt;
}

li {
    float: left;  
}

li a {
    display: block;
    padding: 10px;
}

 li a, .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover, .dropdown:hover .dropbtn {
    color: lightgray;
  }
  
  li.dropdown {
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    color:black;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
  .dropdown-content a:hover {
      background-color: lightgray;
      color: black;
    }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>