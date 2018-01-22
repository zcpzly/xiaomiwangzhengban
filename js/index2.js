$(function () {
    let list=$('.list-box-banner');
    let xuan=$('.xuanxiang');
    list.each(function (index) {
        $(this).mouseover(function () {
            xuan.get(index).style.display='block';
        })
        $(this).mouseout(function () {
            xuan.get(index).style.display='none';
        })
    })

    let list_nav1=$('.list-box-nav1');
    let nav1_xiala=$('.nav1-xiala');
    let nav_center=$('.nav1-center');
    let box_xiala=$('.xiala_box_nav1');
    let range=$('.range');
    nav_center.mouseover(function () {
        nav1_xiala.css('height','230px')
    })
    nav_center.mouseout(function () {
        nav1_xiala.css('height','0px')
    })
    list_nav1.each(function (i) {
        $(this).mouseover(function () {
            list_nav1.each(function (j) {
                box_xiala.get(j).style.opacity='0';
            })
            box_xiala.get(i).style.opacity='1';
        })
    })

    let shopbar=$('.shopbar');
    let xuangou=$('.xuangou');
    shopbar.mouseover(function () {
        xuangou.css('display','block');
    })
    shopbar.mouseout(function () {
        xuangou.css('display','none');
    })

    // banner效果编写
    let banner =$('.banner');
    let banner_list=$('.banner .banner-list');
    let banner_li=$('.banner .banner-list li');
    // 获取小点
    let xiaoyuan=$('.banner .xiaoyuan');
    let circle_li=$('.banner .xiaoyuan li');
    // 获取把手
    let bashou_left=$('.banner .bashou-left');
    let bashou_right=$('.banner .bashou-right');
    let num=0;
    let t=setInterval(fn, 4000);
    let flag1=true;
    bashou_left.click(function () {
        if (flag1) {
            fn1()
        }
        flag1=false;
    })
    bashou_right.click(function () {
        if (flag1) {
            fn();
        }
        flag1=false;
    })
    function fn(){
        num++;
        if (num==banner_li.length) {
            num=0;
        }
        banner_li.each(function (index) {
            $(this).css('opacity','0')
            circle_li.get(index).style.background='#333';
        })
        $(banner_li.get(num)).animate({opacity:1},300,()=>{ flag1=true;})
        circle_li.get(num).style.background='#fff';
    }
    function fn1(){
        num--;
        if (num==-1) {
            num=banner_li.length-1;
        }
        banner_li.each(function (index) {
            $(this).css('opacity','0')
            circle_li.get(index).style.background='#333';
        })
        $(banner_li.get(num)).animate({opacity:1},300,()=>{ flag1=true;})
        circle_li.get(num).style.background='#fff';
    }
    banner.mouseover(function () {
        clearInterval(t);
    })
    banner.mouseout(function () {
        clearInterval(t);
        t=setInterval(fn, 4000);
    })
    circle_li.each(function (i) {
        $(this).click(function () {
            banner_li.get(num).style.opacity='0';
            circle_li.get(num).style.background='#333';
            banner_li.get(i).style.opacity='1';
            circle_li.get(i).style.background='#fff';
            num=i;
        })
    })

    // 底部内容轮播图编写
    function neironglunbo(number) {
        let  neirong=$('.neirong');
        let  mainBox=$('.neirong .main-box').get(number);
        let  hezi=$('.hezi',mainBox);
        let  bashouLeft=$('.bashou-left',mainBox);
        let  bashouRight=$('.bashou-right',mainBox);
        let circleContent=$('.circle-content',mainBox);
        let circle_nei_span=$('span',circleContent);
        let widths=mainBox.offsetWidth;
        let FLAG=true;
        let now=0;
        let next=0;
        bashouLeft.click(function () {
            if (next==hezi.length-1) {
                FLAG=true;
            }
            if (next==0) {
                FLAG=true;
            }
            if (!FLAG) {
                return;
            }
            fnRight();
            FLAG=false;
        })
        bashouRight.click(function () {
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
        })
        circle_nei_span.each(function (i) {
            $(this).click(function () {
                if (!FLAG) {
                    return;
                }
                FLAG=false;
                if(now==i){
                    FLAG=true;
                    return;
                }
                else if(now>i){
                    hezi.get(i).style.left=`-${widths}px`;
                    $(hezi.get(now)).animate({left:widths},()=>{FLAG=true});
                    $(hezi.get(i)).animate({left:0});
                    circle_nei_span.get(now).classList.remove('dot');
                    circle_nei_span.get(i).classList.add('dot');
                    now=next=i;
                }
                else if(now<i){
                    hezi.get(i).style.left=`${widths}px`;
                    $(hezi.get(now)).animate({left:-widths},()=>{FLAG=true});
                    $(hezi.get(i)).animate({left:0});
                    circle_nei_span.get(now).classList.remove('dot');
                    circle_nei_span.get(i).classList.add('dot');
                    now=next=i;
                }
            })
        })
        function fnLeft() {
            next++;
            if (next>hezi.length-1) {
                next=hezi.length-1;
                FLAG=true;
                return;
            }
            hezi.get(next).style.left=`${widths}px`;
            $(hezi.get(now)).animate({left:-widths},()=>{FLAG=true});
            $(hezi.get(next)).animate({left:0});
            circle_nei_span.get(now).classList.remove('dot');
            circle_nei_span.get(next).classList.add('dot');
            now=next;
        }
        function fnRight() {
            next--;
            if (next<0) {
                next=0;
                FLAG=true;
                return;
            }
            hezi.get(next).style.left=`-${widths}px`;
            $(hezi.get(now)).animate({left:widths},()=>{FLAG=true});
            $(hezi.get(next)).animate({left:0});
            circle_nei_span.get(now).classList.remove('dot');
            circle_nei_span.get(next).classList.add('dot');
            now=next;
        }
    }
    neironglunbo(0);
    neironglunbo(1);
    neironglunbo(2);
    neironglunbo(3);
    function sectionAll(Section,number) {
        let zong_ding=$('.zong-ding').get(number);
        let main_right=$('.main-right',zong_ding)
        let section_ll=$(`.${Section}`)
        let header_right=$('.header-right',section_ll)
        let list_a=$('a',header_right)
        list_a.each(function (i) {
            $(this).mouseover(function () {
                list_a.each(function (j) {
                    main_right.get(j).style.display="none";
                    list_a.get(j).className="";
                })
                list_a.get(i).className="aa_tile";
                main_right.get(i).style.display="block";
            })
        })
    }
    sectionAll('jiadian-box',0);
    sectionAll('smart-box',1);
    sectionAll('dapei-box',2);
    sectionAll('peijian-box',3);
    sectionAll('zhoubian-box',4);

//   明星单品开始编写
    let danpin_zong=$('.danpin-zong');
    let biao1=$('.biao-1',danpin_zong)
    let biao2=$('.biao-2',danpin_zong)
    let danpin_box=$('.danpin-box',danpin_zong)
    let num_dp=0;
    let danpin_time=setInterval(dpTime, 4000);
    function dpTime(){
        if (num_dp==0) {
            num_dp=1;
            danpin_box.get(0).style.transform=`translateX(-${1240*num_dp}px)`;
        }else if (num_dp==1) {
            num_dp=0;
            danpin_box.get(0).style.transform=`translateX(-${1240*num_dp}px)`;
        }

    }
    biao2.click(function () {
        if (num_dp==1) {
            return;
        }
        if (num_dp==0) {
            biao2.get(0).className='biao-2 iconfont icon-zuoyoujiantou2';
            biao1.get(0).className='biao-1 iconfont icon-zuoyoujiantou dis_danpin';
        }
        num_dp++;
        danpin_box.get(0).style.transform=`translateX(-${1240*num_dp}px)`;
    })
    biao1.click(function () {
        if (num_dp==0) {
            return;
        }
        if (num_dp==1) {
            biao1.get(0).className='biao-1 iconfont icon-zuoyoujiantou';
            biao2.get(0).className='biao-2 iconfont icon-zuoyoujiantou2 dis_danpin';
        }
        num_dp--;
        danpin_box.get(0).style.transform=`translateX(-${1240*num_dp}px)`;
    })
    danpin_box.mouseover(function () {
        clearInterval(danpin_time);
    })
    danpin_box.mouseout(function () {
        clearInterval(danpin_time);
        danpin_time=setInterval(dpTime, 4000);
    })
})