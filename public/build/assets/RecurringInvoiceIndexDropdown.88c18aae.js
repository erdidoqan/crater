import{aO as E,u as b,aa as k,N as x,l as C,M as S,m as V,a5 as $,r as c,o as a,j as n,h as o,x as t,a as r,R as p,z as _,t as f,g as v}from"./main.b57b9d3d.js";const z={__name:"RecurringInvoiceIndexDropdown",props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:()=>{}}},setup(l){const y=l,d=E(),h=b(),D=k(),m=x(),{t:s}=C(),w=S();V(),$("utils");async function N(i=null){D.openDialog({title:s("general.are_you_sure"),message:s("invoices.confirm_delete"),yesLabel:s("general.ok"),noLabel:s("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async u=>{u&&await d.deleteMultipleRecurringInvoices(i).then(e=>{e.data.success?(y.table&&y.table.refresh(),d.$patch(g=>{g.selectedRecurringInvoices=[],g.selectAllField=!1}),h.showNotification({type:"success",message:s("recurring_invoices.deleted_message",2)})):e.data.error&&h.showNotification({type:"error",message:e.data.message})})})}return(i,u)=>{const e=c("BaseIcon"),g=c("BaseButton"),I=c("BaseDropdownItem"),R=c("router-link"),B=c("BaseDropdown");return a(),n(B,{"content-loading":t(d).isFetchingViewData},{activator:o(()=>[t(w).name==="recurring-invoices.view"?(a(),n(g,{key:0,variant:"primary"},{default:o(()=>[r(e,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(a(),n(e,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:o(()=>[t(m).hasAbilities(t(p).EDIT_RECURRING_INVOICE)?(a(),n(R,{key:0,to:`/admin/recurring-invoices/${l.row.id}/edit`},{default:o(()=>[r(I,null,{default:o(()=>[r(e,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),_(" "+f(i.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):v("",!0),t(w).name!=="recurring-invoices.view"&&t(m).hasAbilities(t(p).VIEW_RECURRING_INVOICE)?(a(),n(R,{key:1,to:`recurring-invoices/${l.row.id}/view`},{default:o(()=>[r(I,null,{default:o(()=>[r(e,{name:"EyeIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),_(" "+f(i.$t("general.view")),1)]),_:1})]),_:1},8,["to"])):v("",!0),t(m).hasAbilities(t(p).DELETE_RECURRING_INVOICE)?(a(),n(I,{key:2,onClick:u[0]||(u[0]=O=>N(l.row.id))},{default:o(()=>[r(e,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),_(" "+f(i.$t("general.delete")),1)]),_:1})):v("",!0)]),_:1},8,["content-loading"])}}};export{z as _};