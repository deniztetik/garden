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
	  _axios2.default.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=ps4&key=AIzaSyCiN2R4jOi-L0n4kkwwC6SHAR-LGjC5jPQ").then(function (response) {
	    console.log(resonse);
	  }).catch(function (err) {
	    console.log(err);
	  });
	});
	
	exports.default = store;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmUuanM/ZjM5YyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzb25zZSIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBTUEsYUFBYSxrREFBdUIsNEJBQXZCLENBQW5COztBQUVBLEtBQU1DLFFBQVEsNENBQXNCRCxVQUF0QixDQUFkOztBQUVBQyxPQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFdBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkgsTUFBTUksUUFBTixFQUE5QjtBQUNELEVBRkQ7O0FBSUE7QUFDQTtBQUNBOztBQUVBSixPQUFNSyxRQUFOLENBQWUsVUFBQ0EsUUFBRCxFQUFjO0FBQzNCQSxZQUFTLEVBQUNDLE1BQU0sYUFBUCxFQUFzQkMsU0FBUyxRQUEvQixFQUFUO0FBQ0FGLFlBQVMsRUFBQ0MsTUFBTSxpQkFBUCxFQUEwQkMsU0FBUyxNQUFuQyxFQUFUO0FBQ0EsbUJBQU1DLEdBQU4sQ0FBVSw2R0FBVixFQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCUixhQUFRQyxHQUFSLENBQVlRLE9BQVo7QUFDRCxJQUhILEVBSUdDLEtBSkgsQ0FJUyxVQUFDQyxHQUFELEVBQVM7QUFDZFgsYUFBUUMsR0FBUixDQUFZVSxHQUFaO0FBQ0QsSUFOSDtBQU9ELEVBVkQ7O21CQWVlYixLIiwiZmlsZSI6IjAuZWRjMDhiYmVlN2JkNDY0MjMyNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXJzL3JlZHVjZXJzXCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbi8vIGxvZ2dlciBtb2RpZmllcyB0aGUgYWN0aW9ucy5cbi8vIGNvbnN0IGxvZ2dlciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJhY3Rpb24gZmlyZWRcIik7XG4vLyAgIG5leHQoYWN0aW9uKTtcbi8vIH07XG4vLyBjb25zdCBlcnJvciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBuZXh0KGFjdGlvbik7XG4vLyAgIH0gY2F0Y2goZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfVxuLy8gfTtcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZSh0aHVuaywgbG9nZ2VyKCkpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBtaWRkbGV3YXJlKTtcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ3N0b3JlIGNoYW5nZWQgJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG59KTtcblxuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX05BTUVcIiwgcGF5bG9hZDogXCJKaW1cIn0pO1xuLy8gc3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwiSklNQk9ORVwifSk7XG4vLyBzdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEFOR0VfUEFTU1dPUkRcIiwgcGF5bG9hZDogXCJDSEFOR0VEIElUXCJ9KTtcblxuc3RvcmUuZGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHt0eXBlOiBcIkNIQU5HRV9OQU1FXCIsIHBheWxvYWQ6IFwiamltYm90XCJ9KTtcbiAgZGlzcGF0Y2goe3R5cGU6IFwiQ0hBTkdFX1BBU1NXT1JEXCIsIHBheWxvYWQ6IFwicGFzc1wifSk7XG4gIGF4aW9zLmdldChcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoP3BhcnQ9c25pcHBldCZxPXBzNCZrZXk9QUl6YVN5Q2lOMlI0ak9pLUwwbjRra3d3QzZTSEFSLUxHakM1alBRXCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNvbnNlKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufSk7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9