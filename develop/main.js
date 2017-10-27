import ajax from "interface/ajax";
import interface_1 from "interface/common_module";
import util from "utils/util";
import lib from "utils/lib";
import $ from "jquery";
import Vue from "vue";
import {myLoading} from "components/components";
import {datePicker} from 'iview/src/components/date-picker';

const vm=new Vue({
    data:{
        items:{},
        stars:"",
        isShowLoading:true
    },
    components:{
        "my-loading":myLoading,
        'date-picker':datePicker
    },
    mounted(){
        this.getAddress();
        this.stars=util.getStarEvaluate("★★★★★☆☆☆☆☆",3);
        lib.forEach(this.stars,(value,key)=>{
            if(key%2==0){
                value="^";
            }
            console.log(value);
        });

        setTimeout(()=>{
            this.isShowLoading=false;
        }, 2000);
        
    },
    methods:{
        getAddress(){
            interface_1.getCityInfo((res)=>{
                //console.log(res);
                this.items=res;
            });
        }
    }
}).$mount("#apple");