/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7c2c79b863b74609d4643f7f2aaaee41"
  },
  {
    "url": "about.html",
    "revision": "564eb721cee2859a5bfed1b2fd989d9a"
  },
  {
    "url": "ansible/passwd.html",
    "revision": "770ee0f28efa8bd20088e5800d319761"
  },
  {
    "url": "ansible/tricks.html",
    "revision": "5612cd408cfc4ad05d5d90f930e4baa7"
  },
  {
    "url": "assets/css/0.styles.1a2ed2f3.css",
    "revision": "e3533cbd91993ca71cb1a8f636bad467"
  },
  {
    "url": "assets/img/azure1.9384958a.png",
    "revision": "9384958ae259022c30915692d33cf7a6"
  },
  {
    "url": "assets/img/dhcp.0d1b3287.png",
    "revision": "0d1b328749b2d909f2ad7bbdb90c4e1c"
  },
  {
    "url": "assets/img/git-token-1.28abbbe5.png",
    "revision": "28abbbe56c7dd2e568f5c0504c4ee7c0"
  },
  {
    "url": "assets/img/git-token-2.96937620.png",
    "revision": "96937620c883b0807be99f69cbde9a18"
  },
  {
    "url": "assets/img/git-token-3.89d75330.png",
    "revision": "89d75330024bbb0b14c0311a877348ea"
  },
  {
    "url": "assets/img/hyper1.6e997957.png",
    "revision": "6e997957cf59e92bbf7af050de9c54cc"
  },
  {
    "url": "assets/img/hyper2.6ebd5029.png",
    "revision": "6ebd50299ce8fdcca1c9cda9e6759857"
  },
  {
    "url": "assets/img/hyper3.f1acdeeb.png",
    "revision": "f1acdeeb65124a04643424ecb913d545"
  },
  {
    "url": "assets/img/hyper4.fee46cb9.png",
    "revision": "fee46cb9a241b362a8b679ed1e78cdfc"
  },
  {
    "url": "assets/img/hyper5.7f61aee7.png",
    "revision": "7f61aee70b0bfbc2e6c5fd82afcb3a49"
  },
  {
    "url": "assets/img/hyper6.fcfbe7fb.png",
    "revision": "fcfbe7fb1ce20c4924a91778a14a5699"
  },
  {
    "url": "assets/img/initscript.4e917e27.png",
    "revision": "4e917e27c2b4147ce99e383e2ef6ce55"
  },
  {
    "url": "assets/img/nfsperm.2fba5716.png",
    "revision": "2fba5716afa57d99c5f3858125e8ad7f"
  },
  {
    "url": "assets/img/pfsense-ipsec-p1.fb16ba0d.png",
    "revision": "fb16ba0d7b2d01ae28479991e5d49a38"
  },
  {
    "url": "assets/img/pfsense-ipsec-p2.6731fa05.png",
    "revision": "6731fa058df4bca5590c431de2918da6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tables_traverse.b881e1e7.jpg",
    "revision": "b881e1e7ac4d8b6b305e0aa000e88d8f"
  },
  {
    "url": "assets/img/tftptree.ef1a6526.png",
    "revision": "ef1a652693d27532a1786fe8ce5acf7f"
  },
  {
    "url": "assets/img/ubuntufiles.3dd9a51e.png",
    "revision": "3dd9a51e80f5668c468f21c8993c38b3"
  },
  {
    "url": "assets/js/10.388fb72b.js",
    "revision": "651edc555a6a35c3d7fd9c40da963c1c"
  },
  {
    "url": "assets/js/11.0f23286b.js",
    "revision": "12f68d535c348e2977ec6b5f008915c0"
  },
  {
    "url": "assets/js/12.f00fed31.js",
    "revision": "ebd5ff3c5a8c367abf0e729a4138ea94"
  },
  {
    "url": "assets/js/13.a33b9af5.js",
    "revision": "8bec7306717168c14983e2ff3d067f87"
  },
  {
    "url": "assets/js/14.bcfaff3d.js",
    "revision": "34505378ac3551bc76c463ac4cfb72e8"
  },
  {
    "url": "assets/js/15.ac4a2195.js",
    "revision": "834ff9d055b311eea1431801751a8c95"
  },
  {
    "url": "assets/js/16.70747ffb.js",
    "revision": "ca7944983c565fb969fd492b05293bf7"
  },
  {
    "url": "assets/js/17.1c9e97f3.js",
    "revision": "7e4f1f27088f93c620a2be083f9136ab"
  },
  {
    "url": "assets/js/18.f0446ac9.js",
    "revision": "fe1b81b0c9cc9cf8fc98d7e0a8742890"
  },
  {
    "url": "assets/js/19.28401fcd.js",
    "revision": "e286815a270c428c73c3fdd84b3cee11"
  },
  {
    "url": "assets/js/2.e3d7a0c0.js",
    "revision": "947d5ce793741c3a46746fe414ed60ff"
  },
  {
    "url": "assets/js/20.9de6d811.js",
    "revision": "ed744381b76bbd08d632ae4f2e84e3e2"
  },
  {
    "url": "assets/js/21.fcfffe51.js",
    "revision": "e0bc73f2e3fda9d50701a54e0303da0e"
  },
  {
    "url": "assets/js/22.cc9506b4.js",
    "revision": "6a98a259ca78763ec17941dfc4c26998"
  },
  {
    "url": "assets/js/23.b85d487b.js",
    "revision": "288193bdb62ff69d07d79701286ee80c"
  },
  {
    "url": "assets/js/24.f748c98a.js",
    "revision": "f1165dc0913e18adba803371b3d56341"
  },
  {
    "url": "assets/js/25.d81ce868.js",
    "revision": "403546ed2958e363df8c2f3984bcfba7"
  },
  {
    "url": "assets/js/26.dc0d3b5f.js",
    "revision": "d31d52cb43dc6068e9aa94c12ed8801f"
  },
  {
    "url": "assets/js/27.61bd9469.js",
    "revision": "4eb578e8652a045c9c0a2db74f196aa0"
  },
  {
    "url": "assets/js/28.de72c482.js",
    "revision": "1f5b19d6255368a61768f1014c931716"
  },
  {
    "url": "assets/js/29.df9d5304.js",
    "revision": "d94475ef05e262ee25f03e63952f56d2"
  },
  {
    "url": "assets/js/3.ea477072.js",
    "revision": "2a0ee7b62fcca9a347f3dbe224be97fd"
  },
  {
    "url": "assets/js/30.b5e82d3a.js",
    "revision": "8ab1ae7a855a08db77cb0c020b99fd83"
  },
  {
    "url": "assets/js/31.4bcb444d.js",
    "revision": "2618a07193593b29ad2b86b922ee0232"
  },
  {
    "url": "assets/js/32.b03f199f.js",
    "revision": "f71d3bdea79a003d07155b4760b30a28"
  },
  {
    "url": "assets/js/33.3f045d2d.js",
    "revision": "ebe705eae43369ab0a3c03e38acc320c"
  },
  {
    "url": "assets/js/34.d76dea84.js",
    "revision": "aec6a8f6913f0a8b27f240f979db6d5b"
  },
  {
    "url": "assets/js/35.f6bc730a.js",
    "revision": "f506cb31d1816f2a86a1ca2b4b033072"
  },
  {
    "url": "assets/js/36.da1ace2b.js",
    "revision": "3063364866b4fb471d1b0a4a977070c2"
  },
  {
    "url": "assets/js/37.89406e65.js",
    "revision": "356c6db880c812986e5aa4d3b697e3b8"
  },
  {
    "url": "assets/js/38.5f339744.js",
    "revision": "94dde492135e3d7ac534df4a76b7d2bc"
  },
  {
    "url": "assets/js/39.7a488b1c.js",
    "revision": "41ab1fa9629f59a287f628c1ebc78ebb"
  },
  {
    "url": "assets/js/4.d773499b.js",
    "revision": "bdc6b1249139b144339cb3862fd55b35"
  },
  {
    "url": "assets/js/40.616ab4ae.js",
    "revision": "71b31b5c31b35dcb928df4a97023d92a"
  },
  {
    "url": "assets/js/41.0c7be3b7.js",
    "revision": "acf4de17e9a4aac6df9fad55a3284566"
  },
  {
    "url": "assets/js/42.2b294dba.js",
    "revision": "c057259e3612687bd028609de8613ab4"
  },
  {
    "url": "assets/js/43.2cfa019c.js",
    "revision": "1d96a4866d0437d95bbbe1e35762961a"
  },
  {
    "url": "assets/js/44.591ef9d4.js",
    "revision": "0960c09d3917530b2a1dd2c58c0b1239"
  },
  {
    "url": "assets/js/45.97739402.js",
    "revision": "c0e508dc21f99be838e7a50ce2535924"
  },
  {
    "url": "assets/js/46.69fb9efd.js",
    "revision": "b974b8ff2323c6ac5c7ce07c1a317658"
  },
  {
    "url": "assets/js/47.d188449b.js",
    "revision": "fbb852b269efe1f17150af3cb24fce96"
  },
  {
    "url": "assets/js/48.2d5b9c1b.js",
    "revision": "3b46083c61724ae4f1a510ee4cf8f263"
  },
  {
    "url": "assets/js/49.9af7c9f0.js",
    "revision": "4615f4855ea537b33e5faef95c721096"
  },
  {
    "url": "assets/js/5.e052ab48.js",
    "revision": "cc3913e76c34f3d29754fca0096bc521"
  },
  {
    "url": "assets/js/50.9aa46a2b.js",
    "revision": "691cf3744f7417dbc3dd1faf5e52bbd0"
  },
  {
    "url": "assets/js/51.a8300ae0.js",
    "revision": "96826ec68495a40082621e0ff454eee6"
  },
  {
    "url": "assets/js/52.1240194f.js",
    "revision": "c9aa2ba8a407cda618c97d732e389d4b"
  },
  {
    "url": "assets/js/53.14e2d177.js",
    "revision": "05ef71e9efc9e5bd60b7de50acfc24f4"
  },
  {
    "url": "assets/js/54.d4d548e3.js",
    "revision": "a0b3f9eb96eb8309e7516038b22c36b9"
  },
  {
    "url": "assets/js/55.8fa1ccae.js",
    "revision": "6725c6a58554a9bdda82b80cb7ed3670"
  },
  {
    "url": "assets/js/56.31792daf.js",
    "revision": "dd7bd181ae3df59166b33aafc9c193b2"
  },
  {
    "url": "assets/js/57.1908dbea.js",
    "revision": "921f9b085f3d58538f35af4b7e2c93c6"
  },
  {
    "url": "assets/js/58.cec0467a.js",
    "revision": "2e96704774c4e8bcdf18cd659e9e1d5e"
  },
  {
    "url": "assets/js/59.923f562e.js",
    "revision": "d00c76b0767f2c60ece9209ff8749dab"
  },
  {
    "url": "assets/js/6.87a7cc97.js",
    "revision": "d38f24eb06bc3d0561c84ce5e58cb229"
  },
  {
    "url": "assets/js/60.daaee099.js",
    "revision": "2c7b9925a4c411ed6d1a24ce8e4306b0"
  },
  {
    "url": "assets/js/61.19782094.js",
    "revision": "405a95291257e79daa0485abeb030aab"
  },
  {
    "url": "assets/js/62.5ee90d0d.js",
    "revision": "39fcaef7b930412544550aa8c28d1fbd"
  },
  {
    "url": "assets/js/63.aa40482e.js",
    "revision": "a0a63e8aca6690c7596e03f26e4ac630"
  },
  {
    "url": "assets/js/7.150705c2.js",
    "revision": "30faedddafe97d3cf61d36d430097a48"
  },
  {
    "url": "assets/js/8.3e94aea9.js",
    "revision": "0e9c860d09c0a24ca2a2038f2ac3df22"
  },
  {
    "url": "assets/js/9.2640b090.js",
    "revision": "f640f30178b81a89a517f9e15b4da74b"
  },
  {
    "url": "assets/js/app.20f62c7f.js",
    "revision": "e1807afbc68c496602036dc11fba6424"
  },
  {
    "url": "cisco/commands.html",
    "revision": "d31a975981276e8839bb694613671202"
  },
  {
    "url": "docker/commands.html",
    "revision": "a275dad1aa95c8bc042319ab89427e9b"
  },
  {
    "url": "docker/fiche.html",
    "revision": "cdd0752015b851c2e62dbb334d6f6d09"
  },
  {
    "url": "docker/pihole.html",
    "revision": "700910389c437cef78a6ae0a4ca1e3d1"
  },
  {
    "url": "docker/service.html",
    "revision": "582157c00c8f5d586df77333613dc6ce"
  },
  {
    "url": "docker/swarm.html",
    "revision": "98861d2233c31357ddeedecabdb0833f"
  },
  {
    "url": "esxi/ssh.html",
    "revision": "05c1147e3c744ad7bf830f01478f7a28"
  },
  {
    "url": "esxi/update.html",
    "revision": "cd0d5acaf09b2f669b955c5918c479e4"
  },
  {
    "url": "guides/opendkim.html",
    "revision": "f7f70668629ca7475a7dde55fdc55292"
  },
  {
    "url": "index.html",
    "revision": "cb7bf350d6360fd491af2f14a7eeccc7"
  },
  {
    "url": "linux/diag.html",
    "revision": "b0cf6021040ce15f4c9bc23c6d017544"
  },
  {
    "url": "linux/filesystem.html",
    "revision": "1eecdd3d3591f79777e01a04cf51691c"
  },
  {
    "url": "linux/gsocket.html",
    "revision": "f0265a86a180616fd402e58344cb8b8d"
  },
  {
    "url": "linux/iproute2.html",
    "revision": "b365d6b0d8e6a15d55796127ca55f7fc"
  },
  {
    "url": "linux/iptables.html",
    "revision": "f9e73c21f3f2100258bd96c7e0802363"
  },
  {
    "url": "linux/journalctl.html",
    "revision": "00fa94f3b16b7ed6810b049475a75501"
  },
  {
    "url": "linux/kernel.html",
    "revision": "2773a0b9b1b097b3d5e57a2f1feaebca"
  },
  {
    "url": "linux/logrotation.html",
    "revision": "ed2199d07e33658eee750f47dc5f59e1"
  },
  {
    "url": "linux/lvm.html",
    "revision": "5a63734cb5cf871676d8eb373157e175"
  },
  {
    "url": "linux/mdraid.html",
    "revision": "6a481894263cba632c2cedc48e182969"
  },
  {
    "url": "linux/mounting.html",
    "revision": "664722f5845ef631d74e4bfdd3afe0cc"
  },
  {
    "url": "linux/network.html",
    "revision": "37bfdbf193ab4ff9b64d15b78aa8c927"
  },
  {
    "url": "linux/ovhkernel.html",
    "revision": "a286234c017064b873689351e0341a71"
  },
  {
    "url": "linux/packageman.html",
    "revision": "fb46cb583c66e3a277f5e7d549e74a49"
  },
  {
    "url": "linux/pass.html",
    "revision": "d8b3716273c00b2a0b1899f08a3cdbce"
  },
  {
    "url": "linux/pki.html",
    "revision": "24bdfd58e3ffd47e7769d1551c11b983"
  },
  {
    "url": "linux/sed.html",
    "revision": "0114e1728cb5cb9518867cb5812a93da"
  },
  {
    "url": "linux/selinux.html",
    "revision": "a9aaabb32b8c58c0f826a395d3728b4e"
  },
  {
    "url": "linux/shell.html",
    "revision": "1d6a69010c00be19135ffb718e8730b4"
  },
  {
    "url": "linux/sshs.html",
    "revision": "1740f524ec35f47fbb3f03422fbb97f2"
  },
  {
    "url": "linux/systemd.html",
    "revision": "52317832033cd7e4b3ec1145a2eaed2c"
  },
  {
    "url": "linux/vi.html",
    "revision": "dd8829b0d96fbf4d254b9073fca8dbce"
  },
  {
    "url": "openvpn/client.html",
    "revision": "4334ccb8ebc26679ab5e96913288b63b"
  },
  {
    "url": "others/clearos.html",
    "revision": "28214582a466a43fb43cff9317944115"
  },
  {
    "url": "others/dns.html",
    "revision": "f89512d26955be4de9919815fdd47979"
  },
  {
    "url": "others/freenas.html",
    "revision": "2293efcac8e5d3bd215be77d4f91777b"
  },
  {
    "url": "others/git.html",
    "revision": "ae77cfd21b7736e37fa8d0a6656ea927"
  },
  {
    "url": "others/ilo.html",
    "revision": "a61bd9e6e7c6ce6c4bb47c782b823aa8"
  },
  {
    "url": "others/links.html",
    "revision": "b0933c697a873294d3358b64373d2c96"
  },
  {
    "url": "others/pxe.html",
    "revision": "acf97346ff735d1295a90d906c1d621b"
  },
  {
    "url": "others/vscode.html",
    "revision": "fb4a80c6f246cf306d89ac8b13cb3b9a"
  },
  {
    "url": "others/vuepress.html",
    "revision": "9edfee68a719640ffc669e3b0697fedc"
  },
  {
    "url": "script/medium-zoom.min.js",
    "revision": "044ec29434dec0e65e02037de0d87856"
  },
  {
    "url": "synology/hyper.html",
    "revision": "41844ecf983e1b3e5389ec49406aaddc"
  },
  {
    "url": "synology/rebuild.html",
    "revision": "c0db921e96cb09d92f8fc7f24db45ac7"
  },
  {
    "url": "synology/smartctl.html",
    "revision": "543a75c244c5f89c3e3023904b91bed6"
  },
  {
    "url": "web/apache.html",
    "revision": "1e460381e2e29e10e3aade077efc94e2"
  },
  {
    "url": "web/nginx.html",
    "revision": "cf3eb4c72a0a1c1320b1a18fc59f8f07"
  },
  {
    "url": "windows/powershell.html",
    "revision": "8bfe7f1dfeb59f332fd3efaa1aefe52c"
  },
  {
    "url": "windows/registry.html",
    "revision": "1dd84d10966ea776f6b1d63a739cd7e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
