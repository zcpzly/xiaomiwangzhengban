/*
* @Author: Administrator
* @Date:   2017-11-07 16:42:24
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-22 21:18:25
*/
window.onload=function(){
	// let menu=document.getElementsByClassName('menu')[0];

	// let list=menu.getElementsByTagName('li');
	let list=document.getElementsByClassName('list-box-banner');
	let xuan=document.getElementsByClassName('xuanxiang');
	/*for(let i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			xuan[i].style.display='block';
		}
		list[i].onmouseout=function(){
			xuan[i].style.display='none';
		}
	}*/
    for(var i=0;i<list.length;i++){
    	list[i].index=i
		list[i].onmouseover=function(){
			xuan[this.index].style.display='block';
			console.log(this.index);
		}
		list[i].onmouseout=function(){
			xuan[this.index].style.display='none';
			console.log(this.index);
		}
	}

	let list_nav1=document.getElementsByClassName('list-box-nav1');
	let nav1_xiala=document.getElementsByClassName('nav1-xiala')[0];
	let nav_center=document.getElementsByClassName('nav1-center')[0];
	let box_xiala=document.getElementsByClassName('xiala_box_nav1');
    let range=document.querySelector('.range');
	nav_center.onmouseover=function(e){
        let target=e.target;
        // if (target==) {}
		nav1_xiala.style.height='230px';
	}
	nav_center.onmouseout=function(){
		nav1_xiala.style.height='0px';
	}

    /*range.onmouseover=function(e){
        let target=e.target;
        // if (target==) {}
        nav1_xiala.style.height='230px';
    }
    range.onmouseout=function(){
        nav1_xiala.style.height='0px';
    }
*/

    for(let i=0;i<list_nav1.length;i++){
   
    		list_nav1[i].onmouseover=function(){
    		for(let j=0;j<list_nav1.length;j++){
    			box_xiala[j].style.opacity='0';
    		}
    		box_xiala[i].style.opacity= '1';
    	    }
    
    }


	let shopbar=document.getElementsByClassName('shopbar')[0];
	let xuangou=document.getElementsByClassName('xuangou')[0];
	shopbar.onmouseover=function(){
       xuangou.style.display='block';
	}
	shopbar.onmouseout=function(){
       xuangou.style.display='none';
	}

    

    // banner效果编写
    let banner =document.getElementsByClassName('banner')[0];
    let banner_list=banner.getElementsByClassName('banner-list')[0];
    let banner_li=banner_list.getElementsByTagName('li');
    // 获取小点
    let xiaoyuan=banner.getElementsByClassName('xiaoyuan')[0];
    let circle_li=xiaoyuan.getElementsByTagName('li');
    // 获取把手
    let bashou_left=banner.getElementsByClassName('bashou-left')[0];
    let bashou_right=banner.getElementsByClassName('bashou-right')[0];
    console.log(bashou_left,bashou_right);
    let num=0;
    let t=setInterval(fn, 4000);
    let flag1=true;
    bashou_left.onclick=function(){
        if (flag1) {
            fn1()
        }
        flag1=false;
    }
    bashou_right.onclick=function(){
        if (flag1) {
            fn();
        }
        flag1=false;
    }
    function fn(){
        num++;
        if (num==banner_li.length) {
        	num=0;
        }
    	for(let i=0;i<banner_li.length;i++){
    		banner_li[i].style.opacity='0';
    		circle_li[i].style.background='#333';
    	}
        // banner_li[num].style.opacity='1';
         animate(banner_li[num],{opacity:1},300,()=>{ flag1=true;})
         circle_li[num].style.background='#fff';
       
    }
    function fn1(){
        num--;
        if (num==-1) {
        	num=banner_li.length-1;
        }
    	for(let i=0;i<banner_li.length;i++){
    		banner_li[i].style.opacity='0';
    		circle_li[i].style.background='#333';
    	}
        // banner_li[num].style.opacity='1';
        animate(banner_li[num],{opacity:1},300,()=>{ flag1=true;})
        circle_li[num].style.background='#fff';
    }
	
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
        clearInterval(t);
		t=setInterval(fn, 4000);
	}
	for(let i=0;i<circle_li.length;i++){
		circle_li[i].onclick=function(){
			banner_li[num].style.opacity='0';
    		circle_li[num].style.background='#333';
    		banner_li[i].style.opacity='1';
    		circle_li[i].style.background='#fff';
    		num=i;
		}
	}


  // 底部内容轮播图编写  
    function neironglunbo(number){
    let  neirong=document.getElementsByClassName('neirong')[0];
    let  mainBox=neirong.getElementsByClassName('main-box')[number];
    let  hezi=mainBox.getElementsByClassName('hezi');
    let  bashouLeft=mainBox.getElementsByClassName('bashou-left')[0];
    let  bashouRight=mainBox.getElementsByClassName('bashou-right')[0];
    let circleContent=mainBox.getElementsByClassName('circle-content')[0];
    let circle_nei_span=circleContent.getElementsByTagName('span');
    let widths=mainBox.offsetWidth;
    let FLAG=true;
    let now=0;
    let next=0;
    bashouLeft.onclick=function(){
        if (next==hezi.length-1) {
            FLAG=true;
        }
        if (next==0) {
            FLAG=true;
        }
        console.log('i say');
        console.log(FLAG);
        if (!FLAG) {
            return;
        }
        fnRight();

        FLAG=false;
    };
    bashouRight.onclick=function(){
        if (next==hezi.length-1) {
            FLAG=true;
        }
        if (next==0) {
            FLAG=true;
        }
         if (!FLAG) {
            return;
        }
        fnLeft();
        if (next==hezi.length-1) {
            FLAG=true;
        }
        if (next==0) {
            FLAG=true;
        }
        FLAG=false;
    };
   

    for(let i=0;i<circle_nei_span.length;i++){
        circle_nei_span[i].onclick=function(){
            if (!FLAG) {
                return;
            }
            FLAG=false;
            if(now==i){
                FLAG=true;
                return;

            }
            else if(now>i){
                hezi[i].style.left=`-${widths}px`;
                animate(hezi[now],{left:widths},()=>{FLAG=true});
                animate(hezi[i],{left:0});
                circle_nei_span[now].classList.remove('dot');
                circle_nei_span[i].classList.add('dot');
                now=next=i;  
            }
            else if(now<i){
                hezi[i].style.left=`${widths}px`;
                animate(hezi[now],{left:-widths},()=>{FLAG=true});
                animate(hezi[i],{left:0});  
                circle_nei_span[now].classList.remove('dot');
                circle_nei_span[i].classList.add('dot');
                now=next=i;    
            }
        }
    }

    function fnLeft(){
       next++;
       if (next>hezi.length-1) {
        next=hezi.length-1;
        FLAG=true;
        return;
       }
       hezi[next].style.left=`${widths}px`;
       animate(hezi[now],{left:-widths},()=>{FLAG=true})
       animate(hezi[next],{left:0})
       circle_nei_span[now].classList.remove('dot');
       circle_nei_span[next].classList.add('dot');
       now=next;
    }
    function fnRight(){
       next--;
       if (next<0) {
        next=0;
        FLAG=true;
        return;
       }
       hezi[next].style.left=`-${widths}px`;
       animate(hezi[now],{left:widths},()=>{FLAG=true})
       animate(hezi[next],{left:0})
       circle_nei_span[now].classList.remove('dot');
       circle_nei_span[next].classList.add('dot');
       now=next;
    }
    }
    neironglunbo(0);
    neironglunbo(1);
    neironglunbo(2);
    neironglunbo(3);

  
function sectionAll(Section,number){
    let zong_ding=document.getElementsByClassName('zong-ding')[number];
    let main_right=zong_ding.getElementsByClassName('main-right');
    let section_ll=document.getElementsByClassName(Section)[0];
    let header_right=section_ll.getElementsByClassName('header-right')[0];
    let list_a=header_right.getElementsByTagName('a');
    for(let i=0;i<list_a.length;i++){
        list_a[i].onmouseover=function(){
            for(let j=0;j<list_a.length;j++){
                main_right[j].style.display="none";
                list_a[j].className="";
            }
            
            list_a[i].className="aa_tile";
            main_right[i].style.display="block";
        }
    }
}
 sectionAll('jiadian-box',0);
 sectionAll('smart-box',1);  
 sectionAll('dapei-box',2);   
 sectionAll('peijian-box',3);   
 sectionAll('zhoubian-box',4);   



    // 明星单品开始编写
    let danpin_zong=document.getElementsByClassName('danpin-zong')[0];
    let biao1=danpin_zong.getElementsByClassName('biao-1')[0];
    let biao2=danpin_zong.getElementsByClassName('biao-2')[0];
    let danpin_box=danpin_zong.getElementsByClassName('danpin-box')[0];
    let num_dp=0;
    let danpin_time=setInterval(dpTime, 4000);
    function dpTime(){
        if (num_dp==0) {
            num_dp=1;
           danpin_box.style.transform=`translateX(-${1240*num_dp}px)`; 
       }else if (num_dp==1) {
           num_dp=0;
           danpin_box.style.transform=`translateX(-${1240*num_dp}px)`; 
       }
    }
    biao2.onclick=function(){
        if (num_dp==1) {
            return;
        }
        if (num_dp==0) {
            biao2.className='biao-2 iconfont icon-zuoyoujiantou2';
            biao1.className='biao-1 iconfont icon-zuoyoujiantou dis_danpin';
        }
        num_dp++;
        danpin_box.style.transform=`translateX(-${1240*num_dp}px)`;
    }
    biao1.onclick=function(){
        if (num_dp==0) {
            return;
        }
        if (num_dp==1) {
             biao1.className='biao-1 iconfont icon-zuoyoujiantou';
            biao2.className='biao-2 iconfont icon-zuoyoujiantou2 dis_danpin';
        }
        num_dp--;
        danpin_box.style.transform=`translateX(-${1240*num_dp}px)`;
    }
    danpin_box.onmouseover=function(){
        clearInterval(danpin_time);
    }
    danpin_box.onmouseout=function(){
        clearInterval(danpin_time);
        danpin_time=setInterval(dpTime, 4000);
    }
}