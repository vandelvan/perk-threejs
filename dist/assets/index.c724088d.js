import{S as y,P as g,W as h,T as f,a as b,M as x,b as u,c as L,A as M,O as v,d as S,e as z,f as P}from"./vendor.7cb1db8d.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};A();const s=new y,i=new g(75,window.innerWidth/window.innerHeight,.1,1e3),d=new h({canvas:document.querySelector("#bg")});d.setPixelRatio(window.devicePixelRatio);d.setSize(window.innerWidth,window.innerHeight);i.position.setZ(30);const O=new f().load("assets/mntn.jpg"),C=new f().load("assets/normal.jpg"),E=new b(20,1),R=new x({map:O,normalMap:C}),n=new u(E,R);s.add(n);const m=new L(16777215);m.position.set(5,5,5);const T=new M(16777215);s.add(m,T);const W=new v(i,d.domElement),j=new f().load("assets/aurora.jpg");s.background=j;var p=[];function q(){const r=new S(20,1,100,5,2,3),o=new z({color:16777215,wireframe:!0}),a=new u(r,o),[c,e,t]=Array(3).fill().map(()=>P.randFloatSpread(100));a.position.set(c,e,t),s.add(a),p.push(a)}Array(15).fill().forEach(q);n.position.z=-50;n.position.x=50;function F(){const r=document.body.getBoundingClientRect().top;n.rotation.x+=.05,n.rotation.y+=.075,n.rotation.z+=.05,p.forEach(function(o){o.rotation.x+=.05,o.rotation.y+=.075,o.rotation.z+=.05}),i.position.z=r*-.01,i.position.x=r*-2e-4,i.position.y=r*-2e-4}document.body.onscroll=F;function w(){requestAnimationFrame(w),n.rotation.x+=.001,n.rotation.y+=.001,n.rotation.z+=.001,W.update(),d.render(s,i)}w();