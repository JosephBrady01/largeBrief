<template>
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doggie Walks Meet The Team</title>
</head>
<body>
<Nav/>
            <main class="mainC">
                    <p class="AboutTheTeam">Meet the doggie walks team! We’re fully trained and insured to work with animals and are committed to the
health and benefits of your pet. We aim to keep providing the best knowledge regarding dogs as we can, and
to do this we believe you cannot sit still in this occupation as we learn more about dogs daily. We ensure
that our knowledge is kept up-to-date by attending regular seminars and courses presented by well- respected
 canine trainers, behaviorists and practitioners.</p><br><br>

<!-- For the teams each section is esstially the same expect the names titles and postions. this ensures that consistency !-->
 <section class="grid-container2">
     <section class="Lori-Hanson">
         <img class="Lori-picture" src="./images/team/lori-hanson.jpg" alt="Lori-Hanson Founder of Doggie Walks">
         <!-- The alt text is the title and position combined so that a user is given the full info of the person even if they're hovering over the image !-->
         <h3 class="name">Lori Hanson</h3><br>
         <p class="position">Founder of Doggies Walks</p>
     </section>
     <section class="Gary-Simpson">
         <img class="Gary-picture" src="./images/team/gary-simpson.jpg" alt="Gary-Simpson Team Manager">
         <h3 class="name">Gary Simpson</h3><br>
         <p class="position">Team manager</p>
     </section>
     <section class="Rebecca-Harrison">
         <img class="Becca-picture" src="./images/team/rebecca-harrison.jpg" alt="Rebecca Harrison Professional dog walker">
         <h3 class="name">Rebecca Harrison</h3><br>
         <p class="position">professional dog walker</p>
     </section>
      <section class="Joanna-Davies">
         <img class="Jo-picture" src="./images/team/joanna-davies.jpg" alt="Joanna Daviesv Professional dog walker">
         <h3 class="name">Joanna Davies</h3><br>
         <p class="position">professional dog walker</p>
     </section>
 </section>
            </main>

            </body>
            <Footer/>
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

  .grid-container2 {
      display: grid;
      /* A grid is used to space the team members in a square formation rather than having them all vertically shown */
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
  }


</style>