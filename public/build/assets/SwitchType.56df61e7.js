import{k as p,r,o as m,s as d,y as c,a0 as i}from"./vendor.e9042f2c.js";const f={props:{modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue"],setup(t,{emit:a}){const n=t,e=p({get:()=>n.modelValue===1,set:l=>{a("update:modelValue",l?1:0)}});return(l,o)=>{const s=r("BaseSwitch");return m(),d(s,{modelValue:c(e),"onUpdate:modelValue":o[0]||(o[0]=u=>i(e)?e.value=u:null)},null,8,["modelValue"])}}};export{f as default};