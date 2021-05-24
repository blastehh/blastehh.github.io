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
    "revision": "a7e891e7cf663c9db6e53ac3c79864be"
  },
  {
    "url": "about.html",
    "revision": "820d61212b9da0e704d6171278c664c8"
  },
  {
    "url": "ansible/passwd.html",
    "revision": "cbff318ab85fc72f773748efbab1b206"
  },
  {
    "url": "ansible/tricks.html",
    "revision": "e7e710ef0358ae29b39dbdeb66cbe4d3"
  },
  {
    "url": "assets/css/0.styles.c6c56598.css",
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
    "url": "assets/js/10.d0157df2.js",
    "revision": "48a69ba3ecbe44f44d7c68f93beb3f32"
  },
  {
    "url": "assets/js/11.49a5565a.js",
    "revision": "52dc1b99a4c50688e9dd3315e5af8799"
  },
  {
    "url": "assets/js/12.ba7e7d21.js",
    "revision": "86718bf8edc75335fad7559b8dd13a86"
  },
  {
    "url": "assets/js/13.1b1fc33a.js",
    "revision": "2e9b6a07c7595d03a942ac1a56f8f4ed"
  },
  {
    "url": "assets/js/14.c202bc8c.js",
    "revision": "b942e79f4fd879bdfcc1b7c0bf077ab5"
  },
  {
    "url": "assets/js/15.89c8d13e.js",
    "revision": "43240c0641f30403ca6523764a645735"
  },
  {
    "url": "assets/js/16.5bbf45fc.js",
    "revision": "af3906b45708c4ffdab8f08ed165cc58"
  },
  {
    "url": "assets/js/17.9ea846ed.js",
    "revision": "17e9bfc9cf8a93f71295cf4e0f260fb1"
  },
  {
    "url": "assets/js/18.c3b0ed91.js",
    "revision": "f0f4d38c368d79cae2569a8c19a04389"
  },
  {
    "url": "assets/js/19.28d5b94b.js",
    "revision": "78f9b240cb6c6d949008514f81cedccf"
  },
  {
    "url": "assets/js/2.2966f4d6.js",
    "revision": "76ab1e263f2f05f0e42452213a899ef5"
  },
  {
    "url": "assets/js/20.bcb53381.js",
    "revision": "60e8c32fcdc19e865cd4f19e6ba9de64"
  },
  {
    "url": "assets/js/21.8ca6de1c.js",
    "revision": "b1d5ba91d5ae8cbc525ddfe886799f1f"
  },
  {
    "url": "assets/js/22.30b19556.js",
    "revision": "fff7881a25d8be98b53a65a04889d1e6"
  },
  {
    "url": "assets/js/23.4e9ecfc0.js",
    "revision": "1c379dce72e898c3000a6537d4ee1c48"
  },
  {
    "url": "assets/js/24.cedd4edf.js",
    "revision": "c99e7e671e1554206f8adf50977dfcdb"
  },
  {
    "url": "assets/js/25.312e79c1.js",
    "revision": "48c698e39f63713df0516aa2de777f8b"
  },
  {
    "url": "assets/js/26.236e5aff.js",
    "revision": "83be87d575d35be366a650527cbe68c7"
  },
  {
    "url": "assets/js/27.e83c91d1.js",
    "revision": "bebd930c5dfe7aa6239a9bf35ef08239"
  },
  {
    "url": "assets/js/28.f7e93305.js",
    "revision": "56f9adbc0caf775270ea002829b99e26"
  },
  {
    "url": "assets/js/29.f79d02aa.js",
    "revision": "f3aee93113c8109beedb15f7604d84ef"
  },
  {
    "url": "assets/js/3.125fe0db.js",
    "revision": "ed6893cb149ce54285eef0182fd3f3ec"
  },
  {
    "url": "assets/js/30.ed89e32f.js",
    "revision": "7cfb2f10e9b13370b0941cfea445f6c3"
  },
  {
    "url": "assets/js/31.08f9009a.js",
    "revision": "d70e80224939c074de24ab4419145f9d"
  },
  {
    "url": "assets/js/32.22757cc7.js",
    "revision": "fe67e6d1702230fa22763c59a7c2e2c2"
  },
  {
    "url": "assets/js/33.5b6e2d6c.js",
    "revision": "2b9c7056acf8d089aa766d612e914d24"
  },
  {
    "url": "assets/js/34.28fe9cdb.js",
    "revision": "13097cdcd3cbe57647de4a5af51bd0de"
  },
  {
    "url": "assets/js/35.aeed0dbf.js",
    "revision": "41fb08e9a533147c78f996b3915cf4d3"
  },
  {
    "url": "assets/js/36.a24cfb1a.js",
    "revision": "424eb3f85e141bebad411476f7f39a94"
  },
  {
    "url": "assets/js/37.a88a78ab.js",
    "revision": "3475faf7effe5a86319bef34f2073202"
  },
  {
    "url": "assets/js/38.e3055367.js",
    "revision": "6d38e2cad342e7c6841b9d4059755ce2"
  },
  {
    "url": "assets/js/39.64e858ae.js",
    "revision": "8b4e3c6f2d337384336dc397a50d9e35"
  },
  {
    "url": "assets/js/4.b3fe2479.js",
    "revision": "bbf49d0b97500a4f0ab70b1332efe4fd"
  },
  {
    "url": "assets/js/40.c4f39332.js",
    "revision": "65bbcf5489513afea6227257f4200d72"
  },
  {
    "url": "assets/js/41.8710236c.js",
    "revision": "d7982419ee3c07137b44557d4d20fb48"
  },
  {
    "url": "assets/js/42.368415a9.js",
    "revision": "f5010adea120e30c5273443f1ca8c694"
  },
  {
    "url": "assets/js/43.b38bad05.js",
    "revision": "7b45078e65f256b47d12c19adbe34d4e"
  },
  {
    "url": "assets/js/44.dd24563d.js",
    "revision": "d324e8ce39a1626e5b3d0ff37701891f"
  },
  {
    "url": "assets/js/45.400657c7.js",
    "revision": "32a10342ab6514cd3d9d23e10ca2da44"
  },
  {
    "url": "assets/js/46.7a25269e.js",
    "revision": "2213079f0e7bcbbadd7bc77861d778c3"
  },
  {
    "url": "assets/js/47.b4afa1ee.js",
    "revision": "1c6d2b5aa0f32929769342412cd278df"
  },
  {
    "url": "assets/js/48.e9bc9cf0.js",
    "revision": "657d49c1b920db57249dde98bf989b67"
  },
  {
    "url": "assets/js/49.7da1064a.js",
    "revision": "5b59827d08f67062ea993f97fb327f33"
  },
  {
    "url": "assets/js/5.22bebbea.js",
    "revision": "b9bcf5fce886c7ff77b0b88479a0e16d"
  },
  {
    "url": "assets/js/50.33375caa.js",
    "revision": "21d130000ef773aa4e7ab61b7c60bbc0"
  },
  {
    "url": "assets/js/51.a1ef4aeb.js",
    "revision": "66be66fdacb6bde76e9f2fdd410f60d1"
  },
  {
    "url": "assets/js/52.83be8c3f.js",
    "revision": "a17d85fbac12723b1fe74cc98da9123d"
  },
  {
    "url": "assets/js/53.9243203c.js",
    "revision": "0e0421ee6ff62bba5cb5f5a03d9024cf"
  },
  {
    "url": "assets/js/54.15ee5ee0.js",
    "revision": "8a706dacde9ccbcdf8e9b9dd82e31eb6"
  },
  {
    "url": "assets/js/55.5543bbfa.js",
    "revision": "04de568e23fc14fcdd312a77bae90674"
  },
  {
    "url": "assets/js/56.5518ebd1.js",
    "revision": "f89d1b162c786528b88f45b0676e769a"
  },
  {
    "url": "assets/js/6.361a549a.js",
    "revision": "e840bc32d7257787cca59d0cb0fcd493"
  },
  {
    "url": "assets/js/7.5b5c04c8.js",
    "revision": "dfb4016727789126532c46e9a2546fc9"
  },
  {
    "url": "assets/js/8.98b1920a.js",
    "revision": "92efcb2e5fc0bf277f4831efe4323d36"
  },
  {
    "url": "assets/js/9.08e3b1c1.js",
    "revision": "6ed6409b6cafbe4e06a924886d53ec98"
  },
  {
    "url": "assets/js/app.5aaf8380.js",
    "revision": "019a620bee84a3fb71fc8c51d9f6c288"
  },
  {
    "url": "cisco/commands.html",
    "revision": "b90ef7b854e424d27f5148a46b612d09"
  },
  {
    "url": "docker/commands.html",
    "revision": "b3acd4345cd91d8a3f8ef8054860f7ac"
  },
  {
    "url": "docker/fiche.html",
    "revision": "f5d5aa4c8c01a746e4d893c19be4d267"
  },
  {
    "url": "docker/pihole.html",
    "revision": "b68d8e9f03bf1d5a9039de320d44592d"
  },
  {
    "url": "docker/service.html",
    "revision": "9ca7b2b32a0df49aa31742ac44e918b1"
  },
  {
    "url": "docker/swarm.html",
    "revision": "f76a946dd1b90c377fbbb66623ffc418"
  },
  {
    "url": "esxi/ssh.html",
    "revision": "486824b08dc151798c050ca23d128454"
  },
  {
    "url": "index.html",
    "revision": "82909194d888d0eb50ed6545bce2e350"
  },
  {
    "url": "linux/diag.html",
    "revision": "7098927c62573361028933be6366d959"
  },
  {
    "url": "linux/filesystem.html",
    "revision": "a128c4d3c4f69422a7619ece2a83c975"
  },
  {
    "url": "linux/iptables.html",
    "revision": "7d3cd3ad874cddf4497a0b05f32e256e"
  },
  {
    "url": "linux/kernel.html",
    "revision": "ebabc38c2225abd4d02d95ac953a779c"
  },
  {
    "url": "linux/logrotation.html",
    "revision": "b5d7e118ea1a4be7d0210782ce5a7cf8"
  },
  {
    "url": "linux/lvm.html",
    "revision": "7f6d4b29301f76b77ebd4b71aa7253fd"
  },
  {
    "url": "linux/mdraid.html",
    "revision": "fb08c8ff488a0e1a393faeec412dac9f"
  },
  {
    "url": "linux/mounting.html",
    "revision": "ae78fb08d2cb7f9fa61bdc039f0b1266"
  },
  {
    "url": "linux/network.html",
    "revision": "1e6eb22c1fa16172c7c20393042b0500"
  },
  {
    "url": "linux/ovhkernel.html",
    "revision": "5159d3acaa01be22342895f51e8b9827"
  },
  {
    "url": "linux/packageman.html",
    "revision": "06d9c932490e9c4125fe941519a16539"
  },
  {
    "url": "linux/pass.html",
    "revision": "e295a0e7f9ea3bed48f84b86a53b4bef"
  },
  {
    "url": "linux/pki.html",
    "revision": "62c3384c414cd8ae39a35edb6e1ae11b"
  },
  {
    "url": "linux/sed.html",
    "revision": "1e508bce9ac103928504aaa32a8479ba"
  },
  {
    "url": "linux/selinux.html",
    "revision": "996d67825f225ecab48f58cf464254f3"
  },
  {
    "url": "linux/shell.html",
    "revision": "3fc48aea4c7d03c50116b233028b451a"
  },
  {
    "url": "linux/sshs.html",
    "revision": "735d302134b3ccb24b4960bec1d3a61a"
  },
  {
    "url": "linux/systemd.html",
    "revision": "18971dcc6841a59df2b9b11c181022c8"
  },
  {
    "url": "linux/vi.html",
    "revision": "288bcdaf6130982e284ce842f09b6ba5"
  },
  {
    "url": "openvpn/client.html",
    "revision": "dc9111488526e34b4fb63011eb0df7d2"
  },
  {
    "url": "others/clearos.html",
    "revision": "e58215bc46cfaed481aea2a3f9e3910e"
  },
  {
    "url": "others/dns.html",
    "revision": "52b750cb659c72f32017a1461635324a"
  },
  {
    "url": "others/freenas.html",
    "revision": "83db7f697f160de6e504273fd8c03773"
  },
  {
    "url": "others/git.html",
    "revision": "d4b8d95d48d39968763bb2d284ab7d47"
  },
  {
    "url": "others/ilo.html",
    "revision": "84f34057e4eaca72dfd8fd4d43ca69f3"
  },
  {
    "url": "others/links.html",
    "revision": "fdfa706ad022a70d8883db64f2c78602"
  },
  {
    "url": "others/pxe.html",
    "revision": "558279d4af2ee7b6e531122fc69e5e1b"
  },
  {
    "url": "others/vuepress.html",
    "revision": "30ec4211bf5680b5371c1cfd4c24d754"
  },
  {
    "url": "script/medium-zoom.min.js",
    "revision": "044ec29434dec0e65e02037de0d87856"
  },
  {
    "url": "synology/hyper.html",
    "revision": "a35a3d5773f65cf4cf231232edea497f"
  },
  {
    "url": "synology/rebuild.html",
    "revision": "c44980d7fa65160cfdc90843432f3151"
  },
  {
    "url": "synology/smartctl.html",
    "revision": "aa79743417b2d3358eb597b32c7cd085"
  },
  {
    "url": "web/apache.html",
    "revision": "38627e2d36cacc2a9ce48362cbf891f0"
  },
  {
    "url": "web/nginx.html",
    "revision": "c936589dd52d93ea5d0c9d9d16ca983b"
  },
  {
    "url": "windows/powershell.html",
    "revision": "31d94b46c3a622b057f39494fb2b6e94"
  },
  {
    "url": "windows/registry.html",
    "revision": "fe9096c3c16a96b6c5cfae3d7ddd917a"
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
