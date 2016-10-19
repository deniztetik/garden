webpackHotUpdate(0,{

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(101);
	
	var _axios = __webpack_require__(431);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _reduxLogger = __webpack_require__(409);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(178);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reduxThunk = __webpack_require__(423);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// logger modifies the actions.
	// const logger = (store) => (next) => (action) => {
	//   console.log("action fired");
	//   next(action);
	// };
	// const error = (store) => (next) => (action) => {
	//   try {
	//     next(action);
	//   } catch(e) {
	//     console.log(error);
	//   }
	// };
	
	var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)());
	
	var store = (0, _redux.createStore)(_reducers2.default, middleware);
	
	store.subscribe(function () {
	  console.log('store changed ', store.getState());
	});
	
	// store.dispatch({type: "CHANGE_NAME", payload: "Jim"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "JIMBONE"});
	// store.dispatch({type: "CHANGE_PASSWORD", payload: "CHANGED IT"});
	
	store.dispatch(function (dispatch) {
	  dispatch({ type: "CHANGE_NAME", payload: "jimbot" });
	  dispatch({ type: "CHANGE_PASSWORD", payload: "pass" });
	  _axios2.default.get("https://api.yelp.com/v2/search?oauth_consumer_key=UDqRCfPtj6su6jgHbVa2IA&oauth_token=o1em_rR6awlWLUgis5wLh5qaUoYwdJGN&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1476828288&oauth_nonce=K9IKWy&oauth_version=1.0&oauth_signature=J4cJuJKkqh995xGS6+WXXMe2JP4=&oauth_consumer_key=UDqRCfPtj6su6jgHbVa2IA&oauth_token=o1em_rR6awlWLUgis5wLh5qaUoYwdJGN&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1474416935&oauth_nonce=RtWXw1&oauth_version=1.0&oauth_signature=r4oSh6Z6jbpL6bIFM0qOobeD2fA=&term=food&location=sanfrancisco&limit=1&oauth_consumer_key=UDqRCfPtj6su6jgHbVa2IA&oauth_token=o1em_rR6awlWLUgis5wLh5qaUoYwdJGN&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1474416935&oauth_nonce=RtWXw1&oauth_version=1.0&oauth_signature=r4oSh6Z6jbpL6bIFM0qOobeD2fA=").then(function (response) {
	    console.log(resonse);
	  }).catch(function (err) {
	    console.log(err);
	  });
	});
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzb25zZSIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBTUEsYUFBYSxrREFBdUIsNEJBQXZCLENBQW5COztBQUVBLEtBQU1DLFFBQVEsNENBQXNCRCxVQUF0QixDQUFkOztBQUVBQyxPQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFdBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkgsTUFBTUksUUFBTixFQUE5QjtBQUNELEVBRkQ7O0FBSUE7QUFDQTtBQUNBOztBQUVBSixPQUFNSyxRQUFOLENBQWUsVUFBQ0EsUUFBRCxFQUFjO0FBQzNCQSxZQUFTLEVBQUNDLE1BQU0sYUFBUCxFQUFzQkMsU0FBUyxRQUEvQixFQUFUO0FBQ0FGLFlBQVMsRUFBQ0MsTUFBTSxpQkFBUCxFQUEwQkMsU0FBUyxNQUFuQyxFQUFUO0FBQ0EsbUJBQU1DLEdBQU4sQ0FBVSx1dkJBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQlIsYUFBUUMsR0FBUixDQUFZUSxPQUFaO0FBQ0QsSUFISCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RYLGFBQVFDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELElBTkg7QUFPRCxFQVZEOzttQkFlZWIsSyIsImZpbGUiOiIwLjJkYzE3NjMxMGZhMmJhZWM5MGI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vycy9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuXG4vLyBsb2dnZXIgbW9kaWZpZXMgdGhlIGFjdGlvbnMuXG4vLyBjb25zdCBsb2dnZXIgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIGZpcmVkXCIpO1xuLy8gICBuZXh0KGFjdGlvbik7XG4vLyB9O1xuLy8gY29uc3QgZXJyb3IgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgbmV4dChhY3Rpb24pO1xuLy8gICB9IGNhdGNoKGUpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcigpKTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgbWlkZGxld2FyZSk7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzdG9yZSBjaGFuZ2VkICcsIHN0b3JlLmdldFN0YXRlKCkpO1xufSk7XG5cbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiSmltXCJ9KTtcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcIkpJTUJPTkVcIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiQ0hBTkdFRCBJVFwifSk7XG5cbnN0b3JlLmRpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfTkFNRVwiLCBwYXlsb2FkOiBcImppbWJvdFwifSk7XG4gIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9QQVNTV09SRFwiLCBwYXlsb2FkOiBcInBhc3NcIn0pO1xuICBheGlvcy5nZXQoXCJodHRwczovL2FwaS55ZWxwLmNvbS92Mi9zZWFyY2g/b2F1dGhfY29uc3VtZXJfa2V5PVVEcVJDZlB0ajZzdTZqZ0hiVmEySUEmb2F1dGhfdG9rZW49bzFlbV9yUjZhd2xXTFVnaXM1d0xoNXFhVW9Zd2RKR04mb2F1dGhfc2lnbmF0dXJlX21ldGhvZD1ITUFDLVNIQTEmb2F1dGhfdGltZXN0YW1wPTE0NzY4MjgyODgmb2F1dGhfbm9uY2U9SzlJS1d5Jm9hdXRoX3ZlcnNpb249MS4wJm9hdXRoX3NpZ25hdHVyZT1KNGNKdUpLa3FoOTk1eEdTNitXWFhNZTJKUDQ9Jm9hdXRoX2NvbnN1bWVyX2tleT1VRHFSQ2ZQdGo2c3U2amdIYlZhMklBJm9hdXRoX3Rva2VuPW8xZW1fclI2YXdsV0xVZ2lzNXdMaDVxYVVvWXdkSkdOJm9hdXRoX3NpZ25hdHVyZV9tZXRob2Q9SE1BQy1TSEExJm9hdXRoX3RpbWVzdGFtcD0xNDc0NDE2OTM1Jm9hdXRoX25vbmNlPVJ0V1h3MSZvYXV0aF92ZXJzaW9uPTEuMCZvYXV0aF9zaWduYXR1cmU9cjRvU2g2WjZqYnBMNmJJRk0wcU9vYmVEMmZBPSZ0ZXJtPWZvb2QmbG9jYXRpb249c2FuZnJhbmNpc2NvJmxpbWl0PTEmb2F1dGhfY29uc3VtZXJfa2V5PVVEcVJDZlB0ajZzdTZqZ0hiVmEySUEmb2F1dGhfdG9rZW49bzFlbV9yUjZhd2xXTFVnaXM1d0xoNXFhVW9Zd2RKR04mb2F1dGhfc2lnbmF0dXJlX21ldGhvZD1ITUFDLVNIQTEmb2F1dGhfdGltZXN0YW1wPTE0NzQ0MTY5MzUmb2F1dGhfbm9uY2U9UnRXWHcxJm9hdXRoX3ZlcnNpb249MS4wJm9hdXRoX3NpZ25hdHVyZT1yNG9TaDZaNmpicEw2YklGTTBxT29iZUQyZkE9XCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNvbnNlKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufSk7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9