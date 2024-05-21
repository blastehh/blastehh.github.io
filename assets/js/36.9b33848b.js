(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{328:function(s,a,t){"use strict";t.r(a);var e=t(12),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kernel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kernel"}},[s._v("#")]),s._v(" Kernel")]),s._v(" "),a("p",[s._v("Stuff relating to the linux kernel")]),s._v(" "),a("hr"),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#fedora"}},[s._v("Fedora")]),a("ul",[a("li",[a("a",{attrs:{href:"#reverting-to-an-older-kernel-version"}},[s._v("Reverting to an Older Kernel Version")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fedora"}},[s._v("#")]),s._v(" Fedora")]),s._v(" "),a("p",[s._v("Tested on Fedora 29")]),s._v(" "),a("h3",{attrs:{id:"reverting-to-an-older-kernel-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverting-to-an-older-kernel-version"}},[s._v("#")]),s._v(" Reverting to an Older Kernel Version")]),s._v(" "),a("p",[s._v("Install "),a("code",[s._v("versionlock")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3-dnf-plugins-extras-versionlock\n")])])]),a("p",[s._v("Lock the kernel version")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dnf versionlock add kernel-4.20.14-200.fc29\n")])])]),a("p",[s._v("Run grubby to find your current kernel versions, we'll be using the 4.20 kernel for our example.\nThe line we want is highlighted below:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("grubby "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--info")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ALL\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kernel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/boot/vmlinuz-5.0.10-200.fc29.x86_64\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ro resume=/dev/mapper/luks-ebbd85cb-5426-4f41-a8b7-587de911b2c3 rd.luks.uuid=luks-132e6795-3542-487f-859f-938b2a33c2bf rd.luks.uuid=luks-ebbd85cb-5426-4f41-a8b7-587de911b2c3 rhgb quiet "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("08e55ebb-c56e-4ac0-a836-f50929bf23f0\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("initrd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/boot/initramfs-5.0.10-200.fc29.x86_64.img\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Fedora "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(".10-200.fc29.x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Workstation Edition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kernel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/boot/vmlinuz-4.20.14-200.fc29.x86_64\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ro resume=/dev/mapper/luks-ebbd85cb-5426-4f41-a8b7-587de911b2c3 rd.luks.uuid=luks-132e6795-3542-487f-859f-938b2a33c2bf rd.luks.uuid=luks-ebbd85cb-5426-4f41-a8b7-587de911b2c3 rhgb quiet "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("08e55ebb-c56e-4ac0-a836-f50929bf23f0\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("initrd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/boot/initramfs-4.20.14-200.fc29.x86_64.img\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Fedora "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.20")]),s._v(".14-200.fc29.x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Workstation Edition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kernel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/boot/vmlinuz-0-rescue-15ef033857d4424584002de89b0ee955\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ro resume=/dev/mapper/luks-ebbd85cb-5426-4f41-a8b7-587de911b2c3 rd.luks.uuid=luks-132e6795-3542-487f-859f-938b2a33c2bf rd.luks.uuid=luks-ebbd85cb-5426-4f41-a8b7-587de911b2c3 rhgb quiet "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("08e55ebb-c56e-4ac0-a836-f50929bf23f0\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("initrd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/boot/initramfs-0-rescue-15ef033857d4424584002de89b0ee955.img\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Fedora "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-rescue-15ef033857d4424584002de89b0ee955"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Workstation Edition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nnon linux entry\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nnon linux entry\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nnon linux entry\n")])])]),a("p",[s._v("Replace the "),a("code",[s._v("saved_entry")]),s._v(" in the following file with the next from our last command "),a("code",[s._v("Fedora (4.20.14-200.fc29.x86_64) 29 (Workstation Edition)")]),a("br"),s._v("\nHere's what it looks like after the edit")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nano /boot/grub2/grubenv\n# GRUB Environment Block\n#saved_entry=Fedora (5.0.10-200.fc29.x86_64) 29 (Workstation Edition)\nsaved_entry=Fedora (4.20.14-200.fc29.x86_64) 29 (Workstation Edition)\nmenu_auto_hide=1\nboot_success=1\nboot_indeterminate=0\n#########################################################################################################################################################################################################################################################################################$\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Optional step")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("grub2-mkconfig "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" /boot/efi/EFI/fedora/grub.cfg\n")])])])]),s._v(" "),a("MediumZoom")],1)}),[],!1,null,null,null);a.default=r.exports}}]);