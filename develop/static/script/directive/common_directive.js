/**
 * Created by jessic on 2017/10/25.
 */
import Vue from "vue";
import libs from 'utils/lib';


/* 注册一个全局自定义指令 v-focus */
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted(el){
        // 聚焦元素
        el.focus();
    }
});

/*判断细粒分子判断权限*/
/* 赋值写法：v-permission="CWSHTJ" */
Vue.directive("permission",{
    bind(el,binding,vnode){
        const $el=el;
        //获取元素本身的权限名字
        const authName=binding.arg;
        //获取实例对象
        const vm=vnode.context;
        vm.$nextTick(()=>{//要在数据加载完成获取
            //获取权限列表
            const authLists=vm.childAuthLists;
            //判断用户所具有的权限
            const authAttr=libs.findIndex(authLists,(o)=>{
                return o==authName;
            });
            //设置按钮的disbled属性
            if(authAttr==-1){
                $el.setAttribute("disabled",true);
            }
        });

    },
    update(el,binding,vnode){//更新数据时
        const $el=el;
        //获取元素本身的权限名字
        const authName=binding.arg;
        //获取实例对象
        const vm=vnode.context;
        vm.$nextTick(()=>{//要在数据加载完成获取
            //获取权限列表
            const authLists=vm.childAuthLists;
            //判断用户所具有的权限
            const authAttr=libs.findIndex(authLists,(o)=>{
                return o==authName;
            });
            //设置按钮的disbled属性
            if(authAttr==-1){
                $el.setAttribute("disabled",true);
            }
        });

    }
});