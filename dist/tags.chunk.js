webpackJsonp([3],{

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Cell = __webpack_require__(296);

	var _Cell2 = _interopRequireDefault(_Cell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CellView = function (_Component) {
		_inherits(CellView, _Component);

		function CellView() {
			_classCallCheck(this, CellView);

			return _possibleConstructorReturn(this, (CellView.__proto__ || Object.getPrototypeOf(CellView)).apply(this, arguments));
		}

		_createClass(CellView, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						{ className: 'category' },
						this.props.title
					),
					_react2.default.createElement(
						'ul',
						null,
						this.props.items.map(function (item, index) {
							return _react2.default.createElement(_Cell2.default, _extends({}, item, { key: index }));
						})
					)
				);
			}
		}]);

		return CellView;
	}(_react.Component);

	exports.default = CellView;
	;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cell = function (_Component) {
		_inherits(Cell, _Component);

		function Cell() {
			_classCallCheck(this, Cell);

			return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
		}

		_createClass(Cell, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"li",
					{ className: "list-post" },
					_react2.default.createElement(
						"a",
						{ href: "#post/" + this.props.number },
						this.props.title
					),
					_react2.default.createElement(
						"span",
						{ className: "date" },
						this.props.created_at.substr(0, 10)
					)
				);
			}
		}]);

		return Cell;
	}(_react.Component);

	exports.default = Cell;
	;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(184);

	var _index = __webpack_require__(291);

	var _CellView = __webpack_require__(295);

	var _CellView2 = _interopRequireDefault(_CellView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tags = function (_Component) {
		_inherits(Tags, _Component);

		function Tags(props) {
			_classCallCheck(this, Tags);

			return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));
		}

		_createClass(Tags, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var dispatch = this.props.dispatch;

				dispatch((0, _index.fetchIssuesIfNeeded)());
			}
		}, {
			key: 'spliceJSON',
			value: function spliceJSON(items) {
				var list = items,
				    articles = {};

				for (var i = 0; i < list.length; i++) {
					if (!list[i]["labels"].length) {
						if (!articles.hasOwnProperty("其它")) {
							articles["其它"] = [];
						}
						articles["其它"].push(list[i]);
					} else {
						var labels = list[i]["labels"];
						for (var j = 0, labelsLen = labels.length; j < labelsLen; j++) {
							var name = labels[j]["name"];
							if (!articles.hasOwnProperty(name)) {
								articles[name] = [];
							}
							articles[name].push(list[i]);
						}
					}
				}
				return articles;
			}
		}, {
			key: 'render',
			value: function render() {
				if (this.props.isFetching) {
					return null;
				}
				var articles = this.spliceJSON(this.props.items),
				    view = [];

				for (var label in articles) {
					view.push(_react2.default.createElement(_CellView2.default, { key: label, title: label, items: articles[label] }));
				}

				return _react2.default.createElement(
					'div',
					{ className: 'list' },
					view
				);
			}
		}]);

		return Tags;
	}(_react.Component);

	;

	function mapStateToProps(state) {
		if (!state.issuesOpt) {
			return {
				isFetching: true,
				items: []
			};
		}
		return {
			isFetching: state.issuesOpt.isFetching,
			items: state.issuesOpt.items
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Tags);

/***/ })

});