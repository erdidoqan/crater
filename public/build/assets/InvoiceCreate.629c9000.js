import{a9 as F,r as s,o as d,c as M,a as t,x as n,h as a,H as Y,ai as A,az as O,l as J,M as K,m as Q,d as C,e as I,p as _,q as y,am as W,ak as X,Y as Z,v as ee,E as ne,j as b,g as k,b as $,t as L,n as te,z as oe,w as ie,F as ae}from"./main.b57b9d3d.js";import{_ as se,a as le,b as ce,c as re,d as ue,e as de,f as me}from"./SalesTax.0030bbe0.js";import{_ as ve}from"./ExchangeRateConverter.004ecdfb.js";import{_ as ge}from"./CreateCustomFields.088df4ad.js";import{_ as pe}from"./TaxTypeModal.db02c608.js";import"./DragIcon.73e1bbb2.js";import"./SelectNotePopup.1a80bc37.js";import"./NoteModal.29fc044d.js";import"./payment.cba21992.js";import"./exchange-rate.f20cfe90.js";const _e={class:"grid grid-cols-12 gap-8 mt-6 mb-8"},fe={__name:"InvoiceCreateBasicFields",props:{v:{type:Object,default:null},isLoading:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1}},setup(o){const e=F();return(m,l)=>{const B=s("BaseCustomerSelectPopup"),c=s("BaseDatePicker"),v=s("BaseInputGroup"),h=s("BaseInput"),u=s("BaseInputGrid");return d(),M("div",_e,[t(B,{modelValue:n(e).newInvoice.customer,"onUpdate:modelValue":l[0]||(l[0]=r=>n(e).newInvoice.customer=r),valid:o.v.customer_id,"content-loading":o.isLoading,type:"invoice",class:"col-span-12 lg:col-span-5 pr-0"},null,8,["modelValue","valid","content-loading"]),t(u,{class:"col-span-12 lg:col-span-7"},{default:a(()=>[t(v,{label:m.$t("invoices.invoice_date"),"content-loading":o.isLoading,required:"",error:o.v.invoice_date.$error&&o.v.invoice_date.$errors[0].$message},{default:a(()=>[t(c,{modelValue:n(e).newInvoice.invoice_date,"onUpdate:modelValue":l[1]||(l[1]=r=>n(e).newInvoice.invoice_date=r),"content-loading":o.isLoading,"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),t(v,{label:m.$t("invoices.due_date"),"content-loading":o.isLoading},{default:a(()=>[t(c,{modelValue:n(e).newInvoice.due_date,"onUpdate:modelValue":l[2]||(l[2]=r=>n(e).newInvoice.due_date=r),"content-loading":o.isLoading,"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),t(v,{label:m.$t("invoices.invoice_number"),"content-loading":o.isLoading,error:o.v.invoice_number.$error&&o.v.invoice_number.$errors[0].$message,required:""},{default:a(()=>[t(h,{modelValue:n(e).newInvoice.invoice_number,"onUpdate:modelValue":l[3]||(l[3]=r=>n(e).newInvoice.invoice_number=r),"content-loading":o.isLoading,onInput:l[4]||(l[4]=r=>o.v.invoice_number.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),t(ve,{store:n(e),"store-prop":"newInvoice",v:o.v,"is-loading":o.isLoading,"is-edit":o.isEdit,"customer-currency":n(e).newInvoice.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])]),_:1})])}}},Ie={class:"flex"},be={class:"block mt-10 invoice-foot lg:flex lg:justify-between lg:items-start"},we={class:"relative w-full lg:w-1/2 lg:mr-4"},V="newInvoice",Fe={__name:"InvoiceCreate",setup(o){const e=F(),m=Y(),l=A(),B=O(),{t:c}=J();let v=K(),h=Q(),u=C(!1);const r=C(!1),P=C(["customer","company","customerCustom","invoice","invoiceCustom"]);let f=I(()=>e.isFetchingInvoice||e.isFetchingInitialSettings),x=I(()=>g.value?c("invoices.edit_invoice"):c("invoices.new_invoice"));const E=I(()=>m.selectedCompanySettings.sales_tax_us_enabled==="YES"&&B.salesTaxUSEnabled);let g=I(()=>v.name==="invoices.edit");const T={invoice_date:{required:_.withMessage(c("validation.required"),y)},reference_number:{maxLength:_.withMessage(c("validation.price_maxlength"),W(255))},customer_id:{required:_.withMessage(c("validation.required"),y)},invoice_number:{required:_.withMessage(c("validation.required"),y)},exchange_rate:{required:X(function(){return _.withMessage(c("validation.required"),y),e.showExchangeRate}),decimal:_.withMessage(c("validation.valid_exchange_rate"),Z)}},w=ee(T,I(()=>e.newInvoice),{$scope:V});l.resetCustomFields(),w.value.$reset,e.resetCurrentInvoice(),e.fetchInvoiceInitialSettings(g.value),ne(()=>e.newInvoice.customer,i=>{i&&i.currency?e.newInvoice.selectedCurrency=i.currency:e.newInvoice.selectedCurrency=m.selectedCompanyCurrency});async function N(){if(w.value.$touch(),w.value.$invalid)return!1;u.value=!0;let i={...e.newInvoice,sub_total:e.getSubTotal,total:e.getTotal,tax:e.getTotalTax};try{const p=await(g.value?e.updateInvoice:e.addInvoice)(i);h.push(`/admin/invoices/${p.data.data.id}/view`)}catch(S){console.error(S)}u.value=!1}return(i,S)=>{const p=s("BaseBreadcrumbItem"),U=s("BaseBreadcrumb"),q=s("BaseButton"),D=s("router-link"),G=s("BaseIcon"),j=s("BasePageHeader"),z=s("BaseScrollPane"),H=s("BasePage");return d(),M(ae,null,[t(se),t(le),t(pe),E.value&&(!n(f)||n(v).query.customer)?(d(),b(ce,{key:0,store:n(e),"is-edit":n(g),"store-prop":"newInvoice",customer:n(e).newInvoice.customer},null,8,["store","is-edit","customer"])):k("",!0),t(H,{class:"relative invoice-create-page"},{default:a(()=>[$("form",{onSubmit:ie(N,["prevent"])},[t(j,{title:n(x)},{actions:a(()=>[i.$route.name==="invoices.edit"?(d(),b(D,{key:0,to:`/invoices/pdf/${n(e).newInvoice.unique_hash}`,target:"_blank"},{default:a(()=>[t(q,{class:"mr-3",variant:"primary-outline",type:"button"},{default:a(()=>[$("span",Ie,L(i.$t("general.view_pdf")),1)]),_:1})]),_:1},8,["to"])):k("",!0),t(q,{loading:n(u),disabled:n(u),variant:"primary",type:"submit"},{left:a(R=>[n(u)?k("",!0):(d(),b(G,{key:0,name:"SaveIcon",class:te(R.class)},null,8,["class"]))]),default:a(()=>[oe(" "+L(i.$t("invoices.save_invoice")),1)]),_:1},8,["loading","disabled"])]),default:a(()=>[t(U,null,{default:a(()=>[t(p,{title:i.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),t(p,{title:i.$tc("invoices.invoice",2),to:"/admin/invoices"},null,8,["title"]),i.$route.name==="invoices.edit"?(d(),b(p,{key:0,title:i.$t("invoices.edit_invoice"),to:"#",active:""},null,8,["title"])):(d(),b(p,{key:1,title:i.$t("invoices.new_invoice"),to:"#",active:""},null,8,["title"]))]),_:1})]),_:1},8,["title"]),t(fe,{v:n(w),"is-loading":n(f),"is-edit":n(g)},null,8,["v","is-loading","is-edit"]),t(z,null,{default:a(()=>[t(re,{currency:n(e).newInvoice.selectedCurrency,"is-loading":n(f),"item-validation-scope":V,store:n(e),"store-prop":"newInvoice"},null,8,["currency","is-loading","store"]),$("div",be,[$("div",we,[t(ue,{store:n(e),"store-prop":"newInvoice",fields:P.value,type:"Invoice"},null,8,["store","fields"]),t(ge,{type:"Invoice","is-edit":n(g),"is-loading":n(f),store:n(e),"store-prop":"newInvoice","custom-field-scope":V,class:"mb-6"},null,8,["is-edit","is-loading","store"]),t(de,{store:n(e),"store-prop":"newInvoice","component-name":"InvoiceTemplate","is-mark-as-default":r.value},null,8,["store","is-mark-as-default"])]),t(me,{currency:n(e).newInvoice.selectedCurrency,"is-loading":n(f),store:n(e),"store-prop":"newInvoice","tax-popup-type":"invoice"},null,8,["currency","is-loading","store"])])]),_:1})],32)]),_:1})],64)}}};export{Fe as default};