<template>
     <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doggie Walks Services & Costs</title>
</head>
<body>
  <Nav/>
           <main class="mainC">
              <!-- Each service is contained within a section, like the team members this ensures consistency and has been indicated by the client !-->
                <section id="service" class="DogWalking">
                    <img id="service-img" class="corgiWalking" src="./images/pexels-photo-58997.jpeg" alt="Corgi Walking">
                    <h3 class="title">Dog walking</h3>
                    <ul class="dogWalkingInfo">
                        <li class="infoItem">£12/hour</li>
                        <li class="infoItem">Duration: 1 hour(enquire for more)</li>
                        <li class="infoItem">Not all dogs enjoy group walks, therefore we provide two different services. Solo or group, discover which option is best for your dog.</li>
                    </ul>
                </section>
                  <section id="service" class="HouseCalls">
                    <img id="service-img" class="DogInField" src="./images/pexels-photo-1487665.jpeg" alt="White Dog in Field">
                    <h3 class="title">House Calls</h3>
                    <ul class="houseCallInfo">
                        <li class="infoItem">£15/hour</li>
                        <li class="infoItem">Duration: 1 hour(enquire for more)</li>
                        <li class="infoItem">Need your dog looking after while you're not home? This service allows you to have peace of mind while we ensure that your dog has the attention and care it desevres.</li>
                    </ul>
                </section>
                  <section id="service" class="DayCare">
                    <img id="service-img" class="GroupOfDogs" src="./images/photo-1494947665470-20322015e3a8.jpg" alt="Group of Dogs on leads">
                    <h3 class="title">Day Care</h3>
                    <ul class="dayCareInfo">
                        <li class="infoItem">£60/day</li>
                        <li class="infoItem">Duration: 8 hours per day</li>
                        <li class="infoItem">Our professional day care centers provide the most up to date and clean facilities which ensures that your dog is safe, protected and healthy. This will cover all theh services from feeding, bathing, walking and sleeping.</li>
                    </ul>
              </section>
           </main>
           <Footer/>
            </body>
            </html>
</template>

<script>
import Nav from './NavBar.vue'
import Footer from './FooterBar.vue'

export default {
  components: {
    Nav,
    Footer,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,600&display=swap');
body {
    background-color: #93B0D0;
    font-family: 'Raleway', sans-serif; 
}
#service {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto auto auto;
  margin-top: 5%;
  border: 1px solid black;
  border-radius: 5%;
}

#service-img {
  height: 300px;
  width: 400px;
  border-radius: 20%;
}

ul {
  margin-top: 7%;
}
</style>