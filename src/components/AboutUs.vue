<template>
   <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doggie Walks About Us</title>
</head>
<body>
<Nav/>
            <article class="mainC">
                <section class="grid-container2">
                    <section class="grid-left2">
                <p class="Content" >Doggie walks are committed to ensuring that your pet is safe, healthy and active. Our canine friends should
feel different terrain under their paws, hear different sounds and see different sights and have a decent
sniff about!<br><br>
While dogs need daily exercise in order to stay healthy, for many people it's not always possible to walk
their pets regularly. That's why we established Doggie Walks, to help people across Lancashire and
Merseyside ensure their dogs live happy lives.<br><br></p>
<h3>How it works</h3>
<p class="Content">Your dog will be collected from your home and taken to a local park for a walk with their pals. Exercise,
mental stimulation, socialisation and play make for a happier, calmer and more contented dog. With a
maximum of 4 dogs per walk you can be sure that your best friend is getting all the attention they deserve.<br><br>
However, we also accept drop-offs at your nearest local branch. You can find out more about where your
nearest branch is via our contact page.</p>
</section>
<section class="grid-right2">
  <!-- As this page has minimal content an image is used to minimise the white space shown !-->
    <img class="contentImage" src="../images/pexels-photo-264005.jpeg" alt="Dog running">
</section>
                </section>
            </article>
            </body>
<Footer/>>
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
      grid-template-areas: 'left right';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
  }

  .grid-left2{
      grid-area: left;
  }

  .grid-right2{
      grid-area: right;
  }
</style>