(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{7048:function(a,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var n=s(7294),o=s(4051),r=s(682),i=s(1555),l=s(1330),t=s(9501),d=s(7513),u=s(7538),c=s(2151),m=s(5005),p=s(1163),w=s(4857),f=n.createElement,Z=function(){var a=(0,p.useRouter)(),e=(0,n.useState)(!1),s=e[0],l=e[1],Z=(0,n.useState)(""),g=Z[0],h=Z[1],b=(0,n.useState)(!1),v=b[0],y=b[1],N=t.Ry().shape({email:t.Z_().email().required(),password:t.Z_().min(6).max(12).required(),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match").required()});return f("section",null,s&&f(u.Z,{variant:"danger"},g),v&&f(u.Z,{variant:"success"},"Successfully login in!"),f(d.J9,{validationSchema:N,onSubmit:function(e,s){var n=s.resetForm,o=e.email,r=e.password;l(!1),h(""),y(!1),w.Z.auth().createUserWithEmailAndPassword(o,r).then((function(e){y(!0),n(),a.push("/dashboard"),localStorage.setItem("token",e.user.refreshToken),console.log(e)})).catch((function(a){console.log(a.message),l(!0),h(a.message)}))},initialValues:{email:"",password:"",confirmPassword:""}},(function(a){var e=a.handleSubmit,s=a.handleChange,n=a.values,l=a.touched,t=a.errors;return f(c.Z,{className:"login_form",noValidate:!0,onSubmit:e},f(r.Z,null,f(o.Z,null,f(i.Z,{md:12},f("h2",{className:"login"},"Signup"),f(c.Z.Group,{className:"email",controlId:"email"},f(c.Z.Label,null,"Email"),f(c.Z.Control,{type:"email",name:"email",placeholder:"Email",onChange:s,value:n.email,isValid:l.email&&!t.email,isInvalid:l.email&&t.email}),f(c.Z.Control.Feedback,{type:"invalid"},t.email))),f(i.Z,{md:12},f(c.Z.Group,{className:"password",controlId:"password"},f(c.Z.Label,null,"Password"),f(c.Z.Control,{type:"password",name:"password",placeholder:"Password",onChange:s,value:n.password,isValid:l.password&&!t.password,isInvalid:l.password&&t.password}),f(c.Z.Control.Feedback,{type:"invalid"},t.password)),f(c.Z.Group,{className:"password",controlId:"confirmPassword"},f(c.Z.Label,null,"Confirm Password"),f(c.Z.Control,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",onChange:s,value:n.confirmPassword,isValid:l.confirmPassword&&!t.confirmPassword,isInvalid:l.confirmPassword&&t.confirmPassword}),f(c.Z.Control.Feedback,{type:"invalid"},t.confirmPassword)),f(m.Z,{variant:"primary",type:"submit",className:"button"},"Submit")))))})))},g=n.createElement;function h(){return g(r.Z,{className:"signup",fluid:!0},g(o.Z,null,g(i.Z,{md:6,className:"mx-auto"},g("div",null,g(l.Z,{src:"/images/Readaway-logo-2.png",alt:"Readaway",className:"logo mt-2"})),g("div",null,g("p",{className:"intro2"},"Create your Readaway account today!")),g("div",null,g(l.Z,{src:"/images/Readaway-image2.png",alt:"Reading2",className:"reading-image2",fluid:!0}))),g(i.Z,{md:6,className:"mx-auto"},g(Z,null))))}},4857:function(a,e,s){"use strict";var n=s(5503);s(6690);0===n.Z.apps.length&&n.Z.initializeApp({apiKey:"AIzaSyCSIR30NJ1kwnUpkz3_q4Jug1aiH1uigBM",authDomain:"readaway-cc9bf.firebaseapp.com",projectId:"readaway-cc9bf",storageBucket:"readaway-cc9bf.appspot.com",messagingSenderId:"800497666000",appId:"1:800497666000:web:92b49eb1cfe73e95b7dbd5",measurementId:"G-QKGHYCJBRX"}),e.Z=n.Z},9758:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Signup",function(){return s(7048)}])}},function(a){a.O(0,[774,834,588,764,888,179],(function(){return e=9758,a(a.s=e);var e}));var e=a.O();_N_E=e}]);