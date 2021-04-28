(this["webpackJsonpfemm-sim-gen-app"]=this["webpackJsonpfemm-sim-gen-app"]||[]).push([[0],{63:function(n){n.exports=JSON.parse('{"name":"femm-sim-gen-app","homepage":"http://CJohnson25.github.io/femm-sim-gen-app","version":"0.2.0","private":true,"dependencies":{"@material-ui/core":"^4.11.3","@material-ui/icons":"^4.11.2","@testing-library/jest-dom":"^5.12.0","@testing-library/react":"^11.2.6","@testing-library/user-event":"^12.8.3","clipboard-copy":"^4.0.1","fontsource-roboto":"^4.0.0","react":"^17.0.2","react-dom":"^17.0.2","react-scripts":"4.0.3","web-vitals":"^1.1.1"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.1.0"}}')},80:function(n,e,t){},81:function(n,e,t){},92:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),l=t(10),c=t.n(l),o=(t(80),t(47)),r=t(30),s=(t(81),t(82),t(145)),d=t(131),_=t(132),h=t(146),b=t(135),u=t(136),j=t(141),A=t(137),m=t(94),x=t(95),g=t(148),O=t(142),H=t(138),f=t(139),p=t(140),T=t(96),G=t(56),I=t.n(G),C=t(144),N=t(3);function E(n){var e=n.children,t=i.a.useState(!1),a=Object(r.a)(t,2),l=a[0],c=a[1];return Object(N.jsx)(C.a,{open:l,title:"Copied to clipboard!",leaveDelay:1500,onClose:function(){c(!1)},children:e({copy:function(n){I()(n),c(!0)}})})}var y=t(64),v=t.n(y),M=t(65),B=t.n(M),L=t(63);var w=function(){var n=["N30","N33","N35","N38","N40","N42","N45","N48","N50","N52","N55"],e=["1006 Steel","1010 Steel","1018 Steel","1020 Steel","1117 Steel"],t={UNITS:"millimeters",MAGNET_WIDTH:1,MAGNET_HEIGHT:1,MAGNET_GRADE:"N50",HALBACH:0,HALBACH_WIDTH:1,HALBACH_HEIGHT:1,HALBACH_GRADE:"N50",BACK_IRON:0,BACK_IRON_HEIGHT:1,IRON_MATERIAL:"1006 Steel",POLE_COUNT:5,AIR_GAP:1,MAGNET_GAP:0},a=i.a.useState(t),l=Object(r.a)(a,2),c=l[0],G=l[1],I=i.a.useState(t.HALBACH),C=Object(r.a)(I,2),y=C[0],M=C[1],w=i.a.useState(t.BACK_IRON),R=Object(r.a)(w,2),D=R[0],P=R[1],S=i.a.useState($(t)),W=Object(r.a)(S,2),k=W[0],K=W[1],U=n.map((function(n,e){return Object(N.jsx)(s.a,{value:n,children:n},e)})),F=e.map((function(n,e){return Object(N.jsx)(s.a,{value:n,children:n},e)})),J=Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.HALBACH_WIDTH,name:"HALBACH_WIDTH",label:"Halbach Width"})})}),Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.HALBACH_HEIGHT,name:"HALBACH_HEIGHT",label:"Halbach Height"})})}),Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsxs)(b.a,{fullWidth:!0,children:[Object(N.jsx)(u.a,{children:"Halbach Grade"}),Object(N.jsx)(j.a,{value:c.HALBACH_GRADE,children:U})]})})]}),Y=Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(d.a,{item:!0,xs:6,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.BACK_IRON_HEIGHT,name:"BACK_IRON_HEIGHT",label:"Back Iron Height"})})}),Object(N.jsx)(d.a,{item:!0,xs:6,children:Object(N.jsxs)(b.a,{fullWidth:!0,children:["Iron Material",Object(N.jsx)(j.a,{onChange:X,name:"IRON_MATERIAL",value:c.IRON_MATERIAL,children:F})]})})]});function X(n){var e=n.target.value;e.match(/^[0-9]+$|^[0-9]+\.[0-9]*$/)&&(c[n.target.name]=e,G(Object(o.a)({},c)),K($(c)))}function $(n){return JSON.stringify(n,null,2).replace(/^{\n?|\n?}$/g,"").replace(/"(.*)": /g,"$1 = ").replace(/,\n/g,"\n")+'\n\n function init () \n  -- Create Doc\n  showconsole()\n  newdocument(0)\n\n  -- Init Problem\n  mi_probdef(0, UNITS, "planar", 1e-008)\n\n  -- Init Grid\n  mi_showgrid()\n  mi_setgrid(0.001, "cart")\n\n  -- Add materials\n  mi_getmaterial("Air")\n  mi_getmaterial(IRON_MATERIAL)\n  mi_getmaterial(MAGNET_GRADE)\n  if HALBACH == 1 then\n    mi_getmaterial(HALBACH_GRADE)\n  end\n\n  build_objects()\n\n  mi_zoomnatural()\nend\n\nfunction get_v_gap () \n  return get_total_height() * 2\nend\n\nfunction get_h_gap ()\n  return get_total_width() * 1\nend\n\nfunction get_bound_height()\n  return get_v_gap() * 3\nend\n\nfunction get_bound_width() \n  return get_h_gap() * 3\nend\n\nfunction get_pole_width ()\n  local pole_width = MAGNET_WIDTH + MAGNET_GAP\n  if HALBACH == 1 then\n    pole_width = pole_width + HALBACH_WIDTH + MAGNET_GAP\n  end\n\n  return pole_width\nend\n\nfunction get_total_width ()\n  if HALBACH == 1 then\n    return (get_nonhalbach_count() - 1) * (MAGNET_WIDTH + MAGNET_GAP) + get_halbach_count() * (HALBACH_WIDTH + MAGNET_GAP)\n  else\n    return (get_nonhalbach_count() - 1) * (MAGNET_WIDTH + MAGNET_GAP)\n  end\nend\n\nfunction get_total_height ()\n  local total_height = MAGNET_HEIGHT*2 + AIR_GAP\n  if BACK_IRON == 1 then\n    total_height = total_height + BACK_IRON_HEIGHT*2\n  end\n\n  return total_height\nend\n\nfunction get_halbach_count() \n  return POLE_COUNT\nend\n\nfunction get_nonhalbach_count() \n  return POLE_COUNT + 1 \nend\n\nfunction get_total_magnet_count ()\n  if HALBACH == 1 then\n    return get_nonhalbach_count() + get_halbach_count()\n  else \n    return get_nonhalbach_count()\n  end\nend\n\n\nfunction build_objects ()\n  build_air_bounds()\n  -- Build the sides separately\n  build_rotor(0)\n  build_rotor(1)\n  build_analysis_nodes()\nend\n\nfunction build_air_bounds()\n  build_block(0, 0, get_bound_width() , get_bound_height(), "Air", "corner", 0)\nend\n\nfunction build_rotor(side) \n  build_rotor_magnets(side)\n  if BACK_IRON == 1 then\n    local x = get_h_gap()\n    local y = get_v_gap() - BACK_IRON_HEIGHT\n    if side == 1 then \n      y = get_v_gap() + AIR_GAP + MAGNET_HEIGHT*2\n    end\n    build_rotor_iron(x, y, BACK_IRON_HEIGHT, \'1006 Steel\')\n  end\nend\n\nfunction build_rotor_magnets (side)\n  local count = get_total_magnet_count()\n  \n  local modulus = 2\n  if HALBACH == 1 then \n    modulus = 4\n  end\n  \n  local current_offset = get_h_gap()\n  local y = get_v_gap()\n  if side == 1 then\n    y = get_v_gap() + MAGNET_HEIGHT + AIR_GAP\n  end\n\n  local offset = 90\n  if HALBACH == 1 then\n    offset = 0\n  end\n\n  for i = 0, count - 1 do\n    local direction = (360/modulus) * (mod(i, modulus) + 1) + offset\n    if side == 1 then\n      direction =  (360/modulus) * (modulus - mod(i, modulus) + 1) + offset\n    end\n\n    print(\'direction: \', direction)\n    local is_halbach = 0\n    local is_end = 0\n    local width = MAGNET_WIDTH\n\n    -- If iterating Halbach and If current iteration is halbach magnet\n    if HALBACH == 1 and mod(i, 2) == 1 then\n      is_halbach = 1\n      width = HALBACH_WIDTH\n    end\n\n    -- First or last iteration are half magnets\n    if i == 0 or i == count - 1 then\n      is_end = 1\n      width = width/2\n    end\n\n    build_magnet(current_offset, y, direction, is_halbach, is_end)\n    current_offset = current_offset + width + MAGNET_GAP\n  end\nend\n\nfunction build_magnet (x, y, direction, is_halbach, is_end)\n  local w = MAGNET_WIDTH\n  local h = MAGNET_HEIGHT\n  local grade = MAGNET_GRADE\n\n  if is_halbach == 1 then\n    w = HALBACH_WIDTH\n    h = HALBACH_HEIGHT\n    grade = HALBACH_GRADE\n  end \n\n  if is_end == 1 then\n    w = w/2\n  end\n\n  build_block(x, y, w, h, grade, "center", direction)\nend\n\n\nfunction build_rotor_iron (x, y)\n  build_block(x, y, get_total_width(), BACK_IRON_HEIGHT, IRON_MATERIAL, center, 0)\nend\n\nfunction build_block(x, y, w, h, material, label_position, direction)\n  local x1 = x + w\n  local y1 = y + h\n\n  mi_addnode(x, y)\n  mi_addnode(x1, y)\n  mi_addnode(x, y1)\n  mi_addnode(x1, y1)\n\n  mi_addsegment(x, y, x1, y)\n  mi_addsegment(x1, y, x1, y1)\n  mi_addsegment(x, y1, x1, y1)\n  mi_addsegment(x, y1, x, y)\n\n  local labelX = x + w/2\n  local labelY = y + h/2\n  if (label_position == "corner") then\n    labelX = x + w/8\n    labelY = y + h/8\n  end\n  mi_addblocklabel(labelX, labelY)\n  mi_selectlabel(labelX, labelY)\n  mi_setblockprop(material, 1, 0,"", direction)\n  mi_clearselected()\nend\n\nfunction build_analysis_nodes () \n  local x = get_h_gap()\n  local x1 = x + get_total_width()\n  local y = get_v_gap() + AIR_GAP/2 + MAGNET_HEIGHT\n  \n  mi_addnode(x, y)\n  mi_addnode(x1, y)\nend\n\nfunction analyze_problem ()\n  \nend\n\ninit()\n    '}return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)(A.a,{maxWidth:"sm",children:[Object(N.jsxs)(d.a,{container:!0,spacing:2,children:[Object(N.jsxs)(d.a,{item:!0,xs:12,children:[Object(N.jsx)("h1",{children:"Air Core Axial Flux PM motor"}),Object(N.jsx)("h2",{children:"FEMM Simulation Generator"})]}),Object(N.jsx)(d.a,{item:!0,xs:12,children:Object(N.jsx)(m.a,{children:"This form will generate a LUA script that can then be run in FEMM to produce a 2D simulation of an air-cored axial flux permanant magnet motor."})})]}),Object(N.jsxs)(d.a,{container:!0,spacing:4,children:[Object(N.jsx)(d.a,{item:!0,xs:12,children:Object(N.jsxs)(b.a,{component:"fieldset",children:[Object(N.jsx)(x.a,{component:"legend",children:"Units"}),Object(N.jsxs)(g.a,{row:!0,"aria-label":"units",onChange:X,name:"UNITS",value:c.UNITS,children:[Object(N.jsx)(_.a,{value:"millimeters",control:Object(N.jsx)(O.a,{}),label:"Millimeters"}),Object(N.jsx)(_.a,{value:"inches",control:Object(N.jsx)(O.a,{}),label:"Inches"})]})]})}),Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.MAGNET_WIDTH,name:"MAGNET_WIDTH",label:"Magnet Width"})})}),Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.MAGNET_HEIGHT,name:"MAGNET_HEIGHT",label:"Magnet Height"})})}),Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsxs)(b.a,{fullWidth:!0,children:[Object(N.jsx)(u.a,{children:"Magnet Grade"}),Object(N.jsx)(j.a,{onChange:X,name:"MAGNET_GRADE",value:c.MAGNET_GRADE,children:U})]})}),Object(N.jsxs)(d.a,{item:!0,xs:12,children:[Object(N.jsx)(x.a,{component:"legend",children:"Halbach?"}),Object(N.jsx)(_.a,{control:Object(N.jsx)(H.a,{value:c.halbach,onChange:function(n){var e=n.target.checked?1:0;c.HALBACH=e,e||(c.HALBACH_WIDTH=0,c.HALBACH_HEIGHT=0),G(Object(o.a)({},c)),M(e),K($(c))},name:"HALBACH"}),label:y?"Yes":"No"})]}),y?J:null,Object(N.jsxs)(d.a,{item:!0,xs:12,children:[Object(N.jsx)(x.a,{component:"legend",children:"Back Iron?"}),Object(N.jsx)(_.a,{control:Object(N.jsx)(H.a,{value:c.backIron,onChange:function(n){var e=n.target.checked?1:0;c.BACK_IRON=e,e||(c.BACK_IRON_HEIGHT=0),G(Object(o.a)({},c)),P(e),K($(c))},name:"BACK_IRON"}),label:D?"Yes":"No"})]}),D?Y:null,Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.POLE_COUNT,name:"POLE_COUNT",label:"Pole Count"})})}),Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.AIR_GAP,name:"AIR_GAP",label:"Air Gap"})})}),Object(N.jsx)(d.a,{item:!0,xs:4,children:Object(N.jsx)(_.a,{filled:"true",control:Object(N.jsx)(h.a,{onChange:X,value:c.MAGNET_GAP,name:"MAGNET_GAP",label:"Magnet Spacing"})})})]}),Object(N.jsxs)(d.a,{container:!0,spacing:3,children:[Object(N.jsxs)(d.a,{item:!0,xs:12,children:[Object(N.jsx)("h2",{children:"Output:"}),Object(N.jsx)(m.a,{children:"Copy this LUA script and paste it in the LUA console in your FEMM program."})]}),Object(N.jsx)(d.a,{item:!0,xs:12,children:Object(N.jsx)(h.a,{fullWidth:!0,multiline:!0,rows:20,rowsMax:20,value:k})}),Object(N.jsx)(d.a,{item:!0,xs:12,children:Object(N.jsx)(E,{children:function(n){var e=n.copy;return Object(N.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){return e(k)},children:"Copy"})}})})]})]}),Object(N.jsx)(p.a,{style:{marginTop:40}}),Object(N.jsxs)(d.a,{container:!0,style:{marginTop:40},justify:"flex-end",children:[Object(N.jsx)(d.a,{item:!0,xs:8,children:Object(N.jsxs)(m.a,{children:["Version: ",L.version]})}),Object(N.jsx)(d.a,{item:!0,xs:1,children:Object(N.jsx)(T.a,{target:"_blank",variant:"contained",color:"primary",href:"https://www.youtube.com/channel/UCQk0CkSexTb7GQvpGxj4kxw",children:Object(N.jsx)(v.a,{})})}),Object(N.jsx)(d.a,{item:!0,xs:1,children:Object(N.jsx)(T.a,{target:"_blank",variant:"contained",color:"primary",href:"https://github.com/CJohnson25/femm-sim-gen-app/",children:Object(N.jsx)(B.a,{})})})]})]})},R=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,149)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,l=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),l(n),c(n)}))};c.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(w,{})}),document.getElementById("root")),R()}},[[92,1,2]]]);
//# sourceMappingURL=main.b964cabd.chunk.js.map