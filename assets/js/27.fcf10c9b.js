(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{319:function(a,s,t){"use strict";t.r(s);var e=t(12),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"swarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarm"}},[a._v("#")]),a._v(" Swarm")]),a._v(" "),s("p",[a._v("Stuff about Docker swarm")]),a._v(" "),s("hr"),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#my-swarm"}},[a._v("My Swarm")]),s("ul",[s("li",[s("a",{attrs:{href:"#keepalived"}},[a._v("Keepalived")])])])]),s("li",[s("a",{attrs:{href:"#commands"}},[a._v("Commands")]),s("ul",[s("li",[s("a",{attrs:{href:"#join-swarm"}},[a._v("Join Swarm")])]),s("li",[s("a",{attrs:{href:"#swarm-status"}},[a._v("Swarm status")])]),s("li",[s("a",{attrs:{href:"#drain-undrain"}},[a._v("Drain/Undrain")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"my-swarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-swarm"}},[a._v("#")]),a._v(" My Swarm")]),a._v(" "),s("p",[a._v("Build notes about the Docker swarm running this stack.")]),a._v(" "),s("h3",{attrs:{id:"keepalived"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keepalived"}},[a._v("#")]),a._v(" Keepalived")]),a._v(" "),s("p",[a._v("The docker swarm shares a single IP on the network, this is passed around using the Keepalived Docker image.")]),a._v(" "),s("p",[a._v("You can use the individual command on each swarm node as below, or you can use "),s("a",{attrs:{href:"https://github.com/blastehh/keepalived-docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("ansible"),s("OutboundLink")],1),a._v(" to automatically take care of it.")]),a._v(" "),s("p",[a._v("Docker1")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" keepalived "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always --cap-add"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NET_ADMIN "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_INTERFACE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ens160"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_UNICAST_PEERS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"#PYTHON2BASH:['192.168.10.205', '192.168.10.206', '192.168.10.207']\"")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_VIRTUAL_IPS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".10.151 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_PRIORITY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" osixia/keepalived:latest\n")])])]),s("p",[a._v("Docker2")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" keepalived "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always --cap-add"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NET_ADMIN "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_INTERFACE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ens160"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_UNICAST_PEERS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"#PYTHON2BASH:['192.168.10.205', '192.168.10.206', '192.168.10.207']\"")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_VIRTUAL_IPS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".10.151 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_PRIORITY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("190")]),a._v(" osixia/keepalived:latest\n")])])]),s("p",[a._v("Docker3")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" keepalived "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always --cap-add"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NET_ADMIN "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_INTERFACE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ens160"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_UNICAST_PEERS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"#PYTHON2BASH:['192.168.10.205', '192.168.10.206', '192.168.10.207']\"")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_VIRTUAL_IPS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".10.151 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KEEPALIVED_PRIORITY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("189")]),a._v(" osixia/keepalived:latest\n")])])]),s("h2",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[a._v("#")]),a._v(" Commands")]),a._v(" "),s("h3",{attrs:{id:"join-swarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#join-swarm"}},[a._v("#")]),a._v(" Join Swarm")]),a._v(" "),s("p",[a._v("Run this on the master to get the join token")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm join-token worker\n")])])]),s("p",[a._v("Run this on the master to get the join token to add another manager")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm join-token manager\n")])])]),s("h3",{attrs:{id:"swarm-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swarm-status"}},[a._v("#")]),a._v(" Swarm status")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),s("h3",{attrs:{id:"drain-undrain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drain-undrain"}},[a._v("#")]),a._v(" Drain/Undrain")]),a._v(" "),s("p",[a._v("Empty a node")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--availability")]),a._v(" drain "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("Re-enable a node")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--availability")]),a._v(" active "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("MediumZoom")],1)}),[],!1,null,null,null);s.default=r.exports}}]);