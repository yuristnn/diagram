(this.webpackJsonpdiagram=this.webpackJsonpdiagram||[]).push([[0],{121:function(e,t,o){e.exports=o(180)},178:function(e,t,o){},180:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(15),a=o.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=o(110),l=o(17),s=o(25),d=function(e){var t=e.components,o=e.children;return Object(s.isEmpty)(t)?o:Object(s.reverse)(t).reduce((function(e,t){return r.a.createElement(t,null,e)}),o)},u=o(23),p=o(211),b=o(206),m=o(201),f=o(219),g=o(213),h=o(209),y=o(199),O=o(47),w=o(37),j=o(35),k=o(73),v=o(208),I=o(102),x=o.n(I),E=o(4),B=o(216),C=o(212),L=o(218),A=o(214),P=o(202),N=o(204),W=o(207),D=o(62),H=o(46),R=o(44),S=o(100),F=function(e,t){Object(n.useEffect)((function(){var o=function(o){e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}}),[e,t])},M=Object(n.createContext)(void 0),z=Object(y.a)((function(e){return{lineWrapper:{display:"flex",width:"100%",minWidth:e.spacing(36)},inputStyle:{flex:1,width:"100%",fontSize:"small",color:e.palette.common.black,padding:e.spacing(.5),backgroundColor:e.palette.common.white,borderRadius:e.spacing(.5)},inputBaseRoot:{padding:0,"&::-webkit-scrollbar":{width:e.spacing(.75)},"&::-webkit-scrollbar-thumb":{backgroundColor:"#BEBEBE",borderRadius:e.spacing(.5)}},textFieldWrapper:{flex:1},textFieldStyle:{flex:1,fontSize:"small",lineHeight:1.2,padding:e.spacing(.5),wordBreak:"break-word"},lineSize:{minWidth:e.spacing(33)},actionButtons:{position:"absolute",bottom:0},colorLineButton:{padding:e.spacing(.5),color:H.a[700]},deleteLineButton:{padding:e.spacing(.5),color:R.a[700]},connectorWrapper:{display:"flex",width:e.spacing(1),alignItems:"center"},connector:{height:e.spacing(1.5),width:"100%",backgroundColor:e.palette.grey[700],borderTopLeftRadius:e.spacing(1),borderBottomLeftRadius:e.spacing(1),cursor:"pointer","&:hover":{backgroundColor:e.palette.grey[600]}},deleteLine:{backgroundColor:S.a[700]},inputColor:{color:e.palette.common.white,width:e.spacing(3),border:"1px solid ".concat(e.palette.common.white),height:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:0,"&:hover":{opacity:.9}},inputColorIcon:{color:e.palette.common.white,"&:hover":{opacity:.9}},inputColorWrapper:{display:"flex",flexDirection:"row",flexWrap:"wrap",width:e.spacing(33)},inputColorIconUnchanged:{width:"100%",height:"100%","&:hover":{opacity:.9}}}}));var T=Object(j.a)((function(e){var t=e.text,o=e.line,i=void 0!==o&&o,a=e.answerId,c=e.blockId,l=e.color,s=e.deleteHandler,d=e.changeColor,f=e.extendedClass,h=z(),y=Object(n.useContext)(M),O=y.lineAddMode,j=y.setLineAddMode,k=y.lines,v=y.setAnswerText,I=y.setHeaderText,x=y.startAddingLine,H=y.setLineColor,R=y.clearLineColor,S=y.deleteLine,T=Object(n.useState)(!1),U=Object(u.a)(T,2),Y=U[0],J=U[1],K=Object(n.useState)(!1),V=Object(u.a)(K,2),X=V[0],$=V[1],q=Object(n.useState)(!1),G=Object(u.a)(q,2),Q=G[0],Z=G[1],_=Object(n.useState)(null),ee=Object(u.a)(_,2),te=ee[0],oe=ee[1],ne=Object(D.a)(),re=Object(n.useRef)(),ie=Object(n.useRef)(),ae=function(){oe(null)},ce=Boolean(te),le=ce?"change-color":void 0;return F(re,(function(){return J(!1)})),Object(n.useEffect)((function(){Y&&ie&&ie.current.focus()}),[Y]),r.a.createElement(p.a,{ref:re,className:Object(E.a)(h.lineWrapper,i&&h.lineSize),onMouseOver:function(){return $(!0)},onMouseLeave:function(){ce||$(!1)}},Y?r.a.createElement(B.a,{inputRef:ie,multiline:!0,rowsMax:5,className:Object(E.a)(h.inputStyle,f),classes:{input:h.inputBaseRoot},value:t,onChange:function(e){var t;t=e.target.value,i?v(c,a,t):I(c,t)},onKeyDown:function(e){13!==e.keyCode||e.shiftKey||(e.preventDefault(),J(!1))}}):r.a.createElement("strong",{className:h.textFieldWrapper,onDoubleClick:function(){return J(!0)}},r.a.createElement(m.a,{className:Object(E.a)(h.textFieldStyle,f)},t)),X&&!Y&&r.a.createElement(p.a,{className:h.actionButtons,right:i?ne.spacing(2):0},r.a.createElement(g.a,{id:le,className:h.colorLineButton,onClick:function(e){oe(e.currentTarget)}},r.a.createElement(P.a,{fontSize:"small"})),r.a.createElement(g.a,{className:h.deleteLineButton,onClick:function(){return s(i?a:c)}},r.a.createElement(N.a,{fontSize:"small"}))),i&&r.a.createElement(p.a,{className:h.connectorWrapper},r.a.createElement(p.a,{className:Object(E.a)(h.connector,Q&&h.deleteLine),id:a,onMouseDown:function(){k.find((function(e){return e.fromId.answerId===a}))||x(c,a)},onMouseUp:function(){O&&j(!1)},onMouseEnter:function(){!O&&k.find((function(e){return e.fromId.answerId===a}))&&(Z(!0),H(a))},onMouseLeave:function(){!O&&Q&&(R(),Z(!1))},onDoubleClick:function(){Q&&(S(a),Z(!1))}})),r.a.createElement(C.a,{open:ce,id:a,anchorEl:te,onClose:function(){ae(),$(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}},r.a.createElement(b.a,null,r.a.createElement(L.a,{className:h.inputColorWrapper,value:l,onChange:function(e){d(e.target.value,a),ae(),$(!1)}},Object.keys(w).filter((function(e){return"amber"!==e&&"common"!==e})).map((function(e){return r.a.createElement(A.a,{value:e,key:e,className:h.inputColor,checkedIcon:r.a.createElement(W.a,{className:h.inputColorIcon}),icon:r.a.createElement(p.a,{className:h.inputColorIconUnchanged}),style:{backgroundColor:w[e][500]}})}))))))})),U=Object(y.a)((function(e){return{blockWrapper:{position:"absolute",minWidth:e.spacing(25),maxWidth:"max-content",maxHeight:"max-content",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:e.palette.grey[200],zIndex:2,"&:hover":{cursor:"move"}},answerStyle:{display:"flex",alignItems:"center",cursor:"default",position:"relative",borderTop:"1px solid rgba(0, 0, 0, 0.2)",borderLeft:"1px solid rgba(0, 0, 0, 0.2)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",minHeight:e.spacing(3.5),marginBottom:e.spacing(.5),paddingLeft:e.spacing(1),borderTopLeftRadius:e.spacing(1),borderBottomLeftRadius:e.spacing(1)},headerStyle:{display:"flex",flexDirection:"column",maxWidth:e.spacing(36),color:e.palette.common.white,padding:e.spacing(1),borderTopLeftRadius:e.spacing(.5),borderTopRightRadius:e.spacing(.5),cursor:"default",position:"relative"},bodyStyle:{display:"flex",flexDirection:"row",maxWidth:e.spacing(38),paddingTop:e.spacing(.5)},otherField:{flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center"},addNewLineButton:{padding:e.spacing(.5),marginBottom:e.spacing(.5)},connectorWrapper:{display:"flex",width:e.spacing(1),alignItems:"center",height:"100%",position:"absolute",left:0},connector:{height:e.spacing(1.5),width:"100%",backgroundColor:e.palette.grey[700],borderTopRightRadius:e.spacing(1),borderBottomRightRadius:e.spacing(1),cursor:"pointer","&:hover":{backgroundColor:e.palette.grey[600]}}}}));var Y=Object(j.a)((function(e){var t,o,i=e.id,a=e.parentRef,c=e.zoomValue,l=e.setHeightBlock,d=e.setWidthBlock,m=e.setHeightParentRef,f=e.setWidthParentRef,h=U(),y=Object(n.useRef)(),O=Object(n.useRef)(),j=Object(n.useRef)(),k=Object(n.useContext)(M),I=k.blocks,B=k.lineAddMode,C=k.lineFromBlockId,L=k.clearLine,A=k.addLine,P=k.setPositionBlock,N=k.setPositionsInBlock,W=k.addNewAnswer,D=k.deleteAnswer,H=k.changeColorAnswer,R=k.changeColorHeader,S=k.deleteBlock,F=Object(n.useState)(),z=Object(u.a)(F,2),Y=z[0],J=z[1];return Object(n.useEffect)((function(){N(i,I[i].position.x,I[i].position.y)}),[null===(t=O.current)||void 0===t?void 0:t.clientHeight,null===(o=j.current)||void 0===o?void 0:o.clientHeight,Object(s.keys)(I[i].answers).length]),r.a.createElement(x.a,{position:I[i].position,defaultPosition:I[i].position,bounds:{left:0,top:0,right:5e3,bottom:5e3},onDrag:function(e,t){var o,n,r,c,s,u,p=t.x,b=t.y;a.clientHeight<(null===(o=y.current)||void 0===o?void 0:o.clientHeight)+b&&(m("".concat((null===(r=y.current)||void 0===r?void 0:r.clientHeight)+b,"px")),d(a.clientWidth),l((null===(c=y.current)||void 0===c?void 0:c.clientHeight)+b));a.clientWidth<(null===(n=y.current)||void 0===n?void 0:n.clientWidth)+p&&(f("".concat((null===(s=y.current)||void 0===s?void 0:s.clientWidth)+p,"px")),d((null===(u=y.current)||void 0===u?void 0:u.clientWidth)+p),l(a.clientHeight));P(i,p,b),N(i,p,b)},handle:"strong",scale:c,onStart:function(){return J(!0)},onStop:function(){return J(!1)}},r.a.createElement(b.a,{id:"block".concat(i),ref:y,className:Object(E.a)(h.blockWrapper,Y&&h.draggingBlock)},r.a.createElement(p.a,{id:"header".concat(i),className:h.headerStyle,style:{backgroundColor:w[I[i].header.color][500]},ref:O},r.a.createElement(T,{text:I[i].header.text,color:I[i].header.color,blockId:i,deleteHandler:function(){return S(i)},changeColor:function(e){return R(i,e)}}),r.a.createElement("strong",{className:h.otherField},r.a.createElement(p.a,null))),r.a.createElement(p.a,{className:h.bodyStyle,ref:j},r.a.createElement("strong",{className:h.otherField},r.a.createElement(g.a,{className:h.addNewLineButton,onClick:function(){return W(i)}},r.a.createElement(v.a,{fontSize:"small",color:"primary"}))),r.a.createElement(p.a,{display:"flex",flexDirection:"column",width:"90%"},Object(s.values)(I[i].answers).map((function(e){return r.a.createElement(p.a,{id:"answer".concat(e.id),className:h.answerStyle,key:e.id,style:{backgroundColor:w[e.color][500]}},r.a.createElement(T,{text:e.text,line:!0,answerId:e.id,blockId:i,color:e.color,deleteHandler:function(e){return D(i,e)},changeColor:function(e,t){return H(i,t,e)}}))})))),r.a.createElement(p.a,{className:h.connectorWrapper},r.a.createElement(p.a,{className:h.connector,id:i,onMouseUp:function(){B&&(C!==i?A(i):L())}}))))})),J=Object(y.a)((function(e){return{rootWrapper:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.divider},wrapper:{width:"calc(100% - ".concat(e.spacing(8),"px)"),height:"calc(100% - ".concat(e.spacing(8),"px)"),position:"absolute",margin:e.spacing(4),overflow:"auto","&::-webkit-scrollbar":{width:e.spacing(1),height:e.spacing(1)},"&::-webkit-scrollbar-thumb":{backgroundColor:"#BEBEBE",borderRadius:e.spacing(.5)}},diagramField:{position:"absolute",left:0,right:0,top:0,bottom:0,zIndex:2},diagramCanvas:{position:"absolute",left:0,right:0,top:0,bottom:0,zIndex:0},infoWrapper:{position:"absolute",right:e.spacing(7),top:e.spacing(7),zIndex:1e3,padding:e.spacing(1)},addBlockButton:{position:"absolute",left:e.spacing(5),top:e.spacing(5),zIndex:1e3,color:O.a[500]}}}));var K,V,X,$,q,G,Q,Z,_,ee,te,oe,ne,re,ie,ae,ce,le,se,de,ue,pe,be,me,fe=Object(j.a)((function(){var e=J(),t=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(n.useContext)(M),a=i.blocks,c=i.lines,l=i.lineAddMode,d=i.addNewBlock,y=i.clearLine,O=i.setPositionLine,j=Object(n.useState)(0),v=Object(u.a)(j,2),I=v[0],x=v[1],E=Object(n.useState)(0),B=Object(u.a)(E,2),C=B[0],L=B[1],A=Object(n.useState)(!1),P=Object(u.a)(A,2),N=P[0],W=P[1],D=Object(n.useState)(1),H=Object(u.a)(D,2),R=H[0],S=H[1],F=function(){var e,o,n,r;((null===(e=t.current)||void 0===e?void 0:e.clientWidth)||(null===(o=t.current)||void 0===o?void 0:o.clientHeight))&&(x(null===(n=t.current)||void 0===n?void 0:n.clientWidth),L(null===(r=t.current)||void 0===r?void 0:r.clientHeight))};return Object(n.useEffect)((function(){F()}),[t]),r.a.createElement(p.a,{className:e.rootWrapper},r.a.createElement(b.a,{className:e.wrapper,style:{cursor:N?"move":"default"},ref:o,onMouseDown:function(e){1===e.button&&(e.preventDefault(),W(!0))},onMouseUp:function(e){y(),1===e.button&&W(!1)},onMouseMove:function(e){var t,n;(l&&O(e.movementX/R,e.movementY/R),N)&&(o.current.scrollLeft=(null===(t=o.current)||void 0===t?void 0:t.scrollLeft)-e.movementX,o.current.scrollTop=(null===(n=o.current)||void 0===n?void 0:n.scrollTop)-e.movementY)},onMouseLeave:function(){W(!1)}},r.a.createElement(p.a,{className:e.diagramField,style:{zoom:R},id:"diagramField",ref:t,onWheel:function(e){var t=(100*(R-e.deltaY/1e4)).toFixed(0);t>=50&&t<=150&&(S(R-e.deltaY/1e4),F())}},Object(s.values)(a).map((function(e){return r.a.createElement(Y,{key:e.id,id:e.id,parentRef:t.current,zoomValue:R,setWidthBlock:x,setHeightBlock:L,setHeightParentRef:function(e){t.current.style.height=e},setWidthParentRef:function(e){t.current.style.width=e}})})),r.a.createElement(k.Stage,{className:e.diagramCanvas,width:I,height:C},r.a.createElement(k.Layer,null,c.map((function(e){return r.a.createElement(k.Line,{key:"line".concat(e.fromId.answerId),points:[e.fromId.position.x,e.fromId.position.y,e.toId.position.x,e.toId.position.y],tension:5,stroke:w[e.color][700]})})))))),r.a.createElement(b.a,{className:e.infoWrapper},r.a.createElement(m.a,null,"\u041c\u0430\u0441\u0448\u0442\u0430\u0431: ".concat((100*R).toFixed(0),"%"))),r.a.createElement(f.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a"},r.a.createElement(g.a,{className:e.addBlockButton,onClick:function(){d("in".concat(Date.now()))}},r.a.createElement(h.a,{fontSize:"large"}))))})),ge=o(210),he=o(18),ye=o(51),Oe=o(107),we=o(108),je=o(13),ke=(o(177),o(2)),ve=(K=ke.f.bound,V=ke.f.bound,X=ke.f.bound,$=ke.f.bound,q=ke.f.bound,G=ke.f.bound,Q=ke.f.bound,Z=ke.f.bound,_=ke.f.bound,ee=ke.f.bound,te=ke.f.bound,oe=ke.f.bound,ne=ke.f.bound,re=ke.f.bound,ie=ke.f.bound,ae=ke.f.bound,ce=ke.f.bound,le=ke.f.bound,se=function(){function e(){Object(Oe.a)(this,e),Object(ye.a)(this,"blocks",de,this),Object(ye.a)(this,"lines",ue,this),Object(ye.a)(this,"lineAddMode",pe,this),Object(ye.a)(this,"lineFromBlockId",be,this),Object(ye.a)(this,"lineFromAnswerId",me,this)}return Object(we.a)(e,[{key:"addNewBlock",value:function(e){this.blocks[e]={id:e,header:{text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",color:"deepOrange"},inPosition:{x:0,y:0},answers:{},position:{x:100,y:50}}}},{key:"setLineAddMode",value:function(e){this.lineAddMode=e}},{key:"setLineColor",value:function(e){this.lines=this.lines.map((function(t){return Object(he.a)(Object(he.a)({},t),{},{color:t.fromId.answerId===e?"deepOrange":t.color})}))}},{key:"clearLineColor",value:function(){this.lines=this.lines.map((function(e){return Object(he.a)(Object(he.a)({},e),{},{color:"grey"})}))}},{key:"clearLine",value:function(){this.lineAddMode=!1,this.lineFromAnswerId="",this.lineFromBlockId="",this.lines=this.lines.filter((function(e){return!!e.toId.blockId}))}},{key:"deleteLine",value:function(e){this.lines=this.lines.filter((function(t){return t.fromId.answerId!==e}))}},{key:"startAddingLine",value:function(e,t){this.lineFromBlockId=e,this.lineFromAnswerId=t,this.lineAddMode=!0,this.lines.push({fromId:{blockId:e,answerId:t,position:this.blocks[e].answers[t].position},toId:{blockId:"",position:this.blocks[e].answers[t].position},color:"lightBlue"})}},{key:"addLine",value:function(e){var t=this;this.lines=this.lines.map((function(o){return Object(he.a)(Object(he.a)({},o),{},{toId:Object(he.a)(Object(he.a)({},o.toId),{},{blockId:o.fromId.answerId===t.lineFromAnswerId?e:o.toId.blockId,position:o.fromId.answerId===t.lineFromAnswerId?t.blocks[e].inPosition:o.toId.position}),color:"grey"})})),this.lineAddMode=!1,this.lineFromAnswerId="",this.lineFromBlockId=""}},{key:"setPositionLine",value:function(e,t){var o=this;this.lines=this.lines.map((function(n){return Object(he.a)(Object(he.a)({},n),{},{toId:Object(he.a)(Object(he.a)({},n.toId),{},{position:n.fromId.answerId===o.lineFromAnswerId?{x:n.toId.position.x+e,y:n.toId.position.y+t}:n.toId.position})})}))}},{key:"setPositionBlock",value:function(e,t,o){this.blocks[e].position={x:t,y:o}}},{key:"setPositionsInBlock",value:function(e,t,o){var n=this;this.blocks[e].inPosition={x:t,y:o+.5*document.getElementById("block".concat(e)).clientHeight},this.lines=this.lines.map((function(n){return Object(he.a)(Object(he.a)({},n),{},{toId:Object(he.a)(Object(he.a)({},n.toId),{},{position:n.toId.blockId===e?{x:t,y:o+.5*document.getElementById("block".concat(e)).clientHeight}:n.toId.position})})})),Object(s.values)(this.blocks[e].answers).forEach((function(r,i){var a=t+document.getElementById("block".concat(e)).clientWidth,c=o+document.getElementById("header".concat(e)).clientHeight+Object.keys(n.blocks[e].answers).slice(0,i+1).reduce((function(e,t){return e+6+document.getElementById("answer".concat(t)).clientHeight}),0)-.5*document.getElementById("answer".concat(r.id)).clientHeight;n.blocks[e].answers[r.id].position={x:a,y:c},n.lines=n.lines.map((function(e){return Object(he.a)(Object(he.a)({},e),{},{fromId:Object(he.a)(Object(he.a)({},e.fromId),{},{position:e.fromId.answerId===r.id?{x:a,y:c}:e.fromId.position})})}))}))}},{key:"addNewAnswer",value:function(e){this.blocks[e].answers["out".concat(Date.now())]={id:"out".concat(Date.now()),text:"\u0422\u0435\u043a\u0441\u0442 \u043e\u0442\u0432\u0435\u0442\u0430",color:"yellow"}}},{key:"deleteAnswer",value:function(e,t){this.lines=this.lines.filter((function(e){return e.fromId.answerId!==t})),delete this.blocks[e].answers[t]}},{key:"changeColorAnswer",value:function(e,t,o){this.blocks[e].answers[t].color=o}},{key:"changeColorHeader",value:function(e,t){this.blocks[e].header.color=t}},{key:"deleteBlock",value:function(e){this.lines=this.lines.filter((function(t){return t.fromId.blockId!==e&&t.toId.blockId!==e})),delete this.blocks[e]}},{key:"setAnswerText",value:function(e,t,o){this.blocks[e].answers[t].text=o}},{key:"setHeaderText",value:function(e,t){this.blocks[e].header.text=t}},{key:"getBlocks",get:function(){return Object(s.values)(this.blocks)}}]),e}(),de=Object(je.a)(se.prototype,"blocks",[ke.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),ue=Object(je.a)(se.prototype,"lines",[ke.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),pe=Object(je.a)(se.prototype,"lineAddMode",[ke.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),be=Object(je.a)(se.prototype,"lineFromBlockId",[ke.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),me=Object(je.a)(se.prototype,"lineFromAnswerId",[ke.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(je.a)(se.prototype,"getBlocks",[ke.g],Object.getOwnPropertyDescriptor(se.prototype,"getBlocks"),se.prototype),Object(je.a)(se.prototype,"addNewBlock",[K],Object.getOwnPropertyDescriptor(se.prototype,"addNewBlock"),se.prototype),Object(je.a)(se.prototype,"setLineAddMode",[V],Object.getOwnPropertyDescriptor(se.prototype,"setLineAddMode"),se.prototype),Object(je.a)(se.prototype,"setLineColor",[X],Object.getOwnPropertyDescriptor(se.prototype,"setLineColor"),se.prototype),Object(je.a)(se.prototype,"clearLineColor",[$],Object.getOwnPropertyDescriptor(se.prototype,"clearLineColor"),se.prototype),Object(je.a)(se.prototype,"clearLine",[q],Object.getOwnPropertyDescriptor(se.prototype,"clearLine"),se.prototype),Object(je.a)(se.prototype,"deleteLine",[G],Object.getOwnPropertyDescriptor(se.prototype,"deleteLine"),se.prototype),Object(je.a)(se.prototype,"startAddingLine",[Q],Object.getOwnPropertyDescriptor(se.prototype,"startAddingLine"),se.prototype),Object(je.a)(se.prototype,"addLine",[Z],Object.getOwnPropertyDescriptor(se.prototype,"addLine"),se.prototype),Object(je.a)(se.prototype,"setPositionLine",[_],Object.getOwnPropertyDescriptor(se.prototype,"setPositionLine"),se.prototype),Object(je.a)(se.prototype,"setPositionBlock",[ee],Object.getOwnPropertyDescriptor(se.prototype,"setPositionBlock"),se.prototype),Object(je.a)(se.prototype,"setPositionsInBlock",[te],Object.getOwnPropertyDescriptor(se.prototype,"setPositionsInBlock"),se.prototype),Object(je.a)(se.prototype,"addNewAnswer",[oe],Object.getOwnPropertyDescriptor(se.prototype,"addNewAnswer"),se.prototype),Object(je.a)(se.prototype,"deleteAnswer",[ne],Object.getOwnPropertyDescriptor(se.prototype,"deleteAnswer"),se.prototype),Object(je.a)(se.prototype,"changeColorAnswer",[re],Object.getOwnPropertyDescriptor(se.prototype,"changeColorAnswer"),se.prototype),Object(je.a)(se.prototype,"changeColorHeader",[ie],Object.getOwnPropertyDescriptor(se.prototype,"changeColorHeader"),se.prototype),Object(je.a)(se.prototype,"deleteBlock",[ae],Object.getOwnPropertyDescriptor(se.prototype,"deleteBlock"),se.prototype),Object(je.a)(se.prototype,"setAnswerText",[ce],Object.getOwnPropertyDescriptor(se.prototype,"setAnswerText"),se.prototype),Object(je.a)(se.prototype,"setHeaderText",[le],Object.getOwnPropertyDescriptor(se.prototype,"setHeaderText"),se.prototype),se);var Ie=Object(j.a)((function(e){var t=e.children,o=Object(ge.a)((function(){return new ve}));return r.a.createElement(M.Provider,{value:o},t)}));o(178);var xe=function(){return r.a.createElement(d,{components:[c.a,l.d,Ie]},r.a.createElement(l.b,{exact:!0,path:"/diagram",component:fe}),r.a.createElement(l.a,{from:"/",to:"/diagram"}))};a.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.1ee27c5a.chunk.js.map