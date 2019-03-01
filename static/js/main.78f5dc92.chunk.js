(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),o=n.n(l),c=n(2),i=n(3),u=n(5),s=n(4),p=n(6),m=n(127),b=n(128),d=n(48),f=n.n(d),h=(n(64),n(7)),v=n(8),j=n(16),O=n.n(j),E=n(126),y=n(36),g=n.n(y),x=n(49),C=n.n(x),k=n(17),w=n.n(k),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"#f2e394",height:"100vh"}},r.a.createElement(g.a,{vertical:!0,size:12,kind:"parent"},r.a.createElement(g.a,{kind:"child"},r.a.createElement(E.a,{to:"/"},r.a.createElement(w.a,null,r.a.createElement(C.a,{size:6},"Repositories"))))))}}]),t}(a.Component),N=n(26),I=n.n(N);function T(){var e=Object(h.a)(["\n    color: black;\n    font-size: 1em;\n"]);return T=function(){return e},e}function D(){var e=Object(h.a)(["\n    color: black;\n    font-size: 2em;\n"]);return D=function(){return e},e}function z(){var e=Object(h.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n"]);return z=function(){return e},e}function B(){var e=Object(h.a)(["\n    background-color: ",";\n    text-align: center;\n    width: 150px;\n    height: 150px;\n    border-radius: 75px;\n    margin: 0px 5px;\n    cursor: ",";\n"]);return B=function(){return e},e}var M=v.a.div(B(),function(e){return e.bubbleColor},function(e){return e.clickable?"pointer":""}),R=v.a.div(z()),P=v.a.div(D()),U=v.a.div(T()),_=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.upText,n=e.midText,a=e.lowText,l=e.bubbleColor,o=e.clickable,c=e.linkTo;t=t||"Unavail",n=n||"Unavail",a=a||"Unavail",l=l||"azure";var i=r.a.createElement(M,{bubbleColor:l,clickable:o},r.a.createElement(R,null,r.a.createElement(U,null,t),r.a.createElement(P,null,n),r.a.createElement(U,null,a)));return c?function(e,t){return r.a.createElement(E.a,{to:t},e)}(i,c):i}}]),t}(a.Component),A=n(25),F=n.n(A),L=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.repositoryName;return r.a.createElement(F.a,null,r.a.createElement("h3",null,e),r.a.createElement("dl",null,r.a.createElement("dd",null,"Created Date : Should we have this feature?")))}}]),t}(a.Component),V=n(28),H=n(18);function W(){var e=Object(h.a)(["\n    margin: 3px 3px 3px 3px;\n    cursor: pointer;\n"]);return W=function(){return e},e}var J=Object(v.a)(V.a)(W()),q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(J,{icon:H.d})}}]),t}(a.Component),K=n(23),$=n(19),G=n.n($),Q=n(11),X=n(20),Y=n.n(X);function Z(){var e=Object(h.a)(["\n    display: block;\n    position: absolute;\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n"]);return Z=function(){return e},e}function ee(){var e=Object(h.a)(["\n    display: block;\n    height: 400px;\n    background-color: azure;\n    width: 50vw;\n    margin: 10% auto;\n"]);return ee=function(){return e},e}var te=Object(v.a)(w.a)(ee()),ne=v.a.div(Z()),ae=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).confirmDelete=function(){var e=n.props.repositoryName,t=n.state.formValue,a=n.state;e===t?(a.formIsDanger=!1,G.a.post("http://localhost:5000/repository/delete/",{name:e}).then(function(e){window.location.reload()})):(a.formIsDanger=!0,a.errorMessage="Invalid repository name, try again."),n.setState(function(e){return a})},n.state={formValue:""},n.handleChange=n.handleChange.bind(Object(K.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState(function(e){return{formValue:t,formIsDanger:!1}})}},{key:"render",value:function(){var e=this.props,t=e.repositoryName,n=e.displayConfirmBox,a=e.toggler;return r.a.createElement("div",{style:{display:n}},r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(Q.Field,null,r.a.createElement(Q.Label,null,"Are you sure you want to delete [ ",t," ] ?"),r.a.createElement(Q.Control,null,r.a.createElement(Q.Input,{placeholder:"Type in your repository name: "+t,onChange:this.handleChange,value:this.state.formValue,color:this.state.formIsDanger?"danger":"link",className:"selemnium-delete-input"}))),r.a.createElement("br",null),r.a.createElement(Q.Field,{kind:"group"},r.a.createElement(Q.Control,null,r.a.createElement(Y.a,{type:"primary",color:"link",outlined:!0,onClick:this.confirmDelete,className:"selemnium-delete-confirm"},"Submit")),r.a.createElement(Q.Control,null,r.a.createElement(Y.a,{type:"warning",color:"danger",outlined:!0,onClick:a},"Cancel"))),r.a.createElement("p",null,this.state.errorMessage||""))))}}]),t}(a.Component),re=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleOnClick=function(){n.setState(function(e){var t=e;return t.displayConfirmBox="none"===e.displayConfirmBox?"block":"none",t})},n.state={displayConfirmBox:"none"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.repositoryName,t=this.state.displayConfirmBox;return r.a.createElement("div",null,r.a.createElement("div",{onClick:this.handleOnClick,className:"selemnium-repo-delete"},r.a.createElement(q,null)),r.a.createElement(ae,{repositoryName:e,displayConfirmBox:t,toggler:this.handleOnClick}))}}]),t}(a.Component);function le(){var e=Object(h.a)(["\n    margin: 10px 10px 10px 10px;\n"]);return le=function(){return e},e}function oe(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return oe=function(){return e},e}var ce=Object(v.a)(I.a.Item)(oe()),ie=Object(v.a)(w.a)(le()),ue=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.repositoryName;return r.a.createElement("div",null,r.a.createElement(ie,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Item,null,r.a.createElement(L,{repositoryName:e})),r.a.createElement(ce,{renderAs:"figure",position:"right"},r.a.createElement(_,{upText:"Scrape",midText:"Ready"==this.props.scraperStatus?"Ready":this.props.scrapePercent+"%",lowText:this.props.scrapeDone+"/"+this.props.scrapeTotal,bubbleColor:"Ready"==this.scraperStatus?"#f9ccac":"#87bdd8",linkTo:"Ready"==this.props.scraperStatus&&"/scrape/"+e,repositoryName:e}),r.a.createElement(_,{upText:"Parse",midText:this.props.parseMid,bubbleColor:"Unavailable"==this.parserStatus?"#b7d7e8":"#e0e2e4"}),r.a.createElement(_,{upText:"Export",midText:this.props.exportMid,bubbleColor:"Unavailable"==this.exporterStatus?"#cfe0e8":"#e0e2e4"})),r.a.createElement(I.a.Item,{renderAs:"figure",position:"right"},r.a.createElement(re,{repositoryName:e})))))}}]),t}(a.Component);ue.defaultProps={repositoryName:"Default Name (Test)"};var se=[{bubble:{exporter:{state:"Unavailable"},parser:{state:"Unavailable"},scraper:{scraped_file_count:8,state:"Ready",total_file_count:8}},id:"9c9f7129-7db6-44ff-a3bd-84e04b81476c",name:"Mock"}],pe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).getRepositoriesStatus=function(){G.a.get("http://localhost:5000/getstatus").then(function(e){n.setState({responseFromAPI:e.data})}).catch(function(e){console.log("error"+e)})},n.state={responseFromAPI:se},n.getRepositoriesStatus(),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.responseFromAPI;return r.a.createElement("div",null,e.map(function(e,t){var n,a={repositoryName:(n=e).name,scraperStatus:n.bubble.scraper.state,parserStatus:n.bubble.parser.state,exporterStatus:n.bubble.exporter.state,scrapePercent:n.bubble.scraper.scraped_file_count/n.bubble.scraper.total_file_count*100,scrapeTotal:n.bubble.scraper.total_file_count,scrapeDone:n.bubble.scraper.scraped_file_count,parseMid:n.bubble.parser.state,parseLower:n.bubble.parser.state,exportMid:n.bubble.exporter.state,exportLower:n.bubble.exporter.state};return r.a.createElement(ue,a)}))}}]),t}(a.Component);function me(){var e=Object(h.a)(["\n    color: black;\n    font-size: 1em;\n"]);return me=function(){return e},e}function be(){var e=Object(h.a)(["\n    color: black;\n    font-size: 4em;\n"]);return be=function(){return e},e}function de(){var e=Object(h.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    cursor: pointer;\n"]);return de=function(){return e},e}function fe(){var e=Object(h.a)(["\n    background-color: #daebe8;\n    text-align: center;\n    width: 150px;\n    height: 150px;\n    border-radius: 75px;\n    margin: 0px 5px;\n"]);return fe=function(){return e},e}var he=v.a.div(fe()),ve=v.a.div(de()),je=v.a.div(be()),Oe=v.a.div(me()),Ee=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(he,{className:"selenium-create-bubble"},r.a.createElement(ve,{onClick:this.props.onClick},r.a.createElement(je,null,"+"),r.a.createElement(Oe,null,"Add Repo"))))}}]),t}(a.Component);function ye(){var e=Object(h.a)(["\n    display: block;\n    position: absolute;\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n"]);return ye=function(){return e},e}function ge(){var e=Object(h.a)(["\n    display: block;\n    height: 400px;\n    background-color: azure;\n    width: 50vw;\n    margin: 10% auto;\n"]);return ge=function(){return e},e}var xe=Object(v.a)(w.a)(ge()),Ce=v.a.div(ye()),ke=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).confirmCreate=function(){G.a.post("http://localhost:5000/repository/",{name:n.state.formValue}).then(function(e){switch(e.status){case 203:window.location.reload()}}).catch(function(e){n.setState(function(t){var n=t;return n.errorMessage=e.response.data,n.formIsDanger=!0,n})})},n.state={formValue:""},n.handleChange=n.handleChange.bind(Object(K.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value.trim();this.setState(function(e){return{formValue:t,formIsDanger:!1}})}},{key:"render",value:function(){var e=this.props,t=e.repositoryName,n=e.displayConfirmBox,a=e.toggler;return r.a.createElement("div",{style:{display:n}},r.a.createElement(Ce,null,r.a.createElement(xe,null,r.a.createElement(Q.Field,null,r.a.createElement(Q.Label,null,"Create New Repository"),r.a.createElement(Q.Control,null,r.a.createElement(Q.Input,{placeholder:"Type in your repository name: "+t,onChange:this.handleChange,value:this.state.formValue,className:"selenium-reponame-input",color:this.state.formIsDanger?"danger":"link"}))),r.a.createElement("br",null),r.a.createElement(Q.Field,{kind:"group"},r.a.createElement(Q.Control,null,r.a.createElement(Y.a,{type:"primary",color:"link",outlined:!0,onClick:this.confirmCreate,className:"Submit selenium-submit-button"},"Submit")),r.a.createElement(Q.Control,null,r.a.createElement(Y.a,{type:"warning",color:"danger",outlined:!0,onClick:a},"Cancel"))),r.a.createElement("p",null,this.state.errorMessage||""))))}}]),t}(a.Component),we=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleOnClick=function(){n.setState(function(e){var t=e;return t.displayConfirmBox="none"===e.displayConfirmBox?"block":"none",t})},n.state={displayConfirmBox:"none"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.displayConfirmBox;return r.a.createElement("div",null,r.a.createElement("div",{onClick:this.handleOnClick},r.a.createElement(Ee,{className:"CreateRepoButton"})),r.a.createElement(ke,{displayConfirmBox:e,toggler:this.handleOnClick}))}}]),t}(a.Component);function Se(){var e=Object(h.a)(["\n    display: flex;\n    justify-content: space-around;\n"]);return Se=function(){return e},e}var Ne=v.a.div(Se()),Ie=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"section",style:{padding:"0"}},r.a.createElement(O.a,null,r.a.createElement(O.a.Column,{size:3},r.a.createElement(S,null)),r.a.createElement(O.a.Column,null,r.a.createElement(pe,null),r.a.createElement(Ne,null,r.a.createElement(we,null))))))}}]),t}(a.Component);function Te(){var e=Object(h.a)(["\n    height: 80vh;\n    margin: 100px 100px 0px 100px;\n    display: flex;\n    flex-direction: column;\n"]);return Te=function(){return e},e}var De=Object(v.a)(w.a)(Te());function ze(){var e=Object(h.a)(["\n"]);return ze=function(){return e},e}function Be(){var e=Object(h.a)(["\n    --bubble-size: 40vh;\n\n    background-color: #dff0f8;\n    border-radius: calc(var(--bubble-size) / 2);\n    border-color: #4a4a4a;\n    border-style: solid;\n    width: var(--bubble-size);\n    height: var(--bubble-size);\n    line-height: var(--bubble-size);\n    font-size: 150px;\n    text-align: center;\n"]);return Be=function(){return e},e}var Me=v.a.div(Be()),Re=Object(v.a)(V.a)(ze()),Pe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.icon;return r.a.createElement(Me,null,r.a.createElement(Re,{icon:e}))}}]),t}(a.Component);Pe.defaultProps={icon:H.a};var Ue=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Pe,{icon:H.c})}}]),t}(a.Component),_e=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(Pe,{icon:H.b})}}]),t}(a.Component);function Ae(){var e=Object(h.a)(["\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    text-align: center;\n    border-color: #4a4a4a;\n    border-style: solid;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return Ae=function(){return e},e}var Fe=v.a.div(Ae()),Le=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.upText,n=e.lowText;return r.a.createElement(Fe,null,r.a.createElement("p",null,t),r.a.createElement("b",null,n))}}]),t}(a.Component);function Ve(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    text-align: center;\n    align-items: center;\n"]);return Ve=function(){return e},e}function He(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n"]);return He=function(){return e},e}Le.defaultProps={upText:"undefined",lowText:"undefined"};var We=v.a.div(He()),Je=v.a.div(Ve()),qe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.repositoryName;return r.a.createElement(De,null,r.a.createElement(We,null,r.a.createElement(Le,{upText:"1",lowText:"Scrape"})),r.a.createElement(We,null,r.a.createElement(Je,null,r.a.createElement(E.a,{to:"/scrape-pk/"+e},r.a.createElement(Ue,null),r.a.createElement(F.a,null,r.a.createElement("br",null),r.a.createElement("h2",null,"Scrape Using Primary Key"),r.a.createElement("p",null,"Suitable for websites that use ascending number in url")))),r.a.createElement(Je,null,r.a.createElement(_e,null),r.a.createElement(F.a,null,r.a.createElement("br",null),r.a.createElement("h2",null,"Scrape Using URLs from text file"),r.a.createElement("p",null,"Suitable for specific requirement")))))}}]),t}(a.Component),Ke=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params.repositoryName;return r.a.createElement("div",null,r.a.createElement("section",{className:"section",style:{padding:"0"}},r.a.createElement(O.a,null,r.a.createElement(O.a.Column,{size:3},r.a.createElement(S,null)),r.a.createElement(O.a.Column,null,"Working on: "," ",r.a.createElement("b",null,e),r.a.createElement(qe,{repositoryName:e})))))}}]),t}(a.Component),$e=n(52),Ge=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.placeholder,a=e.onChange,l=e.name,o=e.value,c=e.color;return r.a.createElement(Q.Field,null,r.a.createElement(Q.Label,null,t),r.a.createElement(Q.Control,null,r.a.createElement(Q.Input,{placeholder:n,value:o,onChange:a,name:l,color:c})))}}]),t}(a.Component);function Qe(){var e=Object(h.a)(["\n    display: flex;\n    align-content: center;\n    flex-direction: column;\n"]);return Qe=function(){return e},e}Ge.defaultProps={label:"undefined",placeholder:"undefined"};var Xe=v.a.div(Qe()),Ye=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).formHandler=function(e){n.setState(Object($e.a)({},e.target.name,e.target.value))},n.formSubmitHandler=function(e){""===n.state.baseurl?n.setState({errorMessage:"Please enter URL.",baseurlIsDanger:!0}):""===n.state.start||""===n.state.end?n.setState({errorMessage:"Please enter valid range of Start and End",rangeIsDanger:!0}):G.a.post("http://localhost:5000/repository/scraper/seturl/",{baseurl:n.state.baseurl,start:n.state.start,end:n.state.end,reponame:n.state.reponame}).then(function(e){200===e.status&&window.location.reload()}).catch(function(e){n.setState({errorMessage:e.response.data})}),e.preventDefault()},n.state={baseurl:"",start:"",end:"",reponame:e.repositoryName,errorMessage:"",baseurlIsDanger:!1,rangeIsDanger:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.baseurl,n=e.start,a=e.end;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.formSubmitHandler},r.a.createElement(Xe,null,r.a.createElement(Ge,{label:"Base URL",placeholder:"http://www.example.com/id={}",name:"baseurl",value:t,onChange:this.formHandler,color:this.state.baseurlIsDanger?"danger":"link"}),r.a.createElement(Ge,{label:"Start",placeholder:"0",name:"start",value:n,onChange:this.formHandler,color:this.state.rangeIsDanger?"danger":"link"}),r.a.createElement(Ge,{label:"End",placeholder:"17",name:"end",value:a,onChange:this.formHandler,color:this.state.rangeIsDanger?"danger":"link"}),r.a.createElement(Y.a,{color:"link"},"Start Scraping"),r.a.createElement("p",null,this.state.errorMessage||""))))}}]),t}(a.Component);function Ze(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n"]);return Ze=function(){return e},e}var et=v.a.div(Ze()),tt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.repositoryName;return r.a.createElement(De,null,r.a.createElement(et,null,r.a.createElement(Le,{upText:"1",lowText:"Scrape"})),r.a.createElement(Ye,{repositoryName:e}))}}]),t}(a.Component),nt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params.repositoryName;return r.a.createElement("div",null,r.a.createElement("section",{className:"section",style:{padding:"0"}},r.a.createElement(O.a,null,r.a.createElement(O.a.Column,{size:3},r.a.createElement(S,null)),r.a.createElement(O.a.Column,null,"Working on: "," ",r.a.createElement("b",null,e),r.a.createElement(tt,{repositoryName:e})))))}}]),t}(a.Component),at=f()({basename:"/tt1-frontend"}),rt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{history:at},r.a.createElement("div",null,r.a.createElement(b.a,{exact:!0,path:"/",component:Ie}),r.a.createElement(b.a,{exact:!0,path:"/scrape/:repositoryName",component:Ke}),r.a.createElement(b.a,{exact:!0,path:"/scrape-pk/:repositoryName",component:nt}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,n){e.exports=n(125)}},[[56,1,2]]]);
//# sourceMappingURL=main.78f5dc92.chunk.js.map