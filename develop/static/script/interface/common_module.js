module.exports={
    /* 
    * 接口名：获取城市地名信息
    * 
    */
    getCityInfo:(call)=>{
        getAjax("../static/data/1.json",{},res=>{
            call(res);
        });
    }
}