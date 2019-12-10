<template>
  <div>
      <city-header></city-header>
      <city-search :list="cities"></city-search>
      <city-list :hotlist="hotCities" :alllist="cities" :letter="letter"></city-list>
      <city-alphabet :list="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            hotCities: [],
            cities: {},
            letter: ''
        }
    },
    methods:{
        getCityInfo() {
            axios.get('/api/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res) {
            const data = res.data.data
            this.hotCities = data.hotCities
            this.cities = data.cities
        },
        handleChange(letter) {
            this.letter = letter
        }
    },
    mounted() {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>