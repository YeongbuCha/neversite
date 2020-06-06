<template>
  <div class="never-list-item">
    <div 
      class="x-block" 
      v-if="neverSite.isVisited"
      @click.exact="onImgClick"
      @click.ctrl.exact="onImgCtrlClick"
      >
      <div>❌</div>
    </div>
    <h3>NO <span>{{ neverSite.content }}</span> TODAY</h3>
    <img class="character-image"
    @click.exact="onImgClick"
    @click.ctrl.exact="onImgCtrlClick"
    :src="characterUrl" 
    alt="character image">
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
    onImgClick() {
      this.$emit('imgClick', this.neverSite)
    },
    onImgCtrlClick() {
      this.$emit('imgCtrlClick', this.neverSite)
    }   
  },
  computed: {
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
  position: relative;
}

.x-block {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(3, 3, 3, 0.3);
  margin: 0px auto;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  font-size: 8rem;
  cursor: pointer;
}

.character-image {
  cursor: pointer;
}

h3 {
  margin-top: 10px;
  font-size: 1.8rem;
  width: 100%;
  word-wrap: break-word;
}

span {
  font-weight: 700;
  font-size: 2.2rem;
  color: #d63031;
}
</style>