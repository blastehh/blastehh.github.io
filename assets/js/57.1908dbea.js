(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{352:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" Vuepress")]),t._v(" "),s("p",[t._v("This platform was created using "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),s("OutboundLink")],1),t._v(", nginx, and Docker.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hub.docker.com/r/blasteh/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress Docker"),s("OutboundLink")],1),t._v(" image is built from the repo on "),s("a",{attrs:{href:"https://github.com/blastehh/vuepress-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The Vuepress instance is hosted on one of my own servers which pushes the content to "),s("a",{attrs:{href:"https://github.com/blastehh/blastehh.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Pages"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Code highlighting list by "),s("a",{attrs:{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("PrismJS"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"docker-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-config"}},[t._v("#")]),t._v(" Docker config")]),t._v(" "),s("p",[t._v("I no longer host this locally as it's not needed, but keeping the config below for reference."),s("br"),t._v(" "),s("s",[t._v("Here's the docker stack file used to build on my swarm; it also includes a web server to view the website locally."),s("br"),t._v(" "),s("code",[t._v("docker-compose.yml")])])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.4"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vuepress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blasteh/vuepress\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" USE_HOOK=1\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" GITHUB_REPO=github.com/blastehh/my_source_repo.git\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" GITHUB_TOKEN=mysecretkey\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" GITHUB_PUSH_REPO=github.com/blastehh/blastehh.github.io.git\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(' PLUGINS="@vuepress/plugin'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("back"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('top"\n    '),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart_policy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("condition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("placement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("constraints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node.role "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update_config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("first\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9090:9000/tcp"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /mnt/srv/vuepress/src/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/root/src/\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /mnt/srv/vuepress/html/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/root/html/\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("stable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vuepress\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart_policy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("condition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update_config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("first\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("placement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("constraints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node.role "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080:80/tcp"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /mnt/srv/vuepress/html/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/nginx/html/\n")])])]),s("p",[t._v("Stack launched with the command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" stack deploy "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" docker-compose.yml vuepress\n")])])]),s("p",[s("a",{attrs:{href:"https://www.portainer.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Portainer"),s("OutboundLink")],1),t._v(" was used to run this stack.")])])}),[],!1,null,null,null);s.default=n.exports}}]);