const requestPrefix=config.requestPrefixUrl;
//get请求
function getAjax(str,data,call,beforeSendDeal,completeDeal) {
    $.ajax({
        type: 'GET',
        data:data,
        url: requestPrefix+str,
        success:res=>{
            call(res);
        },
        error:err=>{
            call({error:1,errorMsg:err});
        },
        beforeSend:res=>{
            if(beforeSendDeal){
                beforeSendDeal();
            }
        },
        complete:res=>{
            if(completeDeal){
                completeDeal();
            }
        }
    })
}
//post对象
function submitAjax(str,data,call,type) {
    var type = type?type:"text";
    $.ajax({
        type: 'POST',
        data:data,
        url: requestPrefix+str,
        dataType: type,
        success:res=>{
            call(res);
        },
        error:err=>{
            call({error:1})
            console.log(err)
        }
    })
}
//json格式post
function submitJson(str,data,call,beforeSendDeal,completeDeal) {
    $.ajax({
        type: 'POST',
        data:JSON.stringify(data),
        url: requestPrefix+str,
        dataType:"json",
        contentType : 'application/json',
        success:res=>{
            call(res);
        },
        error:err=>{
            call({error:1})
        },
        beforeSend:res=>{
            if(beforeSendDeal){
                beforeSendDeal();
            }
        },
        complete:res=>{
            if(completeDeal){
                completeDeal();
            }
        }
    })
}
//表单post
function submitForm(str,data,call,beforeSendDeal,completeDeal) {
    $.ajax({
        url: requestPrefix+str,
        type: 'POST',
        cache: false,
        data: data,
        processData: false,
        contentType: false,
        beforeSend:res=>{
            if(beforeSendDeal){
                beforeSendDeal();
            }
        },
        complete:res=>{
            if(completeDeal){
                completeDeal();
            }
        }
    }).done(function(res) {
        call(res);
    }).fail(function(err) {
        call({error:1})
        console.log(err)
    });
}


window.getAjax=getAjax;
window.submitAjax=submitAjax;
window.submitJson=submitJson;
window.submitForm=submitForm;