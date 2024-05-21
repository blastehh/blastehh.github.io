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
    "revision": "3ded9a07d67d6747a02edab8b0b49e8d"
  },
  {
    "url": "about.html",
    "revision": "fad38fcae57fc20484fc1592b32314f5"
  },
  {
    "url": "ansible/passwd.html",
    "revision": "14d13893b26fdbf619aea5bfeb13bd8e"
  },
  {
    "url": "ansible/tricks.html",
    "revision": "eef8435f8bd55506d4ee81a65899ee74"
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
    "url": "assets/js/10.97b3d5ee.js",
    "revision": "97e214a27eac70d9f0a0858ab57c4258"
  },
  {
    "url": "assets/js/11.3e33b5f1.js",
    "revision": "d0d9f726b94a0a93ae9a60fcbdf96d84"
  },
  {
    "url": "assets/js/12.f00fed31.js",
    "revision": "ebd5ff3c5a8c367abf0e729a4138ea94"
  },
  {
    "url": "assets/js/13.51db0fc1.js",
    "revision": "c6cf8679a472c3f2f4f8cf9cd6326319"
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
    "url": "assets/js/19.5f2352ad.js",
    "revision": "d023341d9e126a50347f4011d2cb7677"
  },
  {
    "url": "assets/js/2.e3d7a0c0.js",
    "revision": "947d5ce793741c3a46746fe414ed60ff"
  },
  {
    "url": "assets/js/20.b2e4e9b8.js",
    "revision": "6c0e76bb1a8808669f07bbc6795707bd"
  },
  {
    "url": "assets/js/21.3a2c3111.js",
    "revision": "ebac41116e114a7570f5198354ed71f9"
  },
  {
    "url": "assets/js/22.8245776b.js",
    "revision": "3499aff5d2766154760a6b8b403b41c8"
  },
  {
    "url": "assets/js/23.98e6ac8b.js",
    "revision": "1e559604a858454547849a59cf5f20af"
  },
  {
    "url": "assets/js/24.50b888ea.js",
    "revision": "63f2f58828ea872ecc6f29b71ead0d96"
  },
  {
    "url": "assets/js/25.d81ce868.js",
    "revision": "403546ed2958e363df8c2f3984bcfba7"
  },
  {
    "url": "assets/js/26.eede1faf.js",
    "revision": "dfcee946646c2951faa07856e48ef691"
  },
  {
    "url": "assets/js/27.fcf10c9b.js",
    "revision": "e5b93c5baf486ac0bfff4bd750ad07ed"
  },
  {
    "url": "assets/js/28.0cf4a1a9.js",
    "revision": "d54a89085150ec2b70f24dbbd0fd24a9"
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
    "url": "assets/js/30.19f4d549.js",
    "revision": "149282a7779c623c26b0331b7aeaf0d1"
  },
  {
    "url": "assets/js/31.27836410.js",
    "revision": "25bdd3021680e94e678d0314728539a3"
  },
  {
    "url": "assets/js/32.e679dd6a.js",
    "revision": "5338e332753a98887aa187b23ef3b431"
  },
  {
    "url": "assets/js/33.3f045d2d.js",
    "revision": "ebe705eae43369ab0a3c03e38acc320c"
  },
  {
    "url": "assets/js/34.3e50fdc7.js",
    "revision": "db8ce841bc4f9c2db2520aea4456f765"
  },
  {
    "url": "assets/js/35.f6bc730a.js",
    "revision": "f506cb31d1816f2a86a1ca2b4b033072"
  },
  {
    "url": "assets/js/36.9b33848b.js",
    "revision": "36bfb40f8f3a3804a11def02d78708ca"
  },
  {
    "url": "assets/js/37.09a85cf4.js",
    "revision": "8b94b4569f842b0f9b8ab1c97edb9111"
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
    "url": "assets/js/4.a6aa5e67.js",
    "revision": "d060a7ce6399e3e8bd4c711822ffb0c9"
  },
  {
    "url": "assets/js/40.024c83c5.js",
    "revision": "5f99c4c55aa72acb4e10b4bf481c53ed"
  },
  {
    "url": "assets/js/41.b73de863.js",
    "revision": "2fdcf4f59a21a457087b70cfedf52bc3"
  },
  {
    "url": "assets/js/42.2b294dba.js",
    "revision": "c057259e3612687bd028609de8613ab4"
  },
  {
    "url": "assets/js/43.4b2923b7.js",
    "revision": "88e0e17793a1df16732d2685f97b3256"
  },
  {
    "url": "assets/js/44.fb99ceb4.js",
    "revision": "123dc31c2121598af9cc578388777233"
  },
  {
    "url": "assets/js/45.ade9d54a.js",
    "revision": "3e23a99a812a2b4de70e6fdd1c3b32b7"
  },
  {
    "url": "assets/js/46.6c5e1e38.js",
    "revision": "75611f031171275d506e05e97fb3596a"
  },
  {
    "url": "assets/js/47.11068d86.js",
    "revision": "9e9f1f9ff11ec8e27106c9b146cb9199"
  },
  {
    "url": "assets/js/48.95bf5574.js",
    "revision": "20e0dd5cc1cdb111e31c030d25fc6cdd"
  },
  {
    "url": "assets/js/49.abfc8d05.js",
    "revision": "c86f063666e4f856a1cc2b0f489c9746"
  },
  {
    "url": "assets/js/5.6bac8baf.js",
    "revision": "24141edbf9c4a8ea9935907cf987700c"
  },
  {
    "url": "assets/js/50.a8438487.js",
    "revision": "b267d86d44b351d037127efa7cd71944"
  },
  {
    "url": "assets/js/51.cc3abadc.js",
    "revision": "f3c74a4f38e1c8d9e5094e0b8af4a69b"
  },
  {
    "url": "assets/js/52.43305e5b.js",
    "revision": "f2e358db49e1e7a5852876ea7213511e"
  },
  {
    "url": "assets/js/53.5db3673d.js",
    "revision": "5aba1b60d748d8e48e78c8c700209313"
  },
  {
    "url": "assets/js/54.648542f3.js",
    "revision": "fbd77622fc9edcf0ddac556f68310467"
  },
  {
    "url": "assets/js/55.8fa1ccae.js",
    "revision": "6725c6a58554a9bdda82b80cb7ed3670"
  },
  {
    "url": "assets/js/56.501331fd.js",
    "revision": "9c6f80322340294d3ebfd3076f36a002"
  },
  {
    "url": "assets/js/57.1908dbea.js",
    "revision": "921f9b085f3d58538f35af4b7e2c93c6"
  },
  {
    "url": "assets/js/58.41b9b389.js",
    "revision": "a61a9828d8de413076d33dd781f20062"
  },
  {
    "url": "assets/js/59.d5dc0915.js",
    "revision": "f41eee302eb97718345ee39b07bcc490"
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
    "url": "assets/js/61.f2cb548f.js",
    "revision": "08bbd6acac3836c39aea3e0e18a4bedc"
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
    "url": "assets/js/app.5ec0f833.js",
    "revision": "53ad694a99bcdbfc532fac7dcae1afd7"
  },
  {
    "url": "cisco/commands.html",
    "revision": "dfbbc28e128462da7c155c15ed773e2c"
  },
  {
    "url": "docker/commands.html",
    "revision": "888b434d528ed266a7438d63f00c0724"
  },
  {
    "url": "docker/fiche.html",
    "revision": "0af7a0951b17c43b14c80b8bdf4a1a64"
  },
  {
    "url": "docker/pihole.html",
    "revision": "d370b0b361b0ed0eb86254ce798f6ce5"
  },
  {
    "url": "docker/service.html",
    "revision": "3bf1718c0216c20116a137067c9f47bb"
  },
  {
    "url": "docker/swarm.html",
    "revision": "d41804ed9e9a238e60ec917a4a86d91d"
  },
  {
    "url": "esxi/ssh.html",
    "revision": "216b07c1fafcf114e23790b2f49b2a64"
  },
  {
    "url": "esxi/update.html",
    "revision": "a4c5175e5271bf0dbb34c4f3ff6411ac"
  },
  {
    "url": "guides/opendkim.html",
    "revision": "8aa0484114880c3be3c2e6ea2d8faf55"
  },
  {
    "url": "index.html",
    "revision": "0474cdaacceb8d08d36314bff1bc33b0"
  },
  {
    "url": "linux/diag.html",
    "revision": "568c0a9ad7bb178c60ca5e141a8b56bd"
  },
  {
    "url": "linux/filesystem.html",
    "revision": "2ad91adaa4c308ed3a7b64e46b5d7dd5"
  },
  {
    "url": "linux/gsocket.html",
    "revision": "b07990b587ca41db6e083e2cc9e0e7a6"
  },
  {
    "url": "linux/iproute2.html",
    "revision": "b8b24be7c39777624c260c20152bcca7"
  },
  {
    "url": "linux/iptables.html",
    "revision": "c0c2d931d197e7b0cc5e7c13b3e5808e"
  },
  {
    "url": "linux/journalctl.html",
    "revision": "3ec121a3a55698ca5a6c82682cd0b5ac"
  },
  {
    "url": "linux/kernel.html",
    "revision": "cdec8d5c1e4e83555b2decd91653542c"
  },
  {
    "url": "linux/logrotation.html",
    "revision": "f3411f063f6c63c66679711b02951892"
  },
  {
    "url": "linux/lvm.html",
    "revision": "bb66803b2fa3cc9aca09d0204c288c86"
  },
  {
    "url": "linux/mdraid.html",
    "revision": "605d0f0d417e852519a5b249a02091ec"
  },
  {
    "url": "linux/mounting.html",
    "revision": "715aae9d487d7c83d0e56ee1cb4baadd"
  },
  {
    "url": "linux/network.html",
    "revision": "2e1248cdfa7def785a51c022e9d211a2"
  },
  {
    "url": "linux/ovhkernel.html",
    "revision": "c5dee3dbedec9bc88e719844e4285c3b"
  },
  {
    "url": "linux/packageman.html",
    "revision": "e705dc0b22e168847b86e942410d5eff"
  },
  {
    "url": "linux/pass.html",
    "revision": "dd97ee53ec395f7db39aa4829f1e979c"
  },
  {
    "url": "linux/pki.html",
    "revision": "6eebad00d487ea13d99126b2f5ed628d"
  },
  {
    "url": "linux/sed.html",
    "revision": "7b9ccd7192f907f565ab32017b099461"
  },
  {
    "url": "linux/selinux.html",
    "revision": "26fee10f48c5f0bc2f8b96cf399a15f4"
  },
  {
    "url": "linux/shell.html",
    "revision": "dc600d36fdce218537689896633b3e86"
  },
  {
    "url": "linux/sshs.html",
    "revision": "73859a1f2be78ffe09881d5aa9d7733a"
  },
  {
    "url": "linux/systemd.html",
    "revision": "50022e22916398b054ff558d33684586"
  },
  {
    "url": "linux/vi.html",
    "revision": "7a5466fe5ce29d9e8f67d4ac743d8e88"
  },
  {
    "url": "openvpn/client.html",
    "revision": "c8186db25b412344f837da506f230891"
  },
  {
    "url": "others/clearos.html",
    "revision": "8587a925c09f697e2f8c23c1ae1a781d"
  },
  {
    "url": "others/dns.html",
    "revision": "9cb5ed18cca2956d5e452a7483cf3cf2"
  },
  {
    "url": "others/freenas.html",
    "revision": "d961a64c31d6c99c46322b8a33b595e2"
  },
  {
    "url": "others/git.html",
    "revision": "c71d0eb574d70cb8e3c6b56ee8c2d1ca"
  },
  {
    "url": "others/ilo.html",
    "revision": "4368d1f653f5bb584b1622c6002cb8d8"
  },
  {
    "url": "others/links.html",
    "revision": "2c4a9a123a02a0f56216fd3286c84686"
  },
  {
    "url": "others/pxe.html",
    "revision": "24ae142689a3b6c136ff3c726f03a7af"
  },
  {
    "url": "others/vscode.html",
    "revision": "5cc822dc07c866c0db8ccdf35bbb26ae"
  },
  {
    "url": "others/vuepress.html",
    "revision": "3c28ba99a3a052dfb8ddd8df1807b8a9"
  },
  {
    "url": "script/medium-zoom.min.js",
    "revision": "044ec29434dec0e65e02037de0d87856"
  },
  {
    "url": "synology/hyper.html",
    "revision": "0f6ccc4b4f37be6955dd9b45df90e7e4"
  },
  {
    "url": "synology/rebuild.html",
    "revision": "e8c467535dfa28d664eea5804a9f6424"
  },
  {
    "url": "synology/smartctl.html",
    "revision": "f5b6cb07bfd7df549ca65b91ec646497"
  },
  {
    "url": "web/apache.html",
    "revision": "e19f000f10c8add1ef25cf63a4684a2c"
  },
  {
    "url": "web/nginx.html",
    "revision": "6b70ddb009d6fac4cb4214ae51622f1f"
  },
  {
    "url": "windows/powershell.html",
    "revision": "80b1dfb4b029ead0e8ac5b4371cee2a7"
  },
  {
    "url": "windows/registry.html",
    "revision": "380ca843cfeb763dbf027e0f7c809b5b"
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
