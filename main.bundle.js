webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/modules/ngx-smart-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Custom modules


//Guards

//Services



//Components







function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('token'); }),
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_smart_modal__["a" /* NgxSmartModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'chat',
                    component: __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'register',
                    component: __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */]
                },
                {
                    path: ':username',
                    component: __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: '**',
                    redirectTo: ''
                }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_11__services_content_service__["a" /* ContentService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/appSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_ENDPOINT = 'http://127.0.0.1:3000/api';
//# sourceMappingURL=appSettings.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf='!connected'>\n    <h1 id='title'>/WS - CHAT/</h1>\n    <div class=\"top-bar\">\n        <input [(ngModel)]='username' id=\"username-input\" placeholder=\"  Username\" type=\"text\">\n        <input id=\"connect\" class=\"btn\" type=\"button\" value=\"Connect\" (click)=\"onConnection()\">\n    </div>\n</ng-container>\n\n<ng-container *ngIf='connected'>\n    <h1 id='title'>/WS - CHAT/</h1>\n    <div class=\"chat-container\">\n        <div class=\"chat-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n            <ng-container *ngFor=\"let msg of messages\">\n                <div class=\"message {{msg.username == username ? 'client' : 'server'}}\">\n                    <p>{{ msg.timestamp }} - {{ msg.username }}: {{ msg.message }}</p>\n                </div>\n            </ng-container>\n        </div>\n\n        <div class=\"bar bottom-bar\">\n            <input [(ngModel)]='msg' id=\"message-input\" placeholder=\"  Send message...\" type=\"text\">\n            <input id=\"send\" class=\"btn\" type=\"button\" value=\"Send\" (click)='onSend()'>\n            <input id=\"disconnect\" class=\"btn\" type=\"button\" value=\"Disconnect\" (click)='onClose()'>\n        </div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#title {\n  text-align: center;\n  font-family: sans-serif;\n}\n.chat-container {\n  position: relative;\n  width: 20%;\n  margin: 0 auto;\n  height: 750px;\n  background-color: #fff;\n  border: 5px solid black;\n  overflow: hidden;\n}\n.chat-container input {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n.chat-container input[type=text] {\n  display: inline-block;\n  width: 50%;\n  height: 30px;\n}\n.chat-window {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n}\n.bar {\n  position: fixed;\n  width: 100%;\n  height: 30px;\n  background-color: #696969;\n  border-bottom: 2px solid black;\n}\n.bottom-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border-top: 2px solid black;\n}\n.top-bar {\n  width: 285px;\n  height: 40px;\n  background-color: #34ba1a;\n  margin: 0 auto;\n  padding: 0.5em;\n  border: 2px solid black;\n  border-radius: 8px;\n}\n.top-bar input[type=text] {\n  display: inline-block;\n  height: 30px;\n}\n.top-bar .btn {\n  width: 80px;\n  height: 35px;\n}\n.btn {\n  display: inline-block;\n  width: 23.7%;\n  height: 30px;\n  background-color: #fff;\n}\n.btn:hover {\n  background-color: #eee;\n  cursor: pointer;\n}\n.message {\n  position: relative;\n  background: #00cee6;\n  border-radius: .4em;\n  width: 60%;\n  min-height: 70px;\n  margin: 1em;\n  margin-bottom: 45px;\n}\n.message p {\n  padding: 1em;\n  color: #fff;\n  margin: 0;\n}\n.message:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 23px solid transparent;\n  border-top-color: #00cee6;\n  border-bottom: 0;\n  margin-left: -11.5px;\n  margin-bottom: -23px;\n}\n.client:after {\n  border-left: 0;\n}\n.server:after {\n  border-right: 0;\n  border-top-color: #00e24f;\n}\n.server {\n  margin-left: 130px;\n  background: #00e24f;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__("../../../../../src/app/models/message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent() {
        this.msg = '';
        this.connected = false;
        this.messages = [];
        this.subProtocol = 'json';
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent.prototype.onConnection = function () {
        var _this = this;
        this.webSocket = new WebSocket('ws://localhost:3000', this.subProtocol);
        if (this.webSocket.readyState != 3) {
            this.connected = true;
        }
        this.webSocket.addEventListener('open', function (event) {
            var msg = { username: 'Server', message: 'The websocket is now open.' };
            _this.chatLog(msg);
        });
        this.webSocket.addEventListener('message', function (event) {
            _this.chatLog(JSON.parse(event.data));
        });
        this.webSocket.addEventListener('close', function (event) {
            var msg = { username: 'Server', message: 'The websocket is now closed.' };
            _this.chatLog(msg);
        });
        this.webSocket.addEventListener('error', function (event) {
            var msg = { username: 'Server', message: 'An error occured...' };
            _this.chatLog(msg);
        });
    };
    ChatComponent.prototype.chatLog = function (res) {
        var timestamp = new Date().toLocaleTimeString();
        var msg = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */](timestamp, res.username, res.message);
        this.messages.push(msg);
    };
    ChatComponent.prototype.onSend = function () {
        if (!this.webSocket || this.webSocket.readyState === 3) {
            console.log('The websocket is not connected to a server');
        }
        else {
            this.webSocket.send(JSON.stringify({
                username: this.username,
                message: this.msg
            }));
            var msg = { username: this.username, message: this.msg };
            this.chatLog(msg);
        }
    };
    ChatComponent.prototype.onClose = function () {
        this.webSocket.close();
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.less")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"main-container\">\n    <div class=\"post-container\" *ngFor='let img of postUrls'>\n        <div class=\"post-header\">\n            <a routerLink=\"/{{img.data.username}}\">{{img.data.username}}</a>\n            <p>{{img.data.description}}</p>\n            <span>{{img.data.date | slice:0:10}} </span>\n            <span>{{img.data.date | slice:11:16}} </span>\n        </div>\n        <img [src]=\"img.url\">\n    </div>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  width: 600px;\n  max-width: 600px;\n  display: block;\n}\n.main-container .post-container {\n  border: 1px solid rgba(0, 0, 0, 0.0975);\n  border-bottom: none;\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.main-container .post-container img {\n  max-width: 100%;\n  width: 100%;\n  display: block;\n}\n.main-container .post-container .post-header {\n  padding: 1em;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);\n}\n.main-container .post-container .post-header a {\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: capitalize;\n  text-decoration: none;\n  color: #000;\n}\n.main-container .post-container .post-header a:link,\n.main-container .post-container .post-header a:visited,\n.main-container .post-container .post-header a:hover,\n.main-container .post-container .post-header a:active {\n  color: #000;\n}\n.main-container .post-container .post-header p {\n  font-family: \"Open Sans\", sans-serif;\n  display: block;\n  font-style: italic;\n  font-weight: 300;\n  margin: 0.5em 0 0 0;\n}\n.main-container .post-container .post-header span {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 100;\n  font-size: 0.7em;\n}\n@media (min-width: 1px) and (max-width: 767px) {\n  .main-container {\n    width: 100%;\n  }\n  .main-container .post-container {\n    margin-bottom: 10px;\n    width: 100%;\n  }\n}\n@media (min-width: 768px) and (max-width: 1065px) {\n  .main-container {\n    width: 100%;\n  }\n  .main-container .post-container {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n@media (min-width: 992px) and (max-width 1199px) {\n  .main-container {\n    width: 100%;\n  }\n  .main-container .post-container {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(authService, userService, contentService, sanitizer) {
        this.authService = authService;
        this.userService = userService;
        this.contentService = contentService;
        this.sanitizer = sanitizer;
        this.postUrls = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    HomeComponent.prototype.getPosts = function () {
        var _this = this;
        this.userService.getPostsFromFollowing(this.authService.getUsername())
            .then(function (res) {
            _this.getPostsImage(res);
        })
            .catch(function (err) { return console.log(err); });
    };
    HomeComponent.prototype.sortPostUrls = function () {
        this.postUrls.sort(function (a, b) {
            var d1 = Date.parse(a['data'].date);
            var d2 = Date.parse(b['data'].date);
            if (d1 > d2)
                return -1;
            else if (d1 < d2)
                return 1;
            else
                return 0;
        });
    };
    HomeComponent.prototype.getPostsImage = function (posts) {
        var _this = this;
        for (var key in posts) {
            var user = posts[key];
            //When only one image is present we cant use foreach because the entry is an an Object and not an array.
            if (user.constructor === Array) {
                for (var post in user) {
                    var obj = user[post];
                    this.contentService.getPostsImage(obj['img'])
                        .then((function (obj, blob) {
                        var urlCreator = window.URL;
                        _this.postUrls.push({
                            url: _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob)),
                            data: obj
                        });
                        _this.sortPostUrls();
                    })
                        .bind(this, obj))
                        .catch(function (err) { return console.log(err); });
                }
            }
            else {
                this.contentService.getPostsImage(user['img'])
                    .then((function (user, blob) {
                    var urlCreator = window.URL;
                    _this.postUrls.push({
                        url: _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob)),
                        data: user
                    });
                    _this.sortPostUrls();
                })
                    .bind(this, user))
                    .catch(function (err) { return console.log(err); });
            }
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_content_service__["a" /* ContentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-img\">\n    <div class=\"container\">\n        <div class=\"login-box\">\n            <p>Scenery</p>\n            <form #loginForm=\"ngForm\">\n\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"credentials.username\" name=\"username\" type=\"text\" placeholder=\"Username\" class=\"form-control\" id=\"username\" required #usernameTemp=\"ngModel\">\n                <div [hidden]=\"usernameTemp.valid || usernameTemp.pristine\" class=\"alert alert-danger\"> - Username is required </div>\n              </div>\n\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"credentials.password\" name=\"password\" type=\"password\" placeholder=\"Password\" class=\"form-control\" id=\"password\" required #passwordTemp=\"ngModel\">\n                <div [hidden]=\"passwordTemp.valid || passwordTemp.pristine\" class=\"alert alert-danger\"> - Password is required </div>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-success\" (click)=\"authenticate(); loginForm.reset()\" [disabled]=\"!loginForm.form.valid\">Login</button>\n              <a class=\"routerLink\" routerLink=\"/register\"> Not registered? Click here to sign up!</a>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-img {\n  background: url(" + __webpack_require__("../../../../../src/assets/img/mountains.jpg") + ");\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.container {\n  width: 30%;\n  background: rgba(0, 0, 0, 0.7);\n  margin: 0 auto;\n  border-radius: 4px;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.login-box {\n  padding: 1em 2em 1em 2em;\n}\n.login-box input:focus {\n  outline: none;\n}\n.login-box p {\n  text-align: center;\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  margin: 10px;\n  font-size: 40px;\n}\n.login-box .form-control {\n  width: 100%;\n  padding: 16px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.login-box .btn {\n  width: 100%;\n  padding: 16px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #DE625F;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n}\n.login-box .btn:disabled {\n  background-color: #964C4A;\n  cursor: default;\n}\n.login-box .alert {\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff;\n}\n/* Landscape phones and down */\n@media (max-width: 480px) {\n  .container {\n    width: 80%;\n  }\n}\n/* Landscape phone to portrait tablet */\n@media (max-width: 767px) {\n  .container {\n    width: 65%;\n  }\n}\n/* Portrait tablet to landscape and desktop */\n@media (min-width: 768px) and (max-width: 979px) {\n  .container {\n    width: 65%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router, authService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.credentials = {};
    }
    LoginComponent.prototype.authenticate = function () {
        var _this = this;
        this.userService.authenticate(this.credentials)
            .then(function (res) {
            console.log("Login successful.");
            _this.router.navigate(['']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(timestamp, username, message) {
        this.timestamp = timestamp;
        this.username = username;
        this.message = message;
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav role=\"navigation\" class=\"navbar\">\n        <div class=\"left-side\">\n            <a routerLink=\"\" class=\"logo\">Scenery</a>\n        </div>\n        <div class=\"right-side\">\n            <div class=\"dropdown\">\n                <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n                <div class=\"dropdown-content\">\n                    <p (click)=\"logOut()\">Log out</p>\n                </div>\n            </div>\n            <a routerLink=\"/{{currentUser.username}}\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n            <input type=\"text\" class=\"search\" placeholder=\"&#xf002; Search\"/>\n        </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: 60px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: #fff;\n}\n.container .navbar {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  width: 70%;\n  margin: 0 auto;\n}\n.container .navbar a,\n.container .navbar .dropdown {\n  display: block;\n  text-align: center;\n  margin: 18px 6px;\n}\n.container .navbar .right-side a,\n.container .navbar .right-side input,\n.container .navbar .right-side i,\n.container .navbar .right-side .dropdown {\n  float: right;\n}\n.container .navbar .right-side i {\n  font-size: 1.5em;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .navbar .right-side .search {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  margin: 18px 16px;\n  font-size: 1em;\n  font-family: \"Open Sans\", FontAwesome, sans-serif;\n  font-weight: 100;\n  color: rgba(0, 0, 0, 0.8);\n}\n.container .navbar .right-side .search::-webkit-input-placeholder {\n  font-size: 0.7em;\n  font-weight: 300;\n  padding-left: 5px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.container .navbar .right-side .search:-ms-input-placeholder {\n  font-size: 0.7em;\n  font-weight: 300;\n  padding-left: 5px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.container .navbar .right-side .search::placeholder {\n  font-size: 0.7em;\n  font-weight: 300;\n  padding-left: 5px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.container .navbar .right-side .dropdown-content {\n  position: absolute;\n  top: 50px;\n  margin-right: 50px;\n  display: none;\n  max-width: 150px;\n  background-color: #f9f9f9;\n  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.2);\n}\n.container .navbar .right-side .dropdown-content p {\n  display: block;\n  cursor: pointer;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 15px;\n  padding: 0 1em 0 1em;\n}\n.container .navbar .right-side .dropdown:hover .dropdown-content {\n  display: block;\n}\n.container .navbar .left-side a {\n  float: left;\n}\n.container .navbar .left-side .logo {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 2em;\n  font-family: \"Damion\", cursive, sans-serif;\n  margin: 6px 6px;\n}\n@media (min-width: 1px) and (max-width: 480px) {\n  .container .navbar {\n    width: 100%;\n    margin: 0;\n  }\n  .container .navbar .right-side {\n    float: left;\n  }\n  .container .navbar .right-side .search {\n    display: none;\n  }\n}\n/* Landscape phones and down */\n@media (min-width: 480px) and (max-width: 767px) {\n  .container .navbar {\n    width: 100%;\n    margin: 0;\n  }\n  .container .navbar .right-side {\n    float: left;\n  }\n}\n/* Landscape phone to portrait tablet */\n@media (min-width: 768px) and (max-width: 1065px) {\n  .container .navbar {\n    width: 100%;\n    margin: 0;\n  }\n  .container .navbar .right-side {\n    float: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getCurrentUser();
    };
    NavbarComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.router.navigate(['login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main-container\">\n    <ng-container *ngIf=\"user\">\n        <div class=\"profile-header\">\n            <img *ngIf='avatarUrl' [src]='avatarUrl'>\n            <div class=\"profile-info\">\n                <h1>{{user.username}}</h1>\n                <p>{{user.email}}</p>\n                <p></p>\n                <p>Followers: {{user.followers_number}}</p>\n                <p>Following: {{user.following_number}}</p>\n            </div>\n            <ng-container *ngIf=\"!verifyOwnProfile()\">\n                <button class=\"btn\" *ngIf=\"!isFollowed(user)\" (click)=\"follow(user.username)\">Follow</button>\n                <button class=\"btn\" *ngIf=\"isFollowed(user)\" (click)=\"unfollow(user.username)\">Unfollow</button>\n            </ng-container>\n\n\n            <div class=\"upload-btn-container\">\n                <!-- Upload Image -->\n                <ng-container *ngIf=\"verifyOwnProfile()\">\n                    <label for=\"image-upload\" class=\"custom-file-upload\">\n                        <i class=\"fa fa-cloud-upload\"></i> <span>Upload Image</span>\n                    </label>\n                    <input id=\"image-upload\" type=\"file\" (change)=\"postChange($event)\" placeholder=\"Upload Post\" accept=\".png,.jpg\" name=\"post\">\n\n                <!-- Change Avatar -->\n                    <label for=\"avatar-upload\" class=\"custom-file-upload\">\n                        <i class=\"fa fa-cloud-upload\"></i> <span>Change Avatar</span>\n                    </label>\n                    <input id=\"avatar-upload\" type=\"file\" (change)=\"avatarChange($event)\" placeholder=\"Upload Avatar\" accept=\".png,.jpg\" name=\"avatar\">\n                </ng-container>\n            </div>\n\n        </div>\n        <div class=\"gallery\">\n            <div class=\"flex-image\" *ngFor='let img of postUrls'>\n                <a (click)=\"injectDataIntoModal(img); imgModal.open()\"> <img *ngIf=\"img\" [src]='img.url'> </a>\n            </div>\n        </div>\n\n        <div class=\"custom-modal\">\n            <!-- Modal -->\n            <ngx-smart-modal #imgModal [identifier]=\"'imgModal'\" [closable]=\"false\">\n                <div *ngIf=\"imgModal.hasData()\">\n                    <img class='small-avatar' *ngIf='avatarUrl' [src]='avatarUrl'>\n                    <p>{{imgModal.getData().data.username}}</p>\n                     -\n                    <p>Created: {{imgModal.getData().data.date}}</p>\n                    <ng-container *ngIf=\"verifyOwnProfile()\">\n                        <label (click)='deletePost(imgModal.getData().data._id); imgModal.close()' class=\"custom-file-upload\">\n                            <i class=\"fa fa-trash\"></i> <span>Delete Post</span>\n                        </label>\n                    </ng-container>\n                    <p class=\"desc\">{{imgModal.getData().data.description}}</p>\n                    <img class=\"modal-image\" [src]='imgModal.getData().url'>\n                </div>\n            </ngx-smart-modal>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"showErrRoute\">\n        <h1 class=\"errRoute\">404 - User not found </h1>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.main-container .gallery {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 1em;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n.main-container .gallery .flex-image {\n  max-width: 280px;\n  max-height: 280px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: calc(33.33333333vw);\n  cursor: pointer;\n}\n.main-container .gallery .flex-image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n}\n.main-container .profile-header {\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  max-width: 150px;\n  padding-left: 10px;\n}\n.main-container .profile-header input[type=\"file\"] {\n  display: none;\n}\n.main-container .profile-header .btn {\n  width: 100%;\n  max-width: 150px;\n  padding: 4px 6px;\n  margin: 4px 0;\n  display: inline-block;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #3897f0;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n}\n.main-container .profile-header .custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 4px 6px;\n  cursor: pointer;\n  width: 100%;\n}\n.main-container .profile-header .custom-file-upload span {\n  font-size: 13px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.main-container .profile-header img {\n  max-width: 150px;\n  max-height: 150px;\n  width: 150px;\n  border-radius: 4px;\n}\n.main-container .profile-header h1 {\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.main-container .profile-header p {\n  margin: 0;\n  padding-bottom: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 100;\n}\n.main-container .custom-modal ngx-smart-modal {\n  display: inline-block;\n  max-width: 100%;\n}\n.main-container .custom-modal ngx-smart-modal .custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 4px 6px;\n  cursor: pointer;\n  width: 20%;\n}\n.main-container .custom-modal ngx-smart-modal .custom-file-upload span {\n  font-size: 13px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.main-container .custom-modal ngx-smart-modal .small-avatar {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  vertical-align: middle;\n  padding-bottom: 8px;\n}\n.main-container .custom-modal ngx-smart-modal p {\n  display: inline-block;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n  text-transform: capitalize;\n  padding-left: 8px;\n}\n.main-container .custom-modal ngx-smart-modal .desc {\n  display: block;\n  font-style: italic;\n  font-weight: 300;\n}\n.main-container .custom-modal ngx-smart-modal .modal-image {\n  width: 100%;\n}\n.main-container .errRoute {\n  margin: 0 auto;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n@media (min-width: 1px) and (max-width: 767px) {\n  .main-container {\n    display: block;\n  }\n  .main-container .profile-header {\n    padding-left: 3px;\n    display: inline-block;\n    max-width: 100%;\n  }\n  .main-container .profile-header .upload-btn-container {\n    display: block;\n    padding: 0.5em 0.5em 0.5em 0;\n  }\n  .main-container .profile-header .upload-btn-container .custom-file-upload {\n    display: inline-block;\n    width: 120px;\n  }\n  .main-container .profile-header .profile-info,\n  .main-container .profile-header img {\n    display: inline-block;\n  }\n  .main-container .gallery {\n    padding-left: 0;\n  }\n  .main-container .gallery .flex-image {\n    margin-left: 3px;\n    margin-bottom: 3px;\n    max-width: calc(30.76923077vw);\n    max-height: calc(30.76923077vw);\n  }\n}\n@media (min-width: 768px) and (max-width: 1065px) {\n  .main-container {\n    display: block;\n  }\n  .main-container .profile-header {\n    padding-left: 3px;\n    display: inline-block;\n    max-width: 100%;\n  }\n  .main-container .profile-header .upload-btn-container {\n    padding: 0.5em 0.5em 0.5em 0;\n    display: block;\n  }\n  .main-container .profile-header .upload-btn-container .custom-file-upload {\n    display: inline-block;\n    width: 120px;\n  }\n  .main-container .profile-header .profile-info,\n  .main-container .profile-header img {\n    display: inline-block;\n  }\n  .main-container .gallery {\n    padding-left: 0;\n  }\n  .main-container .gallery .flex-image {\n    margin-left: 3px;\n    margin-bottom: 3px;\n    max-width: calc(32.25806452vw);\n    max-height: calc(32.25806452vw);\n  }\n}\n@media (min-width: 992px) and (max-width 1199px) {\n  .main-container .profile-header {\n    padding-left: 10px;\n  }\n  .main-container .gallery .flex-image {\n    max-width: calc(33.33333333vw);\n    max-height: calc(33.33333333vw);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/modules/ngx-smart-modal.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(userService, route, contentService, sanitizer, authService, ngxSmartModalService) {
        this.userService = userService;
        this.route = route;
        this.contentService = contentService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.showErrRoute = false;
        this.postUrls = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.getUser();
            _this.getPosts();
            _this.verifyOwnProfile();
        });
    };
    ProfileComponent.prototype.sortPostUrls = function () {
        this.postUrls.sort(function (a, b) {
            var d1 = Date.parse(a['data'].date);
            var d2 = Date.parse(b['data'].date);
            if (d1 > d2)
                return -1;
            else if (d1 < d2)
                return 1;
            else
                return 0;
        });
    };
    ProfileComponent.prototype.injectDataIntoModal = function (obj) {
        obj['data']['date'] = obj['data']['date'].substring(0, 10);
        this.ngxSmartModalService.setModalData(obj, 'imgModal', true);
    };
    ProfileComponent.prototype.isFollowed = function (user) {
        return (user['followers'].indexOf(this.authService.getUsername()) > -1);
    };
    ProfileComponent.prototype.unfollow = function (username) {
        var _this = this;
        this.userService.unfollow(username)
            .then(function (res) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.follow = function (username) {
        var _this = this;
        this.userService.follow(username)
            .then(function (res) { return _this.getUser(); })
            .catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.contentService.deletePost(id)
            .then(function (res) {
            _this.getPosts();
        })
            .catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.verifyOwnProfile = function () {
        if (this.authService.getUsername() == this.route.snapshot.paramMap.get('username')) {
            return true;
        }
    };
    ProfileComponent.prototype.getAvatar = function (filePath) {
        var _this = this;
        this.contentService.getAvatar(filePath)
            .then(function (blob) {
            var urlCreator = window.URL;
            _this.avatarUrl = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
        })
            .catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.getPostsImage = function (posts) {
        var _this = this;
        this.postUrls = [];
        for (var key in posts) {
            var obj = posts[key];
            this.contentService.getPostsImage(obj['img'])
                .then((function (obj, blob) {
                var urlCreator = window.URL;
                _this.postUrls.push({
                    url: _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob)),
                    data: obj
                });
                _this.sortPostUrls();
            })
                .bind(this, obj))
                .catch(function (err) { return console.log(err); });
        }
    };
    ProfileComponent.prototype.avatarChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.contentService.uploadAvatar(fileList)
                .then(function (res) {
                console.log("Upload successful.");
                _this.getUser();
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    ProfileComponent.prototype.postChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.contentService.uploadPost(fileList, "My desc")
                .then(function (res) {
                console.log("Upload successful.");
                _this.getPosts();
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    ProfileComponent.prototype.getPosts = function () {
        var _this = this;
        var username = this.route.snapshot.paramMap.get('username');
        this.userService.getPosts(username)
            .then(function (res) {
            _this.userPosts = res;
            _this.getPostsImage(_this.userPosts);
        })
            .catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.user = null;
        this.showErrRoute = false;
        this.avatarUrl = null;
        var username = this.route.snapshot.paramMap.get('username');
        this.userService.getUser(username)
            .then(function (res) {
            _this.user = res;
            if (_this.user['img']) {
                _this.getAvatar(_this.user['img']);
            }
        })
            .catch(function (err) {
            _this.showErrRoute = true;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_content_service__["a" /* ContentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_smart_modal__["b" /* NgxSmartModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_smart_modal__["b" /* NgxSmartModalService */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-img\">\n    <div class=\"container\">\n        <div class=\"register-box\">\n            <p>Register For Scenery</p>\n            <form #userForm=\"ngForm\">\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"user.email\"\n                       name=\"email\"\n                       type=\"email\"\n                       class=\"form-control\"\n                       id=\"email\"\n                       required\n                       #emailTemp=\"ngModel\"\n                       placeholder=\"Email\"\n                       pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                <div [hidden]=\"emailTemp.valid || emailTemp.pristine\"\n                    class=\"alert alert-danger\">\n                    <div  *ngIf=\"emailTemp.errors && emailTemp.errors.pattern\">\n                        Email is invalid\n                    </div>\n                 </div>\n              </div>\n\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"user.username\" name=\"username\" type=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required #usernameTemp=\"ngModel\">\n                <div [hidden]=\"usernameTemp.valid || usernameTemp.pristine\"\n                    class=\"alert alert-danger\">\n                    Username is required\n                 </div>\n              </div>\n\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required #passwordTemp=\"ngModel\">\n                <div [hidden]=\"passwordTemp.valid || passwordTemp.pristine\"\n                    class=\"alert alert-danger\">\n                    Password is required\n                 </div>\n              </div>\n\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"user.confPassword\" name=\"confPassword\" type=\"password\" class=\"form-control\" id=\"confPassword\" placeholder=\"Confirm Password\" required #confPasswordTemp=\"ngModel\">\n                <div [hidden]=\"confPasswordTemp.valid || confPasswordTemp.pristine\"\n                    class=\"alert alert-danger\">\n                    Confirmation for password is required\n                 </div>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-success\" (click)=\"createUser(); userForm.reset()\" [disabled]=\"!userForm.form.valid\">Register</button>\n              <a class=\"routerLink\" routerLink=\"/login\"> Already registered? Click here to log in!</a>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-img {\n  background: url(" + __webpack_require__("../../../../../src/assets/img/mountains.jpg") + ");\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.container {\n  width: 30%;\n  background: rgba(0, 0, 0, 0.7);\n  margin: 0 auto;\n  border-radius: 4px;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.register-box {\n  padding: 1em 2em 1em 2em;\n}\n.register-box input:focus {\n  outline: none;\n}\n.register-box p {\n  text-align: center;\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  margin: 10px;\n  font-size: 40px;\n}\n.register-box .form-control {\n  width: 100%;\n  padding: 16px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.register-box .btn {\n  width: 100%;\n  padding: 16px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #DE625F;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n}\n.register-box .btn:disabled {\n  background-color: #964C4A;\n  cursor: default;\n}\n.register-box .alert {\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff;\n}\n/* Landscape phones and down */\n@media (max-width: 480px) {\n  .container {\n    width: 80%;\n  }\n}\n/* Landscape phone to portrait tablet */\n@media (max-width: 767px) {\n  .container {\n    width: 65%;\n  }\n}\n/* Portrait tablet to landscape and desktop */\n@media (min-width: 768px) and (max-width: 979px) {\n  .container {\n    width: 65%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router, authService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.user = {};
    }
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        this.userService.createUser(this.user)
            .then(function (res) {
            console.log("Create user successful.");
            _this.router.navigate(['login']);
        })
            .catch(function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['']);
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService() {
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])("token");
    };
    AuthService.prototype.getFollowers = function () {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).followers;
        }
        else {
            return [];
        }
    };
    AuthService.prototype.getFollowing = function () {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).following;
        }
        else {
            return [];
        }
    };
    AuthService.prototype.getCurrentUser = function () {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token"));
        }
        else {
            return "";
        }
    };
    AuthService.prototype.getId = function () {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).id;
        }
        else {
            return "";
        }
    };
    AuthService.prototype.getUsername = function () {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).username;
        }
        else {
            return "";
        }
    };
    AuthService.prototype.getEmail = function () {
        if (this.loggedIn()) {
            return this.jwtHelper.decodeToken(localStorage.getItem("token")).email;
        }
        else {
            return "";
        }
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('token');
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContentService = (function () {
    function ContentService(authHttp, http, authService) {
        this.authHttp = authHttp;
        this.http = http;
        this.authService = authService;
    }
    ContentService.prototype.getAvatar = function (imgPath) {
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + ("/content/" + imgPath), { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseContentType"].Blob })
            .toPromise()
            .then(function (response) { return response.blob(); })
            .catch(this.handleError);
    };
    ContentService.prototype.getPostsImage = function (imgPath) {
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + ("/content/" + imgPath), { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["ResponseContentType"].Blob })
            .toPromise()
            .then(function (response) { return response.blob(); })
            .catch(this.handleError);
    };
    ContentService.prototype.deletePost = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.append('id', this.authService.getId());
        return this.authHttp.post(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + ("/posts/" + id), params)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContentService.prototype.uploadAvatar = function (fileList) {
        var file = fileList[0];
        var formData = new FormData();
        formData.append('avatar', file, file.name);
        formData.append('username', this.authService.getUsername());
        formData.append('id', this.authService.getId());
        return this.authHttp.patch(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + '/upload/avatar', formData)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContentService.prototype.uploadPost = function (fileList, desc) {
        var file = fileList[0];
        var formData = new FormData();
        formData.append('post', file, file.name);
        formData.append('username', this.authService.getUsername());
        formData.append('description', desc);
        formData.append('id', this.authService.getId());
        return this.authHttp.post(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + '/upload/post', formData)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContentService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ContentService;
}());
ContentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ContentService);

var _a, _b, _c;
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appSettings__ = __webpack_require__("../../../../../src/app/appSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(authHttp, http, authService) {
        this.authHttp = authHttp;
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.getUser = function (username) {
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + ("/users/" + username))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getPosts = function (username) {
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + ("/posts/" + username))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getPostsFromFollowing = function (username) {
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + ("/posts/following/" + username))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.follow = function (username) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.append('username', username);
        params.append('id', this.authService.getId());
        return this.authHttp.put(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + '/follow', params)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.unfollow = function (username) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.append('username', username);
        params.append('id', this.authService.getId());
        return this.authHttp.put(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + '/unfollow', params)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (user) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.append('email', user["email"]);
        params.append('username', user["username"]);
        params.append('password', user["password"]);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + '/users', params)
            .toPromise()
            .then(function (response) { return console.log(response); })
            .catch(this.handleError);
    };
    UserService.prototype.authenticate = function (credentials) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.append("username", credentials["username"]);
        params.append("password", credentials["password"]);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__appSettings__["a" /* AppSettings */].API_ENDPOINT + '/authenticate', params)
            .toPromise()
            .then(function (response) {
            localStorage.setItem('token', response.json().token);
            console.log("Token stored in localstorage");
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img/mountains.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mountains.95327e56243152eb331c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map