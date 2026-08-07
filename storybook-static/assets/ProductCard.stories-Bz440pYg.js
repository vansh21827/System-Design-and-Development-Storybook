import{i as e}from"./preload-helper-CT_b8DTk.js";import{i as t,n,t as r}from"./iframe-DyVw_63v.js";import{n as i,t as a}from"./Badge-Bo2hfBup.js";import{n as o,t as s}from"./Button-B159AdO5.js";var c=e((()=>{}));function l({product:e}){let n=t();return(0,u.jsxs)(`div`,{className:`product-card`,children:[e.discountPercentage>0&&(0,u.jsx)(`div`,{className:`discount-badge`,children:(0,u.jsxs)(a,{variant:`danger`,children:[Math.round(e.discountPercentage),`% OFF`]})}),(0,u.jsx)(`div`,{className:`product-image`,children:(0,u.jsx)(`img`,{src:e.thumbnail,alt:e.title})}),(0,u.jsxs)(`div`,{className:`product-info`,children:[(0,u.jsx)(`p`,{className:`product-brand`,children:e.brand||e.category}),(0,u.jsx)(`h3`,{children:e.title}),(0,u.jsxs)(`div`,{className:`rating`,children:[`⭐ `,e.rating]}),(0,u.jsx)(`div`,{className:`price-section`,children:(0,u.jsxs)(`span`,{className:`price`,children:[`$`,e.price]})}),(0,u.jsx)(s,{variant:e.stock===0?`secondary`:`primary`,disabled:e.stock===0,fullWidth:!0,onClick:()=>n(`/product/${e.id}`),children:e.stock===0?`Out of Stock`:`View Details`})]})]})}var u,d=e((()=>{n(),o(),i(),c(),u=r(),l.__docgenInfo={description:``,methods:[],displayName:`ProductCard`}})),f,p=e((()=>{f=``+new URL(`iphone-BX-W83Uf.png`,import.meta.url).href})),m,h,g,_,v,y,b,x,S;e((()=>{d(),p(),m=r(),h={id:1,title:`iPhone 16 Pro`,brand:`Apple`,category:`Smartphones`,thumbnail:f,price:999,rating:4.8,discountPercentage:18},g={title:`Components/ProductCard`,component:l,decorators:[e=>(0,m.jsx)(`div`,{style:{width:`340px`,margin:`40px auto`},children:(0,m.jsx)(e,{})})]},_={args:{product:h}},v={args:{product:{id:2,title:`Smartwatch`,brand:`Apple`,category:`Smartwatches`,thumbnail:`/src/assets/smartwatch.png`,price:499,rating:4.7,discountPercentage:10}}},y={args:{product:{id:1,title:`MacBook Pro`,brand:`Apple`,category:`Laptops`,thumbnail:`/src/assets/macbook.png`,price:2499,rating:5,discountPercentage:12}}},b={args:{product:{id:1,title:`iPad`,brand:`Apple`,category:`Electronics`,thumbnail:`/src/assets/ipad.png`,price:1399,rating:4.8,discountPercentage:20}}},x={args:{product:{id:1,title:`Speaker`,brand:`Apple`,category:`SoundBox`,thumbnail:`/src/assets/speaker.png`,price:299,rating:4.8,discountPercentage:0,stock:0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    product
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      "id": 2,
      "title": "Smartwatch",
      "brand": "Apple",
      "category": "Smartwatches",
      "thumbnail": "/src/assets/smartwatch.png",
      "price": 499,
      "rating": 4.7,
      "discountPercentage": 10
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      "id": 1,
      "title": "MacBook Pro",
      "brand": "Apple",
      "category": "Laptops",
      "thumbnail": "/src/assets/macbook.png",
      "price": 2499,
      "rating": 5,
      "discountPercentage": 12
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      "id": 1,
      "title": "iPad",
      "brand": "Apple",
      "category": "Electronics",
      "thumbnail": "/src/assets/ipad.png",
      "price": 1399,
      "rating": 4.8,
      "discountPercentage": 20
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      "id": 1,
      "title": "Speaker",
      "brand": "Apple",
      "category": "SoundBox",
      "thumbnail": "/src/assets/speaker.png",
      "price": 299,
      "rating": 4.8,
      "discountPercentage": 0,
      "stock": 0
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`NoDiscount`,`Expensive`,`Discount`,`OutOfStock`]}))();export{_ as Default,b as Discount,y as Expensive,v as NoDiscount,x as OutOfStock,S as __namedExportsOrder,g as default};