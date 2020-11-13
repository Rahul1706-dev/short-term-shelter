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
exports.Listing = void 0;
const typeorm_1 = require("typeorm");
const Booking_1 = require("./Booking");
const User_1 = require("./User");
var ListingType;
(function (ListingType) {
    ListingType["Apartment"] = "APARTMENT";
    ListingType["House"] = "HOUSE";
})(ListingType || (ListingType = {}));
let Listing = class Listing extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Listing.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "image", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.listings),
    typeorm_1.JoinColumn({ name: "host" }),
    __metadata("design:type", User_1.User)
], Listing.prototype, "host", void 0);
__decorate([
    typeorm_1.Column({ type: "enum", nullable: false, enum: ListingType }),
    __metadata("design:type", String)
], Listing.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ type: "text", nullable: false }),
    __metadata("design:type", String)
], Listing.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "country", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "admin", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Listing.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, name: "num_of_guests" }),
    __metadata("design:type", Number)
], Listing.prototype, "numOfGuests", void 0);
__decorate([
    typeorm_1.OneToMany(() => Booking_1.Booking, (booking) => booking.listing),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Listing.prototype, "booking", void 0);
__decorate([
    typeorm_1.Column({ default: new Date() }),
    __metadata("design:type", Date)
], Listing.prototype, "bookingsIndex", void 0);
Listing = __decorate([
    typeorm_1.Entity({ name: "listings" })
], Listing);
exports.Listing = Listing;
//# sourceMappingURL=Listing.js.map