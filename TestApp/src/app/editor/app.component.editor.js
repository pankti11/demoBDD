"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var SharedService_1 = require("../services/SharedService");
var router_1 = require("@angular/router");
var EditorComponent = (function () {
    function EditorComponent(service, router) {
        this.service = service;
        this.router = router;
        this.service = service;
        this.router = router;
        this.recievedData = this.service.getData();
        console.log(this.recievedData);
    }
    return EditorComponent;
}());
EditorComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/editor/app.component.editor.html'
    }),
    __param(0, core_2.Inject(SharedService_1.SharedService)), __param(1, core_2.Inject(router_1.Router)),
    __metadata("design:paramtypes", [SharedService_1.SharedService, router_1.Router])
], EditorComponent);
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=app.component.editor.js.map