// include: shell.js
// include: minimum_runtime_check.js
// end include: minimum_runtime_check.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module != 'undefined' ? Module : {};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = !!globalThis.window;
var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != 'renderer';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// include: /tmp/tmphtbuc6n6.js

  if (!Module['expectedDataFileDownloads']) Module['expectedDataFileDownloads'] = 0;
  Module['expectedDataFileDownloads']++;
  (() => {
    // Do not attempt to redownload the virtual filesystem data when in a pthread or a Wasm Worker context.
    var isPthread = typeof ENVIRONMENT_IS_PTHREAD != 'undefined' && ENVIRONMENT_IS_PTHREAD;
    var isWasmWorker = typeof ENVIRONMENT_IS_WASM_WORKER != 'undefined' && ENVIRONMENT_IS_WASM_WORKER;
    if (isPthread || isWasmWorker) return;
    var isNode = globalThis.process && globalThis.process.versions && globalThis.process.versions.node && globalThis.process.type != 'renderer';
    async function loadPackage(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = '/home/user/build/rel/townforge.data';
      var REMOTE_PACKAGE_BASE = 'townforge.data';
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      async function fetchRemotePackage(packageName, packageSize) {
        if (isNode) {
          var contents = require('fs').readFileSync(packageName);
          return new Uint8Array(contents).buffer;
        }
        if (!Module['dataFileDownloads']) Module['dataFileDownloads'] = {};
        try {
          var response = await fetch(packageName);
        } catch (e) {
          throw new Error(`Network Error: ${packageName}`, {e});
        }
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.url}`);
        }

        const chunks = [];
        const headers = response.headers;
        const total = Number(headers.get('Content-Length') || packageSize);
        let loaded = 0;

        Module['setStatus'] && Module['setStatus']('Downloading data...');
        const reader = response.body.getReader();

        while (1) {
          var {done, value} = await reader.read();
          if (done) break;
          chunks.push(value);
          loaded += value.length;
          Module['dataFileDownloads'][packageName] = {loaded, total};

          let totalLoaded = 0;
          let totalSize = 0;

          for (const download of Object.values(Module['dataFileDownloads'])) {
            totalLoaded += download.loaded;
            totalSize += download.total;
          }

          Module['setStatus'] && Module['setStatus'](`Downloading data... (${totalLoaded}/${totalSize})`);
        }

        const packageData = new Uint8Array(chunks.map((c) => c.length).reduce((a, b) => a + b, 0));
        let offset = 0;
        for (const chunk of chunks) {
          packageData.set(chunk, offset);
          offset += chunk.length;
        }
        return packageData.buffer;
      }

      var fetchPromise;
      var fetched = Module['getPreloadedPackage'] && Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE);

      if (!fetched) {
        // Note that we don't use await here because we want to execute the
        // the rest of this function immediately.
        fetchPromise = fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE);
      }

    async function runWithFS(Module) {

      function assert(check, msg) {
        if (!check) throw new Error(msg);
      }
Module['FS_createPath']("/", "assets", true, true);
Module['FS_createPath']("/assets", "animals", true, true);
Module['FS_createPath']("/assets", "buildings", true, true);
Module['FS_createPath']("/assets", "characters", true, true);
Module['FS_createPath']("/assets/characters", "gear", true, true);
Module['FS_createPath']("/assets", "cragmoor_buildings", true, true);
Module['FS_createPath']("/assets", "dungeon", true, true);
Module['FS_createPath']("/assets", "dungeon_props", true, true);
Module['FS_createPath']("/assets", "dungeon_themed", true, true);
Module['FS_createPath']("/assets", "fonts", true, true);
Module['FS_createPath']("/assets", "frostmere_buildings", true, true);
Module['FS_createPath']("/assets", "gear_icons", true, true);
Module['FS_createPath']("/assets", "ground", true, true);
Module['FS_createPath']("/assets", "hero", true, true);
Module['FS_createPath']("/assets", "innocents", true, true);
Module['FS_createPath']("/assets", "interiors", true, true);
Module['FS_createPath']("/assets/interiors", "alchemy", true, true);
Module['FS_createPath']("/assets/interiors", "bank", true, true);
Module['FS_createPath']("/assets/interiors", "carpenter", true, true);
Module['FS_createPath']("/assets/interiors", "healer", true, true);
Module['FS_createPath']("/assets/interiors", "house", true, true);
Module['FS_createPath']("/assets/interiors", "kf", true, true);
Module['FS_createPath']("/assets/interiors", "kk", true, true);
Module['FS_createPath']("/assets/interiors", "provisioner", true, true);
Module['FS_createPath']("/assets/interiors", "shared", true, true);
Module['FS_createPath']("/assets/interiors", "smith", true, true);
Module['FS_createPath']("/assets/interiors", "stable", true, true);
Module['FS_createPath']("/assets/interiors", "tailor", true, true);
Module['FS_createPath']("/assets/interiors", "townhall", true, true);
Module['FS_createPath']("/assets", "item_icons", true, true);
Module['FS_createPath']("/assets", "knight", true, true);
Module['FS_createPath']("/assets", "models", true, true);
Module['FS_createPath']("/assets", "monsters", true, true);
Module['FS_createPath']("/assets", "monsters3d", true, true);
Module['FS_createPath']("/assets", "monsters_boss", true, true);
Module['FS_createPath']("/assets", "monsters_boss_v2", true, true);
Module['FS_createPath']("/assets", "monsters_v2", true, true);
Module['FS_createPath']("/assets", "npcs_v2", true, true);
Module['FS_createPath']("/assets", "outfits", true, true);
Module['FS_createPath']("/assets", "paperdoll", true, true);
Module['FS_createPath']("/assets/paperdoll", "arms", true, true);
Module['FS_createPath']("/assets/paperdoll", "base", true, true);
Module['FS_createPath']("/assets/paperdoll", "body", true, true);
Module['FS_createPath']("/assets/paperdoll", "boots", true, true);
Module['FS_createPath']("/assets/paperdoll", "gloves", true, true);
Module['FS_createPath']("/assets/paperdoll", "gorget", true, true);
Module['FS_createPath']("/assets/paperdoll", "hair", true, true);
Module['FS_createPath']("/assets/paperdoll", "hand_right", true, true);
Module['FS_createPath']("/assets/paperdoll", "head", true, true);
Module['FS_createPath']("/assets/paperdoll", "legs", true, true);
Module['FS_createPath']("/assets", "saltmere_buildings", true, true);
Module['FS_createPath']("/assets", "sfx", true, true);
Module['FS_createPath']("/assets", "shaders", true, true);
Module['FS_createPath']("/assets", "skeleton", true, true);
Module['FS_createPath']("/assets", "spell_icons", true, true);
Module['FS_createPath']("/assets", "spellbook_icons", true, true);
Module['FS_createPath']("/assets", "town_buildings", true, true);
Module['FS_createPath']("/assets", "village", true, true);
Module['FS_createPath']("/assets", "wild_props", true, true);
Module['FS_createPath']("/assets", "wilderness", true, true);
Module['FS_createPath']("/assets", "wilderness_entrances", true, true);
Module['FS_createPath']("/assets", "wilderness_props", true, true);
Module['FS_createPath']("/assets", "wilderness_v2", true, true);
Module['FS_createPath']("/assets/wilderness_v2", "creatures", true, true);
Module['FS_createPath']("/assets/wilderness_v2", "monsters", true, true);

      async function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData ' + arrayBuffer.constructor.name);
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        // Reuse the bytearray from the XHR as the source for file reads.
          for (var file of metadata['files']) {
            var name = file['filename'];
            var data = byteArray.subarray(file['start'], file['end']);
            // canOwn this data in the filesystem, it is a slice into the heap that will never change
        Module['FS_createDataFile'](name, null, data, true, true, true);
          }
          Module['removeRunDependency']('datafile_/home/user/build/rel/townforge.data');
      }
      Module['addRunDependency']('datafile_/home/user/build/rel/townforge.data');

      if (!Module['preloadResults']) Module['preloadResults'] = {};

      Module['preloadResults'][PACKAGE_NAME] = {fromCache: false};
      if (!fetched) {
        fetched = await fetchPromise;
      }
      await processPackageData(fetched);

    }
    // Detect whether the module JS file has already been loaded.
    if (Module['FS_createPath']) {
      runWithFS(Module);
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module['preRun'].push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/assets/animals/Cow.glb", "start": 0, "end": 490872}, {"filename": "/assets/animals/Deer.glb", "start": 490872, "end": 994736}, {"filename": "/assets/animals/Fox.glb", "start": 994736, "end": 1474852}, {"filename": "/assets/animals/Horse.glb", "start": 1474852, "end": 1981432}, {"filename": "/assets/animals/README.md", "start": 1981432, "end": 1982242}, {"filename": "/assets/animals/ShibaInu.glb", "start": 1982242, "end": 2441286}, {"filename": "/assets/animals/Stag.glb", "start": 2441286, "end": 2953206}, {"filename": "/assets/animals/Wolf.glb", "start": 2953206, "end": 3443674}, {"filename": "/assets/buildings/alchemy.png", "start": 3443674, "end": 3444432}, {"filename": "/assets/buildings/bank.png", "start": 3444432, "end": 3445279}, {"filename": "/assets/buildings/carpenter.png", "start": 3445279, "end": 3445670}, {"filename": "/assets/buildings/door.png", "start": 3445670, "end": 3447628}, {"filename": "/assets/buildings/healer.png", "start": 3447628, "end": 3447810}, {"filename": "/assets/buildings/provisioner.png", "start": 3447810, "end": 3448418}, {"filename": "/assets/buildings/smith.png", "start": 3448418, "end": 3449034}, {"filename": "/assets/buildings/stable.png", "start": 3449034, "end": 3449686}, {"filename": "/assets/buildings/tailor.png", "start": 3449686, "end": 3450342}, {"filename": "/assets/buildings/townhall.png", "start": 3450342, "end": 3450936}, {"filename": "/assets/characters/Humanoid.glb", "start": 3450936, "end": 4970784}, {"filename": "/assets/characters/README.md", "start": 4970784, "end": 4972239}, {"filename": "/assets/characters/gear/axe_1handed.bin", "start": 4972239, "end": 4984763}, {"filename": "/assets/characters/gear/axe_1handed.gltf", "start": 4984763, "end": 4987850}, {"filename": "/assets/characters/gear/barbarian_texture.png", "start": 4987850, "end": 5002939}, {"filename": "/assets/characters/gear/crossbow_1handed.bin", "start": 5002939, "end": 5028139}, {"filename": "/assets/characters/gear/crossbow_1handed.gltf", "start": 5028139, "end": 5031222}, {"filename": "/assets/characters/gear/dagger.bin", "start": 5031222, "end": 5038878}, {"filename": "/assets/characters/gear/dagger.gltf", "start": 5038878, "end": 5041943}, {"filename": "/assets/characters/gear/knight_texture.png", "start": 5041943, "end": 5056115}, {"filename": "/assets/characters/gear/mage_texture.png", "start": 5056115, "end": 5072426}, {"filename": "/assets/characters/gear/rogue_texture.png", "start": 5072426, "end": 5089096}, {"filename": "/assets/characters/gear/shield_round.bin", "start": 5089096, "end": 5101104}, {"filename": "/assets/characters/gear/shield_round.gltf", "start": 5101104, "end": 5104187}, {"filename": "/assets/characters/gear/staff.bin", "start": 5104187, "end": 5122763}, {"filename": "/assets/characters/gear/staff.gltf", "start": 5122763, "end": 5125824}, {"filename": "/assets/characters/gear/sword_1handed.bin", "start": 5125824, "end": 5139080}, {"filename": "/assets/characters/gear/sword_1handed.gltf", "start": 5139080, "end": 5142160}, {"filename": "/assets/cragmoor_buildings/bank.png", "start": 5142160, "end": 5498907}, {"filename": "/assets/cragmoor_buildings/healer.png", "start": 5498907, "end": 5859379}, {"filename": "/assets/cragmoor_buildings/minersguild.png", "start": 5859379, "end": 6257429}, {"filename": "/assets/cragmoor_buildings/provisioner.png", "start": 6257429, "end": 6627613}, {"filename": "/assets/cragmoor_buildings/smith.png", "start": 6627613, "end": 6985240}, {"filename": "/assets/dungeon/floor.png", "start": 6985240, "end": 6987600}, {"filename": "/assets/dungeon/wall.png", "start": 6987600, "end": 6987761}, {"filename": "/assets/dungeon_props/README.md", "start": 6987761, "end": 6988334}, {"filename": "/assets/dungeon_props/banner_patternA_blue.glb", "start": 6988334, "end": 7013498}, {"filename": "/assets/dungeon_props/banner_patternA_brown.glb", "start": 7013498, "end": 7038666}, {"filename": "/assets/dungeon_props/banner_patternA_green.glb", "start": 7038666, "end": 7063834}, {"filename": "/assets/dungeon_props/banner_patternA_red.glb", "start": 7063834, "end": 7088998}, {"filename": "/assets/dungeon_props/banner_patternA_white.glb", "start": 7088998, "end": 7114166}, {"filename": "/assets/dungeon_props/banner_patternA_yellow.glb", "start": 7114166, "end": 7139334}, {"filename": "/assets/dungeon_props/barrel_large.glb", "start": 7139334, "end": 7183626}, {"filename": "/assets/dungeon_props/barrel_small_stack.glb", "start": 7183626, "end": 7281718}, {"filename": "/assets/dungeon_props/bed_floor.glb", "start": 7281718, "end": 7307214}, {"filename": "/assets/dungeon_props/box_large.glb", "start": 7307214, "end": 7335954}, {"filename": "/assets/dungeon_props/box_stacked.glb", "start": 7335954, "end": 7482922}, {"filename": "/assets/dungeon_props/candle_triple.glb", "start": 7482922, "end": 7511162}, {"filename": "/assets/dungeon_props/crates_stacked.glb", "start": 7511162, "end": 7614866}, {"filename": "/assets/dungeon_props/keg.glb", "start": 7614866, "end": 7674778}, {"filename": "/assets/dungeon_props/pillar_decorated.glb", "start": 7674778, "end": 7737238}, {"filename": "/assets/dungeon_props/rubble_half.glb", "start": 7737238, "end": 7776074}, {"filename": "/assets/dungeon_props/rubble_large.glb", "start": 7776074, "end": 7836270}, {"filename": "/assets/dungeon_props/shelf_small_candles.glb", "start": 7836270, "end": 7866306}, {"filename": "/assets/dungeon_props/shelves.glb", "start": 7866306, "end": 7893302}, {"filename": "/assets/dungeon_props/sword_shield_broken.glb", "start": 7893302, "end": 7933282}, {"filename": "/assets/dungeon_props/table_medium_broken.glb", "start": 7933282, "end": 7968466}, {"filename": "/assets/dungeon_props/trunk_medium_A.glb", "start": 7968466, "end": 7994886}, {"filename": "/assets/dungeon_themed/alchemy_floor.png", "start": 7994886, "end": 7996024}, {"filename": "/assets/dungeon_themed/alchemy_wall.png", "start": 7996024, "end": 7996477}, {"filename": "/assets/dungeon_themed/bloodtusk_floor.png", "start": 7996477, "end": 7997047}, {"filename": "/assets/dungeon_themed/bloodtusk_wall.png", "start": 7997047, "end": 7997827}, {"filename": "/assets/dungeon_themed/carpenter_floor.png", "start": 7997827, "end": 7998968}, {"filename": "/assets/dungeon_themed/carpenter_wall.png", "start": 7998968, "end": 7999893}, {"filename": "/assets/dungeon_themed/emberveil_brazier.png", "start": 7999893, "end": 8000499}, {"filename": "/assets/dungeon_themed/emberveil_floor.png", "start": 8000499, "end": 8001618}, {"filename": "/assets/dungeon_themed/emberveil_wall.png", "start": 8001618, "end": 8002927}, {"filename": "/assets/dungeon_themed/hollowwarrens_floor.png", "start": 8002927, "end": 8003088}, {"filename": "/assets/dungeon_themed/hollowwarrens_rug.png", "start": 8003088, "end": 8005108}, {"filename": "/assets/dungeon_themed/hollowwarrens_torch.png", "start": 8005108, "end": 8005418}, {"filename": "/assets/dungeon_themed/hollowwarrens_wall.png", "start": 8005418, "end": 8005553}, {"filename": "/assets/dungeon_themed/provisioner_floor.png", "start": 8005553, "end": 8006703}, {"filename": "/assets/dungeon_themed/provisioner_wall.png", "start": 8006703, "end": 8007505}, {"filename": "/assets/dungeon_themed/smith_floor.png", "start": 8007505, "end": 8007952}, {"filename": "/assets/dungeon_themed/smith_wall.png", "start": 8007952, "end": 8009077}, {"filename": "/assets/dungeon_themed/sunkencrypt_floor.png", "start": 8009077, "end": 8009986}, {"filename": "/assets/dungeon_themed/sunkencrypt_wall.png", "start": 8009986, "end": 8011028}, {"filename": "/assets/dungeon_themed/sunkencrypt_water.png", "start": 8011028, "end": 8011445}, {"filename": "/assets/dungeon_themed/tailor_floor.png", "start": 8011445, "end": 8012324}, {"filename": "/assets/dungeon_themed/tailor_wall.png", "start": 8012324, "end": 8013137}, {"filename": "/assets/dungeon_themed/weaversnest_floor.png", "start": 8013137, "end": 8015412}, {"filename": "/assets/dungeon_themed/weaversnest_wall.png", "start": 8015412, "end": 8017835}, {"filename": "/assets/dungeon_themed/wyrmscar_floor.png", "start": 8017835, "end": 8019063}, {"filename": "/assets/dungeon_themed/wyrmscar_wall.png", "start": 8019063, "end": 8019544}, {"filename": "/assets/fonts/Nunito.ttf", "start": 8019544, "end": 8151876}, {"filename": "/assets/fonts/README.txt", "start": 8151876, "end": 8152132}, {"filename": "/assets/frostmere_buildings/bank.png", "start": 8152132, "end": 8362413}, {"filename": "/assets/frostmere_buildings/furtrader.png", "start": 8362413, "end": 8595594}, {"filename": "/assets/frostmere_buildings/healer.png", "start": 8595594, "end": 8801653}, {"filename": "/assets/frostmere_buildings/provisioner.png", "start": 8801653, "end": 9063821}, {"filename": "/assets/frostmere_buildings/smith.png", "start": 9063821, "end": 9281113}, {"filename": "/assets/gear_icons/amulet.png", "start": 9281113, "end": 9284973}, {"filename": "/assets/gear_icons/gauntlet.png", "start": 9284973, "end": 9289830}, {"filename": "/assets/gear_icons/helmet.png", "start": 9289830, "end": 9298314}, {"filename": "/assets/gear_icons/shield.png", "start": 9298314, "end": 9309737}, {"filename": "/assets/gear_icons/shield2.png", "start": 9309737, "end": 9320969}, {"filename": "/assets/gear_icons/sword.png", "start": 9320969, "end": 9324072}, {"filename": "/assets/ground/dirt.png", "start": 9324072, "end": 9324534}, {"filename": "/assets/ground/foliage.png", "start": 9324534, "end": 9325776}, {"filename": "/assets/ground/grass.png", "start": 9325776, "end": 9326951}, {"filename": "/assets/hero/hero_v2.png", "start": 9326951, "end": 10535397}, {"filename": "/assets/hero/hero_v3.png", "start": 10535397, "end": 12085453}, {"filename": "/assets/hero/walk.png", "start": 12085453, "end": 12153676}, {"filename": "/assets/innocents/farmer.png", "start": 12153676, "end": 12190704}, {"filename": "/assets/innocents/merchant.png", "start": 12190704, "end": 12248305}, {"filename": "/assets/innocents/pilgrim.png", "start": 12248305, "end": 12277636}, {"filename": "/assets/innocents/traveler.png", "start": 12277636, "end": 12314782}, {"filename": "/assets/interiors/alchemy/Bottle_1.bin", "start": 12314782, "end": 12328734}, {"filename": "/assets/interiors/alchemy/Bottle_1.gltf", "start": 12328734, "end": 12330242}, {"filename": "/assets/interiors/alchemy/Cauldron.bin", "start": 12330242, "end": 12392954}, {"filename": "/assets/interiors/alchemy/Cauldron.gltf", "start": 12392954, "end": 12395269}, {"filename": "/assets/interiors/alchemy/Potion_1.bin", "start": 12395269, "end": 12413469}, {"filename": "/assets/interiors/alchemy/Potion_1.gltf", "start": 12413469, "end": 12414982}, {"filename": "/assets/interiors/alchemy/Potion_2.bin", "start": 12414982, "end": 12434654}, {"filename": "/assets/interiors/alchemy/Potion_2.gltf", "start": 12434654, "end": 12436167}, {"filename": "/assets/interiors/alchemy/Potion_4.bin", "start": 12436167, "end": 12458703}, {"filename": "/assets/interiors/alchemy/Potion_4.gltf", "start": 12458703, "end": 12460216}, {"filename": "/assets/interiors/alchemy/Shelf_Small_Bottles.bin", "start": 12460216, "end": 12689700}, {"filename": "/assets/interiors/alchemy/Shelf_Small_Bottles.gltf", "start": 12689700, "end": 12693509}, {"filename": "/assets/interiors/alchemy/SmallBottle.bin", "start": 12693509, "end": 12699209}, {"filename": "/assets/interiors/alchemy/SmallBottle.gltf", "start": 12699209, "end": 12700696}, {"filename": "/assets/interiors/alchemy/SmallBottles_1.bin", "start": 12700696, "end": 12721252}, {"filename": "/assets/interiors/alchemy/SmallBottles_1.gltf", "start": 12721252, "end": 12722770}, {"filename": "/assets/interiors/alchemy/Table_RoundSmall.mtl", "start": 12722770, "end": 12723012}, {"filename": "/assets/interiors/alchemy/Torch_Metal.bin", "start": 12723012, "end": 12762112}, {"filename": "/assets/interiors/alchemy/Torch_Metal.gltf", "start": 12762112, "end": 12764435}, {"filename": "/assets/interiors/bank/Coin.bin", "start": 12764435, "end": 12778899}, {"filename": "/assets/interiors/bank/Coin.gltf", "start": 12778899, "end": 12780402}, {"filename": "/assets/interiors/bank/Coin_Pile.bin", "start": 12780402, "end": 12827922}, {"filename": "/assets/interiors/bank/Coin_Pile.gltf", "start": 12827922, "end": 12829441}, {"filename": "/assets/interiors/bank/Coin_Pile_2.bin", "start": 12829441, "end": 12882053}, {"filename": "/assets/interiors/bank/Coin_Pile_2.gltf", "start": 12882053, "end": 12883577}, {"filename": "/assets/interiors/bank/Table_Large.bin", "start": 12883577, "end": 12939973}, {"filename": "/assets/interiors/bank/Table_Large.gltf", "start": 12939973, "end": 12942600}, {"filename": "/assets/interiors/bank/VaultDoor.bin", "start": 12942600, "end": 12972888}, {"filename": "/assets/interiors/bank/VaultDoor.gltf", "start": 12972888, "end": 12975069}, {"filename": "/assets/interiors/carpenter/Crate_Wooden.bin", "start": 12975069, "end": 13041565}, {"filename": "/assets/interiors/carpenter/Crate_Wooden.gltf", "start": 13041565, "end": 13044265}, {"filename": "/assets/interiors/carpenter/LumberPile.bin", "start": 13044265, "end": 13051393}, {"filename": "/assets/interiors/carpenter/LumberPile.gltf", "start": 13051393, "end": 13053142}, {"filename": "/assets/interiors/carpenter/Peg_Rack.bin", "start": 13053142, "end": 13079814}, {"filename": "/assets/interiors/carpenter/Peg_Rack.gltf", "start": 13079814, "end": 13083807}, {"filename": "/assets/interiors/carpenter/Sawhorse.bin", "start": 13083807, "end": 13087695}, {"filename": "/assets/interiors/carpenter/Sawhorse.gltf", "start": 13087695, "end": 13089137}, {"filename": "/assets/interiors/carpenter/Workbench.bin", "start": 13089137, "end": 13152545}, {"filename": "/assets/interiors/carpenter/Workbench.gltf", "start": 13152545, "end": 13157079}, {"filename": "/assets/interiors/healer/Bed_Single.mtl", "start": 13157079, "end": 13158026}, {"filename": "/assets/interiors/healer/HerbBundle.bin", "start": 13158026, "end": 13167914}, {"filename": "/assets/interiors/healer/HerbBundle.gltf", "start": 13167914, "end": 13170052}, {"filename": "/assets/interiors/healer/MortarPestle.bin", "start": 13170052, "end": 13178500}, {"filename": "/assets/interiors/healer/MortarPestle.gltf", "start": 13178500, "end": 13179850}, {"filename": "/assets/interiors/healer/Potion_1.bin", "start": 13179850, "end": 13198050}, {"filename": "/assets/interiors/healer/Potion_1.gltf", "start": 13198050, "end": 13199563}, {"filename": "/assets/interiors/healer/Shelf_Small1.mtl", "start": 13199563, "end": 13199802}, {"filename": "/assets/interiors/healer/SmallBottle.bin", "start": 13199802, "end": 13205502}, {"filename": "/assets/interiors/healer/SmallBottle.gltf", "start": 13205502, "end": 13206989}, {"filename": "/assets/interiors/house/Bed_Single.mtl", "start": 13206989, "end": 13207936}, {"filename": "/assets/interiors/house/Chair_1.mtl", "start": 13207936, "end": 13208169}, {"filename": "/assets/interiors/house/Shelf_1.mtl", "start": 13208169, "end": 13208403}, {"filename": "/assets/interiors/house/Table_RoundSmall.mtl", "start": 13208403, "end": 13208645}, {"filename": "/assets/interiors/kf/armchair.bin", "start": 13208645, "end": 13225957}, {"filename": "/assets/interiors/kf/armchair.gltf", "start": 13225957, "end": 13228976}, {"filename": "/assets/interiors/kf/bed_double_A.bin", "start": 13228976, "end": 13253624}, {"filename": "/assets/interiors/kf/bed_double_A.gltf", "start": 13253624, "end": 13256635}, {"filename": "/assets/interiors/kf/bed_single_A.bin", "start": 13256635, "end": 13278679}, {"filename": "/assets/interiors/kf/bed_single_A.gltf", "start": 13278679, "end": 13281688}, {"filename": "/assets/interiors/kf/book_set.bin", "start": 13281688, "end": 13293264}, {"filename": "/assets/interiors/kf/book_set.gltf", "start": 13293264, "end": 13296315}, {"filename": "/assets/interiors/kf/book_single.bin", "start": 13296315, "end": 13300307}, {"filename": "/assets/interiors/kf/book_single.gltf", "start": 13300307, "end": 13303363}, {"filename": "/assets/interiors/kf/cabinet_medium_decorated.bin", "start": 13303363, "end": 13352383}, {"filename": "/assets/interiors/kf/cabinet_medium_decorated.gltf", "start": 13352383, "end": 13355443}, {"filename": "/assets/interiors/kf/cabinet_small.bin", "start": 13355443, "end": 13374911}, {"filename": "/assets/interiors/kf/cabinet_small.gltf", "start": 13374911, "end": 13377912}, {"filename": "/assets/interiors/kf/cactus_medium_A.bin", "start": 13377912, "end": 13395448}, {"filename": "/assets/interiors/kf/cactus_medium_A.gltf", "start": 13395448, "end": 13398520}, {"filename": "/assets/interiors/kf/chair_A_wood.bin", "start": 13398520, "end": 13415024}, {"filename": "/assets/interiors/kf/chair_A_wood.gltf", "start": 13415024, "end": 13418056}, {"filename": "/assets/interiors/kf/chair_B_wood.bin", "start": 13418056, "end": 13436296}, {"filename": "/assets/interiors/kf/chair_B_wood.gltf", "start": 13436296, "end": 13439355}, {"filename": "/assets/interiors/kf/chair_stool_wood.bin", "start": 13439355, "end": 13450187}, {"filename": "/assets/interiors/kf/chair_stool_wood.gltf", "start": 13450187, "end": 13453239}, {"filename": "/assets/interiors/kf/furniturebits_texture.png", "start": 13453239, "end": 13468547}, {"filename": "/assets/interiors/kf/pictureframe_large_A.bin", "start": 13468547, "end": 13471723}, {"filename": "/assets/interiors/kf/pictureframe_large_A.gltf", "start": 13471723, "end": 13474794}, {"filename": "/assets/interiors/kf/pictureframe_medium.bin", "start": 13474794, "end": 13477970}, {"filename": "/assets/interiors/kf/pictureframe_medium.gltf", "start": 13477970, "end": 13481039}, {"filename": "/assets/interiors/kf/pictureframe_standing_A.bin", "start": 13481039, "end": 13485131}, {"filename": "/assets/interiors/kf/pictureframe_standing_A.gltf", "start": 13485131, "end": 13488181}, {"filename": "/assets/interiors/kf/pillow_A.bin", "start": 13488181, "end": 13490905}, {"filename": "/assets/interiors/kf/pillow_A.gltf", "start": 13490905, "end": 13493934}, {"filename": "/assets/interiors/kf/rug_oval_A.bin", "start": 13493934, "end": 13500494}, {"filename": "/assets/interiors/kf/rug_oval_A.gltf", "start": 13500494, "end": 13503464}, {"filename": "/assets/interiors/kf/rug_rectangle_A.bin", "start": 13503464, "end": 13505264}, {"filename": "/assets/interiors/kf/rug_rectangle_A.gltf", "start": 13505264, "end": 13508235}, {"filename": "/assets/interiors/kf/rug_rectangle_stripes_A.bin", "start": 13508235, "end": 13510947}, {"filename": "/assets/interiors/kf/rug_rectangle_stripes_A.gltf", "start": 13510947, "end": 13513935}, {"filename": "/assets/interiors/kf/shelf_A_big.bin", "start": 13513935, "end": 13524039}, {"filename": "/assets/interiors/kf/shelf_A_big.gltf", "start": 13524039, "end": 13527064}, {"filename": "/assets/interiors/kf/shelf_B_large_decorated.bin", "start": 13527064, "end": 13552836}, {"filename": "/assets/interiors/kf/shelf_B_large_decorated.gltf", "start": 13552836, "end": 13555905}, {"filename": "/assets/interiors/kf/shelf_B_small_decorated.bin", "start": 13555905, "end": 13579321}, {"filename": "/assets/interiors/kf/shelf_B_small_decorated.gltf", "start": 13579321, "end": 13582392}, {"filename": "/assets/interiors/kf/table_low.bin", "start": 13582392, "end": 13594800}, {"filename": "/assets/interiors/kf/table_low.gltf", "start": 13594800, "end": 13597790}, {"filename": "/assets/interiors/kf/table_medium.bin", "start": 13597790, "end": 13607118}, {"filename": "/assets/interiors/kf/table_medium.gltf", "start": 13607118, "end": 13610091}, {"filename": "/assets/interiors/kk/banner_patternA_blue.glb", "start": 13610091, "end": 13635255}, {"filename": "/assets/interiors/kk/banner_patternA_green.glb", "start": 13635255, "end": 13660423}, {"filename": "/assets/interiors/kk/banner_patternA_red.glb", "start": 13660423, "end": 13685587}, {"filename": "/assets/interiors/kk/banner_shield_blue.glb", "start": 13685587, "end": 13740691}, {"filename": "/assets/interiors/kk/banner_shield_red.glb", "start": 13740691, "end": 13795795}, {"filename": "/assets/interiors/kk/banner_thin_green.glb", "start": 13795795, "end": 13818879}, {"filename": "/assets/interiors/kk/banner_thin_red.glb", "start": 13818879, "end": 13841959}, {"filename": "/assets/interiors/kk/banner_triple_red.glb", "start": 13841959, "end": 13878191}, {"filename": "/assets/interiors/kk/barrel_large.glb", "start": 13878191, "end": 13922483}, {"filename": "/assets/interiors/kk/barrel_large_decorated.glb", "start": 13922483, "end": 13996111}, {"filename": "/assets/interiors/kk/barrel_small.glb", "start": 13996111, "end": 14028171}, {"filename": "/assets/interiors/kk/barrel_small_stack.glb", "start": 14028171, "end": 14126263}, {"filename": "/assets/interiors/kk/bed_decorated.glb", "start": 14126263, "end": 14220951}, {"filename": "/assets/interiors/kk/bed_frame.glb", "start": 14220951, "end": 14251639}, {"filename": "/assets/interiors/kk/bottle_A_brown.glb", "start": 14251639, "end": 14277779}, {"filename": "/assets/interiors/kk/bottle_A_green.glb", "start": 14277779, "end": 14304239}, {"filename": "/assets/interiors/kk/bottle_A_labeled_brown.glb", "start": 14304239, "end": 14330515}, {"filename": "/assets/interiors/kk/bottle_B_green.glb", "start": 14330515, "end": 14356975}, {"filename": "/assets/interiors/kk/bottle_C_brown.glb", "start": 14356975, "end": 14383115}, {"filename": "/assets/interiors/kk/box_large.glb", "start": 14383115, "end": 14411855}, {"filename": "/assets/interiors/kk/box_small.glb", "start": 14411855, "end": 14440547}, {"filename": "/assets/interiors/kk/box_small_decorated.glb", "start": 14440547, "end": 14513295}, {"filename": "/assets/interiors/kk/box_stacked.glb", "start": 14513295, "end": 14660263}, {"filename": "/assets/interiors/kk/candle.glb", "start": 14660263, "end": 14681047}, {"filename": "/assets/interiors/kk/candle_lit.glb", "start": 14681047, "end": 14703695}, {"filename": "/assets/interiors/kk/candle_thin_lit.glb", "start": 14703695, "end": 14726347}, {"filename": "/assets/interiors/kk/candle_triple.glb", "start": 14726347, "end": 14754587}, {"filename": "/assets/interiors/kk/chair.glb", "start": 14754587, "end": 14790839}, {"filename": "/assets/interiors/kk/chest.glb", "start": 14790839, "end": 14872251}, {"filename": "/assets/interiors/kk/coin.glb", "start": 14872251, "end": 14894027}, {"filename": "/assets/interiors/kk/coin_stack_large.glb", "start": 14894027, "end": 14995103}, {"filename": "/assets/interiors/kk/coin_stack_medium.glb", "start": 14995103, "end": 15059099}, {"filename": "/assets/interiors/kk/coin_stack_small.glb", "start": 15059099, "end": 15097503}, {"filename": "/assets/interiors/kk/column.glb", "start": 15097503, "end": 15117763}, {"filename": "/assets/interiors/kk/crates_stacked.glb", "start": 15117763, "end": 15221467}, {"filename": "/assets/interiors/kk/keg.glb", "start": 15221467, "end": 15281379}, {"filename": "/assets/interiors/kk/keg_decorated.glb", "start": 15281379, "end": 15423431}, {"filename": "/assets/interiors/kk/keyring_hanging.glb", "start": 15423431, "end": 15472539}, {"filename": "/assets/interiors/kk/pillar_decorated.glb", "start": 15472539, "end": 15534999}, {"filename": "/assets/interiors/kk/plate.glb", "start": 15534999, "end": 15557883}, {"filename": "/assets/interiors/kk/plate_food_A.glb", "start": 15557883, "end": 15599119}, {"filename": "/assets/interiors/kk/plate_food_B.glb", "start": 15599119, "end": 15631099}, {"filename": "/assets/interiors/kk/plate_stack.glb", "start": 15631099, "end": 15666827}, {"filename": "/assets/interiors/kk/shelf_large.glb", "start": 15666827, "end": 15688839}, {"filename": "/assets/interiors/kk/shelf_small.glb", "start": 15688839, "end": 15709771}, {"filename": "/assets/interiors/kk/shelf_small_candles.glb", "start": 15709771, "end": 15739807}, {"filename": "/assets/interiors/kk/shelves.glb", "start": 15739807, "end": 15766803}, {"filename": "/assets/interiors/kk/stool.glb", "start": 15766803, "end": 15795331}, {"filename": "/assets/interiors/kk/sword_shield.glb", "start": 15795331, "end": 15843095}, {"filename": "/assets/interiors/kk/sword_shield_gold.glb", "start": 15843095, "end": 15890863}, {"filename": "/assets/interiors/kk/table_long.glb", "start": 15890863, "end": 15925991}, {"filename": "/assets/interiors/kk/table_long_decorated_A.glb", "start": 15925991, "end": 16046783}, {"filename": "/assets/interiors/kk/table_long_tablecloth.glb", "start": 16046783, "end": 16085183}, {"filename": "/assets/interiors/kk/table_long_tablecloth_decorated_A.glb", "start": 16085183, "end": 16209247}, {"filename": "/assets/interiors/kk/table_medium.glb", "start": 16209247, "end": 16243079}, {"filename": "/assets/interiors/kk/table_medium_decorated_A.glb", "start": 16243079, "end": 16325667}, {"filename": "/assets/interiors/kk/table_medium_tablecloth.glb", "start": 16325667, "end": 16360827}, {"filename": "/assets/interiors/kk/table_medium_tablecloth_decorated_B.glb", "start": 16360827, "end": 16444743}, {"filename": "/assets/interiors/kk/table_small.glb", "start": 16444743, "end": 16474651}, {"filename": "/assets/interiors/kk/table_small_decorated_A.glb", "start": 16474651, "end": 16542323}, {"filename": "/assets/interiors/kk/table_small_decorated_B.glb", "start": 16542323, "end": 16647391}, {"filename": "/assets/interiors/kk/torch_lit.glb", "start": 16647391, "end": 16678635}, {"filename": "/assets/interiors/kk/torch_mounted.glb", "start": 16678635, "end": 16711855}, {"filename": "/assets/interiors/kk/trunk_large_A.glb", "start": 16711855, "end": 16742035}, {"filename": "/assets/interiors/kk/trunk_medium_A.glb", "start": 16742035, "end": 16768455}, {"filename": "/assets/interiors/kk/trunk_small_A.glb", "start": 16768455, "end": 16798639}, {"filename": "/assets/interiors/kk/wall_shelves.glb", "start": 16798639, "end": 16920883}, {"filename": "/assets/interiors/provisioner/Bag.bin", "start": 16920883, "end": 16948071}, {"filename": "/assets/interiors/provisioner/Bag.gltf", "start": 16948071, "end": 16950700}, {"filename": "/assets/interiors/provisioner/Barrel.bin", "start": 16950700, "end": 17007844}, {"filename": "/assets/interiors/provisioner/Barrel.gltf", "start": 17007844, "end": 17012371}, {"filename": "/assets/interiors/provisioner/Barrel_Apples.bin", "start": 17012371, "end": 17116971}, {"filename": "/assets/interiors/provisioner/Barrel_Apples.gltf", "start": 17116971, "end": 17120755}, {"filename": "/assets/interiors/provisioner/Crate_Wooden.bin", "start": 17120755, "end": 17187251}, {"filename": "/assets/interiors/provisioner/Crate_Wooden.gltf", "start": 17187251, "end": 17189951}, {"filename": "/assets/interiors/provisioner/Pouch_Large.bin", "start": 17189951, "end": 17221531}, {"filename": "/assets/interiors/provisioner/Pouch_Large.gltf", "start": 17221531, "end": 17224164}, {"filename": "/assets/interiors/provisioner/Shelf_1.mtl", "start": 17224164, "end": 17224398}, {"filename": "/assets/interiors/provisioner/Stall_Cart_Empty.bin", "start": 17224398, "end": 17461662}, {"filename": "/assets/interiors/provisioner/Stall_Cart_Empty.gltf", "start": 17461662, "end": 17465909}, {"filename": "/assets/interiors/shared/T_Trim_Cloth_BaseColor.png", "start": 17465909, "end": 17478561}, {"filename": "/assets/interiors/shared/T_Trim_Furniture_BaseColor.png", "start": 17478561, "end": 17494476}, {"filename": "/assets/interiors/shared/T_Trim_Metal_BaseColor.png", "start": 17494476, "end": 17508539}, {"filename": "/assets/interiors/shared/T_Trim_Props_BaseColor.png", "start": 17508539, "end": 17523453}, {"filename": "/assets/interiors/smith/Anvil.bin", "start": 17523453, "end": 17547473}, {"filename": "/assets/interiors/smith/Anvil.gltf", "start": 17547473, "end": 17551032}, {"filename": "/assets/interiors/smith/Barrel.bin", "start": 17551032, "end": 17608176}, {"filename": "/assets/interiors/smith/Barrel.gltf", "start": 17608176, "end": 17612703}, {"filename": "/assets/interiors/smith/Bellows.bin", "start": 17612703, "end": 17617239}, {"filename": "/assets/interiors/smith/Bellows.gltf", "start": 17617239, "end": 17620645}, {"filename": "/assets/interiors/smith/Bucket_Metal.bin", "start": 17620645, "end": 17639469}, {"filename": "/assets/interiors/smith/Bucket_Metal.gltf", "start": 17639469, "end": 17641795}, {"filename": "/assets/interiors/smith/Cauldron.bin", "start": 17641795, "end": 17704507}, {"filename": "/assets/interiors/smith/Cauldron.gltf", "start": 17704507, "end": 17706822}, {"filename": "/assets/interiors/smith/Forge.bin", "start": 17706822, "end": 17718486}, {"filename": "/assets/interiors/smith/Forge.gltf", "start": 17718486, "end": 17721056}, {"filename": "/assets/interiors/smith/Peg_Rack.bin", "start": 17721056, "end": 17747728}, {"filename": "/assets/interiors/smith/Peg_Rack.gltf", "start": 17747728, "end": 17751721}, {"filename": "/assets/interiors/smith/Torch_Metal.bin", "start": 17751721, "end": 17790821}, {"filename": "/assets/interiors/smith/Torch_Metal.gltf", "start": 17790821, "end": 17793144}, {"filename": "/assets/interiors/smith/WeaponStand.bin", "start": 17793144, "end": 17869456}, {"filename": "/assets/interiors/smith/WeaponStand.gltf", "start": 17869456, "end": 17873473}, {"filename": "/assets/interiors/smith/Whetstone.bin", "start": 17873473, "end": 17932753}, {"filename": "/assets/interiors/smith/Whetstone.gltf", "start": 17932753, "end": 17939242}, {"filename": "/assets/interiors/smith/Workbench.bin", "start": 17939242, "end": 18002650}, {"filename": "/assets/interiors/smith/Workbench.gltf", "start": 18002650, "end": 18007184}, {"filename": "/assets/interiors/stable/Bucket_Wooden_1.bin", "start": 18007184, "end": 18039728}, {"filename": "/assets/interiors/stable/Bucket_Wooden_1.gltf", "start": 18039728, "end": 18042060}, {"filename": "/assets/interiors/stable/HayBale.bin", "start": 18042060, "end": 18045300}, {"filename": "/assets/interiors/stable/HayBale.gltf", "start": 18045300, "end": 18046674}, {"filename": "/assets/interiors/stable/StallDivider.bin", "start": 18046674, "end": 18049914}, {"filename": "/assets/interiors/stable/StallDivider.gltf", "start": 18049914, "end": 18051272}, {"filename": "/assets/interiors/stable/WaterTrough.bin", "start": 18051272, "end": 18053864}, {"filename": "/assets/interiors/stable/WaterTrough.gltf", "start": 18053864, "end": 18055244}, {"filename": "/assets/interiors/tailor/Banner_1_Cloth.bin", "start": 18055244, "end": 18061880}, {"filename": "/assets/interiors/tailor/Banner_1_Cloth.gltf", "start": 18061880, "end": 18064775}, {"filename": "/assets/interiors/tailor/ClothBolt.bin", "start": 18064775, "end": 18067367}, {"filename": "/assets/interiors/tailor/ClothBolt.gltf", "start": 18067367, "end": 18068924}, {"filename": "/assets/interiors/tailor/Mannequin.bin", "start": 18068924, "end": 18080132}, {"filename": "/assets/interiors/tailor/Mannequin.gltf", "start": 18080132, "end": 18081607}, {"filename": "/assets/interiors/tailor/Shelf_Small1.mtl", "start": 18081607, "end": 18081846}, {"filename": "/assets/interiors/townhall/Banner_1_Cloth.bin", "start": 18081846, "end": 18088482}, {"filename": "/assets/interiors/townhall/Banner_1_Cloth.gltf", "start": 18088482, "end": 18091377}, {"filename": "/assets/interiors/townhall/Banner_2_Cloth.bin", "start": 18091377, "end": 18096317}, {"filename": "/assets/interiors/townhall/Banner_2_Cloth.gltf", "start": 18096317, "end": 18099213}, {"filename": "/assets/interiors/townhall/Chair_1.mtl", "start": 18099213, "end": 18099446}, {"filename": "/assets/interiors/townhall/Table_RoundLarge.mtl", "start": 18099446, "end": 18099688}, {"filename": "/assets/interiors/townhall/Torch_Metal.bin", "start": 18099688, "end": 18138788}, {"filename": "/assets/interiors/townhall/Torch_Metal.gltf", "start": 18138788, "end": 18141111}, {"filename": "/assets/item_icons/Bardiche.bmp", "start": 18141111, "end": 18154325}, {"filename": "/assets/item_icons/BlackStaff.bmp", "start": 18154325, "end": 18177771}, {"filename": "/assets/item_icons/Bow.bmp", "start": 18177771, "end": 18185569}, {"filename": "/assets/item_icons/Broadsword.bmp", "start": 18185569, "end": 18189847}, {"filename": "/assets/item_icons/ChainTunic.bmp", "start": 18189847, "end": 18377905}, {"filename": "/assets/item_icons/ChainmailGloves.bmp", "start": 18377905, "end": 18562819}, {"filename": "/assets/item_icons/ChainmailLeggings.bmp", "start": 18562819, "end": 18750877}, {"filename": "/assets/item_icons/Club.bmp", "start": 18750877, "end": 18756563}, {"filename": "/assets/item_icons/CompositeBow.bmp", "start": 18756563, "end": 18764361}, {"filename": "/assets/item_icons/Crossbow.bmp", "start": 18764361, "end": 18770223}, {"filename": "/assets/item_icons/Cutlass.bmp", "start": 18770223, "end": 18774633}, {"filename": "/assets/item_icons/GnarledStaff.bmp", "start": 18774633, "end": 18798079}, {"filename": "/assets/item_icons/Halberd.bmp", "start": 18798079, "end": 18811293}, {"filename": "/assets/item_icons/HeavyCrossbow.bmp", "start": 18811293, "end": 18817683}, {"filename": "/assets/item_icons/Katana.bmp", "start": 18817683, "end": 18822621}, {"filename": "/assets/item_icons/Kryss.bmp", "start": 18822621, "end": 18827559}, {"filename": "/assets/item_icons/LeatherGloves.bmp", "start": 18827559, "end": 19012473}, {"filename": "/assets/item_icons/LeatherLeggings.bmp", "start": 19012473, "end": 19200531}, {"filename": "/assets/item_icons/LeatherSleeves.bmp", "start": 19200531, "end": 19388589}, {"filename": "/assets/item_icons/LeatherTunic.bmp", "start": 19388589, "end": 19576647}, {"filename": "/assets/item_icons/Longsword.bmp", "start": 19576647, "end": 19581585}, {"filename": "/assets/item_icons/Mace.bmp", "start": 19581585, "end": 19588327}, {"filename": "/assets/item_icons/Maul.bmp", "start": 19588327, "end": 19595773}, {"filename": "/assets/item_icons/Pitchfork.bmp", "start": 19595773, "end": 19612767}, {"filename": "/assets/item_icons/PlateArms.bmp", "start": 19612767, "end": 19800825}, {"filename": "/assets/item_icons/PlateChest.bmp", "start": 19800825, "end": 19988883}, {"filename": "/assets/item_icons/PlateGloves.bmp", "start": 19988883, "end": 20173797}, {"filename": "/assets/item_icons/PlateLegs.bmp", "start": 20173797, "end": 20361855}, {"filename": "/assets/item_icons/PotionDamage.bmp", "start": 20361855, "end": 20369937}, {"filename": "/assets/item_icons/PotionHeal.bmp", "start": 20369937, "end": 20378019}, {"filename": "/assets/item_icons/PotionPoison.bmp", "start": 20378019, "end": 20386101}, {"filename": "/assets/item_icons/PotionStamina.bmp", "start": 20386101, "end": 20394183}, {"filename": "/assets/item_icons/Quarterstaff.bmp", "start": 20394183, "end": 20417629}, {"filename": "/assets/item_icons/RingMailLeggings.bmp", "start": 20417629, "end": 20605687}, {"filename": "/assets/item_icons/RingMailSleeves.bmp", "start": 20605687, "end": 20793745}, {"filename": "/assets/item_icons/RingMailTunic.bmp", "start": 20793745, "end": 20981803}, {"filename": "/assets/item_icons/Scimitar.bmp", "start": 20981803, "end": 20987137}, {"filename": "/assets/item_icons/ShepherdsCrook.bmp", "start": 20987137, "end": 21015527}, {"filename": "/assets/item_icons/ShortSpear.bmp", "start": 21015527, "end": 21025581}, {"filename": "/assets/item_icons/Spear.bmp", "start": 21025581, "end": 21051895}, {"filename": "/assets/item_icons/StuddedGloves.bmp", "start": 21051895, "end": 21236809}, {"filename": "/assets/item_icons/StuddedLeggings.bmp", "start": 21236809, "end": 21424867}, {"filename": "/assets/item_icons/StuddedSleeves.bmp", "start": 21424867, "end": 21612925}, {"filename": "/assets/item_icons/StuddedTunic.bmp", "start": 21612925, "end": 21800983}, {"filename": "/assets/item_icons/VikingSword.bmp", "start": 21800983, "end": 21806185}, {"filename": "/assets/item_icons/WarAxe.bmp", "start": 21806185, "end": 21811915}, {"filename": "/assets/item_icons/WarFork.bmp", "start": 21811915, "end": 21819537}, {"filename": "/assets/item_icons/WarHammer.bmp", "start": 21819537, "end": 21823947}, {"filename": "/assets/knight/attack1.png", "start": 21823947, "end": 21850691}, {"filename": "/assets/knight/attack2.png", "start": 21850691, "end": 21877411}, {"filename": "/assets/knight/defend.png", "start": 21877411, "end": 21901435}, {"filename": "/assets/knight/hurt.png", "start": 21901435, "end": 21924898}, {"filename": "/assets/knight/idle.png", "start": 21924898, "end": 21950702}, {"filename": "/assets/knight/protect.png", "start": 21950702, "end": 21972930}, {"filename": "/assets/models/Prop_Chimney.bin", "start": 21972930, "end": 21993406}, {"filename": "/assets/models/Prop_Chimney.gltf", "start": 21993406, "end": 21997249}, {"filename": "/assets/models/Prop_Crate.bin", "start": 21997249, "end": 22013349}, {"filename": "/assets/models/Prop_Crate.gltf", "start": 22013349, "end": 22015560}, {"filename": "/assets/models/Prop_Vine1.bin", "start": 22015560, "end": 22021140}, {"filename": "/assets/models/Prop_Vine1.gltf", "start": 22021140, "end": 22023119}, {"filename": "/assets/models/Prop_Wagon.bin", "start": 22023119, "end": 22126391}, {"filename": "/assets/models/Prop_Wagon.gltf", "start": 22126391, "end": 22128813}, {"filename": "/assets/models/Prop_WoodenFence_Extension1.bin", "start": 22128813, "end": 22131053}, {"filename": "/assets/models/Prop_WoodenFence_Extension1.gltf", "start": 22131053, "end": 22133289}, {"filename": "/assets/models/Prop_WoodenFence_Single.bin", "start": 22133289, "end": 22136089}, {"filename": "/assets/models/Prop_WoodenFence_Single.gltf", "start": 22136089, "end": 22138319}, {"filename": "/assets/models/README.md", "start": 22138319, "end": 22143489}, {"filename": "/assets/models/Roof_RoundTiles_4x4.bin", "start": 22143489, "end": 22250665}, {"filename": "/assets/models/Roof_RoundTiles_4x4.gltf", "start": 22250665, "end": 22255002}, {"filename": "/assets/models/Roof_RoundTiles_4x6.bin", "start": 22255002, "end": 22384842}, {"filename": "/assets/models/Roof_RoundTiles_4x6.gltf", "start": 22384842, "end": 22389183}, {"filename": "/assets/models/T_Brick_BaseColor.png", "start": 22389183, "end": 22642720}, {"filename": "/assets/models/T_Brick_Normal.png", "start": 22642720, "end": 23000958}, {"filename": "/assets/models/T_Brick_Roughness.png", "start": 23000958, "end": 23060824}, {"filename": "/assets/models/T_Plaster_BaseColor.png", "start": 23060824, "end": 23310499}, {"filename": "/assets/models/T_Plaster_Normal.png", "start": 23310499, "end": 23598999}, {"filename": "/assets/models/T_Plaster_ORM.png", "start": 23598999, "end": 23772790}, {"filename": "/assets/models/T_RockTrim_BaseColor.png", "start": 23772790, "end": 23993658}, {"filename": "/assets/models/T_RockTrim_Normal.png", "start": 23993658, "end": 24301917}, {"filename": "/assets/models/T_RockTrim_ORM.png", "start": 24301917, "end": 24409310}, {"filename": "/assets/models/T_RoundTiles_BaseColor.png", "start": 24409310, "end": 24699960}, {"filename": "/assets/models/T_RoundTiles_Normal.png", "start": 24699960, "end": 24907921}, {"filename": "/assets/models/T_RoundTiles_Roughness.png", "start": 24907921, "end": 25009431}, {"filename": "/assets/models/T_UnevenBrick_BaseColor.png", "start": 25009431, "end": 25292495}, {"filename": "/assets/models/T_UnevenBrick_Normal.png", "start": 25292495, "end": 25601236}, {"filename": "/assets/models/T_UnevenBrick_Roughness.png", "start": 25601236, "end": 25702820}, {"filename": "/assets/models/T_VineLeaf_png.png", "start": 25702820, "end": 25817321}, {"filename": "/assets/models/T_WoodTrim_BaseColor.png", "start": 25817321, "end": 26055620}, {"filename": "/assets/models/T_WoodTrim_Normal.png", "start": 26055620, "end": 26342239}, {"filename": "/assets/models/T_WoodTrim_Roughness.png", "start": 26342239, "end": 26493048}, {"filename": "/assets/models/Wall_Plaster_Door_Flat.bin", "start": 26493048, "end": 26499840}, {"filename": "/assets/models/Wall_Plaster_Door_Flat.gltf", "start": 26499840, "end": 26505782}, {"filename": "/assets/models/Wall_Plaster_Straight.bin", "start": 26505782, "end": 26511658}, {"filename": "/assets/models/Wall_Plaster_Straight.gltf", "start": 26511658, "end": 26515827}, {"filename": "/assets/models/Wall_Plaster_Window_Wide_Flat.bin", "start": 26515827, "end": 26521203}, {"filename": "/assets/models/Wall_Plaster_Window_Wide_Flat.gltf", "start": 26521203, "end": 26527167}, {"filename": "/assets/models/Wall_UnevenBrick_Door_Flat.bin", "start": 26527167, "end": 26530683}, {"filename": "/assets/models/Wall_UnevenBrick_Door_Flat.gltf", "start": 26530683, "end": 26536089}, {"filename": "/assets/models/Wall_UnevenBrick_Straight.bin", "start": 26536089, "end": 26538857}, {"filename": "/assets/models/Wall_UnevenBrick_Straight.gltf", "start": 26538857, "end": 26544249}, {"filename": "/assets/models/Wall_UnevenBrick_Window_Wide_Flat.bin", "start": 26544249, "end": 26548857}, {"filename": "/assets/models/Wall_UnevenBrick_Window_Wide_Flat.gltf", "start": 26548857, "end": 26554861}, {"filename": "/assets/models/barrel_small.glb", "start": 26554861, "end": 26586921}, {"filename": "/assets/models/chest.glb", "start": 26586921, "end": 26668333}, {"filename": "/assets/models/plant_bush.glb", "start": 26668333, "end": 26672729}, {"filename": "/assets/models/rock_largeA.glb", "start": 26672729, "end": 26680281}, {"filename": "/assets/models/rock_largeB.glb", "start": 26680281, "end": 26688841}, {"filename": "/assets/models/rock_largeC.glb", "start": 26688841, "end": 26695845}, {"filename": "/assets/models/rock_smallA.glb", "start": 26695845, "end": 26698889}, {"filename": "/assets/models/rock_smallB.glb", "start": 26698889, "end": 26702417}, {"filename": "/assets/models/rock_smallC.glb", "start": 26702417, "end": 26705461}, {"filename": "/assets/models/stump_roundDetailed.glb", "start": 26705461, "end": 26713649}, {"filename": "/assets/models/tree_default.glb", "start": 26713649, "end": 26723077}, {"filename": "/assets/models/tree_detailed.glb", "start": 26723077, "end": 26754489}, {"filename": "/assets/models/tree_fat.glb", "start": 26754489, "end": 26760065}, {"filename": "/assets/models/tree_oak.glb", "start": 26760065, "end": 26774709}, {"filename": "/assets/models/tree_pineDefaultA.glb", "start": 26774709, "end": 26791929}, {"filename": "/assets/monsters/bat.png", "start": 26791929, "end": 26792124}, {"filename": "/assets/monsters/bloodtusk.png", "start": 26792124, "end": 26792584}, {"filename": "/assets/monsters/emberveil.png", "start": 26792584, "end": 26793087}, {"filename": "/assets/monsters/ghost.png", "start": 26793087, "end": 26793276}, {"filename": "/assets/monsters/hollowwarrens.png", "start": 26793276, "end": 26793857}, {"filename": "/assets/monsters/orc.png", "start": 26793857, "end": 26794060}, {"filename": "/assets/monsters/slime.png", "start": 26794060, "end": 26794249}, {"filename": "/assets/monsters/sunkencrypt.png", "start": 26794249, "end": 26794486}, {"filename": "/assets/monsters/wyrmscar.png", "start": 26794486, "end": 26795436}, {"filename": "/assets/monsters3d/README.md", "start": 26795436, "end": 26797202}, {"filename": "/assets/monsters3d/bonewalker.glb", "start": 26797202, "end": 27057758}, {"filename": "/assets/monsters3d/brood_hunter.glb", "start": 27057758, "end": 27538046}, {"filename": "/assets/monsters3d/crypt_sovereign.glb", "start": 27538046, "end": 27934482}, {"filename": "/assets/monsters3d/frostbound_king.glb", "start": 27934482, "end": 28293494}, {"filename": "/assets/monsters3d/glacier_wight.glb", "start": 28293494, "end": 28621202}, {"filename": "/assets/monsters3d/grave_warden.glb", "start": 28621202, "end": 28949218}, {"filename": "/assets/monsters3d/gravewretch.glb", "start": 28949218, "end": 29219222}, {"filename": "/assets/monsters3d/hoarfrost_revenant.glb", "start": 29219222, "end": 29598122}, {"filename": "/assets/monsters3d/nest_guardian.glb", "start": 29598122, "end": 30238474}, {"filename": "/assets/monsters3d/orc_overlord.glb", "start": 30238474, "end": 31831122}, {"filename": "/assets/monsters3d/orc_warbringer.glb", "start": 31831122, "end": 32806622}, {"filename": "/assets/monsters3d/rimebound_horror.glb", "start": 32806622, "end": 33166506}, {"filename": "/assets/monsters3d/rotbound_corpse.glb", "start": 33166506, "end": 33451838}, {"filename": "/assets/monsters3d/scalekin_raider_archer.glb", "start": 33451838, "end": 33782462}, {"filename": "/assets/monsters3d/scalekin_raider_huntress.glb", "start": 33782462, "end": 34081282}, {"filename": "/assets/monsters3d/scalekin_raider_scout.glb", "start": 34081282, "end": 34399598}, {"filename": "/assets/monsters3d/scalekin_raider_shaman.glb", "start": 34399598, "end": 34769814}, {"filename": "/assets/monsters3d/scalekin_raider_warlord.glb", "start": 34769814, "end": 35105898}, {"filename": "/assets/monsters3d/silk_stalker.glb", "start": 35105898, "end": 35628814}, {"filename": "/assets/monsters3d/spider_broodmother.glb", "start": 35628814, "end": 36577042}, {"filename": "/assets/monsters3d/stoneborn.glb", "start": 36577042, "end": 37297570}, {"filename": "/assets/monsters3d/venom_weaver.glb", "start": 37297570, "end": 37818670}, {"filename": "/assets/monsters3d/vyrathax.glb", "start": 37818670, "end": 38322134}, {"filename": "/assets/monsters3d/web_spinner.glb", "start": 38322134, "end": 38870766}, {"filename": "/assets/monsters3d/winters_maw.glb", "start": 38870766, "end": 39254482}, {"filename": "/assets/monsters_boss/bloodtusk.png", "start": 39254482, "end": 39255611}, {"filename": "/assets/monsters_boss/emberveil.png", "start": 39255611, "end": 39256143}, {"filename": "/assets/monsters_boss/hollowwarrens.png", "start": 39256143, "end": 39256605}, {"filename": "/assets/monsters_boss/sunkencrypt.png", "start": 39256605, "end": 39257081}, {"filename": "/assets/monsters_boss/wyrmscar.png", "start": 39257081, "end": 39257612}, {"filename": "/assets/monsters_boss_v2/bloodtusk.png", "start": 39257612, "end": 39603150}, {"filename": "/assets/monsters_boss_v2/emberveil.png", "start": 39603150, "end": 40122581}, {"filename": "/assets/monsters_boss_v2/hollowwarrens.png", "start": 40122581, "end": 40391325}, {"filename": "/assets/monsters_boss_v2/sunkencrypt.png", "start": 40391325, "end": 40950183}, {"filename": "/assets/monsters_boss_v2/weaversnest.png", "start": 40950183, "end": 41271267}, {"filename": "/assets/monsters_boss_v2/wyrmscar.png", "start": 41271267, "end": 41551819}, {"filename": "/assets/monsters_v2/bloodtusk.png", "start": 41551819, "end": 41862537}, {"filename": "/assets/monsters_v2/emberveil.png", "start": 41862537, "end": 42756814}, {"filename": "/assets/monsters_v2/hollowwarrens.png", "start": 42756814, "end": 43038962}, {"filename": "/assets/monsters_v2/sunkencrypt.png", "start": 43038962, "end": 43397757}, {"filename": "/assets/monsters_v2/weaversnest.png", "start": 43397757, "end": 43742969}, {"filename": "/assets/monsters_v2/wyrmscar.png", "start": 43742969, "end": 43999375}, {"filename": "/assets/npcs_v2/captain_ysolde.png", "start": 43999375, "end": 44656018}, {"filename": "/assets/npcs_v2/cobb_stableboy.png", "start": 44656018, "end": 45113225}, {"filename": "/assets/npcs_v2/dockhand_fenn.png", "start": 45113225, "end": 45561468}, {"filename": "/assets/npcs_v2/harbormaster_thane.png", "start": 45561468, "end": 46022083}, {"filename": "/assets/npcs_v2/nessa_netmender.png", "start": 46022083, "end": 46602695}, {"filename": "/assets/npcs_v2/old_corwin.png", "start": 46602695, "end": 47109728}, {"filename": "/assets/npcs_v2/old_miran.png", "start": 47109728, "end": 47726987}, {"filename": "/assets/npcs_v2/salty_bjorn.png", "start": 47726987, "end": 48266039}, {"filename": "/assets/npcs_v2/sister_meraude.png", "start": 48266039, "end": 48736100}, {"filename": "/assets/npcs_v2/widow_aelith.png", "start": 48736100, "end": 49086400}, {"filename": "/assets/npcs_v2/wystan_baker.png", "start": 49086400, "end": 49703566}, {"filename": "/assets/npcs_v2/young_petra.png", "start": 49703566, "end": 50159019}, {"filename": "/assets/outfits/License_Standard.txt", "start": 50159019, "end": 50159747}, {"filename": "/assets/outfits/Male_Peasant_Arms.bin", "start": 50159747, "end": 50434615}, {"filename": "/assets/outfits/Male_Peasant_Arms.gltf", "start": 50434615, "end": 50453153}, {"filename": "/assets/outfits/Male_Peasant_Body.bin", "start": 50453153, "end": 50672833}, {"filename": "/assets/outfits/Male_Peasant_Body.gltf", "start": 50672833, "end": 50689601}, {"filename": "/assets/outfits/Male_Peasant_Feet.bin", "start": 50689601, "end": 50829481}, {"filename": "/assets/outfits/Male_Peasant_Feet.gltf", "start": 50829481, "end": 50846251}, {"filename": "/assets/outfits/Male_Peasant_Legs.bin", "start": 50846251, "end": 50899067}, {"filename": "/assets/outfits/Male_Peasant_Legs.gltf", "start": 50899067, "end": 50915818}, {"filename": "/assets/outfits/Male_Ranger_Acc_Pauldron.bin", "start": 50915818, "end": 50985018}, {"filename": "/assets/outfits/Male_Ranger_Acc_Pauldron.gltf", "start": 50985018, "end": 51001500}, {"filename": "/assets/outfits/Male_Ranger_Arms.bin", "start": 51001500, "end": 51254252}, {"filename": "/assets/outfits/Male_Ranger_Arms.gltf", "start": 51254252, "end": 51272795}, {"filename": "/assets/outfits/Male_Ranger_Body.bin", "start": 51272795, "end": 51581903}, {"filename": "/assets/outfits/Male_Ranger_Body.gltf", "start": 51581903, "end": 51600962}, {"filename": "/assets/outfits/Male_Ranger_Feet_Boots.bin", "start": 51600962, "end": 52311290}, {"filename": "/assets/outfits/Male_Ranger_Feet_Boots.gltf", "start": 52311290, "end": 52328086}, {"filename": "/assets/outfits/Male_Ranger_Head_Hood.bin", "start": 52328086, "end": 52424422}, {"filename": "/assets/outfits/Male_Ranger_Head_Hood.gltf", "start": 52424422, "end": 52441193}, {"filename": "/assets/outfits/Male_Ranger_Legs.bin", "start": 52441193, "end": 52493337}, {"filename": "/assets/outfits/Male_Ranger_Legs.gltf", "start": 52493337, "end": 52510083}, {"filename": "/assets/outfits/T_Peasant_BaseColor.png", "start": 52510083, "end": 53166459}, {"filename": "/assets/outfits/T_Ranger_BaseColor.png", "start": 53166459, "end": 54005496}, {"filename": "/assets/paperdoll/arms/chainmail.png", "start": 54005496, "end": 54007827}, {"filename": "/assets/paperdoll/arms/leather.png", "start": 54007827, "end": 54010217}, {"filename": "/assets/paperdoll/arms/plate.png", "start": 54010217, "end": 54012771}, {"filename": "/assets/paperdoll/arms/ringmail.png", "start": 54012771, "end": 54015016}, {"filename": "/assets/paperdoll/arms/studded.png", "start": 54015016, "end": 54017467}, {"filename": "/assets/paperdoll/base/human_male.png", "start": 54017467, "end": 54027720}, {"filename": "/assets/paperdoll/body/chainmail.png", "start": 54027720, "end": 54034697}, {"filename": "/assets/paperdoll/body/leather_armor.png", "start": 54034697, "end": 54041480}, {"filename": "/assets/paperdoll/body/leather_stud.png", "start": 54041480, "end": 54048473}, {"filename": "/assets/paperdoll/body/plate.png", "start": 54048473, "end": 54055286}, {"filename": "/assets/paperdoll/body/ringmail.png", "start": 54055286, "end": 54061559}, {"filename": "/assets/paperdoll/boots/middle_brown.png", "start": 54061559, "end": 54063892}, {"filename": "/assets/paperdoll/brown_1.png", "start": 54063892, "end": 54065795}, {"filename": "/assets/paperdoll/gloves/gauntlet_blue.png", "start": 54065795, "end": 54068538}, {"filename": "/assets/paperdoll/gloves/glove_black.png", "start": 54068538, "end": 54071181}, {"filename": "/assets/paperdoll/gloves/glove_brown.png", "start": 54071181, "end": 54073766}, {"filename": "/assets/paperdoll/gloves/glove_gold.png", "start": 54073766, "end": 54076535}, {"filename": "/assets/paperdoll/gloves/glove_gray.png", "start": 54076535, "end": 54078980}, {"filename": "/assets/paperdoll/gorget/leather.png", "start": 54078980, "end": 54080299}, {"filename": "/assets/paperdoll/gorget/plate.png", "start": 54080299, "end": 54081802}, {"filename": "/assets/paperdoll/gorget/studded.png", "start": 54081802, "end": 54083215}, {"filename": "/assets/paperdoll/hair/brown_1.png", "start": 54083215, "end": 54084437}, {"filename": "/assets/paperdoll/hand_right/bow.png", "start": 54084437, "end": 54084609}, {"filename": "/assets/paperdoll/hand_right/bow_2.png", "start": 54084609, "end": 54084793}, {"filename": "/assets/paperdoll/hand_right/bow_3.png", "start": 54084793, "end": 54084993}, {"filename": "/assets/paperdoll/hand_right/broadsword.png", "start": 54084993, "end": 54085266}, {"filename": "/assets/paperdoll/hand_right/club.png", "start": 54085266, "end": 54085461}, {"filename": "/assets/paperdoll/hand_right/crossbow.png", "start": 54085461, "end": 54085756}, {"filename": "/assets/paperdoll/hand_right/crossbow_3.png", "start": 54085756, "end": 54085969}, {"filename": "/assets/paperdoll/hand_right/fork_2.png", "start": 54085969, "end": 54086155}, {"filename": "/assets/paperdoll/hand_right/glaive_new.png", "start": 54086155, "end": 54086377}, {"filename": "/assets/paperdoll/hand_right/great_mace.png", "start": 54086377, "end": 54086600}, {"filename": "/assets/paperdoll/hand_right/halberd_new.png", "start": 54086600, "end": 54086840}, {"filename": "/assets/paperdoll/hand_right/heavy_sword.png", "start": 54086840, "end": 54087068}, {"filename": "/assets/paperdoll/hand_right/katana.png", "start": 54087068, "end": 54087267}, {"filename": "/assets/paperdoll/hand_right/large_mace.png", "start": 54087267, "end": 54087480}, {"filename": "/assets/paperdoll/hand_right/long_sword.png", "start": 54087480, "end": 54087658}, {"filename": "/assets/paperdoll/hand_right/mace_new.png", "start": 54087658, "end": 54087848}, {"filename": "/assets/paperdoll/hand_right/pole_forked.png", "start": 54087848, "end": 54088091}, {"filename": "/assets/paperdoll/hand_right/quarterstaff.png", "start": 54088091, "end": 54088263}, {"filename": "/assets/paperdoll/hand_right/rapier.png", "start": 54088263, "end": 54088480}, {"filename": "/assets/paperdoll/hand_right/sabre.png", "start": 54088480, "end": 54088690}, {"filename": "/assets/paperdoll/hand_right/scimitar_new.png", "start": 54088690, "end": 54088943}, {"filename": "/assets/paperdoll/hand_right/spear.png", "start": 54088943, "end": 54089147}, {"filename": "/assets/paperdoll/hand_right/spear_1.png", "start": 54089147, "end": 54089313}, {"filename": "/assets/paperdoll/hand_right/staff_evil.png", "start": 54089313, "end": 54089608}, {"filename": "/assets/paperdoll/hand_right/staff_organic.png", "start": 54089608, "end": 54089915}, {"filename": "/assets/paperdoll/hand_right/staff_plain.png", "start": 54089915, "end": 54090103}, {"filename": "/assets/paperdoll/hand_right/war_axe_new.png", "start": 54090103, "end": 54090324}, {"filename": "/assets/paperdoll/head/cap_black_1.png", "start": 54090324, "end": 54090526}, {"filename": "/assets/paperdoll/head/chain.png", "start": 54090526, "end": 54091506}, {"filename": "/assets/paperdoll/head/hood_ybrown.png", "start": 54091506, "end": 54093308}, {"filename": "/assets/paperdoll/head/iron_1.png", "start": 54093308, "end": 54094998}, {"filename": "/assets/paperdoll/human_male.png", "start": 54094998, "end": 54108074}, {"filename": "/assets/paperdoll/legs/leg_armor_1.png", "start": 54108074, "end": 54111636}, {"filename": "/assets/paperdoll/legs/leg_armor_2.png", "start": 54111636, "end": 54114829}, {"filename": "/assets/paperdoll/legs/leg_armor_4.png", "start": 54114829, "end": 54118833}, {"filename": "/assets/paperdoll/legs/pants_black.png", "start": 54118833, "end": 54122823}, {"filename": "/assets/paperdoll/legs/pants_brown.png", "start": 54122823, "end": 54127111}, {"filename": "/assets/paperdoll/middle_brown.png", "start": 54127111, "end": 54130268}, {"filename": "/assets/player.png", "start": 54130268, "end": 54130982}, {"filename": "/assets/saltmere_buildings/alchemy.png", "start": 54130982, "end": 54348403}, {"filename": "/assets/saltmere_buildings/bank.png", "start": 54348403, "end": 54793434}, {"filename": "/assets/saltmere_buildings/carpenter.png", "start": 54793434, "end": 54993170}, {"filename": "/assets/saltmere_buildings/healer.png", "start": 54993170, "end": 55407590}, {"filename": "/assets/saltmere_buildings/house.png", "start": 55407590, "end": 55891626}, {"filename": "/assets/saltmere_buildings/provisioner.png", "start": 55891626, "end": 56270139}, {"filename": "/assets/saltmere_buildings/smith.png", "start": 56270139, "end": 56701599}, {"filename": "/assets/saltmere_buildings/stable.png", "start": 56701599, "end": 56999433}, {"filename": "/assets/saltmere_buildings/tailor.png", "start": 56999433, "end": 57395050}, {"filename": "/assets/saltmere_buildings/townhall.png", "start": 57395050, "end": 57788743}, {"filename": "/assets/sfx/buy.wav", "start": 57788743, "end": 57804663}, {"filename": "/assets/sfx/cast.wav", "start": 57804663, "end": 57820141}, {"filename": "/assets/sfx/click.wav", "start": 57820141, "end": 57822609}, {"filename": "/assets/sfx/coin.wav", "start": 57822609, "end": 57838087}, {"filename": "/assets/sfx/door.wav", "start": 57838087, "end": 57852683}, {"filename": "/assets/sfx/drum.wav", "start": 57852683, "end": 57906969}, {"filename": "/assets/sfx/fireball.wav", "start": 57906969, "end": 57926857}, {"filename": "/assets/sfx/gen_music.py", "start": 57926857, "end": 57929315}, {"filename": "/assets/sfx/gen_sfx.py", "start": 57929315, "end": 57932931}, {"filename": "/assets/sfx/ghost.wav", "start": 57932931, "end": 57972665}, {"filename": "/assets/sfx/harp.wav", "start": 57972665, "end": 58067083}, {"filename": "/assets/sfx/heal.wav", "start": 58067083, "end": 58094027}, {"filename": "/assets/sfx/hit.wav", "start": 58094027, "end": 58102891}, {"filename": "/assets/sfx/hunt.wav", "start": 58102891, "end": 58140419}, {"filename": "/assets/sfx/hurt.wav", "start": 58140419, "end": 58150165}, {"filename": "/assets/sfx/lute.wav", "start": 58150165, "end": 58223413}, {"filename": "/assets/sfx/monster_die.wav", "start": 58223413, "end": 58243301}, {"filename": "/assets/sfx/quest.wav", "start": 58243301, "end": 58265395}, {"filename": "/assets/sfx/swing.wav", "start": 58265395, "end": 58271613}, {"filename": "/assets/sfx/victory.wav", "start": 58271613, "end": 58302967}, {"filename": "/assets/shaders/foliage.vs", "start": 58302967, "end": 58304410}, {"filename": "/assets/shaders/grass.vs", "start": 58304410, "end": 58306160}, {"filename": "/assets/shaders/ground.fs", "start": 58306160, "end": 58310976}, {"filename": "/assets/shaders/lit.fs", "start": 58310976, "end": 58313972}, {"filename": "/assets/shaders/lit.vs", "start": 58313972, "end": 58315117}, {"filename": "/assets/shaders/shadowmap.fs", "start": 58315117, "end": 58319327}, {"filename": "/assets/shaders/shadowmap.vs", "start": 58319327, "end": 58320390}, {"filename": "/assets/shaders/torchlight.fs", "start": 58320390, "end": 58323144}, {"filename": "/assets/shaders/torchlight.vs", "start": 58323144, "end": 58324143}, {"filename": "/assets/skeleton/attack1.png", "start": 58324143, "end": 58349351}, {"filename": "/assets/skeleton/hurt.png", "start": 58349351, "end": 58370014}, {"filename": "/assets/skeleton/idle.png", "start": 58370014, "end": 58392906}, {"filename": "/assets/spell_icons/ArcBolt.bmp", "start": 58392906, "end": 58398768}, {"filename": "/assets/spell_icons/BlessingOfVigor.bmp", "start": 58398768, "end": 58404630}, {"filename": "/assets/spell_icons/CloudMind.bmp", "start": 58404630, "end": 58410492}, {"filename": "/assets/spell_icons/Detonation.bmp", "start": 58410492, "end": 58416354}, {"filename": "/assets/spell_icons/EmberBurst.bmp", "start": 58416354, "end": 58422216}, {"filename": "/assets/spell_icons/FumblingCurse.bmp", "start": 58422216, "end": 58428078}, {"filename": "/assets/spell_icons/GreaterMending.bmp", "start": 58428078, "end": 58433940}, {"filename": "/assets/spell_icons/InfernoStrike.bmp", "start": 58433940, "end": 58439802}, {"filename": "/assets/spell_icons/MendingWord.bmp", "start": 58439802, "end": 58445664}, {"filename": "/assets/spell_icons/PsychicShatter.bmp", "start": 58445664, "end": 58451526}, {"filename": "/assets/spell_icons/SapStrength.bmp", "start": 58451526, "end": 58457388}, {"filename": "/assets/spell_icons/SparkDart.bmp", "start": 58457388, "end": 58463250}, {"filename": "/assets/spell_icons/StormLance.bmp", "start": 58463250, "end": 58469112}, {"filename": "/assets/spell_icons/SummonFiend.bmp", "start": 58469112, "end": 58474974}, {"filename": "/assets/spell_icons/VenomSting.bmp", "start": 58474974, "end": 58480836}, {"filename": "/assets/spell_icons/WoundingTouch.bmp", "start": 58480836, "end": 58486698}, {"filename": "/assets/spellbook_icons/spell_buff.png", "start": 58486698, "end": 58490411}, {"filename": "/assets/spellbook_icons/spell_debuff.png", "start": 58490411, "end": 58494431}, {"filename": "/assets/spellbook_icons/spell_offensive.png", "start": 58494431, "end": 58498646}, {"filename": "/assets/spellbook_icons/spell_utility.png", "start": 58498646, "end": 58503114}, {"filename": "/assets/town_buildings/alchemy.png", "start": 58503114, "end": 58889846}, {"filename": "/assets/town_buildings/bank.png", "start": 58889846, "end": 59244280}, {"filename": "/assets/town_buildings/carpenter.png", "start": 59244280, "end": 59542042}, {"filename": "/assets/town_buildings/healer.png", "start": 59542042, "end": 59897092}, {"filename": "/assets/town_buildings/house.png", "start": 59897092, "end": 60017462}, {"filename": "/assets/town_buildings/provisioner.png", "start": 60017462, "end": 60403759}, {"filename": "/assets/town_buildings/smith.png", "start": 60403759, "end": 60726469}, {"filename": "/assets/town_buildings/stable.png", "start": 60726469, "end": 61006838}, {"filename": "/assets/town_buildings/tailor.png", "start": 61006838, "end": 61393069}, {"filename": "/assets/town_buildings/townhall.png", "start": 61393069, "end": 61702161}, {"filename": "/assets/village/anvil.png", "start": 61702161, "end": 61703290}, {"filename": "/assets/village/autumnbush.png", "start": 61703290, "end": 61705739}, {"filename": "/assets/village/barrel.png", "start": 61705739, "end": 61707076}, {"filename": "/assets/village/bookshelf.png", "start": 61707076, "end": 61707243}, {"filename": "/assets/village/chest.png", "start": 61707243, "end": 61707439}, {"filename": "/assets/village/chicken.png", "start": 61707439, "end": 61707661}, {"filename": "/assets/village/cow.png", "start": 61707661, "end": 61707892}, {"filename": "/assets/village/crate.png", "start": 61707892, "end": 61708981}, {"filename": "/assets/village/door_alchemy.png", "start": 61708981, "end": 61711852}, {"filename": "/assets/village/door_carpenter.png", "start": 61711852, "end": 61713917}, {"filename": "/assets/village/door_smith.png", "start": 61713917, "end": 61715820}, {"filename": "/assets/village/door_tailor.png", "start": 61715820, "end": 61718495}, {"filename": "/assets/village/farmland.png", "start": 61718495, "end": 61718957}, {"filename": "/assets/village/fencepost.png", "start": 61718957, "end": 61719354}, {"filename": "/assets/village/fountain.png", "start": 61719354, "end": 61721322}, {"filename": "/assets/village/lumberpile.png", "start": 61721322, "end": 61722478}, {"filename": "/assets/village/potion_purple.png", "start": 61722478, "end": 61722654}, {"filename": "/assets/village/potion_red.png", "start": 61722654, "end": 61722836}, {"filename": "/assets/village/sheep.png", "start": 61722836, "end": 61723060}, {"filename": "/assets/village/sign_smith.png", "start": 61723060, "end": 61724221}, {"filename": "/assets/village/stall1.png", "start": 61724221, "end": 61726019}, {"filename": "/assets/village/stall2.png", "start": 61726019, "end": 61727576}, {"filename": "/assets/village/stall3.png", "start": 61727576, "end": 61729164}, {"filename": "/assets/village/statue.png", "start": 61729164, "end": 61730810}, {"filename": "/assets/village/streetlamp.png", "start": 61730810, "end": 61732084}, {"filename": "/assets/village/well.png", "start": 61732084, "end": 61733684}, {"filename": "/assets/wild_props/README.md", "start": 61733684, "end": 61734604}, {"filename": "/assets/wild_props/barrel.bin", "start": 61734604, "end": 61750156}, {"filename": "/assets/wild_props/barrel.gltf", "start": 61750156, "end": 61751285}, {"filename": "/assets/wild_props/bucket_water.bin", "start": 61751285, "end": 61758261}, {"filename": "/assets/wild_props/bucket_water.gltf", "start": 61758261, "end": 61759406}, {"filename": "/assets/wild_props/crate_A_big.bin", "start": 61759406, "end": 61766406}, {"filename": "/assets/wild_props/crate_A_big.gltf", "start": 61766406, "end": 61767548}, {"filename": "/assets/wild_props/crate_B_small.bin", "start": 61767548, "end": 61774548}, {"filename": "/assets/wild_props/crate_B_small.gltf", "start": 61774548, "end": 61775694}, {"filename": "/assets/wild_props/crate_long_A.bin", "start": 61775694, "end": 61789898}, {"filename": "/assets/wild_props/crate_long_A.gltf", "start": 61789898, "end": 61791026}, {"filename": "/assets/wild_props/flag_blue.bin", "start": 61791026, "end": 61793490}, {"filename": "/assets/wild_props/flag_blue.gltf", "start": 61793490, "end": 61794600}, {"filename": "/assets/wild_props/flag_red.bin", "start": 61794600, "end": 61797064}, {"filename": "/assets/wild_props/flag_red.gltf", "start": 61797064, "end": 61798171}, {"filename": "/assets/wild_props/hexagons_medieval.png", "start": 61798171, "end": 61813954}, {"filename": "/assets/wild_props/hills_A.bin", "start": 61813954, "end": 61836030}, {"filename": "/assets/wild_props/hills_A.gltf", "start": 61836030, "end": 61837139}, {"filename": "/assets/wild_props/hills_A_trees.bin", "start": 61837139, "end": 61868183}, {"filename": "/assets/wild_props/hills_A_trees.gltf", "start": 61868183, "end": 61869313}, {"filename": "/assets/wild_props/hills_B_trees.bin", "start": 61869313, "end": 61894533}, {"filename": "/assets/wild_props/hills_B_trees.gltf", "start": 61894533, "end": 61895678}, {"filename": "/assets/wild_props/hills_C_trees.bin", "start": 61895678, "end": 61935054}, {"filename": "/assets/wild_props/hills_C_trees.gltf", "start": 61935054, "end": 61936206}, {"filename": "/assets/wild_props/mountain_A.bin", "start": 61936206, "end": 61943838}, {"filename": "/assets/wild_props/mountain_A.gltf", "start": 61943838, "end": 61944970}, {"filename": "/assets/wild_props/mountain_A_grass_trees.bin", "start": 61944970, "end": 61972290}, {"filename": "/assets/wild_props/mountain_A_grass_trees.gltf", "start": 61972290, "end": 61973462}, {"filename": "/assets/wild_props/mountain_B.bin", "start": 61973462, "end": 61981094}, {"filename": "/assets/wild_props/mountain_B.gltf", "start": 61981094, "end": 61982227}, {"filename": "/assets/wild_props/mountain_B_grass_trees.bin", "start": 61982227, "end": 62015399}, {"filename": "/assets/wild_props/mountain_B_grass_trees.gltf", "start": 62015399, "end": 62016575}, {"filename": "/assets/wild_props/mountain_C.bin", "start": 62016575, "end": 62029295}, {"filename": "/assets/wild_props/mountain_C.gltf", "start": 62029295, "end": 62030428}, {"filename": "/assets/wild_props/mountain_C_grass_trees.bin", "start": 62030428, "end": 62073776}, {"filename": "/assets/wild_props/mountain_C_grass_trees.gltf", "start": 62073776, "end": 62074954}, {"filename": "/assets/wild_props/resource_lumber.bin", "start": 62074954, "end": 62086834}, {"filename": "/assets/wild_props/resource_lumber.gltf", "start": 62086834, "end": 62087981}, {"filename": "/assets/wild_props/resource_stone.bin", "start": 62087981, "end": 62099541}, {"filename": "/assets/wild_props/resource_stone.gltf", "start": 62099541, "end": 62100689}, {"filename": "/assets/wild_props/rock_single_A.bin", "start": 62100689, "end": 62101917}, {"filename": "/assets/wild_props/rock_single_A.gltf", "start": 62101917, "end": 62103035}, {"filename": "/assets/wild_props/rock_single_B.bin", "start": 62103035, "end": 62104663}, {"filename": "/assets/wild_props/rock_single_B.gltf", "start": 62104663, "end": 62105802}, {"filename": "/assets/wild_props/rock_single_C.bin", "start": 62105802, "end": 62107994}, {"filename": "/assets/wild_props/rock_single_C.gltf", "start": 62107994, "end": 62109133}, {"filename": "/assets/wild_props/rock_single_D.bin", "start": 62109133, "end": 62110481}, {"filename": "/assets/wild_props/rock_single_D.gltf", "start": 62110481, "end": 62111620}, {"filename": "/assets/wild_props/rock_single_E.bin", "start": 62111620, "end": 62115920}, {"filename": "/assets/wild_props/rock_single_E.gltf", "start": 62115920, "end": 62117064}, {"filename": "/assets/wild_props/sack.bin", "start": 62117064, "end": 62120304}, {"filename": "/assets/wild_props/sack.gltf", "start": 62120304, "end": 62121422}, {"filename": "/assets/wild_props/tent.bin", "start": 62121422, "end": 62127570}, {"filename": "/assets/wild_props/tent.gltf", "start": 62127570, "end": 62128665}, {"filename": "/assets/wild_props/tree_single_A.bin", "start": 62128665, "end": 62132005}, {"filename": "/assets/wild_props/tree_single_A.gltf", "start": 62132005, "end": 62133145}, {"filename": "/assets/wild_props/tree_single_B.bin", "start": 62133145, "end": 62140513}, {"filename": "/assets/wild_props/tree_single_B.gltf", "start": 62140513, "end": 62141656}, {"filename": "/assets/wild_props/trees_A_cut.bin", "start": 62141656, "end": 62160664}, {"filename": "/assets/wild_props/trees_A_cut.gltf", "start": 62160664, "end": 62161805}, {"filename": "/assets/wild_props/trees_A_large.bin", "start": 62161805, "end": 62218829}, {"filename": "/assets/wild_props/trees_A_large.gltf", "start": 62218829, "end": 62219982}, {"filename": "/assets/wild_props/trees_A_medium.bin", "start": 62219982, "end": 62251662}, {"filename": "/assets/wild_props/trees_A_medium.gltf", "start": 62251662, "end": 62252815}, {"filename": "/assets/wild_props/trees_A_small.bin", "start": 62252815, "end": 62281327}, {"filename": "/assets/wild_props/trees_A_small.gltf", "start": 62281327, "end": 62282472}, {"filename": "/assets/wild_props/trees_B_cut.bin", "start": 62282472, "end": 62295204}, {"filename": "/assets/wild_props/trees_B_cut.gltf", "start": 62295204, "end": 62296343}, {"filename": "/assets/wild_props/trees_B_large.bin", "start": 62296343, "end": 62348303}, {"filename": "/assets/wild_props/trees_B_large.gltf", "start": 62348303, "end": 62349457}, {"filename": "/assets/wild_props/trees_B_medium.bin", "start": 62349457, "end": 62386553}, {"filename": "/assets/wild_props/trees_B_medium.gltf", "start": 62386553, "end": 62387706}, {"filename": "/assets/wild_props/trees_B_small.bin", "start": 62387706, "end": 62409874}, {"filename": "/assets/wild_props/trees_B_small.gltf", "start": 62409874, "end": 62411020}, {"filename": "/assets/wild_props/waterlily_A.bin", "start": 62411020, "end": 62413636}, {"filename": "/assets/wild_props/waterlily_A.gltf", "start": 62413636, "end": 62414750}, {"filename": "/assets/wild_props/waterlily_B.bin", "start": 62414750, "end": 62417590}, {"filename": "/assets/wild_props/waterlily_B.gltf", "start": 62417590, "end": 62418705}, {"filename": "/assets/wild_props/waterplant_A.bin", "start": 62418705, "end": 62421693}, {"filename": "/assets/wild_props/waterplant_A.gltf", "start": 62421693, "end": 62422829}, {"filename": "/assets/wild_props/waterplant_B.bin", "start": 62422829, "end": 62428633}, {"filename": "/assets/wild_props/waterplant_B.gltf", "start": 62428633, "end": 62429776}, {"filename": "/assets/wild_props/waterplant_C.bin", "start": 62429776, "end": 62441628}, {"filename": "/assets/wild_props/waterplant_C.gltf", "start": 62441628, "end": 62442773}, {"filename": "/assets/wild_props/weaponrack.bin", "start": 62442773, "end": 62445713}, {"filename": "/assets/wild_props/weaponrack.gltf", "start": 62445713, "end": 62446827}, {"filename": "/assets/wild_props/wheelbarrow.bin", "start": 62446827, "end": 62465843}, {"filename": "/assets/wild_props/wheelbarrow.gltf", "start": 62465843, "end": 62466989}, {"filename": "/assets/wilderness/bear.png", "start": 62466989, "end": 62467641}, {"filename": "/assets/wilderness/bison.png", "start": 62467641, "end": 62498886}, {"filename": "/assets/wilderness/bush1.png", "start": 62498886, "end": 62501053}, {"filename": "/assets/wilderness/bush2.png", "start": 62501053, "end": 62503349}, {"filename": "/assets/wilderness/dog.png", "start": 62503349, "end": 62504042}, {"filename": "/assets/wilderness/dragon.png", "start": 62504042, "end": 62504992}, {"filename": "/assets/wilderness/drake.png", "start": 62504992, "end": 62525384}, {"filename": "/assets/wilderness/fern1.png", "start": 62525384, "end": 62528435}, {"filename": "/assets/wilderness/griffin.png", "start": 62528435, "end": 62529107}, {"filename": "/assets/wilderness/horse.png", "start": 62529107, "end": 62545766}, {"filename": "/assets/wilderness/ore1.png", "start": 62545766, "end": 62548684}, {"filename": "/assets/wilderness/ore2.png", "start": 62548684, "end": 62551818}, {"filename": "/assets/wilderness/ore3.png", "start": 62551818, "end": 62555043}, {"filename": "/assets/wilderness/panther.png", "start": 62555043, "end": 62566476}, {"filename": "/assets/wilderness/rock.png", "start": 62566476, "end": 62566810}, {"filename": "/assets/wilderness/sabertooth.png", "start": 62566810, "end": 62586680}, {"filename": "/assets/wilderness/tree.png", "start": 62586680, "end": 62590896}, {"filename": "/assets/wilderness/wild_bandit.png", "start": 62590896, "end": 62591295}, {"filename": "/assets/wilderness/wild_bat.png", "start": 62591295, "end": 62591686}, {"filename": "/assets/wilderness/wild_goblin.png", "start": 62591686, "end": 62592748}, {"filename": "/assets/wilderness/wild_imp.png", "start": 62592748, "end": 62593589}, {"filename": "/assets/wilderness/wild_wolf.png", "start": 62593589, "end": 62595477}, {"filename": "/assets/wilderness/wolf.png", "start": 62595477, "end": 62596189}, {"filename": "/assets/wilderness/wyvern.png", "start": 62596189, "end": 62627323}, {"filename": "/assets/wilderness_entrances/bloodtusk.png", "start": 62627323, "end": 62627820}, {"filename": "/assets/wilderness_entrances/emberveil.png", "start": 62627820, "end": 62628357}, {"filename": "/assets/wilderness_entrances/hollowwarrens.png", "start": 62628357, "end": 62629130}, {"filename": "/assets/wilderness_entrances/sunkencrypt.png", "start": 62629130, "end": 62629620}, {"filename": "/assets/wilderness_entrances/weaversnest.png", "start": 62629620, "end": 62631840}, {"filename": "/assets/wilderness_entrances/wyrmscar.png", "start": 62631840, "end": 62632315}, {"filename": "/assets/wilderness_props/bush.png", "start": 62632315, "end": 62638230}, {"filename": "/assets/wilderness_props/cactus.png", "start": 62638230, "end": 62641859}, {"filename": "/assets/wilderness_props/chest.png", "start": 62641859, "end": 62650683}, {"filename": "/assets/wilderness_props/deerskull.png", "start": 62650683, "end": 62656721}, {"filename": "/assets/wilderness_props/fence.png", "start": 62656721, "end": 62662887}, {"filename": "/assets/wilderness_props/grass.png", "start": 62662887, "end": 62672873}, {"filename": "/assets/wilderness_props/haybale.png", "start": 62672873, "end": 62681286}, {"filename": "/assets/wilderness_props/plant.png", "start": 62681286, "end": 62685546}, {"filename": "/assets/wilderness_props/rocks.png", "start": 62685546, "end": 62691797}, {"filename": "/assets/wilderness_props/water.png", "start": 62691797, "end": 62698568}, {"filename": "/assets/wilderness_v2/creatures/bear.png", "start": 62698568, "end": 63193338}, {"filename": "/assets/wilderness_v2/creatures/bison.png", "start": 63193338, "end": 63722024}, {"filename": "/assets/wilderness_v2/creatures/dog.png", "start": 63722024, "end": 64149398}, {"filename": "/assets/wilderness_v2/creatures/dragon.png", "start": 64149398, "end": 64674981}, {"filename": "/assets/wilderness_v2/creatures/drake.png", "start": 64674981, "end": 65020113}, {"filename": "/assets/wilderness_v2/creatures/griffin.png", "start": 65020113, "end": 65577145}, {"filename": "/assets/wilderness_v2/creatures/horse.png", "start": 65577145, "end": 65838683}, {"filename": "/assets/wilderness_v2/creatures/panther.png", "start": 65838683, "end": 65964076}, {"filename": "/assets/wilderness_v2/creatures/sabertooth.png", "start": 65964076, "end": 66122091}, {"filename": "/assets/wilderness_v2/creatures/wolf.png", "start": 66122091, "end": 66337295}, {"filename": "/assets/wilderness_v2/creatures/wyvern.png", "start": 66337295, "end": 66659569}, {"filename": "/assets/wilderness_v2/monsters/bandit.png", "start": 66659569, "end": 67203382}, {"filename": "/assets/wilderness_v2/monsters/bat.png", "start": 67203382, "end": 67511186}, {"filename": "/assets/wilderness_v2/monsters/goblin.png", "start": 67511186, "end": 68305018}, {"filename": "/assets/wilderness_v2/monsters/imp.png", "start": 68305018, "end": 68708970}, {"filename": "/assets/wilderness_v2/monsters/wolf.png", "start": 68708970, "end": 68797460}, {"filename": "/assets/wilderness_v2/rival_adventurer.png", "start": 68797460, "end": 69095709}], "remote_package_size": 69095709});

  })();

// end include: /tmp/tmphtbuc6n6.js


var programArgs = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// In MODULARIZE mode _scriptName needs to be captured already at the very top of the page immediately when the page is parsed, so it is generated there
// before the page load. In non-MODULARIZE modes generate it here.
var _scriptName = globalThis.document?.currentScript?.src;

if (typeof __filename != 'undefined') { // Node
  _scriptName = __filename;
} else
if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {

  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('node:fs');

  scriptDirectory = __dirname + '/';

// include: node_shell_read.js
readBinary = (filename) => {
  // We need to re-wrap `file://` strings to URLs.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename);
  return ret;
};

readAsync = async (filename, binary = true) => {
  // See the comment in the `readBinary` function.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
  return ret;
};
// end include: node_shell_read.js
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  programArgs = process.argv.slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here
  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href; // includes trailing slash
  } catch {
    // Must be a `blob:` or `data:` URL (e.g. `blob:http://site.com/etc/etc`), we cannot
    // infer anything from them.
  }

  {
// include: web_or_worker_shell_read.js
if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = async (url) => {
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use XHR on webview if URL is a file URL.
    if (isFileURI(url)) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            resolve(xhr.response);
            return;
          }
          reject(xhr.status);
        };
        xhr.onerror = reject;
        xhr.send(null);
      });
    }
    var response = await fetch(url, { credentials: 'same-origin' });
    if (response.ok) {
      return response.arrayBuffer();
    }
    throw new Error(response.status + ' : ' + response.url);
  };
// end include: web_or_worker_shell_read.js
  }
} else
{
}

var out = console.log.bind(console);
var err = console.error.bind(console);

// end include: shell.js

// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;

// Wasm globals

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implementation here for now.
    abort(text);
  }
}

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');

// include: runtime_common.js
// include: runtime_exceptions.js
// Base Emscripten EH error class
class EmscriptenEH {}

class EmscriptenSjLj extends EmscriptenEH {}

// end include: runtime_exceptions.js
// include: runtime_debug.js
// end include: runtime_debug.js
// Memory management

var runtimeInitialized = false;



function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// end include: runtime_common.js
function preRun() {
  var preRun = Module['preRun'];
  if (preRun) {
    if (typeof preRun == 'function') preRun = [preRun];
    onPreRuns.push(...preRun);
  }
  // Begin ATPRERUNS hooks
  callRuntimeCallbacks(onPreRuns);
  // End ATPRERUNS hooks
}

function initRuntime() {
  runtimeInitialized = true;

  // Begin ATINITS hooks
  if (!Module['noFSInit'] && !FS.initialized) FS.init();
TTY.init();
  // End ATINITS hooks

  wasmExports['__wasm_call_ctors']();

  // Begin ATPOSTCTORS hooks
  FS.ignorePermissions = false;
  // End ATPOSTCTORS hooks

}

function postRun() {

  var postRun = Module['postRun'];
  if (postRun) {
    if (typeof postRun == 'function') postRun = [postRun];
    onPostRuns.push(...postRun);
  }

  // Begin ATPOSTRUNS hooks
  callRuntimeCallbacks(onPostRuns);
  // End ATPOSTRUNS hooks
}

/**
 * @param {string|number=} what
 */
function abort(what) {
  Module['onAbort']?.(what);

  what = `Aborted(${what})`;
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;

  what += '. Build with -sASSERTIONS for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

var wasmBinaryFile;

function findWasmBinary() {
  return locateFile('townforge.wasm');
}

function getBinarySync(file) {
  if (readBinary) {
    return readBinary(file);
  }
  // Throwing a plain string here, even though it not normally advisable since
  // this gets turning into an `abort` in instantiateArrayBuffer.
  throw 'both async and sync fetching of the wasm failed';
}

async function getWasmBinary(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary) {
    // Fetch the binary using readAsync
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {
      // Fall back to getBinarySync below;
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return getBinarySync(binaryFile);
}

async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    abort(reason);
  }
}

async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary
      // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
      && !isFileURI(binaryFile)
      // Avoid using instantiateStreaming() on Node.js since the `fetch()` API
      // does not support `file://` URLs.
      // See: https://github.com/emscripten-core/emscripten/pull/16917
      && !ENVIRONMENT_IS_NODE
     ) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
      return instantiationResult;
    } catch (reason) {
      // We expect the most common failure cause to be a bad MIME type for the binary,
      // in which case falling back to ArrayBuffer instantiation should work.
      err(`wasm streaming compile failed: ${reason}`);
      err('falling back to ArrayBuffer instantiation');
      // fall back of instantiateArrayBuffer below
    };
  }
  return instantiateArrayBuffer(binaryFile, imports);
}

function getWasmImports() {
  // prepare imports
  var imports = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  return imports;
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
async function createWasm() {
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  function receiveInstance(instance) {
    wasmExports = instance.exports;

    assignWasmExports(wasmExports);

    updateMemoryViews();

    return wasmExports;
  }

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    return receiveInstance(result['instance']);
  }

  var info = getWasmImports();

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  var instantiateWasm = Module['instantiateWasm'];
  if (instantiateWasm) {
    return new Promise((resolve) => {
        instantiateWasm(info, (inst) => resolve(receiveInstance(inst)));
    });
  }

  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}

// end include: preamble.js

// Begin JS library code


  class ExitStatus {
      name = 'ExitStatus';
      constructor(status) {
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };
  var onPostRuns = [];
  var addOnPostRun = (cb) => onPostRuns.push(cb);

  var onPreRuns = [];
  var addOnPreRun = (cb) => onPreRuns.push(cb);


  var noExitRuntime = true;

  var stackRestore = (val) => __emscripten_stack_restore(val);

  var stackSave = () => _emscripten_stack_get_current();

  

  var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
  
  
    /**
   * heapOrArray is either a regular array, or a JavaScript typed array view.
   * @param {number} idx
   * @param {number=} maxBytesToRead
   * @param {boolean=} ignoreNul
   * @return {number}
   */
  var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
      var maxIdx = idx + maxBytesToRead;
      if (ignoreNul) return maxIdx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.
      // As a tiny code save trick, compare idx against maxIdx using a negation,
      // so that maxBytesToRead=undefined/NaN means Infinity.
      while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
      return idx;
    };
  
    /**
   * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
   * array that contains uint8 values, returns a copy of that string as a
   * Javascript String object.
   * heapOrArray is either a regular array, or a JavaScript typed array view.
   * @param {number=} idx
   * @param {number=} maxBytesToRead
   * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
   * @return {string}
   */
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  
      var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  
      // When using conditional TextDecoder, skip it for short strings as the overhead of the native call is not worth it.
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
  /** @type {!Uint8Array} */
  var HEAPU8;
  
    /**
   * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
   * emscripten HEAP, returns a copy of that string as a Javascript String object.
   *
   * @param {number} ptr
   * @param {number=} maxBytesToRead - An optional length that specifies the
   *   maximum number of bytes to read. You can omit this parameter to scan the
   *   string until the first 0 byte. If maxBytesToRead is passed, and the string
   *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
   *   string will cut short at that byte index.
   * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
   * @return {string}
   */
  var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : '';
    };
  var ___assert_fail = (condition, filename, line, func) =>
      abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);

  /** @type {!Int8Array} */
  var HEAP8;
  
  /** @type {!Uint32Array} */
  var HEAPU32;
  class ExceptionInfo {
      // excPtr - Thrown object pointer to wrap. Metadata pointer is calculated from it.
      constructor(excPtr) {
        this.excPtr = excPtr;
        this.ptr = excPtr - 24;
      }
  
      set_type(type) {
        HEAPU32[(((this.ptr)+(4))>>2)] = type;
      }
  
      get_type() {
        return HEAPU32[(((this.ptr)+(4))>>2)];
      }
  
      set_destructor(destructor) {
        HEAPU32[(((this.ptr)+(8))>>2)] = destructor;
      }
  
      get_destructor() {
        return HEAPU32[(((this.ptr)+(8))>>2)];
      }
  
      set_caught(caught) {
        caught = caught ? 1 : 0;
        HEAP8[(this.ptr)+(12)] = caught;
      }
  
      get_caught() {
        return HEAP8[(this.ptr)+(12)] != 0;
      }
  
      set_rethrown(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(this.ptr)+(13)] = rethrown;
      }
  
      get_rethrown() {
        return HEAP8[(this.ptr)+(13)] != 0;
      }
  
      // Initialize native structure fields. Should be called once after allocated.
      init(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
  
      set_adjusted_ptr(adjustedPtr) {
        HEAPU32[(((this.ptr)+(16))>>2)] = adjustedPtr;
      }
  
      get_adjusted_ptr() {
        return HEAPU32[(((this.ptr)+(16))>>2)];
      }
    }
  
  var uncaughtExceptionCount = 0;
  
  var __Unwind_RaiseException = (ex) => {
      abort()
    };
  var ___cxa_throw = (ptr, type, destructor) => {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      uncaughtExceptionCount++;
      __Unwind_RaiseException(ptr);
    };

  var PATH = {
  isAbs:(path) => path.charAt(0) === '/',
  splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
  normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
  normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.slice(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
  dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.slice(0, -1);
        }
        return root + dir;
      },
  basename:(path) => path && path.match(/([^\/]+|\/)\/*$/)[1],
join:(...paths) => PATH.normalize(paths.join('/')),
join2:(l, r) => PATH.normalize(l + '/' + r),
};

var initRandomFill = () => {
    // This block is not needed on v19+ since crypto.getRandomValues is builtin
    if (ENVIRONMENT_IS_NODE) {
      var nodeCrypto = require('node:crypto');
      return (view) => (nodeCrypto.randomFillSync(view), 0);
    }

    return (view) => (crypto.getRandomValues(view), 0);
  };
var randomFill = (view) => (randomFill = initRandomFill())(view);



var PATH_FS = {
resolve:(...args) => {
      var resolvedPath = '',
        resolvedAbsolute = false;
      for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? args[i] : FS.cwd();
        // Skip empty and invalid entries
        if (typeof path != 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          return ''; // an invalid portion invalidates the whole thing
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = PATH.isAbs(path);
      }
      // At this point the path should be resolved to a full absolute path, but
      // handle relative paths to be safe (might happen when process.cwd() fails)
      resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    },
relative:(from, to) => {
      from = PATH_FS.resolve(from).slice(1);
      to = PATH_FS.resolve(to).slice(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '') break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '') break;
        }
        if (start > end) return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    },
};



var FS_stdin_getChar_buffer = [];

var lengthBytesUTF8 = (str) => {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
      // unit, not a Unicode code point of the character! So decode
      // UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var c = str.charCodeAt(i); // possibly a lead surrogate
      if (c <= 0x7F) {
        len++;
      } else if (c <= 0x7FF) {
        len += 2;
      } else if (c >= 0xD800 && c <= 0xDFFF) {
        len += 4; ++i;
      } else {
        len += 3;
      }
    }
    return len;
  };

var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
    // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
    // undefined and false each don't write out any bytes.
    if (!(maxBytesToWrite > 0))
      return 0;

    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
    for (var i = 0; i < str.length; ++i) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
      // and https://www.ietf.org/rfc/rfc2279.txt
      // and https://tools.ietf.org/html/rfc3629
      var u = str.codePointAt(i);
      if (u <= 0x7F) {
        if (outIdx >= endIdx) break;
        heap[outIdx++] = u;
      } else if (u <= 0x7FF) {
        if (outIdx + 1 >= endIdx) break;
        heap[outIdx++] = 0xC0 | (u >> 6);
        heap[outIdx++] = 0x80 | (u & 63);
      } else if (u <= 0xFFFF) {
        if (outIdx + 2 >= endIdx) break;
        heap[outIdx++] = 0xE0 | (u >> 12);
        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
        heap[outIdx++] = 0x80 | (u & 63);
      } else {
        if (outIdx + 3 >= endIdx) break;
        heap[outIdx++] = 0xF0 | (u >> 18);
        heap[outIdx++] = 0x80 | ((u >> 12) & 63);
        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
        heap[outIdx++] = 0x80 | (u & 63);
        // Gotcha: if codePoint is over 0xFFFF, it is represented as a surrogate pair in UTF-16.
        // We need to manually skip over the second code unit for correct iteration.
        i++;
      }
    }
    // Null-terminate the pointer to the buffer.
    heap[outIdx] = 0;
    return outIdx - startIdx;
  };
/** @type {function(string, boolean=, number=)} */
  var intArrayFromString = (stringy, dontAddNull, length) => {
      var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    };
  var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          // we will read data by chunks of BUFSIZE
          var BUFSIZE = 256;
          var buf = Buffer.alloc(BUFSIZE);
          var bytesRead = 0;
  
          // For some reason we must suppress a closure warning here, even though
          // fd definitely exists on process.stdin, and is even the proper way to
          // get the fd of stdin,
          // https://github.com/nodejs/help/issues/2136#issuecomment-523649904
          // This started to happen after moving this logic out of library_tty.js,
          // so it is related to the surrounding code in some unclear manner.
          /** @suppress {missingProperties} */
          var fd = process.stdin.fd;
  
          try {
            bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
          } catch(e) {
            // Cross-platform differences: on Windows, reading EOF throws an
            // exception, but on other OSes, reading EOF returns 0. Uniformize
            // behavior by treating the EOF exception to return 0.
            if (e.toString().includes('EOF')) bytesRead = 0;
            else throw e;
          }
  
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString('utf-8');
          }
        } else
        if (globalThis.window?.prompt) {
          // Browser.
          result = window.prompt('Input: ');  // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else
        {}
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
  var TTY = {
  ttys:[],
  init() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },
  shutdown() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },
  register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
  stream_ops:{
  open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
  close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
  fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
  read(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && !bytesRead) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
            // We currently only support canonical mode (ICANON), where
            // read(2) returns as soon as a line delimiter is read.
            if (result === 10) break;
          }
          if (bytesRead) {
            stream.node.atime = Date.now();
          }
          return bytesRead;
        },
  write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.mtime = stream.node.ctime = Date.now();
          }
          return i;
        },
  },
  default_tty_ops:{
  get_char(tty) {
          return FS_stdin_getChar();
        },
  put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              0x03, 0x1c, 0x7f, 0x15, 0x04, 0x00, 0x01, 0x00, 0x11, 0x13, 0x1a, 0x00,
              0x12, 0x0f, 0x17, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
          };
        },
  ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
  ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
  },
  default_tty1_ops:{
  put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  },
  };
  
  
  var mmapAlloc = (size) => {
      abort();
    };
  
  var MEMFS = {
  ops_table:null,
  mount(mount) {
        return MEMFS.createNode(null, '/', 16895, 0);
      },
  createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // not supported
          throw new FS.ErrnoError(63);
        }
        MEMFS.ops_table ||= {
          dir: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              lookup: MEMFS.node_ops.lookup,
              mknod: MEMFS.node_ops.mknod,
              rename: MEMFS.node_ops.rename,
              unlink: MEMFS.node_ops.unlink,
              rmdir: MEMFS.node_ops.rmdir,
              readdir: MEMFS.node_ops.readdir,
              symlink: MEMFS.node_ops.symlink
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
              read: MEMFS.stream_ops.read,
              write: MEMFS.stream_ops.write,
              mmap: MEMFS.stream_ops.mmap,
              msync: MEMFS.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              readlink: MEMFS.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: FS.chrdev_stream_ops
          }
        };
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          // The actual number of bytes used in the typed array, as opposed to
          // contents.length which gives the whole capacity.
          node.usedBytes = 0;
          // The byte data of the file is stored in a typed array.
          // Note: typed arrays are not resizable like normal JS arrays are, so
          // there is a small penalty involved for appending file writes that
          // continuously grow a file similar to std::vector capacity vs used.
          node.contents = MEMFS.emptyFileContents ??= new Uint8Array(0);
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.atime = node.mtime = node.ctime = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.atime = parent.mtime = parent.ctime = node.atime;
        }
        return node;
      },
  getFileDataAsTypedArray(node) {
        return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
      },
  expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents.length;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very
        // small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for
        // large sizes, do a much more conservative size*1.125 increase to avoid
        // overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = MEMFS.getFileDataAsTypedArray(node);
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        node.contents.set(oldContents);
      },
  resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        var oldContents = node.contents;
        node.contents = new Uint8Array(newSize); // Allocate new storage.
        node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
        node.usedBytes = newSize;
      },
  node_ops:{
  getattr(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.atime);
          attr.mtime = new Date(node.mtime);
          attr.ctime = new Date(node.ctime);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
  setattr(node, attr) {
          for (const key of ['mode', 'atime', 'mtime', 'ctime']) {
            if (attr[key] != null) {
              node[key] = attr[key];
            }
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
  lookup(parent, name) {
          // This error may happen quite a bit. To avoid overhead we reuse it (and
          // suffer a lack of stack info).
          if (!MEMFS.doesNotExistError) {
            MEMFS.doesNotExistError = new FS.ErrnoError(44);
            /** @suppress {checkTypes} */
            MEMFS.doesNotExistError.stack = '<generic error, no stack>';
          }
          throw MEMFS.doesNotExistError;
        },
  mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
  rename(old_node, new_dir, new_name) {
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {}
          if (new_node) {
            if (FS.isDir(old_node.mode)) {
              // if we're overwriting a directory at new_name, make sure it's empty.
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
            FS.hashRemoveNode(new_node);
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          new_dir.contents[new_name] = old_node;
          old_node.name = new_name;
          new_dir.ctime = new_dir.mtime = old_node.parent.ctime = old_node.parent.mtime = Date.now();
        },
  unlink(parent, name) {
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  readdir(node) {
          return ['.', '..', ...Object.keys(node.contents)];
        },
  symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0o777 | 40960, 0);
          node.link = oldpath;
          return node;
        },
  readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
  },
  stream_ops:{
  read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          buffer.set(contents.subarray(position, position + size), offset);
          return size;
        },
  write(stream, buffer, offset, length, position, canOwn) {
  
          if (!length) return 0;
          var node = stream.node;
          node.mtime = node.ctime = Date.now();
  
          if (canOwn) {
            node.contents = buffer.subarray(offset, offset + length);
            node.usedBytes = length;
          } else if (!node.usedBytes && !position) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
            node.contents = buffer.slice(offset, offset + length);
            node.usedBytes = length;
          } else {
            MEMFS.expandFileStorage(node, position+length);
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
            node.usedBytes = Math.max(node.usedBytes, position + length);
          }
          return length;
        },
  llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
  mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            if (contents) {
              // Try to avoid unnecessary slices.
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(contents, position, position + length);
                }
              }
              HEAP8.set(contents, ptr);
            }
          }
          return { ptr, allocated };
        },
  msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
  },
  };
  
  var FS_modeStringToFlags = (str) => {
      if (typeof str != 'string') return str;
      var flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      var flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
  
  var FS_fileDataToTypedArray = (data) => {
      if (typeof data == 'string') {
        data = intArrayFromString(data, true);
      }
      if (!data.subarray) {
        data = new Uint8Array(data);
      }
      return data;
    };
  
  var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
  
  
  
  
  var IDBFS = {
  dbs:{
  },
  indexedDB:() => {
        return indexedDB;
      },
  DB_VERSION:21,
  DB_STORE_NAME:"FILE_DATA",
  queuePersist:(mount) => {
        function onPersistComplete() {
          if (mount.idbPersistState === 'again') startPersist(); // If a new sync request has appeared in between, kick off a new sync
          else {
            mount.idbPersistState = 0; // Otherwise reset sync state back to idle to wait for a new sync later
            IDBFS.onAutoPersistStateChanged?.(false);
          }
        }
        function startPersist() {
          mount.idbPersistState = 'idb'; // Mark that we are currently running a sync operation
          IDBFS.onAutoPersistStateChanged?.(true);
          IDBFS.syncfs(mount, /*populate:*/false, onPersistComplete);
        }
  
        if (!mount.idbPersistState) {
          // Programs typically write/copy/move multiple files in the in-memory
          // filesystem within a single app frame, so when a filesystem sync
          // command is triggered, do not start it immediately, but only after
          // the current frame is finished. This way all the modified files
          // inside the main loop tick will be batched up to the same sync.
          mount.idbPersistState = setTimeout(startPersist, 0);
        } else if (mount.idbPersistState === 'idb') {
          // There is an active IndexedDB sync operation in-flight, but we now
          // have accumulated more files to sync. We should therefore queue up
          // a new sync after the current one finishes so that all writes
          // will be properly persisted.
          mount.idbPersistState = 'again';
        }
      },
  mount:(mount) => {
        // reuse core MEMFS functionality
        var mnt = MEMFS.mount(mount);
        // If the automatic IDBFS persistence option has been selected, then automatically persist
        // all modifications to the filesystem as they occur.
        if (mount?.opts?.autoPersist) {
          mount.idbPersistState = 0; // IndexedDB sync starts in idle state
          var memfs_node_ops = mnt.node_ops;
          mnt.node_ops = {...mnt.node_ops}; // Clone node_ops to inject write tracking
          mnt.node_ops.mknod = (parent, name, mode, dev) => {
            var node = memfs_node_ops.mknod(parent, name, mode, dev);
            // Propagate injected node_ops to the newly created child node
            node.node_ops = mnt.node_ops;
            // Remember for each IDBFS node which IDBFS mount point they came from so we know which mount to persist on modification.
            node.idbfs_mount = mnt.mount;
            // Remember original MEMFS stream_ops for this node
            node.memfs_stream_ops = node.stream_ops;
            // Clone stream_ops to inject write tracking
            node.stream_ops = {...node.stream_ops};
  
            // Track all file writes
            node.stream_ops.write = (stream, buffer, offset, length, position, canOwn) => {
              // This file has been modified, we must persist IndexedDB when this file closes
              stream.node.isModified = true;
              return node.memfs_stream_ops.write(stream, buffer, offset, length, position, canOwn);
            };
  
            // Persist IndexedDB on file close
            node.stream_ops.close = (stream) => {
              var n = stream.node;
              if (n.isModified) {
                IDBFS.queuePersist(n.idbfs_mount);
                n.isModified = false;
              }
              if (n.memfs_stream_ops.close) return n.memfs_stream_ops.close(stream);
            };
  
            // Persist the node we just created to IndexedDB
            IDBFS.queuePersist(mnt.mount);
  
            return node;
          };
          // Also kick off persisting the filesystem on other operations that modify the filesystem.
          mnt.node_ops.rmdir   = (...args) => (IDBFS.queuePersist(mnt.mount), memfs_node_ops.rmdir(...args));
          mnt.node_ops.symlink = (...args) => (IDBFS.queuePersist(mnt.mount), memfs_node_ops.symlink(...args));
          mnt.node_ops.unlink  = (...args) => (IDBFS.queuePersist(mnt.mount), memfs_node_ops.unlink(...args));
          mnt.node_ops.rename  = (...args) => (IDBFS.queuePersist(mnt.mount), memfs_node_ops.rename(...args));
        }
        return mnt;
      },
  syncfs:(mount, populate, callback) => {
        IDBFS.getLocalSet(mount, (err, local) => {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, (err, remote) => {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },
  quit:() => {
        for (var value of Object.values(IDBFS.dbs)) {
          value.close()
        }
        IDBFS.dbs = {};
      },
  getDB:(name, callback) => {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback('Unable to connect to IndexedDB');
        }
        req.onupgradeneeded = (e) => {
          var db = /** @type {IDBDatabase} */ (e.target.result);
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          if (!fileStore.indexNames.contains('timestamp')) {
            fileStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
        };
        req.onsuccess = () => {
          db = /** @type {IDBDatabase} */ (req.result);
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = (e) => {
          callback(e.target.error);
          e.preventDefault();
        };
      },
  getLocalSet:(mount, callback) => {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return (p) => PATH.join2(root, p);
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.lstat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push(...FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { 'timestamp': stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },
  getRemoteSet:(mount, callback) => {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, (err, db) => {
          if (err) return callback(err);
  
          try {
            var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
            transaction.onerror = (e) => {
              callback(e.target.error);
              e.preventDefault();
            };
  
            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index('timestamp');
  
            index.openKeyCursor().onsuccess = (event) => {
              var cursor = event.target.result;
  
              if (!cursor) {
                return callback(null, { type: 'remote', db, entries });
              }
  
              entries[cursor.primaryKey] = { 'timestamp': cursor.key };
  
              cursor.continue();
            };
          } catch (e) {
            return callback(e);
          }
        });
      },
  loadLocalEntry:(path, callback) => {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.lstat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode });
        } else if (FS.isLink(stat.mode)) {
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode, 'link': node.link, });
        } else if (FS.isFile(stat.mode)) {
          // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
          // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode, 'contents': node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },
  storeLocalEntry:(path, entry, callback) => {
        try {
          if (FS.isDir(entry['mode'])) {
            FS.mkdirTree(path, entry['mode']);
          } else if (FS.isLink(entry['mode'])) {
            FS.symlink(entry['link'], path);
          } else if (FS.isFile(entry['mode'])) {
            FS.writeFile(path, entry['contents'], { canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.chmod(path, entry['mode']);
          FS.utime(path, entry['timestamp'], entry['timestamp']);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },
  removeLocalEntry:(path, callback) => {
        try {
          var stat = FS.lstat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },
  loadRemoteEntry:(store, path, callback) => {
        var req = store.get(path);
        req.onsuccess = (event) => callback(null, event.target.result);
        req.onerror = (e) => {
          callback(e.target.error);
          e.preventDefault();
        };
      },
  storeRemoteEntry:(store, path, entry, callback) => {
        try {
          var req = store.put(entry, path);
        } catch (e) {
          callback(e);
          return;
        }
        req.onsuccess = (event) => callback();
        req.onerror = (e) => {
          callback(e.target.error);
          e.preventDefault();
        };
      },
  removeRemoteEntry:(store, path, callback) => {
        var req = store.delete(path);
        req.onsuccess = (event) => callback();
        req.onerror = (e) => {
          callback(e.target.error);
          e.preventDefault();
        };
      },
  reconcile:(src, dst, callback) => {
        var total = 0;
  
        var create = [];
        for (var [key, e] of Object.entries(src.entries)) {
          var e2 = dst.entries[key];
          if (!e2 || e['timestamp'].getTime() != e2['timestamp'].getTime()) {
            create.push(key);
            total++;
          }
        }
  
        var remove = [];
        for (var key of Object.keys(dst.entries)) {
          if (!src.entries[key]) {
            remove.push(key);
            total++;
          }
        }
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err && !errored) {
            errored = true;
            return callback(err);
          }
        };
  
        // transaction may abort if (for example) there is a QuotaExceededError
        transaction.onerror = transaction.onabort = (e) => {
          done(e.target.error);
          e.preventDefault();
        };
  
        transaction.oncomplete = (e) => {
          if (!errored) {
            callback(null);
          }
        };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        for (const path of create.sort()) {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, (err, entry) => {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, (err, entry) => {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        }
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        for (var path of remove.sort().reverse()) {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        }
      },
  };
  
  var asyncLoad = async (url) => {
      var arrayBuffer = await readAsync(url);
      return new Uint8Array(arrayBuffer);
    };
  
  
  var FS_createDataFile = (...args) => FS.createDataFile(...args);
  
  var getUniqueRunDependency = (id) => {
      return id;
    };
  
  var dependenciesPromise = null;
  var resolveRunDependencies = async () => dependenciesPromise;
  var runDependencies = 0;
  
  
  var dependenciesPromiseResolve = null;
  var removeRunDependency = (id) => {
      runDependencies--;
  
      Module['monitorRunDependencies']?.(runDependencies);
  
      if (!runDependencies) {
        dependenciesPromiseResolve();
      }
    };
  
  
  var addRunDependency = (id) => {
      if (!runDependencies) {
        dependenciesPromise = new Promise((resolve) => dependenciesPromiseResolve = resolve);
      }
      runDependencies++;
  
      Module['monitorRunDependencies']?.(runDependencies);
  
    };
  
  
  var preloadPlugins = [];
  var FS_handledByPreloadPlugin = async (byteArray, fullname) => {
      // Ensure plugins are ready.
      if (typeof Browser != 'undefined') Browser.init();
  
      for (var plugin of preloadPlugins) {
        if (plugin['canHandle'](fullname)) {
          return plugin['handle'](byteArray, fullname);
        }
      }
      // If no plugin handled this file then return the original/unmodified
      // byteArray.
      return byteArray;
    };
  var FS_preloadFile = async (parent, name, url, canRead, canWrite, dontCreateFile, canOwn, preFinish) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`); // might have several active requests for the same fullname
      addRunDependency(dep);
  
      try {
        var byteArray = url;
        if (typeof url == 'string') {
          byteArray = await asyncLoad(url);
        }
  
        byteArray = await FS_handledByPreloadPlugin(byteArray, fullname);
        preFinish?.();
        if (!dontCreateFile) {
          FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
        }
      } finally {
        removeRunDependency(dep);
      }
    };
  var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      FS_preloadFile(parent, name, url, canRead, canWrite, dontCreateFile, canOwn, preFinish).then(onload).catch(onerror);
    };
  
  var FS = {
  root:null,
  mounts:[],
  devices:{
  },
  streams:[],
  nextInode:1,
  nameTable:null,
  currentPath:"/",
  initialized:false,
  ignorePermissions:true,
  filesystems:null,
  syncFSRequests:0,
  ErrnoError:class {
        name = 'ErrnoError';
        // We set the `name` property to be able to identify `FS.ErrnoError`
        // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
        // - when using PROXYFS, an error can come from an underlying FS
        // as different FS objects have their own FS.ErrnoError each,
        // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
        // we'll use the reliable test `err.name == "ErrnoError"` instead
        constructor(errno) {
          this.errno = errno;
        }
      },
  FSStream:class {
        shared = {};
        get object() {
          return this.node;
        }
        set object(val) {
          this.node = val;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return (this.flags & 1024);
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(val) {
          this.shared.flags = val;
        }
        get position() {
          return this.shared.position;
        }
        set position(val) {
          this.shared.position = val;
        }
      },
  FSNode:class {
        node_ops = {};
        stream_ops = {};
        readMode = 292 | 73;
        writeMode = 146;
        mounted = null;
        constructor(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;  // root node sets parent to itself
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.rdev = rdev;
          this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(val) {
          val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(val) {
          val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return FS.isDir(this.mode);
        }
        get isDevice() {
          return FS.isChrdev(this.mode);
        }
        // The per-inode readiness wait-queue. The node carries a Set of listener
        // entries {cb}; producers (SOCKFS, PIPEFS) call notifyListeners on a
        // readiness transition, and poll()/epoll consume it. It lives on the node
        // (not the fd) so dup'd fds share one queue. Only nodes that derive real
        // readiness (sockets, pipes, and an epoll's own node) ever use this -
        // always-ready types (regular files, ttys) never register or notify.
        addListener(cb, exclusive = false) {
          var entry = {cb, exclusive};
          var listeners = (this.listeners ??= new Set());
          listeners.add(entry);
          return {listeners, entry};
        }
        notifyListeners(flags) {
          // Iterates the set without copying, which is safe ONLY under a
          // load-bearing contract that every internal listener must honour:
          //   1. A listener must not run user code synchronously (a poll waiter only
          //      resolves a Promise; an epoll registration only re-lists +
          //      re-notifies; the epoll callback only schedules a tick). User code
          //      runs on a later tick, never inside this loop.
          //   2. A listener may delete entries only from ITS OWN waiter, never from
          //      a sibling node's set that may be mid-iteration. (Deleting an entry
          //      of the set being iterated here is fine - a Set tolerates removal of
          //      a not-yet-visited entry mid-iteration; mutating a *different* node's
          //      set is fine because that set is not being iterated.)
          // Violating either gives silently skipped wakeups that are near-impossible
          // to reproduce. Any new producer/listener must preserve it.
          if (!this.listeners) return;
          // Fire every non-exclusive listener. Among EPOLLEXCLUSIVE registrations
          // (one fd watched by several epolls) wake only one, rotating round-robin
          // per node, to avoid a thundering herd. (Only epoll registrations are ever
          // exclusive; poll waiters and a node's own consumers are not.)
          var excl;
          for (var entry of this.listeners) {
            if (entry.exclusive) (excl ||= []).push(entry);
            else entry.cb(flags);
          }
          if (excl) {
            var i = (this.exclTurn || 0) % excl.length;
            this.exclTurn = i + 1;
            excl[i].cb(flags);
          }
        }
      },
  lookupPath(path, opts = {}) {
        if (!path) {
          throw new FS.ErrnoError(44);
        }
        opts.follow_mount ??= true
  
        if (!PATH.isAbs(path)) {
          path = FS.cwd() + '/' + path;
        }
  
        // limit max consecutive symlinks to SYMLOOP_MAX.
        linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
          // split the absolute path
          var parts = path.split('/').filter((p) => !!p);
  
          // start at the root
          var current = FS.root;
          var current_path = '/';
  
          for (var i = 0; i < parts.length; i++) {
            var islast = (i === parts.length-1);
            if (islast && opts.parent) {
              // stop resolving
              break;
            }
  
            if (parts[i] === '.') {
              continue;
            }
  
            if (parts[i] === '..') {
              current_path = PATH.dirname(current_path);
              if (FS.isRoot(current)) {
                path = current_path + '/' + parts.slice(i + 1).join('/');
                // We're making progress here, don't let many consecutive ..'s
                // lead to ELOOP
                nlinks--;
                continue linkloop;
              } else {
                current = current.parent;
              }
              continue;
            }
  
            current_path = PATH.join2(current_path, parts[i]);
            try {
              current = FS.lookupNode(current, parts[i]);
            } catch (e) {
              // if noent_okay is true, suppress a ENOENT in the last component
              // and return an object with an undefined node. This is needed for
              // resolving symlinks in the path when creating a file.
              if ((e?.errno === 44) && islast && opts.noent_okay) {
                return { path: current_path };
              }
              throw e;
            }
  
            // jump to the mount's root node if this is a mountpoint
            if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
              current = current.mounted.root;
            }
  
            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (FS.isLink(current.mode) && (!islast || opts.follow)) {
              if (!current.node_ops.readlink) {
                throw new FS.ErrnoError(52);
              }
              var link = current.node_ops.readlink(current);
              if (!PATH.isAbs(link)) {
                link = PATH.dirname(current_path) + '/' + link;
              }
              path = link + '/' + parts.slice(i + 1).join('/');
              continue linkloop;
            }
          }
          return { path: current_path, node: current };
        }
        throw new FS.ErrnoError(32);
      },
  getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
  hashName(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
  hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
  hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
  lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
  createNode(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },
  destroyNode(node) {
        FS.hashRemoveNode(node);
      },
  isRoot(node) {
        return node === node.parent;
      },
  isMountpoint(node) {
        return !!node.mounted;
      },
  isFile(mode) {
        return (mode & 61440) === 32768;
      },
  isDir(mode) {
        return (mode & 61440) === 16384;
      },
  isLink(mode) {
        return (mode & 61440) === 40960;
      },
  isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
  isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
  isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
  isSocket(mode) {
        return (mode & 49152) === 49152;
      },
  flagsToPermissionString(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },
  nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        }
        if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        }
        if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
  mayLookup(dir) {
        if (!FS.isDir(dir.mode)) return 54;
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
  mayCreate(dir, name) {
        if (!FS.isDir(dir.mode)) {
          return 54;
        }
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },
  mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else if (FS.isDir(node.mode)) {
          return 31;
        }
        return 0;
      },
  mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        }
        var mode = FS.flagsToPermissionString(flags);
        if (FS.isDir(node.mode)) {
          // opening for write
          // TODO: check for O_SEARCH? (== search for dir only)
          if (mode !== 'r' || (flags & (512 | 64))) {
            return 31;
          }
        }
        return FS.nodePermissions(node, mode);
      },
  checkOpExists(op, err) {
        if (!op) {
          throw new FS.ErrnoError(err);
        }
        return op;
      },
  MAX_OPEN_FDS:4096,
  nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
  getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
  getStream:(fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
  
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
  closeStream(fd) {
        FS.streams[fd] = null;
      },
  dupStream(origStream, fd = -1) {
        var stream = FS.createStream(origStream, fd);
        stream.stream_ops?.dup?.(stream);
        return stream;
      },
  doSetAttr(stream, node, attr) {
        var setattr = stream?.stream_ops.setattr;
        var arg = setattr ? stream : node;
        setattr ??= node.node_ops.setattr;
        FS.checkOpExists(setattr, 63)
        try {
          setattr(arg, attr);
        } catch (e) {
          if (e instanceof RangeError) {
            throw new FS.ErrnoError(22);
          }
          throw e;
        }
      },
  chrdev_stream_ops:{
  open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          stream.stream_ops.open?.(stream);
        },
  llseek() {
          throw new FS.ErrnoError(70);
        },
  },
  major:(dev) => ((dev) >> 8),
  minor:(dev) => ((dev) & 0xff),
  makedev:(ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
  getDevice:(dev) => FS.devices[dev],
  getMounts(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push(...m.mounts);
        }
  
        return mounts;
      },
  syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        for (var mount of mounts) {
          if (mount.type.syncfs) {
            mount.type.syncfs(mount, populate, done);
          } else {
            done(null);
          }
        }
      },
  mount(type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },
  unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        for (var [hash, current] of Object.entries(FS.nameTable)) {
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        }
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },
  lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
  mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name) {
          throw new FS.ErrnoError(28);
        }
        if (name === '.' || name === '..') {
          throw new FS.ErrnoError(20);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
  statfs(path) {
        return FS.statfsNode(FS.lookupPath(path, {follow: true}).node);
      },
  statfsStream(stream) {
        // We keep a separate statfsStream function because noderawfs overrides
        // it. In noderawfs, stream.node is sometimes null. Instead, we need to
        // look at stream.path.
        return FS.statfsNode(stream.node);
      },
  statfsNode(node) {
        // NOTE: None of the defaults here are true. We're just returning safe and
        //       sane values. Currently nodefs and rawfs replace these defaults,
        //       other file systems leave them alone.
        var rtn = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: FS.nextInode,
          ffree: FS.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255,
        };
  
        if (node.node_ops.statfs) {
          Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
        }
        return rtn;
      },
  create(path, mode = 0o666) {
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
  mkdir(path, mode = 0o777) {
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
  mkdirTree(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var dir of dirs) {
          if (!dir) continue;
          if (d || PATH.isAbs(path)) d += '/';
          d += dir;
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },
  mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 0o666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
  symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
  link(oldpath, newpath, flags) {
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // Hardlinks are only supported by filesystem backends that provide a
        // `link` node op (e.g. NODERAWFS backed by the host). NODEFS omits it:
        // a host hardlink cannot be confined to the mount root.
        if (!parent.node_ops.link) {
          throw new FS.ErrnoError(34);
        }
        return parent.node_ops.link(parent, newname, oldpath, flags);
      },
  rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existent directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
          // update old node (we do this here to avoid each backend
          // needing to)
          old_node.parent = new_dir;
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
  rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
  readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
        return readdir(node);
      },
  unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
  readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return link.node_ops.readlink(link);
      },
  stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
        return getattr(node);
      },
  fstat(fd) {
        var stream = FS.getStreamChecked(fd);
        var node = stream.node;
        var getattr = stream.stream_ops.getattr;
        var arg = getattr ? stream : node;
        getattr ??= node.node_ops.getattr;
        FS.checkOpExists(getattr, 63)
        return getattr(arg);
      },
  lstat(path) {
        return FS.stat(path, true);
      },
  doChmod(stream, node, mode, dontFollow) {
        FS.doSetAttr(stream, node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          ctime: Date.now(),
          dontFollow
        });
      },
  chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChmod(null, node, mode, dontFollow);
      },
  lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
  fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.doChmod(stream, stream.node, mode, false);
      },
  doChown(stream, node, dontFollow) {
        FS.doSetAttr(stream, node, {
          timestamp: Date.now(),
          dontFollow
          // we ignore the uid / gid for now
        });
      },
  chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChown(null, node, dontFollow);
      },
  lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
  fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.doChown(stream, stream.node, false);
      },
  doTruncate(stream, node, len) {
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.doSetAttr(stream, node, {
          size: len,
          timestamp: Date.now()
        });
      },
  truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doTruncate(null, node, len);
      },
  ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if (len < 0 || (stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.doTruncate(stream, stream.node, len);
      },
  utime(path, atime, mtime, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        FS.doSetAttr(null, lookup.node, {
          atime: atime,
          mtime: mtime,
          dontFollow
        });
      },
  open(path, flags, mode = 0o666) {
        if (path === '') {
          throw new FS.ErrnoError(44);
        }
        flags = FS_modeStringToFlags(flags);
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        var isDirPath;
        if (typeof path == 'object') {
          node = path;
        } else {
          isDirPath = path.endsWith('/');
          // noent_okay makes it so that if the final component of the path
          // doesn't exist, lookupPath returns `node: undefined`. `path` will be
          // updated to point to the target of all symlinks.
          var lookup = FS.lookupPath(path, {
            follow: !(flags & 131072),
            noent_okay: true
          });
          node = lookup.node;
          path = lookup.path;
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else if (isDirPath) {
            throw new FS.ErrnoError(31);
          } else {
            // node doesn't exist, try to create it
            // Ignore the permission bits here to ensure we can `open` this new
            // file below. We use chmod below to apply the permissions once the
            // file is open.
            node = FS.mknod(path, mode | 0o777, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (created) {
          FS.chmod(node, mode & 0o777);
        }
        return stream;
      },
  close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        // The fd is going away: wake anything waiting on it (poll/epoll) with
        // POLLNVAL so a blocking wait unblocks and an epoll registration is evicted
        // on its next derive. Only sockets/pipes/epoll ever carry a wait-queue, so
        // for every other stream (incl. nodeless noderawfs stdio) this is a no-op.
        stream.node?.notifyListeners(32);
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
  isClosed(stream) {
        return stream.fd === null;
      },
  llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
  read(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
  write(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
  mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2)
            && !(flags & 2)
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        if (!length) {
          throw new FS.ErrnoError(28);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
  msync(stream, buffer, offset, length, mmapFlags) {
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
  ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
  readFile(path, opts = {}) {
        opts.flags = opts.flags ?? 0;
        opts.encoding = opts.encoding ?? 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          abort(`Invalid encoding type "${opts.encoding}"`);
        }
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          buf = UTF8ArrayToString(buf);
        }
        FS.close(stream);
        return buf;
      },
  writeFile(path, data, opts = {}) {
        opts.flags = opts.flags ?? 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        data = FS_fileDataToTypedArray(data);
        FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        FS.close(stream);
      },
  cwd:() => FS.currentPath,
  chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
  createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
  createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
          llseek: () => 0,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (!randomLeft) {
            randomFill(randomBuffer);
            randomLeft = randomBuffer.byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
  createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, 'fd', 16895, 73);
            node.stream_ops = {
              llseek: MEMFS.stream_ops.llseek,
            };
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                  id: fd + 1,
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              },
              readdir() {
                return Array.from(FS.streams.entries())
                  .filter(([k, v]) => v)
                  .map(([k, v]) => k.toString());
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },
  createStandardStreams(input, output, error) {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (input) {
          FS.createDevice('/dev', 'stdin', input);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (output) {
          FS.createDevice('/dev', 'stdout', null, output);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (error) {
          FS.createDevice('/dev', 'stderr', null, error);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
      },
  staticInit() {
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
          'IDBFS': IDBFS,
        };
      },
  init(input, output, error) {
        FS.initialized = true;
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        input ??= Module['stdin'];
        output ??= Module['stdout'];
        error ??= Module['stderr'];
  
        FS.createStandardStreams(input, output, error);
      },
  quit() {
        FS.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        // close all of our streams
        for (var stream of FS.streams) {
          if (stream) {
            FS.close(stream);
          }
        }
      },
  findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
  analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },
  createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            if (e.errno != 20) throw e;
          }
          parent = current;
        }
        return current;
      },
  createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          data = FS_fileDataToTypedArray(data);
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
  createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        FS.createDevice.major ??= 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            // flush any pending line data
            if (output?.buffer?.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && !bytesRead) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.atime = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.mtime = stream.node.ctime = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
  forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (globalThis.XMLHttpRequest) {
          abort('Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.');
        } else { // Command-line.
          try {
            obj.contents = readBinary(obj.url);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
      },
  createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array).
        // Actual getting is abstracted away for eventual reuse.
        class LazyUint8Array {
          lengthKnown = false;
          chunks = []; // Loaded chunks. Index is the chunk number
          get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = (idx / this.chunkSize)|0;
            return this.getter(chunkNum)[chunkOffset];
          }
          setDataGetter(getter) {
            this.getter = getter;
          }
          cacheLength() {
            // Find length
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) abort(`Couldn't load ${url}. Status: ${xhr.status}`);
            var datalength = Number(xhr.getResponseHeader('Content-length'));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader('Accept-Ranges')) && header === 'bytes';
            var usesGzip = (header = xhr.getResponseHeader('Content-Encoding')) && header === 'gzip';
  
            var chunkSize = 1024*1024; // Chunk size in bytes
  
            if (!hasByteServing) chunkSize = datalength;
  
            // Function to get a range from the remote URL.
            var doXHR = (from, to) => {
              if (from > to) abort(`invalid range (${from}, ${to}) or no bytes requested!`);
              if (to > datalength-1) abort(`only ${datalength} bytes available! programmer error!`);
  
              // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              if (datalength !== chunkSize) xhr.setRequestHeader('Range', `bytes=${from}-${to}`);
  
              // Some hints to the browser that we want binary data.
              xhr.responseType = 'arraybuffer';
              if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              }
  
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) abort(`Couldn't load ${url}. Status: ${xhr.status}`);
              if (xhr.response !== undefined) {
                return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
              }
              return intArrayFromString(xhr.responseText ?? '', true);
            };
            var lazyArray = this;
            lazyArray.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum+1) * chunkSize - 1; // including this byte
              end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') abort('doXHR failed!');
              return lazyArray.chunks[chunkNum];
            });
  
            if (usesGzip || !datalength) {
              // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
              chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out('LazyFiles on gzip forces download of the whole file when length is accessed');
            }
  
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          }
          get length() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }
          get chunkSize() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
  
        if (globalThis.XMLHttpRequest) {
          if (!ENVIRONMENT_IS_WORKER) abort('Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc');
          var lazyArray = new LazyUint8Array();
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        for (const [key, fn] of Object.entries(node.stream_ops)) {
          stream_ops[key] = (...args) => {
            FS.forceLoadFile(node);
            return fn(...args);
          };
        }
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
  };
  
  
  
  /** @type {!Int32Array} */
  var HEAP32;
  
  
  /** not-@type {!BigInt64Array} */
  var HEAP64;
  var SYSCALLS = {
  currentUmask:18,
  calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return dir + '/' + path;
      },
  writeStat(buf, stat) {
        HEAPU32[((buf)>>2)] = stat.dev;
        HEAPU32[(((buf)+(4))>>2)] = stat.mode;
        HEAPU32[(((buf)+(8))>>2)] = stat.nlink;
        HEAPU32[(((buf)+(12))>>2)] = stat.uid;
        HEAPU32[(((buf)+(16))>>2)] = stat.gid;
        HEAPU32[(((buf)+(20))>>2)] = stat.rdev;
        HEAP64[(((buf)+(24))>>3)] = BigInt(stat.size);
        HEAP32[(((buf)+(32))>>2)] = 4096;
        HEAP32[(((buf)+(36))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        HEAP64[(((buf)+(40))>>3)] = BigInt(Math.floor(atime / 1000));
        HEAPU32[(((buf)+(48))>>2)] = (atime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(56))>>3)] = BigInt(Math.floor(mtime / 1000));
        HEAPU32[(((buf)+(64))>>2)] = (mtime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(72))>>3)] = BigInt(Math.floor(ctime / 1000));
        HEAPU32[(((buf)+(80))>>2)] = (ctime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(88))>>3)] = BigInt(stat.ino);
        return 0;
      },
  writeStatFs(buf, stats) {
        HEAPU32[(((buf)+(4))>>2)] = stats.bsize;
        HEAPU32[(((buf)+(60))>>2)] = stats.bsize;
        HEAP64[(((buf)+(8))>>3)] = BigInt(stats.blocks);
        HEAP64[(((buf)+(16))>>3)] = BigInt(stats.bfree);
        HEAP64[(((buf)+(24))>>3)] = BigInt(stats.bavail);
        HEAP64[(((buf)+(32))>>3)] = BigInt(stats.files);
        HEAP64[(((buf)+(40))>>3)] = BigInt(stats.ffree);
        HEAPU32[(((buf)+(48))>>2)] = stats.fsid;
        HEAPU32[(((buf)+(64))>>2)] = stats.flags;  // ST_NOSUID
        HEAPU32[(((buf)+(56))>>2)] = stats.namelen;
      },
  doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.subarray(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
  getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  function ___syscall_chdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.chdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_faccessat(dirfd, path, amode, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (amode & ~7) {
        // need a valid mode
        return -28;
      }
      var lookup = FS.lookupPath(path, { follow: true });
      var node = lookup.node;
      if (!node) {
        return -44;
      }
      var perms = '';
      if (amode & 4) perms += 'r';
      if (amode & 2) perms += 'w';
      if (amode & 1) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        return -2;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  var syscallGetVarargI = () => {
      // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
      var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
      SYSCALLS.varargs += 4;
      return ret;
    };
  var syscallGetVarargP = syscallGetVarargI;
  
  
  
  /** @type {!Int16Array} */
  var HEAP16;
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = syscallGetVarargI();
          if (arg < 0) {
            return -28;
          }
          while (FS.streams[arg]) {
            arg++;
          }
          var newStream;
          newStream = FS.dupStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = syscallGetVarargI();
          var mask = 289792;
          stream.flags = (stream.flags & ~mask) | (arg & mask);
          return 0;
        }
        case 12: {
          var arg = syscallGetVarargP();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
          // Pretend that the locking is successful. These are process-level locks,
          // and Emscripten programs are a single process. If we supported linking a
          // filesystem between programs, we'd need to do more here.
          // See https://github.com/emscripten-core/emscripten/issues/23697
          return 0;
      }
      return -28;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  
  
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  function ___syscall_getcwd(buf, size) {
  try {
  
      if (!size) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
      if (size < cwdLengthInBytes) return -68;
      stringToUTF8(cwd, buf, size);
      return cwdLengthInBytes;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  
  
  
  
  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21505: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcgets) {
            var termios = stream.tty.ops.ioctl_tcgets(stream);
            var argp = syscallGetVarargP();
            HEAP32[((argp)>>2)] = termios.c_iflag || 0;
            HEAP32[(((argp)+(4))>>2)] = termios.c_oflag || 0;
            HEAP32[(((argp)+(8))>>2)] = termios.c_cflag || 0;
            HEAP32[(((argp)+(12))>>2)] = termios.c_lflag || 0;
            for (var i = 0; i < 32; i++) {
              HEAP8[(argp + i)+(17)] = termios.c_cc[i] || 0;
            }
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcsets) {
            var argp = syscallGetVarargP();
            var c_iflag = HEAP32[((argp)>>2)];
            var c_oflag = HEAP32[(((argp)+(4))>>2)];
            var c_cflag = HEAP32[(((argp)+(8))>>2)];
            var c_lflag = HEAP32[(((argp)+(12))>>2)];
            var c_cc = []
            for (var i = 0; i < 32; i++) {
              c_cc.push(HEAP8[(argp + i)+(17)]);
            }
            return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
          }
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = syscallGetVarargP();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21537:
        case 21531: {
          var argp = syscallGetVarargP();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tiocgwinsz) {
            var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
            var argp = syscallGetVarargP();
            HEAP16[((argp)>>1)] = winsize[0];
            HEAP16[(((argp)+(2))>>1)] = winsize[1];
          }
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        case 21515: {
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  
  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? syscallGetVarargI() : 0;
      if (flags & 64) {
        mode &= ~SYSCALLS.currentUmask;
      }
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_rmdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_unlinkat(dirfd, path, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (!flags) {
        FS.unlink(path);
      } else if (flags === 512) {
        FS.rmdir(path);
      } else {
        return -28;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  var __abort_js = () =>
      abort('');

  var isLeapYear = (year) => year%4 === 0 && (year%100 !== 0 || year%400 === 0);
  
  var MONTH_DAYS_LEAP_CUMULATIVE = [0,31,60,91,121,152,182,213,244,274,305,335];
  
  var MONTH_DAYS_REGULAR_CUMULATIVE = [0,31,59,90,120,151,181,212,243,273,304,334];
  var ydayFromDate = (date) => {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1; // -1 since it's days since Jan 1
  
      return yday;
    };
  
  var INT53_MAX = 9007199254740992;
  
  var INT53_MIN = -9007199254740992;
  var bigintToI53Checked = (num) => (num < INT53_MIN || num > INT53_MAX) ? NaN : Number(num);
  
  function __localtime_js(time, tmPtr) {
    time = bigintToI53Checked(time);
  
  
      var date = new Date(time*1000);
      if (isNaN(date.getTime())) {
        return 1;
      }
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
      return 0;
    ;
  }

  
  
  var __tzset_js = (timezone, daylight, std_name, dst_name) => {
      // TODO: Use (malleable) environment variables instead of system settings.
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for
      // daylight savings.  This code uses the fact that getTimezoneOffset returns
      // a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it
      // compares whether the output of the given date the same (Standard) or less
      // (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      var extractZone = (timezoneOffset) => {
        // Why inverse sign?
        // Read here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
        var sign = timezoneOffset >= 0 ? '-' : '+';
  
        var absOffset = Math.abs(timezoneOffset)
        var hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
        var minutes = String(absOffset % 60).padStart(2, '0');
  
        return `UTC${sign}${hours}${minutes}`;
      }
  
      var winterName = extractZone(winterOffset);
      var summerName = extractZone(summerOffset);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };

  var _emscripten_get_now = () => performance.now();
  
  var _emscripten_date_now = () => Date.now();
  
  var nowIsMonotonic = 1;
  
  var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
  
  
  function _clock_time_get(clk_id, ignored_precision, ptime) {
    ignored_precision = bigintToI53Checked(ignored_precision);
  
  
      if (!checkWasiClock(clk_id)) {
        return 28;
      }
      var now;
      // all wasi clocks but realtime are monotonic
      if (clk_id === 0) {
        now = _emscripten_date_now();
      } else if (nowIsMonotonic) {
        now = _emscripten_get_now();
      } else {
        return 52;
      }
      // "now" is in ms, and wasi times are in ns.
      var nsec = Math.round(now * 1000 * 1000);
      HEAP64[((ptime)>>3)] = BigInt(nsec);
      return 0;
    ;
  }

  var readEmAsmArgsArray = [];
  
  
  
  
  /** @type {!Float64Array} */
  var HEAPF64;
  
  var readEmAsmArgs = (sigPtr, buf) => {
      readEmAsmArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      while (ch = HEAPU8[sigPtr++]) {
        // Floats are always passed as doubles, so all types except for 'i'
        // are 8 bytes and require alignment.
        var wide = (ch != 105);
        wide &= (ch != 112);
        buf += wide && (buf % 8) ? 4 : 0;
        readEmAsmArgsArray.push(
          // Special case for pointers under wasm64 or CAN_ADDRESS_2GB mode.
          ch == 112 ? HEAPU32[((buf)>>2)] :
          ch == 106 ? HEAP64[((buf)>>3)] :
          ch == 105 ?
            HEAP32[((buf)>>2)] :
            HEAPF64[((buf)>>3)]
        );
        buf += wide ? 8 : 4;
      }
      return readEmAsmArgsArray;
    };
  var runEmAsmFunction = (code, sigPtr, argbuf) => {
      var args = readEmAsmArgs(sigPtr, argbuf);
      return ASM_CONSTS[code](...args);
    };
  var _emscripten_asm_const_double = (code, sigPtr, argbuf) => {
      return runEmAsmFunction(code, sigPtr, argbuf);
    };

  var _emscripten_asm_const_int = (code, sigPtr, argbuf) => {
      return runEmAsmFunction(code, sigPtr, argbuf);
    };


  var maybeCStringToJsString = (cString) => {
      // 'cString > 2' checks if the input is a number, and isn't of the special
      // values we accept here, EMSCRIPTEN_EVENT_TARGET_* (which map to 0, 1, 2).
      // In other words, if cString > 2 then it's a pointer to a valid place in
      // memory, and points to a C string.
      return cString > 2 ? UTF8ToString(cString) : cString;
    };
  
  /** @type {Object} */
  var specialHTMLTargets = [0, globalThis.document ?? 0, globalThis.window ?? 0];
  var findEventTarget = (target) => {
      target = maybeCStringToJsString(target);
      var domElement = specialHTMLTargets[target] || globalThis.document?.querySelector(target);
      return domElement;
    };
  
  var getBoundingClientRect = (e) => specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {'left':0,'top':0};
  
  var _emscripten_get_element_css_size = (target, width, height) => {
      target = findEventTarget(target);
      if (!target) return -4;
  
      var rect = getBoundingClientRect(target);
      HEAPF64[((width)>>3)] = rect.width;
      HEAPF64[((height)>>3)] = rect.height;
  
      return 0;
    };

  var onExits = [];
  var addOnExit = (cb) => onExits.push(cb);
  var JSEvents = {
  removeAllEventListeners() {
        while (JSEvents.eventHandlers.length) {
          JSEvents._removeHandler(JSEvents.eventHandlers.length - 1);
        }
        JSEvents.deferredCalls = [];
      },
  inEventHandler:0,
  deferredCalls:[],
  deferCall(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
          if (arrA.length != arrB.length) return false;
  
          for (var i = 0; i < arrA.length; i++) {
            if (arrA[i] != arrB[i]) return false;
          }
          return true;
        }
        // Test if the given call was already queued, and if so, don't add it again.
        for (var call of JSEvents.deferredCalls) {
          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
            return;
          }
        }
        JSEvents.deferredCalls.push({
          targetFunction,
          precedence,
          argsList
        });
  
        JSEvents.deferredCalls.sort((x,y) => x.precedence - y.precedence);
      },
  removeDeferredCalls(targetFunction) {
        JSEvents.deferredCalls = JSEvents.deferredCalls.filter((call) => call.targetFunction != targetFunction);
      },
  canPerformEventHandlerRequests() {
        // Browsers that support navigator.userActivation.isActive: https://developer.mozilla.org/en-US/docs/Web/API/UserActivation/isActive
        if (navigator.userActivation) {
          // Verify against transient activation status from UserActivation API
          // whether it is possible to perform a request here without needing to defer. See
          // https://developer.mozilla.org/en-US/docs/Web/Security/User_activation#transient_activation
          // and https://caniuse.com/mdn-api_useractivation
          return navigator.userActivation.isActive;
        }
  
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
      },
  runDeferredCalls() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
          return;
        }
        var deferredCalls = JSEvents.deferredCalls;
        JSEvents.deferredCalls = [];
        for (var call of deferredCalls) {
          call.targetFunction(...call.argsList);
        }
      },
  eventHandlers:[],
  removeAllHandlersOnTarget:(target, eventTypeString) => {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
          if (JSEvents.eventHandlers[i].target == target &&
            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
             JSEvents._removeHandler(i--);
           }
        }
      },
  _removeHandler(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1);
      },
  registerOrRemoveHandler(eventHandler) {
        if (!eventHandler.target) {
          return -4;
        }
        if (eventHandler.callbackfunc) {
          eventHandler.eventListenerFunc = function(event) {
            // Increment nesting count for the event handler.
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            // Process any old deferred calls the user has placed.
            JSEvents.runDeferredCalls();
            // Process the actual event, calls back to user C code handler.
            eventHandler.handlerFunc(event);
            // Process any new deferred calls that were placed right now from this event handler.
            JSEvents.runDeferredCalls();
            // Out of event handler - restore nesting count.
            --JSEvents.inEventHandler;
          };
  
          eventHandler.target.addEventListener(eventHandler.eventTypeString,
                                               eventHandler.eventListenerFunc,
                                               eventHandler.useCapture);
          JSEvents.eventHandlers.push(eventHandler);
        } else {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == eventHandler.target
             && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
               JSEvents._removeHandler(i--);
             }
          }
        }
        return 0;
      },
  removeSingleHandler(eventHandler) {
        let success = false;
        for (let i = 0; i < JSEvents.eventHandlers.length; ++i) {
          const handler = JSEvents.eventHandlers[i];
          if (handler.target === eventHandler.target
            && handler.eventTypeId === eventHandler.eventTypeId
            && handler.callbackfunc === eventHandler.callbackfunc
            && handler.userData === eventHandler.userData) {
            // in some very rare cases (ex: Safari / fullscreen events), there is more than 1 handler (eventTypeString is different)
            JSEvents._removeHandler(i--);
            success = true;
          }
        }
        return success ? 0 : -5;
      },
  getNodeNameForTarget(target) {
        if (target == window) return '#window';
        if (target == screen) return '#screen';
        return target?.nodeName ?? '';
      },
  fullscreenEnabled() {
        return document.fullscreenEnabled
        // Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitFullscreenEnabled.
        // TODO: If Safari at some point ships with unprefixed version, update the version check above.
        ?? document.webkitFullscreenEnabled
         ;
      },
  };
  
  
  
  
  var fillGamepadEventData = (eventStruct, e) => {
      HEAPF64[((eventStruct)>>3)] = e.timestamp;
      for (var i = 0; i < e.axes.length; ++i) {
        HEAPF64[(((eventStruct+i*8)+(16))>>3)] = e.axes[i];
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        HEAP8[(eventStruct+i)+(1040)] = e.buttons[i].pressed;
        HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i].value;
      }
      HEAP8[(eventStruct)+(1104)] = e.connected;
      HEAP32[(((eventStruct)+(1108))>>2)] = e.index;
      HEAP32[(((eventStruct)+(8))>>2)] = e.axes.length;
      HEAP32[(((eventStruct)+(12))>>2)] = e.buttons.length;
      stringToUTF8(e.id, eventStruct + 1112, 64);
      stringToUTF8(e.mapping, eventStruct + 1176, 64);
    };
  var _emscripten_get_gamepad_status = (index, gamepadState) => {
      // INVALID_PARAM is returned on a Gamepad index that never was there.
      if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
  
      // NO_DATA is returned on a Gamepad index that was removed.
      // For previously disconnected gamepads there should be an empty slot (null/undefined/false) at the index.
      // This is because gamepads must keep their original position in the array.
      // For example, removing the first of two gamepads produces [null/undefined/false, gamepad].
      if (!JSEvents.lastGamepadState[index]) return -7;
  
      fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
      return 0;
    };


  var _emscripten_get_num_gamepads = () => {
      // N.B. Do not call emscripten_get_num_gamepads() unless having first called emscripten_sample_gamepad_data(), and that has returned EMSCRIPTEN_RESULT_SUCCESS.
      // Otherwise the following line will throw an exception.
      return JSEvents.lastGamepadState.length;
    };

  var GLctx;
  
  var webgl_enable_ANGLE_instanced_arrays = (ctx) => {
      // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('ANGLE_instanced_arrays');
      // Because this extension is a core function in WebGL 2, assign the extension entry points in place of
      // where the core functions will reside in WebGL 2. This way the calling code can call these without
      // having to dynamically branch depending if running against WebGL 1 or WebGL 2.
      if (ext) {
        ctx['vertexAttribDivisor'] = (index, divisor) => ext['vertexAttribDivisorANGLE'](index, divisor);
        ctx['drawArraysInstanced'] = (mode, first, count, primcount) => ext['drawArraysInstancedANGLE'](mode, first, count, primcount);
        ctx['drawElementsInstanced'] = (mode, count, type, indices, primcount) => ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount);
        return 1;
      }
    };
  
  var webgl_enable_OES_vertex_array_object = (ctx) => {
      // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('OES_vertex_array_object');
      if (ext) {
        ctx['createVertexArray'] = () => ext['createVertexArrayOES']();
        ctx['deleteVertexArray'] = (vao) => ext['deleteVertexArrayOES'](vao);
        ctx['bindVertexArray'] = (vao) => ext['bindVertexArrayOES'](vao);
        ctx['isVertexArray'] = (vao) => ext['isVertexArrayOES'](vao);
        return 1;
      }
    };
  
  var webgl_enable_WEBGL_draw_buffers = (ctx) => {
      // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('WEBGL_draw_buffers');
      if (ext) {
        ctx['drawBuffers'] = (n, bufs) => ext['drawBuffersWEBGL'](n, bufs);
        return 1;
      }
    };
  
  var webgl_enable_EXT_polygon_offset_clamp = (ctx) =>
      !!(ctx.extPolygonOffsetClamp = ctx.getExtension('EXT_polygon_offset_clamp'));
  
  var webgl_enable_EXT_clip_control = (ctx) =>
      !!(ctx.extClipControl = ctx.getExtension('EXT_clip_control'));
  
  var webgl_enable_WEBGL_polygon_mode = (ctx) =>
      !!(ctx.webglPolygonMode = ctx.getExtension('WEBGL_polygon_mode'));
  
  var webgl_enable_WEBGL_multi_draw = (ctx) =>
      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
      !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
  
  var getEmscriptenSupportedExtensions = (ctx) => {
      // Restrict the list of advertised extensions to those that we actually
      // support.
      var supportedExtensions = [
        // WebGL 1 extensions
        'ANGLE_instanced_arrays',
        'EXT_blend_minmax',
        'EXT_disjoint_timer_query',
        'EXT_frag_depth',
        'EXT_shader_texture_lod',
        'EXT_sRGB',
        'OES_element_index_uint',
        'OES_fbo_render_mipmap',
        'OES_standard_derivatives',
        'OES_texture_float',
        'OES_texture_half_float',
        'OES_texture_half_float_linear',
        'OES_vertex_array_object',
        'WEBGL_color_buffer_float',
        'WEBGL_depth_texture',
        'WEBGL_draw_buffers',
        // WebGL 1 and WebGL 2 extensions
        'EXT_clip_control',
        'EXT_color_buffer_half_float',
        'EXT_depth_clamp',
        'EXT_float_blend',
        'EXT_polygon_offset_clamp',
        'EXT_texture_compression_bptc',
        'EXT_texture_compression_rgtc',
        'EXT_texture_filter_anisotropic',
        'KHR_parallel_shader_compile',
        'OES_texture_float_linear',
        'WEBGL_blend_func_extended',
        'WEBGL_compressed_texture_astc',
        'WEBGL_compressed_texture_etc',
        'WEBGL_compressed_texture_etc1',
        'WEBGL_compressed_texture_s3tc',
        'WEBGL_compressed_texture_s3tc_srgb',
        'WEBGL_debug_renderer_info',
        'WEBGL_debug_shaders',
        'WEBGL_lose_context',
        'WEBGL_multi_draw',
        'WEBGL_polygon_mode'
      ];
      // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
      return ctx.getSupportedExtensions()?.filter(ext => supportedExtensions.includes(ext)) ?? [];
    };
  
  
  
  
  var GL = {
  counter:1,
  buffers:[],
  programs:[],
  framebuffers:[],
  renderbuffers:[],
  textures:[],
  shaders:[],
  vaos:[],
  contexts:[],
  offscreenCanvases:{
  },
  queries:[],
  stringCache:{
  },
  unpackAlignment:4,
  unpackRowLength:0,
  recordError:(errorCode) => {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },
  getNewId:(table) => {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },
  genObject:(n, buffers, createFunction, objectTable
        ) => {
        for (var i = 0; i < n; i++) {
          var buffer = GLctx[createFunction]();
          var id = buffer && GL.getNewId(objectTable);
          if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer;
          } else {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          }
          HEAP32[(((buffers)+(i*4))>>2)] = id;
        }
      },
  getSource:(shader, count, string, length) => {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAPU32[(((length)+(i*4))>>2)] : undefined;
          source += UTF8ToString(HEAPU32[(((string)+(i*4))>>2)], len);
        }
        return source;
      },
  createContext:(/** @type {HTMLCanvasElement} */ canvas, webGLContextAttributes) => {
  
        // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL
        // context on a canvas, calling .getContext() will always return that
        // context independent of which 'webgl' or 'webgl2'
        // context version was passed. See:
        //   https://webkit.org/b/222758
        // and:
        //   https://github.com/emscripten-core/emscripten/issues/13295.
        // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari
        // version field in above check.
        if (!canvas.getContextSafariWebGL2Fixed) {
          canvas.getContextSafariWebGL2Fixed = canvas.getContext;
          /** @type {function(this:HTMLCanvasElement, string, (Object|null)=): (Object|null)} */
          function fixedGetContext(ver, attrs) {
            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
            return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
          }
          canvas.getContext = fixedGetContext;
        }
  
        var ctx =
          canvas.getContext('webgl', webGLContextAttributes);
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
        return handle;
      },
  registerContext:(ctx, webGLContextAttributes) => {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
        // Store the created context object so that we can access the context
        // given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
        return handle;
      },
  makeContextCurrent:(contextHandle) => {
  
        // Active Emscripten GL layer context object.
        GL.currentContext = GL.contexts[contextHandle];
        // Active WebGL context object.
        Module['ctx'] = GLctx = GL.currentContext?.GLctx;
        return !(contextHandle && !GLctx);
      },
  getContext:(contextHandle) => {
        return GL.contexts[contextHandle];
      },
  deleteContext:(contextHandle) => {
        if (GL.currentContext === GL.contexts[contextHandle]) {
          GL.currentContext = null;
        }
        if (typeof JSEvents == 'object') {
          // Release all JS event handlers on the DOM element that the GL context is
          // associated with since the context is now deleted.
          JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        }
        // Make sure the canvas object no longer refers to the context object so
        // there are no GC surprises.
        if (GL.contexts[contextHandle]?.GLctx.canvas) {
          GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        }
        GL.contexts[contextHandle] = null;
      },
  initExtensions:(context) => {
        // If this function is called without a specific context object, init the
        // extensions of the currently active context.
        context ||= GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, since the GL interop
        // layer itself will need to know if they exist.
  
        // Extensions that are available in both WebGL 1 and WebGL 2
        webgl_enable_WEBGL_multi_draw(GLctx);
        webgl_enable_EXT_polygon_offset_clamp(GLctx);
        webgl_enable_EXT_clip_control(GLctx);
        webgl_enable_WEBGL_polygon_mode(GLctx);
        // Extensions that are only available in WebGL 1 (the calls will be no-ops
        // if called on a WebGL 2 context active)
        webgl_enable_ANGLE_instanced_arrays(GLctx);
        webgl_enable_OES_vertex_array_object(GLctx);
        webgl_enable_WEBGL_draw_buffers(GLctx);
        {
          GLctx.disjointTimerQueryExt = GLctx.getExtension('EXT_disjoint_timer_query');
        }
  
        for (var ext of getEmscriptenSupportedExtensions(GLctx)) {
          // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders
          // are not enabled by default.
          if (!ext.includes('lose_context') && !ext.includes('debug')) {
            // Call .getExtension() to enable that extension permanently.
            GLctx.getExtension(ext);
          }
        }
      },
  };
  var _emscripten_glActiveTexture = (x0) => GLctx.activeTexture(x0);

  var _emscripten_glAttachShader = (program, shader) => {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    };

  var _emscripten_glBeginQueryEXT = (target, id) => {
      GLctx.disjointTimerQueryExt['beginQueryEXT'](target, GL.queries[id]);
    };

  
  var _emscripten_glBindAttribLocation = (program, index, name) => {
      GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
    };

  var _emscripten_glBindBuffer = (target, buffer) => {
  
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    };

  var _emscripten_glBindFramebuffer = (target, framebuffer) => {
  
      GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
  
    };

  var _emscripten_glBindRenderbuffer = (target, renderbuffer) => {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    };

  var _emscripten_glBindTexture = (target, texture) => {
      GLctx.bindTexture(target, GL.textures[texture]);
    };

  
  var _emscripten_glBindVertexArray = (vao) => {
      GLctx.bindVertexArray(GL.vaos[vao]);
    };
  var _glBindVertexArray = _emscripten_glBindVertexArray;
  var _emscripten_glBindVertexArrayOES = _glBindVertexArray;

  var _emscripten_glBlendColor = (x0, x1, x2, x3) => GLctx.blendColor(x0, x1, x2, x3);

  var _emscripten_glBlendEquation = (x0) => GLctx.blendEquation(x0);

  var _emscripten_glBlendEquationSeparate = (x0, x1) => GLctx.blendEquationSeparate(x0, x1);

  var _emscripten_glBlendFunc = (x0, x1) => GLctx.blendFunc(x0, x1);

  var _emscripten_glBlendFuncSeparate = (x0, x1, x2, x3) => GLctx.blendFuncSeparate(x0, x1, x2, x3);

  
  var _emscripten_glBufferData = (target, size, data, usage) => {
  
      // N.b. here first form specifies a heap subarray, second form an integer
      // size, so the ?: code here is polymorphic. It is advised to avoid
      // randomly mixing both uses in calling code, to avoid any potential JS
      // engine JIT issues.
      GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
    };

  
  var webglBufferSubData = (target, offset, size, data, src = HEAPU8) => {
      GLctx.bufferSubData(target, offset, src.subarray(data, data + size));
    };
  
  var _emscripten_glBufferSubData = (target, offset, size, data) => webglBufferSubData(target, offset, size, data);

  var _emscripten_glCheckFramebufferStatus = (x0) => GLctx.checkFramebufferStatus(x0);

  var _emscripten_glClear = (x0) => GLctx.clear(x0);

  var _emscripten_glClearColor = (x0, x1, x2, x3) => GLctx.clearColor(x0, x1, x2, x3);

  var _emscripten_glClearDepthf = (x0) => GLctx.clearDepth(x0);

  var _emscripten_glClearStencil = (x0) => GLctx.clearStencil(x0);

  var _emscripten_glClipControlEXT = (origin, depth) => {
      GLctx.extClipControl['clipControlEXT'](origin, depth);
    };

  var _emscripten_glColorMask = (red, green, blue, alpha) => {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    };

  var _emscripten_glCompileShader = (shader) => {
      GLctx.compileShader(GL.shaders[shader]);
    };

  
  var _emscripten_glCompressedTexImage2D = (target, level, internalFormat, width, height, border, imageSize, data) => {
      // `data` may be null here, which means "allocate uninitialized space but
      // don't upload" in GLES parlance, but `compressedTexImage2D` requires the
      // final data parameter, so we simply pass a heap view starting at zero
      // effectively uploading whatever happens to be near address zero.  See
      // https://github.com/emscripten-core/emscripten/issues/19300.
      GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, HEAPU8.subarray(data, data + imageSize));
    };

  
  var _emscripten_glCompressedTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, imageSize, data) => {
      GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, HEAPU8.subarray(data, data + imageSize));
    };

  var _emscripten_glCopyTexImage2D = (x0, x1, x2, x3, x4, x5, x6, x7) => GLctx.copyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7);

  var _emscripten_glCopyTexSubImage2D = (x0, x1, x2, x3, x4, x5, x6, x7) => GLctx.copyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7);

  var _emscripten_glCreateProgram = () => {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      // Store additional information needed for each shader program:
      program.name = id;
      // Lazy cache results of
      // glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    };

  var _emscripten_glCreateShader = (shaderType) => {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
  
      return id;
    };

  var _emscripten_glCullFace = (x0) => GLctx.cullFace(x0);

  
  var _emscripten_glDeleteBuffers = (n, buffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
  
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
  
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
  
      }
    };

  
  var _emscripten_glDeleteFramebuffers = (n, framebuffers) => {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    };

  var _emscripten_glDeleteProgram = (id) => {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) {
        // glDeleteProgram actually signals an error when deleting a nonexisting
        // object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    };

  
  var _emscripten_glDeleteQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var query = GL.queries[id];
        if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx.disjointTimerQueryExt['deleteQueryEXT'](query);
        GL.queries[id] = null;
      }
    };

  
  var _emscripten_glDeleteRenderbuffers = (n, renderbuffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    };

  var _emscripten_glDeleteShader = (id) => {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) {
        // glDeleteShader actually signals an error when deleting a nonexisting
        // object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    };

  
  var _emscripten_glDeleteTextures = (n, textures) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        // GL spec: "glDeleteTextures silently ignores 0s and names that do not
        // correspond to existing textures".
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    };

  
  
  var _emscripten_glDeleteVertexArrays = (n, vaos) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx.deleteVertexArray(GL.vaos[id]);
        GL.vaos[id] = null;
      }
    };
  var _glDeleteVertexArrays = _emscripten_glDeleteVertexArrays;
  var _emscripten_glDeleteVertexArraysOES = _glDeleteVertexArrays;

  var _emscripten_glDepthFunc = (x0) => GLctx.depthFunc(x0);

  var _emscripten_glDepthMask = (flag) => {
      GLctx.depthMask(!!flag);
    };

  var _emscripten_glDepthRangef = (x0, x1) => GLctx.depthRange(x0, x1);

  var _emscripten_glDetachShader = (program, shader) => {
      GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
    };

  var _emscripten_glDisable = (x0) => GLctx.disable(x0);

  var _emscripten_glDisableVertexAttribArray = (index) => {
      GLctx.disableVertexAttribArray(index);
    };

  var _emscripten_glDrawArrays = (mode, first, count) => {
  
      GLctx.drawArrays(mode, first, count);
  
    };

  
  var _emscripten_glDrawArraysInstanced = (mode, first, count, primcount) => {
      GLctx.drawArraysInstanced(mode, first, count, primcount);
    };
  var _glDrawArraysInstanced = _emscripten_glDrawArraysInstanced;
  var _emscripten_glDrawArraysInstancedANGLE = _glDrawArraysInstanced;

  
  var tempFixedLengthArray = [];
  
  
  var _emscripten_glDrawBuffers = (n, bufs) => {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx.drawBuffers(bufArray);
    };
  var _glDrawBuffers = _emscripten_glDrawBuffers;
  var _emscripten_glDrawBuffersWEBGL = _glDrawBuffers;

  
  var _emscripten_glDrawElements = (mode, count, type, indices) => {
  
      GLctx.drawElements(mode, count, type, indices);
  
    };

  
  var _emscripten_glDrawElementsInstanced = (mode, count, type, indices, primcount) => {
      GLctx.drawElementsInstanced(mode, count, type, indices, primcount);
    };
  var _glDrawElementsInstanced = _emscripten_glDrawElementsInstanced;
  var _emscripten_glDrawElementsInstancedANGLE = _glDrawElementsInstanced;

  var _emscripten_glEnable = (x0) => GLctx.enable(x0);

  var _emscripten_glEnableVertexAttribArray = (index) => {
      GLctx.enableVertexAttribArray(index);
    };

  var _emscripten_glEndQueryEXT = (target) => {
      GLctx.disjointTimerQueryExt['endQueryEXT'](target);
    };

  var _emscripten_glFinish = () => GLctx.finish();

  var _emscripten_glFlush = () => GLctx.flush();

  var _emscripten_glFramebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    };

  var _emscripten_glFramebufferTexture2D = (target, attachment, textarget, texture, level) => {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    };

  var _emscripten_glFrontFace = (x0) => GLctx.frontFace(x0);

  var _emscripten_glGenBuffers = (n, buffers) => {
      GL.genObject(n, buffers, 'createBuffer', GL.buffers
        );
    };

  var _emscripten_glGenFramebuffers = (n, ids) => {
      GL.genObject(n, ids, 'createFramebuffer', GL.framebuffers
        );
    };

  
  var _emscripten_glGenQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt['createQueryEXT']();
        if (!query) {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          while (i < n) HEAP32[(((ids)+(i++*4))>>2)] = 0;
          return;
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        HEAP32[(((ids)+(i*4))>>2)] = id;
      }
    };

  var _emscripten_glGenRenderbuffers = (n, renderbuffers) => {
      GL.genObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
        );
    };

  var _emscripten_glGenTextures = (n, textures) => {
      GL.genObject(n, textures, 'createTexture', GL.textures
        );
    };

  
  var _emscripten_glGenVertexArrays = (n, arrays) => {
      GL.genObject(n, arrays, 'createVertexArray', GL.vaos
        );
    };
  var _glGenVertexArrays = _emscripten_glGenVertexArrays;
  var _emscripten_glGenVertexArraysOES = _glGenVertexArrays;

  var _emscripten_glGenerateMipmap = (x0) => GLctx.generateMipmap(x0);

  
  
  var __glGetActiveAttribOrUniform = (funcName, program, index, bufSize, length, size, type, name) => {
      program = GL.programs[program];
      var info = GLctx[funcName](program, index);
      if (info) {
        // If an error occurs, nothing will be written to length, size and type and name.
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
        if (size) HEAP32[((size)>>2)] = info.size;
        if (type) HEAP32[((type)>>2)] = info.type;
      }
    };
  
  var _emscripten_glGetActiveAttrib = (program, index, bufSize, length, size, type, name) =>
      __glGetActiveAttribOrUniform('getActiveAttrib', program, index, bufSize, length, size, type, name);

  
  var _emscripten_glGetActiveUniform = (program, index, bufSize, length, size, type, name) =>
      __glGetActiveAttribOrUniform('getActiveUniform', program, index, bufSize, length, size, type, name);

  
  var _emscripten_glGetAttachedShaders = (program, maxCount, count, shaders) => {
      var result = GLctx.getAttachedShaders(GL.programs[program]);
      var len = result.length;
      if (len > maxCount) {
        len = maxCount;
      }
      HEAP32[((count)>>2)] = len;
      for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[(((shaders)+(i*4))>>2)] = id;
      }
    };

  
  var _emscripten_glGetAttribLocation = (program, name) =>
      GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));

  var writeI53ToI64 = (ptr, num) => {
      HEAPU32[((ptr)>>2)] = num;
      var lower = HEAPU32[((ptr)>>2)];
      HEAPU32[(((ptr)+(4))>>2)] = (num - lower)/4294967296;
    };
  
  
  
  
  /** @type {!Float32Array} */
  var HEAPF32;
  var emscriptenWebGLGet = (name_, p, type) => {
      // Guard against user passing a null pointer.
      // Note that GLES2 spec does not say anything about how passing a null
      // pointer should be treated.  Testing on desktop core GL 3, the application
      // crashes on glGetIntegerv to a null pointer, but better to report an error
      // instead of doing anything random.
      if (!p) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = undefined;
      switch (name_) { // Handle a few trivial GLES values
        case 0x8DFA: // GL_SHADER_COMPILER
          ret = 1;
          break;
        case 0x8DF8: // GL_SHADER_BINARY_FORMATS
          if (type != 0 && type != 1) {
            GL.recordError(0x500); // GL_INVALID_ENUM
          }
          // Do not write anything to the out pointer, since no binary formats are
          // supported.
          return;
        case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
          ret = 0;
          break;
        case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
          // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete
          // since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be
          // queried for length), so implement it ourselves to allow C++ GLES2
          // code to get the length.
          var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
          ret = formats ? formats.length : 0;
          break;
  
      }
  
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
          case 'number':
            ret = result;
            break;
          case 'boolean':
            ret = result ? 1 : 0;
            break;
          case 'string':
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          case 'object':
            if (result === null) {
              // null is a valid result for some (e.g., which buffer is bound -
              // perhaps nothing is bound), but otherwise can mean an invalid
              // name_, which we need to report as an error
              switch (name_) {
                case 0x8894: // ARRAY_BUFFER_BINDING
                case 0x8B8D: // CURRENT_PROGRAM
                case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                case 0x8CA7: // RENDERBUFFER_BINDING
                case 0x8069: // TEXTURE_BINDING_2D
                case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof Float32Array ||
                       result instanceof Uint32Array ||
                       result instanceof Int32Array ||
                       result instanceof Array) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 4: HEAP8[(p)+(i)] = result[i] ? 1 : 0; break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch(e) {
                GL.recordError(0x500); // GL_INVALID_ENUM
                err(`GL_INVALID_ENUM in glGet${type}v: Unknown object returned from WebGL getParameter(${name_})! (error: ${e})`);
                return;
              }
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            err(`GL_INVALID_ENUM in glGet${type}v: Native code calling glGet${type}v(${name_}) and it returns ${result} of type ${typeof(result)}!`);
            return;
        }
      }
  
      switch (type) {
        case 1: writeI53ToI64(p, ret); break;
        case 0: HEAP32[((p)>>2)] = ret; break;
        case 2:   HEAPF32[((p)>>2)] = ret; break;
        case 4: HEAP8[p] = ret ? 1 : 0; break;
      }
    };
  
  var _emscripten_glGetBooleanv = (name_, p) => emscriptenWebGLGet(name_, p, 4);

  
  var _emscripten_glGetBufferParameteriv = (target, value, data) => {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null
        // pointer. Since calling this function does not make sense if data ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((data)>>2)] = GLctx.getBufferParameter(target, value);
    };

  var _emscripten_glGetError = () => {
      var error = GLctx.getError() || GL.lastError;
      GL.lastError = 0/*GL_NO_ERROR*/;
      return error;
    };

  
  var _emscripten_glGetFloatv = (name_, p) => emscriptenWebGLGet(name_, p, 2);

  
  var _emscripten_glGetFramebufferAttachmentParameteriv = (target, attachment, pname, params) => {
      var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
      if (result instanceof WebGLRenderbuffer ||
          result instanceof WebGLTexture) {
        result = result.name | 0;
      }
      HEAP32[((params)>>2)] = result;
    };

  
  var _emscripten_glGetIntegerv = (name_, p) => emscriptenWebGLGet(name_, p, 0);

  
  var _emscripten_glGetProgramInfoLog = (program, maxLength, length, infoLog) => {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };

  
  var _emscripten_glGetProgramiv = (program, pname, p) => {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      if (program >= GL.counter) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      program = GL.programs[program];
  
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = '(unknown error)';
        HEAP32[((p)>>2)] = log.length + 1;
      } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
        if (!program.maxUniformLength) {
          var numActiveUniforms = GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/);
          for (var i = 0; i < numActiveUniforms; ++i) {
            program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformLength;
      } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
        if (!program.maxAttributeLength) {
          var numActiveAttributes = GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/);
          for (var i = 0; i < numActiveAttributes; ++i) {
            program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxAttributeLength;
      } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
        if (!program.maxUniformBlockNameLength) {
          var numActiveUniformBlocks = GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/);
          for (var i = 0; i < numActiveUniformBlocks; ++i) {
            program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
      }
    };

  
  var _emscripten_glGetQueryObjecti64vEXT = (id, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param;
      {
        param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      }
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      writeI53ToI64(params, ret);
    };

  
  var _emscripten_glGetQueryObjectivEXT = (id, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    };

  
  var _glGetQueryObjecti64vEXT = _emscripten_glGetQueryObjecti64vEXT;
  var _emscripten_glGetQueryObjectui64vEXT = _glGetQueryObjecti64vEXT;

  
  var _glGetQueryObjectivEXT = _emscripten_glGetQueryObjectivEXT;
  var _emscripten_glGetQueryObjectuivEXT = _glGetQueryObjectivEXT;

  
  var _emscripten_glGetQueryivEXT = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.disjointTimerQueryExt['getQueryEXT'](target, pname);
    };

  
  var _emscripten_glGetRenderbufferParameteriv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getRenderbufferParameter(target, pname);
    };

  
  
  var _emscripten_glGetShaderInfoLog = (shader, maxLength, length, infoLog) => {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };

  
  var _emscripten_glGetShaderPrecisionFormat = (shaderType, precisionType, range, precision) => {
      var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
      HEAP32[((range)>>2)] = result.rangeMin;
      HEAP32[(((range)+(4))>>2)] = result.rangeMax;
      HEAP32[((precision)>>2)] = result.precision;
    };

  
  var _emscripten_glGetShaderSource = (shader, bufSize, length, source) => {
      var result = GLctx.getShaderSource(GL.shaders[shader]);
      if (!result) return; // If an error occurs, nothing will be written to length or source.
      var numBytesWrittenExclNull = (bufSize > 0 && source) ? stringToUTF8(result, source, bufSize) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };

  
  var _emscripten_glGetShaderiv = (shader, pname, p) => {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        // The GLES2 specification says that if the shader has an empty info log,
        // a value of 0 is returned. Otherwise the log has a null char appended.
        // (An empty string is falsey, so we can just check that instead of
        // looking at log.length.)
        var logLength = log ? log.length + 1 : 0;
        HEAP32[((p)>>2)] = logLength;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        // source may be a null, or the empty string, both of which are falsey
        // values that we report a 0 length for.
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[((p)>>2)] = sourceLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    };

  
  
  var stringToNewUTF8 = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    };
  
  
  var webglGetExtensions = () => {
      var exts = getEmscriptenSupportedExtensions(GLctx);
      exts = exts.concat(exts.map((e) => 'GL_' + e));
      return exts;
    };
  
  var _emscripten_glGetString = (name_) => {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 0x1F03 /* GL_EXTENSIONS */:
            ret = stringToNewUTF8(webglGetExtensions().join(' '));
            break;
          case 0x1F00 /* GL_VENDOR */:
          case 0x1F01 /* GL_RENDERER */:
          case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
          case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
            }
            ret = s ? stringToNewUTF8(s) : 0;
            break;
  
          case 0x1F02 /* GL_VERSION */:
            var webGLVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
            // return GLES version string corresponding to the version of the WebGL context
            var glVersion = `OpenGL ES 2.0 (${webGLVersion})`;
            ret = stringToNewUTF8(glVersion);
            break;
          case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
            var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
            // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
              glslVersion = `OpenGL ES GLSL ES ${ver_num[1]} (${glslVersion})`;
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            // fall through
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    };

  
  var _emscripten_glGetTexParameterfv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAPF32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    };

  
  var _emscripten_glGetTexParameteriv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    };

  /** @suppress {checkTypes} */
  var jstoi_q = (str) => parseInt(str);
  
  /** @noinline */
  var webglGetLeftBracePos = (name) => name.slice(-1) == ']' && name.lastIndexOf('[');
  
  var webglPrepareUniformLocationsBeforeFirstUse = (program) => {
      var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
        i, j;
  
      // On the first time invocation of glGetUniformLocation on this shader program:
      // initialize cache data structures and discover which uniforms are arrays.
      if (!uniformLocsById) {
        // maps GLint integer locations to WebGLUniformLocations
        program.uniformLocsById = uniformLocsById = {};
        // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
        program.uniformArrayNamesById = {};
  
        var numActiveUniforms = GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/);
        for (i = 0; i < numActiveUniforms; ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
  
          // Assign a new location.
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          // Eagerly get the location of the uniformArray[0] base element.
          // The remaining indices >0 will be left for lazy evaluation to
          // improve performance. Those may never be needed to fetch, if the
          // application fills arrays always in full starting from the first
          // element of the array.
          uniformSizeAndIdsByName[arrayName] = [sz, id];
  
          // Store placeholder integers in place that highlight that these
          // >0 index locations are array indices pending population.
          for (j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    };
  
  
  
  var _emscripten_glGetUniformLocation = (program, name) => {
  
      name = UTF8ToString(name);
  
      if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
        var arrayIndex = 0;
        var uniformBaseName = name;
  
        // Invariant: when populating integer IDs for uniform locations, we must
        // maintain the precondition that arrays reside in contiguous addresses,
        // i.e. for a 'vec4 colors[10];', colors[4] must be at location
        // colors[0]+4.  However, user might call glGetUniformLocation(program,
        // "colors") for an array, so we cannot discover based on the user input
        // arguments whether the uniform we are dealing with is an array. The only
        // way to discover which uniforms are arrays is to enumerate over all the
        // active uniforms in the program.
        var leftBrace = webglGetLeftBracePos(name);
  
        // If user passed an array accessor "[index]", parse the array index off the accessor.
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
          uniformBaseName = name.slice(0, leftBrace);
        }
  
        // Have we cached the location of this uniform before?
        // A pair [array length, GLint of the uniform location]
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
  
        // If a uniform with this name exists, and if its index is within the
        // array limits (if it's even an array), query the WebGLlocation, or
        // return an existing cached location.
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      }
      else {
        // N.b. we are currently unable to distinguish between GL program IDs that
        // never existed vs GL program IDs that have been deleted, so report
        // GL_INVALID_VALUE in both cases.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
      }
      return -1;
    };

  
  var webglGetProgramUniformLocation = (program, location) => {
  
      if (program) {
        var webglLoc = program.uniformLocsById[location];
        // program.uniformLocsById[location] stores either an integer, or a
        // WebGLUniformLocation.
        // If an integer, we have not yet bound the location, so do it now. The
        // integer value specifies the array index we should bind to.
        if (typeof webglLoc == 'number') {
          program.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(program, program.uniformArrayNamesById[location] + (webglLoc > 0 ? `[${webglLoc}]` : ''));
        }
        // Else an already cached WebGLUniformLocation, return it.
        return webglLoc;
      } else {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
    };
  
  
  
  
  /** @suppress{checkTypes} */
  var emscriptenWebGLGetUniform = (program, location, params, type) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if params ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      webglPrepareUniformLocationsBeforeFirstUse(program);
      var data = GLctx.getUniform(program, webglGetProgramUniformLocation(program, location));
      if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
          }
        }
      }
    };
  
  var _emscripten_glGetUniformfv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 2);
    };

  
  var _emscripten_glGetUniformiv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 0);
    };

  
  var _emscripten_glGetVertexAttribPointerv = (index, pname, pointer) => {
      if (!pointer) {
        // GLES2 specification does not specify how to behave if pointer is a null
        // pointer. Since calling this function does not make sense if pointer ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((pointer)>>2)] = GLctx.getVertexAttribOffset(index, pname);
    };

  
  
  /** @suppress{checkTypes} */
  var emscriptenWebGLGetVertexAttrib = (index, pname, params, type) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if params ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var data = GLctx.getVertexAttrib(index, pname);
      if (pname == 0x889F/*VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/) {
        HEAP32[((params)>>2)] = data && data["name"];
      } else if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
          case 5: HEAP32[((params)>>2)] = Math.fround(data); break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
            case 5: HEAP32[(((params)+(i*4))>>2)] = Math.fround(data[i]); break;
          }
        }
      }
    };
  
  var _emscripten_glGetVertexAttribfv = (index, pname, params) => {
      // N.B. This function may only be called if the vertex attribute was
      // specified using the function glVertexAttrib*f(), otherwise the results
      // are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
    };

  
  var _emscripten_glGetVertexAttribiv = (index, pname, params) => {
      // N.B. This function may only be called if the vertex attribute was
      // specified using the function glVertexAttrib*f(), otherwise the results
      // are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
    };

  var _emscripten_glHint = (x0, x1) => GLctx.hint(x0, x1);

  var _emscripten_glIsBuffer = (buffer) => {
      var b = GL.buffers[buffer];
      if (!b) return 0;
      return GLctx.isBuffer(b);
    };

  var _emscripten_glIsEnabled = (x0) => GLctx.isEnabled(x0);

  var _emscripten_glIsFramebuffer = (framebuffer) => {
      var fb = GL.framebuffers[framebuffer];
      if (!fb) return 0;
      return GLctx.isFramebuffer(fb);
    };

  var _emscripten_glIsProgram = (program) => {
      program = GL.programs[program];
      if (!program) return 0;
      return GLctx.isProgram(program);
    };

  var _emscripten_glIsQueryEXT = (id) => {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.disjointTimerQueryExt['isQueryEXT'](query);
    };

  var _emscripten_glIsRenderbuffer = (renderbuffer) => {
      var rb = GL.renderbuffers[renderbuffer];
      if (!rb) return 0;
      return GLctx.isRenderbuffer(rb);
    };

  var _emscripten_glIsShader = (shader) => {
      var s = GL.shaders[shader];
      if (!s) return 0;
      return GLctx.isShader(s);
    };

  var _emscripten_glIsTexture = (id) => {
      var texture = GL.textures[id];
      if (!texture) return 0;
      return GLctx.isTexture(texture);
    };

  
  var _emscripten_glIsVertexArray = (array) => {
  
      var vao = GL.vaos[array];
      if (!vao) return 0;
      return GLctx.isVertexArray(vao);
    };
  var _glIsVertexArray = _emscripten_glIsVertexArray;
  var _emscripten_glIsVertexArrayOES = _glIsVertexArray;

  var _emscripten_glLineWidth = (x0) => GLctx.lineWidth(x0);

  var _emscripten_glLinkProgram = (program) => {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      // Invalidate earlier computed uniform->ID mappings, those have now become stale
      program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
      program.uniformSizeAndIdsByName = {};
  
    };

  var _emscripten_glPixelStorei = (pname, param) => {
      if (pname == 3317) {
        GL.unpackAlignment = param;
      } else if (pname == 3314) {
        GL.unpackRowLength = param;
      }
      GLctx.pixelStorei(pname, param);
    };

  var _emscripten_glPolygonModeWEBGL = (face, mode) => {
      GLctx.webglPolygonMode['polygonModeWEBGL'](face, mode);
    };

  var _emscripten_glPolygonOffset = (x0, x1) => GLctx.polygonOffset(x0, x1);

  var _emscripten_glPolygonOffsetClampEXT = (factor, units, clamp) => {
      GLctx.extPolygonOffsetClamp['polygonOffsetClampEXT'](factor, units, clamp);
    };

  var _emscripten_glQueryCounterEXT = (id, target) => {
      GLctx.disjointTimerQueryExt['queryCounterEXT'](GL.queries[id], target);
    };

  var computeUnpackAlignedImageSize = (width, height, sizePerPixel) => {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = (GL.unpackRowLength || width) * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, GL.unpackAlignment);
      return height * alignedRowSize;
    };
  
  var colorChannelsInGlTextureFormat = (format) => {
      // Micro-optimizations for size: map format to size by subtracting smallest
      // enum value (0x1902) from all values first.  Also omit the most common
      // size value (1) from the list, which is assumed by formats not on the
      // list.
      var colorChannels = {
        // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
        // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
        5: 3,
        6: 4,
        // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
        8: 2,
        29502: 3,
        29504: 4,
      };
      return colorChannels[format - 0x1902]||1;
    };
  
  
  
  /** @type {!Uint16Array} */
  var HEAPU16;
  
  
  
  var heapObjectForWebGLType = (type) => {
      // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
      // smaller values for the heap, for shorter generated code size.
      // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
      // (since most types are HEAPU16)
      type -= 0x1400;
  
      if (type == 1) return HEAPU8;
  
      if (type == 4) return HEAP32;
  
      if (type == 6) return HEAPF32;
  
      if (type == 5
        || type == 28922
        )
        return HEAPU32;
  
      return HEAPU16;
    };
  
  var toTypedArrayIndex = (pointer, heap) =>
      pointer >>> (31 - Math.clz32(heap.BYTES_PER_ELEMENT));
  
  var emscriptenWebGLGetTexPixelData = (type, format, width, height, pixels) => {
      var heap = heapObjectForWebGLType(type);
      var sizePerPixel = colorChannelsInGlTextureFormat(format) * heap.BYTES_PER_ELEMENT;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel);
      return heap.subarray(toTypedArrayIndex(pixels, heap), toTypedArrayIndex(pixels + bytes, heap));
    };
  
  var _emscripten_glReadPixels = (x, y, width, height, format, type, pixels) => {
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels);
      if (!pixelData) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    };

  var _emscripten_glReleaseShaderCompiler = () => {
      // NOP (as allowed by GLES 2.0 spec)
    };

  var _emscripten_glRenderbufferStorage = (x0, x1, x2, x3) => GLctx.renderbufferStorage(x0, x1, x2, x3);

  var _emscripten_glSampleCoverage = (value, invert) => {
      GLctx.sampleCoverage(value, !!invert);
    };

  var _emscripten_glScissor = (x0, x1, x2, x3) => GLctx.scissor(x0, x1, x2, x3);

  var _emscripten_glShaderBinary = (count, shaders, binaryformat, binary, length) => {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    };

  var _emscripten_glShaderSource = (shader, count, string, length) => {
      var source = GL.getSource(shader, count, string, length);
  
      GLctx.shaderSource(GL.shaders[shader], source);
    };

  var _emscripten_glStencilFunc = (x0, x1, x2) => GLctx.stencilFunc(x0, x1, x2);

  var _emscripten_glStencilFuncSeparate = (x0, x1, x2, x3) => GLctx.stencilFuncSeparate(x0, x1, x2, x3);

  var _emscripten_glStencilMask = (x0) => GLctx.stencilMask(x0);

  var _emscripten_glStencilMaskSeparate = (x0, x1) => GLctx.stencilMaskSeparate(x0, x1);

  var _emscripten_glStencilOp = (x0, x1, x2) => GLctx.stencilOp(x0, x1, x2);

  var _emscripten_glStencilOpSeparate = (x0, x1, x2, x3) => GLctx.stencilOpSeparate(x0, x1, x2, x3);

  
  var _emscripten_glTexImage2D = (target, level, internalFormat, width, height, border, format, type, pixels) => {
      var pixelData = pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels) : null;
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixelData);
    };

  var _emscripten_glTexParameterf = (x0, x1, x2) => GLctx.texParameterf(x0, x1, x2);

  
  var _emscripten_glTexParameterfv = (target, pname, params) => {
      var param = HEAPF32[((params)>>2)];
      GLctx.texParameterf(target, pname, param);
    };

  var _emscripten_glTexParameteri = (x0, x1, x2) => GLctx.texParameteri(x0, x1, x2);

  
  var _emscripten_glTexParameteriv = (target, pname, params) => {
      var param = HEAP32[((params)>>2)];
      GLctx.texParameteri(target, pname, param);
    };

  
  var _emscripten_glTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, type, pixels) => {
      var pixelData = pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels) : null;
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    };

  
  var webglGetUniformLocation = (location) => {
  
      return webglGetProgramUniformLocation(GLctx.currentProgram, location);
    };
  
  var _emscripten_glUniform1f = (location, v0) => {
      GLctx.uniform1f(webglGetUniformLocation(location), v0);
    };

  
  var miniTempWebGLFloatBuffers = [];
  
  
  var _emscripten_glUniform1fv = (location, count, value) => {
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*4)>>2));
      }
      GLctx.uniform1fv(webglGetUniformLocation(location), view);
    };

  
  var _emscripten_glUniform1i = (location, v0) => {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    };

  
  var miniTempWebGLIntBuffers = [];
  
  
  var _emscripten_glUniform1iv = (location, count, value) => {
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*4)>>2));
      }
      GLctx.uniform1iv(webglGetUniformLocation(location), view);
    };

  
  var _emscripten_glUniform2f = (location, v0, v1) => {
      GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
    };

  
  
  
  var _emscripten_glUniform2fv = (location, count, value) => {
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        count *= 2;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 2) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*8)>>2));
      }
      GLctx.uniform2fv(webglGetUniformLocation(location), view);
    };

  
  var _emscripten_glUniform2i = (location, v0, v1) => {
      GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
    };

  
  
  
  var _emscripten_glUniform2iv = (location, count, value) => {
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        count *= 2;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 2) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*8)>>2));
      }
      GLctx.uniform2iv(webglGetUniformLocation(location), view);
    };

  
  var _emscripten_glUniform3f = (location, v0, v1, v2) => {
      GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
    };

  
  
  
  var _emscripten_glUniform3fv = (location, count, value) => {
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        count *= 3;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 3) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*12)>>2));
      }
      GLctx.uniform3fv(webglGetUniformLocation(location), view);
    };

  
  var _emscripten_glUniform3i = (location, v0, v1, v2) => {
      GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
    };

  
  
  
  var _emscripten_glUniform3iv = (location, count, value) => {
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        count *= 3;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 3) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*12)>>2));
      }
      GLctx.uniform3iv(webglGetUniformLocation(location), view);
    };

  
  var _emscripten_glUniform4f = (location, v0, v1, v2, v3) => {
      GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
    };

  
  
  
  var _emscripten_glUniform4fv = (location, count, value) => {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[4*count];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value = ((value)>>2);
        count *= 4;
        for (var i = 0; i < count; i += 4) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniform4fv(webglGetUniformLocation(location), view);
    };

  
  var _emscripten_glUniform4i = (location, v0, v1, v2, v3) => {
      GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
    };

  
  
  
  var _emscripten_glUniform4iv = (location, count, value) => {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        count *= 4;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 4) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAP32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniform4iv(webglGetUniformLocation(location), view);
    };

  
  
  
  var _emscripten_glUniformMatrix2fv = (location, count, transpose, value) => {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        count *= 4;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 4) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
    };

  
  
  
  var _emscripten_glUniformMatrix3fv = (location, count, transpose, value) => {
  
      if (count <= 32) {
        // avoid allocation when uploading few enough uniforms
        count *= 9;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 9) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
          view[i+4] = HEAPF32[(((value)+(4*i+16))>>2)];
          view[i+5] = HEAPF32[(((value)+(4*i+20))>>2)];
          view[i+6] = HEAPF32[(((value)+(4*i+24))>>2)];
          view[i+7] = HEAPF32[(((value)+(4*i+28))>>2)];
          view[i+8] = HEAPF32[(((value)+(4*i+32))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*36)>>2));
      }
      GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
    };

  
  
  
  var _emscripten_glUniformMatrix4fv = (location, count, transpose, value) => {
  
      if (count <= 18) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[16*count];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value = ((value)>>2);
        count *= 16;
        for (var i = 0; i < count; i += 16) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
          view[i + 4] = heap[dst + 4];
          view[i + 5] = heap[dst + 5];
          view[i + 6] = heap[dst + 6];
          view[i + 7] = heap[dst + 7];
          view[i + 8] = heap[dst + 8];
          view[i + 9] = heap[dst + 9];
          view[i + 10] = heap[dst + 10];
          view[i + 11] = heap[dst + 11];
          view[i + 12] = heap[dst + 12];
          view[i + 13] = heap[dst + 13];
          view[i + 14] = heap[dst + 14];
          view[i + 15] = heap[dst + 15];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*64)>>2));
      }
      GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
    };

  var _emscripten_glUseProgram = (program) => {
      program = GL.programs[program];
      GLctx.useProgram(program);
      // Record the currently active program so that we can access the uniform
      // mapping table of that program.
      GLctx.currentProgram = program;
    };

  var _emscripten_glValidateProgram = (program) => {
      GLctx.validateProgram(GL.programs[program]);
    };

  var _emscripten_glVertexAttrib1f = (x0, x1) => GLctx.vertexAttrib1f(x0, x1);

  
  var _emscripten_glVertexAttrib1fv = (index, v) => {
  
      GLctx.vertexAttrib1f(index, HEAPF32[v>>2]);
    };

  var _emscripten_glVertexAttrib2f = (x0, x1, x2) => GLctx.vertexAttrib2f(x0, x1, x2);

  
  var _emscripten_glVertexAttrib2fv = (index, v) => {
  
      GLctx.vertexAttrib2f(index, HEAPF32[v>>2], HEAPF32[v+4>>2]);
    };

  var _emscripten_glVertexAttrib3f = (x0, x1, x2, x3) => GLctx.vertexAttrib3f(x0, x1, x2, x3);

  
  var _emscripten_glVertexAttrib3fv = (index, v) => {
  
      GLctx.vertexAttrib3f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2]);
    };

  var _emscripten_glVertexAttrib4f = (x0, x1, x2, x3, x4) => GLctx.vertexAttrib4f(x0, x1, x2, x3, x4);

  
  var _emscripten_glVertexAttrib4fv = (index, v) => {
  
      GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
    };

  
  var _emscripten_glVertexAttribDivisor = (index, divisor) => {
      GLctx.vertexAttribDivisor(index, divisor);
    };
  var _glVertexAttribDivisor = _emscripten_glVertexAttribDivisor;
  var _emscripten_glVertexAttribDivisorANGLE = _glVertexAttribDivisor;

  var _emscripten_glVertexAttribPointer = (index, size, type, normalized, stride, ptr) => {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    };

  var _emscripten_glViewport = (x0, x1, x2, x3) => GLctx.viewport(x0, x1, x2, x3);

  var abortOnCannotGrowMemory = (requestedSize) => {
      abort('OOM');
    };
  
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      abortOnCannotGrowMemory(requestedSize);
    };

  /** @suppress {checkTypes} */
  var _emscripten_sample_gamepad_data = () => {
      try {
        if (navigator.getGamepads) return (JSEvents.lastGamepadState = navigator.getGamepads())
          ? 0 : -1;
      } catch(e) {
        navigator.getGamepads = null; // Disable getGamepads() so that it won't be attempted to be used again.
      }
      return -1;
    };

  
  
  
  
  var wasmTableMirror = [];
  
  
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        /** @suppress {checkTypes} */
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    };
  var registerFocusEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 256;
      JSEvents.focusEvent ||= _malloc(eventSize);
  
      var focusEventHandlerFunc = (e) => {
        var nodeName = JSEvents.getNodeNameForTarget(e.target);
        var id = e.target.id ?? '';
  
        var focusEvent = JSEvents.focusEvent;
        stringToUTF8(nodeName, focusEvent + 0, 128);
        stringToUTF8(id, focusEvent + 128, 128);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, focusEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: focusEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_blur_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, 'blur', targetThread);

  var findCanvasEventTarget = findEventTarget;
  var _emscripten_set_canvas_element_size = (target, width, height) => {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      canvas.width = width;
      canvas.height = height;
      return 0;
    };

  
  
  
  
  
  var fillMouseEventData = (eventStruct, e, target) => {
      HEAPF64[((eventStruct)>>3)] = e.timeStamp;
      var idx = ((eventStruct)>>2);
      HEAP32[idx + 2] = e.screenX;
      HEAP32[idx + 3] = e.screenY;
      HEAP32[idx + 4] = e.clientX;
      HEAP32[idx + 5] = e.clientY;
      HEAP8[eventStruct + 24] = e.ctrlKey;
      HEAP8[eventStruct + 25] = e.shiftKey;
      HEAP8[eventStruct + 26] = e.altKey;
      HEAP8[eventStruct + 27] = e.metaKey;
      HEAP16[idx*2 + 14] = e.button;
      HEAP16[idx*2 + 15] = e.buttons;
      HEAP32[idx + 8] = e.movementX;
      HEAP32[idx + 9] = e.movementY;
  
      // Note: rect contains doubles (truncated to placate SAFE_HEAP, which is the same behaviour when writing to HEAP32 anyway)
      var rect = getBoundingClientRect(target);
      HEAP32[idx + 10] = e.clientX - (rect.left | 0);
      HEAP32[idx + 11] = e.clientY - (rect.top  | 0);
    };
  
  
  
  var registerMouseEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 64;
      JSEvents.mouseEvent ||= _malloc(eventSize);
      target = findEventTarget(target);
  
      var mouseEventHandlerFunc = (e) => {
        // TODO: Make this access thread safe, or this could update live while app is reading it.
        fillMouseEventData(JSEvents.mouseEvent, e, target);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        allowsDeferredCalls: eventTypeString != 'mousemove' && eventTypeString != 'mouseenter' && eventTypeString != 'mouseleave', // Mouse move events do not allow fullscreen/pointer lock requests to be handled in them!
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_click_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 4, 'click', targetThread);

  var _emscripten_set_focus_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, 'focus', targetThread);

  
  
  
  
  function getFullscreenElement() {
      return document.fullscreenElement
             ?? document.webkitFullscreenElement
             ;
    }
  
  
  var fillFullscreenChangeEventData = (eventStruct) => {
      var fullscreenElement = getFullscreenElement();
      var isFullscreen = !!fullscreenElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = isFullscreen;
      HEAP8[(eventStruct)+(1)] = JSEvents.fullscreenEnabled();
      // If transitioning to fullscreen, report info about the element that is now fullscreen.
      // If transitioning to windowed mode, report info about the element that just was fullscreen.
      var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
      var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
      var id = reportedElement?.id ?? '';
      stringToUTF8(nodeName, eventStruct + 2, 128);
      stringToUTF8(id, eventStruct + 130, 128);
      HEAP32[(((eventStruct)+(260))>>2)] = reportedElement?.clientWidth ?? 0;
      HEAP32[(((eventStruct)+(264))>>2)] = reportedElement?.clientHeight ?? 0;
      HEAP32[(((eventStruct)+(268))>>2)] = screen.width;
      HEAP32[(((eventStruct)+(272))>>2)] = screen.height;
      if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement;
      }
    };
  
  
  var registerFullscreenChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 276;
      JSEvents.fullscreenChangeEvent ||= _malloc(eventSize);
  
      var fullscreenChangeEventHandlerFunc = (e) => {
        var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
        fillFullscreenChangeEventData(fullscreenChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: fullscreenChangeEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_fullscreenchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
  
      // TODO: When this block is removed, also change test/test_html5_remove_event_listener.c test expectation on emscripten_set_fullscreenchange_callback().
      registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, 'webkitfullscreenchange', targetThread);
  
      return registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, 'fullscreenchange', targetThread);
    };

  
  
  
  
  var registerGamepadEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 1240;
      JSEvents.gamepadEvent ||= _malloc(eventSize);
  
      var gamepadEventHandlerFunc = (e) => {
        var gamepadEvent = JSEvents.gamepadEvent;
        fillGamepadEventData(gamepadEvent, e['gamepad']);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, gamepadEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: gamepadEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_gamepadconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
      if (_emscripten_sample_gamepad_data()) return -1;
      return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, 'gamepadconnected', targetThread);
    };

  
  var _emscripten_set_gamepaddisconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
      if (_emscripten_sample_gamepad_data()) return -1;
      return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, 'gamepaddisconnected', targetThread);
    };

  
  var handleException = (e) => {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    };
  
  
  var runtimeKeepaliveCounter = 0;
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        Module['onExit']?.(code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
  /** @param {boolean|number=} implicit */
  var exitJS = (status, implicit) => {
      EXITSTATUS = status;
  
      _proc_exit(status);
    };
  var _exit = exitJS;
  
  
  var maybeExit = () => {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    };
  var callUserCallback = (func) => {
      if (ABORT) {
        return;
      }
      try {
        return func();
      } catch (e) {
        handleException(e);
      } finally {
        maybeExit();
      }
    };
  
  var _emscripten_set_main_loop_timing = (mode, value) => {
      MainLoop.timingMode = mode;
      MainLoop.timingValue = value;
  
      if (!MainLoop.func) {
        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
      }
  
      if (mode == 0) {
        MainLoop.scheduler = function MainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, MainLoop.tickStartTime + value - _emscripten_get_now())|0;
          setTimeout(MainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
        };
      } else if (mode == 1) {
        MainLoop.scheduler = function MainLoop_scheduler_rAF() {
          MainLoop.requestAnimationFrame(MainLoop.runner);
        };
      } else {
        if (!MainLoop.setImmediate) {
          if (globalThis.scheduler) {
            // Some modern browsers implement scheduler.postTask, but not all.
            MainLoop.setImmediate = scheduler.postTask.bind(scheduler);
          } else if (globalThis.setImmediate) {
            MainLoop.setImmediate = setImmediate;
          } else {
            // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
            var setImmediates = [];
            var emscriptenMainLoopMessageId = 'setimmediate';
            /** @param {Event} event */
            var MainLoop_setImmediate_messageHandler = (event) => {
              if (event.data === emscriptenMainLoopMessageId) {
                event.stopPropagation();
                setImmediates.shift()();
              }
            };
            addEventListener('message', MainLoop_setImmediate_messageHandler, true);
            MainLoop.setImmediate = /** @type{function(function(): ?, ...?): number} */((func) => {
              setImmediates.push(func);
              if (ENVIRONMENT_IS_WORKER) {
                // The postMessge API in a Worker, sends message to the main
                // thread and does not support the `targetOrigin` (*) argument.
                postMessage(emscriptenMainLoopMessageId);
              } else {
                postMessage(emscriptenMainLoopMessageId, '*');
              }
            });
          }
        }
        MainLoop.scheduler = function MainLoop_scheduler_setImmediate() {
          MainLoop.setImmediate(MainLoop.runner);
        };
      }
      return 0;
    };
  var MainLoop = {
  func:null,
  scheduler:null,
  currentlyRunningMainloop:0,
  arg:0,
  timingMode:0,
  timingValue:0,
  currentFrameNumber:0,
  queue:[],
  preMainLoop:[],
  postMainLoop:[],
  pause() {
        if (MainLoop.scheduler) {
          MainLoop.scheduler = null;
          // Incrementing this signals the previous main loop that it's now become old, and it must return.
          MainLoop.currentlyRunningMainloop++;
          
        }
      },
  resume() {
        MainLoop.currentlyRunningMainloop++;
        var timingMode = MainLoop.timingMode;
        var timingValue = MainLoop.timingValue;
        var func = MainLoop.func;
        MainLoop.func = null;
        // do not set timing and call scheduler, we will do it on the next lines
        setMainLoop(func, 0, false, MainLoop.arg, true);
        _emscripten_set_main_loop_timing(timingMode, timingValue);
        MainLoop.scheduler();
      },
  updateStatus() {
        if (Module['setStatus']) {
          var message = Module['statusMessage'] || 'Please wait...';
          var remaining = MainLoop.remainingBlockers ?? 0;
          var expected = MainLoop.expectedBlockers ?? 0;
          if (remaining) {
            if (remaining < expected) {
              Module['setStatus'](`{message} ({expected - remaining}/{expected})`);
            } else {
              Module['setStatus'](message);
            }
          } else {
            Module['setStatus']('');
          }
        }
      },
  init() {
      },
  runIter(func) {
        if (ABORT) return;
        for (var pre of MainLoop.preMainLoop) {
          if (pre() === false) {
            return; // |return false| skips a frame
          }
        }
        callUserCallback(func);
        for (var post of MainLoop.postMainLoop) {
          post();
        }
      },
  nextRAF:0,
  fakeRequestAnimationFrame(func) {
        // try to keep 60fps between calls to here
        var now = Date.now();
        if (!MainLoop.nextRAF) {
          MainLoop.nextRAF = now + 1000/60;
        } else {
          while (now + 2 >= MainLoop.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
            MainLoop.nextRAF += 1000/60;
          }
        }
        var delay = Math.max(MainLoop.nextRAF - now, 0);
        setTimeout(func, delay);
      },
  requestAnimationFrame(func) {
        if (globalThis.requestAnimationFrame) {
          requestAnimationFrame(func);
        } else {
          MainLoop.fakeRequestAnimationFrame(func);
        }
      },
  };
  
  
  
  
    /**
   * @param {number=} arg
   * @param {boolean=} noSetTiming
   */
  var setMainLoop = (iterFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
      MainLoop.func = iterFunc;
      MainLoop.arg = arg;
  
      var thisMainLoopId = MainLoop.currentlyRunningMainloop;
      function checkIsRunning() {
        if (thisMainLoopId < MainLoop.currentlyRunningMainloop) {
          maybeExit();
          return false;
        }
        return true;
      }
  
      // We create the loop runner here but it is not actually running until
      // _emscripten_set_main_loop_timing is called (which might happen at a
      // later time).
      MainLoop.runner = function MainLoop_runner() {
        if (ABORT) return;
        if (MainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = MainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (MainLoop.remainingBlockers) {
            var remaining = MainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              MainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              MainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          MainLoop.updateStatus();
  
          // catches pause/resume main loop from blocker execution
          if (!checkIsRunning()) return;
  
          setTimeout(MainLoop.runner, 0);
          return;
        }
  
        // catch pauses from non-main loop sources
        if (!checkIsRunning()) return;
  
        // Implement very basic swap interval control
        MainLoop.currentFrameNumber = MainLoop.currentFrameNumber + 1 | 0;
        if (MainLoop.timingMode == 1 && MainLoop.timingValue > 1 && MainLoop.currentFrameNumber % MainLoop.timingValue != 0) {
          // Not the scheduled time to render this frame - skip.
          MainLoop.scheduler();
          return;
        } else if (MainLoop.timingMode == 0) {
          MainLoop.tickStartTime = _emscripten_get_now();
        }
  
        MainLoop.runIter(iterFunc);
  
        // catch pauses from the main loop itself
        if (!checkIsRunning()) return;
  
        MainLoop.scheduler();
      }
  
      if (!noSetTiming) {
        if (fps > 0) {
          _emscripten_set_main_loop_timing(0, 1000.0 / fps);
        } else {
          // Do rAF by rendering each frame (no decimating)
          _emscripten_set_main_loop_timing(1, 1);
        }
  
        MainLoop.scheduler();
      }
  
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    };
  
  var _emscripten_set_main_loop = (func, fps, simulateInfiniteLoop) => {
      var iterFunc = getWasmTableEntry(func);
      setMainLoop(iterFunc, fps, simulateInfiniteLoop);
    };

  var _emscripten_set_mousemove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, 'mousemove', targetThread);

  
  
  
  
  var fillPointerlockChangeEventData = (eventStruct) => {
      var pointerLockElement = document.pointerLockElement;
      var isPointerlocked = !!pointerLockElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = isPointerlocked;
      var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
      var id = pointerLockElement?.id ?? '';
      stringToUTF8(nodeName, eventStruct + 1, 128);
      stringToUTF8(id, eventStruct + 129, 128);
    };
  
  
  var registerPointerlockChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 257;
      JSEvents.pointerlockChangeEvent ||= _malloc(eventSize);
  
      var pointerlockChangeEventHandlerFunc = (e) => {
        var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(pointerlockChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_pointerlockchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
      if (!document.body?.requestPointerLock) {
        return -1;
      }
  
      target = findEventTarget(target);
      if (!target) return -4;
      return registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, 'pointerlockchange', targetThread);
    };

  
  
  
  
  var registerUiEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 36;
      JSEvents.uiEvent ||= _malloc(eventSize);
  
      target = findEventTarget(target);
  
      var uiEventHandlerFunc = (e) => {
        if (e.target != target) {
          // Never take ui events such as scroll via a 'bubbled' route, but always from the direct element that
          // was targeted. Otherwise e.g. if app logs a message in response to a page scroll, the Emscripten log
          // message box could cause to scroll, generating a new (bubbled) scroll message, causing a new log print,
          // causing a new scroll, etc..
          return;
        }
        var b = document.body; // Take document.body to a variable, Closure compiler does not outline access to it on its own.
        if (!b) {
          // During a page unload 'body' can be null, with "Cannot read property 'clientWidth' of null" being thrown
          return;
        }
        var uiEvent = JSEvents.uiEvent;
        HEAP32[((uiEvent)>>2)] = 0; // always zero for resize and scroll
        HEAP32[(((uiEvent)+(4))>>2)] = b.clientWidth;
        HEAP32[(((uiEvent)+(8))>>2)] = b.clientHeight;
        HEAP32[(((uiEvent)+(12))>>2)] = innerWidth;
        HEAP32[(((uiEvent)+(16))>>2)] = innerHeight;
        HEAP32[(((uiEvent)+(20))>>2)] = outerWidth;
        HEAP32[(((uiEvent)+(24))>>2)] = outerHeight;
        HEAP32[(((uiEvent)+(28))>>2)] = pageXOffset | 0; // scroll offsets are float
        HEAP32[(((uiEvent)+(32))>>2)] = pageYOffset | 0;
        if (getWasmTableEntry(callbackfunc)(eventTypeId, uiEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_resize_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, 'resize', targetThread);

  
  
  
  
  
  
  
  var registerTouchEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 1552;
      JSEvents.touchEvent ||= _malloc(eventSize);
  
      target = findEventTarget(target);
  
      var touchEventHandlerFunc = (e) => {
        var t, touches = {}, et = e.touches;
        // To ease marshalling different kinds of touches that browser reports (all touches are listed in e.touches,
        // only changed touches in e.changedTouches, and touches on target at a.targetTouches), mark a boolean in
        // each Touch object so that we can later loop only once over all touches we see to marshall over to Wasm.
  
        for (let t of et) {
          // Browser might recycle the generated Touch objects between each frame (Firefox on Android), so reset any
          // changed/target states we may have set from previous frame.
          t.isChanged = t.onTarget = 0;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the changedTouches list.
        for (let t of e.changedTouches) {
          t.isChanged = 1;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the targetTouches list.
        for (let t of e.targetTouches) {
          touches[t.identifier].onTarget = 1;
        }
  
        var touchEvent = JSEvents.touchEvent;
        HEAPF64[((touchEvent)>>3)] = e.timeStamp;
        HEAP8[touchEvent + 12] = e.ctrlKey;
        HEAP8[touchEvent + 13] = e.shiftKey;
        HEAP8[touchEvent + 14] = e.altKey;
        HEAP8[touchEvent + 15] = e.metaKey;
        var idx = touchEvent + 16;
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (let t of Object.values(touches)) {
          var idx32 = ((idx)>>2); // Pre-shift the ptr to index to HEAP32 to save code size
          HEAP32[idx32 + 0] = t.identifier;
          HEAP32[idx32 + 1] = t.screenX;
          HEAP32[idx32 + 2] = t.screenY;
          HEAP32[idx32 + 3] = t.clientX;
          HEAP32[idx32 + 4] = t.clientY;
          HEAP32[idx32 + 5] = t.pageX;
          HEAP32[idx32 + 6] = t.pageY;
          HEAP8[idx + 28] = t.isChanged;
          HEAP8[idx + 29] = t.onTarget;
          HEAP32[idx32 + 8] = t.clientX - (targetRect.left | 0);
          HEAP32[idx32 + 9] = t.clientY - (targetRect.top  | 0);
  
          idx += 48;
  
          if (++numTouches > 31) {
            break;
          }
        }
        HEAP32[(((touchEvent)+(8))>>2)] = numTouches;
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, touchEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        allowsDeferredCalls: eventTypeString == 'touchstart' || eventTypeString == 'touchend',
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_touchcancel_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, 'touchcancel', targetThread);

  var _emscripten_set_touchend_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, 'touchend', targetThread);

  var _emscripten_set_touchmove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, 'touchmove', targetThread);

  var _emscripten_set_touchstart_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, 'touchstart', targetThread);

  
  
  var fillVisibilityChangeEventData = (eventStruct) => {
      var visibilityStates = [ 'hidden', 'visible', 'prerender', 'unloaded' ];
      var visibilityState = visibilityStates.indexOf(document.visibilityState);
  
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = document.hidden;
      HEAP32[(((eventStruct)+(4))>>2)] = visibilityState;
    };
  
  
  var registerVisibilityChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      var eventSize = 8;
      JSEvents.visibilityChangeEvent ||= _malloc(eventSize);
  
      var visibilityChangeEventHandlerFunc = (e) => {
        var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
        fillVisibilityChangeEventData(visibilityChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        eventTypeId,
        userData,
        callbackfunc,
        handlerFunc: visibilityChangeEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_visibilitychange_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
    if (!specialHTMLTargets[1]) {
      return -4;
    }
      return registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, 'visibilitychange', targetThread);
    };

  
  
  /** @param {number=} timeout */
  var safeSetTimeout = (func, timeout) => {
      
      // Slot 0 is reserved so that, like setTimeout, ids are always non-zero.
      safeSetTimeout.mapping ||= [0];
      var id = safeSetTimeout.mapping.length;
      safeSetTimeout.mapping[id] = setTimeout(() => {
        safeSetTimeout.mapping[id] = undefined;
        
        callUserCallback(func);
      }, timeout);
      return id;
    };
  
  var warnOnce = (text) => {
      warnOnce.shown ||= {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    };
  
  
  
  
  var Browser = {
  useWebGL:false,
  isFullscreen:false,
  pointerLock:false,
  moduleContextCreatedCallbacks:[],
  preloadedImages:{
  },
  preloadedAudios:{
  },
  getCanvas:() => Module['canvas'],
  init() {
        if (Browser.initted) return;
        Browser.initted = true;
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = (name) => {
          return !Module['noImageDecoding'] && /\.(jpg|jpeg|png|bmp|webp)$/i.test(name);
        };
        imagePlugin['handle'] = async (byteArray, name) => {
          var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          if (b.size !== byteArray.length) { // Safari bug #118630
            // Safari's Blob can only take an ArrayBuffer
            b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
          }
          var url = URL.createObjectURL(b);
          return new Promise((resolve, reject) => {
            var img = new Image();
            img.onload = () => {
              var canvas = /** @type {!HTMLCanvasElement} */ (document.createElement('canvas'));
              canvas.width = img.width;
              canvas.height = img.height;
              var ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              Browser.preloadedImages[name] = canvas;
              URL.revokeObjectURL(url);
              resolve(byteArray);
            };
            img.onerror = (event) => {
              err(`Image ${url} could not be decoded`);
              reject();
            };
            img.src = url;
          });
        };
        preloadPlugins.push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = (name) => {
          return !Module['noAudioDecoding'] && name.slice(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = async (byteArray, name) => {
          return new Promise((resolve, reject) => {
            var done = false;
            function finish(audio) {
              if (done) return;
              done = true;
              Browser.preloadedAudios[name] = audio;
              resolve(byteArray);
            }
            var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            var url = URL.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', () => finish(audio)); // use addEventListener due to chromium bug 124926
            audio.onerror = (event) => {
              if (done) return;
              err(`warning: browser could not fully decode audio ${name}, trying slower base64 approach`);
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var byte of data) {
                  leftchar = (leftchar << 8) | byte;
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.slice(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            safeSetTimeout(() => {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          });
        };
        preloadPlugins.push(audioPlugin);
  
        // Canvas event setup
  
        function pointerLockChange() {
          var canvas = Browser.getCanvas();
          Browser.pointerLock = document.pointerLockElement === canvas;
        }
        var canvas = Browser.getCanvas();
        if (canvas) {
          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
          // Module['forcedAspectRatio'] = 4 / 3;
  
          document.addEventListener('pointerlockchange', pointerLockChange);
  
          if (Module['elementPointerLock']) {
            canvas.addEventListener('click', (ev) => {
              if (!Browser.pointerLock && Browser.getCanvas().requestPointerLock) {
                Browser.getCanvas().requestPointerLock();
                ev.preventDefault();
              }
            });
          }
        }
      },
  createContext(/** @type {HTMLCanvasElement} */ canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module['ctx'] && canvas == Browser.getCanvas()) return Module['ctx']; // no need to recreate GL context if it's already been created for this canvas.
  
        var ctx;
        var contextHandle;
        if (useWebGL) {
          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: 1,
          };
  
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
  
          // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
          // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
          // Browser.createContext() should not even be emitted.
          if (typeof GL != 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
  
        if (!ctx) return null;
  
        if (setInModule) {
          Module['ctx'] = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Browser.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach((callback) => callback());
          Browser.init();
        }
        return ctx;
      },
  fullscreenHandlersInstalled:false,
  lockPointer:undefined,
  resizeCanvas:undefined,
  requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Browser.getCanvas();
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if (getFullscreenElement() === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange);
          document.addEventListener('webkitfullscreenchange', fullscreenChange);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement('div');
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        // Safari didn't support Element.requestFullscreen until 16.4
        // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
        /** @suppress {checkTypes} */
        canvasContainer.requestFullscreen ??= (canvasContainer['webkitRequestFullscreen'] ? () => canvasContainer['webkitRequestFullscreen'](Element.ALLOW_KEYBOARD_INPUT) : null) ??
                                              (canvasContainer['webkitRequestFullScreen'] ? () => canvasContainer['webkitRequestFullScreen'](Element.ALLOW_KEYBOARD_INPUT) : null);
  
        canvasContainer.requestFullscreen();
      },
  exitFullscreen() {
        // This is workaround for chrome. Trying to exit from fullscreen
        // not in fullscreen state will cause 'TypeError: Document not active'
        // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
        if (!Browser.isFullscreen) {
          return false;
        }
  
        var CFS = document.exitFullscreen ?? document['webkitCancelFullScreen'];
        CFS.apply(document, []);
        return true;
      },
  safeSetTimeout(func, timeout) {
        // Legacy function, this is used by the SDL2 port so we need to keep it
        // around at least until that is updated.
        // See https://github.com/libsdl-org/SDL/pull/6304
        return safeSetTimeout(func, timeout);
      },
  getMimetype(name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.slice(name.lastIndexOf('.')+1)];
      },
  getUserMedia(func) {
        return navigator.mediaDevices.getUserMedia(func);
      },
  getMouseWheelDelta(event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            // 3 lines make up a step
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            // 120 units make up a step
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY
            switch (event.deltaMode) {
              case 0:
                // DOM_DELTA_PIXEL: 100 pixels make up a step
                delta /= 100;
                break;
              case 1:
                // DOM_DELTA_LINE: 3 lines make up a step
                delta /= 3;
                break;
              case 2:
                // DOM_DELTA_PAGE: A page makes up 80 steps
                delta *= 80;
                break;
              default:
                abort('unrecognized mouse wheel delta mode: ' + event.deltaMode);
            }
            break;
          default:
            abort('unrecognized mouse wheel event: ' + event.type);
        }
        return delta;
      },
  mouseX:0,
  mouseY:0,
  mouseMovementX:0,
  mouseMovementY:0,
  touches:{
  },
  lastTouches:{
  },
  calculateMouseCoords(pageX, pageY) {
        // Calculate the movement based on the changes
        // in the coordinates.
        var canvas = Browser.getCanvas();
        var rect = canvas.getBoundingClientRect();
  
        var adjustedX = pageX - (window.scrollX + rect.left);
        var adjustedY = pageY - (window.scrollY + rect.top);
  
        // the canvas might be CSS-scaled compared to its backbuffer;
        // SDL-using content will want mouse coordinates in terms
        // of backbuffer units.
        adjustedX = adjustedX * (canvas.width / rect.width);
        adjustedY = adjustedY * (canvas.height / rect.height);
  
        return { x: adjustedX, y: adjustedY };
      },
  setMouseCoords(pageX, pageY) {
        const {x, y} = Browser.calculateMouseCoords(pageX, pageY);
        Browser.mouseMovementX = x - Browser.mouseX;
        Browser.mouseMovementY = y - Browser.mouseY;
        Browser.mouseX = x;
        Browser.mouseY = y;
      },
  calculateMouseEvent(event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          Browser.mouseMovementX = event.movementX;
          Browser.mouseMovementY = event.movementY;
  
          // add the mouse delta to the current absolute mouse position
          Browser.mouseX += Browser.mouseMovementX;
          Browser.mouseY += Browser.mouseMovementY;
        } else {
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return; // the 'touch' property is only defined in SDL
  
            }
            var coords = Browser.calculateMouseCoords(touch.pageX, touch.pageY);
  
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              last ||= coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
  
          Browser.setMouseCoords(event.pageX, event.pageY);
        }
      },
  resizeListeners:[],
  updateResizeListeners() {
        var canvas = Browser.getCanvas();
        Browser.resizeListeners.forEach((listener) => listener(canvas.width, canvas.height));
      },
  setCanvasSize(width, height, noUpdates) {
        var canvas = Browser.getCanvas();
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },
  windowedWidth:0,
  windowedHeight:0,
  setFullscreenCanvasSize() {
        // check if SDL is available
        if (typeof SDL != 'undefined') {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Browser.getCanvas());
        Browser.updateResizeListeners();
      },
  setWindowedCanvasSize() {
        // check if SDL is available
        if (typeof SDL != 'undefined') {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Browser.getCanvas());
        Browser.updateResizeListeners();
      },
  updateCanvasDimensions(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if ((getFullscreenElement() === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( 'width');
            canvas.style.removeProperty('height');
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( 'width', w + 'px', 'important');
              canvas.style.setProperty('height', h + 'px', 'important');
            } else {
              canvas.style.removeProperty( 'width');
              canvas.style.removeProperty('height');
            }
          }
        }
      },
  };
  
  var _emscripten_set_window_title = (title) => document.title = UTF8ToString(title);

  var ENV = {
  };
  
  var getExecutableName = () => thisProgram;
  var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        // Default values.
        var lang = (globalThis.navigator?.language ?? 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
  
  
  var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      var envp = 0;
      for (var string of getEnvStrings()) {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(envp))>>2)] = ptr;
        bufSize += stringToUTF8(string, ptr, Infinity) + 1;
        envp += 4;
      }
      return 0;
    };

  
  
  var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      for (var string of strings) {
        bufSize += lengthBytesUTF8(string) + 1;
      }
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    };


  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }
  

  
  /** @param {number=} offset */
  var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        try {
          var curr = FS.read(stream, HEAP8, ptr, len, offset);
        } catch (e) {
          // On a non-blocking stream a subsequent read may would-block after we
          // already gathered data. POSIX readv is a single gather-read: return
          // what we have rather than failing the whole call.
          if (ret > 0 && e instanceof FS.ErrnoError &&
              (e.errno == 6 || e.errno == 6)) {
            break;
          }
          throw e;
        }
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }
  

  
  
  function _fd_seek(fd, offset, whence, newOffset) {
    offset = bigintToI53Checked(offset);
  
  
  try {
  
      if (isNaN(offset)) return 22;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      HEAP64[((newOffset)>>3)] = BigInt(stream.position);
      if (stream.getdents && !offset && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  ;
  }

  
  
  /** @param {number=} offset */
  var doWritev = (stream, iov, iovcnt, offset) => {
      // Gather all iovecs into one contiguous buffer and issue a single
      // FS.write, matching POSIX writev's single gather-write semantics (as
      // __syscall_sendmsg already does). Per-iovec writes fragment a stream
      // socket send into multiple segments, breaking stream byte semantics.
      if (iovcnt == 1) {
        // Single iovec: write directly from HEAP8, no gather buffer needed.
        return FS.write(stream, HEAP8, HEAPU32[((iov)>>2)], HEAPU32[(((iov)+(4))>>2)], offset);
      }
      var total = 0;
      for (var i = 0, p = iov; i < iovcnt; i++, p += 8) {
        total += HEAPU32[(((p)+(4))>>2)];
      }
      var view = new Uint8Array(total);
      var voff = 0;
      for (var i = 0; i < iovcnt; i++, iov += 8) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        view.set(HEAPU8.subarray(ptr, ptr + len), voff);
        voff += len;
      }
      return FS.write(stream, view, 0, total, offset);
    };
  
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }
  

  var _glActiveTexture = _emscripten_glActiveTexture;

  var _glAttachShader = _emscripten_glAttachShader;

  var _glBindAttribLocation = _emscripten_glBindAttribLocation;

  var _glBindBuffer = _emscripten_glBindBuffer;

  var _glBindFramebuffer = _emscripten_glBindFramebuffer;

  var _glBindRenderbuffer = _emscripten_glBindRenderbuffer;

  var _glBindTexture = _emscripten_glBindTexture;

  var _glBlendEquation = _emscripten_glBlendEquation;

  var _glBlendEquationSeparate = _emscripten_glBlendEquationSeparate;

  var _glBlendFunc = _emscripten_glBlendFunc;

  var _glBlendFuncSeparate = _emscripten_glBlendFuncSeparate;

  var _glBufferData = _emscripten_glBufferData;

  var _glBufferSubData = _emscripten_glBufferSubData;

  var _glCheckFramebufferStatus = _emscripten_glCheckFramebufferStatus;

  var _glClear = _emscripten_glClear;

  var _glClearColor = _emscripten_glClearColor;

  var _glClearDepthf = _emscripten_glClearDepthf;

  var _glCompileShader = _emscripten_glCompileShader;

  var _glCompressedTexImage2D = _emscripten_glCompressedTexImage2D;

  var _glCreateProgram = _emscripten_glCreateProgram;

  var _glCreateShader = _emscripten_glCreateShader;

  var _glCullFace = _emscripten_glCullFace;

  var _glDeleteBuffers = _emscripten_glDeleteBuffers;

  var _glDeleteFramebuffers = _emscripten_glDeleteFramebuffers;

  var _glDeleteProgram = _emscripten_glDeleteProgram;

  var _glDeleteRenderbuffers = _emscripten_glDeleteRenderbuffers;

  var _glDeleteShader = _emscripten_glDeleteShader;

  var _glDeleteTextures = _emscripten_glDeleteTextures;

  var _glDepthFunc = _emscripten_glDepthFunc;

  var _glDepthMask = _emscripten_glDepthMask;

  var _glDetachShader = _emscripten_glDetachShader;

  var _glDisable = _emscripten_glDisable;

  var _glDisableVertexAttribArray = _emscripten_glDisableVertexAttribArray;

  var _glDrawArrays = _emscripten_glDrawArrays;

  var _glDrawElements = _emscripten_glDrawElements;

  var _glEnable = _emscripten_glEnable;

  var _glEnableVertexAttribArray = _emscripten_glEnableVertexAttribArray;

  var _glFramebufferRenderbuffer = _emscripten_glFramebufferRenderbuffer;

  var _glFramebufferTexture2D = _emscripten_glFramebufferTexture2D;

  var _glFrontFace = _emscripten_glFrontFace;

  var _glGenBuffers = _emscripten_glGenBuffers;

  var _glGenFramebuffers = _emscripten_glGenFramebuffers;

  var _glGenRenderbuffers = _emscripten_glGenRenderbuffers;

  var _glGenTextures = _emscripten_glGenTextures;

  var _glGenerateMipmap = _emscripten_glGenerateMipmap;

  var _glGetAttribLocation = _emscripten_glGetAttribLocation;

  var _glGetFloatv = _emscripten_glGetFloatv;

  var _glGetFramebufferAttachmentParameteriv = _emscripten_glGetFramebufferAttachmentParameteriv;

  var _glGetProgramInfoLog = _emscripten_glGetProgramInfoLog;

  var _glGetProgramiv = _emscripten_glGetProgramiv;

  var _glGetShaderInfoLog = _emscripten_glGetShaderInfoLog;

  var _glGetShaderiv = _emscripten_glGetShaderiv;

  var _glGetString = _emscripten_glGetString;

  var _glGetUniformLocation = _emscripten_glGetUniformLocation;

  var _glLinkProgram = _emscripten_glLinkProgram;

  var _glPixelStorei = _emscripten_glPixelStorei;

  var _glReadPixels = _emscripten_glReadPixels;

  var _glRenderbufferStorage = _emscripten_glRenderbufferStorage;

  var _glScissor = _emscripten_glScissor;

  var _glShaderSource = _emscripten_glShaderSource;

  var _glTexImage2D = _emscripten_glTexImage2D;

  var _glTexParameterf = _emscripten_glTexParameterf;

  var _glTexParameteri = _emscripten_glTexParameteri;

  var _glUniform1fv = _emscripten_glUniform1fv;

  var _glUniform1i = _emscripten_glUniform1i;

  var _glUniform1iv = _emscripten_glUniform1iv;

  var _glUniform2fv = _emscripten_glUniform2fv;

  var _glUniform2iv = _emscripten_glUniform2iv;

  var _glUniform3fv = _emscripten_glUniform3fv;

  var _glUniform3iv = _emscripten_glUniform3iv;

  var _glUniform4f = _emscripten_glUniform4f;

  var _glUniform4fv = _emscripten_glUniform4fv;

  var _glUniform4iv = _emscripten_glUniform4iv;

  var _glUniformMatrix4fv = _emscripten_glUniformMatrix4fv;

  var _glUseProgram = _emscripten_glUseProgram;

  var _glVertexAttrib1fv = _emscripten_glVertexAttrib1fv;

  var _glVertexAttrib2fv = _emscripten_glVertexAttrib2fv;

  var _glVertexAttrib3fv = _emscripten_glVertexAttrib3fv;

  var _glVertexAttrib4fv = _emscripten_glVertexAttrib4fv;

  var _glVertexAttribPointer = _emscripten_glVertexAttribPointer;

  var _glViewport = _emscripten_glViewport;

  
  
  
  /** @constructor */
  function GLFW_Window(id, width, height, framebufferWidth, framebufferHeight, title, monitor, share) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.fullscreen = false; // Used to determine if app is in fullscreen mode
        this.storedX = 0; // Used to store X before fullscreen
        this.storedY = 0; // Used to store Y before fullscreen
        this.width = width;
        this.height = height;
        this.framebufferWidth = framebufferWidth;
        this.framebufferHeight = framebufferHeight;
        this.storedWidth = width; // Used to store width before fullscreen
        this.storedHeight = height; // Used to store height before fullscreen
        this.title = title;
        this.monitor = monitor;
        this.share = share;
        this.attributes = {...GLFW.hints};
        this.inputModes = {
          0x00033001:0x00034001, // GLFW_CURSOR (GLFW_CURSOR_NORMAL)
          0x00033002:0, // GLFW_STICKY_KEYS
          0x00033003:0, // GLFW_STICKY_MOUSE_BUTTONS
        };
        this.buttons = 0;
        this.keys = new Array();
        this.domKeys = new Array();
        this.shouldClose = 0;
        this.title = null;
        this.windowPosFunc = 0; // GLFWwindowposfun
        this.windowSizeFunc = 0; // GLFWwindowsizefun
        this.windowCloseFunc = 0; // GLFWwindowclosefun
        this.windowRefreshFunc = 0; // GLFWwindowrefreshfun
        this.windowFocusFunc = 0; // GLFWwindowfocusfun
        this.windowIconifyFunc = 0; // GLFWwindowiconifyfun
        this.windowMaximizeFunc = 0; // GLFWwindowmaximizefun
        this.framebufferSizeFunc = 0; // GLFWframebuffersizefun
        this.windowContentScaleFunc = 0; // GLFWwindowcontentscalefun
        this.mouseButtonFunc = 0; // GLFWmousebuttonfun
        this.cursorPosFunc = 0; // GLFWcursorposfun
        this.cursorEnterFunc = 0; // GLFWcursorenterfun
        this.scrollFunc = 0; // GLFWscrollfun
        this.dropFunc = 0; // GLFWdropfun
        this.keyFunc = 0; // GLFWkeyfun
        this.charFunc = 0; // GLFWcharfun
        this.userptr = 0;
      }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var GLFW = {
  WindowFromId:(id) => {
        if (id <= 0 || !GLFW.windows) return null;
        return GLFW.windows[id - 1];
      },
  joystickFunc:0,
  errorFunc:0,
  monitorFunc:0,
  active:null,
  scale:null,
  windows:null,
  monitors:null,
  monitorString:null,
  versionString:null,
  initialTime:null,
  extensions:null,
  devicePixelRatioMQL:null,
  hints:null,
  primaryTouchId:null,
  defaultHints:{
  131073:0,
  131074:0,
  131075:1,
  131076:1,
  131077:1,
  131082:0,
  135169:8,
  135170:8,
  135171:8,
  135172:8,
  135173:24,
  135174:8,
  135175:0,
  135176:0,
  135177:0,
  135178:0,
  135179:0,
  135180:0,
  135181:0,
  135182:0,
  135183:0,
  139265:196609,
  139266:1,
  139267:0,
  139268:0,
  139269:0,
  139270:0,
  139271:0,
  139272:0,
  139276:0,
  },
  DOMToGLFWKeyCode:(keycode) => {
        switch (keycode) {
          // these keycodes are only defined for GLFW3, assume they are the same for GLFW2
          case 0x20:return 32; // DOM_VK_SPACE -> GLFW_KEY_SPACE
          case 0xDE:return 39; // DOM_VK_QUOTE -> GLFW_KEY_APOSTROPHE
          case 0xBC:return 44; // DOM_VK_COMMA -> GLFW_KEY_COMMA
          case 0xAD:return 45; // DOM_VK_HYPHEN_MINUS -> GLFW_KEY_MINUS
          case 0xBD:return 45; // DOM_VK_MINUS -> GLFW_KEY_MINUS
          case 0xBE:return 46; // DOM_VK_PERIOD -> GLFW_KEY_PERIOD
          case 0xBF:return 47; // DOM_VK_SLASH -> GLFW_KEY_SLASH
          case 0x30:return 48; // DOM_VK_0 -> GLFW_KEY_0
          case 0x31:return 49; // DOM_VK_1 -> GLFW_KEY_1
          case 0x32:return 50; // DOM_VK_2 -> GLFW_KEY_2
          case 0x33:return 51; // DOM_VK_3 -> GLFW_KEY_3
          case 0x34:return 52; // DOM_VK_4 -> GLFW_KEY_4
          case 0x35:return 53; // DOM_VK_5 -> GLFW_KEY_5
          case 0x36:return 54; // DOM_VK_6 -> GLFW_KEY_6
          case 0x37:return 55; // DOM_VK_7 -> GLFW_KEY_7
          case 0x38:return 56; // DOM_VK_8 -> GLFW_KEY_8
          case 0x39:return 57; // DOM_VK_9 -> GLFW_KEY_9
          case 0x3B:return 59; // DOM_VK_SEMICOLON -> GLFW_KEY_SEMICOLON
          case 0x3D:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0xBB:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0x41:return 65; // DOM_VK_A -> GLFW_KEY_A
          case 0x42:return 66; // DOM_VK_B -> GLFW_KEY_B
          case 0x43:return 67; // DOM_VK_C -> GLFW_KEY_C
          case 0x44:return 68; // DOM_VK_D -> GLFW_KEY_D
          case 0x45:return 69; // DOM_VK_E -> GLFW_KEY_E
          case 0x46:return 70; // DOM_VK_F -> GLFW_KEY_F
          case 0x47:return 71; // DOM_VK_G -> GLFW_KEY_G
          case 0x48:return 72; // DOM_VK_H -> GLFW_KEY_H
          case 0x49:return 73; // DOM_VK_I -> GLFW_KEY_I
          case 0x4A:return 74; // DOM_VK_J -> GLFW_KEY_J
          case 0x4B:return 75; // DOM_VK_K -> GLFW_KEY_K
          case 0x4C:return 76; // DOM_VK_L -> GLFW_KEY_L
          case 0x4D:return 77; // DOM_VK_M -> GLFW_KEY_M
          case 0x4E:return 78; // DOM_VK_N -> GLFW_KEY_N
          case 0x4F:return 79; // DOM_VK_O -> GLFW_KEY_O
          case 0x50:return 80; // DOM_VK_P -> GLFW_KEY_P
          case 0x51:return 81; // DOM_VK_Q -> GLFW_KEY_Q
          case 0x52:return 82; // DOM_VK_R -> GLFW_KEY_R
          case 0x53:return 83; // DOM_VK_S -> GLFW_KEY_S
          case 0x54:return 84; // DOM_VK_T -> GLFW_KEY_T
          case 0x55:return 85; // DOM_VK_U -> GLFW_KEY_U
          case 0x56:return 86; // DOM_VK_V -> GLFW_KEY_V
          case 0x57:return 87; // DOM_VK_W -> GLFW_KEY_W
          case 0x58:return 88; // DOM_VK_X -> GLFW_KEY_X
          case 0x59:return 89; // DOM_VK_Y -> GLFW_KEY_Y
          case 0x5a:return 90; // DOM_VK_Z -> GLFW_KEY_Z
          case 0xDB:return 91; // DOM_VK_OPEN_BRACKET -> GLFW_KEY_LEFT_BRACKET
          case 0xDC:return 92; // DOM_VK_BACKSLASH -> GLFW_KEY_BACKSLASH
          case 0xDD:return 93; // DOM_VK_CLOSE_BRACKET -> GLFW_KEY_RIGHT_BRACKET
          case 0xC0:return 96; // DOM_VK_BACK_QUOTE -> GLFW_KEY_GRAVE_ACCENT
  
          case 0x1B:return 256; // DOM_VK_ESCAPE -> GLFW_KEY_ESCAPE
          case 0x0D:return 257; // DOM_VK_RETURN -> GLFW_KEY_ENTER
          case 0x09:return 258; // DOM_VK_TAB -> GLFW_KEY_TAB
          case 0x08:return 259; // DOM_VK_BACK -> GLFW_KEY_BACKSPACE
          case 0x2D:return 260; // DOM_VK_INSERT -> GLFW_KEY_INSERT
          case 0x2E:return 261; // DOM_VK_DELETE -> GLFW_KEY_DELETE
          case 0x27:return 262; // DOM_VK_RIGHT -> GLFW_KEY_RIGHT
          case 0x25:return 263; // DOM_VK_LEFT -> GLFW_KEY_LEFT
          case 0x28:return 264; // DOM_VK_DOWN -> GLFW_KEY_DOWN
          case 0x26:return 265; // DOM_VK_UP -> GLFW_KEY_UP
          case 0x21:return 266; // DOM_VK_PAGE_UP -> GLFW_KEY_PAGE_UP
          case 0x22:return 267; // DOM_VK_PAGE_DOWN -> GLFW_KEY_PAGE_DOWN
          case 0x24:return 268; // DOM_VK_HOME -> GLFW_KEY_HOME
          case 0x23:return 269; // DOM_VK_END -> GLFW_KEY_END
          case 0x14:return 280; // DOM_VK_CAPS_LOCK -> GLFW_KEY_CAPS_LOCK
          case 0x91:return 281; // DOM_VK_SCROLL_LOCK -> GLFW_KEY_SCROLL_LOCK
          case 0x90:return 282; // DOM_VK_NUM_LOCK -> GLFW_KEY_NUM_LOCK
          case 0x2C:return 283; // DOM_VK_SNAPSHOT -> GLFW_KEY_PRINT_SCREEN
          case 0x13:return 284; // DOM_VK_PAUSE -> GLFW_KEY_PAUSE
          case 0x70:return 290; // DOM_VK_F1 -> GLFW_KEY_F1
          case 0x71:return 291; // DOM_VK_F2 -> GLFW_KEY_F2
          case 0x72:return 292; // DOM_VK_F3 -> GLFW_KEY_F3
          case 0x73:return 293; // DOM_VK_F4 -> GLFW_KEY_F4
          case 0x74:return 294; // DOM_VK_F5 -> GLFW_KEY_F5
          case 0x75:return 295; // DOM_VK_F6 -> GLFW_KEY_F6
          case 0x76:return 296; // DOM_VK_F7 -> GLFW_KEY_F7
          case 0x77:return 297; // DOM_VK_F8 -> GLFW_KEY_F8
          case 0x78:return 298; // DOM_VK_F9 -> GLFW_KEY_F9
          case 0x79:return 299; // DOM_VK_F10 -> GLFW_KEY_F10
          case 0x7A:return 300; // DOM_VK_F11 -> GLFW_KEY_F11
          case 0x7B:return 301; // DOM_VK_F12 -> GLFW_KEY_F12
          case 0x7C:return 302; // DOM_VK_F13 -> GLFW_KEY_F13
          case 0x7D:return 303; // DOM_VK_F14 -> GLFW_KEY_F14
          case 0x7E:return 304; // DOM_VK_F15 -> GLFW_KEY_F15
          case 0x7F:return 305; // DOM_VK_F16 -> GLFW_KEY_F16
          case 0x80:return 306; // DOM_VK_F17 -> GLFW_KEY_F17
          case 0x81:return 307; // DOM_VK_F18 -> GLFW_KEY_F18
          case 0x82:return 308; // DOM_VK_F19 -> GLFW_KEY_F19
          case 0x83:return 309; // DOM_VK_F20 -> GLFW_KEY_F20
          case 0x84:return 310; // DOM_VK_F21 -> GLFW_KEY_F21
          case 0x85:return 311; // DOM_VK_F22 -> GLFW_KEY_F22
          case 0x86:return 312; // DOM_VK_F23 -> GLFW_KEY_F23
          case 0x87:return 313; // DOM_VK_F24 -> GLFW_KEY_F24
          case 0x88:return 314; // 0x88 (not used?) -> GLFW_KEY_F25
          case 0x60:return 320; // DOM_VK_NUMPAD0 -> GLFW_KEY_KP_0
          case 0x61:return 321; // DOM_VK_NUMPAD1 -> GLFW_KEY_KP_1
          case 0x62:return 322; // DOM_VK_NUMPAD2 -> GLFW_KEY_KP_2
          case 0x63:return 323; // DOM_VK_NUMPAD3 -> GLFW_KEY_KP_3
          case 0x64:return 324; // DOM_VK_NUMPAD4 -> GLFW_KEY_KP_4
          case 0x65:return 325; // DOM_VK_NUMPAD5 -> GLFW_KEY_KP_5
          case 0x66:return 326; // DOM_VK_NUMPAD6 -> GLFW_KEY_KP_6
          case 0x67:return 327; // DOM_VK_NUMPAD7 -> GLFW_KEY_KP_7
          case 0x68:return 328; // DOM_VK_NUMPAD8 -> GLFW_KEY_KP_8
          case 0x69:return 329; // DOM_VK_NUMPAD9 -> GLFW_KEY_KP_9
          case 0x6E:return 330; // DOM_VK_DECIMAL -> GLFW_KEY_KP_DECIMAL
          case 0x6F:return 331; // DOM_VK_DIVIDE -> GLFW_KEY_KP_DIVIDE
          case 0x6A:return 332; // DOM_VK_MULTIPLY -> GLFW_KEY_KP_MULTIPLY
          case 0x6D:return 333; // DOM_VK_SUBTRACT -> GLFW_KEY_KP_SUBTRACT
          case 0x6B:return 334; // DOM_VK_ADD -> GLFW_KEY_KP_ADD
          // case 0x0D:return 335; // DOM_VK_RETURN -> GLFW_KEY_KP_ENTER (DOM_KEY_LOCATION_RIGHT)
          // case 0x61:return 336; // DOM_VK_EQUALS -> GLFW_KEY_KP_EQUAL (DOM_KEY_LOCATION_RIGHT)
          case 0x10:return 340; // DOM_VK_SHIFT -> GLFW_KEY_LEFT_SHIFT
          case 0x11:return 341; // DOM_VK_CONTROL -> GLFW_KEY_LEFT_CONTROL
          case 0x12:return 342; // DOM_VK_ALT -> GLFW_KEY_LEFT_ALT
          case 0x5B:return 343; // DOM_VK_WIN -> GLFW_KEY_LEFT_SUPER
          case 0xE0:return 343; // DOM_VK_META -> GLFW_KEY_LEFT_SUPER
          // case 0x10:return 344; // DOM_VK_SHIFT -> GLFW_KEY_RIGHT_SHIFT (DOM_KEY_LOCATION_RIGHT)
          // case 0x11:return 345; // DOM_VK_CONTROL -> GLFW_KEY_RIGHT_CONTROL (DOM_KEY_LOCATION_RIGHT)
          // case 0x12:return 346; // DOM_VK_ALT -> GLFW_KEY_RIGHT_ALT (DOM_KEY_LOCATION_RIGHT)
          // case 0x5B:return 347; // DOM_VK_WIN -> GLFW_KEY_RIGHT_SUPER (DOM_KEY_LOCATION_RIGHT)
          case 0x5D:return 348; // DOM_VK_CONTEXT_MENU -> GLFW_KEY_MENU
          // XXX: GLFW_KEY_WORLD_1, GLFW_KEY_WORLD_2 what are these?
          default:return -1; // GLFW_KEY_UNKNOWN
        };
      },
  getModBits:(win) => {
        var mod = 0;
        if (win.keys[340]) mod |= 0x0001; // GLFW_MOD_SHIFT
        if (win.keys[341]) mod |= 0x0002; // GLFW_MOD_CONTROL
        if (win.keys[342]) mod |= 0x0004; // GLFW_MOD_ALT
        if (win.keys[343] || win.keys[348]) mod |= 0x0008; // GLFW_MOD_SUPER
        // add caps and num lock keys? only if lock_key_mod is set
        return mod;
      },
  onKeyPress:(event) => {
        if (!GLFW.active || !GLFW.active.charFunc) return;
        if (event.ctrlKey || event.metaKey) return;
  
        // correct unicode charCode is only available with onKeyPress event
        var charCode = event.charCode;
        if (charCode == 0 || (charCode >= 0x00 && charCode <= 0x1F)) return;
  
        getWasmTableEntry(GLFW.active.charFunc)(GLFW.active.id, charCode);
      },
  onKeyChanged:(keyCode, status) => {
        if (!GLFW.active) return;
  
        var key = GLFW.DOMToGLFWKeyCode(keyCode);
        if (key == -1) return;
  
        var repeat = status && GLFW.active.keys[key];
        GLFW.active.keys[key] = status;
        GLFW.active.domKeys[keyCode] = status;
  
        if (GLFW.active.keyFunc) {
          if (repeat) status = 2; // GLFW_REPEAT
          getWasmTableEntry(GLFW.active.keyFunc)(GLFW.active.id, key, keyCode, status, GLFW.getModBits(GLFW.active));
        }
      },
  onGamepadConnected:(event) => {
        GLFW.refreshJoysticks();
      },
  onGamepadDisconnected:(event) => {
        GLFW.refreshJoysticks();
      },
  onKeydown:(event) => {
        GLFW.onKeyChanged(event.keyCode, 1); // GLFW_PRESS or GLFW_REPEAT
  
        // This logic comes directly from the sdl implementation. We cannot
        // call preventDefault on all keydown events otherwise onKeyPress will
        // not get called
        if (event.key == 'Backspace' || event.key == 'Tab') {
          event.preventDefault();
        }
      },
  onKeyup:(event) => {
        GLFW.onKeyChanged(event.keyCode, 0); // GLFW_RELEASE
      },
  onBlur:(event) => {
        if (!GLFW.active) return;
  
        for (var i = 0; i < GLFW.active.domKeys.length; ++i) {
          if (GLFW.active.domKeys[i]) {
            GLFW.onKeyChanged(i, 0); // GLFW_RELEASE
          }
        }
      },
  onMousemove:(event) => {
        if (!GLFW.active) return;
  
        if (event.type === 'touchmove') {
          // Handling for touch events that are being converted to mouse input.
  
          // Don't let the browser fire a duplicate mouse event.
          event.preventDefault();
  
          let primaryChanged = false;
          for (let i of event.changedTouches) {
            // If our chosen primary touch moved, update Browser mouse coords
            if (GLFW.primaryTouchId === i.identifier) {
              Browser.setMouseCoords(i.pageX, i.pageY);
              primaryChanged = true;
              break;
            }
          }
  
          if (!primaryChanged) {
            // Do not send mouse events if some touch other than the primary triggered this.
            return;
          }
  
        } else {
          // Handling for non-touch mouse input events.
          Browser.calculateMouseEvent(event);
        }
  
        if (event.target != Browser.getCanvas() || !GLFW.active.cursorPosFunc) return;
  
        if (GLFW.active.cursorPosFunc) {
          getWasmTableEntry(GLFW.active.cursorPosFunc)(GLFW.active.id, Browser.mouseX, Browser.mouseY);
        }
      },
  DOMToGLFWMouseButton:(event) => {
        // DOM and glfw have different button codes.
        // See http://www.w3schools.com/jsref/event_button.asp.
        var eventButton = event['button'];
        if (eventButton > 0) {
          if (eventButton == 1) {
            eventButton = 2;
          } else {
            eventButton = 1;
          }
        }
        return eventButton;
      },
  onMouseenter:(event) => {
        if (!GLFW.active) return;
  
        if (event.target != Browser.getCanvas()) return;
  
        if (GLFW.active.cursorEnterFunc) {
          getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 1);
        }
      },
  onMouseleave:(event) => {
        if (!GLFW.active) return;
  
        if (event.target != Browser.getCanvas()) return;
  
        if (GLFW.active.cursorEnterFunc) {
          getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 0);
        }
      },
  onMouseButtonChanged:(event, status) => {
        if (!GLFW.active) return;
  
        if (event.target != Browser.getCanvas()) return;
  
        // Is this from a touch event?
        const isTouchType = event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchcancel';
  
        // Only emulating mouse left-click behavior for touches.
        let eventButton = 0;
        if (isTouchType) {
          // Handling for touch events that are being converted to mouse input.
  
          // Don't let the browser fire a duplicate mouse event.
          event.preventDefault();
  
          let primaryChanged = false;
  
          // Set a primary touch if we have none.
          if (GLFW.primaryTouchId === null && event.type === 'touchstart' && event.targetTouches.length > 0) {
            // Pick the first touch that started in the canvas and treat it as primary.
            const chosenTouch = event.targetTouches[0];
            GLFW.primaryTouchId = chosenTouch.identifier;
  
            Browser.setMouseCoords(chosenTouch.pageX, chosenTouch.pageY);
            primaryChanged = true;
          } else if (event.type === 'touchend' || event.type === 'touchcancel') {
            // Clear the primary touch if it ended.
            for (let i of event.changedTouches) {
              // If our chosen primary touch ended, remove it.
              if (GLFW.primaryTouchId === i.identifier) {
                GLFW.primaryTouchId = null;
                primaryChanged = true;
                break;
              }
            }
          }
  
          if (!primaryChanged) {
            // Do not send mouse events if some touch other than the primary triggered this.
            return;
          }
  
        } else {
          // Handling for non-touch mouse input events.
          Browser.calculateMouseEvent(event);
          eventButton = GLFW.DOMToGLFWMouseButton(event);
        }
  
        if (status == 1) { // GLFW_PRESS
          GLFW.active.buttons |= (1 << eventButton);
          try {
            event.target.setCapture();
          } catch (e) {}
        } else {  // GLFW_RELEASE
          GLFW.active.buttons &= ~(1 << eventButton);
        }
  
        // Send mouse event to GLFW.
        if (GLFW.active.mouseButtonFunc) {
          getWasmTableEntry(GLFW.active.mouseButtonFunc)(GLFW.active.id, eventButton, status, GLFW.getModBits(GLFW.active));
        }
      },
  onMouseButtonDown:(event) => {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 1); // GLFW_PRESS
      },
  onMouseButtonUp:(event) => {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 0); // GLFW_RELEASE
      },
  onMouseWheel:(event) => {
        // Note the minus sign that flips browser wheel direction (positive direction scrolls page down) to native wheel direction (positive direction is mouse wheel up)
        var delta = -Browser.getMouseWheelDelta(event);
        delta = (delta == 0) ? 0 : (delta > 0 ? Math.max(delta, 1) : Math.min(delta, -1)); // Quantize to integer so that minimum scroll is at least +/- 1.
        GLFW.wheelPos += delta;
  
        if (!GLFW.active || !GLFW.active.scrollFunc || event.target != Browser.getCanvas()) return;
        var sx = 0;
        var sy = delta;
        if (event.type == 'mousewheel') {
          sx = event.wheelDeltaX;
        } else {
          sx = event.deltaX;
        }
  
        getWasmTableEntry(GLFW.active.scrollFunc)(GLFW.active.id, sx, sy);
  
        event.preventDefault();
      },
  onCanvasResize:(width, height, framebufferWidth, framebufferHeight) => {
        if (!GLFW.active) return;
  
        var resizeNeeded = false;
  
        // If the client is requesting fullscreen mode
        if (getFullscreenElement()) {
          if (!GLFW.active.fullscreen) {
            resizeNeeded = width != screen.width || height != screen.height;
            GLFW.active.storedX = GLFW.active.x;
            GLFW.active.storedY = GLFW.active.y;
            GLFW.active.storedWidth = GLFW.active.width;
            GLFW.active.storedHeight = GLFW.active.height;
            GLFW.active.x = GLFW.active.y = 0;
            GLFW.active.width = screen.width;
            GLFW.active.height = screen.height;
            GLFW.active.fullscreen = true;
          }
        // If the client is reverting from fullscreen mode
        } else if (GLFW.active.fullscreen == true) {
          resizeNeeded = width != GLFW.active.storedWidth || height != GLFW.active.storedHeight;
          GLFW.active.x = GLFW.active.storedX;
          GLFW.active.y = GLFW.active.storedY;
          GLFW.active.width = GLFW.active.storedWidth;
          GLFW.active.height = GLFW.active.storedHeight;
          GLFW.active.fullscreen = false;
        }
  
        if (resizeNeeded) {
          // width or height is changed (fullscreen / exit fullscreen) which will call this listener back
          // with proper framebufferWidth/framebufferHeight
          Browser.setCanvasSize(GLFW.active.width, GLFW.active.height);
        } else if (GLFW.active.width != width ||
                   GLFW.active.height != height ||
                   GLFW.active.framebufferWidth != framebufferWidth ||
                   GLFW.active.framebufferHeight != framebufferHeight) {
          GLFW.active.width = width;
          GLFW.active.height = height;
          GLFW.active.framebufferWidth = framebufferWidth;
          GLFW.active.framebufferHeight = framebufferHeight;
          GLFW.onWindowSizeChanged();
          GLFW.onFramebufferSizeChanged();
        }
      },
  onWindowSizeChanged:() => {
        if (!GLFW.active) return;
  
        if (GLFW.active.windowSizeFunc) {
          getWasmTableEntry(GLFW.active.windowSizeFunc)(GLFW.active.id, GLFW.active.width, GLFW.active.height);
        }
      },
  onFramebufferSizeChanged:() => {
        if (!GLFW.active) return;
  
        if (GLFW.active.framebufferSizeFunc) {
          getWasmTableEntry(GLFW.active.framebufferSizeFunc)(GLFW.active.id, GLFW.active.framebufferWidth, GLFW.active.framebufferHeight);
        }
      },
  onWindowContentScaleChanged:(scale) => {
        GLFW.scale = scale;
        if (!GLFW.active) return;
  
        if (GLFW.active.windowContentScaleFunc) {
          getWasmTableEntry(GLFW.active.windowContentScaleFunc)(GLFW.active.id, GLFW.scale, GLFW.scale);
        }
      },
  getTime:() => _emscripten_get_now() / 1000,
  setWindowTitle:(winid, title) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        win.title = title;
        if (GLFW.active.id == win.id) {
          _emscripten_set_window_title(title);
        }
      },
  setJoystickCallback:(cbfun) => {
        var prevcbfun = GLFW.joystickFunc;
        GLFW.joystickFunc = cbfun;
        GLFW.refreshJoysticks();
        return prevcbfun;
      },
  joys:{
  },
  lastGamepadState:[],
  lastGamepadStateFrame:null,
  refreshJoysticks:() => {
        // Produce a new Gamepad API sample if we are ticking a new game frame, or if not using emscripten_set_main_loop() at all to drive animation.
        if (MainLoop.currentFrameNumber !== GLFW.lastGamepadStateFrame || !MainLoop.currentFrameNumber) {
          GLFW.lastGamepadState = navigator.getGamepads?.() ?? [];
          GLFW.lastGamepadStateFrame = MainLoop.currentFrameNumber;
  
          for (var joy = 0; joy < GLFW.lastGamepadState.length; ++joy) {
            var gamepad = GLFW.lastGamepadState[joy];
  
            if (gamepad) {
              if (!GLFW.joys[joy]) {
                out('glfw joystick connected:',joy);
                GLFW.joys[joy] = {
                  id: stringToNewUTF8(gamepad.id),
                  buttonsCount: gamepad.buttons.length,
                  axesCount: gamepad.axes.length,
                  buttons: _malloc(gamepad.buttons.length),
                  axes: _malloc(gamepad.axes.length*4),
                };
  
                if (GLFW.joystickFunc) {
                  getWasmTableEntry(GLFW.joystickFunc)(joy, 0x00040001); // GLFW_CONNECTED
                }
              }
  
              var data = GLFW.joys[joy];
  
              for (var i = 0; i < gamepad.buttons.length;  ++i) {
                HEAP8[data.buttons + i] = gamepad.buttons[i].pressed;
              }
  
              for (var i = 0; i < gamepad.axes.length; ++i) {
                HEAPF32[((data.axes + i*4)>>2)] = gamepad.axes[i];
              }
            } else {
              if (GLFW.joys[joy]) {
                out('glfw joystick disconnected',joy);
  
                if (GLFW.joystickFunc) {
                  getWasmTableEntry(GLFW.joystickFunc)(joy, 0x00040002); // GLFW_DISCONNECTED
                }
  
                _free(GLFW.joys[joy].id);
                _free(GLFW.joys[joy].buttons);
                _free(GLFW.joys[joy].axes);
  
                delete GLFW.joys[joy];
              }
            }
          }
        }
      },
  setKeyCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.keyFunc;
        win.keyFunc = cbfun;
        return prevcbfun;
      },
  setCharCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.charFunc;
        win.charFunc = cbfun;
        return prevcbfun;
      },
  setMouseButtonCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.mouseButtonFunc;
        win.mouseButtonFunc = cbfun;
        return prevcbfun;
      },
  setCursorPosCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.cursorPosFunc;
        win.cursorPosFunc = cbfun;
        return prevcbfun;
      },
  setScrollCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.scrollFunc;
        win.scrollFunc = cbfun;
        return prevcbfun;
      },
  setDropCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.dropFunc;
        win.dropFunc = cbfun;
        return prevcbfun;
      },
  onDrop:(event) => {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
        if (!event.dataTransfer || !event.dataTransfer.files || event.dataTransfer.files.length == 0) return;
  
        event.preventDefault();
  
        var drop_dir = '.glfw_dropped_files';
        var filenames = _malloc(event.dataTransfer.files.length * 4);
        var filenamesArray = [];
        for (var i = 0; i < event.dataTransfer.files.length; ++i) {
          var path = `/${drop_dir}/${event.dataTransfer.files[i].name.replace(/\//g, '_')}`;
          var filename = stringToNewUTF8(path);
          filenamesArray.push(filename);
          HEAPU32[(((filenames)+(i*4))>>2)] = filename;
        }
  
        // Read and save the files to emscripten's FS
        var written = 0;
        FS.createPath('/', drop_dir);
  
        function save(file, in_path, numfiles) {
          var path = '/' + drop_dir + in_path + '/' + file.name.replace(/\//g, '_');
          var reader = new FileReader();
          reader.onloadend = (e) => {
            if (reader.readyState != 2) { // not DONE
              ++written;
              err(`failed to read dropped file: ${in_path}/${file.name}: ${reader.error}`);
              return;
            }
  
            var data = e.target.result;
            FS.writeFile(path, new Uint8Array(data));
            if (++written === numfiles) {
              getWasmTableEntry(GLFW.active.dropFunc)(GLFW.active.id, filenamesArray.length, filenames);
  
              for (var i = 0; i < filenamesArray.length; ++i) {
                _free(filenamesArray[i]);
              }
              _free(filenames);
            }
          };
          reader.readAsArrayBuffer(file);
        }
  
        let filesQ = [];
        function finalize() {
          var count = filesQ.length;
          for (var i = 0; i < count; ++i) {
            save(filesQ[i].file, filesQ[i].path, count);
          }
        } 
  
        if (DataTransferItem.prototype.webkitGetAsEntry) {
          let entriesTree = {};
          function markDone(fullpath, recursive) {
            if (entriesTree[fullpath].subpaths.length != 0) return;
            delete entriesTree[fullpath];
            let parentpath = fullpath.substring(0, fullpath.lastIndexOf('/'));
            if (!entriesTree.hasOwnProperty(parentpath)) {
              if (Object.keys(entriesTree).length == 0) finalize();
              return;
            }
            const fpIndex = entriesTree[parentpath].subpaths.indexOf(fullpath);
            if (fpIndex > -1) entriesTree[parentpath].subpaths.splice(fpIndex, 1);
            if (recursive) markDone(parentpath, true);
            if (Object.keys(entriesTree).length == 0) finalize();
          }
          function processEntry(entry) {
            let fp = entry.fullPath;
            let pp = fp.substring(0, fp.lastIndexOf('/'));
            entriesTree[fp] = { subpaths: [] };
            if (entry.isFile) {
              entry.file((f) => { filesQ.push({ file: f, path: pp }); markDone(fp, false); })
            } else if (entry.isDirectory) {
              if (entriesTree.hasOwnProperty(pp)) entriesTree[pp].subpaths.push(fp);
              FS.createPath('/' + drop_dir + pp, entry.name);
              var reader = entry.createReader();
              var rRead = function (dirEntries) {
                if (dirEntries.length == 0) {
                  markDone(fp, true);
                  return;
                }
                for (const ent of dirEntries) processEntry(ent);
                reader.readEntries(rRead);
              };
              reader.readEntries(rRead);
            }
          }
          for (const item of event.dataTransfer.items) {
            processEntry(item.webkitGetAsEntry());
          }
        } else {
          // fallback for browsers that does not support webkitGetAsEntry
          for (const file of event.dataTransfer.files) {
            filesQ.push({ file: file, path: '' });
          }
          finalize();
        }
  
        return false;
      },
  onDragover:(event) => {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
  
        event.preventDefault();
        return false;
      },
  setWindowSizeCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowSizeFunc;
        win.windowSizeFunc = cbfun;
  
        return prevcbfun;
      },
  setWindowCloseCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowCloseFunc;
        win.windowCloseFunc = cbfun;
        return prevcbfun;
      },
  setWindowRefreshCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowRefreshFunc;
        win.windowRefreshFunc = cbfun;
        return prevcbfun;
      },
  onClickRequestPointerLock:(e) => {
        var canvas = Browser.getCanvas();
        if (!Browser.pointerLock && canvas.requestPointerLock) {
          canvas.requestPointerLock();
          e.preventDefault();
        }
      },
  setInputMode:(winid, mode, value) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        switch (mode) {
          case 0x00033001: { // GLFW_CURSOR
            var canvas = Browser.getCanvas();
            switch (value) {
              case 0x00034001: { // GLFW_CURSOR_NORMAL
                win.inputModes[mode] = value;
                canvas.removeEventListener('click', GLFW.onClickRequestPointerLock, true);
                document.exitPointerLock();
                break;
              }
              case 0x00034002: { // GLFW_CURSOR_HIDDEN
                err('glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented');
                break;
              }
              case 0x00034003: { // GLFW_CURSOR_DISABLED
                win.inputModes[mode] = value;
                canvas.addEventListener('click', GLFW.onClickRequestPointerLock, true);
                canvas.requestPointerLock();
                break;
              }
              default: {
                err(`glfwSetInputMode called with unknown value parameter value: ${value}`);
                break;
              }
            }
            break;
          }
          case 0x00033002: { // GLFW_STICKY_KEYS
            err('glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented');
            break;
          }
          case 0x00033003: { // GLFW_STICKY_MOUSE_BUTTONS
            err('glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented');
            break;
          }
          case 0x00033004: { // GLFW_LOCK_KEY_MODS
            err('glfwSetInputMode called with GLFW_LOCK_KEY_MODS mode not implemented');
            break;
          }
          case 0x00033005: { // GLFW_RAW_MOUSE_MOTION
            err('glfwSetInputMode called with GLFW_RAW_MOUSE_MOTION mode not implemented');
            break;
          }
          default: {
            err(`glfwSetInputMode called with unknown mode parameter value: ${mode}`);
            break;
          }
        }
      },
  getKey:(winid, key) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return win.keys[key];
      },
  getMouseButton:(winid, button) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return (win.buttons & (1 << button)) > 0;
      },
  getCursorPos:(winid, x, y) => {
        HEAPF64[((x)>>3)] = Browser.mouseX;
        HEAPF64[((y)>>3)] = Browser.mouseY;
      },
  getMousePos:(winid, x, y) => {
        HEAP32[((x)>>2)] = Browser.mouseX;
        HEAP32[((y)>>2)] = Browser.mouseY;
      },
  setCursorPos:(winid, x, y) => {
      },
  getWindowPos:(winid, x, y) => {
        var wx = 0;
        var wy = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          wx = win.x;
          wy = win.y;
        }
  
        if (x) {
          HEAP32[((x)>>2)] = wx;
        }
  
        if (y) {
          HEAP32[((y)>>2)] = wy;
        }
      },
  setWindowPos:(winid, x, y) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        win.x = x;
        win.y = y;
      },
  getWindowSize:(winid, width, height) => {
        var ww = 0;
        var wh = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          ww = win.width;
          wh = win.height;
        }
  
        if (width) {
          HEAP32[((width)>>2)] = ww;
        }
  
        if (height) {
          HEAP32[((height)>>2)] = wh;
        }
      },
  setWindowSize:(winid, width, height) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (GLFW.active.id == win.id) {
          Browser.setCanvasSize(width, height); // triggers the listener (onCanvasResize) + windowSizeFunc
        }
      },
  defaultWindowHints:() => {
        GLFW.hints = {...GLFW.defaultHints};
      },
  createWindow:(width, height, title, monitor, share) => {
        var i, id;
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] !== null; i++) {
          // no-op
        }
        if (i > 0) abort('glfwCreateWindow only supports one window at time currently');
  
        // id for window
        id = i + 1;
  
        // not valid
        if (width <= 0 || height <= 0) return 0;
  
        if (monitor) {
          Browser.requestFullscreen();
        } else {
          Browser.setCanvasSize(width, height);
        }
  
        // Create context when there are no existing alive windows
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] == null; i++) {
          // no-op
        }
  
        const canvas = Browser.getCanvas();
  
        var useWebGL = GLFW.hints[0x00022001] > 0; // Use WebGL when we are told to based on GLFW_CLIENT_API
        if (i == GLFW.windows.length) {
          if (useWebGL) {
            var contextAttributes = {
              antialias: (GLFW.hints[0x0002100D] > 1), // GLFW_SAMPLES
              depth: (GLFW.hints[0x00021005] > 0),     // GLFW_DEPTH_BITS
              stencil: (GLFW.hints[0x00021006] > 0),   // GLFW_STENCIL_BITS
              alpha: (GLFW.hints[0x00021004] > 0)      // GLFW_ALPHA_BITS
            }
            Browser.createContext(canvas, /*useWebGL=*/true, /*setInModule=*/true, contextAttributes);
          } else {
            Browser.init();
          }
        }
  
        // If context creation failed, do not return a valid window
        if (!Module['ctx'] && useWebGL) return 0;
  
        // Initializes the framebuffer size from the canvas
        var win = new GLFW_Window(id, width, height, canvas.width, canvas.height, title, monitor, share);
  
        // Set window to array
        if (id - 1 == GLFW.windows.length) {
          GLFW.windows.push(win);
        } else {
          GLFW.windows[id - 1] = win;
        }
  
        GLFW.active = win;
        GLFW.adjustCanvasDimensions();
        return win.id;
      },
  destroyWindow:(winid) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (win.windowCloseFunc) {
          getWasmTableEntry(win.windowCloseFunc)(win.id);
        }
  
        GLFW.windows[win.id - 1] = null;
        if (GLFW.active.id == win.id) {
          GLFW.active = null;
        }
  
        // Destroy context when no alive windows
        for (win of GLFW.windows) {
          if (win !== null) return;
        }
  
        delete Module['ctx'];
      },
  swapBuffers:(winid) => {
      },
  requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Browser.getCanvas();
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if (getFullscreenElement() === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
              Browser.updateResizeListeners();
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
              Browser.updateResizeListeners();
            }
          }
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange);
          document.addEventListener('webkitfullscreenchange', fullscreenChange);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement('div');
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        // Safari didn't Element.requestFullscreen support until 16.4
        // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
        /** @suppress {checkTypes} */
        canvasContainer.requestFullscreen ??= (canvasContainer.webkitRequestFullscreen ? () => canvasContainer.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) ??
                                              (canvasContainer.webkitRequestFullScreen ? () => canvasContainer.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
  
        canvasContainer.requestFullscreen();
      },
  updateCanvasDimensions(canvas, wNative, hNative) {
        const scale = GLFW.getHiDPIScale();
  
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if ((getFullscreenElement() === canvas.parentNode) && (typeof screen != 'undefined')) {
          var factor = Math.min(screen.width / w, screen.height / h);
          w = Math.round(w * factor);
          h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          wNative = w;
          hNative = h;
        }
        const wNativeScaled = Math.floor(wNative * scale);
        const hNativeScaled = Math.floor(hNative * scale);
        if (canvas.width  != wNativeScaled) canvas.width  = wNativeScaled;
        if (canvas.height != hNativeScaled) canvas.height = hNativeScaled;
        if (typeof canvas.style != 'undefined') {
          if (!GLFW.isCSSScalingEnabled()) {
            canvas.style.setProperty( 'width', wNative + 'px', 'important');
            canvas.style.setProperty('height', hNative + 'px', 'important');
          } else {
            canvas.style.removeProperty( 'width');
            canvas.style.removeProperty('height');
          }
        }
      },
  calculateMouseCoords(pageX, pageY) {
        // Calculate the movement based on the changes
        // in the coordinates.
        const rect = Browser.getCanvas().getBoundingClientRect();
  
        var adjustedX = pageX - (window.scrollX + rect.left);
        var adjustedY = pageY - (window.scrollY + rect.top);
  
        // getBoundingClientRect() returns dimension affected by CSS, so as a result:
        // - when CSS scaling is enabled, this will fix the mouse coordinates to match the width/height of the window
        // - otherwise the CSS width/height are forced to the width/height of the GLFW window (see updateCanvasDimensions),
        //   so there is no need to adjust the position
        if (GLFW.isCSSScalingEnabled() && GLFW.active) {
          adjustedX = adjustedX * (GLFW.active.width / rect.width);
          adjustedY = adjustedY * (GLFW.active.height / rect.height);
        }
  
        return { x: adjustedX, y: adjustedY };
      },
  setWindowAttrib:(winid, attrib, value) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        const isHiDPIAware = GLFW.isHiDPIAware();
        win.attributes[attrib] = value;
        if (isHiDPIAware !== GLFW.isHiDPIAware())
          GLFW.adjustCanvasDimensions();
      },
  getDevicePixelRatio() {
        return (typeof devicePixelRatio == 'number' && devicePixelRatio) || 1.0;
      },
  isHiDPIAware() {
        if (GLFW.active)
          return GLFW.active.attributes[0x0002200C] > 0; // GLFW_SCALE_TO_MONITOR
        else
          return false;
      },
  isCSSScalingEnabled() {
        return !GLFW.isHiDPIAware();
      },
  adjustCanvasDimensions() {
        if (GLFW.active) {
          Browser.updateCanvasDimensions(Browser.getCanvas(), GLFW.active.width, GLFW.active.height);
          Browser.updateResizeListeners();
        }
      },
  getHiDPIScale() {
        return GLFW.isHiDPIAware() ? GLFW.scale : 1.0;
      },
  onDevicePixelRatioChange() {
        GLFW.onWindowContentScaleChanged(GLFW.getDevicePixelRatio());
        GLFW.adjustCanvasDimensions();
      },
  GLFW2ParamToGLFW3Param:(param) => {
        var table = {
          0x00030001:0, // GLFW_MOUSE_CURSOR
          0x00030002:0, // GLFW_STICKY_KEYS
          0x00030003:0, // GLFW_STICKY_MOUSE_BUTTONS
          0x00030004:0, // GLFW_SYSTEM_KEYS
          0x00030005:0, // GLFW_KEY_REPEAT
          0x00030006:0, // GLFW_AUTO_POLL_EVENTS
          0x00020001:0, // GLFW_OPENED
          0x00020002:0, // GLFW_ACTIVE
          0x00020003:0, // GLFW_ICONIFIED
          0x00020004:0, // GLFW_ACCELERATED
          0x00020005:0x00021001, // GLFW_RED_BITS
          0x00020006:0x00021002, // GLFW_GREEN_BITS
          0x00020007:0x00021003, // GLFW_BLUE_BITS
          0x00020008:0x00021004, // GLFW_ALPHA_BITS
          0x00020009:0x00021005, // GLFW_DEPTH_BITS
          0x0002000A:0x00021006, // GLFW_STENCIL_BITS
          0x0002000B:0x0002100F, // GLFW_REFRESH_RATE
          0x0002000C:0x00021007, // GLFW_ACCUM_RED_BITS
          0x0002000D:0x00021008, // GLFW_ACCUM_GREEN_BITS
          0x0002000E:0x00021009, // GLFW_ACCUM_BLUE_BITS
          0x0002000F:0x0002100A, // GLFW_ACCUM_ALPHA_BITS
          0x00020010:0x0002100B, // GLFW_AUX_BUFFERS
          0x00020011:0x0002100C, // GLFW_STEREO
          0x00020012:0, // GLFW_WINDOW_NO_RESIZE
          0x00020013:0x0002100D, // GLFW_FSAA_SAMPLES
          0x00020014:0x00022002, // GLFW_OPENGL_VERSION_MAJOR
          0x00020015:0x00022003, // GLFW_OPENGL_VERSION_MINOR
          0x00020016:0x00022006, // GLFW_OPENGL_FORWARD_COMPAT
          0x00020017:0x00022007, // GLFW_OPENGL_DEBUG_CONTEXT
          0x00020018:0x00022008, // GLFW_OPENGL_PROFILE
        };
        return table[param];
      },
  };
  var _glfwCreateWindow = (width, height, title, monitor, share) => GLFW.createWindow(width, height, title, monitor, share);

  var _glfwDefaultWindowHints = () => GLFW.defaultWindowHints();

  var _glfwGetPrimaryMonitor = () => 1;

  var _glfwGetTime = () => GLFW.getTime() - GLFW.initialTime;

  
  var _glfwGetVideoModes = (monitor, count) => {
      HEAP32[((count)>>2)] = 0;
      return 0;
    };

  var _glfwInit = () => {
      if (GLFW.windows) return 1; // GL_TRUE
  
      GLFW.initialTime = GLFW.getTime();
      GLFW.defaultWindowHints();
      GLFW.windows = new Array()
      GLFW.active = null;
      GLFW.scale  = GLFW.getDevicePixelRatio();
  
      window.addEventListener('gamepadconnected', GLFW.onGamepadConnected, true);
      window.addEventListener('gamepaddisconnected', GLFW.onGamepadDisconnected, true);
      window.addEventListener('keydown', GLFW.onKeydown, true);
      window.addEventListener('keypress', GLFW.onKeyPress, true);
      window.addEventListener('keyup', GLFW.onKeyup, true);
      window.addEventListener('blur', GLFW.onBlur, true);
  
      // watch for devicePixelRatio changes
      GLFW.devicePixelRatioMQL = window.matchMedia('(resolution: ' + GLFW.getDevicePixelRatio() + 'dppx)');
      GLFW.devicePixelRatioMQL.addEventListener('change', GLFW.onDevicePixelRatioChange);
  
      var canvas = Browser.getCanvas();
      canvas.addEventListener('touchmove', GLFW.onMousemove, true);
      canvas.addEventListener('touchstart', GLFW.onMouseButtonDown, true);
      canvas.addEventListener('touchcancel', GLFW.onMouseButtonUp, true);
      canvas.addEventListener('touchend', GLFW.onMouseButtonUp, true);
      canvas.addEventListener('mousemove', GLFW.onMousemove, true);
      canvas.addEventListener('mousedown', GLFW.onMouseButtonDown, true);
      canvas.addEventListener('mouseup', GLFW.onMouseButtonUp, true);
      canvas.addEventListener('wheel', GLFW.onMouseWheel, true);
      canvas.addEventListener('mousewheel', GLFW.onMouseWheel, true);
      canvas.addEventListener('mouseenter', GLFW.onMouseenter, true);
      canvas.addEventListener('mouseleave', GLFW.onMouseleave, true);
      canvas.addEventListener('drop', GLFW.onDrop, true);
      canvas.addEventListener('dragover', GLFW.onDragover, true);
  
      // Overriding implementation to account for HiDPI
      Browser.requestFullscreen = GLFW.requestFullscreen;
      Browser.calculateMouseCoords = GLFW.calculateMouseCoords;
      Browser.updateCanvasDimensions = GLFW.updateCanvasDimensions;
  
      Browser.resizeListeners.push((width, height) => {
        if (GLFW.isHiDPIAware()) {
          var canvas = Browser.getCanvas();
          GLFW.onCanvasResize(canvas.clientWidth, canvas.clientHeight, width, height);
        } else {
          GLFW.onCanvasResize(width, height, width, height);
        }
      });
  
      return 1; // GL_TRUE
    };

  var _glfwMakeContextCurrent = (winid) => 0;

  var _glfwSetCharCallback = (winid, cbfun) => GLFW.setCharCallback(winid, cbfun);

  var _glfwSetCursorEnterCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.cursorEnterFunc;
      win.cursorEnterFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetCursorPosCallback = (winid, cbfun) => GLFW.setCursorPosCallback(winid, cbfun);

  var _glfwSetDropCallback = (winid, cbfun) => GLFW.setDropCallback(winid, cbfun);

  var _glfwSetErrorCallback = (cbfun) => {
      var prevcbfun = GLFW.errorFunc;
      GLFW.errorFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetKeyCallback = (winid, cbfun) => GLFW.setKeyCallback(winid, cbfun);

  var _glfwSetMouseButtonCallback = (winid, cbfun) => GLFW.setMouseButtonCallback(winid, cbfun);

  var _glfwSetScrollCallback = (winid, cbfun) => GLFW.setScrollCallback(winid, cbfun);

  var _glfwSetWindowContentScaleCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowContentScaleFunc;
      win.windowContentScaleFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetWindowFocusCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowFocusFunc;
      win.windowFocusFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetWindowIconifyCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowIconifyFunc;
      win.windowIconifyFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetWindowShouldClose = (winid, value) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return;
      win.shouldClose = value;
    };

  var _glfwSetWindowSize = (winid, width, height) => GLFW.setWindowSize(winid, width, height);

  var _glfwSetWindowSizeCallback = (winid, cbfun) => GLFW.setWindowSizeCallback(winid, cbfun);

  var _glfwSwapBuffers = (winid) => GLFW.swapBuffers(winid);

  var _glfwTerminate = () => {
      window.removeEventListener('gamepadconnected', GLFW.onGamepadConnected, true);
      window.removeEventListener('gamepaddisconnected', GLFW.onGamepadDisconnected, true);
      window.removeEventListener('keydown', GLFW.onKeydown, true);
      window.removeEventListener('keypress', GLFW.onKeyPress, true);
      window.removeEventListener('keyup', GLFW.onKeyup, true);
      window.removeEventListener('blur', GLFW.onBlur, true);
      var canvas = Browser.getCanvas();
      canvas.removeEventListener('touchmove', GLFW.onMousemove, true);
      canvas.removeEventListener('touchstart', GLFW.onMouseButtonDown, true);
      canvas.removeEventListener('touchcancel', GLFW.onMouseButtonUp, true);
      canvas.removeEventListener('touchend', GLFW.onMouseButtonUp, true);
      canvas.removeEventListener('mousemove', GLFW.onMousemove, true);
      canvas.removeEventListener('mousedown', GLFW.onMouseButtonDown, true);
      canvas.removeEventListener('mouseup', GLFW.onMouseButtonUp, true);
      canvas.removeEventListener('wheel', GLFW.onMouseWheel, true);
      canvas.removeEventListener('mousewheel', GLFW.onMouseWheel, true);
      canvas.removeEventListener('mouseenter', GLFW.onMouseenter, true);
      canvas.removeEventListener('mouseleave', GLFW.onMouseleave, true);
      canvas.removeEventListener('drop', GLFW.onDrop, true);
      canvas.removeEventListener('dragover', GLFW.onDragover, true);
  
      if (GLFW.devicePixelRatioMQL)
        GLFW.devicePixelRatioMQL.removeEventListener('change', GLFW.onDevicePixelRatioChange);
  
      canvas.width = canvas.height = 1;
      GLFW.windows = null;
      GLFW.active = null;
    };

  var _glfwWindowHint = (target, hint) => {
      GLFW.hints[target] = hint;
    };
















  
  
  
  
  
  
  
    /**
   * @param {number} ptr
   * @param {number} value
   * @param {string} type
   */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[ptr] = value; break;
      case 'i8': HEAP8[ptr] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': HEAP64[((ptr)>>3)] = BigInt(value); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }







  var FS_createPath = (...args) => FS.createPath(...args);



  var FS_unlink = (...args) => FS.unlink(...args);

  var FS_createLazyFile = (...args) => FS.createLazyFile(...args);

  var FS_createDevice = (...args) => FS.createDevice(...args);



  FS.createPreloadedFile = FS_createPreloadedFile;
  FS.preloadFile = FS_preloadFile;
  FS.staticInit();;
for (let i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));;
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
  // Create GL_POOL_TEMP_BUFFERS_SIZE+1 temporary buffers, for uploads of size 0 through GL_POOL_TEMP_BUFFERS_SIZE inclusive
  for (/**@suppress{duplicate}*/var i = 0; i <= 288; ++i) {
    miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i);
  };
var miniTempWebGLIntBuffersStorage = new Int32Array(288);
  // Create GL_POOL_TEMP_BUFFERS_SIZE+1 temporary buffers, for uploads of size 0 through GL_POOL_TEMP_BUFFERS_SIZE inclusive
  for (/**@suppress{duplicate}*/var i = 0; i <= 288; ++i) {
    miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(0, i);
  };

      Module['requestAnimationFrame'] = MainLoop.requestAnimationFrame;
      Module['pauseMainLoop'] = MainLoop.pause;
      Module['resumeMainLoop'] = MainLoop.resume;
      MainLoop.init();;
// End JS library code

// include: postlibrary.js
// This file is included after the automatically-generated JS library code
// but before the wasm module is created.

{

  // Begin ATMODULES hooks
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (Module['print']) out = Module['print'];
if (Module['printErr']) err = Module['printErr'];
  // End ATMODULES hooks

  if (Module['arguments']) programArgs = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];

  var preInit = Module['preInit'];
  if (preInit) {
    if (typeof preInit == 'function') Module['preInit'] = preInit = [preInit];
    // Written as a loop so that preInit functions that themselves add more
    // preInit functions.  Is this actually needed?
    while (preInit.length > 0) {
      preInit.shift()();
    }
  }
}

// Begin runtime exports
  Module['addRunDependency'] = addRunDependency;
  Module['removeRunDependency'] = removeRunDependency;
  Module['FS_preloadFile'] = FS_preloadFile;
  Module['FS_unlink'] = FS_unlink;
  Module['FS_createPath'] = FS_createPath;
  Module['FS_createDevice'] = FS_createDevice;
  Module['FS_createDataFile'] = FS_createDataFile;
  Module['FS_createLazyFile'] = FS_createLazyFile;
  // End runtime exports
  // Begin JS library exports
  // End JS library exports

// end include: postlibrary.js

var ASM_CONSTS = {
  216442: () => { if (document.fullscreenElement) return 1; },  
 216488: () => { return Module.canvas.width; },  
 216520: () => { return parseInt(Module.canvas.style.width); },  
 216568: () => { document.exitFullscreen(); },  
 216595: () => { setTimeout(function(){ Module.requestFullscreen(false, false); }, 100); },  
 216667: () => { if (document.fullscreenElement) return 1; },  
 216713: () => { return Module.canvas.width; },  
 216745: () => { return screen.width; },  
 216770: () => { document.exitFullscreen(); },  
 216797: ($0) => { const canvasId = UTF8ToString($0); setTimeout(function() { Module.requestFullscreen(false, true); setTimeout(function() { document.querySelector(canvasId).style.width="unset"; }, 100); }, 100); },  
 216991: () => { return window.innerWidth; },  
 217017: () => { return window.innerHeight; },  
 217044: () => { if (document.fullscreenElement) return 1; },  
 217090: () => { return Module.canvas.width; },  
 217122: () => { return parseInt(Module.canvas.style.width); },  
 217170: () => { if (document.fullscreenElement) return 1; },  
 217216: () => { return Module.canvas.width; },  
 217248: () => { return screen.width; },  
 217273: () => { return window.innerWidth; },  
 217299: () => { return window.innerHeight; },  
 217326: () => { if (document.fullscreenElement) return 1; },  
 217372: () => { return Module.canvas.width; },  
 217404: () => { return screen.width; },  
 217429: () => { document.exitFullscreen(); },  
 217456: () => { if (document.fullscreenElement) return 1; },  
 217502: () => { return Module.canvas.width; },  
 217534: () => { return parseInt(Module.canvas.style.width); },  
 217582: () => { document.exitFullscreen(); },  
 217609: ($0) => { Module.canvas.style.opacity = $0; },  
 217647: () => { return screen.width; },  
 217672: () => { return screen.height; },  
 217698: () => { return window.screenX; },  
 217725: () => { return window.screenY; },  
 217752: () => { return window.devicePixelRatio; },  
 217788: ($0) => { navigator.clipboard.writeText(UTF8ToString($0)); },  
 217841: ($0) => { Module.canvas.style.cursor = UTF8ToString($0); },  
 217892: () => { Module.canvas.style.cursor = 'none'; },  
 217929: ($0, $1, $2, $3) => { try { navigator.getGamepads()[$0].vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: $3, weakMagnitude: $1, strongMagnitude: $2 }); } catch (e) { try { navigator.getGamepads()[$0].hapticActuators[0].pulse($2, $3); } catch (e) { } } },  
 218185: ($0) => { Module.canvas.style.cursor = UTF8ToString($0); },  
 218236: () => { if (document.pointerLockElement) return 1; },  
 218283: () => { if (document.fullscreenElement) return 1; },  
 218329: () => { return window.innerWidth; },  
 218355: () => { return window.innerHeight; },  
 218382: ($0, $1, $2, $3, $4) => { if (typeof window === 'undefined' || (window.AudioContext || window.webkitAudioContext) === undefined) { return 0; } if (typeof(window.miniaudio) === 'undefined') { window.miniaudio = { referenceCount: 0 }; window.miniaudio.device_type = {}; window.miniaudio.device_type.playback = $0; window.miniaudio.device_type.capture = $1; window.miniaudio.device_type.duplex = $2; window.miniaudio.device_state = {}; window.miniaudio.device_state.stopped = $3; window.miniaudio.device_state.started = $4; let miniaudio = window.miniaudio; miniaudio.devices = []; miniaudio.track_device = function(device) { for (var iDevice = 0; iDevice < miniaudio.devices.length; ++iDevice) { if (miniaudio.devices[iDevice] == null) { miniaudio.devices[iDevice] = device; return iDevice; } } miniaudio.devices.push(device); return miniaudio.devices.length - 1; }; miniaudio.untrack_device_by_index = function(deviceIndex) { miniaudio.devices[deviceIndex] = null; while (miniaudio.devices.length > 0) { if (miniaudio.devices[miniaudio.devices.length-1] == null) { miniaudio.devices.pop(); } else { break; } } }; miniaudio.untrack_device = function(device) { for (var iDevice = 0; iDevice < miniaudio.devices.length; ++iDevice) { if (miniaudio.devices[iDevice] == device) { return miniaudio.untrack_device_by_index(iDevice); } } }; miniaudio.get_device_by_index = function(deviceIndex) { return miniaudio.devices[deviceIndex]; }; miniaudio.unlock_event_types = (function(){ return ['touchend', 'click']; })(); miniaudio.unlock = function() { for(var i = 0; i < miniaudio.devices.length; ++i) { var device = miniaudio.devices[i]; if (device != null && device.webaudio != null && device.state === miniaudio.device_state.started) { device.webaudio.resume().then(() => { _ma_device__on_notification_unlocked(device.pDevice); }, (error) => {console.error("Failed to resume audiocontext", error); }); } } miniaudio.unlock_event_types.map(function(event_type) { document.removeEventListener(event_type, miniaudio.unlock, true); }); }; miniaudio.unlock_event_types.map(function(event_type) { document.addEventListener(event_type, miniaudio.unlock, true); }); } window.miniaudio.referenceCount += 1; return 1; },  
 220560: () => { if (typeof(window.miniaudio) !== 'undefined') { window.miniaudio.unlock_event_types.map(function(event_type) { document.removeEventListener(event_type, window.miniaudio.unlock, true); }); window.miniaudio.referenceCount -= 1; if (window.miniaudio.referenceCount === 0) { delete window.miniaudio; } } },  
 220864: () => { return (navigator.mediaDevices !== undefined && navigator.mediaDevices.getUserMedia !== undefined); },  
 220968: () => { try { var temp = new (window.AudioContext || window.webkitAudioContext)(); var sampleRate = temp.sampleRate; temp.close(); return sampleRate; } catch(e) { return 0; } },  
 221139: ($0, $1, $2, $3, $4, $5) => { var deviceType = $0; var channels = $1; var sampleRate = $2; var bufferSize = $3; var pIntermediaryBuffer = $4; var pDevice = $5; if (typeof(window.miniaudio) === 'undefined') { return -1; } var device = {}; var audioContextOptions = {}; if (deviceType == window.miniaudio.device_type.playback && sampleRate != 0) { audioContextOptions.sampleRate = sampleRate; } device.webaudio = new (window.AudioContext || window.webkitAudioContext)(audioContextOptions); device.webaudio.suspend(); device.state = window.miniaudio.device_state.stopped; var channelCountIn = 0; var channelCountOut = channels; if (deviceType != window.miniaudio.device_type.playback) { channelCountIn = channels; } device.scriptNode = device.webaudio.createScriptProcessor(bufferSize, channelCountIn, channelCountOut); device.scriptNode.onaudioprocess = function(e) { if (device.intermediaryBufferView == null || device.intermediaryBufferView.length == 0) { device.intermediaryBufferView = new Float32Array(HEAPF32.buffer, pIntermediaryBuffer, bufferSize * channels); } if (deviceType == window.miniaudio.device_type.capture || deviceType == window.miniaudio.device_type.duplex) { for (var iChannel = 0; iChannel < channels; iChannel += 1) { var inputBuffer = e.inputBuffer.getChannelData(iChannel); var intermediaryBuffer = device.intermediaryBufferView; for (var iFrame = 0; iFrame < bufferSize; iFrame += 1) { intermediaryBuffer[iFrame*channels + iChannel] = inputBuffer[iFrame]; } } _ma_device_process_pcm_frames_capture__webaudio(pDevice, bufferSize, pIntermediaryBuffer); } if (deviceType == window.miniaudio.device_type.playback || deviceType == window.miniaudio.device_type.duplex) { _ma_device_process_pcm_frames_playback__webaudio(pDevice, bufferSize, pIntermediaryBuffer); for (var iChannel = 0; iChannel < e.outputBuffer.numberOfChannels; ++iChannel) { var outputBuffer = e.outputBuffer.getChannelData(iChannel); var intermediaryBuffer = device.intermediaryBufferView; for (var iFrame = 0; iFrame < bufferSize; iFrame += 1) { outputBuffer[iFrame] = intermediaryBuffer[iFrame*channels + iChannel]; } } } else { for (var iChannel = 0; iChannel < e.outputBuffer.numberOfChannels; ++iChannel) { e.outputBuffer.getChannelData(iChannel).fill(0.0); } } }; if (deviceType == window.miniaudio.device_type.capture || deviceType == window.miniaudio.device_type.duplex) { navigator.mediaDevices.getUserMedia({audio:true, video:false}) .then(function(stream) { device.streamNode = device.webaudio.createMediaStreamSource(stream); device.streamNode.connect(device.scriptNode); device.scriptNode.connect(device.webaudio.destination); }) .catch(function(error) { console.log("Failed to get user media: " + error); }); } if (deviceType == window.miniaudio.device_type.playback) { device.scriptNode.connect(device.webaudio.destination); } device.pDevice = pDevice; return window.miniaudio.track_device(device); },  
 224016: ($0) => { return window.miniaudio.get_device_by_index($0).webaudio.sampleRate; },  
 224089: ($0) => { var device = window.miniaudio.get_device_by_index($0); if (device.scriptNode !== undefined) { device.scriptNode.onaudioprocess = function(e) {}; device.scriptNode.disconnect(); device.scriptNode = undefined; } if (device.streamNode !== undefined) { device.streamNode.disconnect(); device.streamNode = undefined; } device.webaudio.close(); device.webaudio = undefined; device.pDevice = undefined; },  
 224489: ($0) => { window.miniaudio.untrack_device_by_index($0); },  
 224539: ($0) => { var device = window.miniaudio.get_device_by_index($0); device.webaudio.resume(); device.state = window.miniaudio.device_state.started; },  
 224678: ($0) => { var device = window.miniaudio.get_device_by_index($0); device.webaudio.suspend(); device.state = window.miniaudio.device_state.stopped; }
};
function JS_InitPersistence() { try { FS.mkdir('/persist'); } catch (e) {} FS.mount(IDBFS, {}, '/persist'); FS.syncfs(true, function(err) { if (err) console.error('Town Forge: IDBFS initial load failed', err); Module._TF_persistReady = 1; }); }
function JS_PersistReady() { return (typeof Module._TF_persistReady !== 'undefined' && Module._TF_persistReady) ? 1 : 0; }
function JS_CloudState() { return (window.TFCloud && window.TFCloud.configured) ? window.TFCloud.state() : 0; }
function JS_CloudOpen() { if (window.TFCloud) window.TFCloud.open(); }
function JS_OpenWiki() { window.open('wiki/', '_blank'); }
function JS_SaveBlocked() { return Module._TF_blockSave ? 1 : 0; }
function JS_CloudOnReset() { if (window.TFCloud) window.TFCloud.onReset(); }
function JS_FlushPersistence() { FS.syncfs(false, function(err) { if (err) console.error('Town Forge: IDBFS save flush failed', err); }); }
function TF_PromptText(title,current,out,outLen) { var r = window.prompt(UTF8ToString(title), UTF8ToString(current)); if (r === null) return 0; stringToUTF8(r, out, outLen); return 1; }
function JS_GuildNetState(out,len) { if (!window.TFGuildNet) return 0; stringToUTF8(window.TFGuildNet.state(), out, len); return 1; }
function JS_GuildNetRefresh(week) { if (window.TFGuildNet) TFGuildNet.refresh(UTF8ToString(week)); }
function JS_GuildNetCreate(name,tag,ch,power) { if (window.TFGuildNet) TFGuildNet.create(UTF8ToString(name), UTF8ToString(tag), UTF8ToString(ch), power); }
function JS_GuildNetJoin(id,ch,power) { if (window.TFGuildNet) TFGuildNet.join(UTF8ToString(id), UTF8ToString(ch), power); }
function JS_GuildNetLeave() { if (window.TFGuildNet) TFGuildNet.leave(); }
function JS_GuildNetSetMotd(t) { if (window.TFGuildNet) TFGuildNet.setMotd(UTF8ToString(t)); }
function JS_GuildNetKick(id) { if (window.TFGuildNet) TFGuildNet.kick(UTF8ToString(id)); }
function JS_GuildNetSetRank(id,r) { if (window.TFGuildNet) TFGuildNet.setRank(UTF8ToString(id), r); }
function JS_GuildNetDeclareWar(id) { if (window.TFGuildNet) TFGuildNet.declareWar(UTF8ToString(id)); }
function JS_GuildNetEndWar(id) { if (window.TFGuildNet) TFGuildNet.endWar(UTF8ToString(id)); }
function JS_GuildNetSubmit(week,day,pts,ch,power) { if (window.TFGuildNet) TFGuildNet.submit(UTF8ToString(week), day, pts, UTF8ToString(ch), power); }
function SetCanvasIdJs(out,outSize) { var canvasId = "#" + Module.canvas.id; stringToUTF8(canvasId, out, outSize); }
function __asyncjs__RequestClipboardData() { return Asyncify.handleAsync(async () => { if (navigator.clipboard && window.isSecureContext) { let items = await navigator.clipboard.read(); for (const item of items) { if (item.types.includes("text/plain")) { const blob = await item.getType("text/plain"); const text = await blob.text(); window._lastClipboardString = text; } else if (item.types.find(t => t.startsWith("image/"))) { const blob = await item.getType(item.types.find(t => t.startsWith("image/"))); const bitmap = await createImageBitmap(blob); const canvas = document.createElement('canvas'); canvas.width = bitmap.width; canvas.height = bitmap.height; const ctx = canvas.getContext('2d'); ctx.drawImage(bitmap, 0, 0); const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data; window._lastImgWidth = canvas.width; window._lastImgHeight = canvas.height; window._lastImgData = imgData; } } } else console.warn("Clipboard read() requires HTTPS/Localhost"); }); }
function GetLastPastedText() { var str = window._lastClipboardString || ""; var length = lengthBytesUTF8(str) + 1; if (length > 1) { var ptr = _malloc(length); stringToUTF8(str, ptr, length); return ptr; } return 0; }
function GetLastPastedImage(width,height) { if (window._lastImgData) { const data = window._lastImgData; if (data.length > 0) { const ptr = _malloc(data.length); HEAPU8.set(data, ptr); if (width) setValue(width, window._lastImgWidth, 'i32'); if (height) setValue(height, window._lastImgHeight, 'i32'); window._lastImgData = null; return ptr; } } return 0; }

// Imports from the Wasm binary.
var _malloc,
  _main,
  _free,
  _ma_device__on_notification_unlocked,
  _ma_malloc_emscripten,
  _ma_free_emscripten,
  _ma_device_process_pcm_frames_capture__webaudio,
  _ma_device_process_pcm_frames_playback__webaudio,
  _setThrew,
  __emscripten_stack_restore,
  __emscripten_stack_alloc,
  _emscripten_stack_get_current,
  memory,
  __indirect_function_table,
  wasmMemory,
  wasmTable;


function assignWasmExports(wasmExports) {
  _malloc = wasmExports['malloc'];
  _main = Module['_main'] = wasmExports['main'];
  _free = wasmExports['free'];
  _ma_device__on_notification_unlocked = Module['_ma_device__on_notification_unlocked'] = wasmExports['ma_device__on_notification_unlocked'];
  _ma_malloc_emscripten = Module['_ma_malloc_emscripten'] = wasmExports['ma_malloc_emscripten'];
  _ma_free_emscripten = Module['_ma_free_emscripten'] = wasmExports['ma_free_emscripten'];
  _ma_device_process_pcm_frames_capture__webaudio = Module['_ma_device_process_pcm_frames_capture__webaudio'] = wasmExports['ma_device_process_pcm_frames_capture__webaudio'];
  _ma_device_process_pcm_frames_playback__webaudio = Module['_ma_device_process_pcm_frames_playback__webaudio'] = wasmExports['ma_device_process_pcm_frames_playback__webaudio'];
  _setThrew = wasmExports['setThrew'];
  __emscripten_stack_restore = wasmExports['_emscripten_stack_restore'];
  __emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'];
  _emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'];
  memory = wasmMemory = wasmExports['memory'];
  __indirect_function_table = wasmTable = wasmExports['__indirect_function_table'];
}

var wasmImports = {
  /** @export */
  JS_CloudOnReset,
  /** @export */
  JS_CloudOpen,
  /** @export */
  JS_CloudState,
  /** @export */
  JS_FlushPersistence,
  /** @export */
  JS_GuildNetCreate,
  /** @export */
  JS_GuildNetDeclareWar,
  /** @export */
  JS_GuildNetEndWar,
  /** @export */
  JS_GuildNetJoin,
  /** @export */
  JS_GuildNetKick,
  /** @export */
  JS_GuildNetLeave,
  /** @export */
  JS_GuildNetRefresh,
  /** @export */
  JS_GuildNetSetMotd,
  /** @export */
  JS_GuildNetSetRank,
  /** @export */
  JS_GuildNetState,
  /** @export */
  JS_GuildNetSubmit,
  /** @export */
  JS_InitPersistence,
  /** @export */
  JS_OpenWiki,
  /** @export */
  JS_PersistReady,
  /** @export */
  JS_SaveBlocked,
  /** @export */
  SetCanvasIdJs,
  /** @export */
  TF_PromptText,
  /** @export */
  __assert_fail: ___assert_fail,
  /** @export */
  __cxa_throw: ___cxa_throw,
  /** @export */
  __syscall_chdir: ___syscall_chdir,
  /** @export */
  __syscall_faccessat: ___syscall_faccessat,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_getcwd: ___syscall_getcwd,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  __syscall_rmdir: ___syscall_rmdir,
  /** @export */
  __syscall_unlinkat: ___syscall_unlinkat,
  /** @export */
  _abort_js: __abort_js,
  /** @export */
  _localtime_js: __localtime_js,
  /** @export */
  _tzset_js: __tzset_js,
  /** @export */
  clock_time_get: _clock_time_get,
  /** @export */
  emscripten_asm_const_double: _emscripten_asm_const_double,
  /** @export */
  emscripten_asm_const_int: _emscripten_asm_const_int,
  /** @export */
  emscripten_date_now: _emscripten_date_now,
  /** @export */
  emscripten_get_element_css_size: _emscripten_get_element_css_size,
  /** @export */
  emscripten_get_gamepad_status: _emscripten_get_gamepad_status,
  /** @export */
  emscripten_get_now: _emscripten_get_now,
  /** @export */
  emscripten_get_num_gamepads: _emscripten_get_num_gamepads,
  /** @export */
  emscripten_glActiveTexture: _emscripten_glActiveTexture,
  /** @export */
  emscripten_glAttachShader: _emscripten_glAttachShader,
  /** @export */
  emscripten_glBeginQueryEXT: _emscripten_glBeginQueryEXT,
  /** @export */
  emscripten_glBindAttribLocation: _emscripten_glBindAttribLocation,
  /** @export */
  emscripten_glBindBuffer: _emscripten_glBindBuffer,
  /** @export */
  emscripten_glBindFramebuffer: _emscripten_glBindFramebuffer,
  /** @export */
  emscripten_glBindRenderbuffer: _emscripten_glBindRenderbuffer,
  /** @export */
  emscripten_glBindTexture: _emscripten_glBindTexture,
  /** @export */
  emscripten_glBindVertexArrayOES: _emscripten_glBindVertexArrayOES,
  /** @export */
  emscripten_glBlendColor: _emscripten_glBlendColor,
  /** @export */
  emscripten_glBlendEquation: _emscripten_glBlendEquation,
  /** @export */
  emscripten_glBlendEquationSeparate: _emscripten_glBlendEquationSeparate,
  /** @export */
  emscripten_glBlendFunc: _emscripten_glBlendFunc,
  /** @export */
  emscripten_glBlendFuncSeparate: _emscripten_glBlendFuncSeparate,
  /** @export */
  emscripten_glBufferData: _emscripten_glBufferData,
  /** @export */
  emscripten_glBufferSubData: _emscripten_glBufferSubData,
  /** @export */
  emscripten_glCheckFramebufferStatus: _emscripten_glCheckFramebufferStatus,
  /** @export */
  emscripten_glClear: _emscripten_glClear,
  /** @export */
  emscripten_glClearColor: _emscripten_glClearColor,
  /** @export */
  emscripten_glClearDepthf: _emscripten_glClearDepthf,
  /** @export */
  emscripten_glClearStencil: _emscripten_glClearStencil,
  /** @export */
  emscripten_glClipControlEXT: _emscripten_glClipControlEXT,
  /** @export */
  emscripten_glColorMask: _emscripten_glColorMask,
  /** @export */
  emscripten_glCompileShader: _emscripten_glCompileShader,
  /** @export */
  emscripten_glCompressedTexImage2D: _emscripten_glCompressedTexImage2D,
  /** @export */
  emscripten_glCompressedTexSubImage2D: _emscripten_glCompressedTexSubImage2D,
  /** @export */
  emscripten_glCopyTexImage2D: _emscripten_glCopyTexImage2D,
  /** @export */
  emscripten_glCopyTexSubImage2D: _emscripten_glCopyTexSubImage2D,
  /** @export */
  emscripten_glCreateProgram: _emscripten_glCreateProgram,
  /** @export */
  emscripten_glCreateShader: _emscripten_glCreateShader,
  /** @export */
  emscripten_glCullFace: _emscripten_glCullFace,
  /** @export */
  emscripten_glDeleteBuffers: _emscripten_glDeleteBuffers,
  /** @export */
  emscripten_glDeleteFramebuffers: _emscripten_glDeleteFramebuffers,
  /** @export */
  emscripten_glDeleteProgram: _emscripten_glDeleteProgram,
  /** @export */
  emscripten_glDeleteQueriesEXT: _emscripten_glDeleteQueriesEXT,
  /** @export */
  emscripten_glDeleteRenderbuffers: _emscripten_glDeleteRenderbuffers,
  /** @export */
  emscripten_glDeleteShader: _emscripten_glDeleteShader,
  /** @export */
  emscripten_glDeleteTextures: _emscripten_glDeleteTextures,
  /** @export */
  emscripten_glDeleteVertexArraysOES: _emscripten_glDeleteVertexArraysOES,
  /** @export */
  emscripten_glDepthFunc: _emscripten_glDepthFunc,
  /** @export */
  emscripten_glDepthMask: _emscripten_glDepthMask,
  /** @export */
  emscripten_glDepthRangef: _emscripten_glDepthRangef,
  /** @export */
  emscripten_glDetachShader: _emscripten_glDetachShader,
  /** @export */
  emscripten_glDisable: _emscripten_glDisable,
  /** @export */
  emscripten_glDisableVertexAttribArray: _emscripten_glDisableVertexAttribArray,
  /** @export */
  emscripten_glDrawArrays: _emscripten_glDrawArrays,
  /** @export */
  emscripten_glDrawArraysInstancedANGLE: _emscripten_glDrawArraysInstancedANGLE,
  /** @export */
  emscripten_glDrawBuffersWEBGL: _emscripten_glDrawBuffersWEBGL,
  /** @export */
  emscripten_glDrawElements: _emscripten_glDrawElements,
  /** @export */
  emscripten_glDrawElementsInstancedANGLE: _emscripten_glDrawElementsInstancedANGLE,
  /** @export */
  emscripten_glEnable: _emscripten_glEnable,
  /** @export */
  emscripten_glEnableVertexAttribArray: _emscripten_glEnableVertexAttribArray,
  /** @export */
  emscripten_glEndQueryEXT: _emscripten_glEndQueryEXT,
  /** @export */
  emscripten_glFinish: _emscripten_glFinish,
  /** @export */
  emscripten_glFlush: _emscripten_glFlush,
  /** @export */
  emscripten_glFramebufferRenderbuffer: _emscripten_glFramebufferRenderbuffer,
  /** @export */
  emscripten_glFramebufferTexture2D: _emscripten_glFramebufferTexture2D,
  /** @export */
  emscripten_glFrontFace: _emscripten_glFrontFace,
  /** @export */
  emscripten_glGenBuffers: _emscripten_glGenBuffers,
  /** @export */
  emscripten_glGenFramebuffers: _emscripten_glGenFramebuffers,
  /** @export */
  emscripten_glGenQueriesEXT: _emscripten_glGenQueriesEXT,
  /** @export */
  emscripten_glGenRenderbuffers: _emscripten_glGenRenderbuffers,
  /** @export */
  emscripten_glGenTextures: _emscripten_glGenTextures,
  /** @export */
  emscripten_glGenVertexArraysOES: _emscripten_glGenVertexArraysOES,
  /** @export */
  emscripten_glGenerateMipmap: _emscripten_glGenerateMipmap,
  /** @export */
  emscripten_glGetActiveAttrib: _emscripten_glGetActiveAttrib,
  /** @export */
  emscripten_glGetActiveUniform: _emscripten_glGetActiveUniform,
  /** @export */
  emscripten_glGetAttachedShaders: _emscripten_glGetAttachedShaders,
  /** @export */
  emscripten_glGetAttribLocation: _emscripten_glGetAttribLocation,
  /** @export */
  emscripten_glGetBooleanv: _emscripten_glGetBooleanv,
  /** @export */
  emscripten_glGetBufferParameteriv: _emscripten_glGetBufferParameteriv,
  /** @export */
  emscripten_glGetError: _emscripten_glGetError,
  /** @export */
  emscripten_glGetFloatv: _emscripten_glGetFloatv,
  /** @export */
  emscripten_glGetFramebufferAttachmentParameteriv: _emscripten_glGetFramebufferAttachmentParameteriv,
  /** @export */
  emscripten_glGetIntegerv: _emscripten_glGetIntegerv,
  /** @export */
  emscripten_glGetProgramInfoLog: _emscripten_glGetProgramInfoLog,
  /** @export */
  emscripten_glGetProgramiv: _emscripten_glGetProgramiv,
  /** @export */
  emscripten_glGetQueryObjecti64vEXT: _emscripten_glGetQueryObjecti64vEXT,
  /** @export */
  emscripten_glGetQueryObjectivEXT: _emscripten_glGetQueryObjectivEXT,
  /** @export */
  emscripten_glGetQueryObjectui64vEXT: _emscripten_glGetQueryObjectui64vEXT,
  /** @export */
  emscripten_glGetQueryObjectuivEXT: _emscripten_glGetQueryObjectuivEXT,
  /** @export */
  emscripten_glGetQueryivEXT: _emscripten_glGetQueryivEXT,
  /** @export */
  emscripten_glGetRenderbufferParameteriv: _emscripten_glGetRenderbufferParameteriv,
  /** @export */
  emscripten_glGetShaderInfoLog: _emscripten_glGetShaderInfoLog,
  /** @export */
  emscripten_glGetShaderPrecisionFormat: _emscripten_glGetShaderPrecisionFormat,
  /** @export */
  emscripten_glGetShaderSource: _emscripten_glGetShaderSource,
  /** @export */
  emscripten_glGetShaderiv: _emscripten_glGetShaderiv,
  /** @export */
  emscripten_glGetString: _emscripten_glGetString,
  /** @export */
  emscripten_glGetTexParameterfv: _emscripten_glGetTexParameterfv,
  /** @export */
  emscripten_glGetTexParameteriv: _emscripten_glGetTexParameteriv,
  /** @export */
  emscripten_glGetUniformLocation: _emscripten_glGetUniformLocation,
  /** @export */
  emscripten_glGetUniformfv: _emscripten_glGetUniformfv,
  /** @export */
  emscripten_glGetUniformiv: _emscripten_glGetUniformiv,
  /** @export */
  emscripten_glGetVertexAttribPointerv: _emscripten_glGetVertexAttribPointerv,
  /** @export */
  emscripten_glGetVertexAttribfv: _emscripten_glGetVertexAttribfv,
  /** @export */
  emscripten_glGetVertexAttribiv: _emscripten_glGetVertexAttribiv,
  /** @export */
  emscripten_glHint: _emscripten_glHint,
  /** @export */
  emscripten_glIsBuffer: _emscripten_glIsBuffer,
  /** @export */
  emscripten_glIsEnabled: _emscripten_glIsEnabled,
  /** @export */
  emscripten_glIsFramebuffer: _emscripten_glIsFramebuffer,
  /** @export */
  emscripten_glIsProgram: _emscripten_glIsProgram,
  /** @export */
  emscripten_glIsQueryEXT: _emscripten_glIsQueryEXT,
  /** @export */
  emscripten_glIsRenderbuffer: _emscripten_glIsRenderbuffer,
  /** @export */
  emscripten_glIsShader: _emscripten_glIsShader,
  /** @export */
  emscripten_glIsTexture: _emscripten_glIsTexture,
  /** @export */
  emscripten_glIsVertexArrayOES: _emscripten_glIsVertexArrayOES,
  /** @export */
  emscripten_glLineWidth: _emscripten_glLineWidth,
  /** @export */
  emscripten_glLinkProgram: _emscripten_glLinkProgram,
  /** @export */
  emscripten_glPixelStorei: _emscripten_glPixelStorei,
  /** @export */
  emscripten_glPolygonModeWEBGL: _emscripten_glPolygonModeWEBGL,
  /** @export */
  emscripten_glPolygonOffset: _emscripten_glPolygonOffset,
  /** @export */
  emscripten_glPolygonOffsetClampEXT: _emscripten_glPolygonOffsetClampEXT,
  /** @export */
  emscripten_glQueryCounterEXT: _emscripten_glQueryCounterEXT,
  /** @export */
  emscripten_glReadPixels: _emscripten_glReadPixels,
  /** @export */
  emscripten_glReleaseShaderCompiler: _emscripten_glReleaseShaderCompiler,
  /** @export */
  emscripten_glRenderbufferStorage: _emscripten_glRenderbufferStorage,
  /** @export */
  emscripten_glSampleCoverage: _emscripten_glSampleCoverage,
  /** @export */
  emscripten_glScissor: _emscripten_glScissor,
  /** @export */
  emscripten_glShaderBinary: _emscripten_glShaderBinary,
  /** @export */
  emscripten_glShaderSource: _emscripten_glShaderSource,
  /** @export */
  emscripten_glStencilFunc: _emscripten_glStencilFunc,
  /** @export */
  emscripten_glStencilFuncSeparate: _emscripten_glStencilFuncSeparate,
  /** @export */
  emscripten_glStencilMask: _emscripten_glStencilMask,
  /** @export */
  emscripten_glStencilMaskSeparate: _emscripten_glStencilMaskSeparate,
  /** @export */
  emscripten_glStencilOp: _emscripten_glStencilOp,
  /** @export */
  emscripten_glStencilOpSeparate: _emscripten_glStencilOpSeparate,
  /** @export */
  emscripten_glTexImage2D: _emscripten_glTexImage2D,
  /** @export */
  emscripten_glTexParameterf: _emscripten_glTexParameterf,
  /** @export */
  emscripten_glTexParameterfv: _emscripten_glTexParameterfv,
  /** @export */
  emscripten_glTexParameteri: _emscripten_glTexParameteri,
  /** @export */
  emscripten_glTexParameteriv: _emscripten_glTexParameteriv,
  /** @export */
  emscripten_glTexSubImage2D: _emscripten_glTexSubImage2D,
  /** @export */
  emscripten_glUniform1f: _emscripten_glUniform1f,
  /** @export */
  emscripten_glUniform1fv: _emscripten_glUniform1fv,
  /** @export */
  emscripten_glUniform1i: _emscripten_glUniform1i,
  /** @export */
  emscripten_glUniform1iv: _emscripten_glUniform1iv,
  /** @export */
  emscripten_glUniform2f: _emscripten_glUniform2f,
  /** @export */
  emscripten_glUniform2fv: _emscripten_glUniform2fv,
  /** @export */
  emscripten_glUniform2i: _emscripten_glUniform2i,
  /** @export */
  emscripten_glUniform2iv: _emscripten_glUniform2iv,
  /** @export */
  emscripten_glUniform3f: _emscripten_glUniform3f,
  /** @export */
  emscripten_glUniform3fv: _emscripten_glUniform3fv,
  /** @export */
  emscripten_glUniform3i: _emscripten_glUniform3i,
  /** @export */
  emscripten_glUniform3iv: _emscripten_glUniform3iv,
  /** @export */
  emscripten_glUniform4f: _emscripten_glUniform4f,
  /** @export */
  emscripten_glUniform4fv: _emscripten_glUniform4fv,
  /** @export */
  emscripten_glUniform4i: _emscripten_glUniform4i,
  /** @export */
  emscripten_glUniform4iv: _emscripten_glUniform4iv,
  /** @export */
  emscripten_glUniformMatrix2fv: _emscripten_glUniformMatrix2fv,
  /** @export */
  emscripten_glUniformMatrix3fv: _emscripten_glUniformMatrix3fv,
  /** @export */
  emscripten_glUniformMatrix4fv: _emscripten_glUniformMatrix4fv,
  /** @export */
  emscripten_glUseProgram: _emscripten_glUseProgram,
  /** @export */
  emscripten_glValidateProgram: _emscripten_glValidateProgram,
  /** @export */
  emscripten_glVertexAttrib1f: _emscripten_glVertexAttrib1f,
  /** @export */
  emscripten_glVertexAttrib1fv: _emscripten_glVertexAttrib1fv,
  /** @export */
  emscripten_glVertexAttrib2f: _emscripten_glVertexAttrib2f,
  /** @export */
  emscripten_glVertexAttrib2fv: _emscripten_glVertexAttrib2fv,
  /** @export */
  emscripten_glVertexAttrib3f: _emscripten_glVertexAttrib3f,
  /** @export */
  emscripten_glVertexAttrib3fv: _emscripten_glVertexAttrib3fv,
  /** @export */
  emscripten_glVertexAttrib4f: _emscripten_glVertexAttrib4f,
  /** @export */
  emscripten_glVertexAttrib4fv: _emscripten_glVertexAttrib4fv,
  /** @export */
  emscripten_glVertexAttribDivisorANGLE: _emscripten_glVertexAttribDivisorANGLE,
  /** @export */
  emscripten_glVertexAttribPointer: _emscripten_glVertexAttribPointer,
  /** @export */
  emscripten_glViewport: _emscripten_glViewport,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  emscripten_sample_gamepad_data: _emscripten_sample_gamepad_data,
  /** @export */
  emscripten_set_blur_callback_on_thread: _emscripten_set_blur_callback_on_thread,
  /** @export */
  emscripten_set_canvas_element_size: _emscripten_set_canvas_element_size,
  /** @export */
  emscripten_set_click_callback_on_thread: _emscripten_set_click_callback_on_thread,
  /** @export */
  emscripten_set_focus_callback_on_thread: _emscripten_set_focus_callback_on_thread,
  /** @export */
  emscripten_set_fullscreenchange_callback_on_thread: _emscripten_set_fullscreenchange_callback_on_thread,
  /** @export */
  emscripten_set_gamepadconnected_callback_on_thread: _emscripten_set_gamepadconnected_callback_on_thread,
  /** @export */
  emscripten_set_gamepaddisconnected_callback_on_thread: _emscripten_set_gamepaddisconnected_callback_on_thread,
  /** @export */
  emscripten_set_main_loop: _emscripten_set_main_loop,
  /** @export */
  emscripten_set_mousemove_callback_on_thread: _emscripten_set_mousemove_callback_on_thread,
  /** @export */
  emscripten_set_pointerlockchange_callback_on_thread: _emscripten_set_pointerlockchange_callback_on_thread,
  /** @export */
  emscripten_set_resize_callback_on_thread: _emscripten_set_resize_callback_on_thread,
  /** @export */
  emscripten_set_touchcancel_callback_on_thread: _emscripten_set_touchcancel_callback_on_thread,
  /** @export */
  emscripten_set_touchend_callback_on_thread: _emscripten_set_touchend_callback_on_thread,
  /** @export */
  emscripten_set_touchmove_callback_on_thread: _emscripten_set_touchmove_callback_on_thread,
  /** @export */
  emscripten_set_touchstart_callback_on_thread: _emscripten_set_touchstart_callback_on_thread,
  /** @export */
  emscripten_set_visibilitychange_callback_on_thread: _emscripten_set_visibilitychange_callback_on_thread,
  /** @export */
  emscripten_set_window_title: _emscripten_set_window_title,
  /** @export */
  environ_get: _environ_get,
  /** @export */
  environ_sizes_get: _environ_sizes_get,
  /** @export */
  exit: _exit,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  glActiveTexture: _glActiveTexture,
  /** @export */
  glAttachShader: _glAttachShader,
  /** @export */
  glBindAttribLocation: _glBindAttribLocation,
  /** @export */
  glBindBuffer: _glBindBuffer,
  /** @export */
  glBindFramebuffer: _glBindFramebuffer,
  /** @export */
  glBindRenderbuffer: _glBindRenderbuffer,
  /** @export */
  glBindTexture: _glBindTexture,
  /** @export */
  glBlendEquation: _glBlendEquation,
  /** @export */
  glBlendEquationSeparate: _glBlendEquationSeparate,
  /** @export */
  glBlendFunc: _glBlendFunc,
  /** @export */
  glBlendFuncSeparate: _glBlendFuncSeparate,
  /** @export */
  glBufferData: _glBufferData,
  /** @export */
  glBufferSubData: _glBufferSubData,
  /** @export */
  glCheckFramebufferStatus: _glCheckFramebufferStatus,
  /** @export */
  glClear: _glClear,
  /** @export */
  glClearColor: _glClearColor,
  /** @export */
  glClearDepthf: _glClearDepthf,
  /** @export */
  glCompileShader: _glCompileShader,
  /** @export */
  glCompressedTexImage2D: _glCompressedTexImage2D,
  /** @export */
  glCreateProgram: _glCreateProgram,
  /** @export */
  glCreateShader: _glCreateShader,
  /** @export */
  glCullFace: _glCullFace,
  /** @export */
  glDeleteBuffers: _glDeleteBuffers,
  /** @export */
  glDeleteFramebuffers: _glDeleteFramebuffers,
  /** @export */
  glDeleteProgram: _glDeleteProgram,
  /** @export */
  glDeleteRenderbuffers: _glDeleteRenderbuffers,
  /** @export */
  glDeleteShader: _glDeleteShader,
  /** @export */
  glDeleteTextures: _glDeleteTextures,
  /** @export */
  glDepthFunc: _glDepthFunc,
  /** @export */
  glDepthMask: _glDepthMask,
  /** @export */
  glDetachShader: _glDetachShader,
  /** @export */
  glDisable: _glDisable,
  /** @export */
  glDisableVertexAttribArray: _glDisableVertexAttribArray,
  /** @export */
  glDrawArrays: _glDrawArrays,
  /** @export */
  glDrawElements: _glDrawElements,
  /** @export */
  glEnable: _glEnable,
  /** @export */
  glEnableVertexAttribArray: _glEnableVertexAttribArray,
  /** @export */
  glFramebufferRenderbuffer: _glFramebufferRenderbuffer,
  /** @export */
  glFramebufferTexture2D: _glFramebufferTexture2D,
  /** @export */
  glFrontFace: _glFrontFace,
  /** @export */
  glGenBuffers: _glGenBuffers,
  /** @export */
  glGenFramebuffers: _glGenFramebuffers,
  /** @export */
  glGenRenderbuffers: _glGenRenderbuffers,
  /** @export */
  glGenTextures: _glGenTextures,
  /** @export */
  glGenerateMipmap: _glGenerateMipmap,
  /** @export */
  glGetAttribLocation: _glGetAttribLocation,
  /** @export */
  glGetFloatv: _glGetFloatv,
  /** @export */
  glGetFramebufferAttachmentParameteriv: _glGetFramebufferAttachmentParameteriv,
  /** @export */
  glGetProgramInfoLog: _glGetProgramInfoLog,
  /** @export */
  glGetProgramiv: _glGetProgramiv,
  /** @export */
  glGetShaderInfoLog: _glGetShaderInfoLog,
  /** @export */
  glGetShaderiv: _glGetShaderiv,
  /** @export */
  glGetString: _glGetString,
  /** @export */
  glGetUniformLocation: _glGetUniformLocation,
  /** @export */
  glLinkProgram: _glLinkProgram,
  /** @export */
  glPixelStorei: _glPixelStorei,
  /** @export */
  glReadPixels: _glReadPixels,
  /** @export */
  glRenderbufferStorage: _glRenderbufferStorage,
  /** @export */
  glScissor: _glScissor,
  /** @export */
  glShaderSource: _glShaderSource,
  /** @export */
  glTexImage2D: _glTexImage2D,
  /** @export */
  glTexParameterf: _glTexParameterf,
  /** @export */
  glTexParameteri: _glTexParameteri,
  /** @export */
  glUniform1fv: _glUniform1fv,
  /** @export */
  glUniform1i: _glUniform1i,
  /** @export */
  glUniform1iv: _glUniform1iv,
  /** @export */
  glUniform2fv: _glUniform2fv,
  /** @export */
  glUniform2iv: _glUniform2iv,
  /** @export */
  glUniform3fv: _glUniform3fv,
  /** @export */
  glUniform3iv: _glUniform3iv,
  /** @export */
  glUniform4f: _glUniform4f,
  /** @export */
  glUniform4fv: _glUniform4fv,
  /** @export */
  glUniform4iv: _glUniform4iv,
  /** @export */
  glUniformMatrix4fv: _glUniformMatrix4fv,
  /** @export */
  glUseProgram: _glUseProgram,
  /** @export */
  glVertexAttrib1fv: _glVertexAttrib1fv,
  /** @export */
  glVertexAttrib2fv: _glVertexAttrib2fv,
  /** @export */
  glVertexAttrib3fv: _glVertexAttrib3fv,
  /** @export */
  glVertexAttrib4fv: _glVertexAttrib4fv,
  /** @export */
  glVertexAttribPointer: _glVertexAttribPointer,
  /** @export */
  glViewport: _glViewport,
  /** @export */
  glfwCreateWindow: _glfwCreateWindow,
  /** @export */
  glfwDefaultWindowHints: _glfwDefaultWindowHints,
  /** @export */
  glfwGetPrimaryMonitor: _glfwGetPrimaryMonitor,
  /** @export */
  glfwGetTime: _glfwGetTime,
  /** @export */
  glfwGetVideoModes: _glfwGetVideoModes,
  /** @export */
  glfwInit: _glfwInit,
  /** @export */
  glfwMakeContextCurrent: _glfwMakeContextCurrent,
  /** @export */
  glfwSetCharCallback: _glfwSetCharCallback,
  /** @export */
  glfwSetCursorEnterCallback: _glfwSetCursorEnterCallback,
  /** @export */
  glfwSetCursorPosCallback: _glfwSetCursorPosCallback,
  /** @export */
  glfwSetDropCallback: _glfwSetDropCallback,
  /** @export */
  glfwSetErrorCallback: _glfwSetErrorCallback,
  /** @export */
  glfwSetKeyCallback: _glfwSetKeyCallback,
  /** @export */
  glfwSetMouseButtonCallback: _glfwSetMouseButtonCallback,
  /** @export */
  glfwSetScrollCallback: _glfwSetScrollCallback,
  /** @export */
  glfwSetWindowContentScaleCallback: _glfwSetWindowContentScaleCallback,
  /** @export */
  glfwSetWindowFocusCallback: _glfwSetWindowFocusCallback,
  /** @export */
  glfwSetWindowIconifyCallback: _glfwSetWindowIconifyCallback,
  /** @export */
  glfwSetWindowShouldClose: _glfwSetWindowShouldClose,
  /** @export */
  glfwSetWindowSize: _glfwSetWindowSize,
  /** @export */
  glfwSetWindowSizeCallback: _glfwSetWindowSizeCallback,
  /** @export */
  glfwSwapBuffers: _glfwSwapBuffers,
  /** @export */
  glfwTerminate: _glfwTerminate,
  /** @export */
  glfwWindowHint: _glfwWindowHint
};


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

function callMain() {

  var entryFunction = _main;

  var argc = 0;
  var argv = 0;

  try {

    var ret = entryFunction(argc, argv);

    // if we're not running an evented main loop, it's time to exit
    exitJS(ret, /* implicit = */ true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}

async function run() {

  preRun();

  if (runDependencies) {
    await resolveRunDependencies();
  }

  var setStatus = Module['setStatus'];
  if (setStatus) {
    setStatus('Running...');
    // Yield to the event loop to allow the browser to paint "Running..."
    await new Promise((resolve) => setTimeout(resolve, 1));
    // Then we want to clear the status text, but only after the rest of this function runs.
    setTimeout(setStatus, 1, '');
  }

  if (ABORT) return;

  initRuntime();

  // No ATMAINS hooks

  Module['onRuntimeInitialized']?.();

  var noInitialRun = Module['noInitialRun'] || false;
  if (!noInitialRun) callMain();

  postRun();
}

var wasmExports;

// With async instantation wasmExports is assigned asynchronously when the
// instance is received.
createWasm().then(() => run());

// end include: postamble.js

