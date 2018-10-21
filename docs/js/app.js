if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'app'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'app'.");
}
var app = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$kotlinx_html_js) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var takeLast = Kotlin.kotlin.collections.takeLast_yzln2o$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var asIterable = Kotlin.kotlin.collections.asIterable_tmsbgo$;
  var chunked = Kotlin.kotlin.collections.chunked_ba2ldo$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var Pair = Kotlin.kotlin.Pair;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var first_0 = Kotlin.kotlin.collections.first_7wnvza$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.experimental.delay_za3lpa$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var toString = Kotlin.toString;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.experimental.channels.Channel_287e2$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
  var first_1 = Kotlin.kotlin.sequences.first_veqyi0$;
  var take_0 = Kotlin.kotlin.collections.take_ba2ldo$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var setOf_0 = Kotlin.kotlin.collections.setOf_mh5how$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var experimental_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.experimental;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.experimental.launch_mk66e9$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.collections.slice_l0m14x$;
  var asIterable_0 = Kotlin.kotlin.collections.asIterable_us0mfu$;
  function Constants() {
    Constants_instance = this;
    this.MOVABLE_BOX_ID_PREFIX = 'MOVABLE_BOX_ID_';
    this.SCALABLE_BOX_ID_PREFIX = 'SCALABLE_BOX_ID_';
    this.GAME_CARD_ID_PREFIX = 'UI_GAME_CARD_ID_';
    this.MOVABLE_BOX_1_ID = 'MOVABLE_BOX_1_ID';
    this.SCALABLE_BOX_1_ID = 'SCALABLE_BOX_1_ID';
    this.SCALABLE_BOX_2_ID = 'SCALABLE_BOX_2_ID';
    this.EMPTY_CELL_SYMBOL = 'EMPTY_CELL_SYMBOL';
    this.SYMBOLS = listOf(['support', 'sun']);
    this.SYMBOLS_IMAGES = mapOf([to('support', 'icons8-support-framed-0.svg'), to('sun', 'icons8-sun.svg')]);
    this.MOVABLE_BOX_CLASSES = twoDArray(4, 4, ['box-0-0', 'box-0-1', 'box-0-2', 'box-0-3', 'box-1-0', 'box-1-1', 'box-1-2', 'box-1-3', 'box-2-0', 'box-2-1', 'box-2-2', 'box-2-3', 'box-3-0', 'box-3-1', 'box-3-2', 'box-3-3']);
    this.CELLS_PLACEMENT = listOf([new CellsField(4, 4, new Int32Array([0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0])), new CellsField(4, 4, new Int32Array([1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1])), new CellsField(4, 4, new Int32Array([1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0])), new CellsField(4, 4, new Int32Array([1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0])), new CellsField(4, 4, new Int32Array([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])), new CellsField(4, 4, new Int32Array([0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0])), new CellsField(4, 4, new Int32Array([1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0])), new CellsField(4, 4, new Int32Array([1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0])), new CellsField(4, 4, new Int32Array([1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1])), new CellsField(4, 4, new Int32Array([0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1])), new CellsField(4, 4, new Int32Array([1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1])), new CellsField(4, 4, new Int32Array([1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0]))]);
  }
  Constants.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Constants',
    interfaces: []
  };
  var Constants_instance = null;
  function Constants_getInstance() {
    if (Constants_instance === null) {
      new Constants();
    }
    return Constants_instance;
  }
  function CommonUIConstants() {
    CommonUIConstants_instance = this;
    this.MOVABLE_BOX_CLASS = 'box-0-1';
    this.MOVABLE_BOX_1_CLASS = 'box-3-2';
    this.COMMON_MOVABLE_BOX_CLASS = 'box-common';
    this.SCALABLE_BOX_NS_SQUEEZED_CLASS = 'scalable-box-ns-squeezed';
    this.SCALABLE_BOX_NS_NORMAL_CLASS = 'scalable-box-ns-normal';
    this.SCALABLE_BOX_SN_SQUEEZED_CLASS = 'scalable-box-sn-squeezed';
    this.SCALABLE_BOX_SN_NORMAL_CLASS = 'scalable-box-sn-normal';
    this.VISIBLE_CLASS = 'visible';
    this.INVISIBLE_CLASS = 'invisible';
    this.FLEX_ITEM_AUTO_CLASS = 'flex-item-auto';
    this.TOP_CONTAINER_ID = 'top-container';
    this.GAME_FIELD_CONTAINER_ID = 'game-field-container';
    this.BOTTOM_CONTAINER_ID = 'bottom-container';
  }
  CommonUIConstants.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CommonUIConstants',
    interfaces: []
  };
  var CommonUIConstants_instance = null;
  function CommonUIConstants_getInstance() {
    if (CommonUIConstants_instance === null) {
      new CommonUIConstants();
    }
    return CommonUIConstants_instance;
  }
  function GameCard(placement, symbol, cardId) {
    this.placement = placement;
    this.symbol = symbol;
    this.cardId = cardId;
  }
  GameCard.prototype.isEmpty = function () {
    return equals(this.symbol, Constants_getInstance().EMPTY_CELL_SYMBOL);
  };
  GameCard.prototype.withNewPlacement_1fzo63$ = function (newPlacement) {
    return new GameCard(newPlacement, this.symbol, this.cardId);
  };
  GameCard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameCard',
    interfaces: []
  };
  GameCard.prototype.component1 = function () {
    return this.placement;
  };
  GameCard.prototype.component2 = function () {
    return this.symbol;
  };
  GameCard.prototype.component3 = function () {
    return this.cardId;
  };
  GameCard.prototype.copy_xeqyx$ = function (placement, symbol, cardId) {
    return new GameCard(placement === void 0 ? this.placement : placement, symbol === void 0 ? this.symbol : symbol, cardId === void 0 ? this.cardId : cardId);
  };
  GameCard.prototype.toString = function () {
    return 'GameCard(placement=' + Kotlin.toString(this.placement) + (', symbol=' + Kotlin.toString(this.symbol)) + (', cardId=' + Kotlin.toString(this.cardId)) + ')';
  };
  GameCard.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.placement) | 0;
    result = result * 31 + Kotlin.hashCode(this.symbol) | 0;
    result = result * 31 + Kotlin.hashCode(this.cardId) | 0;
    return result;
  };
  GameCard.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.placement, other.placement) && Kotlin.equals(this.symbol, other.symbol) && Kotlin.equals(this.cardId, other.cardId)))));
  };
  function CardMove(card, newPlacement) {
    this.card = card;
    this.newPlacement = newPlacement;
  }
  CardMove.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardMove',
    interfaces: []
  };
  CardMove.prototype.component1 = function () {
    return this.card;
  };
  CardMove.prototype.component2 = function () {
    return this.newPlacement;
  };
  CardMove.prototype.copy_22cc8h$ = function (card, newPlacement) {
    return new CardMove(card === void 0 ? this.card : card, newPlacement === void 0 ? this.newPlacement : newPlacement);
  };
  CardMove.prototype.toString = function () {
    return 'CardMove(card=' + Kotlin.toString(this.card) + (', newPlacement=' + Kotlin.toString(this.newPlacement)) + ')';
  };
  CardMove.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.card) | 0;
    result = result * 31 + Kotlin.hashCode(this.newPlacement) | 0;
    return result;
  };
  CardMove.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.card, other.card) && Kotlin.equals(this.newPlacement, other.newPlacement)))));
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function ShuffleResult(shuffled, newCards) {
    this.shuffled = shuffled;
    this.newCards = newCards;
    if (!!equals(this.shuffled.first.cardId, this.shuffled.second.cardId)) {
      var message = 'Expected different cards but got ' + this.shuffled.first.cardId;
      throw IllegalArgumentException_init(message.toString());
    }
  }
  ShuffleResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShuffleResult',
    interfaces: []
  };
  ShuffleResult.prototype.component1 = function () {
    return this.shuffled;
  };
  ShuffleResult.prototype.component2 = function () {
    return this.newCards;
  };
  ShuffleResult.prototype.copy_n23zww$ = function (shuffled, newCards) {
    return new ShuffleResult(shuffled === void 0 ? this.shuffled : shuffled, newCards === void 0 ? this.newCards : newCards);
  };
  ShuffleResult.prototype.toString = function () {
    return 'ShuffleResult(shuffled=' + Kotlin.toString(this.shuffled) + (', newCards=' + Kotlin.toString(this.newCards)) + ')';
  };
  ShuffleResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.shuffled) | 0;
    result = result * 31 + Kotlin.hashCode(this.newCards) | 0;
    return result;
  };
  ShuffleResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.shuffled, other.shuffled) && Kotlin.equals(this.newCards, other.newCards)))));
  };
  function GameRound(moves) {
    this.moves = moves;
  }
  GameRound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameRound',
    interfaces: []
  };
  GameRound.prototype.component1 = function () {
    return this.moves;
  };
  GameRound.prototype.copy_za3lpa$ = function (moves) {
    return new GameRound(moves === void 0 ? this.moves : moves);
  };
  GameRound.prototype.toString = function () {
    return 'GameRound(moves=' + Kotlin.toString(this.moves) + ')';
  };
  GameRound.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    return result;
  };
  GameRound.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.moves, other.moves))));
  };
  function GameLevel(difficulty, rounds) {
    this.difficulty = difficulty;
    this.rounds = rounds;
  }
  GameLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameLevel',
    interfaces: []
  };
  GameLevel.prototype.component1 = function () {
    return this.difficulty;
  };
  GameLevel.prototype.component2 = function () {
    return this.rounds;
  };
  GameLevel.prototype.copy_vux9f0$ = function (difficulty, rounds) {
    return new GameLevel(difficulty === void 0 ? this.difficulty : difficulty, rounds === void 0 ? this.rounds : rounds);
  };
  GameLevel.prototype.toString = function () {
    return 'GameLevel(difficulty=' + Kotlin.toString(this.difficulty) + (', rounds=' + Kotlin.toString(this.rounds)) + ')';
  };
  GameLevel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.difficulty) | 0;
    result = result * 31 + Kotlin.hashCode(this.rounds) | 0;
    return result;
  };
  GameLevel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.difficulty, other.difficulty) && Kotlin.equals(this.rounds, other.rounds)))));
  };
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function ShufflesState(cardsCount) {
    this.cardsCount_0 = cardsCount;
    this.counter_0 = 0;
    this.shuffleHistory_0 = ArrayList_init_0();
  }
  ShufflesState.prototype.getShuffleResults = function () {
    return toList(this.shuffleHistory_0);
  };
  ShufflesState.prototype.addShuffleResult_cjrm8m$ = function (shuffleResult) {
    this.shuffleHistory_0.add_11rb$(shuffleResult);
    this.counter_0 = (this.cardsCount_0 - (this.counter_0 * 2 | 0) | 0) > 0 ? this.counter_0 + 1 | 0 : 0;
  };
  ShufflesState.prototype.resetCounter = function () {
    this.counter_0 = 0;
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  ShufflesState.prototype.cardsAlreadyShuffled = function () {
    var $receiver = takeLast(this.shuffleHistory_0, this.counter_0);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = listOf([element.shuffled.first.cardId, element.shuffled.second.cardId]);
      addAll(destination, list);
    }
    return toSet(destination);
  };
  ShufflesState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShufflesState',
    interfaces: []
  };
  function CellsField(rows, cols, values) {
    this.rows = rows;
    this.cols = cols;
    if (!(this.cols > 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(this.rows > 0)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    if (!(values.length === Kotlin.imul(this.cols, this.rows))) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_1.toString());
    }
    var $receiver = withIndex(chunked(asIterable(values), this.cols));
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
      var index = element.component1()
      , value = element.component2();
      var $receiver_0 = withIndex(value);
      var destination_0 = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.value > 0)
          destination_0.add_11rb$(element_0);
      }
      var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
      var tmp$_1;
      tmp$_1 = destination_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination_1.add_11rb$(new Pair(index, item.index));
      }
      var list = destination_1;
      addAll(destination, list);
    }
    this.cellCoords = destination;
    this.playableCellsCount = this.cellCoords.size;
  }
  CellsField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CellsField',
    interfaces: []
  };
  function GameLevelConditions(roundsToNextLevel, roundsToPreviousLevel, cardsCount, nonEmptyCardsCount, symbolsCount, roundMoves) {
    this.roundsToNextLevel = roundsToNextLevel;
    this.roundsToPreviousLevel = roundsToPreviousLevel;
    this.cardsCount = cardsCount;
    this.nonEmptyCardsCount = nonEmptyCardsCount;
    this.symbolsCount = symbolsCount;
    this.roundMoves = roundMoves;
    if (!(this.roundsToNextLevel > 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(this.roundsToPreviousLevel >= 0)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    if (!(this.cardsCount > 0)) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_1.toString());
    }
    if (!(this.nonEmptyCardsCount > 0)) {
      var message_2 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_2.toString());
    }
    if (!(this.symbolsCount > 0)) {
      var message_3 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_3.toString());
    }
    if (!(this.roundMoves > 0)) {
      var message_4 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_4.toString());
    }
    if (!(this.nonEmptyCardsCount <= this.cardsCount)) {
      var message_5 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_5.toString());
    }
    if (!(this.symbolsCount <= this.nonEmptyCardsCount)) {
      var message_6 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_6.toString());
    }
  }
  GameLevelConditions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameLevelConditions',
    interfaces: []
  };
  GameLevelConditions.prototype.component1 = function () {
    return this.roundsToNextLevel;
  };
  GameLevelConditions.prototype.component2 = function () {
    return this.roundsToPreviousLevel;
  };
  GameLevelConditions.prototype.component3 = function () {
    return this.cardsCount;
  };
  GameLevelConditions.prototype.component4 = function () {
    return this.nonEmptyCardsCount;
  };
  GameLevelConditions.prototype.component5 = function () {
    return this.symbolsCount;
  };
  GameLevelConditions.prototype.component6 = function () {
    return this.roundMoves;
  };
  GameLevelConditions.prototype.copy_mbbjvw$ = function (roundsToNextLevel, roundsToPreviousLevel, cardsCount, nonEmptyCardsCount, symbolsCount, roundMoves) {
    return new GameLevelConditions(roundsToNextLevel === void 0 ? this.roundsToNextLevel : roundsToNextLevel, roundsToPreviousLevel === void 0 ? this.roundsToPreviousLevel : roundsToPreviousLevel, cardsCount === void 0 ? this.cardsCount : cardsCount, nonEmptyCardsCount === void 0 ? this.nonEmptyCardsCount : nonEmptyCardsCount, symbolsCount === void 0 ? this.symbolsCount : symbolsCount, roundMoves === void 0 ? this.roundMoves : roundMoves);
  };
  GameLevelConditions.prototype.toString = function () {
    return 'GameLevelConditions(roundsToNextLevel=' + Kotlin.toString(this.roundsToNextLevel) + (', roundsToPreviousLevel=' + Kotlin.toString(this.roundsToPreviousLevel)) + (', cardsCount=' + Kotlin.toString(this.cardsCount)) + (', nonEmptyCardsCount=' + Kotlin.toString(this.nonEmptyCardsCount)) + (', symbolsCount=' + Kotlin.toString(this.symbolsCount)) + (', roundMoves=' + Kotlin.toString(this.roundMoves)) + ')';
  };
  GameLevelConditions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.roundsToNextLevel) | 0;
    result = result * 31 + Kotlin.hashCode(this.roundsToPreviousLevel) | 0;
    result = result * 31 + Kotlin.hashCode(this.cardsCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.nonEmptyCardsCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.symbolsCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.roundMoves) | 0;
    return result;
  };
  GameLevelConditions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.roundsToNextLevel, other.roundsToNextLevel) && Kotlin.equals(this.roundsToPreviousLevel, other.roundsToPreviousLevel) && Kotlin.equals(this.cardsCount, other.cardsCount) && Kotlin.equals(this.nonEmptyCardsCount, other.nonEmptyCardsCount) && Kotlin.equals(this.symbolsCount, other.symbolsCount) && Kotlin.equals(this.roundMoves, other.roundMoves)))));
  };
  function CurrentLevelGamerStatus(gameLevelNumber, gameLevelConditions, rounds) {
    this.gameLevelNumber = gameLevelNumber;
    this.gameLevelConditions = gameLevelConditions;
    this.rounds = rounds;
    if (!(this.rounds <= this.gameLevelConditions.roundsToNextLevel && this.rounds >= (-this.gameLevelConditions.roundsToPreviousLevel | 0))) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
  }
  var Math_0 = Math;
  CurrentLevelGamerStatus.prototype.forRoundResult_6taknv$ = function (roundResult) {
    var tmp$ = this.gameLevelNumber;
    var tmp$_0 = this.gameLevelConditions;
    var tmp$_1;
    if (roundResult) {
      var a = this.rounds + 1 | 0;
      var b = this.gameLevelConditions.roundsToNextLevel;
      tmp$_1 = Math_0.min(a, b);
    }
     else {
      var a_0 = this.rounds - 1 | 0;
      var b_0 = -this.gameLevelConditions.roundsToPreviousLevel | 0;
      tmp$_1 = Math_0.max(a_0, b_0);
    }
    return new CurrentLevelGamerStatus(tmp$, tmp$_0, tmp$_1);
  };
  CurrentLevelGamerStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CurrentLevelGamerStatus',
    interfaces: []
  };
  CurrentLevelGamerStatus.prototype.component1 = function () {
    return this.gameLevelNumber;
  };
  CurrentLevelGamerStatus.prototype.component2 = function () {
    return this.gameLevelConditions;
  };
  CurrentLevelGamerStatus.prototype.component3 = function () {
    return this.rounds;
  };
  CurrentLevelGamerStatus.prototype.copy_97mn0y$ = function (gameLevelNumber, gameLevelConditions, rounds) {
    return new CurrentLevelGamerStatus(gameLevelNumber === void 0 ? this.gameLevelNumber : gameLevelNumber, gameLevelConditions === void 0 ? this.gameLevelConditions : gameLevelConditions, rounds === void 0 ? this.rounds : rounds);
  };
  CurrentLevelGamerStatus.prototype.toString = function () {
    return 'CurrentLevelGamerStatus(gameLevelNumber=' + Kotlin.toString(this.gameLevelNumber) + (', gameLevelConditions=' + Kotlin.toString(this.gameLevelConditions)) + (', rounds=' + Kotlin.toString(this.rounds)) + ')';
  };
  CurrentLevelGamerStatus.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gameLevelNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.gameLevelConditions) | 0;
    result = result * 31 + Kotlin.hashCode(this.rounds) | 0;
    return result;
  };
  CurrentLevelGamerStatus.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gameLevelNumber, other.gameLevelNumber) && Kotlin.equals(this.gameLevelConditions, other.gameLevelConditions) && Kotlin.equals(this.rounds, other.rounds)))));
  };
  function nextLevelReached(currentLevelGamerStatus) {
    return currentLevelGamerStatus.rounds === currentLevelGamerStatus.gameLevelConditions.roundsToNextLevel;
  }
  function mustDecreaseLevel(currentLevelGamerStatus) {
    return currentLevelGamerStatus.rounds === (-currentLevelGamerStatus.gameLevelConditions.roundsToPreviousLevel | 0);
  }
  function nextLevelIfAny(currentLevelGamerStatus, gameLevelsConditions) {
    if (!nextLevelReached(currentLevelGamerStatus) && !mustDecreaseLevel(currentLevelGamerStatus))
      return currentLevelGamerStatus.gameLevelNumber;
    if (nextLevelReached(currentLevelGamerStatus) && currentLevelGamerStatus.gameLevelNumber === gameLevelsConditions.size)
      return currentLevelGamerStatus.gameLevelNumber;
    if (mustDecreaseLevel(currentLevelGamerStatus) && currentLevelGamerStatus.gameLevelNumber === 1)
      return 1;
    return nextLevelReached(currentLevelGamerStatus) ? currentLevelGamerStatus.gameLevelNumber + 1 | 0 : currentLevelGamerStatus.gameLevelNumber - 1 | 0;
  }
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  function getWithId($receiver, cardId) {
    var first$result;
    first$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.cardId, cardId)) {
          first$result = element;
          break first$break;
        }
      }
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  }
  function symbolsForRound(count) {
    var list = ArrayList_init(count);
    for (var index = 0; index < count; index++) {
      list.add_11rb$(Constants_getInstance().SYMBOLS.get_za3lpa$(1));
    }
    return list;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function spreadSymbols(playableCells, count) {
    if (!(playableCells.size >= count)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var symbols = symbolsForRound(count);
    var chosenCells = randomChoose_0(toList(withIndex(playableCells)), count);
    var destination = ArrayList_init(collectionSizeOrDefault(chosenCells, 10));
    var tmp$;
    tmp$ = chosenCells.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.index);
    }
    var chosenIndexes = destination;
    var $receiver = withIndex(playableCells);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var transform$result;
      if (chosenIndexes.contains_11rb$(item_0.index)) {
        transform$result = new GameCard(item_0.value, symbols.get_za3lpa$(chosenIndexes.indexOf_11rb$(item_0.index)), item_0.index.toString());
      }
       else {
        transform$result = new GameCard(item_0.value, Constants_getInstance().EMPTY_CELL_SYMBOL, item_0.index.toString());
      }
      tmp$_1.call(destination_0, transform$result);
    }
    return destination_0;
  }
  function getPlayableCells(rows, columns, minPlayableCellsCount) {
    var $receiver = Constants_getInstance().CELLS_PLACEMENT;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.rows === rows && element.cols === columns)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.playableCellsCount === minPlayableCellsCount)
        destination_0.add_11rb$(element_0);
    }
    return first(shuffled(destination_0)).cellCoords;
  }
  function shuffle(cards, shufflesState) {
    var choose = chooseCardsToInterchange(cards, shufflesState);
    println(choose);
    var newCards = toMutableList(cards);
    newCards.set_wxm5ur$(newCards.indexOf_11rb$(choose.first), choose.first.withNewPlacement_1fzo63$(choose.second.placement));
    newCards.set_wxm5ur$(newCards.indexOf_11rb$(choose.second), choose.second.withNewPlacement_1fzo63$(choose.first.placement));
    return new ShuffleResult(new Pair(choose.first, choose.second), newCards);
  }
  function chooseCardsToInterchange(cards, shufflesState) {
    var tmp$;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = cards.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!element.isEmpty())
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.cardId);
    }
    var nonEmptyCards = toSet(destination_0);
    var lastShuffledCards = shufflesState.cardsAlreadyShuffled();
    var nonEmptyLeft = minus(nonEmptyCards, lastShuffledCards);
    if (nonEmptyLeft.size === 0) {
      shufflesState.resetCounter();
      var firstToShuffle = first_0(nonEmptyCards);
      tmp$ = to(getWithId(cards, firstToShuffle), randomChoose(othersToShuffle(cards, firstToShuffle, lastShuffledCards)));
    }
     else {
      var firstToShuffle_0 = randomChoose(toList(nonEmptyLeft));
      tmp$ = to(getWithId(cards, firstToShuffle_0), randomChoose(othersToShuffle(cards, firstToShuffle_0, lastShuffledCards)));
    }
    return tmp$;
  }
  function othersToShuffle(cards, firstToShuffle, lastShuffledCards) {
    var tmp$;
    if (lastShuffledCards.size === cards.size || lastShuffledCards.isEmpty()) {
      var destination = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = cards.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (!equals(element.cardId, firstToShuffle))
          destination.add_11rb$(element);
      }
      tmp$ = destination;
    }
     else {
      var destination_0 = ArrayList_init_0();
      var tmp$_1;
      tmp$_1 = cards.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (!(equals(element_0.cardId, firstToShuffle) || lastShuffledCards.contains_11rb$(element_0.cardId)))
          destination_0.add_11rb$(element_0);
      }
      tmp$ = destination_0;
    }
    return tmp$;
  }
  function shufflesForRound(cards, moves) {
    var moveCards = cards;
    var shufflesState = new ShufflesState(cards.size);
    for (var i = 1; i <= moves; i++) {
      var shuffleResult = shuffle(moveCards, shufflesState);
      shufflesState.addShuffleResult_cjrm8m$(shuffleResult);
      moveCards = shuffleResult.newCards;
    }
    return shufflesState.getShuffleResults();
  }
  function toCardMoves(shuffled) {
    return listOf([new CardMove(shuffled.first, shuffled.second.placement), new CardMove(shuffled.second, shuffled.first.placement)]);
  }
  function runShuffles(gameCards_0, gameRound_0, moveCards_0, continuation_0, suspended) {
    var instance = new Coroutine$runShuffles(gameCards_0, gameRound_0, moveCards_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runShuffles(gameCards_0, gameRound_0, moveCards_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$s = void 0;
    this.local$gameCards = gameCards_0;
    this.local$gameRound = gameRound_0;
    this.local$moveCards = moveCards_0;
  }
  Coroutine$runShuffles.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runShuffles.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runShuffles.prototype.constructor = Coroutine$runShuffles;
  Coroutine$runShuffles.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = shufflesForRound(this.local$gameCards, this.local$gameRound.moves).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            this.local$s = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = delay(1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$moveCards(toCardMoves(this.local$s.shuffled));
            this.state_0 = 2;
            continue;
          case 4:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function runRound$lambda(closure$showCards) {
    return function (it) {
      closure$showCards(listOf_0(it));
      return Unit;
    };
  }
  function runRound$lambda_0(closure$hideCards) {
    return function (it) {
      closure$hideCards(listOf_0(it));
      return Unit;
    };
  }
  function runRound(enableInteraction_0, gameCards_0, gameRound_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0, suspended) {
    var instance = new Coroutine$runRound(enableInteraction_0, gameCards_0, gameRound_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runRound(enableInteraction_0, gameCards_0, gameRound_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$enableInteraction = enableInteraction_0;
    this.local$gameCards = gameCards_0;
    this.local$gameRound = gameRound_0;
    this.local$moveCards = moveCards_0;
    this.local$showCards = showCards_0;
    this.local$hideCards = hideCards_0;
    this.local$showCardQuest = showCardQuest_0;
    this.local$hideCardQuest = hideCardQuest_0;
    this.local$userCardChoose = userCardChoose_0;
  }
  Coroutine$runRound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runRound.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runRound.prototype.constructor = Coroutine$runRound;
  Coroutine$runRound.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$enableInteraction(false);
            this.state_0 = 2;
            this.result_0 = delay(1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var destination = ArrayList_init_0();
            var tmp$;
            tmp$ = this.local$gameCards.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              if (!element.isEmpty())
                destination.add_11rb$(element);
            }

            this.local$showCards(destination);
            this.state_0 = 3;
            this.result_0 = delay(2000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var destination_0 = ArrayList_init_0();
            var tmp$_0;
            tmp$_0 = this.local$gameCards.iterator();
            while (tmp$_0.hasNext()) {
              var element_0 = tmp$_0.next();
              if (!element_0.isEmpty())
                destination_0.add_11rb$(element_0);
            }

            this.local$hideCards(destination_0);
            this.state_0 = 4;
            this.result_0 = delay(1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = runShuffles(this.local$gameCards, this.local$gameRound, this.local$moveCards, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = delay(1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = runQuest(this.local$gameCards, this.local$gameRound, runRound$lambda(this.local$showCards), runRound$lambda_0(this.local$hideCards), this.local$showCardQuest, this.local$hideCardQuest, this.local$userCardChoose, this.local$enableInteraction, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var roundResult = this.result_0;
            this.local$enableInteraction(false);
            return roundResult;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function runQuest(gameCards_0, gameRound, showCard_0, hideCard, showCardQuest_0, hideCardQuest_0, userCardChoose_0, enableInteraction_0, continuation_0, suspended) {
    var instance = new Coroutine$runQuest(gameCards_0, gameRound, showCard_0, hideCard, showCardQuest_0, hideCardQuest_0, userCardChoose_0, enableInteraction_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runQuest(gameCards_0, gameRound, showCard_0, hideCard, showCardQuest_0, hideCardQuest_0, userCardChoose_0, enableInteraction_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$cardsLeft = void 0;
    this.local$questedCard = void 0;
    this.local$chosenCard = void 0;
    this.local$gameCards = gameCards_0;
    this.local$showCard = showCard_0;
    this.local$showCardQuest = showCardQuest_0;
    this.local$hideCardQuest = hideCardQuest_0;
    this.local$userCardChoose = userCardChoose_0;
    this.local$enableInteraction = enableInteraction_0;
  }
  Coroutine$runQuest.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runQuest.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runQuest.prototype.constructor = Coroutine$runQuest;
  Coroutine$runQuest.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var destination = ArrayList_init_0();
            var tmp$;
            tmp$ = this.local$gameCards.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              if (!element.isEmpty())
                destination.add_11rb$(element);
            }

            var destination_0 = LinkedHashMap_init();
            var tmp$_0;
            tmp$_0 = destination.iterator();
            while (tmp$_0.hasNext()) {
              var element_0 = tmp$_0.next();
              var key = element_0.symbol;
              var tmp$_0_0;
              var value = destination_0.get_11rb$(key);
              if (value == null) {
                var answer = ArrayList_init_0();
                destination_0.put_xwzc9p$(key, answer);
                tmp$_0_0 = answer;
              }
               else {
                tmp$_0_0 = value;
              }
              var list = tmp$_0_0;
              list.add_11rb$(element_0);
            }

            this.local$tmp$ = destination_0.entries.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            var symbolGameCards = this.local$tmp$.next();
            this.local$cardsLeft = symbolGameCards.value.size;
            this.local$tmp$_0 = symbolGameCards.value.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            this.local$questedCard = this.local$tmp$_0.next();
            this.local$showCardQuest(this.local$questedCard, this.local$cardsLeft);
            this.local$enableInteraction(true);
            this.state_0 = 4;
            this.result_0 = this.local$userCardChoose(this.local$gameCards, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$chosenCard = this.result_0;
            this.local$enableInteraction(false);
            println('User chose ' + this.local$chosenCard);
            this.local$showCard(this.local$chosenCard);
            this.state_0 = 5;
            this.result_0 = delay(1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            if (equals(this.local$chosenCard.symbol, this.local$questedCard.symbol)) {
              this.local$cardsLeft = this.local$cardsLeft - 1 | 0;
              this.state_0 = 6;
              continue;
            }
             else {
              this.local$hideCardQuest();
              println('User chose ' + this.local$chosenCard.symbol + ', but right was ' + this.local$questedCard.symbol);
              return false;
            }

          case 6:
            println('cardsLeft = ' + this.local$cardsLeft);
            this.state_0 = 3;
            continue;
          case 7:
            this.state_0 = 2;
            continue;
          case 8:
            this.local$hideCardQuest();
            return true;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function runLevel(gameLevelNumber_0, gameLevelConditions_0, createUICards_0, deleteUICards_0, showLevelGamerStatus_0, enableInteraction_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0, suspended) {
    var instance = new Coroutine$runLevel(gameLevelNumber_0, gameLevelConditions_0, createUICards_0, deleteUICards_0, showLevelGamerStatus_0, enableInteraction_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runLevel(gameLevelNumber_0, gameLevelConditions_0, createUICards_0, deleteUICards_0, showLevelGamerStatus_0, enableInteraction_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$playableCells = void 0;
    this.local$currentLevelGamerStatus = void 0;
    this.local$gameCards = void 0;
    this.local$gameLevelNumber = gameLevelNumber_0;
    this.local$gameLevelConditions = gameLevelConditions_0;
    this.local$createUICards = createUICards_0;
    this.local$deleteUICards = deleteUICards_0;
    this.local$showLevelGamerStatus = showLevelGamerStatus_0;
    this.local$enableInteraction = enableInteraction_0;
    this.local$moveCards = moveCards_0;
    this.local$showCards = showCards_0;
    this.local$hideCards = hideCards_0;
    this.local$showCardQuest = showCardQuest_0;
    this.local$hideCardQuest = hideCardQuest_0;
    this.local$userCardChoose = userCardChoose_0;
  }
  Coroutine$runLevel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLevel.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLevel.prototype.constructor = Coroutine$runLevel;
  Coroutine$runLevel.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$playableCells = getPlayableCells(4, 4, this.local$gameLevelConditions.cardsCount);
            this.local$currentLevelGamerStatus = new CurrentLevelGamerStatus(this.local$gameLevelNumber, this.local$gameLevelConditions, 0);
            this.local$showLevelGamerStatus(this.local$currentLevelGamerStatus.gameLevelNumber, this.local$currentLevelGamerStatus.rounds);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (nextLevelReached(this.local$currentLevelGamerStatus) || mustDecreaseLevel(this.local$currentLevelGamerStatus)) {
              this.state_0 = 5;
              continue;
            }

            this.local$gameCards = spreadSymbols(this.local$playableCells, 2);
            this.local$createUICards(this.local$gameCards);
            this.state_0 = 3;
            this.result_0 = runRound(this.local$enableInteraction, this.local$gameCards, new GameRound(this.local$gameLevelConditions.roundMoves), this.local$moveCards, this.local$showCards, this.local$hideCards, this.local$showCardQuest, this.local$hideCardQuest, this.local$userCardChoose, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var roundResult = this.result_0;
            this.local$currentLevelGamerStatus = this.local$currentLevelGamerStatus.forRoundResult_6taknv$(roundResult);
            this.state_0 = 4;
            this.result_0 = delay(1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$showLevelGamerStatus(this.local$currentLevelGamerStatus.gameLevelNumber, this.local$currentLevelGamerStatus.rounds);
            this.local$deleteUICards(this.local$gameCards);
            this.state_0 = 2;
            continue;
          case 5:
            return this.local$currentLevelGamerStatus;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function runLevels(gameLevelsConditions_0, initialLevelNumber_0, createUICards_0, deleteUICards_0, showLevelGamerStatus_0, enableInteraction_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0, suspended) {
    var instance = new Coroutine$runLevels(gameLevelsConditions_0, initialLevelNumber_0, createUICards_0, deleteUICards_0, showLevelGamerStatus_0, enableInteraction_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runLevels(gameLevelsConditions_0, initialLevelNumber_0, createUICards_0, deleteUICards_0, showLevelGamerStatus_0, enableInteraction_0, moveCards_0, showCards_0, hideCards_0, showCardQuest_0, hideCardQuest_0, userCardChoose_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$currentLevelGamerStatus = void 0;
    this.local$gameLevelsConditions = gameLevelsConditions_0;
    this.local$initialLevelNumber = initialLevelNumber_0;
    this.local$createUICards = createUICards_0;
    this.local$deleteUICards = deleteUICards_0;
    this.local$showLevelGamerStatus = showLevelGamerStatus_0;
    this.local$enableInteraction = enableInteraction_0;
    this.local$moveCards = moveCards_0;
    this.local$showCards = showCards_0;
    this.local$hideCards = hideCards_0;
    this.local$showCardQuest = showCardQuest_0;
    this.local$hideCardQuest = hideCardQuest_0;
    this.local$userCardChoose = userCardChoose_0;
  }
  Coroutine$runLevels.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLevels.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLevels.prototype.constructor = Coroutine$runLevels;
  Coroutine$runLevels.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$currentLevelGamerStatus = new CurrentLevelGamerStatus(this.local$initialLevelNumber, this.local$gameLevelsConditions.get_za3lpa$(this.local$initialLevelNumber - 1 | 0), 0);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = runLevel(this.local$currentLevelGamerStatus.gameLevelNumber, this.local$currentLevelGamerStatus.gameLevelConditions, this.local$createUICards, this.local$deleteUICards, this.local$showLevelGamerStatus, this.local$enableInteraction, this.local$moveCards, this.local$showCards, this.local$hideCards, this.local$showCardQuest, this.local$hideCardQuest, this.local$userCardChoose, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$currentLevelGamerStatus = this.result_0;
            var nextLevelNumber = nextLevelIfAny(this.local$currentLevelGamerStatus, this.local$gameLevelsConditions);
            this.local$currentLevelGamerStatus = new CurrentLevelGamerStatus(nextLevelNumber, this.local$gameLevelsConditions.get_za3lpa$(nextLevelNumber - 1 | 0), 0);
            this.state_0 = 2;
            continue;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function newDiv(init) {
    return newElement('div', init);
  }
  function newInput(init) {
    return newElement('input', init);
  }
  function newElement(localName, init) {
    var tmp$;
    var el = Kotlin.isType(tmp$ = document.createElement(localName), Element) ? tmp$ : throwCCE();
    init(el);
    return el;
  }
  function withChildren($receiver, children) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== children.length; ++tmp$) {
      var element = children[tmp$];
      $receiver.appendChild(element);
    }
    return $receiver;
  }
  function launch$ObjectLiteral() {
  }
  Object.defineProperty(launch$ObjectLiteral.prototype, 'context', {
    get: function () {
      return experimental.EmptyCoroutineContext;
    }
  });
  launch$ObjectLiteral.prototype.resume_11rb$ = function (value) {
  };
  launch$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (e) {
    println('Coroutine failed: ' + e);
  };
  launch$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Continuation]
  };
  function launch_0(block) {
    startCoroutine(block, new launch$ObjectLiteral());
  }
  function await$lambda$lambda(closure$cont) {
    return function (it) {
      closure$cont.resume_11rb$(it);
      return Unit;
    };
  }
  function await$lambda$lambda_0(closure$cont) {
    return function (it) {
      closure$cont.resumeWithException_tcv7n7$(it);
      return Unit;
    };
  }
  function await$lambda(this$await) {
    return function (cont) {
      this$await.then(await$lambda$lambda(cont), await$lambda$lambda_0(cont));
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function await_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$await($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$await($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda(await$lambda(this.local$$receiver))(this.facade);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function loadResource(url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadResource(url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$loadResource(url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$url = url_0;
  }
  Coroutine$loadResource.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadResource.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadResource.prototype.constructor = Coroutine$loadResource;
  Coroutine$loadResource.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(getRequest(this.local$url), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.responseText;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function getRequest$lambda$lambda(closure$resolve, closure$xhr) {
    return function (e) {
      closure$resolve(closure$xhr);
      return Unit;
    };
  }
  function getRequest$lambda(closure$url) {
    return function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', closure$url);
      xhr.addEventListener('load', getRequest$lambda$lambda(resolve, xhr));
      xhr.send();
      return Unit;
    };
  }
  function getRequest(url) {
    var p = new Promise(getRequest$lambda(url));
    return p;
  }
  function main$lambda$lambda$lambda(closure$interactionEnabled_0, closure$userChosenUICardsChannel_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda(closure$interactionEnabled_0, closure$userChosenUICardsChannel_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda$lambda(closure$interactionEnabled_0, closure$userChosenUICardsChannel_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$interactionEnabled = closure$interactionEnabled_0;
    this.local$closure$userChosenUICardsChannel = closure$userChosenUICardsChannel_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$closure$interactionEnabled.v) {
              this.state_0 = 2;
              this.result_0 = this.local$closure$userChosenUICardsChannel.send_11rb$(this.local$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda(closure$back, closure$cardFaceSvgs, closure$interactionEnabled, closure$userChosenUICardsChannel, closure$uiCards) {
    return function (it) {
      closure$uiCards.v = cellsToCards(it, closure$back, closure$cardFaceSvgs, main$lambda$lambda$lambda(closure$interactionEnabled, closure$userChosenUICardsChannel));
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$uiCards) {
    return function (cards) {
      var destination = ArrayList_init(collectionSizeOrDefault(cards, 10));
      var tmp$;
      tmp$ = cards.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(getUICard(item, closure$uiCards.v).uiElementId);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        removeUIElementWithId(element);
      }
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$levelInfo) {
    return function (n, r) {
      closure$levelInfo.showStatus_vux9f0$(n, r);
      return Unit;
    };
  }
  function main$lambda$lambda_2(closure$interactionEnabled) {
    return function (it) {
      closure$interactionEnabled.v = it;
      return Unit;
    };
  }
  function main$lambda$lambda_3(closure$uiCards) {
    return function (moves) {
      moveUICards(moves, closure$uiCards.v);
      return Unit;
    };
  }
  function main$lambda$lambda_4(closure$uiCards) {
    return function (it) {
      var destination = ArrayList_init(collectionSizeOrDefault(it, 10));
      var tmp$;
      tmp$ = it.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(getUICard(item, closure$uiCards.v));
      }
      showCards(toList(destination));
      return Unit;
    };
  }
  function main$lambda$lambda_5(closure$uiCards) {
    return function (it) {
      var destination = ArrayList_init(collectionSizeOrDefault(it, 10));
      var tmp$;
      tmp$ = it.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(getUICard(item, closure$uiCards.v));
      }
      hideCards(toList(destination));
      return Unit;
    };
  }
  function main$lambda$lambda_6(closure$quest) {
    return function (gameCard, i) {
      closure$quest.quest_bm4lxs$(gameCard.symbol, i);
      return Unit;
    };
  }
  function main$lambda$lambda_7(closure$quest) {
    return function () {
      closure$quest.hide();
      return Unit;
    };
  }
  function main$lambda$lambda_8(closure$userChosenUICardsChannel_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$userChosenUICardsChannel_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda(closure$userChosenUICardsChannel_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$userChosenUICardsChannel = closure$userChosenUICardsChannel_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$userChosenUICardsChannel.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return getGameCard(this.local$it, this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function main$lambda(continuation_0, suspended) {
    var instance = new Coroutine$main$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$face = void 0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = loadResource('images/' + toString(Constants_getInstance().SYMBOLS_IMAGES.get_11rb$('sun')), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$face = this.result_0;
            this.state_0 = 3;
            this.result_0 = loadResource('images/question-64-vectorpaint-framed.svg', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var back = this.result_0;
            var cardFaceSvgs = mapOf_0(to(toString(Constants_getInstance().SYMBOLS_IMAGES.get_11rb$('sun')), this.local$face));
            var userChosenUICardsChannel = Channel();
            var interactionEnabled = {v: false};
            var uiCards = {v: emptyList()};
            var quest = (new Quest(cardFaceSvgs)).init_b3w3xb$(ensureNotNull(document.getElementById(CommonUIConstants_getInstance().BOTTOM_CONTAINER_ID)));
            var levelInfo = (new LevelInfo()).init_b3w3xb$(ensureNotNull(document.getElementById(CommonUIConstants_getInstance().TOP_CONTAINER_ID)));
            this.state_0 = 4;
            this.result_0 = runLevels(listOf([new GameLevelConditions(3, 2, 4, 2, 1, 2), new GameLevelConditions(3, 2, 6, 2, 1, 3)]), 1, main$lambda$lambda(back, cardFaceSvgs, interactionEnabled, userChosenUICardsChannel, uiCards), main$lambda$lambda_0(uiCards), main$lambda$lambda_1(levelInfo), main$lambda$lambda_2(interactionEnabled), main$lambda$lambda_3(uiCards), main$lambda$lambda_4(uiCards), main$lambda$lambda_5(uiCards), main$lambda$lambda_6(quest), main$lambda$lambda_7(quest), main$lambda$lambda_8(userChosenUICardsChannel), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main(args) {
    launch_0(main$lambda);
  }
  function PlatformRandom() {
  }
  PlatformRandom.prototype.nextInt_za3lpa$ = function (size) {
    return size;
  };
  PlatformRandom.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformRandom',
    interfaces: []
  };
  function randomChoose(source) {
    return first_1(take(asSequence(shuffled(source)), 1));
  }
  function randomChoose_0(source, count) {
    if (!(count > 0 && count <= source.size)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var result = take_0(shuffled(source), count);
    return result;
  }
  function randomChooseWithIndexes(source, count) {
    if (count === void 0)
      count = 1;
    if (!(count > 0 && count <= source.size)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var result = take_0(shuffled(withIndex(source)), count);
    return result;
  }
  function UICard(cardId, movable_box_1_id, movable_box_class, scalable_box_1_id, scalable_box_2_id, cardFaceSvg, cardBackSvg, onClick) {
    this.cardId = cardId;
    this.movable_box_1_id = movable_box_1_id;
    this.movable_box_class = movable_box_class;
    this.scalable_box_1_id = scalable_box_1_id;
    this.scalable_box_2_id = scalable_box_2_id;
    this.cardFaceSvg = cardFaceSvg;
    this.cardBackSvg = cardBackSvg;
    this.onClick_0 = onClick;
    this.uiElementId = Constants_getInstance().GAME_CARD_ID_PREFIX + this.cardId;
    append(ensureNotNull(document.getElementById(CommonUIConstants_getInstance().GAME_FIELD_CONTAINER_ID)), UICard_init$lambda(this));
    var cardFaceDoc = (new DOMParser()).parseFromString(this.cardFaceSvg, 'image/svg+xml');
    var cardBackDoc = (new DOMParser()).parseFromString(this.cardBackSvg, 'image/svg+xml');
    ensureNotNull(document.getElementById(this.scalable_box_1_id)).appendChild(ensureNotNull(cardBackDoc.rootElement));
    ensureNotNull(document.getElementById(this.scalable_box_2_id)).appendChild(ensureNotNull(cardFaceDoc.rootElement));
    var thisCard = this;
    ensureNotNull(document.getElementById(this.uiElementId)).addEventListener('click', UICard_init$lambda_0(this, thisCard));
  }
  function UICard_init$lambda$lambda$lambda(this$UICard) {
    return function ($receiver) {
      set_id($receiver, this$UICard.scalable_box_1_id);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().SCALABLE_BOX_NS_NORMAL_CLASS));
      return Unit;
    };
  }
  function UICard_init$lambda$lambda$lambda_0(this$UICard) {
    return function ($receiver) {
      set_id($receiver, this$UICard.scalable_box_2_id);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().SCALABLE_BOX_SN_SQUEEZED_CLASS));
      return Unit;
    };
  }
  function UICard_init$lambda$lambda(this$UICard) {
    return function ($receiver) {
      set_id($receiver, this$UICard.uiElementId);
      set_classes($receiver, setOf([this$UICard.movable_box_class, CommonUIConstants_getInstance().COMMON_MOVABLE_BOX_CLASS]));
      div($receiver, void 0, UICard_init$lambda$lambda$lambda(this$UICard));
      div($receiver, void 0, UICard_init$lambda$lambda$lambda_0(this$UICard));
      return Unit;
    };
  }
  function UICard_init$lambda(this$UICard) {
    return function ($receiver) {
      div_0($receiver, void 0, UICard_init$lambda$lambda(this$UICard));
      return Unit;
    };
  }
  function UICard_init$lambda$lambda_0(this$UICard_0, closure$thisCard_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$UICard_init$lambda$lambda(this$UICard_0, closure$thisCard_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$UICard_init$lambda$lambda(this$UICard_0, closure$thisCard_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$UICard = this$UICard_0;
    this.local$closure$thisCard = closure$thisCard_0;
  }
  Coroutine$UICard_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UICard_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UICard_init$lambda$lambda.prototype.constructor = Coroutine$UICard_init$lambda$lambda;
  Coroutine$UICard_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$UICard.onClick_0(this.local$closure$thisCard, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function UICard_init$lambda_0(this$UICard, closure$thisCard) {
    return function (it) {
      launch(experimental_0.GlobalScope, void 0, void 0, void 0, UICard_init$lambda$lambda_0(this$UICard, closure$thisCard));
      return Unit;
    };
  }
  UICard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UICard',
    interfaces: []
  };
  function moveUICard(uiCard, move) {
    var x = ensureNotNull(document.getElementById(uiCard.uiElementId));
    x.className = Constants_getInstance().MOVABLE_BOX_CLASSES.get_za3lpa$(move.newPlacement.first).get_za3lpa$(move.newPlacement.second) + ' ' + CommonUIConstants_getInstance().COMMON_MOVABLE_BOX_CLASS;
  }
  function updateCardsScale(uiCards) {
    var tmp$;
    tmp$ = uiCards.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      scale(element.scalable_box_1_id, element.scalable_box_2_id);
    }
  }
  function showCards(uiCards) {
    var tmp$;
    tmp$ = uiCards.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      scale2toNormal(element.scalable_box_1_id, element.scalable_box_2_id);
    }
  }
  function hideCards(uiCards) {
    var tmp$;
    tmp$ = uiCards.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      scale1toNormal(element.scalable_box_1_id, element.scalable_box_2_id);
    }
  }
  function scale(scalable_box_1_id, scalable_box_2_id) {
    var x = ensureNotNull(document.getElementById(scalable_box_1_id));
    if (equals(x.className, CommonUIConstants_getInstance().SCALABLE_BOX_NS_SQUEEZED_CLASS)) {
      x.className = CommonUIConstants_getInstance().SCALABLE_BOX_NS_NORMAL_CLASS;
    }
     else {
      x.className = CommonUIConstants_getInstance().SCALABLE_BOX_NS_SQUEEZED_CLASS;
    }
    var y = ensureNotNull(document.getElementById(scalable_box_2_id));
    if (equals(y.className, CommonUIConstants_getInstance().SCALABLE_BOX_SN_SQUEEZED_CLASS)) {
      y.className = CommonUIConstants_getInstance().SCALABLE_BOX_SN_NORMAL_CLASS;
    }
     else {
      y.className = CommonUIConstants_getInstance().SCALABLE_BOX_SN_SQUEEZED_CLASS;
    }
  }
  function scale1toNormal(scalable_box_1_id, scalable_box_2_id) {
    var x = ensureNotNull(document.getElementById(scalable_box_1_id));
    if (equals(x.className, CommonUIConstants_getInstance().SCALABLE_BOX_NS_SQUEEZED_CLASS)) {
      x.className = CommonUIConstants_getInstance().SCALABLE_BOX_NS_NORMAL_CLASS;
    }
    var y = ensureNotNull(document.getElementById(scalable_box_2_id));
    if (equals(y.className, CommonUIConstants_getInstance().SCALABLE_BOX_SN_NORMAL_CLASS)) {
      y.className = CommonUIConstants_getInstance().SCALABLE_BOX_SN_SQUEEZED_CLASS;
    }
  }
  function scale2toNormal(scalable_box_1_id, scalable_box_2_id) {
    var x = ensureNotNull(document.getElementById(scalable_box_1_id));
    if (equals(x.className, CommonUIConstants_getInstance().SCALABLE_BOX_NS_NORMAL_CLASS)) {
      x.className = CommonUIConstants_getInstance().SCALABLE_BOX_NS_SQUEEZED_CLASS;
    }
    var y = ensureNotNull(document.getElementById(scalable_box_2_id));
    if (equals(y.className, CommonUIConstants_getInstance().SCALABLE_BOX_SN_SQUEEZED_CLASS)) {
      y.className = CommonUIConstants_getInstance().SCALABLE_BOX_SN_NORMAL_CLASS;
    }
  }
  function removeUIElementWithId(id) {
    var tmp$;
    var element = document.getElementById(id);
    (tmp$ = element != null ? element.parentNode : null) != null ? tmp$.removeChild(element) : null;
  }
  var Map = Kotlin.kotlin.collections.Map;
  function cellsToCards(gameCards, cardBackSvg, cardFaceSvgs, onClick) {
    var $receiver = withIndex(gameCards);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      tmp$_1 = item.value.cardId;
      tmp$_2 = Constants_getInstance().MOVABLE_BOX_ID_PREFIX + ('_' + item.index);
      tmp$_3 = Constants_getInstance().MOVABLE_BOX_CLASSES.get_za3lpa$(item.value.placement.first).get_za3lpa$(item.value.placement.second);
      tmp$_4 = Constants_getInstance().SCALABLE_BOX_ID_PREFIX + ('_' + item.index + '_1');
      tmp$_5 = Constants_getInstance().SCALABLE_BOX_ID_PREFIX + ('_' + item.index + '_2');
      tmp$_6 = item.value.isEmpty();
      if (tmp$_6 === false) {
        var key = Constants_getInstance().SYMBOLS_IMAGES.get_11rb$(item.value.symbol);
        var tmp$_8;
        tmp$_7 = ensureNotNull((Kotlin.isType(tmp$_8 = cardFaceSvgs, Map) ? tmp$_8 : throwCCE()).get_11rb$(key));
      }
       else if (tmp$_6 === true)
        tmp$_7 = cardBackSvg;
      else
        tmp$_7 = Kotlin.noWhenBranchMatched();
      tmp$_0.call(destination, new UICard(tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_7, cardBackSvg, onClick));
    }
    return destination;
  }
  function moveUICards(moves, uiCards) {
    var tmp$;
    tmp$ = moves.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      moveUICard(getUICard(element.card, uiCards), element);
    }
  }
  function getUICard(gameCard, uiCards) {
    var first$result;
    first$break: do {
      var tmp$;
      tmp$ = uiCards.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.cardId, gameCard.cardId)) {
          first$result = element;
          break first$break;
        }
      }
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  }
  function getGameCard(gameCards, uiCard) {
    var first$result;
    first$break: do {
      var tmp$;
      tmp$ = gameCards.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.cardId, uiCard.cardId)) {
          first$result = element;
          break first$break;
        }
      }
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  }
  function Quest(cardFaceSvgs) {
    this.cardFaceSvgs_0 = cardFaceSvgs;
    this.elementId = 'quest-container';
    this.questedCardId = 'QUESTED_CARD';
    this.questedTextId = 'QUESTED_TEXT';
  }
  function Quest$init$lambda$lambda(this$Quest) {
    return function ($receiver) {
      set_id($receiver, this$Quest.elementId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().INVISIBLE_CLASS));
      return Unit;
    };
  }
  function Quest$init$lambda(this$Quest) {
    return function ($receiver) {
      div_0($receiver, void 0, Quest$init$lambda$lambda(this$Quest));
      return Unit;
    };
  }
  Quest.prototype.init_b3w3xb$ = function (node) {
    append(node, Quest$init$lambda(this));
    return this;
  };
  function Quest$quest$lambda$lambda(this$Quest) {
    return function ($receiver) {
      set_id($receiver, this$Quest.questedCardId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().FLEX_ITEM_AUTO_CLASS));
      return Unit;
    };
  }
  function Quest$quest$lambda$lambda_0(this$Quest, closure$count) {
    return function ($receiver) {
      set_id($receiver, this$Quest.questedTextId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().FLEX_ITEM_AUTO_CLASS));
      $receiver.unaryPlus_pdl1vz$((closure$count > 0 ? ' * ' + closure$count : '') + ' - ?');
      return Unit;
    };
  }
  function Quest$quest$lambda(this$Quest, closure$count) {
    return function ($receiver) {
      div_0($receiver, void 0, Quest$quest$lambda$lambda(this$Quest));
      div_0($receiver, void 0, Quest$quest$lambda$lambda_0(this$Quest, closure$count));
      return Unit;
    };
  }
  Quest.prototype.quest_bm4lxs$ = function (symbol, count) {
    if (count === void 0)
      count = 0;
    ensureNotNull(document.getElementById(this.elementId)).className = CommonUIConstants_getInstance().VISIBLE_CLASS;
    var childNodes = ensureNotNull(document.getElementById(this.elementId)).childNodes;
    println('quest child nodes count = ' + asList(childNodes).size);
    var tmp$;
    tmp$ = filterNotNull(listOf([document.getElementById(this.questedCardId), document.getElementById(this.questedTextId)])).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      ensureNotNull(document.getElementById(this.elementId)).removeChild(element);
    }
    append(ensureNotNull(document.getElementById(this.elementId)), Quest$quest$lambda(this, count));
    var tmp$_0 = new DOMParser();
    var $receiver = this.cardFaceSvgs_0;
    var key = Constants_getInstance().SYMBOLS_IMAGES.get_11rb$(symbol);
    var tmp$_1;
    var cardFaceDoc = tmp$_0.parseFromString(ensureNotNull((Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).get_11rb$(key)), 'image/svg+xml');
    ensureNotNull(document.getElementById(this.questedCardId)).appendChild(ensureNotNull(cardFaceDoc.rootElement));
  };
  Quest.prototype.hide = function () {
    ensureNotNull(document.getElementById(this.elementId)).className = CommonUIConstants_getInstance().INVISIBLE_CLASS;
  };
  Quest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quest',
    interfaces: []
  };
  function LevelInfo() {
    this.elementId = 'level-info-container';
    this.levelNumberId = 'level-info-level-number';
    this.roundsToId = 'level-info-rounds-to';
  }
  function LevelInfo$init$lambda$lambda$lambda(this$LevelInfo) {
    return function ($receiver) {
      set_id($receiver, this$LevelInfo.levelNumberId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().FLEX_ITEM_AUTO_CLASS));
      $receiver.unaryPlus_pdl1vz$('Level: 1');
      return Unit;
    };
  }
  function LevelInfo$init$lambda$lambda$lambda_0(this$LevelInfo) {
    return function ($receiver) {
      set_id($receiver, this$LevelInfo.roundsToId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().FLEX_ITEM_AUTO_CLASS));
      $receiver.unaryPlus_pdl1vz$('Rounds: 0');
      return Unit;
    };
  }
  function LevelInfo$init$lambda$lambda(this$LevelInfo) {
    return function ($receiver) {
      set_id($receiver, this$LevelInfo.elementId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().VISIBLE_CLASS));
      div($receiver, void 0, LevelInfo$init$lambda$lambda$lambda(this$LevelInfo));
      div($receiver, void 0, LevelInfo$init$lambda$lambda$lambda_0(this$LevelInfo));
      return Unit;
    };
  }
  function LevelInfo$init$lambda(this$LevelInfo) {
    return function ($receiver) {
      div_0($receiver, void 0, LevelInfo$init$lambda$lambda(this$LevelInfo));
      return Unit;
    };
  }
  LevelInfo.prototype.init_b3w3xb$ = function (node) {
    append(node, LevelInfo$init$lambda(this));
    return this;
  };
  function LevelInfo$showStatus$lambda$lambda(this$LevelInfo, closure$levelNumber) {
    return function ($receiver) {
      set_id($receiver, this$LevelInfo.levelNumberId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().FLEX_ITEM_AUTO_CLASS));
      $receiver.unaryPlus_pdl1vz$('Level: ' + closure$levelNumber);
      return Unit;
    };
  }
  function LevelInfo$showStatus$lambda$lambda_0(this$LevelInfo, closure$rounds) {
    return function ($receiver) {
      set_id($receiver, this$LevelInfo.roundsToId);
      set_classes($receiver, setOf_0(CommonUIConstants_getInstance().FLEX_ITEM_AUTO_CLASS));
      $receiver.unaryPlus_pdl1vz$('Rounds: ' + closure$rounds);
      return Unit;
    };
  }
  function LevelInfo$showStatus$lambda(this$LevelInfo, closure$levelNumber, closure$rounds) {
    return function ($receiver) {
      div_0($receiver, void 0, LevelInfo$showStatus$lambda$lambda(this$LevelInfo, closure$levelNumber));
      div_0($receiver, void 0, LevelInfo$showStatus$lambda$lambda_0(this$LevelInfo, closure$rounds));
      return Unit;
    };
  }
  LevelInfo.prototype.showStatus_vux9f0$ = function (levelNumber, rounds) {
    var tmp$;
    tmp$ = filterNotNull(listOf([document.getElementById(this.levelNumberId), document.getElementById(this.roundsToId)])).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      ensureNotNull(document.getElementById(this.elementId)).removeChild(element);
    }
    append(ensureNotNull(document.getElementById(this.elementId)), LevelInfo$showStatus$lambda(this, levelNumber, rounds));
  };
  LevelInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LevelInfo',
    interfaces: []
  };
  function TwoDArray(rows, cols, values) {
    this.rows = rows;
    this.cols = cols;
    this.array_0 = emptyList();
    var tmp$;
    if (!(this.cols > 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(this.rows > 0)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    if (!(values.length === Kotlin.imul(this.cols, this.rows))) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_1.toString());
    }
    var arr = ArrayList_init(this.rows);
    tmp$ = this.rows;
    for (var i = 0; i <= tmp$; i++) {
      arr.set_wxm5ur$(i, slice(values, new IntRange(Kotlin.imul(i, this.cols), Kotlin.imul(i + 1 | 0, this.cols))));
    }
    this.array_0 = arr;
  }
  TwoDArray.prototype.get_vux9f0$ = function (row, col) {
    return this.array_0.get_za3lpa$(row).get_za3lpa$(col);
  };
  TwoDArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TwoDArray',
    interfaces: []
  };
  function twoDArray(rows, cols, values) {
    if (!(cols > 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(rows > 0)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    if (!(values.length === Kotlin.imul(cols, rows))) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_1.toString());
    }
    return chunked(asIterable_0(values), cols);
  }
  function twoDMutableArray(rows, cols, values) {
    if (!(cols > 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(rows > 0)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    if (!(values.length === Kotlin.imul(cols, rows))) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_1.toString());
    }
    var arr = ArrayList_init(rows);
    for (var i = 0; i <= rows; i++) {
      arr.set_wxm5ur$(i, toMutableList(slice(values, new IntRange(Kotlin.imul(i, cols), Kotlin.imul(i + 1 | 0, cols) - 1 | 0))));
    }
    return arr;
  }
  Object.defineProperty(_, 'Constants', {
    get: Constants_getInstance
  });
  Object.defineProperty(_, 'CommonUIConstants', {
    get: CommonUIConstants_getInstance
  });
  _.GameCard = GameCard;
  _.CardMove = CardMove;
  _.ShuffleResult = ShuffleResult;
  _.GameRound = GameRound;
  _.GameLevel = GameLevel;
  _.ShufflesState = ShufflesState;
  _.CellsField = CellsField;
  _.GameLevelConditions = GameLevelConditions;
  _.CurrentLevelGamerStatus = CurrentLevelGamerStatus;
  _.nextLevelReached_eqvq3d$ = nextLevelReached;
  _.mustDecreaseLevel_eqvq3d$ = mustDecreaseLevel;
  _.nextLevelIfAny_8b2qv6$ = nextLevelIfAny;
  _.getWithId_2bo9eg$ = getWithId;
  _.symbolsForRound_za3lpa$ = symbolsForRound;
  _.spreadSymbols_xti7rs$ = spreadSymbols;
  _.getPlayableCells_qt1dr2$ = getPlayableCells;
  _.shuffle_ls2sr0$ = shuffle;
  _.chooseCardsToInterchange_ls2sr0$ = chooseCardsToInterchange;
  _.othersToShuffle_wgs070$ = othersToShuffle;
  _.shufflesForRound_jgfw5h$ = shufflesForRound;
  _.toCardMoves_4548ij$ = toCardMoves;
  _.runShuffles_66ay4m$ = runShuffles;
  _.runRound_1e007l$ = runRound;
  _.runQuest_tn6nek$ = runQuest;
  _.runLevel_27ha65$ = runLevel;
  _.runLevels_j5ijxy$ = runLevels;
  _.newDiv_iw61es$ = newDiv;
  _.newInput_uzezr1$ = newInput;
  _.newElement_3m972o$ = newElement;
  _.withChildren_hycd3w$ = withChildren;
  _.launch_g2bo5h$ = launch_0;
  _.await_t11jrl$ = await_0;
  _.loadResource_61zpoe$ = loadResource;
  _.getRequest_61zpoe$ = getRequest;
  _.main_kand9s$ = main;
  _.PlatformRandom = PlatformRandom;
  _.randomChoose_bemo1h$ = randomChoose;
  _.randomChoose_v81hsd$ = randomChoose_0;
  _.randomChooseWithIndexes_v81hsd$ = randomChooseWithIndexes;
  _.UICard = UICard;
  _.moveUICard_ds0quv$ = moveUICard;
  _.updateCardsScale_5xspzt$ = updateCardsScale;
  _.showCards_5xspzt$ = showCards;
  _.hideCards_5xspzt$ = hideCards;
  _.scale_puj7f4$ = scale;
  _.scale1toNormal_puj7f4$ = scale1toNormal;
  _.scale2toNormal_puj7f4$ = scale2toNormal;
  _.removeUIElementWithId_61zpoe$ = removeUIElementWithId;
  _.cellsToCards_5iir4p$ = cellsToCards;
  _.moveUICards_h09i1j$ = moveUICards;
  _.getUICard_sndbip$ = getUICard;
  _.getGameCard_y2llyf$ = getGameCard;
  _.Quest = Quest;
  _.LevelInfo = LevelInfo;
  _.TwoDArray = TwoDArray;
  _.twoDArray_xv94kn$ = twoDArray;
  _.twoDMutableArray_xv94kn$ = twoDMutableArray;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin, this['kotlinx-coroutines-core'], this['kotlinx-html-js']);

//# sourceMappingURL=app.js.map
