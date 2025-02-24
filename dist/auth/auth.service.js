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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const logs_service_1 = require("../logs/logs.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    usersService;
    jwtService;
    logsService;
    constructor(usersService, jwtService, logsService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.logsService = logsService;
    }
    async validateUser(username, password) {
        const user = await this.usersService.findByUsername(username);
        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(username, password) {
        const user = await this.validateUser(username, password);
        if (!user) {
            await this.logsService.createLog(username, 'Failed login attempt');
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        await this.logsService.createLog(username, 'Successful login');
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        logs_service_1.LogsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map