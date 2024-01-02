"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[954],{309:(e,n,t)=>{t.d(n,{OL:()=>x,Wi:()=>h,Xq:()=>u,lX:()=>p,x:()=>d});var o,r,i,s,c,a=t(168),l=t(867),m=t(705);const d=(0,l.ZP)(m.l0)(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  width: 400px;\n  margin-bottom: ",";\n"])),(e=>e.theme.spacing(2)),(e=>e.theme.spacing(8))),h=(0,l.ZP)(m.gN)(r||(r=(0,a.Z)(["\n  padding: "," ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  font-size: 18px;\n  font-weight: 400;\n"])),(e=>e.theme.spacing(1)),(e=>e.theme.spacing(3)),(e=>e.theme.colors.purple),(e=>e.theme.radii.m)),p=l.ZP.label(i||(i=(0,a.Z)(["\n  text-align: start;\n  font-size: 16px;\n  font-weight: 500;\n  color: ",";\n"])),(e=>e.theme.colors.black)),x=l.ZP.button(s||(s=(0,a.Z)(["\n  width: 144px;\n  padding: ",";\n  margin-top: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  border: 4px solid ",";\n  font-size: 18px;\n  font-weight: 400;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border: 4px solid ",";\n    color: ",";\n    font-weight: 600;\n  }\n"])),(e=>e.theme.spacing(2)),(e=>e.theme.spacing(6)),(e=>e.theme.colors.green),(e=>e.theme.colors.white),(e=>e.theme.radii.l),(e=>e.theme.colors.green),(e=>e.theme.colors.darkGreen),(e=>e.theme.colors.darkGreen)),u=(0,l.ZP)(m.Bc)(c||(c=(0,a.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: auto;\n"])),(e=>e.theme.colors.red))},954:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var o=t(791),r=t(420),i=t(553);const s=e=>e.contacts.items,c=e=>e.filter,a=e=>e.contacts.isLoading,l=e=>e.contacts.error,m=(0,i.P1)([s,c],((e,n)=>e.filter((e=>e.name.toLowerCase().includes(n.toLowerCase().trim())))));var d,h,p,x=t(634),u=t(168),g=t(867);const b=g.ZP.div(d||(d=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: "," auto;\n  padding: ",";\n  background-color: ",";\n  border-radius: ",";\n  width: 600px;\n  border: 1px solid ",";\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);\n"])),(e=>e.theme.spacing(6)),(e=>e.theme.spacing(6)),(e=>e.theme.colors.light),(e=>e.theme.radii.l),(e=>e.theme.colors.purple)),f=g.ZP.h1(h||(h=(0,u.Z)(["\n  color: ",";\n  margin-bottom: ",";\n  font-size: 40px;\n"])),(e=>e.theme.colors.black),(e=>e.theme.spacing(6))),w=g.ZP.h2(p||(p=(0,u.Z)(["\n  color: ",";\n  margin-bottom: ",";\n  font-size: 32px;\n"])),(e=>e.theme.colors.black),(e=>e.theme.spacing(2)));var j=t(705),Z=t(7),v=t(309),k=t(218),y=t(184);const P=Z.Ry().shape({name:Z.Z_().required("Required"),number:Z.Z_().matches(/^\d{3}-\d{2}-\d{2}$/g,"Number format: xxx-xx-xx").required("Required")}),z=()=>{const e=(0,r.v9)(s),n=(0,r.I0)();return(0,y.jsx)(j.J9,{initialValues:{name:"",number:""},validationSchema:P,onSubmit:(t,o)=>{if(e.some((e=>e.name.toLowerCase()===t.name.toLowerCase())))return o.resetForm(),k.ZP.error("".concat(t.name," is already in your contacts."));n((0,x.uK)(t)),o.resetForm()},children:(0,y.jsxs)(v.x,{children:[(0,y.jsx)(v.lX,{htmlFor:"name",children:"Name"}),(0,y.jsx)(v.Wi,{type:"text",name:"name",id:"name",required:!0,autoComplete:"on"}),(0,y.jsx)(v.Xq,{name:"name",component:"span"}),(0,y.jsx)(v.lX,{htmlFor:"number",children:"Number"}),(0,y.jsx)(v.Wi,{type:"tel",name:"number",id:"number",placeholder:"xxx-xx-xx",required:!0,autoComplete:"on"}),(0,y.jsx)(v.Xq,{name:"number",component:"span"}),(0,y.jsx)(v.OL,{type:"submit",children:"Add contact"})]})})};var C,q,L;const F=g.ZP.li(C||(C=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 400px;\n  margin-left: ",";\n  margin-top: ",";\n"])),(e=>e.theme.spacing(4)),(e=>e.theme.spacing(3))),X=g.ZP.p(q||(q=(0,u.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n"])),(e=>e.theme.colors.black)),_=g.ZP.button(L||(L=(0,u.Z)(["\n  padding: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    font-weight: 600;\n  }\n"])),(e=>e.theme.spacing(1.5)),(e=>e.theme.colors.purple),(e=>e.theme.colors.white),(e=>e.theme.radii.m),(e=>e.theme.colors.red)),I=e=>{let{contact:{name:n,number:t,id:o}}=e;const i=(0,r.I0)();return(0,y.jsxs)(F,{children:[(0,y.jsxs)(X,{children:[n,": ",t]}),(0,y.jsx)(_,{type:"button",onClick:()=>i((0,x.GK)(o)),children:"Delete"})]})},N=()=>{const e=(0,r.v9)(m);return(0,y.jsx)("ul",{children:e.map((e=>(0,y.jsx)(I,{contact:e},e.id)))})};var G,R;const S=g.ZP.h3(G||(G=(0,u.Z)(["\n  margin-bottom: ",";\n  color: ",";\n  font-size: 18px;\n  font-weight: 500;\n"])),(e=>e.theme.spacing(2)),(e=>e.theme.colors.black)),W=g.ZP.input(R||(R=(0,u.Z)(["\n  width: 400px;\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  font-size: 18px;\n  font-weight: 400;\n"])),(e=>e.theme.spacing(1)),(e=>e.theme.colors.blue),(e=>e.theme.radii.m));var D=t(808);const J=()=>{const e=(0,r.v9)(c),n=(0,r.I0)();return(0,y.jsxs)("div",{children:[(0,y.jsx)(S,{children:"Find contacts by name"}),(0,y.jsx)(W,{type:"text",value:e,name:"filter",id:"filter",onChange:e=>n((0,D.M6)(e.target.value)),required:!0})]})};var K;const O=g.ZP.div(K||(K=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"])));var A=t(137);const B=()=>(0,y.jsx)(O,{children:(0,y.jsx)(A.CJ,{visible:!0,height:"80",width:"80",color:"#320D51",ariaLabel:"triangle-loading",wrapperStyle:{},wrapperClass:""})});var E=t(50);const M=()=>{const e=(0,r.I0)(),n=(0,r.v9)(a),t=(0,r.v9)(l);return(0,o.useEffect)((()=>{e((0,x.yF)())}),[e]),(0,y.jsxs)("div",{children:[n&&!t&&(0,y.jsx)(B,{}),(0,y.jsx)(E.ql,{children:(0,y.jsx)("title",{children:"Your contactss"})}),(0,y.jsxs)(b,{children:[(0,y.jsx)(f,{children:"Phonebook"}),(0,y.jsx)(z,{}),(0,y.jsx)(w,{children:"Contacts"}),(0,y.jsx)(J,{}),(0,y.jsx)(N,{})]})]})}}}]);
//# sourceMappingURL=954.ce35e333.chunk.js.map