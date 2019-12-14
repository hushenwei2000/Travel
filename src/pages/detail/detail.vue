<template>
  <div class="detail">
      <detail-header></detail-header>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
      <detail-ticket
          :ticketList="ticketList"
          :serviceList="serviceList"
          :tripList="tripList"
      ></detail-ticket>
      <div class="content"></div>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailTicket from './components/Ticket'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailHeader,
        DetailBanner,
        DetailTicket
    },
    data(){
        return {
            sightName: '',
            bannerImg: '',
            ticketList: [],
            serviceList: [],
            tripList: []
        }
    },
    methods:{
        getDetailInfo() {
            axios.get('/api/detail.json')
                .then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc(res) {
            const data = res.data.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.ticketList = data.ticketList
            this.serviceList = data.serviceList
            this.tripList = data.tripList
        }
    },
    mounted() {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 30rem
</style>