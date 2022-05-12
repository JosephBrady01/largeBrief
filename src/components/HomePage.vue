/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" src="HomePage.css">
    <title>Doggie Walks homepage</title>
</head>
<body>
  <div class="backgroundImage">
  <Nav/>
  </div>
            <main>
            <section class="grid-container">
              <div class="grid-left">
                <p class="mainC">Welcome to Doggie Walks! We are committed to providing professional and personal care to your beloved four-legged friends.

We are based in Ormskirk we offer exciting and stimulating walks all over the beautiful Lancashire and
 Merseyside countryside. We guarantee your dog will come home tired and content.

We recognise every dog's needs are different and how busy daily life can be. With services starting from
 only £10 we ensure you the best possible service to suit the needs of both you and your pooch.

We are also fully insured for everybody's peace of mind, for more information on this please contact us or
 email at info@doggiewalks.co.uk.

We also offer different services such as:
• Pet Sitting (Puppy and Elderly)
• Small pet visits
• Overnight Pet Sitting

There's something to suit everyone but if you can't find what you're looking for don't hesitate to contact
 us and we'll find the perfect solution for you and your companion!</p>
              </div>
              <div class="grid-right">
              </div>
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
