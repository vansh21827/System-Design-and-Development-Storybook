import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-DyVw_63v.js";import{t as r}from"./prop-types-CAcijpg_.js";var i=e((()=>{})),a,o,s,c=e((()=>{a=t(r(),1),i(),o=n(),s=({label:e,placeholder:t,type:n=`text`,value:r,onChange:i,disabled:a=!1,error:s=``,fullWidth:c=!1})=>(0,o.jsxs)(`div`,{className:`input-group ${c?`full-width`:``}`,children:[e&&(0,o.jsx)(`label`,{className:`input-label`,children:e}),(0,o.jsx)(`input`,{className:`input-field ${s?`input-error`:``}`,type:n,placeholder:t,value:r,onChange:i,disabled:a}),s&&(0,o.jsx)(`span`,{className:`input-error-text`,children:s})]}),s.propTypes={label:a.default.string,placeholder:a.default.string,type:a.default.string,value:a.default.string,onChange:a.default.func,disabled:a.default.bool,error:a.default.string,fullWidth:a.default.bool},s.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{type:{defaultValue:{value:`"text"`,computed:!1},description:``,type:{name:`string`},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},description:``,type:{name:`bool`},required:!1},error:{defaultValue:{value:`""`,computed:!1},description:``,type:{name:`string`},required:!1},fullWidth:{defaultValue:{value:`false`,computed:!1},description:``,type:{name:`bool`},required:!1},label:{description:``,type:{name:`string`},required:!1},placeholder:{description:``,type:{name:`string`},required:!1},value:{description:``,type:{name:`string`},required:!1},onChange:{description:``,type:{name:`func`},required:!1}}}})),l,u,d,f,p,m;e((()=>{c(),l={title:`Components/Input`,component:s,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`]},disabled:{control:`boolean`},fullWidth:{control:`boolean`}}},u={args:{label:`Email`,placeholder:`Enter your email`}},d={args:{label:`Password`,placeholder:`Enter password`,type:`password`}},f={args:{label:`Username`,placeholder:`Disabled`,disabled:!0}},p={args:{label:`Email`,placeholder:`Enter email`,error:`Invalid email address`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Disabled",
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address"
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Password`,`Disabled`,`Error`]}))();export{u as Default,f as Disabled,p as Error,d as Password,m as __namedExportsOrder,l as default};