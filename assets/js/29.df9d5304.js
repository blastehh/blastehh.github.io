(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{318:function(e,a,t){"use strict";t.r(a);var s=t(12),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"updates-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates-packages"}},[e._v("#")]),e._v(" Updates & Packages")]),e._v(" "),a("p",[e._v("Only really relevant for standalone ESXi nodes.")]),e._v(" "),a("hr"),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#esxi-version"}},[e._v("ESXi Version")])]),a("li",[a("a",{attrs:{href:"#manage-vibs"}},[e._v("Manage VIBs")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"esxi-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esxi-version"}},[e._v("#")]),e._v(" ESXi Version")]),e._v(" "),a("ol",[a("li",[e._v("Grab the offline bundle from "),a("a",{attrs:{href:"https://customerconnect.vmware.com/patch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMWare"),a("OutboundLink")],1),e._v(" - You'll need an account for this.")]),e._v(" "),a("li",[e._v("Upload the zip file to your datastore")]),e._v(" "),a("li",[e._v("SSH in to your ESXi node")])]),e._v(" "),a("p",[e._v("Check what profiles are present in the zip bundle")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("esxcli software sources profile list -d /vmfs/volumes/datastore1/VMware-ESXi-7.0U3-18644231-depot.zip\n")])])]),a("p",[e._v("Once you have selected a profile, add it to the command with "),a("code",[e._v("-p <profile>")]),e._v(" and then perform a dry run")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("esxcli software profile update -d /vmfs/volumes/datastore1/iso/VMware-ESXi-7.0U3-18644231-depot.zip -p ESXi-7.0U3-18644231-standard --dry-run\n")])])]),a("p",[e._v("If there are no issues, run it again without "),a("code",[e._v("--dry-run")])]),e._v(" "),a("h2",{attrs:{id:"manage-vibs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage-vibs"}},[e._v("#")]),e._v(" Manage VIBs")]),e._v(" "),a("p",[e._v("Check list of installed VIBs")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("esxcli software vib list\n")])])]),a("p",[e._v("Remove a VIB")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("esxcli software vib remove --vibname=<vib>\n")])])]),a("MediumZoom")],1)}),[],!1,null,null,null);a.default=r.exports}}]);