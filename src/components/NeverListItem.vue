<template>
  <div class="never-list-item">
    <h3>NeverListItem</h3>
    <p>{{ neverSite.content }}</p>
    <img :src="characterUrl()" alt="">
  </div>
</template>

<script>
const BASE_IMAGE_URL = 'https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/'
const CHARACTERS = ['animal_characters11_zdksf8.png', 'animal_characters12_cfaa1b.png', 'animal_characters10_nnipr2.png', 'animal_characters09_qz3out.png', 'animal_characters05_ifoidc.png', 'animal_characters08_ledkiu.png', 'animal_characters06_prvayg.png', 'animal_characters07_jrkqvo.png', 'animal_characters04_yfo55m.png', 'animal_characters03_km7am4.png', 'animal_characters01_zzktfy.png', 'animal_characters02_cfkc86.png', 'animal_characters19_txyk3x.png', 'animal_characters15_chuyvy.png', 'animal_characters14_zqjsuk.png', 'animal_characters17_hhx8vo.png', 'animal_characters16_c81ynq.png', 'animal_characters13_lbeayv.png', 'animal_characters00_lrclty.png']

export default {
  name: "NeverListItem",
  props: {
    neverSite: Object
  },
  methods: {
		characterUrl() {
			const randomCharacter = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
			return `${BASE_IMAGE_URL}${randomCharacter}`
		},    
  }
}
</script>

<style scoped>

.never-list-item {
  width: 100%;
  height: 100%;
  border: 1px solid green;
}
</style>