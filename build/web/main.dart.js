// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const list_tile_theme = flutter_sdk.src__material__list_tile_theme;
  const framework = flutter_sdk.src__widgets__framework;
  const animation_controller = flutter_sdk.src__animation__animation_controller;
  const animations = flutter_sdk.src__animation__animations;
  const curves = flutter_sdk.src__animation__curves;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const heroes = flutter_sdk.src__widgets__heroes;
  const material = flutter_sdk.src__material__material;
  const list_tile = flutter_sdk.src__material__list_tile;
  const colors = flutter_sdk.src__material__colors;
  const navigator = flutter_sdk.src__widgets__navigator;
  const page = flutter_sdk.src__material__page;
  const transitions = flutter_sdk.src__widgets__transitions;
  const colors$ = flutter_sdk.src__painting__colors;
  const ticker_provider = flutter_sdk.src__widgets__ticker_provider;
  const animation = flutter_sdk.src__animation__animation;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    MaterialPageRouteOfWidget: () => (T.MaterialPageRouteOfWidget = dart.constFn(page.MaterialPageRoute$(framework.Widget)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    BuildContextToScaffold: () => (T.BuildContextToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: list_tile_theme.ListTileThemeData.prototype,
        [ListTileThemeData_visualDensity]: null,
        [ListTileThemeData_mouseCursor]: null,
        [ListTileThemeData_enableFeedback]: null,
        [ListTileThemeData_minLeadingWidth]: null,
        [ListTileThemeData_minVerticalPadding]: null,
        [ListTileThemeData_horizontalTitleGap]: null,
        [ListTileThemeData_selectedTileColor]: null,
        [ListTileThemeData_tileColor]: null,
        [ListTileThemeData_contentPadding]: null,
        [ListTileThemeData_textColor]: C[2] || CT.C2,
        [ListTileThemeData_iconColor]: null,
        [ListTileThemeData_selectedColor]: null,
        [ListTileThemeData_style]: null,
        [ListTileThemeData_shape]: null,
        [ListTileThemeData_dense]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: main.ListTileExample.prototype,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 850000
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "ListTile Samples"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "ListTile with Hero"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Tap here for Hero transition"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "ListTile Hero"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Tap here to go back"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: material.MaterialType.prototype,
        [_Enum__name]: "canvas",
        [_Enum_index]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293457385
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291356361
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289058471
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286695300
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284922730
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283215696
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282622023
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281896508
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281236786
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279983648
      });
    },
    get C17() {
      return C[17] = dart.constMap(core.int, ui.Color, [50, C[18] || CT.C18, 100, C[19] || CT.C19, 200, C[20] || CT.C20, 300, C[21] || CT.C21, 400, C[22] || CT.C22, 500, C[23] || CT.C23, 600, C[24] || CT.C24, 700, C[25] || CT.C25, 800, C[26] || CT.C26, 900, C[27] || CT.C27]);
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4283215696,
        [ColorSwatch__swatch]: C[17] || CT.C17
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "ListTile with FadeTransition"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: null,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: C[16] || CT.C16,
        [ListTile_tileColor]: null,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: true,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: C[2] || CT.C2,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C[28] || CT.C28,
        [ListTile_leading]: null
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: material.Material.prototype,
        [Widget_key]: null,
        [Material_borderRadius]: null,
        [Material_animationDuration]: C[12] || CT.C12,
        [Material_clipBehavior]: C[13] || CT.C13,
        [Material_borderOnForeground]: true,
        [Material_shape]: null,
        [Material_textStyle]: null,
        [Material_surfaceTintColor]: null,
        [Material_shadowColor]: null,
        [Material_color]: null,
        [Material_elevation]: 0,
        [Material_type]: C[14] || CT.C14,
        [Material_child]: C[15] || CT.C15
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294962158
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294954450
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293892762
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293227379
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293874512
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294198070
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293212469
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292030255
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291176488
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290190364
      });
    },
    get C32() {
      return C[32] = dart.constMap(core.int, ui.Color, [50, C[33] || CT.C33, 100, C[34] || CT.C34, 200, C[35] || CT.C35, 300, C[36] || CT.C36, 400, C[37] || CT.C37, 500, C[38] || CT.C38, 600, C[39] || CT.C39, 700, C[40] || CT.C40, 800, C[41] || CT.C41, 900, C[42] || CT.C42]);
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4294198070,
        [ColorSwatch__swatch]: C[32] || CT.C32
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "ListTile with SizeTransition"
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_minLeadingWidth]: null,
        [ListTile_minVerticalPadding]: 25,
        [ListTile_horizontalTitleGap]: null,
        [ListTile_enableFeedback]: null,
        [ListTile_selectedTileColor]: null,
        [ListTile_tileColor]: C[31] || CT.C31,
        [ListTile_autofocus]: false,
        [ListTile_focusNode]: null,
        [ListTile_splashColor]: null,
        [ListTile_hoverColor]: null,
        [ListTile_focusColor]: null,
        [ListTile_selected]: false,
        [ListTile_mouseCursor]: null,
        [ListTile_onFocusChange]: null,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_style]: null,
        [ListTile_textColor]: null,
        [ListTile_iconColor]: null,
        [ListTile_selectedColor]: null,
        [ListTile_shape]: null,
        [ListTile_visualDensity]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C[43] || CT.C43,
        [ListTile_leading]: null
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: material.Material.prototype,
        [Widget_key]: null,
        [Material_borderRadius]: null,
        [Material_animationDuration]: C[12] || CT.C12,
        [Material_clipBehavior]: C[13] || CT.C13,
        [Material_borderOnForeground]: true,
        [Material_shape]: null,
        [Material_textStyle]: null,
        [Material_surfaceTintColor]: null,
        [Material_shadowColor]: null,
        [Material_color]: null,
        [Material_elevation]: 0,
        [Material_type]: C[14] || CT.C14,
        [Material_child]: C[30] || CT.C30
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: main.ListTileApp.prototype,
        [Widget_key]: null
      });
    }
  }, false);
  var C = Array(45).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var ListTileThemeData_visualDensity = dart.privateName(list_tile_theme, "ListTileThemeData.visualDensity");
  var ListTileThemeData_mouseCursor = dart.privateName(list_tile_theme, "ListTileThemeData.mouseCursor");
  var ListTileThemeData_enableFeedback = dart.privateName(list_tile_theme, "ListTileThemeData.enableFeedback");
  var ListTileThemeData_minLeadingWidth = dart.privateName(list_tile_theme, "ListTileThemeData.minLeadingWidth");
  var ListTileThemeData_minVerticalPadding = dart.privateName(list_tile_theme, "ListTileThemeData.minVerticalPadding");
  var ListTileThemeData_horizontalTitleGap = dart.privateName(list_tile_theme, "ListTileThemeData.horizontalTitleGap");
  var ListTileThemeData_selectedTileColor = dart.privateName(list_tile_theme, "ListTileThemeData.selectedTileColor");
  var ListTileThemeData_tileColor = dart.privateName(list_tile_theme, "ListTileThemeData.tileColor");
  var ListTileThemeData_contentPadding = dart.privateName(list_tile_theme, "ListTileThemeData.contentPadding");
  var Color_value = dart.privateName(ui, "Color.value");
  var ListTileThemeData_textColor = dart.privateName(list_tile_theme, "ListTileThemeData.textColor");
  var ListTileThemeData_iconColor = dart.privateName(list_tile_theme, "ListTileThemeData.iconColor");
  var ListTileThemeData_selectedColor = dart.privateName(list_tile_theme, "ListTileThemeData.selectedColor");
  var ListTileThemeData_style = dart.privateName(list_tile_theme, "ListTileThemeData.style");
  var ListTileThemeData_shape = dart.privateName(list_tile_theme, "ListTileThemeData.shape");
  var ListTileThemeData_dense = dart.privateName(list_tile_theme, "ListTileThemeData.dense");
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.ListTileApp = class ListTileApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.ListTileApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({theme: theme_data.ThemeData.new({listTileTheme: C[1] || CT.C1, useMaterial3: true}), home: C[3] || CT.C3});
    }
  };
  (main.ListTileApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.ListTileApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.ListTileApp.prototype;
  dart.addTypeTests(main.ListTileApp);
  dart.addTypeCaches(main.ListTileApp);
  dart.setMethodSignature(main.ListTileApp, () => ({
    __proto__: dart.getMethods(main.ListTileApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.ListTileApp, I[0]);
  main.ListTileExample = class ListTileExample extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.ListTileExample.new({key: key});
    }
    createState() {
      return new main._ListTileExampleState.new();
    }
  };
  (main.ListTileExample.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.ListTileExample.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.ListTileExample.prototype;
  dart.addTypeTests(main.ListTileExample);
  dart.addTypeCaches(main.ListTileExample);
  dart.setMethodSignature(main.ListTileExample, () => ({
    __proto__: dart.getMethods(main.ListTileExample.__proto__),
    createState: dart.fnType(framework.State$(main.ListTileExample), [])
  }));
  dart.setLibraryUri(main.ListTileExample, I[0]);
  var ___ListTileExampleState__fadeController = dart.privateName(main, "_#_ListTileExampleState#_fadeController");
  var ___ListTileExampleState__sizeController = dart.privateName(main, "_#_ListTileExampleState#_sizeController");
  var ___ListTileExampleState__fadeAnimation = dart.privateName(main, "_#_ListTileExampleState#_fadeAnimation");
  var ___ListTileExampleState__sizeAnimation = dart.privateName(main, "_#_ListTileExampleState#_sizeAnimation");
  var _fadeController = dart.privateName(main, "_fadeController");
  var _sizeController = dart.privateName(main, "_sizeController");
  var _fadeAnimation = dart.privateName(main, "_fadeAnimation");
  var _sizeAnimation = dart.privateName(main, "_sizeAnimation");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var Material_borderRadius = dart.privateName(material, "Material.borderRadius");
  var Material_animationDuration = dart.privateName(material, "Material.animationDuration");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var Material_clipBehavior = dart.privateName(material, "Material.clipBehavior");
  var Material_borderOnForeground = dart.privateName(material, "Material.borderOnForeground");
  var Material_shape = dart.privateName(material, "Material.shape");
  var Material_textStyle = dart.privateName(material, "Material.textStyle");
  var Material_surfaceTintColor = dart.privateName(material, "Material.surfaceTintColor");
  var Material_shadowColor = dart.privateName(material, "Material.shadowColor");
  var Material_color = dart.privateName(material, "Material.color");
  var Material_elevation = dart.privateName(material, "Material.elevation");
  var Material_type = dart.privateName(material, "Material.type");
  var ListTile_minLeadingWidth = dart.privateName(list_tile, "ListTile.minLeadingWidth");
  var ListTile_minVerticalPadding = dart.privateName(list_tile, "ListTile.minVerticalPadding");
  var ListTile_horizontalTitleGap = dart.privateName(list_tile, "ListTile.horizontalTitleGap");
  var ListTile_enableFeedback = dart.privateName(list_tile, "ListTile.enableFeedback");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var ListTile_selectedTileColor = dart.privateName(list_tile, "ListTile.selectedTileColor");
  var ListTile_tileColor = dart.privateName(list_tile, "ListTile.tileColor");
  var ListTile_autofocus = dart.privateName(list_tile, "ListTile.autofocus");
  var ListTile_focusNode = dart.privateName(list_tile, "ListTile.focusNode");
  var ListTile_splashColor = dart.privateName(list_tile, "ListTile.splashColor");
  var ListTile_hoverColor = dart.privateName(list_tile, "ListTile.hoverColor");
  var ListTile_focusColor = dart.privateName(list_tile, "ListTile.focusColor");
  var ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  var ListTile_mouseCursor = dart.privateName(list_tile, "ListTile.mouseCursor");
  var ListTile_onFocusChange = dart.privateName(list_tile, "ListTile.onFocusChange");
  var ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  var ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  var ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  var ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  var ListTile_style = dart.privateName(list_tile, "ListTile.style");
  var ListTile_textColor = dart.privateName(list_tile, "ListTile.textColor");
  var ListTile_iconColor = dart.privateName(list_tile, "ListTile.iconColor");
  var ListTile_selectedColor = dart.privateName(list_tile, "ListTile.selectedColor");
  var ListTile_shape = dart.privateName(list_tile, "ListTile.shape");
  var ListTile_visualDensity = dart.privateName(list_tile, "ListTile.visualDensity");
  var ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  var ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  var ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  var ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  var ListTile_title = dart.privateName(list_tile, "ListTile.title");
  var ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  var Material_child = dart.privateName(material, "Material.child");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(main.ListTileExample) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(main.ListTileExample)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(main.ListTileExample));
  main._ListTileExampleState = class _ListTileExampleState extends State_TickerProviderStateMixin$36 {
    get [_fadeController]() {
      let t0;
      t0 = this[___ListTileExampleState__fadeController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_fadeController")) : t0;
    }
    set [_fadeController](_fadeController$35param) {
      if (this[___ListTileExampleState__fadeController] == null)
        this[___ListTileExampleState__fadeController] = _fadeController$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_fadeController"));
    }
    get [_sizeController]() {
      let t0;
      t0 = this[___ListTileExampleState__sizeController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_sizeController")) : t0;
    }
    set [_sizeController](_sizeController$35param) {
      if (this[___ListTileExampleState__sizeController] == null)
        this[___ListTileExampleState__sizeController] = _sizeController$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_sizeController"));
    }
    get [_fadeAnimation]() {
      let t0;
      t0 = this[___ListTileExampleState__fadeAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_fadeAnimation")) : t0;
    }
    set [_fadeAnimation](_fadeAnimation$35param) {
      if (this[___ListTileExampleState__fadeAnimation] == null)
        this[___ListTileExampleState__fadeAnimation] = _fadeAnimation$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_fadeAnimation"));
    }
    get [_sizeAnimation]() {
      let t0;
      t0 = this[___ListTileExampleState__sizeAnimation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_sizeAnimation")) : t0;
    }
    set [_sizeAnimation](_sizeAnimation$35param) {
      if (this[___ListTileExampleState__sizeAnimation] == null)
        this[___ListTileExampleState__sizeAnimation] = _sizeAnimation$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("_sizeAnimation"));
    }
    initState() {
      let t0, t0$;
      super.initState();
      this[_fadeController] = (t0 = new animation_controller.AnimationController.new({duration: C[4] || CT.C4, vsync: this}), (() => {
        t0.repeat({reverse: true});
        return t0;
      })());
      this[_sizeController] = (t0$ = new animation_controller.AnimationController.new({duration: C[5] || CT.C5, vsync: this}), (() => {
        t0$.repeat({reverse: true});
        return t0$;
      })());
      this[_fadeAnimation] = new animations.CurvedAnimation.new({parent: this[_fadeController], curve: curves.Curves.easeInOut});
      this[_sizeAnimation] = new animations.CurvedAnimation.new({parent: this[_sizeController], curve: curves.Curves.easeOut});
    }
    dispose() {
      this[_fadeController].dispose();
      this[_sizeController].dispose();
      super.dispose();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[6] || CT.C6}), body: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new heroes.Hero.new({tag: "ListTile-Hero", child: new material.Material.new({child: new list_tile.ListTile.new({title: C[7] || CT.C7, subtitle: C[8] || CT.C8, tileColor: colors.Colors.cyan, onTap: dart.fn(() => {
                    navigator.Navigator.push(framework.Widget, context, new (T.MaterialPageRouteOfWidget()).new({builder: dart.fn(context => new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[9] || CT.C9}), body: new basic.Center.new({child: new heroes.Hero.new({tag: "ListTile-Hero", child: new material.Material.new({child: new list_tile.ListTile.new({title: C[7] || CT.C7, subtitle: C[10] || CT.C10, tileColor: colors.Colors.blue._get(700), onTap: dart.fn(() => {
                                  navigator.Navigator.pop(T.ObjectN(), context);
                                }, T.VoidTovoid())})})})})}), T.BuildContextToScaffold())}));
                  }, T.VoidTovoid())})})}), new transitions.FadeTransition.new({opacity: this[_fadeAnimation], child: C[11] || CT.C11}), new basic.SizedBox.new({height: 100, child: new basic.Center.new({child: new transitions.SizeTransition.new({sizeFactor: this[_sizeAnimation], axisAlignment: -1, child: C[29] || CT.C29})})})])})});
    }
    static ['_#new#tearOff']() {
      return new main._ListTileExampleState.new();
    }
  };
  (main._ListTileExampleState.new = function() {
    this[___ListTileExampleState__fadeController] = null;
    this[___ListTileExampleState__sizeController] = null;
    this[___ListTileExampleState__fadeAnimation] = null;
    this[___ListTileExampleState__sizeAnimation] = null;
    main._ListTileExampleState.__proto__.new.call(this);
    ;
  }).prototype = main._ListTileExampleState.prototype;
  dart.addTypeTests(main._ListTileExampleState);
  dart.addTypeCaches(main._ListTileExampleState);
  dart.setMethodSignature(main._ListTileExampleState, () => ({
    __proto__: dart.getMethods(main._ListTileExampleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(main._ListTileExampleState, () => ({
    __proto__: dart.getGetters(main._ListTileExampleState.__proto__),
    [_fadeController]: animation_controller.AnimationController,
    [_sizeController]: animation_controller.AnimationController,
    [_fadeAnimation]: animation.Animation$(core.double),
    [_sizeAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(main._ListTileExampleState, () => ({
    __proto__: dart.getSetters(main._ListTileExampleState.__proto__),
    [_fadeController]: animation_controller.AnimationController,
    [_sizeController]: animation_controller.AnimationController,
    [_fadeAnimation]: animation.Animation$(core.double),
    [_sizeAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(main._ListTileExampleState, I[0]);
  dart.setFieldSignature(main._ListTileExampleState, () => ({
    __proto__: dart.getFields(main._ListTileExampleState.__proto__),
    [___ListTileExampleState__fadeController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___ListTileExampleState__sizeController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___ListTileExampleState__fadeAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___ListTileExampleState__sizeAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  main.main = function main$0() {
    return binding.runApp(C[44] || CT.C44);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;;;;;;;;;;;;;;;;;UC7C4B;AACxB,YAAO,iCACE,sEAIS;IAIpB;;;QAbyB;AAAnB,oDAAmB,GAAG;;EAAE;;;;;;;;;;;;;;AAoBU;IAAuB;;;QAHlC;AAAvB,wDAAuB,GAAG;;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQH;;IAAe;0BAAf;;;;;IAAe;;;AACf;;IAAe;0BAAf;;;;;IAAe;;;AACjB;;IAAc;yBAAd;;;;;IAAc;;;AACd;;IAAc;yBAAd;;;;;IAAc;;;AAIxB,MAAX;AAIkB,MAHxB,8BAAkB,kFAET,QAFS;AAGf,4BAAgB;;;AAKK,MAHxB,+BAAkB,kFAET,QAFS;AAGf,6BAAgB;;;AAKlB,MAHD,uBAAiB,4CACP,8BACM;AAMf,MAHD,uBAAiB,4CACP,8BACM;IAElB;;AAI2B,MAAzB,AAAgB;AACS,MAAzB,AAAgB;AACD,MAAT;IACR;UAG0B;AACxB,YAAO,oCACG,sDACF,yCACiC,8CACnB,wBAChB,0BACO,wBAGE,kCACE,sFAGa,2BACX;AAuBJ,oBAtBS,2CACR,OAAO,EACP,kDAAmC,QAAc,WACxC,mCACG,sDACF,6BACG,0BACA,wBACE,kCACE,wFAGa,AAAI,wBAAC,aAChB;AACiB,kCAAZ,qCAAI,OAAO;;4CAa7C,6CACW,gDAYX,gCACU,YACD,6BACE,gDACO,qCACG,CAAC;IAgB9B;;;;;;oDAlH+B;oDACA;mDACF;mDACA;;;EAgH/B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA/Ie;EAA2B;;ECGlB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
