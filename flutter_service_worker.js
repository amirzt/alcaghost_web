'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "25117c985f2f43c2110c2b99a62cfe6d",
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
"index.html": "61e5fd2943634558058acf3ec3c700eb",
"/": "61e5fd2943634558058acf3ec3c700eb",
"main.dart.js": "51eb6b283aa8e44ca5c2166c754eee02",
"manifest.json": "a5692a5601629e012c53e948d20dc938",
"version.json": "0611ec9a45e391e766beb8ac47564deb"};
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
