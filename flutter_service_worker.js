'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "c335ae2ff56fb39d19eb2f07d47e9f55",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4b2e3c60fadb4c456527f42fd44408ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1eaebff77d806f0db34ae2a359a39fb7",
".git/logs/refs/heads/master": "1eaebff77d806f0db34ae2a359a39fb7",
".git/logs/refs/remotes/origin/master": "d19a2ac9344e92d1f375e53b3ae49690",
".git/objects/05/48227950981100014af2910b86e79a59b4156e": "d9b8578fc0e34461a016397124825357",
".git/objects/08/e028bf5143252bfbb53df15a0c56c7db62a929": "4d69a904f4cc435bc32211d9b8637d57",
".git/objects/0d/a6b5188031b99fcf78784ba0332705aea884c7": "e387d1438e0b89c4d5a2019ed8336291",
".git/objects/0e/0dcd235c4973becf25f38eb4e5bb26e154c86a": "13e3d699f54c273cb85da397b0df9a2d",
".git/objects/14/99239705768f3f5498a661a4b8e3170c810d02": "c5ec044c883b37c4144f05d067eecbb9",
".git/objects/15/1fcb70670b023742bad4daeadddf5f53d9e24b": "e716d2f02700d1c5d6a374dda752f69f",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/20/7bfcaed94687c26137b354b6cb4a2cac3d4e02": "bdfe5341dd2cb1d04808b424d1df2d96",
".git/objects/2d/b54b6101682c3d7383c25bead6384fb832fb37": "15a599479629e66051d032ed52153d42",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/34/ce9d20c2e580daabd8d64873e4b5d1e19b9d44": "1824fce65e020c3c3482ea172b2aec8d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/73d3d54797d2b2ce68ee78429f0613120588f4": "167cd0109eab0653a9fe211d1d08b3a7",
".git/objects/38/77aa11132a80eb7ab79ba0e0d2bf7da9c99b04": "de5fd384f7d2c57bb6ea3410ed4e97a3",
".git/objects/3a/cb25571fae28b85f58ca42868bb2cc5e5884d0": "9b9968864211574e239e7dae4c519fbf",
".git/objects/3c/59d58a3e974a30ca920e4a675100b0438f2fd9": "9fa30856f39a20d44b72e4db4afd67c0",
".git/objects/41/1e83ee000c60cd62f76037807e5d57e1ed4476": "187b23dc474e9093ae91779056cf0b56",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/d1132cea125a87db607e949925c9b13cb735c4": "200b20bf2c94cdcd9c8623d7183812c5",
".git/objects/43/3f42459b326110d488b1b8eb59d88c8eaf09c0": "fc604ea21ba4b88bed130dbf77c6d566",
".git/objects/48/a7136d30aa9ffb966e5e8f9cedb13457e46f82": "b4ff22b2e5fdf5a0cf5a7e5c5bb291c9",
".git/objects/49/dd05fb6ef6d39b86a3870c829443a8df84c4f5": "8a6759abfafe595c0684c8704fe95c5b",
".git/objects/4e/69bb5eb1f2189add225da6c919df043610c2ce": "8e40d4ce8b50b2ff146ee3bf775c7e1e",
".git/objects/4e/ba6ebc9d67e3ed33c139388d3e0019fc30be50": "2e29a72d7fa4c088f9e5e831e009f6b1",
".git/objects/58/3b5bee229cd15056e2f3b9009e9b325b196198": "a655366f91999bf647045d259bfcccf0",
".git/objects/60/02b28dd61a5b4613661e80a038a1028c2c71b3": "ecb5eb2223318be468cf497ecd0d1cf0",
".git/objects/66/c93f721b9c5794d7a46851a06853cf65ee70d2": "f1f8dfa9e7e0be4e6a756f9244500ed8",
".git/objects/69/f5dafd068217bebc0fc370ea8fa33e78a912bc": "0ef653cc88c261c67c122d6688a2e060",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/cdbf7eea17faa96f128c5ef499120b1da12b95": "fb447df5a11a85732872633061429257",
".git/objects/6b/6c2a60655868f2514cf399878d9e384f3d7e98": "b95eaa12640bff250910205955eff03c",
".git/objects/6b/e5cdccc14995ff49826e85c9c3fbcb878acd0e": "a1f48201b3d6f0a3921c8494eab7b3e6",
".git/objects/6c/6e0d5c7fb01d6aab6a0ea7f259d51e829bb8b5": "23df36f4891f45998c5f349d9061dab3",
".git/objects/73/ba3a88e5c7f3d0ffc4f3ebc551cf573968d581": "0b2da96cfc6026abcb685a5b32ce3a6a",
".git/objects/74/1f031777296fe34e2798f4fc324221fc701d32": "ba84249b93fc363be335576975f92b9e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/f2a535e62f188228893862d03863c226a7739f": "e23adf0bbfde64dffa8f699b0985e8be",
".git/objects/86/a5981b0a169dcea1f2125bfb898b61cdc0cb93": "75a28af7f6992196c4c6f548a66afe9d",
".git/objects/87/ec2fa7459d3f08a5ff0b4544c316cddef1e913": "2d7b2de6f2f36fa8a044156d2596dce2",
".git/objects/8a/bc66499b358f9fe6c9cbe5082a70cae91a8f05": "9f516442338910a3d5f2a074d86ddf46",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/39abd8364bc1ce1925b3efefe739cf80480ed6": "6292740ed5914e24420fb35d066151d9",
".git/objects/8e/427b1b7ce3d08babeb15a855a14bb5162816cf": "b2ac77b3adea99bfebd3e8ce20691320",
".git/objects/97/9e105a445ae63a5aa88a896b0eb128184d4dfb": "6b951307e2fd48925c7ba3a617511c94",
".git/objects/98/8e5abdad73da9b22151792b9dbcb6e94360704": "efa635f03e9fc6cdb37833ffabaae3ca",
".git/objects/9c/fd5fbe5d1166f0b89f827472977c3208aeedee": "477dc6b0e909023cfb2c6ff067a099fb",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/65cbac89ed93cc1262a23859f457a5860b0d1b": "72d28fd613e9e147998a01b6b2e4a133",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/2173633dc24268f37603ae583a4b6caa9f4b1d": "1c43277027ab4e03f2610061f85c071d",
".git/objects/a3/99826c90e892d44cfd52f00e969b5750956279": "3a00206afed4fa15436a7416d8bbfe0c",
".git/objects/a5/04edbedd8c7573210d8496e9ff9c06e1941877": "c353e327b76cbfcff8b8121dd4e6b805",
".git/objects/a7/24559472cf53eb63fb19d3a8ffeaf541c339ef": "6bd5471a9c1a60c0816669f8e1fcee40",
".git/objects/a7/2b52422b911c55b46c6d04b4c917d5634caa13": "2a2aa77ab34d639626b6fa8bd3f077e8",
".git/objects/a8/f96472fbb9359165ceccc97d48979a74aa5f24": "152acb500accfbcbb9848ec4f51557de",
".git/objects/aa/60fc36bad4f6e801624ba06f27df01b905ab06": "9909d32788fca9f951ff6e6cfa7e1815",
".git/objects/aa/a604cd5b414709250e8096883ac244a88d3dac": "041696bb8e8dd231a07de7353b3d7d07",
".git/objects/ab/b7bad1b48fd6b8be1dcdd4b70ea96fa6d67bcc": "8ee5fa59159663847f1d4b440d144a38",
".git/objects/ac/8000b012d09f74f031be0023871696b405cd34": "67e44e60644e2b44ebdf7db8e158c309",
".git/objects/ae/7c27fc6d8960264c2b272b5261a8a32801817e": "af6c4bbd8111c45dcc579a2a6482ec25",
".git/objects/b0/d5fc4a334bd3e1d89c128e8c25df76ddd0f353": "fef26302933128a816ac92cc205f7521",
".git/objects/b1/919b9b86fc8b643625d089faf255c5acb8cc5c": "ef69d31046159cf4ff98552b47704f24",
".git/objects/b2/1551a39c81fcbab3e7365b6495f2548390d267": "18fdfb7acaff4e0359b70cb864de5f60",
".git/objects/b4/4ca8df4ff479c818dd90a7ef361e4e6575ca05": "86339938a947a09ff260b4c4ec4e10a8",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/ba/87dea118de3eaa9b9dbe481c36b403da820a92": "7c4ddca1c7adeed8eec5a4c87743728e",
".git/objects/ba/ed2483c2f7fc6dddb913cc038d056f8916e9bf": "e7adb0a0afca96a246e87699ee8ad381",
".git/objects/bb/2243685aed1a749c59704556c4079feb0098dc": "d49b2e07ab8974a450eb70726ec4c963",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/7e80dcf07c217b9a2a0a80e4e3887fe93ed590": "969e02c49a930d603fef7e2bb1122640",
".git/objects/be/ecf53607af95d2aee103748c770a369148a545": "62927b5be1881b63d750892859b1ffdb",
".git/objects/c0/5ab64e8bcfbd4b1d1df99e2197217f87459649": "a13d09894182b7645ee5d4a7d17e0838",
".git/objects/c4/bd32df6c006e36f49bf002c74bd1f11ecae5a4": "4be0912d6066142d621cfc302362b9da",
".git/objects/cb/098fc57e5d770e32b5434f002bf71740d57201": "59f74c2d5a17e18ff3587ae5a9e8f492",
".git/objects/cc/fde638b238c5976c944c27ff9fa8f4f0f88e03": "daa0822d2ef666b14e463e7f25bb25db",
".git/objects/d3/3f0aabdc926ee8d028a0627b7eb90a1a0c8bdb": "5ad9a5551cfdcd289e6ec09666641a3a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/8fc6824d6ec7f74d582db05026bcb82de71fc3": "8c59393c907297fdeb1186328c69aaa5",
".git/objects/df/0a79fe55b89cfc25b151786911b06b621509fe": "04c0268bfe77e1deafdad81aa3eb1314",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/2fac30ce1a28b9d7a20fec020e08158927d20f": "6db0c7759b5e8ca9a6282b2435d0fd95",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f3/d9662f8b3d5feed66840dca1c29e8c0d0f3ceb": "59c3a0cc3f56ea3f52f8e74a9aa3bc5b",
".git/objects/f6/0fa14257969635331b5dcf390b99a14e14dedb": "b3297c4c02e32dcbf69c115e59797378",
".git/objects/f7/65078a705badabbeb50cf328ff3f353d9dabea": "4be1ed289fba2562a511225731d0eb9b",
".git/objects/f7/9bf38aada2756d306e50a69fad3e41eef54ca8": "63254e0e1d3faeb75224842a3cb09b68",
".git/objects/f8/c42cecd892187e82a5ef5f7f7bb0e66fc4b365": "578ec6afc3a9cbc6eabea0e0551fcb8e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "02737695679ad20e81fe0c529fbf5a8b",
".git/refs/remotes/origin/master": "02737695679ad20e81fe0c529fbf5a8b",
"assets/AssetManifest.bin": "25117c985f2f43c2110c2b99a62cfe6d",
"assets/AssetManifest.json": "8963a6b516d8ab9521d777b1095500f5",
"assets/assets/fonts/YekanBakhFaNum-Bold.ttf": "86130bdf09f379e55bb688505fc7a105",
"assets/assets/fonts/YekanBakhFaNum-Regular.ttf": "ace8a888630f4069d7a2d8225921a576",
"assets/assets/images/background.png": "7b9a8b3741577c559e31ec6711da62f6",
"assets/assets/images/best.png": "5c51abf3d6890dddebbab87d39d4eaec",
"assets/assets/images/bottom_navigation.png": "d6b7ad15f75eeeedc34b0f5617e5a38d",
"assets/assets/images/coin.png": "8074c729790ae9aea6e4b2854815e390",
"assets/assets/images/coins.png": "574f5adfd8e4ab814f7a180e5208477f",
"assets/assets/images/credit-card.png": "c9541157cd44b2ada27873a5449aa722",
"assets/assets/images/customs.png": "7813a3ddfec012afc72a50313f1d44f6",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/instagram.png": "6801f30c52eba93ac261e01582bc3efa",
"assets/assets/images/login.png": "7856e369de9271f4406e03e3752811bc",
"assets/assets/images/logo.png": "da4f4a21b711fd68bff6f993c8108b54",
"assets/assets/images/messages.png": "6a0f939cdb9d189d10a120a65f276291",
"assets/assets/images/my_team.png": "4e9d3541043e0894c531895821028cd4",
"assets/assets/images/profile.png": "c89e8001d6140cbaa05ddbec5fcd6fdf",
"assets/assets/images/profile_selected.png": "2c248a5c80469a0273288ea2dc94a7e5",
"assets/assets/images/rank.png": "d4cb5f8dcbe7879f673763f211c96c3f",
"assets/assets/images/rank1.png": "d1bb1d4ce40a51749497ead64925fab1",
"assets/assets/images/rank2.png": "7a8a4907c57c6c54c8ae4ae602b3f6ac",
"assets/assets/images/rank3.png": "fc8032027ee6cc6028983a6cab33821a",
"assets/assets/images/rank_selected.png": "70120fa08969ba83cca0994c812eef20",
"assets/assets/images/search-normal.png": "180f3535b224de0d75c41ab4ff7b1aa4",
"assets/assets/images/selected_bottom.png": "6ea3928b2d4b38f1f1ee85891d1da626",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/images/store.png": "2d0611843eae70fb966a7a3a51abb455",
"assets/assets/images/store_selected.png": "d7f3ccc9285d9acae40558bc5640ac52",
"assets/assets/images/support.png": "e3c7ad185ae35529cc320867f2dd3227",
"assets/assets/images/team_top.png": "bbfc8837a5e04cbe322d11dfb0d75f78",
"assets/assets/images/telegram.png": "edec865640abadedf1548346d36e4661",
"assets/assets/images/vs.png": "64445975e9d60d9532083075c56ab0c5",
"assets/assets/images/wallet_back.png": "6cb3a9c36fcdd6b89ca8eabd8da8942e",
"assets/assets/images/welcome.png": "5428f7ad27ee4bba534b706b6c1d5e9e",
"assets/assets/images/wins.png": "449d80d9cba76758574ff505b4645891",
"assets/assets/translations/en-US.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/assets/translations/fa-IR.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/FontManifest.json": "991dae256570569cb7f09b0b4b2abac6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "af3a8a416f03638b875adfbf52a0aea7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "4c9d551b2f568feeefa320e57a0d83fc",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "da6a55f713a56c43ddbea232df4926a5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "89e7a5192ac57cc4a99334142c80d546",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5c487df539e12598d9acf33828384201",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "929ddba76cea0ca4b0be59ac02fb773b",
"icons/Icon-512.png": "60092a82e08ae0556ad190989e16293d",
"icons/Icon-maskable-192.png": "929ddba76cea0ca4b0be59ac02fb773b",
"icons/Icon-maskable-512.png": "60092a82e08ae0556ad190989e16293d",
"index.html": "e025bbc54e9a1fef21f2f51004bec244",
"/": "e025bbc54e9a1fef21f2f51004bec244",
"main.dart.js": "c3f17053846cc05ef027909c3f8742b0",
"manifest.json": "a5692a5601629e012c53e948d20dc938",
"version.json": "d9117c76b5e102526a82a5cd72171927"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
