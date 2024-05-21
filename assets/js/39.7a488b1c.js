(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{331:function(a,t,s){"use strict";s.r(t);var e=s(12),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mdraid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mdraid"}},[a._v("#")]),a._v(" MDRaid")]),a._v(" "),t("p",[a._v("Procedures for manipulating Linux mdraid")]),a._v(" "),t("hr"),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#convert-to-software-raid"}},[a._v("Convert to Software Raid")]),t("ul",[t("li",[t("a",{attrs:{href:"#preparation"}},[a._v("Preparation")])]),t("li",[t("a",{attrs:{href:"#copy-sda-to-sdb"}},[a._v("Copy sda to sdb")])]),t("li",[t("a",{attrs:{href:"#change-sdb-to-raid-partitions"}},[a._v("change sdb to raid partitions")])]),t("li",[t("a",{attrs:{href:"#clear-previous-raid"}},[a._v("Clear previous raid")])]),t("li",[t("a",{attrs:{href:"#create-degraded-raid"}},[a._v("Create degraded raid")])]),t("li",[t("a",{attrs:{href:"#prep-the-new-partitions"}},[a._v("Prep the New Partitions")])]),t("li",[t("a",{attrs:{href:"#prep-the-swap-disk"}},[a._v("Prep the swap disk")])]),t("li",[t("a",{attrs:{href:"#mdadm-config"}},[a._v("mdadm config")])]),t("li",[t("a",{attrs:{href:"#mount-for-copying"}},[a._v("Mount for copying")])]),t("li",[t("a",{attrs:{href:"#get-uuid-for-fstab"}},[a._v("Get UUID for fstab")])]),t("li",[t("a",{attrs:{href:"#add-to-fstab"}},[a._v("Add to fstab")])]),t("li",[t("a",{attrs:{href:"#edit-mtab-not-for-swap"}},[a._v("Edit mtab, not for swap")])]),t("li",[t("a",{attrs:{href:"#set-up-bootloader-option"}},[a._v("Set up bootloader option")])]),t("li",[t("a",{attrs:{href:"#update-grub"}},[a._v("Update grub")])]),t("li",[t("a",{attrs:{href:"#copy-files"}},[a._v("Copy files")])]),t("li",[t("a",{attrs:{href:"#install-grub"}},[a._v("Install grub")])]),t("li",[t("a",{attrs:{href:"#reboot"}},[a._v("Reboot")])]),t("li",[t("a",{attrs:{href:"#check-disks"}},[a._v("Check disks")])]),t("li",[t("a",{attrs:{href:"#change-sda-to-raid-partitions"}},[a._v("Change sda to raid partitions")])]),t("li",[t("a",{attrs:{href:"#add-sda-to-the-raid"}},[a._v("Add sda to the raid")])]),t("li",[t("a",{attrs:{href:"#finish"}},[a._v("Finish")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"convert-to-software-raid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#convert-to-software-raid"}},[a._v("#")]),a._v(" Convert to Software Raid")]),a._v(" "),t("p",[a._v("This guide assumes we have our OS currently installed at "),t("code",[a._v("/dev/sda")]),a._v(" and we are adding an identical size disk at "),t("code",[a._v("/dev/sdb")])]),a._v(" "),t("h3",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[a._v("#")]),a._v(" Preparation")]),a._v(" "),t("p",[a._v("Prepare the machine by installing the required software.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" initramfs-tools "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v("\nmodprobe linear\nmodprobe multipath\nmodprobe raid0\nmodprobe raid1\nmodprobe raid5\nmodprobe raid6\nmodprobe raid10\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/mdstat\n")])])]),t("h3",{attrs:{id:"copy-sda-to-sdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-sda-to-sdb"}},[a._v("#")]),a._v(" Copy sda to sdb")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("sfdisk "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /dev/sda "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sfdisk "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v(" /dev/sdb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fdisk")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n")])])]),t("h3",{attrs:{id:"change-sdb-to-raid-partitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-sdb-to-raid-partitions"}},[a._v("#")]),a._v(" change sdb to raid partitions")]),a._v(" "),t("p",[a._v("Change all of our partitions on the new disk to the type "),t("em",[t("strong",[a._v("Linux RAID")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("sfdisk --change-id /dev/sdb "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" fd\nsfdisk --change-id /dev/sdb "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" fd\n")])])]),t("h3",{attrs:{id:"clear-previous-raid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-previous-raid"}},[a._v("#")]),a._v(" Clear previous raid")]),a._v(" "),t("p",[a._v("Make sure no trace of a previous raid setup is present.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v(" --zero-superblock /dev/sdb1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v(" --zero-superblock /dev/sdb2\n")])])]),t("h3",{attrs:{id:"create-degraded-raid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-degraded-raid"}},[a._v("#")]),a._v(" Create degraded raid")]),a._v(" "),t("p",[a._v("We'll create the new raid with the "),t("code",[a._v("/dev/sda")]),a._v(" disk partitions missing.\nThis means we'll add the new "),t("code",[a._v("/dev/sdb")]),a._v(" partitions to the raid first.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--create")]),a._v(" /dev/md0 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--level")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --raid-disks"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" missing /dev/sdb1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--create")]),a._v(" /dev/md1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--level")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --raid-disks"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" missing /dev/sdb2\n")])])]),t("ul",[t("li",[a._v("Check the status of the newly created raid "),t("code",[a._v("cat /proc/mdstat")])])]),a._v(" "),t("h3",{attrs:{id:"prep-the-new-partitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prep-the-new-partitions"}},[a._v("#")]),a._v(" Prep the New Partitions")]),a._v(" "),t("p",[a._v("Create a new filesystem on the new raid device")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("mkfs.ext4 /dev/md0")])])]),a._v(" "),t("h3",{attrs:{id:"prep-the-swap-disk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prep-the-swap-disk"}},[a._v("#")]),a._v(" Prep the swap disk")]),a._v(" "),t("p",[a._v("If you had a swap disk, recreate it here.\n"),t("code",[a._v("mkswap /dev/md1")])]),a._v(" "),t("h3",{attrs:{id:"mdadm-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mdadm-config"}},[a._v("#")]),a._v(" mdadm config")]),a._v(" "),t("p",[a._v("Backup your existing mdadm config and then add your new raid disks in to it.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /etc/mdadm/mdadm.conf /etc/mdadm/mdadm.conf_orig\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--examine")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--scan")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/mdadm/mdadm.conf\n")])])]),t("p",[a._v("Confirm the contents of the file")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("cat /etc/mdadm/mdadm.conf")])])]),a._v(" "),t("h3",{attrs:{id:"mount-for-copying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mount-for-copying"}},[a._v("#")]),a._v(" Mount for copying")]),a._v(" "),t("p",[a._v("Mount your new raid disk so that you can copy over your existing disk.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /mnt/md0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" /dev/md0 /mnt/md0\n")])])]),t("h3",{attrs:{id:"get-uuid-for-fstab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-uuid-for-fstab"}},[a._v("#")]),a._v(" Get UUID for fstab")]),a._v(" "),t("p",[a._v("Run "),t("code",[a._v("blkid")]),a._v(" to get the UUIDs of  "),t("code",[a._v("/dev/md0")]),a._v(" and "),t("code",[a._v("/dev/md1")])]),a._v(" "),t("h3",{attrs:{id:"add-to-fstab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-to-fstab"}},[a._v("#")]),a._v(" Add to fstab")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("nano /etc/fstab")])])]),a._v(" "),t("h3",{attrs:{id:"edit-mtab-not-for-swap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-mtab-not-for-swap"}},[a._v("#")]),a._v(" Edit mtab, not for swap")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s/dev\\/sda1/dev\\/md0/"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" /etc/mtab\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s/dev\\/sda2/dev\\/md1/"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" /etc/mtab\n")])])]),t("h3",{attrs:{id:"set-up-bootloader-option"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-bootloader-option"}},[a._v("#")]),a._v(" Set up bootloader option")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /etc/grub.d/40_custom /etc/grub.d/09_swraid1_setup\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/grub.d/09_swraid1_setup\n")])])]),t("h4",{attrs:{id:"for-boot-on-partition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-boot-on-partition"}},[a._v("#")]),a._v(" For /boot on / partition")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("menuentry 'Ubuntu, with Linux 3.5.0-17-generic' --class ubuntu --class gnu-linux --class gnu --class os {\n    recordfail\n    insmod mdraid1x\n    insmod ext2\n    set root='(md/0)'\n    linux   /boot/vmlinuz-3.5.0-17-generic root=/dev/md0 ro   quiet\n    initrd  /boot/initrd.img-3.5.0-17-generic\n}\n")])])]),t("h4",{attrs:{id:"for-boot-on-own-partition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-boot-on-own-partition"}},[a._v("#")]),a._v(" For /boot on own partition")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("menuentry 'Ubuntu, with Linux 3.5.0-17-generic' --class ubuntu --class gnu-linux --class gnu --class os {\n    recordfail\n    insmod mdraid1x\n    insmod ext2\n    set root='(md/0)'\n    linux   /boot/vmlinuz-3.5.0-17-generic root=/dev/md1 ro   quiet\n    initrd  /boot/initrd.img-3.5.0-17-generic\n}\n")])])]),t("h3",{attrs:{id:"update-grub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-grub"}},[a._v("#")]),a._v(" Update grub")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("update-grub")]),a._v("\nupdate-initramfs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v("\n")])])]),t("h3",{attrs:{id:"copy-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-files"}},[a._v("#")]),a._v(" Copy files")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dpRx")]),a._v(" / /mnt/md0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dpRx")]),a._v(" /boot /mnt/md1\n")])])]),t("h3",{attrs:{id:"install-grub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-grub"}},[a._v("#")]),a._v(" Install grub")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("grub-install /dev/sda\ngrub-install /dev/sdb\n")])])]),t("h3",{attrs:{id:"reboot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reboot"}},[a._v("#")]),a._v(" Reboot")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("reboot")])])]),a._v(" "),t("h3",{attrs:{id:"check-disks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-disks"}},[a._v("#")]),a._v(" Check disks")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("df")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/mdstat\n")])])]),t("h3",{attrs:{id:"change-sda-to-raid-partitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-sda-to-raid-partitions"}},[a._v("#")]),a._v(" Change sda to raid partitions")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("sfdisk --change-id /dev/sda "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" fd\nsfdisk --change-id /dev/sda "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" fd\n")])])]),t("p",[a._v("Confirm changes")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("fdisk -l")])])]),a._v(" "),t("h3",{attrs:{id:"add-sda-to-the-raid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-sda-to-the-raid"}},[a._v("#")]),a._v(" Add sda to the raid")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--add")]),a._v(" /dev/md0 /dev/sda1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mdadm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--add")]),a._v(" /dev/md1 /dev/sda2\n")])])]),t("p",[a._v("Check state of the raid")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("cat /proc/mdstat")])])]),a._v(" "),t("p",[a._v("Add disks to the raid config")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("mdadm --examine --scan >> /etc/mdadm/mdadm.conf")])])]),a._v(" "),t("p",[a._v("Confirm contents of the raid config")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("cat /etc/mdadm/mdadm.conf")])])]),a._v(" "),t("h3",{attrs:{id:"finish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finish"}},[a._v("#")]),a._v(" Finish")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("update-grub")]),a._v("\nupdate-initramfs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v("\ngrub-install /dev/sda\ngrub-install /dev/sdb\n")])])]),t("ul",[t("li",[a._v("Reboot!")])])])}),[],!1,null,null,null);t.default=r.exports}}]);