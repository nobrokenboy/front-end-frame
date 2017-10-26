import _ from "lodash";
export default {
	url:window.location.href,
	search:window.location.search,
	isIndexOfValue(val){
		if(this.url.indexOf(val)>-1){
			return true;
		}
	},
	getUrlPara(para){
		var paraStr,arr=[];
		paraStr=this.search.substr(1);
		arr=paraStr.split("&");
		for(var i=0,j=arr.length;i<j;i++){
			var parameter=arr[i].split("=");
			if(parameter[0].toLowerCase()==para.toLowerCase()){
				//避免出现乱码加上decodeURI进行解码
				return parameter[1];
			}
		}
		return "";
	},
	isElementInArr(ele,arr) {
		for(var i= 0,j=arr.length;i<j;i++){
			if(ele==arr[i]){
				return true;
			}
		}
	},
	getDiffTimes(t1,t2) {
		var diffTimes=t2-t1;
		var timesObj={};
		var d=0;//天数
		var h=0;//时
		var m=0;//分
		var s=0;//秒
		if(diffTimes>=0){
			d=Math.floor(diffTimes/1000/60/60/24);
			h=Math.floor(diffTimes/1000/60/60%24);
			m=Math.floor(diffTimes/1000/60%60);
			s=Math.floor(diffTimes/1000%60);
		}

		h = h>9 ? h : "0"+h; //如果小时小于10,则在前面加0补充为两位数字
		m = m>9 ? m : "0"+m; //如果分钟小于10,则在前面加0补充为两位数字
		s = s>9 ? s : "0"+s; //如果秒数小于10,则在前面加0补充为两位数字

		timesObj={
			d:d,
			h:h,
			m:m,
			s:s
		};
		return timesObj;
	},
	replacePhoneStr(phone,str1,str2,replaceStr) {
		//检验参数的个数
		if(arguments.length!=4)
			throw new Error('received ' + arguments.length + ' parameters and should work with 4');
		str1=str1||0;
		str2=str2||phone.length;
		//str2至少要str1后一位
		if(!phone){
			return "请确定手机号码";
		}
		if(typeof str1 !="number"||typeof str2!="number"){
			return "请输入正确的参数格式";
		}
		replaceStr=replaceStr||eval("alert('请传入手机号要替换的字符串');");
		phone=phone.replace(phone.substring(str1,str2),replaceStr);
		return phone;
	},
	fisCardID(sId) {
		var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
		var iSum=0 ;
		var info="" ;
		if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
		sId=sId.replace(/x$/i,"a");
		if(aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法";
		sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
		var d=new Date(sBirthday.replace(/-/g,"/")) ;
		if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法";
		for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
		if(iSum%11!=1) return "你输入的身份证号非法";
		return true;
	},
	turnOneDimensArrToTwoDimensArr(arr,column){//等列二维
		var twoDimensArr=[];
		//获取数组长度
		var arrlength=arr.length;
		//获取行数
		var rows=Math.ceil(arrlength/column);
		for(var i=0,j=rows;i<j;i++){
			var startIndex=i*column;
			var endIndex=startIndex+column;
			twoDimensArr.push(arr.slice(startIndex,endIndex));
		}

		return twoDimensArr;
	},
	setCookie(c_name,value,expiredays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+expiredays)
		document.cookie=c_name+ "=" +escape(value)+
			((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
	},
	getCookie(c_name){
		var c_start,c_end;
		if (document.cookie.length>0)
		{
			c_start=document.cookie.indexOf(c_name + "=")
			if (c_start!=-1)
			{
				c_start=c_start + c_name.length+1
				c_end=document.cookie.indexOf(";",c_start)
				if (c_end==-1) c_end=document.cookie.length
				return unescape(document.cookie.substring(c_start,c_end))
			}
		}
		return ""
	},
	deleteCookie(name){
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=this.getCookie(name);
		if(cval!=null)
			document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	},
	turnOneDimensArrToTwoDimensArrSpe(arr){//转化为2,3,3的数组
		var twoDimensArr=[];
		//获取数组长度
		var arrlength=arr.length;
		twoDimensArr.push(arr.slice(0,2));
		twoDimensArr.push(arr.slice(2,5));
		twoDimensArr.push(arr.slice(5,8));
		return twoDimensArr;
	},
	removeDuplicate(arr){//去重
		var obj={},
			result=[];
		for(var i= 0,j=arr.length;i<j;i++){
			obj[arr[i]]=i;
		}
		//获取对象的key
		for(var i in obj){
			result.push(i);
		}
		return result;
	},
	isType(type, obj){//判断类型
		var _class = Object.prototype.toString.call(obj).slice(8, -1);
		return obj !== undefined && obj !== null && _class === type;
	},
	deepExtend(out){//覆盖对象的方法
		out = out || {};
		for (var i = 1; i < arguments.length; i++) {
			var obj = arguments[i];
			if (!obj)
				continue;
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					if (this.isType('Object', obj[key]) && obj[key] !== null)
						deepExtend(out[key], obj[key]);
					else
						out[key] = obj[key];
				}
			}
		}
		return out;
	},
	isEmpty(str){
		str = str.toString();
		str = str.replace(/\ +/g, "");
		str = str.replace(/[ ]/g, "");
		str = str.replace(/[\r\n]/g, "");
		if(str==""){
			return true
		}else{
			return false
		}
	},
	joinParams(obj){
		let str="";
		let arr=[];
        for(var i in obj){
			arr.push(i+"="+obj[i]);
		}
		str=arr.join("&");
		return str;
	},
	keyNum(val){//作用：输入必须是数字，否则置为空
		var temp=val.toString();
		var negativeIndex=temp.indexOf("-");//2017.02.02
		if(isNaN(val)&&negativeIndex!=0)
			val="";
		//return val.replace(/[^\d,.?]/g,'');
		return val;
	},
	keyOneLessThanTwo(val1,val2){//val1必须小于val2
		if(val1>val2){
			val1=val2;
		}
		return val1;
	},
	keepNumDecimal(val,nums){//保持num代表的是位数
		//2017.02.02修复可能出现负数的bug
		var temp=val.toString();
		var strLength=temp.length;
		var dotIndex=temp.indexOf(".");
		var isNegative=val>0?false:true;//2017.02.02
		var strMaxLength="";
		strMaxLength=dotIndex+1+nums;
		if(dotIndex>-1){
			//存在小数点
			if(strLength>strMaxLength){
				if(isNegative){
					val=Math.ceil(val);
				}else{
					val=Math.floor(val);
				}
			}
		}
		return val;
	},
	getYearMonthDayFormat(date){
		var cutEndIndex=date.indexOf(" ");
		date=date.substring(0,cutEndIndex);
		return date;
	},
	trim(str){//去除空格
		return str.replace(/(^\s*)|(\s*$)/g, ""); 
	},
	checkIdentityId(sID){//sID传字符串
		var Sum=0,residueNum,sIdLast,residueOppositeNum;
		//判断身份证号是否为空
		if(!sID) return "请输入身份证号";
		//判断身份证号的长度合法性
		if(!/^\d{17}(\d|x)$/i.test(sID)) return "您输入的身份证长度或格式错误";
		sIdLast=sID.charAt(sID.length-1);
		//18位身份证（第18~2的权重）,从右数起2,3...18，判断有效性
		var WiArr=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
		//身份证对应位数*对应位数权重的累加/11取余数对应的数字（0,1,2,3,4,5,6,7,8,9,10）,与真实身份证最后一位做比较
		//X,x都可以
		var validArr=[1,0,'X',9,8,7,6,5,4,3,2];
		for(var i=0;i<17;i++){
			var Ai=parseInt(sID.charAt(i))*WiArr[i];
			Sum+=Ai;
		}
		residueNum=Sum%11;
		residueOppositeNum=validArr[residueNum];

		if(residueOppositeNum.toString()===sIdLast.toUpperCase()){
			return true;
		}else{
			return "您输入的身份证号非法";
		}
		
	},
	testIsPositiveInt(val){//判断是不是正整数
		var regxVal=/^[0-9]*[1-9][0-9]*$/;
		if(isNaN(val)){
			return "请输入正整数";
		}
		var temp=parseFloat(val);
		if(regxVal.test(temp)){
			return true;
		}else{
			return "请输入正整数";
		}
	},
	//new set 去重
    removeRepeate(arr){
    	return Array.from(new Set(arr));//转化为数组
    },
	//获取星星评价
	//"★★★★★☆☆☆☆☆"
	//["★","★","★","★","★","☆","☆","☆","☆","☆"]
    getStarEvaluate(para,rate){
    	return para.slice(5-rate,10-rate);//slice用于字符串和数组皆可
    }





}
