<template>
  <div>
      <city-header></city-header>
      <city-list :hotlist="hotCities" :alllist="cities"></city-list>
      <city-alphabet :list="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name: 'City',
    components: {
        CityHeader,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            hotCities: [],
            cities: {}
        }
    },
    methods:{
        getCityInfo() {
            axios.get('/api/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res) {
            const data = res.data.data
            console.log(data);
            
            this.hotCities = data.hotCities
            this.cities = data.cities
        }
    },
    mounted() {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>