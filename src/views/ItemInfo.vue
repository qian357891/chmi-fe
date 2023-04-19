<template>
  <div>
    <div class="wrap">
      <div>
        <div class="demo-image__preview">
          <el-image
            style="width: 300px; height: 300px"
            :src="url"
            :zoom-rate="1.2"
            :preview-src-list="srcList"
            :initial-index="4"
            fit="cover"
          />
        </div>
        <span>点击图像查看大图</span>
      </div>

      <div class="preInfo">
        <el-descriptions direction="vertical" :column="4" border>
          <el-descriptions-item label="药材名">党参</el-descriptions-item>
          <el-descriptions-item label="主要适用症">
            脾肺气虚、四肢无力、食欲不佳、气血双亏
          </el-descriptions-item>
          <el-descriptions-item label="用法用量" :span="2">9～30g</el-descriptions-item>
          <el-descriptions-item label="是否纳入医保">
            <el-tag size="small">是</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="主要用药禁忌">与藜芦不能同用 </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <main style="display: flex; justify-content: center">
      <div style="width: 1000px">
        应用选方编辑 播报 实用附方
        ①清肺金，补元气，开声音，助筋力：党参一斤（软甜者，切片），沙参半斤（切片），桂圆肉四两。水煎浓汁，滴水成珠，用磁器盛贮.每用一酒杯，空心滚水冲服，冲入煎药亦可。（《得配本草》上党参膏）
        ②治泻痢与产育气虚脱肛：党参（去芦，米炒）二钱，炙耆、白术（净炒）、肉蔻霜、茯苓各一钱五分，怀山药（炒）二钱，升麻（蜜炙）六分，炙甘草七分。加生姜二片煎，或加制附子五分。（《不知医必要》参耆白术汤）
        ③治服寒潦竣剂，以致损伤脾胃，口舌生疮；党参（焙）、黄芪（炙）各二钱，茯苓一钱，甘草（生）五分，白芍七分。白水煎，温服。（《喉科紫珍集》参耆安胃散）
        ④治小儿口疮：党参一两，黄柏五钱。共为细末，吹撒患处。（《青海省中医验方汇编》）
        ⑤抑制或杀灭麻风杆菌：党参、重楼（蚤休）、刺包头根皮（楤木根皮）各等量。将党参、重楼研成细粉；再将刺包头根皮加水适量煎煮三次，将三次煎液浓缩成一定量（能浸湿党参、重楼细粉）的药液，加蜂蜜适量.再将重楼、党参细粉倒入捣匀作丸，每丸三钱重；亦可作成膏剂。日服三次，每次一丸，开水送服。（北京中医学院《新医疗法资料汇编》）
        [2] 临床应用
        十全大补汤（《传信适用方》）治气血两虚证。面色萎黄，倦怠食少，头晕目眩，神疲气短，心悸怔忪，自汗盗汗，四肢不温，舌淡，脉细弱，以及妇女崩漏，月经不调，疮疡不敛等。党参6g，白术9g，白茯苓9g，白芍药9g，黄芪12g，川芎6g，干熟地黄12g，当归9g，甘草3g，生姜3片，大枣2个。每服3钱，去渣温服，不拘时候。方中党参甘温益气补血，为君药。
        [4] 各家论述
        ①《本经逢原》：清肺。上党人参，虽无甘温峻补之功，却有甘平清肺之力，亦不似沙参之性寒专泄肺气也。
        ②《得配本草》：上党参，得黄耆实卫，配石莲止痢，君当归活血，佐枣仁补心。补肺
        蜜拌蒸熟；补脾恐其气滞，加桑皮数分，或加广皮亦可。
        ③《本草正义》：党参力能补脾养胃，润肺生津，腱运中气，本与人参不甚相远。其尤
        可贵者，则健脾运而不燥，滋胃阴而不湿，润肺而不犯寒凉，养血而不偏滋腻，鼓舞清阳， 振动中气
        ，而无刚燥之弊。且较诸辽参之力量厚重，而少偏于阴柔，高丽参之气味雄壮，
        而微嫌于刚烈者，尤为得中和之正，宜乎五脏交受其养，而无往不宜也。特力量较为薄弱，
        不能持久，凡病后元虚，每服二、三钱，止足振动其一日之神气，则信乎和平中正之规模，
        亦有不耐悠久者。然补助中州而润泽四隅，故凡古今成方之所用人参，无不可以潞党参当之
        ，即凡百证治之应用人参者，亦无不可以潞党参投之。 [2]
      </div>
    </main>
    <footer style="display: flex; align-items: center; flex-direction: column">
      <h1>为您推荐</h1>
      <el-divider />
      <div>
        <div class="infinite-list-wrapper" style="overflow: auto">
          <div
            v-for="i in count"
            :key="i"
            v-infinite-scroll="load"
            :infinite-scroll-disabled="disabled"
          >
            <items />
          </div>
          <p v-if="loading">正在加载...</p>
          <p v-if="noMore">没有更多了，回主页看看吧！</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Items from './Items.vue'
import { computed, ref } from 'vue'

const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
]

const count = ref(2)
const loading = ref(false)
const noMore = computed(() => count.value >= 5)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 1
    loading.value = false
  }, 2000)
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  * {
    margin: 10px;
  }
  .preInfo {
    width: 1000px;
  }
}

.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
