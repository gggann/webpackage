// const a=new URL(window.location.href)
// const [b]=a.searchParams.keys();
// document.title=[b]

// const a=decodeURI(window.location.search)
// const b=a.replace("?","")
// console.log(b)
function getSubstring(a, b, c, d) {
    var e, f, g;
    return void 0 == a || null == a || "" == a ? "" : (e = a.indexOf(b), e >= 0 ? (f = a.indexOf(c, e + b.length), g = a.substring(e + b.length, f), d && (g = g.replace(/<[^<>]+>/g, "")), $.trim(g)) : "")
}
const obj = decodeURI(window.location.search)
if (obj == "") {
    b = undefined
} else {
    b = obj.replace("?", "")
}

//console.log(b)

function setHighLight(dealData, dataMap, replaceKeyword) {
    try {
        if (typeof dealData == "string") {
            dealData = replaceSpecialSymbol(dealData.toLowerCase());
            dealData = dealData.replace(replaceKeyword, function (matched) {
                return dataMap.map[matched];
            });
            dealData = unReplaceSpatialSymbol(dealData);
        } else if (typeof dealData == "object" && dealData != null) {
            for (let i = 0; i < dealData.length; i++) {
                dealData[i] = replaceSpecialSymbol(dealData[i].toLowerCase());
                dealData[i] = dealData[i].replace(replaceKeyword, function (matched) {
                    return dataMap.map[matched];
                });
                dealData[i] = unReplaceSpatialSymbol(dealData[i]);
            }
        }
    } catch (ex) {
        console.log(ex);
    }

    return dealData;
}

function replaceSpecialSymbol(str) {
    let re = "";
    let dst = "";

    re = new RegExp('\\*', 'gi');
    dst = "^~";
    str = str.replace(re, dst);

    re = new RegExp('\\+', 'gi');
    dst = "^!";
    str = str.replace(re, dst);

    re = new RegExp('\\$', 'gi');
    dst = "^@";
    str = str.replace(re, dst);

    re = new RegExp('\\|', 'gi');
    dst = "^#";
    str = str.replace(re, dst);

    re = new RegExp('\\?', 'gi');
    dst = "^^";
    str = str.replace(re, dst);

    re = new RegExp('\\^\\$', 'gi');
    dst = "-";
    str = str.replace(re, dst);

    return str;
}

function unReplaceSpatialSymbol(str) {
    let re = "";
    let dst = "";

    re = new RegExp('\\^\\~', 'gi');
    dst = "*";
    str = str.replace(re, dst);

    re = new RegExp('\\^\\!', 'gi');
    dst = "+";
    str = str.replace(re, dst);

    re = new RegExp('\\^\\@', 'gi');
    dst = "$";
    str = str.replace(re, dst);

    re = new RegExp('\\^\\#', 'gi');
    dst = "|";
    str = str.replace(re, dst);

    re = new RegExp('\\^\\^', 'gi');
    dst = "?";
    str = str.replace(re, dst);

    re = new RegExp('\\^\\$', 'gi');
    dst = "-";
    str = str.replace(re, dst);

    return str;
}


Map = function () {
    this.map = new Object();
};
Map.prototype = {
    put: function (key, value) {
        this.map[key] = value;
    },
    get: function (key) {
        return this.map[key];
    },
    containsKey: function (key) {
        return key in this.map;
    },
    containsValue: function (value) {
        for (var prop in this.map) {
            if (this.map[prop] == value) return true;
        }
        return false;
    },
    isEmpty: function (key) {
        return (this.size() == 0);
    },
    clear: function () {
        for (var prop in this.map) {
            delete this.map[prop];
        }
    },
    remove: function (key) {
        delete this.map[key];
    },
    keys: function () {
        var keys = new Array();
        for (var prop in this.map) {
            keys.push(prop);
        }
        return keys;
    },
    values: function () {
        var values = new Array();
        for (var prop in this.map) {
            values.push(this.map[prop]);
        }
        return values;
    },
    size: function () {
        var count = 0;
        for (var prop in this.map) {
            count++;
        }
        return count;
    }
};




///////////////////////////////////////////////


var 토글 = 1

function hotkey() {
    var a = window.event.keyCode;
    console.log(a)
    if (a == 39) {

        document.querySelector("#카테통계특가 > div:nth-child(2) > button:nth-child(5)").click()

            // window.close()
            ;
    } else if ((a == 35)) { //->

    } else if ((a == 39)) { //->
        document.querySelector("#keylength1").click()
        // document.querySelector("#블랙리스트").click()

    } else if (a == 38) { //上
        // document.querySelector("#텍스트 > button:nth-child(3)").click()
        // document.querySelector("#텍스트 > a").click()
        document.querySelector("input[name='love6'").click()
        //    document.querySelector("#미포함").click()


    } else if (a == 37) { //<--
        // document.querySelector("#텍스트 > a").click()
        //document.querySelector("#keylength2").click()
        document.querySelector("#spaceclose").click()
    } else if (a == 40) { //<--
        show();
    } else if (a == 36) { //<--
        document.querySelector("#localsave").click()
    } else if (a == 46) { //<--
        window.close()
        console.log('windowclose')
    } else if (a == 121) { //<--
        document.querySelector("#pricebutton").click()
    }
}
document.onkeydown = hotkey;

function show() {

    if (토글 == 1) {
        $('#정보').css('display', 'block');
        토글 = 0
    } else if (토글 == 0) {
        // $('#정보').hide()
        $('#정보').css('display', 'none');
        토글 = 1
    }
}

function Command(v) {
    let oInput = document.createElement('textarea');
    oInput.innerHTML = v.textContent;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand("Copy");
    oInput.style.display = 'none'
    document.body.removeChild(oInput);
}

function Commandtext(v) {
    console.log(v)
    let oInput = document.createElement('textarea');
    oInput.innerHTML = v;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand("Copy");
    oInput.style.display = 'none'
    document.body.removeChild(oInput);
}

function Commandid(v) {
    console.log(v)
    let oInput = document.createElement('textarea');
    oInput.innerHTML = v;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand("Copy");
    oInput.style.display = 'none'
    document.body.removeChild(oInput);

    if (document.querySelector("#dealname").value == "") {
        document.querySelector("#dealname").value = v;

    } else {
        document.querySelector("#dealname").value = document.querySelector("#dealname").value + "\r\n" + v
    }

}

// $(document).on("dblclick", "#기본정보", function () {
//     t=$(this).find('#딜번호').text()
//     console.log(t)
//     tt=$(this).find('#딜이름가격').text()
//     console.log(tt)
//    Command(t+'\t'+tt);
//    return !1;
// });

// $(document).on("click", "#기본정보", function () {
//     t=$(this).find('#딜번호').text()
//     console.log(t)
//    Command(t);
//    return !1;
// });



Vue.component('ann', {
    props: ['message', 'checkboxmessage', 'alljson'],
    template: `
    <div>

    <div id="총디브" v-on="idcate"></div>

    <!-- @ -->

    <div id="부스팅점수" v-for="(v,i) in boostCategories" :key="i">
      {{setalljson(v.categoryCd)+" "}}<span style="color:red">{{v.score}}</span></div>
    <div id="카테통계특가">
      <div id="부스팅점수" v-for="(v,i) in boostCategories1" :key="i">{{setalljson(v.categoryCd)+" "}}<span
          style="color:blue">{{v.score}}</span></div>

      <!-- @ -->

      <div id="카테통계특가">

        <div id="카테상세">
          <div v-for="(v,i) in getWordCnt(cate통계)" :key="i">{{i+" >  "+v}}</div>
        </div>
        <div id="카테코드">
          <div v-for="(v,i) in getWordCnt(cate통계코드)" :key="i"><span
              @click="Commandid(parseInt(i.slice(0,8)))">{{i.slice(0,8)}}</span><span
              @click="InputCateCd=i.slice(10,17);radio='카테고리추출'">{{i.slice(10,33)+" >  "+v}}</span></div>
        </div>


        <div>
          <div v-for="(v,i) in excludedCategoryIds" :key="i" style="color:red">{{setalljson(v)}}</div>
        </div>

        <div id="상품수" @click="Commandtext(message)">{{message+":"+info1.length}}</div>
        <hr>
      </div>

      <div>
        <input id="검색어" type="text" :placeholder="message" v-model="keyword" style="left:0%">

        <input type="radio" name="love1" v-model="radio" value="dispNm">딜명포함
        <input type="radio" name="love2" v-model="radio" value="seller">셀러
        <input type="radio" name="love6" v-model="radio" value="디폴트">디폴트
        <input type="radio" name="love3" v-model="radio" value="unclu" id="미포함">미포함
        <button id="keylength1" @click="keywordlength++">+</button> <button id="keylength2"
          @click="keywordlength--">-</button>
        <input type="range" v-model="keywordlength" style="left:0%">{{keywordlength}}
        <input type="radio" name="love4" v-model="radio" value="twoword">2글자 {{kw1}} {{kw2}}
        <input type="radio" id="블랙리스트" name="love5" v-model="radio" value="ck1">{{checklisttext1}}
        <input type="radio" id="블랙리스트2" name="love7" v-model="radio" value="ck2">{{checklisttext2}}

        <button @click="idididcatalog">아이디추출</button>
        <button id="show-modal" @click="showModal = true">{{"all:"+dealscount}}</button>

        <input id="카테고리명" type="text" placeholder="" v-model="InputCateCd" style="left:0%">
        <input id="카테고리추출" type="radio" name="love8" v-model="radio" value="카테고리추출">카테
        <span v-for="(vtoken,i) in token[0]" :key="i"> / {{vtoken.token}}</span>
        <button id="pricebutton" @click="upprice"><span v-if="uppriceif">가격↓</span><span v-else>가격↑</span></button>
        <button @click="hidecatalog"><span v-if="catalogif">카탈숨기</span><span v-else>카탈보기</span></button>
        <button @click="catalonly"><span v-if="catalogonlyif">카탈만보기</span><span v-else>원본보기</span></button>
        <modal :modalstorename="dealliststorename" :modalhtml="deallisthtml" :modalimg="deallistimg" v-if="showModal"
          @close="showModal = false">

        </modal>
        <button @click="idcate2">⑥</button>
        <button @click="idcate3">③</button>
        <button @click="alldeal" id="딜리스트">✔</button>
        <input id="localkwdlength" type="text" :placeholder="10" v-model="localkwdlength" style="left:0%;width:32px">
        <button id="localsave" @click="localStoragesave">🎨</button>
      </div>

      <div v-if="force">네이버는<span style="color:red">{{force}}</span>로 검색</div>
      <div v-if="errata">네이버는<span style="color:red">{{errata}}</span>로 검색</div>

      <div id="dealtype" :class="v.link.type" v-for="(v,i) in info1" :key="i">

        <span class="index">{{dealindex[i]}}</span> <span id="브랜드"
          v-html="highlightData(v.administrator.product.brandKeyword)"></span>
        <a :href='"https://front.wemakeprice.com/" + stype(v.link.type)+"/"+v.link.value' target="_blank"><img
            class="card-img-top" :src=v.originImgUrl alt="Card image cap" :style="'opacity:'+v.link.check"></a>


        <div id="lastdeal" v-if="i==info1.length-1"></div>
        <div id="정보">
          <div id="기본정보">

            <span id="딜번호" @click="Commandid(v.link.value)">{{v.link.value}}</span>
            <span id="딜타입">{{" "+v.administrator.product.linkType}}</span>
            <span id="카탈로그번호" v-if="v.administrator.product.catalogNo"
              @click="Commandid(v.administrator.product.catalogNo)">{{" "+v.administrator.product.catalogNo}}</span>
            <div>
              <div id="딜이름가격"
                @click="Commandtext(v.link.value+'\t'+v.dispNm+'\t'+'CATE제외'+'\t'+v.administrator.product.physicsCategoryIds.lcateNm)"
                @dblclick="Commandtext(v.link.value+'\t'+v.dispNm)"
                v-html="highlightData(v.dispNm)+' : '+v.salePrice+' 원'"></div>

            </div>
            <button v-if="v.link.type=='DEAL'" @click='deallist(v.link.value)'>🐛</button>
            <button v-else @click='deallist2(v.link.value)'>👄</button>
            <div id="상세정보">

              <div id="카테고리" v-if="v.administrator.product.physicsCategoryIds">
                <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.lcateCd)"
                  onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.lcateNm}}</span> >
                <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.mcateCd)"
                  onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.mcateNm}}</span> >
                <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.scateCd)"
                  onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.scateNm}}</span> >
                <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.dcateCd)"
                  onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.dcateNm}}</span>
                <span style="color:rgb(90, 36, 36);font-size:15px"
                  v-html="highlightData(v.administrator.product.catalogCategoryKeyword)"></span>
              </div>
              <div id="내부키워드" v-html="highlightData(v.administrator.product.innerKeyword)"></div>
              <div id="딜내부키워드" v-html="highlightData(v.administrator.product.dealInnerKeyword)"></div>
              <div id="파트너정보" @dblclick='Commandtext("seller:"+v.administrator.product.partnerId+"&"+message)'>
                {{v.administrator.product.partnerName}}{{" seller:"+v.administrator.product.partnerId}}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      <!-- @@@@@@@@@@@@@@@ -->
     
      <div id="삼팔선" v-if="info2.length>0">-------------------------------</div>

      <!-- @@@@@@@@@@@@@@@ -->
      <div id="checkarea">
 <div id="dealtype" :class="v.link.type" v-for="(v,i) in info2" :key="i">

 <span class="index">{{dealindex[i]}}</span> <span id="브랜드"
   v-html="highlightData(v.administrator.product.brandKeyword)"></span>
 <a :href='"https://front.wemakeprice.com/" + stype(v.link.type)+"/"+v.link.value' target="_blank"><img
     class="card-img-top" :src=v.originImgUrl alt="Card image cap" :style="'opacity:'+v.link.check"></a>


 <div id="lastdeal" v-if="i==info2.length-1"></div>
 <div id="정보">
   <div id="기본정보">

     <span id="딜번호" @click="Commandid(v.link.value)">{{v.link.value}}</span>
     <span id="딜타입">{{" "+v.administrator.product.linkType}}</span>
     <span id="카탈로그번호" v-if="v.administrator.product.catalogNo"
       @click="Commandid(v.administrator.product.catalogNo)">{{" "+v.administrator.product.catalogNo}}</span>
     <div>
       <div id="딜이름가격"
         @click="Commandtext(v.link.value+'\t'+v.dispNm+'\t'+'CATE제외'+'\t'+v.administrator.product.physicsCategoryIds.lcateNm)"
         @dblclick="Commandtext(v.link.value+'\t'+v.dispNm)"
         v-html="highlightData(v.dispNm)+' : '+v.salePrice+' 원'"></div>

     </div>
     <button v-if="v.link.type=='DEAL'" @click='deallist(v.link.value)'>🐛</button>
     <button v-else @click='deallist2(v.link.value)'>👄</button>
     <div id="상세정보">

       <div id="카테고리" v-if="v.administrator.product.physicsCategoryIds">
         <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.lcateCd)"
           onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.lcateNm}}</span> >
         <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.mcateCd)"
           onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.mcateNm}}</span> >
         <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.scateCd)"
           onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.scateNm}}</span> >
         <span @dblclick="Commandtext(v.administrator.product.physicsCategoryIds.dcateCd)"
           onclick="Command(this)">{{v.administrator.product.physicsCategoryIds.dcateNm}}</span>
         <span style="color:rgb(90, 36, 36);font-size:15px"
           v-html="highlightData(v.administrator.product.catalogCategoryKeyword)"></span>
       </div>
       <div id="내부키워드" v-html="highlightData(v.administrator.product.innerKeyword)"></div>
       <div id="딜내부키워드" v-html="highlightData(v.administrator.product.dealInnerKeyword)"></div>
       <div id="파트너정보" @dblclick='Commandtext("seller:"+v.administrator.product.partnerId+"&"+message)'>
         {{v.administrator.product.partnerName}}{{" seller:"+v.administrator.product.partnerId}}</div>
     </div>
   </div>
   <div id="lastdeal" v-if="i==info2.length-1"></div>
 
   </div>
 </div>
</div>
  
   `,
    data() {
        return {
            kw: "",
            InputCateCd: "",
            keywordlength: 0,
            radio1: "",
            radio: "unclu",
            keyword: this.message,
            dealid: [],
            info: [],
            areaid: this.message,
            classid: "cateinfo",
            dealurl: [],
            cate통계: [],
            cate통계코드: [],
            checkradio: this.checkboxmessage,
            checkcatalog:this.checkcatalog,
            dealindex: [],
            checkif: true,
            boostCategories: [],
            boostCategories1: [],
            alljson: this.alljson,
            message: this.message,
            token: [],
            an: [],
            showModal: false,
            hightLight: [],
            uppriceif: 0,
            catalogif: 1,
            catalogonlyif: 1,
            dealscount: "",
            excludedCategoryIds: [],
            deallisthtml: [],
            deallistimg: [],
            dealliststorename: "",
            errata: "",
            force: "",
            dealvalue: [],
            checklisttext1: "..ing",
            checklisttext2: "..ing",
            localkwdlength: 60,
            localjsonparsekeyword1: "",
            localjsonparsekeyword2: "",
            //dealorone:true
        }
    },
    methods: {
        async alldeal() {

            var that = this
            async function an() {
                for (i of that.info)
                    if (i.link.type == 'DEAL') {
                        that.deallistall(i)
                    }
            }
            await an()
            this.checklisttext1 = "🟢"
            this.radio = "ck1"
        },
        async alldeal2() {
            var that = this
            async function an() {
                for (i of that.info)
                    if (i.link.type == 'DEAL') {
                        that.deallistall2(i)
                    }
            }
            await an()
            this.checklisttext2 = "🟣"
            this.radio = "ck2"
        },
        async deallistall(vv) {
            var that = this
            var aaaa = ""
            await axios
                .get('/deal/' + vv.link.value)
                .then(res => {
                    let abb = `GV.set('initialData', `
                    let abc = `GV.set('assistData'`
                    let checkdealtype = eval(getSubstring(res.data, abb, abc).replace(`'));`, `')`))


                    if (checkdealtype.prodSimpleList) {
                        for (i of checkdealtype.prodSimpleList) {
                            aaaa = aaaa + (i.prodNm)
                        }
                    } else if (checkdealtype.dealProdGroups.groups) {
                        for (i of checkdealtype.dealProdGroups.groups) {
                            aaaa = aaaa + (i.groupProds[0].prodNm)
                        }
                    }

                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });

            if (aaaa.indexOf(document.querySelector("#검색어").value.toLowerCase()) != -1) {
                //console.log("存在")
                return true
            } else {
                this.dealvalue.push(vv.link.value)
                //console.log("没有")
                //console.log(this.dealvalue)
                return false
            }
        },
        async deallistall2(vv) {
            var that = this
            var aaaa = ""
            await axios
                .get('/deal/' + vv.link.value)
                .then(res => {
                    let abb = `GV.set('initialData', `
                    let abc = `GV.set('assistData'`
                    let checkdealtype = eval(getSubstring(res.data, abb, abc).replace(`'));`, `')`))

                    if (checkdealtype.prodSimpleList) {
                        for (i of checkdealtype.prodSimpleList) {
                            aaaa = aaaa + (i.prodNm)
                        }
                    } else if (checkdealtype.dealProdGroups.groups) {
                        for (i of checkdealtype.dealProdGroups.groups) {
                            aaaa = aaaa + (i.groupProds[0].prodNm)
                        }
                    }

                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            console.log(aaaa.indexOf(this.kw1), aaaa.indexOf(this.kw2), this.kw1, this.kw2)
            if (aaaa.indexOf(this.kw1) > -1 && aaaa.indexOf(this.kw2) > -1) {
                //console.log("存在")
                return true
            } else {
                this.dealvalue.push(vv.link.value)
                //console.log("没有")
                //console.log(this.dealvalue)
                return false
            }
        },
        async navercate() {
            this.errata = "";
            this.force = "";
            var that = this
            await axios
                .get(
                    "/api/search/all?sort=rel&pagingIndex=" +
                    that.page +
                    "&pagingSize=80&viewType=buttonst&productSet=total&debuttonveryFee=&debuttonveryTypeValue=&frm=NVSHATC&query=" +
                    encodeURIComponent(that.message) +
                    //that.message+
                    "&origQuery=" +
                    encodeURIComponent(that.message) +
                    "&iq=&eq=&xq="
                )

                .then(res => {
                    that.errata = res.data.queryValidateResult.errata
                    that.force = res.data.queryValidateResult.force

                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });


        },
        async deallist(VV) {
            this.deallisthtml = [];
            this.deallistimg = []
            this.dealliststorename = "DEAL"
            await axios
                .get('/deal/' + VV)
                .then(res => {
                    let abb = `GV.set('initialData', `
                    let abc = `GV.set('assistData'`
                    //this.dealliststorename = $(res.data).find(".store_name").text()
                    let checkdealtype = eval(getSubstring(res.data, abb, abc).replace(`'));`, `')`))
                    if (checkdealtype.prodSimpleList) {
                        for (i of checkdealtype.prodSimpleList) {
                            this.deallisthtml.push(i.prodNm)
                            this.deallistimg.push(`<img src="` + i.mainImg.thumb.imgUrl + `" alt="">`)
                        }
                    } else if (checkdealtype.dealProdGroups.groups) {
                        for (i of checkdealtype.dealProdGroups.groups) {
                            this.deallisthtml.push(i.groupProds[0].prodNm)
                            this.deallistimg.push(`<img src="` + i.groupProds[0].mainImg.thumb.imgUrl + `" alt="">`)
                        }
                    }

                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            document.querySelector("#show-modal").click()
        },
        async deallist2(VV) {
            this.deallisthtml = [];
            this.deallistimg = []
            this.dealliststorename = undefined
            await axios
                .get('/product/' + VV)
                .then(res => {

                    let checkdealtype = $(res.data).find('.deal_detailimg')[0]
                    // let asrc=checkdealtype.querySelectorAll('img[data-lazy-src]')
                    // if (asrc.length != 0) {
                    //     for (let i = 0; i < asrc.length; i++) {
                    //         asrc[i].src = asrc[i].dataset.lazySrc
                    //     }
                    // }
                    this.deallisthtml = checkdealtype.outerHTML.replaceAll('data-lazy-src', 'src')



                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
            document.querySelector("#show-modal").click()
        },

        hidecatalog() {
            if (this.catalogif == 1) {
                $('.CATAL').hide()
                this.catalogif = 0
            } else {
                $('.CATAL').show()
                this.catalogif = 1
            }
        },
        catalonly() {
            console.log(123)
            if (this.catalogonlyif == 1) {
                document.querySelectorAll('#dealtype').forEach(function (x) {
                    if (x.className !== "CATAL") {
                        $(x).hide()
                    }
                })
                this.catalogonlyif = 0
            } else {
                document.querySelectorAll('#dealtype').forEach(function (x) {
                    $(x).show()
                })
                this.catalogonlyif = 1
            }

        },
        upprice: function () {
            this.uppriceif = !this.uppriceif

            if (this.uppriceif == 1) {
                this.info.sort((a, b) => {
                    return a['salePrice'] - b['salePrice']
                })
            } else {
                this.info.sort((a, b) => {
                    return b['salePrice'] - a['salePrice']
                })
            }

        },
        getWordCnt: function (a) {
            return a.reduce(function (prev, next) {
                prev[next] = (prev[next] + 1) || 1;
                return prev;

            }, {});
        },
        stype(v) {

            if (v == 'DEAL') {
                return v = "deal";
            } else {
                return v = "product"
            }
        },
        setalljson: function (v) {
            for (var value1 of app.alljson) {
                if (value1.categoryId === v) {
                    return (value1.categoryNm)
                }
            }
        },

        highlightData: function (value) {
            var that = this
            if (typeof value != "undefined") value = setHighLight(value, that.an, that.hightLight);
            return value;
        },
        idididcatalog: function () { //아이디 추출
            for (let i = 0; i < this.info1.length; i++) {
                if (this.info1[i].administrator.product.catalogNo) {
                    (i !== this.info1.length - 1) ? document.querySelector("#dealname").value = document.querySelector("#dealname").value + this.info1[i].administrator.product.catalogNo + "\n" : document.querySelector("#dealname").value = document.querySelector("#dealname").value + this.info1[i].administrator.product.catalogNo
                } else {
                    (i !== this.info1.length - 1) ? document.querySelector("#dealname").value = document.querySelector("#dealname").value + this.info1[i].link.value + "\n" : document.querySelector("#dealname").value = document.querySelector("#dealname").value + this.info1[i].link.value
                }
            }
        },
        async checklocalstorage() { //검색창에 필터로 쓸 대표키워드 있으면 가져오고 없으면 디폴드값 사용
            let aa = this.message.trim().replace(" ", "")

            if (window.localStorage.getItem(aa) !== null) {
                let bb = JSON.parse(window.localStorage.getItem(aa))
                if (bb.kw2 == undefined) {
                    this.localjsonparsekeyword1 = bb.kw1
                    this.keyword = bb.kw1
                    setTimeout(() => {
                        this.alldeal()
                    }, 7000);
                }
                else {
                    this.localjsonparsekeyword2 = bb.kw2
                    this.keyword = bb.kw1 + " " + bb.kw2
                    setTimeout(() => {
                        this.alldeal2()
                    }, 7000);
                }
                if (bb.length) {
                    this.localkwdlength = bb.length
                }
                console.log(this.localjsonparsekeyword1, this.localjsonparsekeyword2, bb.length)
            }
        },
        localStoragesavemount() {
            // window.localStorage.setItem(`kw1`, this.kw1) //필터용 대표키워드 저장
            var localjson = {}
            let check = window.localStorage.getItem(this.message.trim().replace(" ", ""))
            console.log(check)
            if (check == undefined) {
                if (this.kw2 !== undefined) {
                    localjson = {
                        'kw1': this.kw1,
                        'kw2': this.kw2
                    }
                } else if (this.kw2 == undefined) {
                    localjson = {
                        'kw1': this.kw1,
                        'length': this.localkwdlength
                    }
                }

                let aa = this.message.trim().replace(" ", "")
                window.localStorage.setItem(aa, JSON.stringify(localjson))
            }
        },
        localStoragesave() {
            // window.localStorage.setItem(`kw1`, this.kw1) //필터용 대표키워드 저장
            var localjson = {}
            if (this.kw2 !== undefined) {
                localjson = {
                    'kw1': this.kw1,
                    'kw2': this.kw2
                }
            } else if (this.kw2 == undefined) {
                localjson = {
                    'kw1': this.kw1,
                    'length': this.localkwdlength
                }
            }

            let aa = this.message.trim().replace(" ", "")
            window.localStorage.setItem(aa, JSON.stringify(localjson))
        },
        idcate3() {
            this.info = this.info.slice(0, 90)
            this.cate통계 = this.cate통계.slice(0, 90)
            this.cate통계코드 = this.cate통계코드.slice(0, 90)

        },
        idcate2: async function () {

            if (this.checkif) {
                this.checkif = true
                var that = this
                let urlmain =
                    "/search?abTestKey=84&abTestType=&adminSearch=%7B%22field%22:%5B%22searchDispNm%22,%22innerKeyword%22,%22brandKeyword%22,%22specialPriceTag.specialPriceNm%22,%22bookIsbn%22,%22bookTitle%22,%22bookAuthor%22,%22bookPublisher%22,%22catalogOptionSearch%22,%22catalogCategoryKeyword%22,%22catalogModelName%22,%22dealInnerKeyword%22%5D,%22weight%22:%5B%7B%22field%22:%22searchDispNm%22,%22fieldName%22:%22%ED%83%80%EC%9D%B4%ED%8B%80%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22innerKeyword%22,%22fieldName%22:%22%EB%82%B4%EB%B6%80%ED%83%80%EC%9D%B4%ED%8B%80%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:1%7D,%7B%22field%22:%22brandKeyword%22,%22fieldName%22:%22%EB%B8%8C%EB%9E%9C%EB%93%9C%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22physicsCategoryIds%22,%22fieldName%22:%22%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22specialPriceTag.specialPriceNm%22,%22fieldName%22:%22%ED%8A%B9%EA%B0%80%EC%9C%A0%ED%98%95%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookTitle%22,%22fieldName%22:%22%EB%8F%84%EC%84%9C%EB%AA%85%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookIsbn%22,%22fieldName%22:%22ISBN%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookAuthor%22,%22fieldName%22:%22%EC%A0%80%EC%9E%90%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookPublisher%22,%22fieldName%22:%22%EC%B6%9C%ED%8C%90%EC%82%AC%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22catalogCategoryKeyword%22,%22fieldName%22:%22%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8+%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC+%ED%82%A4%EC%9B%8C%EB%93%9C%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:3%7D,%7B%22field%22:%22dealInnerKeyword%22,%22fieldName%22:%22%EB%94%9C+%EB%82%B4%EB%B6%80%ED%82%A4%EC%9B%8C%EB%93%9C%22,%22useYn%22:true,%22fullMatchScore%22:1,%22partMatchScore%22:0%7D%5D,%22normalization%22:%5B%7B%22section%22:%22search%22,%22sectionName%22:%22%EA%B2%80%EC%83%89+%EC%A0%95%ED%99%95%EB%8F%84%22,%22normalization%22:15%7D,%7B%22section%22:%22finalScore%22,%22sectionName%22:%22%EC%83%81%ED%92%88+%EC%9D%B8%EA%B8%B0%EB%8F%84%22,%22normalization%22:4.5%7D,%7B%22section%22:%22keywordPopularityScore%22,%22sectionName%22:%22%ED%82%A4%EC%9B%8C%EB%93%9C+%EC%9D%B8%EA%B8%B0%EB%8F%84%22,%22normalization%22:3%7D,%7B%22section%22:%22boostingCategory%22,%22sectionName%22:%22%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC+%EC%A0%81%ED%95%A9%EB%8F%84%22,%22normalization%22:3%7D,%7B%22section%22:%22boostingPartner%22,%22sectionName%22:%22%ED%8C%8C%ED%8A%B8%EB%84%88+%EC%A0%81%ED%95%A9%EB%8F%84%22,%22normalization%22:10%7D,%7B%22section%22:%22boostingCatalog%22,%22sectionName%22:%22%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8%22,%22normalization%22:40%7D,%7B%22section%22:%22boostingSearchSpecialPrice%22,%22sectionName%22:%22%EA%B2%80%EC%83%89%ED%8A%B9%EA%B0%80%22,%22normalization%22:30%7D%5D%7D&attribute=&attributeType=&brand=&catalogAttrs=&departmentStore=&isCatalog=true&isCatalogOnlyEp=&isFastShip=N&isFreeShip=N&isOverseasPurchase=A&isPopularCategory=Y&isTodayShip=N&isUseKeywordInfo=true&keyword="
                //let urlpage = "&os=android&page=1&perPage=30&period=monthly&price=&review=&searchDest=TAB_RANK&selectTab=rank&sort=weight&testScript=&testTarget=&ueKeywordInfo=Y"
                let urlpage = "&os=android&page=1&perPage=30&period=monthly&price=&review=&searchDest=TAB_SPECIAL&selectTab=special&sort=weight&testScript=&testTarget=&ueKeywordInfo=Y"
                //console.log(that.checkradio)
                for (let page = 4; page < 7; page++) {
                    await axios
                        .get(urlmain + encodeURIComponent(that.message) + "&os=android&page=" + page + that.checkradio)
                        .then(res => {
                            if (page == 1) {
                                that.dealscount = res.data.dㅊata.searchInfo.displayCount
                                that.token = [...that.token, ...res.data.analyzeResult.engineTokens]
                                //console.log(res.data.analyzeResult.engineToken)
                                that.an = new Map();


                                if (typeof res.data.analyzeResult != "undefined" && res.data.analyzeResult.apiTokens) {
                                    res.data.analyzeResult.apiTokens.forEach((analyzed) => {
                                        that.an.put(analyzed.token, '<span style="font-weight: bold; color: red;' +
                                            'background-color: lightgoldenrodyellow;">' + analyzed.token + '</span>');
                                        that.hightLight = new RegExp(Object.keys(that.an.map).join("|"), "gi");

                                        console.log(that.hightLight)
                                    });
                                }

                            }

                            that.info = [...that.info, ...res.data.data.deals]

                        })
                        .catch(function (error) { // 请求失败处理
                            console.log(error);
                        });
                }

                for (let i = 90; i < that.info.length; i++) {
                    that.dealindex = [...that.dealindex, i + 1]
                    if (that.info[i].link.type == 'DEAL') {
                        that.dealurl.push("https://front.wemakeprice.com/deal/" + that.info[i].link.value)

                    } else if (that.info[i].link.type == 'PROD') {
                        if (that.info[i].administrator.product.catalogNo > 1) {
                            that.dealurl.push("https://front.wemakeprice.com/product/" + that.info[i].link.value)
                            that.info[i].link.type = "CATAL"
                        } else {
                            that.dealurl.push("https://front.wemakeprice.com/product/" + that.info[i].link.value)
                        }

                    }

                    that.cate통계 = [...that.cate통계, that.info[i].administrator.product.physicsCategoryIds.lcateNm + " > " + that.info[i].administrator.product.physicsCategoryIds.mcateNm + " > " + that.info[i].administrator.product.physicsCategoryIds.scateNm + " > " + that.info[i].administrator.product.physicsCategoryIds.dcateNm]
                    that.cate통계코드 = [...that.cate통계코드, that.info[i].administrator.product.physicsCategoryIds.lcateCd + " > " + that.info[i].administrator.product.physicsCategoryIds.lcateNm]
                }
            }
        },
    },
    computed: {
        idcate: async function () {
            this.info = [];
            this.boostCategories = [];
            this.boostCategories1 = [];
            this.dealindex = [];
            this.cate통계 = [];
            this.cate통계코드 = [];
            this.dealurl = [];
            if (this.checkif) {
                this.checkif = true
                var that = this
                let urlmain =
                    "/search?abTestKey=84&abTestType=&adminSearch=%7B%22field%22:%5B%22searchDispNm%22,%22innerKeyword%22,%22brandKeyword%22,%22specialPriceTag.specialPriceNm%22,%22bookIsbn%22,%22bookTitle%22,%22bookAuthor%22,%22bookPublisher%22,%22catalogOptionSearch%22,%22catalogCategoryKeyword%22,%22catalogModelName%22,%22dealInnerKeyword%22%5D,%22weight%22:%5B%7B%22field%22:%22searchDispNm%22,%22fieldName%22:%22%ED%83%80%EC%9D%B4%ED%8B%80%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22innerKeyword%22,%22fieldName%22:%22%EB%82%B4%EB%B6%80%ED%83%80%EC%9D%B4%ED%8B%80%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:1%7D,%7B%22field%22:%22brandKeyword%22,%22fieldName%22:%22%EB%B8%8C%EB%9E%9C%EB%93%9C%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22physicsCategoryIds%22,%22fieldName%22:%22%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22specialPriceTag.specialPriceNm%22,%22fieldName%22:%22%ED%8A%B9%EA%B0%80%EC%9C%A0%ED%98%95%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookTitle%22,%22fieldName%22:%22%EB%8F%84%EC%84%9C%EB%AA%85%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookIsbn%22,%22fieldName%22:%22ISBN%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookAuthor%22,%22fieldName%22:%22%EC%A0%80%EC%9E%90%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22bookPublisher%22,%22fieldName%22:%22%EC%B6%9C%ED%8C%90%EC%82%AC%22,%22useYn%22:true,%22fullMatchScore%22:0,%22partMatchScore%22:5%7D,%7B%22field%22:%22catalogCategoryKeyword%22,%22fieldName%22:%22%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8+%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC+%ED%82%A4%EC%9B%8C%EB%93%9C%22,%22useYn%22:false,%22fullMatchScore%22:0,%22partMatchScore%22:3%7D,%7B%22field%22:%22dealInnerKeyword%22,%22fieldName%22:%22%EB%94%9C+%EB%82%B4%EB%B6%80%ED%82%A4%EC%9B%8C%EB%93%9C%22,%22useYn%22:true,%22fullMatchScore%22:1,%22partMatchScore%22:0%7D%5D,%22normalization%22:%5B%7B%22section%22:%22search%22,%22sectionName%22:%22%EA%B2%80%EC%83%89+%EC%A0%95%ED%99%95%EB%8F%84%22,%22normalization%22:15%7D,%7B%22section%22:%22finalScore%22,%22sectionName%22:%22%EC%83%81%ED%92%88+%EC%9D%B8%EA%B8%B0%EB%8F%84%22,%22normalization%22:4.5%7D,%7B%22section%22:%22keywordPopularityScore%22,%22sectionName%22:%22%ED%82%A4%EC%9B%8C%EB%93%9C+%EC%9D%B8%EA%B8%B0%EB%8F%84%22,%22normalization%22:3%7D,%7B%22section%22:%22boostingCategory%22,%22sectionName%22:%22%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC+%EC%A0%81%ED%95%A9%EB%8F%84%22,%22normalization%22:3%7D,%7B%22section%22:%22boostingPartner%22,%22sectionName%22:%22%ED%8C%8C%ED%8A%B8%EB%84%88+%EC%A0%81%ED%95%A9%EB%8F%84%22,%22normalization%22:10%7D,%7B%22section%22:%22boostingCatalog%22,%22sectionName%22:%22%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8%22,%22normalization%22:40%7D,%7B%22section%22:%22boostingSearchSpecialPrice%22,%22sectionName%22:%22%EA%B2%80%EC%83%89%ED%8A%B9%EA%B0%80%22,%22normalization%22:30%7D%5D%7D&attribute=&attributeType=&brand=&catalogAttrs=&departmentStore=&isCatalog=false&isCatalogOnlyEp=&isFastShip=N&isFreeShip=N&isOverseasPurchase=A&isPopularCategory=Y&isTodayShip=N&isUseKeywordInfo=true&keyword="
                //let urlpage = "&os=android&page=1&perPage=30&period=monthly&price=&review=&searchDest=TAB_SPECIAL&selectTab=special&sort=weight&testScript=&testTarget=&ueKeywordInfo=Y"
                let urlpage = "&os=android&page=1&perPage=30&period=monthly&price=&review=&searchDest=TAB_SPECIAL&selectTab=special&sort=weight&testScript=&testTarget=&ueKeywordInfo=Y"
                //console.log(that.checkradio)
                for (let page = 1; page < 4; page++) {
                    await axios
                        // .get(urlmain + encodeURIComponent(that.message) + "&os=android&page=" + page + that.checkradio)
                        .get(urlmain + encodeURIComponent(that.message) + "&os=android&page=" + page + that.checkradio)
                        //.get('/search.json')
                        .then(res => {
                            if (page == 1) {
                                that.dealscount = res.data.data.searchInfo.displayCount
                                that.token = [...that.token, ...res.data.analyzeResult.engineTokens]
                                that.excludedCategoryIds = res.data.data.keywordRanking.excludedCategoryIds
                                console.log(res.data.analyzeResult.engineTokens)
                                that.an = new Map();

                                if (typeof res.data.analyzeResult != "undefined" && res.data.analyzeResult.apiTokens) {
                                    res.data.analyzeResult.apiTokens.forEach((analyzed) => {
                                        that.an.put(analyzed.token, '<span style="font-weight: bold; color: red;' +
                                            'background-color: lightgoldenrodyellow;">' + analyzed.token + '</span>');
                                        that.hightLight = new RegExp(Object.keys(that.an.map).join("|"), "gi");

                                        // console.log(that.an)
                                        // console.log(that.an.map)

                                        console.log(that.hightLight)
                                    });
                                }

                            }
                            that.boostCategories = res.data.data.keywordRanking.boostCategories;
                            that.boostCategories1 = res.data.data.keywordRanking.assignedCategories;
                            that.info = [...that.info, ...res.data.data.deals]
                        })
                        .catch(function (error) { // 请求失败处理
                            console.log(error);
                        });
                }

                for (let i = 0; i < that.info.length; i++) {
                    that.dealindex = [...that.dealindex, i + 1]
                    if (that.info[i].link.type == 'DEAL') {
                        that.dealurl.push("https://front.wemakeprice.com/deal/" + that.info[i].link.value)

                    } else if (that.info[i].link.type == 'PROD') {
                        if (that.info[i].administrator.product.catalogNo > 1) {
                            that.dealurl.push("https://front.wemakeprice.com/product/" + that.info[i].link.value)
                            that.info[i].link.type = "CATAL"
                        } else {
                            that.dealurl.push("https://front.wemakeprice.com/product/" + that.info[i].link.value)
                        }

                    }
                    this.cate통계 = [...this.cate통계, that.info[i].administrator.product.physicsCategoryIds.lcateNm + " > " + that.info[i].administrator.product.physicsCategoryIds.mcateNm + " > " + that.info[i].administrator.product.physicsCategoryIds.scateNm + " > " + that.info[i].administrator.product.physicsCategoryIds.dcateNm]
                    this.cate통계코드 = [...this.cate통계코드, that.info[i].administrator.product.physicsCategoryIds.lcateCd + " > " + that.info[i].administrator.product.physicsCategoryIds.lcateNm]
                }
            }

            // setTimeout(() => {
            //     this.localStoragesavemount();
            // }, 1000); 

        },
        info1() {
            if (this.radio == "디폴트") {
                return this.info
                // return this.info.filter((p) => {
                //     return p
                // })
            }
            else if (this.radio == "dispNm") {

                return this.info.filter((p) => {
                    return (p.dispNm.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1) || (p.administrator.product.brandKeyword.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1)
                })
            } else if (this.radio == "seller") {
                return this.info.filter((p) => {
                    return p.administrator.product.partnerName.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
                })
            } else if (this.radio == "unclu") {
                return this.info.filter((p) => {
                    return p.dispNm.substring(0, this.keywordlength).toLowerCase().indexOf(this.keyword.toLowerCase()) == -1
                })
            } else if (this.radio == "카테고리추출") {
                if (isNaN(this.InputCateCd)) {
                    return this.info.filter((p) => {
                        return p.administrator.product.physicsCategoryIds.dcateCd == this.InputCateCd || p.administrator.product.physicsCategoryIds.dcateNm.indexOf(this.InputCateCd) > -1 ||
                            p.administrator.product.physicsCategoryIds.scateCd == this.InputCateCd || p.administrator.product.physicsCategoryIds.scateNm.indexOf(this.InputCateCd) > -1 ||
                            p.administrator.product.physicsCategoryIds.mcateCd == this.InputCateCd || p.administrator.product.physicsCategoryIds.mcateNm.indexOf(this.InputCateCd) > -1 ||
                            p.administrator.product.physicsCategoryIds.lcateCd == this.InputCateCd || p.administrator.product.physicsCategoryIds.lcateNm.indexOf(this.InputCateCd) > -1

                    })
                } else {
                    return this.info.filter((p) => {
                        return p.administrator.product.physicsCategoryIds.dcateCd == this.InputCateCd || p.administrator.product.physicsCategoryIds.scateCd == this.InputCateCd ||
                            p.administrator.product.physicsCategoryIds.mcateCd == this.InputCateCd || p.administrator.product.physicsCategoryIds.lcateCd == this.InputCateCd

                    })
                }
            } else if (this.radio == "twoword" && (this.keyword.split(" ").length == 2)) {
                console.log(this.keyword, this.keyword.split(" ").length)
                return this.info.filter((p) => {
                    return !(p.dispNm.toLowerCase().indexOf(this.kw1.toLowerCase()) > -1 && p.dispNm.toLowerCase().indexOf(this.kw2.toLowerCase()) > -1)
                })
            } else if (this.radio == "ck1") {
                return this.info.filter((p) => {
                    return (this.dealvalue.indexOf(p.link.value) != -1) || (p.link.type !== "DEAL" && p.dispNm.substring(0, this.localkwdlength).toLowerCase().indexOf(this.keyword.toLowerCase()) == -1) 
                })
            } else if (this.radio == "ck2") {
                return this.info.filter((p) => {
                    return this.dealvalue.indexOf(p.link.value) != -1 || (!(p.dispNm.toLowerCase().indexOf(this.kw1.toLowerCase()) > -1 && p.dispNm.toLowerCase().indexOf(this.kw2.toLowerCase()) > -1) && p.link.type !== 'DEAL')
                })
            }
        },
        info2() {
            return this.info.filter(v => {
                return this.info1.every(p => p != v);
            });

        },
        kw1() {
            return this.kw1 = this.keyword.trim().split(/\s+/)[0];
        },
        kw2() {

            return this.kw2 = this.keyword.trim().split(/\s+/)[1];
        },

    },
    mounted() {
        this.navercate();
        setTimeout(() => {
            this.localStoragesavemount();
            this.checklocalstorage()
        }, 3000);
        setTimeout(() => {
            console.log(this.info.length)
            if (this.info.length < 1) {
                window.location.href = "about:blank";
                window.close();
            }

        }, 10000);
    },
    watch: {
        kw2: {
            handler: function () {
                if (this.kw2) {
                    document.querySelector("#블랙리스트2").click()
                    document.querySelector("#localsave").click()
                    console.log('kw2 change', this.kw2)
                } else {
                    document.querySelector("#블랙리스트").click()
                    document.querySelector("#localsave").click()
                }
            },
            deep: true
        },
        kw1: {
            handler: function (a, b) {
                var that = this;
                if (this.kw1 && a !== b) {
                    console.log('kw1 change', this.kw1, a, b)
                }
            },
            deep: true,
        },
        localkwdlength: {
            handler: function () {
                if (this.localkwdlength) {
                    document.querySelector("#localsave").click()
                }
            }
        }
    }
})



/////////////////////////////////////////////////////////////////

Vue.component('aiplus', {
    props: ['message'],
    template: `
    
    <div id="광고" v-on="aicate(message)">
    <hr>
    <div id="일반광고":class="v.link.type" v-for="(v,i) in aiplus" :key="i">
        <span class="index">{{v.tracker.adProductType+":"+dealindexaiplus[i]}}</span>
        <a :href=dealurlaiplus[i] target="_blank"><img class="card-img-top" :src=v.originImgUrl
                alt="Card image cap"></a>

        <div id="정보1">
            <span id="딜번호" @click="Commandid(v.link.value)">{{v.link.value}}</span>
            <span id="딜타입">{{" "+v.link.type}}</span>
            <div id="딜이름가격" @click="Commandtext(v.link.value+'\t'+v.dispNm)">{{v.dispNm+" : "+v.salePrice+" 원"}}
            </div>
            <div id="카테고리">
                <span @dblclick="Commandtext(v.categoryInfo.lcateCode)"
                    onclick="Command(this)">{{v.categoryInfo.lcateName}}</span> 
                <span @dblclick="Commandtext(v.categoryInfo.mcateCode)"
                    onclick="Command(this)">{{v.categoryInfo.mcateName}}</span> 
            </div>

        </div>
    </div>


    <div id="타겟광고" :class="v.link.type" v-for="(v,i) in aitargit" :key="i">

        <span class="index">{{v.tracker.adProductType+":"+dealindexaitargit[i]}}</span>
        <a :href=dealurlaitargit[i] target="_blank"><img class="card-img-top" :src=v.originImgUrl
                alt="Card image cap"></a>
        <div id="정보1">


            <span id="딜번호" @click="Commandid(v.link.value)">{{v.link.value}}</span>
            <span id="딜타입">{{" "+v.link.type}}</span>
            <div id="딜이름가격" @click="Commandtext(v.link.value+'\t'+v.dispNm)">{{v.dispNm+" : "+v.salePrice+" 원"}}
            </div>
            <div id="카테고리">
                <span @dblclick="Commandtext(v.categoryInfo.lcateCode)"
                    onclick="Command(this)">{{v.categoryInfo.lcateName}}</span> 
                <span @dblclick="Commandtext(v.categoryInfo.mcateCode)"
                    onclick="Command(this)">{{v.categoryInfo.mcateName}}</span> 
            </div>
        </div>
    </div>


</div>
   `,
    data() {
        return {
            aiplus: [],
            aitargit: [],
            areaid: this.message,
            dealurlaiplus: [],
            dealurlaitargit: [],
            dealindexaiplus: [],
            dealindexaitargit: [],
            checkif: true,
            aiplus: [],
            aitargit: []
        }
    },
    methods: {
        async aicate(message) {

            // this.aiplus=[];    this.aitargit=[];    this.dealurlaiplus=[];    this.dealurlaitargit=[];  
            if (this.checkif) {
                this.checkif = false
                var that = this
                let urlmain = "https://search.wemakeprice.com/api/wmpsearch/api/v3.0/wmp-search/search.json?searchType=DEFAULT&search_cate=top&keyword="
                let urlpage = "&isRec=1&_service=2&_no=1"
                await axios
                    .get(urlmain + encodeURIComponent(that.message) + urlpage)
                    .then((res) => {
                        if (res.data.data.adAiPlus) {
                            that.aiplus = res.data.data.adAiPlus.data.deals.slice(0, 12);
                            console.log(tha.aiplus)
                        }
                        if (res.data.data.adTargetClick) {
                            that.aitargit = res.data.data.adTargetClick.data.deals;
                            console.log(that.aitargit)
                        }
                        for (let i = 0; i < that.aiplus.length; i++) {
                            that.dealindexaiplus = [...that.dealindexaiplus, i + 1]
                            if (that.aiplus[i].link.type == 'DEAL') {
                                that.dealurlaiplus.push("https://front.wemakeprice.com/deal/" + that.aiplus[i].link.value)

                            } else {
                                that.dealurlaiplus.push("https://front.wemakeprice.com/product/" + that.aiplus[i].link.value)
                            }
                        }
                        for (let i = 0; i < that.aitargit.length; i++) {
                            that.dealindexaitargit = [...that.dealindexaitargit, i + 1]
                            if (that.aitargit[i].link.type == 'DEAL') {
                                that.dealurlaitargit.push("https://front.wemakeprice.com/deal/" + that.aitargit[i].link.value)

                            } else {
                                that.dealurlaitargit.push("https://front.wemakeprice.com/product/" + that.aitargit[i].link.value)
                            }
                        }


                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });

            }



        },

    }

})
// Vue.component('modal', {
//     template: '#modal-template'
//   })
Vue.component('modal', {
    props: ['modalhtml', 'modalimg', 'modalstorename'],
    template: `
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
        <button id="spaceclose" class="modal-default-button" @click="$emit('close')">
        OK
      </button>

        

      <div>
      <slot name="body">
        <div id="modalinput">
          <span style="color:red">{{modalstorename}}</span>
          <input type="text"  v-model="modalkeyword">
          <div v-html="largeimg"></div>
        </div>
      
      <div v-if="modalstorename">
            <div v-for="(v,i) in modalhtml">
            <div v-if="(v.toLowerCase()).indexOf(modalkeyword.toLowerCase())>-1">
            <span v-html="modalimg[i]" @mouseover="changeimg(modalimg[i])"></span>  <span v-html="v"></span>
            </div>
            </div>
      </div>

      <div v-else>
      <div v-html="modalhtml"></div>
      </div>
      </slot>
    </div>

          <div class="modal-footer">
            <slot name="footer">
            
         
            

            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

    `,
    data() {
        return {
            modalkeyword: "",
            largeimg: ""
        }
    },
    methods: {
        changeimg(i) {
            console.log(i)
            this.largeimg = i.replace('thumbnail', 'large')
        },
        hotkeyup() {
            let This = this
            document.onkeydown = function (event) {
                console.log(event.key)
                if (event.key == 'HanjaMode') {
                    This.$emit('close')
                }
            }
        }
    },
    mounted() {
        console.log(this.modalstorename)
        this.hotkeyup()
    }
})

const app = new Vue({
    el: '#app',
    data: {
        com1: ['1', '2'],
        dealid: [],
        info: [],
        urla: b,
        urlb: [],
        // areaid:[],
        classid: "cateinfo",
        dealurl: "",
        cate통계: [],
        cate통계코드: [],
        checkradio: [],
        dealindex: [],
        alljson: [],
        showModal: false,
        deletecount: "",
    },
    methods: {
        복사ID() {
            this.totaldelete()
            Commandtext(document.querySelector("#dealname").value);
            console.log(document.querySelector("#dealname").value.trim().split("\n"))
            document.querySelector("#dealname").value = "";
        },
        totaldelete() {
            this.deletecount = document.querySelector("#dealname").value.trim().split("\n").length
        },
        getalljson: function () {
            var that = this;
            axios.get("./all.json")
                .then(res => {
                    that.alljson = res.data.wmpPhysicalCategory
                })
                .catch(err => {
                    console.error(err);
                })
        },
        idlist: function () {
            this.urlb = (document.querySelector("#dealname").value.trim().split("\n"))
            document.querySelector("#dealname").value = ""
        },
        clear: function () {
            document.querySelector("#dealname").value = "";
            $('#총디브:eq(0)').remove() //删除第一个디브
            $('#총디브:eq(0)').remove()
            //app.areaid.shift()
        },
        clear2: function () {
            $('#총디브:eq(0)').remove() //删除第一个디브

        },
    },
    computed: {
        areaid: {
            get() {
                if (this.urla !== undefined) {
                    return [this.urla]
                } else {
                    return this.urlb
                }

            }
        },

    },
    mounted() {
        this.getalljson()
    },
})

// window.onload = function () {
//      document.querySelector("#특가").click();
//      document.querySelector("#기획").click();
//    // document.querySelector("#추천").click();
//     app.getalljson();

// }
Vue.config.productionTip = false