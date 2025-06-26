'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a446e14833fc677ff225b1a3d9d380f5",
"assets/AssetManifest.bin.json": "c5a838d01b253b856bdfbb345a77476a",
"assets/AssetManifest.json": "346d5a3333f77c9079b3a9feeddb49f3",
"assets/assets/documents_test.json": "5fd88cebbe1ae33fb2f75f21fb198634",
"assets/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/assets/fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/icon/action.png": "134df4ea07d5c17c3d75fd9d65094044",
"assets/assets/icon/add.png": "82412367968cc5e3769bb4c5881a5ac0",
"assets/assets/icon/attach.png": "ac3e12c4d6b744f2192908e65a72bc92",
"assets/assets/icon/calender.png": "f9e9c903801b699821ff3b430b68fe09",
"assets/assets/icon/close.png": "dbdf3d488c382dba3680e829135ee49e",
"assets/assets/icon/company.png": "2c200768a2ca7d963c79699139dd6dcf",
"assets/assets/icon/culture.png": "4d7789b8231efe7db484f81b407775bd",
"assets/assets/icon/date.png": "ded27b39e21e972e2345034181bef5cb",
"assets/assets/icon/depositSign.png": "627cddb35a35a64b1d4772b3811851bc",
"assets/assets/icon/deposit_sign_key.png": "86120722c5bc4466380a44b309836aae",
"assets/assets/icon/diia.png": "14e860f9854f4553d979c45b8b72d06d",
"assets/assets/icon/document_name.png": "8d224419df214451d95d1a54c4baeb25",
"assets/assets/icon/dot.png": "06f7158cb97d1af0dd596c9d125302d6",
"assets/assets/icon/down.png": "b0c4455731166b44ceacfcfebc4eefd2",
"assets/assets/icon/email.png": "b33b610e52b376f1b308f0893709d8cd",
"assets/assets/icon/erdpou.png": "8238ab272f71a4fc6fe6ec79733f1612",
"assets/assets/icon/facebook.png": "e827ce057e147b493a12e4fd5fcef7fa",
"assets/assets/icon/flash_disk.png": "dafafbda8c0b4a745131355c72d5e645",
"assets/assets/icon/four_boxes.png": "8c7693dcc4db976b0d1414eb614f106c",
"assets/assets/icon/google.png": "48d2e4f06b0871dda1894adda780bb49",
"assets/assets/icon/hashtag.png": "ebf09922f13da78c04c6df3a840e8d16",
"assets/assets/icon/hide.png": "9b19f515ddfe60b66948de7145c30c41",
"assets/assets/icon/icon_cancel.png": "c2605022383e6dab2390c389cc462ada",
"assets/assets/icon/icon_done.png": "f2d032547b225c75bc157b822894a7c9",
"assets/assets/icon/left_arrow.png": "d6210cd7f8505d93557db739abf6f2d2",
"assets/assets/icon/login_external.png": "d8344031589718e18c7780ee6e553943",
"assets/assets/icon/minus.png": "c9babc2f841d16663629b91445168c48",
"assets/assets/icon/password.png": "6f99d3c5d72d34898ba452dec289d118",
"assets/assets/icon/phone.png": "fba46bfa17bb2372ce319a1e13fb1031",
"assets/assets/icon/plus.png": "8b606e5aeff2e8aeafa9d83d02f37ffe",
"assets/assets/icon/privat24.png": "0abcb7d013be1701d74bf5e04ea90769",
"assets/assets/icon/profile.png": "e3b7ba865438c6da4552ace54481c97e",
"assets/assets/icon/resize.png": "09b41756e4ba4251c87dd8687e244995",
"assets/assets/icon/resize_decrease.png": "a286aec44c124ee7ed4b173ace7b955e",
"assets/assets/icon/resize_increase.png": "ea36cc33c69fc50ca35fc921f905b71d",
"assets/assets/icon/right_arrow.png": "efd04453e7a647fba94dfbee80f39f07",
"assets/assets/icon/rotate_left.png": "339c1cc7457fa4594048de14146ebb73",
"assets/assets/icon/rotate_right.png": "9324cb55bb7d16579db960b30050abbc",
"assets/assets/icon/search.png": "3c7a2881060a0a50a7baaf95b2ac3104",
"assets/assets/icon/search_more.png": "c04596d7be2cfc24cb07af64daebc028",
"assets/assets/icon/seed.png": "8360618bdd4c048d9e009a259b24a407",
"assets/assets/icon/show.png": "0284d4fa3b0513418347e57765a74d1a",
"assets/assets/icon/sign.png": "928b922cb365864da968356ece57a779",
"assets/assets/icon/signature_key.png": "c830c74581a3e409665677b4c1031279",
"assets/assets/icon/stamp.png": "7a3d78f0d827c0b9e02ca952ee31f8ba",
"assets/assets/icon/sum.png": "73f85ed60bd6d56f8b354c0cc50e36f1",
"assets/assets/icon/text.png": "5b3932befbc1b6b3a7cfd6f30f8196bd",
"assets/assets/icon/tick.png": "97e7855740641f75a3e5777c965901e5",
"assets/assets/icon/trash.png": "60c2f02efbe24f395d5db01ee63a6f06",
"assets/assets/icon/type.png": "21432f5b1dfd4723da1bde246dfd3433",
"assets/assets/icon/UAH.png": "fa2fa22399069115d61aeae9d1a7f735",
"assets/assets/icon/ukraine.png": "9d40057e533b6c7ff2227f49342294f9",
"assets/assets/icon/up.png": "89bd3f59433e06de631d31133cdfaeeb",
"assets/assets/icon/upload.png": "3616efd6a1a8fd1df09d121e2fe35cf3",
"assets/assets/icon/weight.png": "92fdfdd4bb40274d959b2bb7d0852377",
"assets/assets/image/agro.png": "56cca8df39879903003a539747b74311",
"assets/assets/image/auth_background.png": "d7e2a3ce5abe4424de146e981d7dab67",
"assets/assets/image/default_user.png": "1e26811a585fa30fb948045cb25c8ef9",
"assets/assets/image/doc_agro_login.png": "2c8bf9d975fd62ffff3f9b255f5085ee",
"assets/assets/image/doc_back_to_delete.png": "abc77d2606dcf4b08c6103d9eea1b969",
"assets/assets/image/key_sign_auth.png": "1d4b399aab5617bb7beba37ebbe8e5c4",
"assets/assets/image/main_background.png": "f03d6cf11a243df5102199673b5196ec",
"assets/assets/translations/uk.json": "48bb6d3e6085e5b60fa975d6d8ec646d",
"assets/FontManifest.json": "5acbd5f3600e93e587681f4979702ff4",
"assets/fonts/MaterialIcons-Regular.otf": "90d7857990ca8539583b28b7563192ff",
"assets/NOTICES": "5cf22a6a17605b3d5fa240c86a602ec6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_calendar/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_calendar/assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "03a34d5edfc0300c096e5e1f9c156c52",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1209d70361a1180f19ec62f00ca77a99",
"/": "1209d70361a1180f19ec62f00ca77a99",
"main.dart.js": "3b2030756af3bf2d8c708502dc7528fa",
"manifest.json": "c8dee18b4addbe819a845949a3c67787",
"version.json": "e62d72de16df5f87e1f22c8a1192d5ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
