webpackJsonp([4],{F9sj:function(e,t,a){"use strict";t.a=function(e){return Object(n.a)({url:"/api/v1/test/",method:"get",params:e})};var n=a("vLgD")},GOd3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("F9sj"),i={methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页1: "+e)},showPath:function(e,t){this.dialogVisible=!0},showMap:function(){var e=this;this.$nextTick(function(){e.map?e.map.setCenter(e.mapCenter):e.map=new AMap.Map("mapPath",{zoom:13}),e.map.clearMap(),e.drawUserPath(e.map,e.paths,e.mapCenter,e.endLnglat)})},drawUserPath:function(e,t,a,n,i,l){var o=["red","orange","green","blue","orchid","darkred","darkblue","darkgreen","purple","cadetblue","black"],r=i?o[i%o.length]:"#13ce66";(console.log(i),new AMap.Polyline({path:t,strokeColor:r,strokeOpacity:1,strokeWeight:4,strokeStyle:"solid",strokeDasharray:[10,5]}).setMap(e),l)?(new l({iconLabel:{innerHTML:"始"+i,style:{color:"#fff",fontSize:"40%",marginTop:"2px"}},iconStyle:o[i%o.length],map:e,position:a}),new l({iconLabel:{innerHTML:"末"+i,style:{color:"#fff",fontSize:"40%",marginTop:"2px"}},iconStyle:o[i%o.length],map:e,position:n})):(new AMap.Marker({icon:new AMap.Icon({image:"http://webapi.amap.com/theme/v1.3/images/newpc/poi-1.png",imageOffset:new AMap.Pixel(-334,-180)}),position:a,offset:new AMap.Pixel(-15,-36)}).setMap(e),new AMap.Marker({icon:new AMap.Icon({image:"http://webapi.amap.com/theme/v1.3/images/newpc/poi-1.png",imageOffset:new AMap.Pixel(-334,-136)}),position:n,offset:new AMap.Pixel(-17,-35)}).setMap(e))}},data:function(){return{tableData2:[{id:"i",name:"i",address:"github"}],currentPage4:1,dialogVisible:!1,listLoading:!1,map:null,mapContainer:null,SimpleMarker:null,mapCenter:[],paths:[],polyline:null,startMarker:null,endMarker:null,endLnglat:[],tagActiveName:"list"}},mounted:function(){var e=this;Object(n.a)().then(function(t){if(e.tableData2=[],e.currentPage4=t.current_page,e.pagesize=t.page_size,e.totalcount=t.total_count,"200"===t.status)for(var a in t.results)e.tableData2.push(t.results[a])})}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData2}},[a("el-table-column",{attrs:{prop:"id",label:"userid",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"username",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",[e._v(e._s(t.row.address))])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){e.showPath(t.$index,t.row)}}},[e._v("轨迹")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[10,30,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{height:"400px"},attrs:{id:"mapPath"}})])],1)},staticRenderFns:[]},o=a("VU/8")(i,l,!1,null,null,null);t.default=o.exports}});