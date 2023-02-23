<template>
  <div class="map mt-16">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.37073759274!2d-93.1753415726563!3d16.72173330670081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9f426455b9f%3A0xcbe82a96a508c769!2sSal%C3%B3n%20Jardin%20Florencia!5e1!3m2!1ses-419!2smx!4v1670208957812!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>
<style>
.map {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map iframe{
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>