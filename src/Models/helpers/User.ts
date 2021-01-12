// Common types used in models

import {prop} from "@typegoose/typegoose";

export enum UserRole {
    ADMIN = "admin",
    USER = "uzytkownik",
    TEAM = "team",
    JUDGE_PRIMARY = "sedzia_glowny",
    JUDGE_EXERCISE = "sedzia_zadania",
}

export class LoginData {
    @prop({required: true})
    public email!: string

    @prop({required: true})
    public password!: string

    @prop({required: true, enum: UserRole})
    public role!: UserRole
}

export default class User {
    @prop({required: true})
    public loginData!: LoginData
}
