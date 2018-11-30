(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],l=0,d=[];l<o.length;l++)s=o[l],a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ec1e39f7"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,n[1](s)}a[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,u.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/gitlab-teams/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("bf40");var r=n("2ead"),a=n.n(r),i=n("ce5b"),s=n.n(i),o=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(t){e.$router.push({name:"home"})}}},[n("v-list-tile-action",[n("v-icon",[e._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("\n            Home\n          ")])],1)],1),n("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[e._v("TEAMS")]),n("v-list",e._l(e.teams,function(t){return n("v-list-tile",{key:t.name,attrs:{to:"/team/"+t.name,"active-class":"grey darken-2",avatar:""}},[n("v-list-tile-avatar",[n("v-avatar",{attrs:{size:"36"}},[n("span",{staticClass:"white--text headline"},[e._v(e._s(t.icon||"🦊"))])])],1),n("v-list-tile-title",{domProps:{textContent:e._s(t.name)}})],1)})),n("v-list-tile",{staticClass:"mt-3",on:{click:e.createTeam}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"grey darken-1"}},[e._v("add_circle_outline")])],1),n("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[e._v("Create Team")])],1),n("v-list-tile",{on:{click:e.openSettings}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"grey darken-1"}},[e._v("settings")])],1),n("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[e._v("Settings")])],1)],1)],1),n("v-toolbar",{attrs:{dark:"",flat:"",fixed:"",app:"","clipped-left":"",dense:"",color:"orange darken-4"}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Gitlab Teams")]),n("v-spacer"),"settings"===e.$route.name?n("v-btn",{attrs:{icon:""},on:{click:e.goBack}},[n("v-icon",{attrs:{small:""}},[e._v("clear")])],1):e._e()],1),n("v-content",[n("v-container",{staticClass:"pa-0"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)],1)},c=[],l=(n("7f7f"),n("2ef0")),p=n.n(l),d={data:function(){return{drawer:null}},methods:{openSettings:function(){this.$router.push({name:"settings"})},createTeam:function(){this.$router.push({name:"create-team"})},goBack:function(){this.$router.go(-1)}},computed:{isConfigured:function(){return this.$store.getters.isConfigured},teams:function(){return p.a.orderBy(this.$store.getters.getTeams,[function(e){return e.name.toLowerCase()}],"asc")}},mounted:function(){this.isConfigured||this.openSettings()}},m=d,f=(n("034f"),n("2877")),v=Object(f["a"])(m,u,c,!1,null,null,null);v.options.__file="App.vue";var g=v.exports,h=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.mergeRequests.length?n("merge-requests",{attrs:{"merge-requests":e.mergeRequests}}):e._e()],1)},_=[],q=n("be94"),R=n("2f62"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{"two-line":"",dark:""}},e._l(e.orderedMergeRequests,function(t){return n("div",{key:t.id},[n("merge-request-item",{attrs:{mr:t,pipeline:e.getPipeline(t)}})],1)}))},j=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-tile",{attrs:{avatar:"",href:e.mr.web_url,target:"_blank"}},[n("v-list-tile-avatar",{on:{click:function(t){t.preventDefault(),e.$router.push({name:"user",params:{name:e.mr.author.username}})}}},[n("v-avatar",[n("img",{attrs:{src:e.mr.author.avatar_url}})])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(e.mr.title))]),n("v-list-tile-sub-title",[n("div",{attrs:{id:"subtitle"}},[e.pipeline?n("v-tooltip",{attrs:{bottom:""}},[n("v-icon",{attrs:{slot:"activator",color:e.getPipelineColor()},slot:"activator"},[e._v(e._s(e.getPipelineIcon()))]),n("span",[e._v("Pipeline "+e._s(e.pipeline.status)+" - ")]),"running"===e.pipeline.status?n("span",[e._v("Started "+e._s(e._f("moment")(e.pipeline.updated_at,"calendar")))]):n("span",[e._v("Finished "+e._s(e._f("moment")(e.pipeline.finished_at,"calendar")))])],1):e._e(),e._v("\n        Created "+e._s(e._f("moment")(e.mr.created_at,"calendar"))+" - Updated "+e._s(e._f("moment")(e.mr.updated_at,"calendar"))+"\n      ")],1)])],1),n("v-list-tile-action",[n("div",{attrs:{id:"actions"}},[n("v-badge",{staticClass:"pr-2",attrs:{small:"",overlap:"",left:""}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(e.mr.user_notes_count))]),n("v-icon",[e._v("chat")])],1),n("v-badge",{attrs:{overlap:"",left:""}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(e.mr.upvotes))]),n("v-icon",[e._v("thumb_up")])],1)],1)])],1)},y=[],O={name:"MergeRequestItem",props:{mr:Object,pipeline:Object},methods:{getPipelineColor:function(){var e={pending:"warning",failed:"error",success:"success",running:"primary",canceled:"black"};return e[this.pipeline.status]||"primary"},getPipelineIcon:function(){var e={pending:"pause_circle_outline",failed:"error_outline",success:"check_circle_outline",running:"timelapse",canceled:"highlight_off"};return e[this.pipeline.status]||"help"}}},w=O,T=(n("e505"),Object(f["a"])(w,M,y,!1,null,"53dca0a0",null));T.options.__file="MergeRequestItem.vue";var E=T.exports,P={name:"MergeRequests",props:{mergeRequests:Array},methods:{getPipeline:function(e){return this.$store.getters.getPipeline(e.id)}},computed:{orderedMergeRequests:function(){return p.a.orderBy(this.mergeRequests,"created_at","desc")}},components:{MergeRequestItem:E}},U=P,C=Object(f["a"])(U,k,j,!1,null,null,null);C.options.__file="MergeRequests.vue";var x=C.exports,S=(n("7514"),n("ac6a"),n("6762"),n("2fdb"),n("5df3"),n("f400"),n("d4ec")),$=n("bee2"),I=n("99de"),A=n("7e84"),L=n("262e"),N=n("bc3a"),B=n.n(N),F=function(){function e(t,n){Object(S["a"])(this,e),this.client=this._createClient(t,n)}return Object($["a"])(e,[{key:"_createClient",value:function(e,t){return B.a.create({baseURL:e,headers:{"Private-Token":t}})}},{key:"fetchUsers",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all(t.map(function(t){return e.fetchUser(t)}))}},{key:"fetchUser",value:function(e){return this.client.get("/api/v4/users?username=".concat(e)).then(function(e){return e.data[0]})}},{key:"searchUsers",value:function(e){return this.client.get("/api/v4/users?search=".concat(e))}},{key:"fetchMergeRequests",value:function(e){var t=e.state,n=void 0===t?"opened":t,r=e.author_id,a="/api/v4/merge_requests?state=".concat(n);return r&&(a="".concat(a,"&scope=all&author_id=").concat(r)),this.client.get(a)}},{key:"fetchMergeRequest",value:function(e,t){return this.client.get("/api/v4/projects/".concat(e,"/merge_requests/").concat(t))}},{key:"fetchPipelines",value:function(e,t){return this.client.get("/api/v4/projects/".concat(e,"/pipelines?ref=").concat(t))}},{key:"fetchPipeline",value:function(e,t){return this.client.get("/api/v4/projects/".concat(e,"/pipelines/").concat(t))}},{key:"fetchLastPipeline",value:function(e,t){var n=this;return this.fetchPipelines(e,t).then(function(t){return t.data&&t.data.length?n.fetchPipeline(e,t.data[0].id):{}})}},{key:"getCurrentUser",value:function(){return this.client.get("/api/v4/user")}}]),e}(),G=n("808d"),J=n("d3fb"),V=n("d792"),D=n("1585"),W=n("a6c5"),z=n("a2ef"),H=n("ba10"),K=n.n(H),Q=function(e){function t(e){var n;return Object(S["a"])(this,t),n=Object(I["a"])(this,Object(A["a"])(t).call(this)),n.options=e,n.subscriptions=new Map,n.pollingInterval=e.pollingInterval||5e3,n.client=new F(e.apiEndpoint,e.apiToken),n}return Object(L["a"])(t,e),Object($["a"])(t,[{key:"watchMergeRequestsForUsers",value:function(e){var t=this,n=e.userIds;n.forEach(function(e){return t.watchMergeRequests({userId:e})})}},{key:"watchMergeRequests",value:function(e){var t=this,n=e.userId,r=Object(G["a"])(0,this.pollingInterval).pipe(Object(V["a"])(function(){return Object(J["a"])(t.client.fetchMergeRequests({state:"opened",author_id:n}))}),Object(D["a"])("data")),a=r.pipe(Object(W["a"])(function(e){return e}),Object(z["a"])(function(e){return e.id})),i=a.subscribe(function(e){var n;t.emit("new-merge-request",e),t.subscriptions.set(e.id,[]);var r=t.watchPipeline(e).subscribe(function(n){n&&t.emit("updated-pipeline",{mergeRequest:e,pipeline:n})}),a=t.watchMergeRequest(e).subscribe(function(n){t.emit("updated-merge-request",n),["merged","closed"].includes(n.state)&&(t.emit("merged-merge-request",n),t.subscriptions.get(e.id).forEach(function(e){return e.unsubscribe()}),t.subscriptions.delete(e.id))});(n=t.subscriptions.get(e.id)).push.apply(n,[r,a,i])})}},{key:"unwatchMergeRequests",value:function(){var e=this;this.subscriptions&&this.subscriptions.forEach(function(t,n){t.forEach(function(e){return e.unsubscribe()}),e.subscriptions.delete(n)})}},{key:"watchMergeRequest",value:function(e){var t=this,n=e.project_id,r=e.iid;return Object(G["a"])(0,this.pollingInterval).pipe(Object(V["a"])(function(){return Object(J["a"])(t.client.fetchMergeRequest(n,r))}),Object(D["a"])("data"))}},{key:"watchPipeline",value:function(e){var t=this;return Object(G["a"])(0,this.pollingInterval).pipe(Object(V["a"])(function(){return Object(J["a"])(t.client.fetchLastPipeline(e.source_project_id,e.source_branch))}),Object(D["a"])("data"))}}]),t}(K.a),X={Api:Q,Client:F},Y=null;function Z(e){Y=new X.Api({apiEndpoint:e.state.apiEndpoint,apiToken:e.state.apiToken}),Y.on("new-merge-request",function(t){e.dispatch("addMergeRequest",t)}),Y.on("updated-pipeline",function(t){var n=t.mergeRequest,r=t.pipeline;e.dispatch("updatePipeline",{mergeRequest:n,pipeline:r})}),Y.on("updated-merge-request",function(t){e.dispatch("updateMergeRequest",t)}),Y.on("merged-merge-request",function(t){e.dispatch("removeMergeRequest",t)})}function ee(){return Y}var te={get:ee,init:Z},ne=(n("b054"),[]);o["default"].use(R["a"]);var re=new R["a"].Store({plugins:ne,state:{apiEndpoint:Object({NODE_ENV:"production",BASE_URL:"/gitlab-teams/"}).VUE_APP_GITLAB||localStorage.getItem("apiEndpoint")||"https://gitlab.com",apiToken:Object({NODE_ENV:"production",BASE_URL:"/gitlab-teams/"}).VUE_APP_API_TOKEN||localStorage.getItem("apiToken"),mergeRequests:{},pipelines:{},teams:JSON.parse(localStorage.getItem("teams")||"[]"),team:{},currentUser:null},getters:{getTeams:function(e){return e.teams},getMergeRequest:function(e,t){var n=e.mergeRequests;return n[t]},getPipeline:function(e){var t=e.pipelines;return function(e){return t[e]}},getMergeRequests:function(e){var t=e.mergeRequests;return p.a.values(t)},isConfigured:function(e){return!!e.apiToken}},mutations:{addMergeRequest:function(e,t){var n=e.mergeRequests;o["default"].set(n,t.id,t)},removeMergeRequest:function(e,t){var n=e.mergeRequests;o["default"].delete(n,t.id)},setMergeRequests:function(e,t){e.mergeRequests=t},updateMergeRequest:function(e,t){var n=e.mergeRequests;o["default"].set(n,t.id,t)},setCurrentTeam:function(e,t){var n=p.a.find(e.teams,{name:t});e.team=n},addTeam:function(e,t){e.teams.push(t),localStorage.setItem("teams",JSON.stringify(e.teams))},updatePipeline:function(e,t){var n=e.pipelines,r=t.mergeRequest,a=t.pipeline;o["default"].set(n,r.id,a)},removePipeline:function(e,t){var n=e.pipelines,r=t.mergeRequest;o["default"].delete(n,r.id)},setPipelines:function(e,t){e.pipelines=t},updateSettings:function(e,t){e.apiEndpoint=t.apiEndpoint,e.apiToken=t.apiToken,localStorage.setItem("apiEndpoint",e.apiEndpoint),localStorage.setItem("apiToken",e.apiToken),te.get().unwatchMergeRequests(),te.init(this)},setUsers:function(e,t){e.team.users=t},setCurrentUser:function(e,t){e.currentUser=t}},actions:{fetchUsers:function(e){var t=e.state,n=e.commit;return te.get().client.fetchUsers(t.team.usernames).then(function(e){n("setUsers",e)})},fetchUser:function(e,t){var n=e.commit;return te.get().client.fetchUser(t).then(function(e){n("setCurrentUser",e)})},cleanMergeRequests:function(e){var t=e.commit,n=te.get();n.unwatchMergeRequests(),t("setMergeRequests",{}),t("setPipelines",{})},addMergeRequest:function(e,t){var n=e.commit;n("addMergeRequest",t)},removeMergeRequest:function(e,t){var n=e.commit;n("removeMergeRequest",t)},updateMergeRequest:function(e,t){var n=e.commit;n("updateMergeRequest",t)},updatePipeline:function(e,t){var n=e.commit,r=t.mergeRequest,a=t.pipeline;n("updatePipeline",{mergeRequest:r,pipeline:a})},updateSettings:function(e,t){var n=e.commit,r=e.dispatch;n("updateSettings",t),r("launchWatchers")},loadCurrentUser:function(e){var t=e.dispatch,n=te.get();t("cleanMergeRequests"),n.watchMergeRequests({})},loadUser:function(e,t){var n=e.dispatch,r=e.state,a=te.get();n("cleanMergeRequests"),n("fetchUser",t).then(function(){a.watchMergeRequestsForUsers({userIds:[r.currentUser.id]})})},loadTeam:function(e,t){var n=e.commit,r=e.dispatch;r("cleanMergeRequests"),n("setCurrentTeam",t),r("launchWatchers")},createTeam:function(e,t){var n=e.commit;n("addTeam",t)},launchWatchers:function(e){var t=e.dispatch,n=e.state,r=te.get();t("fetchUsers").then(function(){r.watchMergeRequestsForUsers({userIds:n.team.users.map(function(e){return e.id})})})}}}),ae={name:"home",components:{MergeRequests:x},computed:Object(q["a"])({},Object(R["b"])({mergeRequests:"getMergeRequests"})),beforeRouteEnter:function(e,t,n){re.dispatch("loadCurrentUser"),n()},beforeRouteUpdate:function(e,t,n){re.dispatch("loadCurrentUser"),n()}},ie=ae,se=Object(f["a"])(ie,b,_,!1,null,null,null);se.options.__file="Home.vue";var oe=se.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-3"},[n("v-form",[n("v-text-field",{attrs:{label:"API Token",required:""},model:{value:e.apiToken,callback:function(t){e.apiToken=t},expression:"apiToken"}}),n("v-text-field",{attrs:{label:"Gitlab URL",required:""},model:{value:e.apiEndpoint,callback:function(t){e.apiEndpoint=t},expression:"apiEndpoint"}}),n("v-btn",{on:{click:e.submit}},[e._v("Submit")])],1)],1)},ce=[],le={name:"settings",data:function(){return{apiToken:null,apiEndpoint:null}},mounted:function(){this.apiToken=this.$store.state.apiToken,this.apiEndpoint=this.$store.state.apiEndpoint},methods:{submit:function(){this.$store.dispatch("updateSettings",{apiToken:this.apiToken,apiEndpoint:this.apiEndpoint}),this.$router.push("/")}},components:{}},pe=le,de=Object(f["a"])(pe,ue,ce,!1,null,null,null);de.options.__file="Settings.vue";var me=de.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.mergeRequests.length?n("merge-requests",{attrs:{"merge-requests":e.mergeRequests}}):e._e()],1)},ve=[],ge={name:"team",components:{MergeRequests:x},computed:Object(q["a"])({},Object(R["b"])({mergeRequests:"getMergeRequests"})),beforeRouteEnter:function(e,t,n){re.dispatch("loadTeam",e.params.name),n()},beforeRouteUpdate:function(e,t,n){re.dispatch("loadTeam",e.params.name),n()}},he=ge,be=Object(f["a"])(he,fe,ve,!1,null,null,null);be.options.__file="Team.vue";var _e=be.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.mergeRequests.length?n("merge-requests",{attrs:{"merge-requests":e.mergeRequests}}):e._e()],1)},Re=[],ke={name:"user",components:{MergeRequests:x},computed:Object(q["a"])({},Object(R["b"])({mergeRequests:"getMergeRequests"})),beforeRouteEnter:function(e,t,n){re.dispatch("loadUser",e.params.name),n()},beforeRouteUpdate:function(e,t,n){re.dispatch("loadUser",e.params.name),n()}},je=ke,Me=Object(f["a"])(je,qe,Re,!1,null,null,null);Me.options.__file="User.vue";var ye=Me.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-3"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",rules:[function(e){return!!e||"Name is required"}],required:"",autofocus:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{label:"Avatar 🤖 🦊 🤡",disabled:"",required:""},model:{value:e.icon,callback:function(t){e.icon=t},expression:"icon"}}),n("v-autocomplete",{attrs:{items:e.items,loading:e.isLoading,"search-input":e.search,chips:"","item-text":"name","item-value":"name",label:"Members",multiple:"","cache-items":"","return-object":""},on:{"update:searchInput":function(t){e.search=t}},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(n){e.remove(t.item,t)}}},[n("v-avatar",[n("img",{attrs:{src:t.item.avatar_url}})]),e._v("\n        "+e._s(t.item.name)+"\n        ")],1)]}},{key:"item",fn:function(t){return[n("v-list-tile-avatar",[n("v-avatar",[n("img",{attrs:{src:t.item.avatar_url}})])],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:e._s(t.item.name)}})],1)]}}]),model:{value:e.members,callback:function(t){e.members=t},expression:"members"}},[n("template",{slot:"no-data"},[n("v-list-tile",[n("v-list-tile-title",[e._v("\n            Search Gitlab User...\n          ")])],1)],1)],2),n("v-btn",{attrs:{disabled:!e.valid},on:{click:e.create}},[e._v("Create")]),n("v-btn",{on:{click:e.clear}},[e._v("Clear")])],1)],1)},we=[],Te={data:function(){return{valid:!0,name:null,icon:"🦊",members:[],isLoading:!1,items:[],search:null}},methods:{create:function(){if(this.$refs.form.validate()){var e={name:this.name,icon:this.icon,usernames:this.members.map(function(e){return e.username})};this.$store.dispatch("createTeam",e),this.$router.push({name:"team",params:{name:e.name}})}},clear:function(){this.$refs.form.reset()},remove:function(e,t){p.a.remove(this.members,function(t){return t.id===e.id})}},watch:{search:function(e){var t=this;e&&null!==e&&(this.isLoading=!0,te.get().client.searchUsers(e).then(function(e){return t.items=e.data}).catch(console.log).finally(function(){return t.isLoading=!1}))}}},Ee=Te,Pe=Object(f["a"])(Ee,Oe,we,!1,null,null,null);Pe.options.__file="CreateTeam.vue";var Ue=Pe.exports;o["default"].use(h["a"]);var Ce=new h["a"]({base:"/gitlab-teams/",routes:[{path:"/",name:"home",component:oe},{path:"/team/:name",name:"team",component:_e},{path:"/user/:name",name:"user",component:ye},{path:"/settings",name:"settings",component:me},{path:"/settings/team/create",name:"create-team",component:Ue},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["default"].config.productionTip=!1,o["default"].use(s.a),o["default"].use(a.a),te.init(re),new o["default"]({router:Ce,store:re,render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,t,n){},cdb3:function(e,t,n){},e505:function(e,t,n){"use strict";var r=n("cdb3"),a=n.n(r);a.a}});
//# sourceMappingURL=app.a3a3440c.js.map